import React, { Component } from "react";
import './filters.scss';

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
        this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
    }

    componentWillMount() {
        this.selectedCheckboxes = new Set();
    }

    toggleCheckboxChange(index) {
        this.setState({
            checkList: this.state.checkList.map(item => {
                return {
                    ...item,
                    isChecked: item === this.state.checkList[index] ? !item.isChecked : item.isChecked
                };
            })
        });

        this.props.filterChange(this.state.checkList.filter(item => item.isChecked));
    }



    render() {
        const checkBoxList = this.state.checkList.map((item, index) =>
           <div className="container" key={index} onClick={() => this.toggleCheckboxChange(index)}>
               <div className="round">
                   <input type="checkbox" key={index} checked={item.isChecked} />
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

export default Filter;
