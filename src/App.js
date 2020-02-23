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
                <Filter filterChange={this.filterChange} ></Filter>
                <Products filteredSizes={this.state.filteredSizes}></Products>
            </div>
        );
    }
}

export default App;
