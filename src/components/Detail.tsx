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
    contry: this.props.history.location.state.contry,
    routeParam: "",
    history: "",
    match: "",
    goBack: () => {
      this.props.history.goBack();
    },
  };
  render() {
    return (
      <div className="container">
        <div className="row filters">
          <button onClick={this.state.goBack}>Go Back</button>
        </div>
        <div className="column-4">
          <img src={this.state.contry["flag"]} alt="Country Flag" />
        </div>
        <div className="column-8">
          <div className="description">
            <h2>{this.state.contry["name"]}</h2>
            <table>
              <tbody>
              <tr>
                <td><b>Native Name</b> : {this.state.contry["nativeName"]}</td>
                <td><b>Top Level Domain</b>: {this.state.contry["topLevelDomain"]}</td>
              </tr>
              <tr>
                <td><b>Population</b> : {this.state.contry["population"]}</td>
                <td><b>Currencies</b> :
                {this.state.contry["currencies"].map((cur: any) => {
                  return (
                     cur.name+","
                  )})}
                  </td>
              </tr>
              <tr>
                <td><b>Region</b> : {this.state.contry["region"]}</td>
                <td><b>Languages</b> : 
                {this.state.contry["languages"].map((lang: any) => {
                  return (
                       lang.name+ ','
                  )})}
                  </td>
              </tr>
              <tr>
                <td><b>Sub Region</b> : {this.state.contry["subregion"]}</td>
              </tr>
              <tr>
                <td><b>Capital</b> : {this.state.contry["capital"]}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
