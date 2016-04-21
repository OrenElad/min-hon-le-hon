var React = require('react');
var ReactDom =  require('react-dom');
var ReactMDL = require('react-mdl');

var FABButton = ReactMDL.FABButton;
var Icon = ReactMDL.Icon;

const {
    Component
    } = React;

class MainComponent extends Component {

    onclick(){
        return console.log("onClick")
    }
    render() {
        console.log("render");
        return (
                <div>
                    <FABButton colored>
                        <Icon name="add" />
                    </FABButton>
                </div>
        )
        console.log(222);
    }

}
ReactDom.render(<MainComponent/>, document.getElementById('app'));
