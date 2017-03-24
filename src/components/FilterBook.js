import React, {Component} from 'react';

class FilterBook extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.changeFilterText = this.changeFilterText.bind(this);
    }

    changeFilterText(event) {
        console.log(this.state.term);
        this.setState({
            term: event.target.value
        })
    }

    render(){
        return (
            <div className="input-group">
                <input type="text"
                       className="form-control"
                       value={this.state.term}
                       onChange={this.changeFilterText}
                       placeholder="Filter books"/>
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">Search</button>
                </span>
            </div>
        );
    }
}

export default FilterBook;