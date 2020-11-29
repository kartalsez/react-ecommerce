import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './sales-basket.scss';
import fontawesome from '@fortawesome/fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';
import SelectedProductItem from './selected-product/selected-product-item';
import { changeAmount } from "../../features/basket-products/basketProductsSlice";
import { createSelector } from "@reduxjs/toolkit";
import { connect } from "react-redux";

const mapDispatch = { changeAmount };

fontawesome.library.add(faShoppingCart);

class SalesBasket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClickClose: true,
            totalPrice: 0.0,
            installmentPrice: 0.0
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.calculateTotalPrice();
        }
    }

    calculateTotalPrice() {
        const totalPrice = this.props.basketProducts && this.props.basketProducts.length > 0 ? this.props.basketProducts
            .reduce((total, val) => total + (val.quantity ? val.quantity * val.price : val.price), 0.0) : 0.0;
        this.setState({totalPrice: totalPrice, installmentPrice: totalPrice / 9});
    }

    onClickAmountChangeButton(type, selectedProduct) {
        let updatedProducts = JSON.parse(JSON.stringify(this.props.basketProducts));
        if (type === '-') {
            updatedProducts = updatedProducts.map(_ => {
                return { ..._, quantity: _.id === selectedProduct.id ? _.quantity - 1 : _.quantity }
            });
        } else if (type === '+') {
            updatedProducts = updatedProducts.map(_ => {
                return { ..._, quantity: _.id === selectedProduct.id ? _.quantity + 1 : _.quantity }
            });
        } else {
            const index = this.props.basketProducts.findIndex(_ => _.id === selectedProduct.id);
            updatedProducts.splice(index, 1);
        }
        this.props.changeAmount(updatedProducts); // store dispatch
    }

    render() {
        const addedProducts = this.props.basketProducts && this.props.basketProducts.length > 0 ? this.props.basketProducts.map((selectedProduct_, index) =>
                <SelectedProductItem
                    selectedProduct={selectedProduct_}
                    key={index}
                    onClickAmountChangeButton={(type) => this.onClickAmountChangeButton(type, selectedProduct_)}>
                </SelectedProductItem>)
            : <p style={{textAlign: "center"}}>Seçili ürün bulunmamaktadır.</p>;

        return (
            <div className={this.state.isClickClose ? "click-close " : "click-open"}>
                <div className="close" onClick={() => this.setState({isClickClose: !this.state.isClickClose})}>
                    {this.state.isClickClose ?
                        <div className="basket-icon">
                            <FontAwesomeIcon icon={"shopping-cart"} size={"2x"}/>
                            <span className="dot">{this.props.basketProducts?.length}</span>
                        </div>
                        :
                        <span>X</span>
                    }
                </div>
                <div className="shopping-card">
                    <header>
                        <div className="basket-icon">
                            <FontAwesomeIcon icon={"shopping-cart"} size={"2x"}/>
                            <span className="dot">{this.props.basketProducts?.length}</span>
                        </div>
                        <span>Cart</span>
                    </header>
                    <section className="product-item">
                        {addedProducts}
                    </section>
                    <footer>
                        <div className="sub">
                            <span className="sub-total">SUBTOTAL</span>
                            <div className="sub-price">
                                <span>$ {this.state.totalPrice.toFixed(2)}</span>
                                <small>OR UP TO 9 x $ {this.state.installmentPrice.toFixed(2)}</small>
                            </div>
                        </div>
                        <button>CHECKOUT</button>
                    </footer>
                </div>
            </div>
        );
    }
}

const selectBasketProducts = state => state.salesBasketProducts.basketProducts

const selectorBasketProducts = createSelector(
    [selectBasketProducts],
    basketProducts => basketProducts
)

const mapStateToProps = state => ({
    basketProducts: selectorBasketProducts(state)
})

export default connect(
    mapStateToProps,
    mapDispatch
)(SalesBasket);
