import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface ShoppingCartProps {
    itemList: CartItem[];
}


export class ShoppingCart extends Component<ShoppingCartProps> {
    render() {
        return (
            <div className="flex justify-center items-start mt-10 min-h-screen">
                    <table className="w-full mx-6">
                        <tr className="bg-green-700 text-white">
                            <th className="text-[14px] font-bold border-black border-[0.5px] px-1">Id</th>
                            <th className="text-[14px] font-bold border-black border-[0.5px] px-1">Name</th>
                            <th className="text-[14px] font-bold border-black border-[0.5px] px-1">Unit Price</th>
                            <th className="text-[14px] font-bold border-black border-[0.5px] px-1">Qty</th>
                            <th className="text-[14px] font-bold border-black border-[0.5px] px-1">Total Price</th>
                        </tr>

                        {
                            this.props.itemList.length === 0 ?
                                <tr>
                                    <td colSpan={5} className="border-black border-[0.5px] px-1">
                                        <p className="text-center text-[12px]">No Items to Display !</p>
                                    </td>
                                </tr>
                                : this.props.itemList.map((item) =>
                                    <tr className="border-black border-[0.5px] px-1 bg-green-200">
                                        <td className="border-black border-[0.5px] px-1">{item.product.id}</td>
                                        <td className="border-black border-[0.5px] px-1">{item.product.name}</td>
                                        <td className="border-black border-[0.5px] px-1">{item.product.price + ' ' + item.product.currency}</td>
                                        <td className="border-black border-[0.5px] px-1">{item.itemCount}</td>
                                        <td className="border-black border-[0.5px] px-1">{(item.product.price * item.itemCount) + ' ' + item.product.currency}</td>
                                    </tr>
                                )
                        }

                    </table>
            </div>
        );
    }
}