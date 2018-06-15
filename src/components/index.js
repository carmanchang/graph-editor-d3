import React,{Component} from 'react';
import Node from './node';
import './editor.styl';

export default class Editor extends Component {
    render(){
        return (
            <div className="editor-container">
                <Node />
            </div>
        )
    }
}