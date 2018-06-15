import React ,{Component} from 'react';
import * as d3 from 'd3';

export default class Node extends Component{
    constructor(props){
        super(props);

        this.state = {
            position:[100,100],
            // mouseStart:null
        }
    }
    componentDidMount(){
        this.initSVG();
    }
    initSVG(){
        const svg = d3.select('svg')
            .attr('oncontextmenu', 'return false;')
            .attr('width', width)
            .attr('height', height);
    }
    render(){
        let style = {transform:`translate(${this.state.position[0]}px, ${this.state.position[1]}px)`}
        return(
            <svg></svg>
        )
    } 
} 