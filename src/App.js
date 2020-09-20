import React, { Component } from 'react';
import './App.scss';
import Filter from './components/filters/filters';
import Products from "./components/products/products";
import SalesBasket from "./components/sales-basket/sales-basket";

class App extends Component {

    render() {
        return (
            <div className="App">
                <main>
                    <Filter></Filter>
                    <Products></Products>
                </main>
                <nav>
                    <SalesBasket></SalesBasket>
                </nav>
            </div>
        );
    }
}

export default App;
