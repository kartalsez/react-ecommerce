import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './sales-basket.scss';
import fontawesome from '@fortawesome/fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faShoppingCart);
fontawesome.library.add(faTimes);

export class SalesBasket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClickClose: false,
            totalPrice: 0.0
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.calculateTotatlPrice();
        }
    }

    calculateTotatlPrice() {
        const totalPrice = this.props.selectedProducts && this.props.selectedProducts.length > 0 ? this.props.selectedProducts
            .reduce((total, val) => total + (val.quantity ? val.quantity * val.price : val.price), 0.0) : 0.0;
        this.setState({totalPrice: totalPrice});
    }

    render() {
        const addedProducts = this.props.selectedProducts && this.props.selectedProducts.length > 0 ? this.props.selectedProducts.map((selectedProduct_, index) => {
                return <div className="product-row" key={index}>
                            <div className="col-1">
                                <img src={require(`../../static/products/${selectedProduct_.sku}_2.jpg`)} alt={""}/>
                            </div>
                            <div className="col-2">
                                <span>{selectedProduct_.title}</span>
                                <span style={{color: "#5b5a5e"}}>{selectedProduct_.availableSizes.toString()} | {selectedProduct_.style}</span>
                                <span style={{color: "#5b5a5e"}}>Quantity:{selectedProduct_['quantity']}</span>
                            </div>
                            <div className="col-3">
                                <FontAwesomeIcon icon={"times"} cursor={"pointer"} color={"#5b5a5e"} size={"1x"}/>
                                <span style={{color: "#eabf00"}}>{selectedProduct_.currencyFormat + ' '}{selectedProduct_.price.toFixed(2)}</span>
                                <div>
                                    <button onClick={() => this.onClickAmounChangeButton('-')}>-</button>
                                    <button onClick={() => this.onClickAmounChangeButton('+')}>+</button>
                                </div>
                            </div>
                        </div>;
            }) : <p style={{textAlign: "center"}}>Seçili ürün bulunmamaktadır.</p>;

        return (
            <div className={this.state.isClickClose ? "click-close " : "click-open"}>
                <div className="close" onClick={() => this.setState({isClickClose: !this.state.isClickClose})}>
                    {this.state.isClickClose ?
                        <div className="basket-icon">
                            <FontAwesomeIcon icon={"shopping-cart"} size={"2x"}/>
                            <span className="dot">{this.props.selectedProducts?.length}</span>
                        </div>
                        :
                        <span>X</span>
                    }
                </div>
                <div className="shopping-card">
                    <header>
                        <div className="basket-icon">
                            <FontAwesomeIcon icon={"shopping-cart"} size={"2x"}/>
                            <span className="dot">{this.props.selectedProducts?.length}</span>
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
                                <small>OR UP TO 9 x $ 2.21</small>
                            </div>
                        </div>
                        <button>CHECKOUT</button>
                    </footer>
                </div>
            </div>
        );
    }
}
