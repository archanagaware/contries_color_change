import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component<{}, any> {
    constructor() {
        super('');
        this.state = {
            searchString: "",
            contries: []
          };
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
        render() {
            return (
                <div className="container">
                    <div className="row">
                    {
                    this.state.contries.map((contry:any) => {
                    return (
                        <div className="row">
                        <Link to={`/Detail/${contry.cioc}`}>
                        <div className="column">
                            <img src={contry.flag} />
                            <div className="description">
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
                </div>
            )
    };
}