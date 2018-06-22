import {observable,reaction,action} from 'mobx';

export default class NodeModel{
    store;
    id;
    @observable controls = [];
    @observable data = {};
    @observable group;
    @observable height = 100;
    @observable width = 180;
    @observable inputs = [];
    @observable outputs = [];
    @observable position = [0.0,0.0];
    @observable readOnly = false;
    @observable style = {};
    @observable title;

    constructor(store,{id,title,style,position,outputs,inputs,width,height,data,controls,group}){
        this.id = id;
        this.store = store;
        this.title = title;
        this.style = style;
        this.position = position;
        this.outputs = outputs;
        this.inputs = inputs;
        this.width = width;
        this.height = height;

        this.data = data;
        this.controls = controls;
        this.group = group;


    }

    refresh({id,title,style,position,outputs,inputs,width,height,data,controls,group}){
        // this.id = id;
        // this.store = store;
        this.title = title;
        this.style = style;
        this.position = position;
        this.outputs = outputs;
        this.inputs = inputs;
        this.width = width;
        this.height = height;

        this.data = data;
        this.controls = controls;
        this.group = group;


    }

    @action.bound
    setPosition(dx, dy) {
        const extent = this.store.translateExtent;
        const minx = extent[0][0];
        const miny = extent[0][1];
        const maxx = extent[1][0];
        const maxy = extent[1][1];

        this.position[0] = Math.min(maxx, Math.max(minx, this.position[0] + dx));
        this.position[1] = Math.min(maxy, Math.max(miny, this.position[1] + dy));
    }
    
    destroy(){
        this.store.config.remove(this);
    }

    edit(key,value){
        this[key] = value;
    }

    toJS(){
        return {
            title:this.title,
            name:this.name,
            prefix:this.prefix,
            bottomText:this.bottomText,
            width:this.width,
            field:this.field,
            unit:this.unit
        }
    }

    // saveStoreToServer(){
    //     reaction(
    //         ()=>this.title,
    //         title=>{
    //             console.log(title);

    //         }
    //     )
    // }
}