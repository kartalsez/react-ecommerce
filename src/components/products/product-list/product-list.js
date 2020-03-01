import React, { Component } from "react";
import './product-list.scss';
import Product from "./product/product";
import axios from 'axios';

class ProductList extends Component{

    state = {
        products: [],
    };
    allProducts = [];

    componentDidMount() {
        axios.get(`http://localhost:8001/api/products`)
            .then(res => {
                this.allProducts = res.data.products;
                this.setState((state, props) => ({
                    products: this.allProducts
                }));
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filteredSizes !== this.props.filteredSizes) {
            this.setState({
               products: this.filterProducts(this.props.filteredSizes)
        });
        }
    }

    filterProducts(newFilteredSizes) {
        return this.allProducts.filter((product_, index) => {
            if (newFilteredSizes.length > 0) {
                return product_.availableSizes.some(item => newFilteredSizes.includes(item));
            } else {
                return true;
            }
        });
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
