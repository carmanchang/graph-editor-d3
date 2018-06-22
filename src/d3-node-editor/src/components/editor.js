import React,{Component} from 'react';
import { observer, inject } from "mobx-react";
import Node from './node';
// import './editor.styl';


@inject("appState")
@observer
export default class Editor extends Component {
    renderPaths(){
        return this.props.appState.paths.map((path)=>{
            return (
                <path className="connection" d={path.d}>
                </path>
            )
        })
    }
    renderNodes(){
        return this.props.appState.nodes.map((node)=>{
            return (
                <Node node={node}/>
            )
        })
    }
    render(){
        return (
            <div>
                <svg className="connections">
                    {this.renderPaths()}
                </svg>
                {this.renderNodes()}
            </div>
        )
    }
}