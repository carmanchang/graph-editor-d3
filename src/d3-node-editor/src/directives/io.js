import * as d3 from 'd3';

export function PickInput(scope, el, expression, env) {
    var input = env.changeDetector.locals.input;

    function interceptInput() {
        if (this.pickedOutput === null) {
            if (input.hasConnection()) {
                this.pickedOutput = input.connections[0].output;
                this.editor.removeConnection(input.connections[0]);
            }
            this.update();
            return true;
        }
    }

    function prepareConnection() {
        // if (!input.multipleConnections && input.hasConnection())
        //     this.editor.removeConnection(input.connections[0]);
        
        if (!this.pickedOutput.multipleConnections && this.pickedOutput.hasConnection())
            this.editor.removeConnection(this.pickedOutput.connections[0]);
        
        if (this.pickedOutput.connectedTo(input)) {
            var connection = input.connections.find(c => c.output === this.pickedOutput);

            this.editor.removeConnection(connection);
        }

        this.editor.connect(this.pickedOutput, input);
    }

    input.el = el;

    let prevent = false;

    d3.select(el).on('mouseleave', () => prevent = false);
    d3.select(el).on('mousedown mouseup', () => {
        if (this.editor.readOnly || prevent) return;
        d3.event.preventDefault();
        d3.event.stopPropagation();
        
        if (interceptInput.call(this)) return;
        prepareConnection.call(this);

        this.pickedOutput = null;
    
        this.update();
    });
    d3.select(el).on('mousedown.prevent', () => prevent = true);
}

export function PickOutput(scope, el, expression, env) {
    var output = env.changeDetector.locals.output;

    output.el = el;

    d3.select(el).on('mousedown', () => {
        if (this.editor.readOnly) return;
        d3.event.stopPropagation();

        this.pickedOutput = output;
    });
}