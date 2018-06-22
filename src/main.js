import * as D3NE from './d3-node-editor/src/index.js';
import './d3-node-editor/src/styles/index.sass';


var numSocket = new D3NE.Socket("number", "Number value", "hint");

var componentNum = new D3NE.Component("Node", {
    builder(node) {
        var inp1 = new D3NE.Input("", numSocket);
        var out1 = new D3NE.Output("", numSocket);
        var numControl = new D3NE.Control('<input type="text">',
            (el, c) => {
                el.value = c.getData('num') || 1;
            
                function upd() {
                  c.putData("num", parseFloat(el.value));
                }

                el.addEventListener("input", ()=>{
                  upd();
                  editor.eventListener.trigger("change");
                });
                el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
                upd();
            }
        );

        return node
        // .addControl(numControl)
        .addOutput(out1)
        .addInput(inp1);
    },
    worker(node, inputs, outputs) {
        outputs[0] = node.data.num;
        //console.log('input: '+node.data.num)
    }
});

var componentAdd = new D3NE.Component("Add", {
builder(node) {
    var inp1 = new D3NE.Input("Number", numSocket);
    var inp2 = new D3NE.Input("Number", numSocket);
    var out = new D3NE.Output("Number", numSocket);

    var numControl = new D3NE.Control(
        '<input readonly type="number">',
        (el, control) => {
            control.setValue = val => {
            el.value = val;
            };
        }
    );

    var numControlInp = new D3NE.Control(
        '<input type="number">',
        (el, control) => {
            control.setValue = val => {
            el.value = val;
            };
        }
    );
    inp1.addControl(numControlInp)
    inp2.addControl(numControlInp)

    return node
        .addInput(inp1)
        .addInput(inp2)
        .addControl(numControl)
        .addOutput(out);
},
worker(node, inputs, outputs) {
    var sum = inputs[0][0] + inputs[1][0];
    editor.nodes.find(n => n.id == node.id).controls[0].setValue(sum);
    outputs[0] = sum;
    //console.log('sum: '+sum)
},
created(node){
    console.log('created', node)
},
destroyed(node){
    console.log('destroyed', node)
}
});


var components = [componentNum, componentAdd];
var menu = new D3NE.ContextMenu({num: {blabla: components[0]}, add: components[1]})
var container = document.getElementById("nodeEditor");
var editor = new D3NE.NodeEditor("demo@0.1.0", container, components, menu);

var nn = componentNum.newNode();
nn.data.num = 2;
var n1 = componentNum.builder(nn);
var n2 = componentNum.builder(componentNum.newNode());
var n3 = componentNum.builder(componentNum.newNode());
// var add = componentAdd.builder(componentAdd.newNode());

n1.position = [180, 200];
n2.position = [0, 400];
n3.position = [360, 400];
// add.position = [500, 0];

editor.connect(n1.outputs[0], n2.inputs[0]);
editor.connect(n1.outputs[0], n3.inputs[0]);


// add.position = [500, 240];
editor.addNode(n1);
editor.addNode(n2);
editor.addNode(n3);
// editor.addNode(add);
//  editor.selectNode(tnode);

var engine = new D3NE.Engine("demo@0.1.0", components);

editor.eventListener.on("groupcreate", g => {
    g.style.background = "red";
});
editor.eventListener.on("change", async function() {
    await engine.abort();
    await engine.process(editor.toJSON(), 1);
});

editor.view.zoomAt(editor.nodes);
editor.eventListener.trigger("change");
editor.view.resize();
