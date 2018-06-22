import { Node } from './node';

export class Control {

    constructor(html: string, handler = () => { }) {
        this.html = html;
        this.parent = null;
        this.handler = handler;
    }

    getNode() {
        if (this.parent === null)
            throw new Error("Control isn't added to Node/Input");   
        
        return this.parent instanceof Node ? this.parent : this.parent.node;
    }

    getData(key) {
        return this.getNode().data[key];
    }

    putData(key, data) {
        this.getNode().data[key] = data;
    }  
}