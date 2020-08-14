import React, { Component } from "react";
import { Link } from "react-router-dom";

interface State {
  searchString: "";
  region: "";
  contries: Array<String>;
}

export default class Home extends Component<State> {
  state: State = {
    searchString: "",
    region: "",
    contries: [],
  };
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          contries: [] = result,
        });
      });
  }
  handleChange = (event) => {
    this.setState({
        searchString: event.target.value
    })
  };
  handleListChange = (event) => {
    this.setState({
        region: event.target.value
    })
  };
  render() {
    let contries_list = this.state.contries;
    let search = this.state.searchString.trim().toLowerCase();
    let region = this.state.region.trim().toLowerCase();
    console.log(region);
    if (search.length > 0) {
      contries_list = contries_list.filter(function (user) {
        return user['name'].toLowerCase().match(search);
      });
    }
    if (region.length > 0) {
      contries_list = contries_list.filter(function (user) {
        return user['region'].toLowerCase().match(region);
      });
    }
    return (
      <div className="container">
        <div className="row filters">
          <input
            type="text"
            value={this.state.searchString}
            id="searchId"
            onChange={this.handleChange}
            placeholder="Search with country name"
          />
          <select
            name="country"
            className="pull-right"
            id="searchRegion"
            onChange={this.handleListChange}
          >
            <option defaultChecked>Filter By Region</option>
            <option value={"Africa"}>Africa</option>
            <option value={"America"}>America</option>
            <option value={"Asia"}>Asia</option>
            <option value={"Europe"}>Europe</option>
            <option value={"Oceania"}>Oceania</option>
          </select>
        </div>
        <div className="row">
          {contries_list.map((contry: any) => {
            return (
              <div className="row">
                <Link to={`/Detail/${contry.alpha3Code}`}>
                  <div className="column card">
                    <img src={contry.flag} />
                    <div className="description">
                      <h2 className="name">{contry.name}</h2>
                      <span className="properties">
                        <b>Population</b> : {contry.population}
                      </span>
                      <span className="properties">
                        <b>Region</b> : {contry.region}
                      </span>
                      <span className="properties">
                        <b>Capital</b> : {contry.capital}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
