import {Component} from "react";
// @ts-ignore
import spinach from "../../../images/products/spinach.png";
// @ts-ignore
import tomato from "../../../images/products/tomato.png";
// @ts-ignore
import beans from "../../../images/products/beans.png";

export class Home extends Component {
    render() {
        return (
            <div className="flex">
                <div className=" mt-5 mb-5 flex flex-wrap justify-center items-center mx-auto ">
                    <div className=" w-64 h-72 mr-5 rounded mb-2 justify-center items-center border-black border-[1px]">
                        <div>
                            <img className="h-52 m-1" src={spinach} alt=""/>
                        </div>
                        <div className="flex justify-center">
                            <div>
                                <h3 className="text-secondary text-[16px] pl-2">Spinach</h3>
                            </div>
                            <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                                <h3 className="text-[16px] pl-2">200
                                    <small className="text-[10px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className=" justify-center">
                            <button className="w-full h-auto mt-1 p-2 bg-secondary text-[17px] rounded">Add to Cart
                            </button>
                        </div>
                    </div>

                    <div className=" w-64 h-72 mr-5 rounded mb-2 justify-center items-center border-black border-[1px]">
                        <div>
                            <img className="h-52 m-1" src={tomato} alt=""/>
                        </div>
                        <div className="flex justify-center">
                            <div>
                                <h3 className="text-secondary text-[16px] pl-2">Tomato</h3>
                            </div>
                            <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                                <h3 className="text-[16px] pl-2">300
                                    <small className="text-[10px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className=" justify-center">
                            <button className="w-full h-auto mt-1 p-2 bg-secondary text-[17px] rounded">Add to Cart
                            </button>
                        </div>
                    </div>

                    <div className=" w-64 h-72 mr-5 rounded mb-2 justify-center items-center border-black border-[1px]">
                        <div>
                            <img className="h-52 m-1" src={beans} alt=""/>
                        </div>
                        <div className="flex justify-center">
                            <div>
                                <h3 className="text-secondary text-[16px] pl-2">Beans</h3>
                            </div>
                            <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                                <h3 className="text-[16px] pl-2">250
                                    <small className="text-[10px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className=" justify-center">
                            <button className="w-full h-auto mt-1 p-2 bg-secondary text-[17px] rounded">Add to Cart
                            </button>
                        </div>
                    </div>

                    <div className=" w-64 h-72 mr-5 rounded mb-2 justify-center items-center border-black border-[1px]">
                        <div>
                            <img className="h-52 m-1" src={tomato} alt=""/>
                        </div>
                        <div className="flex justify-center">
                            <div>
                                <h3 className="text-secondary text-[16px] pl-2">Tomato</h3>
                            </div>
                            <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                                <h3 className="text-[16px] pl-2">300
                                    <small className="text-[10px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className=" justify-center">
                            <button className="w-full h-auto mt-1 p-2 bg-secondary text-[17px] rounded">Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className=" w-64 h-72 mr-5 rounded mb-2 justify-center items-center border-black border-[1px]">
                        <div>
                            <img className="h-52 m-1" src={spinach} alt=""/>
                        </div>
                        <div className="flex justify-center">
                            <div>
                                <h3 className="text-secondary text-[16px] pl-2">Spinach</h3>
                            </div>
                            <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                                <h3 className="text-[16px] pl-2">200
                                    <small className="text-[10px]">LKR</small></h3>
                            </div>
                        </div>
                        <div className=" justify-center">
                            <button className="w-full h-auto mt-1 p-2 bg-secondary text-[17px] rounded">Add to Cart
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}