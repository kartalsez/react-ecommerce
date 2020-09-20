import React, { Component } from "react";
import './product-list.scss';
import Product from "./product/product";
import axios from 'axios';
import { setProducts } from "../../../features/products/productsSlice";
import { addProductToBasket } from "../../../features/basket-products/basketProductsSlice";
import { connect } from 'react-redux'
import { createSelector } from "@reduxjs/toolkit";

const mapDispatch = { setProducts, addProductToBasket }

class ProductList extends Component{

    componentDidMount() {
        axios.get(`http://localhost:8001/api/products`)
            .then(res => {
                this.props.setProducts(JSON.parse(JSON.stringify(res.data.products))); // store setProducts dispatch
            })
    }

    addProduct = (product) => {
        this.props.addProductToBasket(product); // store dispatch
    };

    render() {
        const products = JSON.parse(JSON.stringify(this.props.filteredProducts))
            .map((product_, index) => {
            return <Product product={product_} key={index} addProduct={() => this.addProduct(product_)}></Product>;
        });

        return (
            <div className="product-list">
                { products }
            </div>
        );
    }
}

const selectFilteredProducts = state => state.products.filteredProducts

const selectorFilteredProducts = createSelector(
    [selectFilteredProducts],
    filteredProducts => filteredProducts
)

const mapStateToProps = state => ({
    filteredProducts: selectorFilteredProducts(state)
})

export default connect(
    mapStateToProps,
    mapDispatch
)(ProductList);
