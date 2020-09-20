import React, { Component } from "react";
import './filters.scss';
import { setFilteredProducts } from "../../features/products/productsSlice";
import { connect } from "react-redux";

const mapDispatch = { setFilteredProducts }

const availableSizes = [
    {label: 'XS', isChecked: false},
    {label: 'S', isChecked: false},
    {label: 'M', isChecked: false},
    {label: 'ML', isChecked: false},
    {label: 'L', isChecked: false},
    {label: 'XL', isChecked: false},
    {label: 'XXL', isChecked: false}];

class Filter extends Component {

    constructor(props){
        super(props);
        this.state = {
            checkList: availableSizes
        };
    }

    toggleCheckboxChange(index) {
        const newCheckList = this.state.checkList.map(item => {
            return {
                ...item,
                isChecked: item === this.state.checkList[index] ? !item.isChecked : item.isChecked
            }});

        this.setState({
            checkList: newCheckList
            });

        const payload = {
          filterType: 'size',
          filteredSizes: newCheckList.filter(item => item.isChecked).map(item => item.label)
        };
        this.props.setFilteredProducts(payload); // store dispatch
    }

    render() {
        const checkBoxList = this.state.checkList.map((item, index) =>
           <div className="container" key={index} onClick={() => this.toggleCheckboxChange(index)}>
               <div className="round">
                   <input type="checkbox" key={index} checked={item.isChecked} onChange={() => this.toggleCheckboxChange(index)} />
                   <label htmlFor="checkbox" className="checkmark">{item.label}</label>
               </div>
           </div>
        );

        return (
            <div className="filters">
                <h4 className="title">Sizes:</h4>
                <div className="toggle-check">
                    {checkBoxList}
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    mapDispatch
)(Filter);

