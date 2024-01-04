import {Component} from "react";

export class Login extends Component {
    render() {
        return (
            <div className="flex h-screen bg-[#444544] justify-center items-center">
                <div className="h-1/2 w-1/3 mt-4 mb-4 p-5 mx-auto border-gray-500 border-[0.5px] bg-white rounded-xl">
                    <h2 className="text-5xl underline decoration-2 pt-5 pb-10 text-center">Sign In</h2>
                    <form className="h-auto p-2 justify-center">
                        <div className="pb-10 flex flex-row">
                            <label className="text-[18px] basis-1/3">Email :</label>
                            <input className="text-[18px] float-right border-[1px] border-green-200 basis-2/3 rounded" type="email"/>
                        </div>
                        <div className="pb-10 flex flex-row">
                            <label className="text-[18px] basis-1/3">Password :</label>
                            <input className="text-[18px] float-right border-[1px] border-green-200 basis-2/3 rounded" type="password"/>
                        </div>
                        <div className="mt-5 ">
                            <button className="w-full bg-green-400 text-[18px] p-[8px] rounded">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}