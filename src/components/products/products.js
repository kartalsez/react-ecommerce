import React, { Component } from "react";
import './products.scss';
import ProductList from "./product-list/product-list";
import ShelfHeader from "./ShelfHeader/shelf-header";

class Products extends Component{

    constructor(props) {
        super(props);
        this.state = {selectedOrder: 'none', listedProductNumber: 0, newProduct: null};
    }

    selectionChange = (selectedOrder) => {
        this.setState({selectedOrder: selectedOrder});
    };

    onListProducts = (listedProductNumber) => ( this.setState({listedProductNumber: listedProductNumber}) );

    addProduct = (product) => {
        this.props.addProduct(product);
    }

    render() {
        return (
            <div className="products">
                <ShelfHeader selectionChange={this.selectionChange} listedProductNumber={this.state.listedProductNumber}></ShelfHeader>
                <ProductList filteredSizes={this.props.filteredSizes}
                             selectedOrder={this.state.selectedOrder}
                             listedProductNumber={this.onListProducts}
                             addProduct={this.addProduct}></ProductList>
            </div>
        );
    }
}

export default Products;
