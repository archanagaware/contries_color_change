import React from 'react';
import { useHistory } from "react-router-dom";

export default class Detail extends React.Component {
    constructor(props) {
        super();
        this.state = {
            contry: []
        };
        this.routeParam = props.match.params.code;
        this.goBack = this.goBack.bind(this);
    }
    goBack(){
        this.props.history.goBack();
    }
    componentDidMount() {
        console.log(this.props.match.url);
        fetch(`https://restcountries.eu/rest/v2/alpha/${this.routeParam}`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
            this.setState({
                contry: result
            });
        });
    }
    render() {
        return (
            <div class="container">
                <div class="row filters">
                <button onClick={this.goBack}>Go Back</button>
                </div>
                <div class="column-4">
                    <img src={this.state.contry.flag} />
                </div>
                <div class="column-8">
                <div class="description">
                    <h2>{this.state.contry.name}</h2>
                    <table>
                        <tr>
                            <td>
                                <h4>Native Name : {this.state.contry.nativeName}<br/>
                                    Population : {this.state.contry.population}<br />
                                    Region : {this.state.contry.region}<br/>
                                    Sub Region : {this.state.contry.subregion}<br/>
                                    Capital : {this.state.contry.capital}</h4>
                            </td>
                        </tr>
                    </table>

                    </div>
                </div>
            </div>
        )
    };
    
}