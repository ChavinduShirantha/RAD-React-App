import {Component} from "react";
// @ts-ignore
import logo from "../../../images/icon.png"

export class Footer extends Component {
    render() {
        return (
            <div className="p-5 bg-[#444544] flex
                            justify-center items-center">

                <p className="text-[14px] text-[#e6f0e6]
                              pr-2 hover:text-green-400">
                    Copyright @ 2023</p>

                <div className="flex">
                    <h1 className="text-2xl text-secondary">
                        Organic Shop</h1>
                    <img className="h-10 w-10 top-0 ml-1"
                         src={logo} alt=""/>
                </div>

            </div>
        );
    }
}