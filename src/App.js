import React, { Component } from 'react';
import './App.scss';
import Filter from './components/filters/filters';
import Products from "./components/products/products";

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
                    <header>
                        header...
                    </header>
                    <section>
                        <p>Section</p>
                        <p>Section</p>
                        <p>Section</p>
                        <p>Section</p>
                        <p>Section</p>
                        <p>Section</p>
                        <p>Section</p>
                        <p>Section</p>
                    </section>
                    <footer>
                        <div>
                            <span>asd</span>
                            <span>dfg</span>
                        </div>
                        <button>CHECKOUT</button>
                    </footer>
                </nav>
            </div>
    );
    }
}

export default App;
