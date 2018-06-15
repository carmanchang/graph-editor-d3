import React ,{Component} from 'react';
import { findDOMNode } from 'react-dom';

export default class Node extends Component{
    constructor(props){
        super(props);

        this.state = {
            position:[100,100],
            // mouseStart:null
        }
    }
    componentDidMount(){
        this.position = [0,0];
        this.initDrag();
    }
    initDrag(){
        const el = findDOMNode(this);
        el.addEventListener("mousedown",this.onMouseDown.bind(this));
        window.addEventListener("mousemove",this.onMouseMove.bind(this));
        window.addEventListener("mouseup",this.onMouseUp.bind(this));
    }
    onMouseDown(event){
        event.stopPropagation();
        this.mouseStart = [event.pageX, event.pageY];

        // console.log(this.mouseStart);
        // this.setState({
        //     mouseStart : [event.pageX, event.pageY]
        // })

        // this.onStart();
    }
    onMouseMove(event) {
        if (!this.mouseStart) return;

        event.preventDefault();
        
        let delta = [event.pageX - this.mouseStart[0], event.pageY - this.mouseStart[1]];
        // let zoom = this.el.getBoundingClientRect().width / this.el.offsetWidth;

        this.mouseStart = [event.pageX, event.pageY];

        console.log(this);
        console.log(delta);
        // this.onTranslate(delta[0], delta[1]);
        // this.position = [this.position[0]+dx,this.position[1]+dy]

        // console.log(this.getBoundingClientRect().left,this.getBoundingClientRect().top);

        // var left = this.getBoundingClientRect().left + delta[0];
        // var top = this.getBoundingClientRect().top + delta[1];

        // console.log(left,top)
        // const el = findDOMNode(this);
        // this.style.transform = `translate(${left}px, ${top}px)`
        this.onTranslate(delta[0],delta[1]);
    }
    onMouseUp(event) {
        this.mouseStart = null;
        
        // this.onDrag();
    }
    onTranslate(dx,dy){
        // this.setState({
        //     position:[this.state.position[0]+dx,this.state.position[1]+dy]
        // })
        console.log(dx,dy);
        

        this.position = [this.position[0]+dx,this.position[1]+dy]

        const el = findDOMNode(this);
        el.style.transform = `translate(${this.position[0]}px, ${this.position[1]}px)`
    }
    render(){
        let style = {transform:`translate(${this.state.position[0]}px, ${this.state.position[1]}px)`}
        return(
            <div className="node" 
            >node</div>
        )
    } 
} 