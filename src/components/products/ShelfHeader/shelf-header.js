import React, { Component } from "react";
import './shelf-header.scss';

class ShelfHeader extends Component{

    constructor(props) {
        super(props);

        this.orderSelectChange = this.orderSelectChange.bind(this);
    }

    orderSelectChange(event) {
        this.props.selectionChange(event.target.value);
    }

    render() {
        return (
            <header>
                <div className="col1">
                    <span>{this.props.productsNumber} Product(s) found.</span>
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

export default ShelfHeader;
