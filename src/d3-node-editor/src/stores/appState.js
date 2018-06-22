import { observable, action } from "mobx";
import Node from './nodeModel';

export default class AppState {
    @observable translateExtent = [[-4096,-4096],[4096,4096]];
    @observable editor;
    @observable pickedOutput;
    @observable mouse=[0,0];
    @observable transform = d3.zoomIdentity;
    @observable container;
    @observable contextMenu;
    @observable nodes = [];
    @observable paths = [];
    @observable editorView;
  
    constructor(editor,container,contextMenu) {
        this.editor = editor;
        this.container = container;
        this.contextMenu = contextMenu;
    }
  
    @action.bound
    initNodes(nodes) {
        nodes.forEach((node)=>{
            let obj = this.nodes.find(item=>item.id === node.id);
            if(obj){
                // obj.refresh(node);
            }else{
                this.nodes.push(new Node(this,node))
            }
        })
    }
  }