import {Component} from "react";

class Input extends Component {
    render() {
        return (
            <div className='w-full md:w-full px-3 mb-6'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                       htmlFor='grid-text-1'>{this.props.label}</label>
                {this.props.type === "textarea" ? (
                        <textarea
                            value={this.props.value} onChange={this.props.onChange ? this.props.onChange : null}
                            className='bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'
                            required />
                ) : (
                    <input
                        value={this.props.value} onChange={this.props.onChange ? this.props.onChange : null}
                        className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                        id='grid-text-1' type={this.props.type === "number" ? "number" : "text" } placeholder={this.props.placeholder} required />
                )}
            </div>
        )
    }
}

export default Input;
