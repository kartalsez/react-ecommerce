import React, { Component } from 'react';
import './App.scss';
import Filter from './components/filters/filters';
import Products from "./components/products/products";
import { SalesBasket } from "./components/sales-basket/sales-basket";

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
                    <SalesBasket></SalesBasket>
                </nav>
            </div>
    );
    }
}

export default App;
