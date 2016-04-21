var React = require('react');
var ReactDom = require('react-dom');

const {
    Component
    } = React;
class MainComponent extends Component {

    render() {
        return (
            <div>
                <h1>Main Component!</h1>
            </div>
        )
    }

}
ReactDom.render(<MainComponent/>, document.getElementById('app'));
