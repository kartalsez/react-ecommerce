import React, { Component } from "react";
import './products.scss';
import ProductList from "./product-list/product-list";

class Products extends Component{

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps);
    }

    render() {
        return (
            <div className="products">
                <header>
                    <div className="col1">
                        <span>16 Product(s) found.</span>
                    </div>
                    <div className="col2">
                        <span>Order by ...</span>
                    </div>
                </header>
                <ProductList></ProductList>
            </div>
        );
    }
}

export default Products;
