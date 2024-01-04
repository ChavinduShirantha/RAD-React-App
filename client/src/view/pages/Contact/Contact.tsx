import {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <div className="flex">
                <div className="h-auto pt-5 pb-5 pl-10 pr-10 mx-auto">
                    <div className="p-2">
                        <h2 className="text-5xl
                                       text-green-400
                                       text-center
                                       underline
                                       decoration-2
                                       font-bold">Contact Us</h2>
                        <p className="pt-5 pb-3 text-[16px]">Got a technical issue?
                            Want to contact us?
                            Please let us assist you...</p>
                    </div>


                    <form className="h-auto p-2 justify-center">
                        <div className="pb-2 flex flex-row">
                            <label className="text-[16px] basis-1/3">Your Email :</label>
                            <input className="text-[16px] float-right border-[1px] border-green-400 basis-2/3 rounded" type="text"/>
                        </div>
                        <div className="pb-2 flex flex-row">
                            <label className="text-[16px] basis-1/3">Your Subject :</label>
                            <input className="text-[16px] float-right border-[1px] border-green-400 basis-2/3 rounded" type="text"/>
                        </div>
                        <div className="pb-2 flex flex-row">
                            <label className="text-[16px] basis-1/3">Your Message :</label>
                            <textarea className="h-24 text-[16px] float-right border-[1px] border-green-400 basis-2/3 rounded resize-none"/>
                        </div>

                        <div className="mt-2 float-right">
                            <button type="button" className="mt-5 pl-5 pr-5 pt-2 pb-2 text-white bg-green-400 text-[16px] rounded hover:text-tertiary">Sent Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}