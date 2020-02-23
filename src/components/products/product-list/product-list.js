import React, { Component } from "react";
import './product-list.scss';

class ProductList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            filteredSizes: []
        };
    }

    render() {
        return (
            <div className="product-list">
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
                <p>asdasdas</p>
            </div>
        );
    }
}

export default ProductList;
