import {Component} from "react";
import Input from "./Input";

class TravelStop extends Component {
    constructor(props) {
        super();
        const stop = props.stop;
        this.state = {
            city: stop.city,
            days: stop.days,
            dayPrice: stop.dayPrice,
            totalPrice: stop.totalPrice,
            editing: stop.editing,
        }
    }

    edit() {
        this.setState({editing: true});
    }

    save() {
        if (this.state.city === "") {
            alert("Please enter city name");
            return;
        }

        this.setState(
            {totalPrice: this.state.days*this.state.dayPrice, editing: false},
            () => this.props.onSave(this.props.id, this.state)
        )
    }

    remove() {
        this.props.onRemove(this.props.id);
    }

    handleChange(field, event) {
        let value = event.target.value;
        if (['days', 'dayPrice'].includes(field)) {
            value = parseInt(value);
            if (value < 0) {
                value = 0;
            }
        }
        this.setState({[field]: value});
    }

    render() {
        if (this.state.editing) {
            return (
                <div className="shadow-lg border border-gray-200 rounder w-full p-3 mb-3 bg-gray-100">
                    <div className="flex items-center flex-grow justify-between items-center pb-2">
                        <div className="font-bold">
                            <Input label="City" placeholder="City name" value={this.state.city} onChange={(e) => this.handleChange("city", e)}/>
                        </div>
                        <div
                            onClick={(e) => this.save()}
                            className="cursor-pointer max-w-xs py-1 px-3 bg-gray-300">
                            Save
                        </div>
                    </div>
                    <div className="flex items-center flex-grow justify-between items-center">
                        <div>
                            <Input label="Days" placeholder="Number of days" type="number" value={this.state.days} onChange={(e) => this.handleChange("days", e)}/>
                        </div>
                        <div>
                            <Input label="Price per day" placeholder="Price" type="number" value={this.state.dayPrice} onChange={(e) => this.handleChange("dayPrice", e)}/>
                        </div>
                        <div
                            onClick={(e) => this.remove()}
                            className="cursor-pointer max-w-xs py-1 px-3 bg-gray-300">
                            Remove
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="shadow-lg border border-gray-200 rounder w-full p-3 mb-3">
                <div className="flex items-center flex-grow justify-between items-center pb-2">
                    <div className="font-bold">{this.state.city}</div>
                    <div
                        onClick={(e) => this.edit()}
                        className="cursor-pointer max-w-xs py-1 px-3 bg-gray-300">
                        Edit
                    </div>
                </div>
                <div className="flex items-center flex-grow justify-between items-center">
                    <div>{this.state.days} days</div>
                    <div className="bold">{this.state.totalPrice} RSD</div>
                </div>
            </div>
        )
    }
}

export default TravelStop;
