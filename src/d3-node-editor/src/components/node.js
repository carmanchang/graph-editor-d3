import React,{Component} from 'react';
import { findDOMNode } from 'react-dom';
import { observer, inject } from "mobx-react";
import * as d3 from 'd3';

@inject("appState")
@observer
export default class Editor extends Component {
    constructor(props, context) {
        super(props, context);
        
    }
    componentDidMount() {
        this.init();
    }
    setPosition(item, dx, dy) {
        const {editorView} = this.props.appState;
        const extent = editorView.editor.view.translateExtent;
        const minx = extent[0][0];
        const miny = extent[0][1];
        const maxx = extent[1][0];
        const maxy = extent[1][1];

        item.position[0] = Math.min(maxx, Math.max(minx, item.position[0] + dx));
        item.position[1] = Math.min(maxy, Math.max(miny, item.position[1] + dy));
    }
    init(){
        const {editorView} = this.props.appState;
        const {node} = this.props;
        const el = findDOMNode(this);
        d3.select(el).call(
            d3.drag().on('start', () => {
                d3.select(el).raise();
                if (!d3.event.sourceEvent.shiftKey)
                editorView.editor.selectNode(node, d3.event.sourceEvent.ctrlKey);
            }).on('drag', () => {
                if (editorView.editor.readOnly || node.readOnly) return;
    
                var k = editorView.transform.k;
                var dx = d3.event.dx / k;
                var dy = d3.event.dy / k;
    
                editorView.editor.selected.each(item => {
                    item.setPosition(dx, dy);
                });
    
                editorView.editor.selected.eachGroup(item => {
                    for (var i in item.nodes) {
                        let _node = item.nodes[i];
    
                        if (editorView.editor.selected.contains(_node))
                            continue;    
    
                        this.setPosition( _node, dx, dy);
                    }
                });
                
                editorView.update();
            }).on('end', () => {
                editorView.editor.groups.forEach(group => {
                    editorView.editor.selected.eachNode(_node => {
                        var contain = group.containNode(_node);
                        var cover = group.isCoverNode(_node);
    
                        if (contain && !cover)
                            group.removeNode(_node);
                        else if (!contain && cover)
                            group.addNode(_node);
                    });
                });
    
                editorView.editor.eventListener.trigger('change');
                editorView.update();
            })
        );
    }
    interceptInput(input) {
        const {editorView} = this.props.appState;
        if (editorView.pickedOutput === null) {
            if (input.hasConnection()) {
                editorView.pickedOutput = input.connections[0].output;
                editorView.editor.removeConnection(input.connections[0]);
            }
            editorView.update();
            return true;
        }
    }
    prepareConnection(input) {
        const {editorView} = this.props.appState;
        // if (!input.multipleConnections && input.hasConnection())
        //     this.editor.removeConnection(input.connections[0]);
        
        if (!editorView.pickedOutput.multipleConnections && editorView.pickedOutput.hasConnection())
            editorView.editor.removeConnection(editorView.pickedOutput.connections[0]);
        
        if (editorView.pickedOutput.connectedTo(input)) {
            var connection = input.connections.find(c => c.output === this.pickedOutput);

            editorView.editor.removeConnection(connection);
        }

        editorView.editor.connect(editorView.pickedOutput, input);
    }
    onPickOutPut(output,event){
        const {editorView} = this.props.appState;
        if(editorView.editor.readOnly)return;

        event.stopPropagation();

        editorView.pickedOutput = output;
    }
    onPickInPut(input,event){
        const {editorView} = this.props.appState;
        if (editorView.editor.readOnly) return;
        d3.event.preventDefault();
        d3.event.stopPropagation();
        
        if (this.interceptInput(input)) return;
        prepareConnection.call(this);

        editorView.pickedOutput = null;
    
        editorView.update();
    }
    renderOutputs(){
        return this.props.node.outputs.map((output)=>{
            return (
                <div>
                    <div className="output-title"></div>
                    <div className="socket output" onMouseDown={this.onPickOutPut.bind(this,output)}></div>
                </div>
            )
        })
    }
    renderInputs(){
        return this.props.node.inputs.map((input)=>{
            return (
                <div>
                    <div className="socket input"
                        onMouseDown={this.onPickInPut.bind(this,input)}
                        onMouseUp={this.onPickInPut.bind(this,input)}
                    ></div>
                    <div className="input-title"></div>
                </div>
            )
        })
    }
    render(){
        const {node} = this.props;
        let style = {
            transform:`translate(${node.position[0]}px,${node.position[1]}px)`
        }
        return (
            <div className="node" style={style}>
                <div className="title">
                    {node.title}
                </div>
                {this.renderOutputs()}
                {this.renderInputs()}
            </div>
        )
    }
}