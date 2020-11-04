import {Component} from "react";

class Button extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClick ? this.props.onClick : null}
                className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                type={this.props.type}>{this.props.text}
            </button>
        )
    }
}

export default Button;
