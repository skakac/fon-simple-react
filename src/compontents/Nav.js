import {Component} from "react";
import {NavLink} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div className="bg-teal-500">
                <nav className="container mx-auto flex items-center justify-between flex-wrap p-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <span className="font-semibold text-xl tracking-tight">TravelerApp</span>
                    </div>
                    <div className="w-full block flex-grow flex items-center justify-between lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <NavLink to="/"
                               className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Home
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/contact"
                               className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                                Contact
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Nav;