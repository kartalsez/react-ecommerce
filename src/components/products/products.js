import React, { Component } from "react";
import './products.scss';
import ProductList from "./product-list/product-list";
import ShelfHeader from "./ShelfHeader/shelf-header";

class Products extends Component{

    constructor(props) {
        super(props);
        this.state = {selectedOrder: 'none', productsNumber: 0};
    }

    selectionChange = (selectedOrder) => {
        this.setState({selectedOrder: selectedOrder});
    };

    render() {
        return (
            <div className="products">
                <ShelfHeader selectionChange={this.selectionChange}></ShelfHeader>
                <ProductList filteredSizes={this.props.filteredSizes} selectedOrder={this.state.selectedOrder}></ProductList>
            </div>
        );
    }
}

export default Products;
