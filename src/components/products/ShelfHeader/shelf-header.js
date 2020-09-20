import React, { Component } from "react";
import './shelf-header.scss';
import { connect } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { setFilteredProducts } from "../../../features/products/productsSlice";

const mapDispatch = { setFilteredProducts }

class ShelfHeader extends Component {

    constructor(props) {
        super(props);
        this.orderSelectChange = this.orderSelectChange.bind(this);
    }

    orderSelectChange(event) {
        const payload = {
            filterType: 'order',
            selectedOrder: event.target.value
        };
        this.props.setFilteredProducts(payload); // store dispatch
    }

    render() {
        return (
            <header>
                <div className="col1">
                    <span>{this.props.listedProductsNumber} Product(s) found.</span>
                </div>
                <div className="col2">
                    <span>Order by</span>
                    <select onChange={this.orderSelectChange}>
                        <option value={'none'}>Select</option>
                        <option value={'asc'}>Lowest to highest</option>
                        <option value={'desc'}>Highest to lowest</option>
                    </select>
                </div>
            </header>
        );
    }

}

const selectListedProductsNumber = state => state.products.listedProductsNumber

const selectorListedProductsNumber = createSelector(
    [selectListedProductsNumber],
    listedProductsNumber => listedProductsNumber
)

const mapStateToProps = state => ({
    listedProductsNumber: selectorListedProductsNumber(state)
})

export default connect(
    mapStateToProps,
    mapDispatch
)(ShelfHeader)
