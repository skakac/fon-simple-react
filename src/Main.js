import {Component} from "react";
import Button from "./compontents/Button";
import TravelStop from "./compontents/TravelStop";


class Main extends Component {
    constructor() {
        super();

        let list = localStorage.getItem('list');
        list = list ? JSON.parse(list).filter(stop => stop) : [];

        const total = this.countTotal(list);
        this.state = {total, list};

        document.title = "TravelApp | Home"
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
    }

    editStop(i, stop) {
        let list = this.state.list;
        list[i] = stop;

        const total = this.countTotal(list);
        this.setState({list, total});
        localStorage.setItem('list', JSON.stringify(list));
    }

    removeStop(i) {
        let list = this.state.list;

        console.log(i, this.state.list);

        delete list[i];

        const total = this.countTotal(list);

        this.setState({total, list});

        localStorage.setItem('list', JSON.stringify(list));
    }

    countTotal(list) {
        let total = 0;
        list.forEach((stop) => stop ? total += stop.totalPrice : null);
        return total;
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
