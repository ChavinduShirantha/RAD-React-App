import {Component} from "react";
import axios from "axios";

interface ContactProps {
    data: any
}

interface ContactState {
    email: string,
    subject: string,
    message: string
}


export class Contact extends Component<ContactProps, ContactState> {
    private api: any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            email: '',
            subject: '',
            message: ''
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

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
                            <input className="text-[16px] float-right border-[1px] border-green-400 basis-2/3 rounded"
                                   type="text" name="email"
                                   value={this.state.email}
                                   // @ts-ignore
                                   onChange={this.handleMessageInputOnChange}/>
                        </div>
                        <div className="pb-2 flex flex-row">
                            <label className="text-[16px] basis-1/3">Your Subject :</label>
                            <input className="text-[16px] float-right border-[1px] border-green-400 basis-2/3 rounded"
                                   type="text" name="subject"
                                   value={this.state.subject}
                                   // @ts-ignore
                                   onChange={this.handleMessageInputOnChange}/>
                        </div>
                        <div className="pb-2 flex flex-row">
                            <label className="text-[16px] basis-1/3">Your Message :</label>
                            <textarea
                                className="h-24 text-[16px] float-right border-[1px] border-green-400 basis-2/3
                                rounded resize-none" name="message"
                                value={this.state.message}
                                // @ts-ignore
                                onChange={this.handleMessageInputOnChange}/>
                        </div>

                        <div className="mt-2 float-right">
                            <button type="button"
                                    className="mt-5 pl-5 pr-5 pt-2 pb-2 text-white bg-green-400 text-[16px] rounded hover:text-tertiary"
                                    onClick={this.onSendBtnClick}>Sent Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    handleMessageInputOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        // @ts-ignore
        this.setState({
            [name]: value
        });
    }
    private onSendBtnClick = () => {
        try {
            this.api.post('/contact/submit',{
                email:this.state.email,
                subject:this.state.subject,
                message:this.state.message
            }).then((res:{data:any})=>{
                const jsonData=res.data;
                // @ts-ignore
                alert(jsonData);
            }).catch((error:any)=>{
                console.error('Axios Error',error);
            });
        }catch (error){
            console.error('Error Submitting Data',error);
        }
    }
}
