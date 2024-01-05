import {Component} from "react";
// @ts-ignore
import carrot from "../../../images/products/carrot.png";
import {ModifyCart} from "../ModifyCart/ModifyCart";

interface ProductProps {
    data: any
}

interface ProductState {
    isActive: boolean
}

export class Product extends Component<ProductProps,ProductState> {
    constructor(props: ProductProps) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    render() {
        const {data} = this.props;
        const image = require('../../../images/products/' + data.image);

        return (
            <div className=" w-64 h-72 mr-5 rounded mb-2 justify-center items-center border-black border-[1px]">
                <div>
                    <img className="h-52 m-1" src={image} alt=""/>
                </div>
                <div className="flex justify-center">
                    <div>
                        <h3 className="text-secondary text-[16px] pl-2">{data.name}</h3>
                    </div>
                    <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                        <h3 className="text-[16px] pl-2">{data.price}
                            <small className="text-[10px]">{data.currency}</small></h3>
                    </div>
                </div>
                <div className=" justify-center">
                    {
                        this.state.isActive ?
                            <ModifyCart data={{product: data, isAdded: this.state.isActive}}/>
                            : <button
                                className="w-full h-auto mt-1 p-2 bg-secondary text-[17px] rounded"
                                onClick={this.addToCartOnClick}>
                                Add to Cart
                            </button>
                    }
                </div>
            </div>
        );
    }
    private addToCartOnClick = () => {
        this.setState({isActive: !this.state.isActive}, () => {
            console.log(this.state.isActive);
            // alert(this.state.isActive);
        })
    }
}