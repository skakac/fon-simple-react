import {Component} from "react";
import Input from "./compontents/Input";
import Button from "./compontents/Button";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {email: "", name: "", question: ""};
        this.resetState();
    }

    resetState() {
        this.setState({email: "", name: "", question: ""});
    }

    handleChange(field, event) {
        this.setState({[field]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.email === "" || this.state.name === "" || this.state.question === "") {
            alert("Please fill in all fields!");
            return;
        }

        alert("Contact form submitted, thank you "+this.state.name+", we will get back to you soon!");
        this.resetState();
    }

    render() {
        return (
            <div>
                <div className="inputs w-full max-w-2xl p-6 mx-auto">
                    <h2 className="text-2xl text-gray-900">Contact</h2>
                    <form className="mt-6 border-t border-gray-400 pt-4" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className='flex flex-wrap -mx-3 mb-6'>

                            <Input label="Email Address" placeholder="Your email" value={this.state.email} onChange={(e) => this.handleChange("email", e)} />
                            <Input label="Full name" placeholder="Your name" value={this.state.name} onChange={(e) => this.handleChange("name", e)}/>
                            <Input label="Question" placeholder="" type="textarea" value={this.state.question} onChange={(e) => this.handleChange("question", e)}/>

                            <div className='w-full md:w-full px-3 mb-6'>
                                <Button type="submit" text="Submit question"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
