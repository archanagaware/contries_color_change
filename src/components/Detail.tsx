import React from "react";
interface State {
  contry: [];
  routeParam: string;
  history: any;
  match: any;
  goBack(): any;
}
export default class Detail extends React.Component<State> {
  state: State = {
    contry: [],
    routeParam: "",
    history: "",
    match: "",
    goBack: () => {
      this.props.history.goBack();
    },
  };
  componentDidMount() {
    const params = this.props.match.params.id;
    fetch(`https://restcountries.eu/rest/v2/alpha/${params}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          contry: result,
        });
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row filters">
          <button onClick={this.state.goBack}>Go Back</button>
        </div>
        <div className="column-4">
          <img src={this.state.contry["flag"]} />
        </div>
        <div className="column-8">
          <div className="description">
            <h2>{this.state.contry["name"]}</h2>
            <table>
              <tr>
                <td><b>Native Name</b> : {this.state.contry["nativeName"]}</td>
              </tr>
              <tr>
                <td><b>Population</b> : {this.state.contry["population"]}</td>
              </tr>
              <tr>
                <td><b>Region</b> : {this.state.contry["region"]}</td>
              </tr>
              <tr>
                <td><b>Sub Region</b> : {this.state.contry["subregion"]}</td>
              </tr>
              <tr>
                <td><b>Capital</b> : {this.state.contry["capital"]}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
