import React, { Component } from 'react';
import './App.scss';
import Filter from './components/filters/filters';
import Products from "./components/products/products";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faShoppingCart);

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            filteredSizes: []
        };
    }

    filterChange = (checkedSizes) => {
        this.setState({
            filteredSizes: checkedSizes
        });
    };

    render() {
        return (
            <div className="App">
                <main>
                    <Filter filterChange={this.filterChange} ></Filter>
                    <Products filteredSizes={this.state.filteredSizes}></Products>
                </main>
                <nav>
                    <div className="close">
                        <span>X</span>
                    </div>
                    <div className="shopping-card">
                        <header>
                            <div>
                                <FontAwesomeIcon icon={"shopping-cart"} size={"2x"}/>
                                <span className="dot">5</span>
                            </div>
                            <span>Cart</span>
                        </header>
                        <section className="product-row">
                            <div className="product-row">
                                <div className="col-1">
                                    <img src={require(`./static/products/100_2.jpg`)} alt={""} />
                                </div>
                                <div className="col-2">
                                    col2
                                </div>
                                <div className="col-3">
                                    col3
                                </div>
                            </div>

                            <div className="product-row">
                                <div className="col-1">
                                    <img src={require(`./static/products/100_2.jpg`)} alt={""} />
                                </div>
                                <div className="col-2">
                                    col2
                                </div>
                                <div className="col-3">
                                    col3
                                </div>
                            </div>

                            <div className="product-row">
                                <div className="col-1">
                                    <img src={require(`./static/products/100_2.jpg`)} alt={""} />
                                </div>
                                <div className="col-2">
                                    col2
                                </div>
                                <div className="col-3">
                                    col3
                                </div>
                            </div>

                            <div className="product-row">
                                <div className="col-1">
                                    <img src={require(`./static/products/100_2.jpg`)} alt={""} />
                                </div>
                                <div className="col-2">
                                    col2
                                </div>
                                <div className="col-3">
                                    col3
                                </div>
                            </div>

                            <div className="product-row">
                                <div className="col-1">
                                    <img src={require(`./static/products/100_2.jpg`)} alt={""} />
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
                </nav>
            </div>
    );
    }
}

export default App;
