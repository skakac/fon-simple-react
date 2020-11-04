import {Component} from "react";
import Button from "./compontents/Button";
import TravelStop from "./compontents/TravelStop";


class Main extends Component {
    constructor() {
        super();
        this.state = {total: 0, list: []};
    }

    addStop() {
        let list = this.state.list;

        list = list.concat({
            city: "",
            days: 0,
            dayPrice: 0,
            totalPrice: 0,
            editing: true,
        });

        this.setState({list});
        console.log(list);
    }

    editStop(i, stop) {
        let total = 0;
        let list = this.state.list;
        console.log("editStop", i, stop);
        list[i] = stop;


        list.forEach((stop) => total += stop.totalPrice);
        console.log("total", total);
        this.setState({list, total});
    }

    removeStop(i) {
        let list = this.state.list;
        delete list[i];
        this.setState({list});
    }

    render() {
        return (
            <div>
                <div className="inputs w-full max-w-2xl p-6 mx-auto">
                    <h2 className="text-2xl text-gray-900">Track your travel plan expenses</h2>
                    <div className="my-6 border-t border-b border-gray-400 py-4 flex justify-between items-center">
                        <div>Total expense: {this.state.total} RSD</div>
                        <Button type="button" text="Add travel stop" onClick={(e) => this.addStop()}/>
                    </div>
                    <div>
                        {this.state
                            .list
                            .map(
                                (stop, i) =>
                                    <TravelStop
                                        key={i} id={i}
                                        stop={stop}
                                        onSave={(i, stop) => this.editStop(i, stop)}
                                        onRemove={(i) => this.removeStop(i)}/>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
