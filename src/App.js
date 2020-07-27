import React, { Component } from 'react';
import './App.scss';
import Filter from './components/filters/filters';
import Products from "./components/products/products";
import { SalesBasket } from "./components/sales-basket/sales-basket";

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            filteredSizes: [],
            selectedProducts: []
        };
    }

    filterChange = (checkedSizes) => {
        this.setState({
            filteredSizes: checkedSizes
        });
    };

    addProduct = (product) => {
        if (this.state.selectedProducts.find(_ => _.id === product.id)) {
            this.setState({
                selectedProducts: this.state.selectedProducts.map(_ => {
                    return {..._, quantity: _.id === product.id ? _.quantity + 1 : _.quantity};
                })
            });
        } else {
            product['quantity'] = 1;
            this.state.selectedProducts.push(product);
            this.setState({selectedProducts: this.state.selectedProducts});
        }

    }

    updatedAmount = (updatedProductList) => {
        this.setState({selectedProducts: updatedProductList});
    }

    render() {
        return (
            <div className="App">
                <main>
                    <Filter filterChange={this.filterChange} ></Filter>
                    <Products filteredSizes={this.state.filteredSizes} addProduct={this.addProduct}></Products>
                </main>
                <nav>
                    <SalesBasket selectedProducts={this.state.selectedProducts} updatedAmount={this.updatedAmount}></SalesBasket>
                </nav>
            </div>
    );
    }
}

export default App;
