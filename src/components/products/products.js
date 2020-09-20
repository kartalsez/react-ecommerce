import React, { Component } from "react";
import './products.scss';
import ProductList from "./product-list/product-list";
import ShelfHeader from "./ShelfHeader/shelf-header";

class Products extends Component{

    render() {
        return (
            <div className="products">
                <ShelfHeader></ShelfHeader>
                <ProductList></ProductList>
            </div>
        );
    }
}

export default Products;
