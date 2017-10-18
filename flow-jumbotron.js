(function (manywho) {

     function getStringAttribute(attributes, name) {
        if (attributes != null &&
            attributes[name] != null) {
            return attributes[name];
        }
        return null;
    }

    function getNumberAttribute(attributes, name) {
        if (getStringAttribute(attributes, name) != null) {
            return parseInt(getStringAttribute(attributes, name));
        }
        return 0;
    }

    var flowjumbotron = React.createClass({

        componentDidMount: function () {
            
            var model = manywho.model.getComponent(this.props.id, this.props.flowKey);
            var cont = document.getElementById(this.props.id+"_content");
            var btnStyle = " ";

            cont.innerHTML = model.content;
           
            if (getStringAttribute(model.attributes, 'background_image') != null) {
                document.getElementById(this.props.id).style.backgroundSize = "cover";
                document.getElementById(this.props.id).style.backgroundImage = "url("+getStringAttribute(model.attributes, 'background_image')+")";
            }

            if (getStringAttribute(model.attributes, 'text_color') != null) {
                document.getElementById(this.props.id).style.color = getStringAttribute(model.attributes, 'text_color');
            }

            if (getStringAttribute(model.attributes, 'text_align') != null) {
                document.getElementById(this.props.id).style.textAlign = getStringAttribute(model.attributes, 'text_align');
            }

            
            if(getStringAttribute(model.attributes, 'button_style') != null){
                btnStyles = " " + getStringAttribute(model.attributes, 'button_style');
            } else {
                btnStyle = " btn-primary";
            }

            if(getStringAttribute(model.attributes, 'button_size') != null){
                btnStyles += " " + getStringAttribute(model.attributes, 'button_size');
            } else {
                btnStyle += " btn-lg";
            }

            if (getStringAttribute(model.attributes, 'button_text') != null) {               
                document.getElementById(this.props.id + "_button").innerHTML = "<a target='_blank' href="+getStringAttribute(model.attributes, 'button_link')+" class='btn"+btnStyles+"'>"+getStringAttribute(model.attributes, 'button_text')+"</a>";
            }

        },
               
        render: function () {
         
            var model = manywho.model.getComponent(this.props.id, this.props.flowKey);
            var state = manywho.state.getComponent(this.props.id, this.props.flowKey);

            return React.DOM.div(null, [ 
                React.createElement('div', { id: this.props.id , className: 'jumbotron' }, 
                    React.createElement('h1', {}, model.label),
                    React.createElement('span', {id:this.props.id + "_content"}),
                    React.createElement('p', {id:this.props.id + "_button"}),
                ),
            ]);
            
        }

    });
 
    manywho.component.register('flow_jumbotron', flowjumbotron, [ 'flowjumbotron' ]);


}(manywho));