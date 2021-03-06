import React, { Component } from "react";
import './product.scss';

class Product extends Component {
    constructor(props) {
        super(props);
        this.onClickAdd = this.onClickAdd.bind(this);
    }

    splitPrice(index) {
        const splitted = (this.props.product.price + '').split('.');
        if (splitted.length === 1) {
            splitted.push('00');
        } else if (splitted.length === 2) {
            splitted[1] = Number.parseFloat(splitted[1]).toFixed(2);
        }
        return splitted[index];
    }

    calculateInstallmentPrice() {
        const installmentPrice = this.props.product.price / this.props.product.installments;
        return Number.parseFloat(installmentPrice).toFixed(2);
    }

    onClickAdd() {
        this.props.addProduct();
    }

    render() {
        return (
            <div className="product">
                <img src={require(`../../../../static/products-collins/${this.props.product?.sku}_1.jpeg`)}
                     alt={this.props.product.title} title={this.props.product?.title}/>
                 <p>{this.props.product?.title}</p>
                <section className="price">
                    <small>{this.props.product?.currencyFormat}</small>
                    <b>{this.splitPrice(0)}</b>
                    <span>{'.' + this.splitPrice(1)}</span>
                </section>
                <section className="installment">
                    <span>or {this.props.product?.installments} x</span>
                    <b>{this.props.product?.currencyFormat + this.calculateInstallmentPrice()}</b>
                </section>
                <button onClick={() => this.onClickAdd()}>Add to Card</button>
            </div>
        );
    }
}

export default Product;
