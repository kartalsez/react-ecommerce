import React, { Component } from "react";
import './product-list.scss';
import Product from "./product/product";
import axios from 'axios';

class ProductList extends Component{

    state = {
        products: []
    };
    allProducts = [];

    componentDidMount() {
        axios.get(`http://localhost:8001/api/products`)
            .then(res => {
                this.allProducts = res.data.products;
                this.setState({products: this.allProducts});
                this.props.listedProductNumber(this.allProducts.length);
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filteredSizes !== this.props.filteredSizes || prevProps.selectedOrder !== this.props.selectedOrder) {
            const filteredProducts = this.filterProducts();
            const orderedProducts = this.orderProducts(filteredProducts ? filteredProducts : []);

            this.setState({products: orderedProducts});
            this.props.listedProductNumber(orderedProducts.length);
        }
    }

    filterProducts() {
        const newFilteredSizes = this.props.filteredSizes;
        return this.allProducts.filter((product_, index) => {
            if (newFilteredSizes.length > 0) {
                return product_.availableSizes.some(item => newFilteredSizes.includes(item));
            } else {
                return true;
            }
        });
    }

    orderProducts(filteredProducts) {
        const selectedOrder = this.props.selectedOrder;
        return filteredProducts.sort((a, b) =>
            selectedOrder === 'asc' ? a.price - b.price : selectedOrder === 'desc' ? b.price - a.price : a.price - a.price);
    }

    render() {
        const products = this.state.products
            .map((product_, index) => {
            return <Product product={product_} key={index}></Product>;
        });

        return (
            <div className="product-list">
                { products }
            </div>
        );
    }
}

export default ProductList;
