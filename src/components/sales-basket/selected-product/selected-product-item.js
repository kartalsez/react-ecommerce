import React from 'react';
import './selected-product-item.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import { faTimes } from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faTimes);


const SelectedProductItem = (props) => {
    return (
        <div className="product-row">
            <div className="col-1">
                <img src={require(`../../../static/products-collins/${props.selectedProduct.sku}_2.jpeg`)} alt={""}/>
            </div>
            <div className="col-2">
                <span>{props.selectedProduct.title}</span>
                <span style={{color: "#5b5a5e"}}>{props.selectedProduct.availableSizes.toString()} | {props.selectedProduct.style}</span>
                <span style={{color: "#5b5a5e"}}>Quantity:{props.selectedProduct['quantity']}</span>
            </div>
            <div className="col-3">
                <FontAwesomeIcon onClick={() => props.onClickAmountChangeButton('x')} icon={"times"} cursor={"pointer"} color={"#5b5a5e"} size={"1x"}/>
                <span style={{color: "#eabf00"}}>{props.selectedProduct.currencyFormat + ' '}{props.selectedProduct.price.toFixed(2)}</span>
                <div>
                    <button disabled={props.selectedProduct.quantity === 1} onClick={() => props.onClickAmountChangeButton('-')}>-</button>
                    <button onClick={() => props.onClickAmountChangeButton('+')}>+</button>
                </div>
            </div>
        </div>
    );
}

export default SelectedProductItem;
