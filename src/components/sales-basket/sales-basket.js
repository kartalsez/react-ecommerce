import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './sales-basket.scss';
import fontawesome from '@fortawesome/fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faShoppingCart);

export class SalesBasket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isClickClose: false
        };
    }

    render() {

        return (
            <div className={this.state.isClickClose ? "click-close " : "click-open"}>
                <div className="close" onClick={() => this.setState({isClickClose: !this.state.isClickClose})}>
                    {this.state.isClickClose ?
                        <div className="basket-icon">
                            <FontAwesomeIcon icon={"shopping-cart"} size={"2x"}/>
                            <span className="dot">5</span>
                        </div>
                        :
                        <span>X</span>
                    }
                </div>
                <div className="shopping-card">
                    <header>
                        <div className="basket-icon">
                            <FontAwesomeIcon icon={"shopping-cart"} size={"2x"}/>
                            <span className="dot">5</span>
                        </div>
                        <span>Cart</span>
                    </header>
                    <section className="product-row">
                        <div className="product-row">
                            <div className="col-1">
                                <img src={require(`../../static/products/100_2.jpg`)} alt={""}/>
                            </div>
                            <div className="col-2">
                                col2
                            </div>
                            <div className="col-3">
                                col3
                            </div>
                        </div>
                    </section>
                    <footer>
                        <div className="sub">
                            <span className="sub-total">SUBTOTAL</span>
                            <div className="sub-price">
                                <span>$ 19.90</span>
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
