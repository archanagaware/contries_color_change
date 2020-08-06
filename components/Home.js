import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            searchString: "",
            contries: []
          };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {

        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                contries: result
            });
            });
        }
    handleChange() {
        this.setState({
            searchString: this.refs.search.value
            });
            }
        render() {
            let contries_list = this.state.contries;
            let search = this.state.searchString.trim().toLowerCase();

            if (search.length > 0) {
                contries_list = contries_list.filter(function(user) {
                return user.name.toLowerCase().match(search);
            });
        }
        return (
            <div class="container">
                <div class="row filters">
                    <input
                    type="text"
                    value={this.state.searchString}
                    ref="search"
                    onChange={this.handleChange}
                    placeholder="Search with country name"
                    />
                </div>
                {
                    contries_list.map((contry) => {
                    return (
                        <div class="row">
                        <Link to={`/Detail/${contry.cioc}`}>
                        <div class="column">
                            <img src={contry.flag} />
                            <div class="description">
                            <h2>{contry.name}</h2>
                            <h4>Population : {contry.population}<br/>
                                Region : {contry.region}<br/>
                                Capital : {contry.capital}</h4>

                            </div>
                        </div></Link>
                        </div>
                    )})
                }
            </div>
        )
    };
}