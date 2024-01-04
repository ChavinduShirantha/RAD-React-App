import {Component} from "react";
// @ts-ignore
import logo from "../../../images/icon.png"
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div className="p-4 bg-[#444544] flex justify-between">
                <Link to="/">
                    <div className="flex">
                        <h1 className="text-2xl font-bold text-secondary">
                            Organic Shop</h1>
                        <img className="h-10 w-10 ml-1" src={logo}
                             alt=""/>
                    </div>
                </Link>

                <ul className="list-none flex mt-1">
                    <li className="mr-4 text-[18px] font-bold text-[#e6f0e6] hover:text-green-400">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-4 text-[18px] font-bold text-[#e6f0e6] hover:text-green-400">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="mr-4 text-[18px] font-bold text-[#e6f0e6] hover:text-green-400">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mr-2 text-[18px] font-bold text-[#e6f0e6] hover:text-green-400">
                        <Link to="/shoppingCart">My Cart</Link>
                    </li>
                </ul>

                <button className="text-[16px] text-[#e6f0e6]
                                   bg-green-400 pl-5 pr-5
                                   hover:text-tertiary rounded-xl">
                    Sign In
                </button>
            </div>
        );
    }
}