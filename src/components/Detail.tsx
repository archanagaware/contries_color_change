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
                <td>
                  <h4>
                    Native Name : {this.state.contry["nativeName"]}
                    <br />
                    Population : {this.state.contry["population"]}
                    <br />
                    Region : {this.state.contry["region"]}
                    <br />
                    Sub Region : {this.state.contry["subregion"]}
                    <br />
                    Capital : {this.state.contry["capital"]}
                  </h4>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
