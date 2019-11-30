import React, { Component } from "react";
import { Button, Table } from "reactstrap";
export default class Population extends Component {
  state = { popSize: 0, mean: 0, var: 0, sd: 0 };
  onChangeHandler = event => {
    this.setState({ popSize: event.target.value });
  };
  getCalc = pop => {
    let meann = this.state.mean;
    let varr = this.state.var;
    let sdd = this.state.sd;
    let ok = 0;
    for (let i = 0; i < pop.length; i++) {
      ok += i + 1;
    }
    meann = ok / pop.length;
    for (let i = 0; i < pop.length; i++) {
      ok += Math.pow(pop[i] - meann, 2);   
      
    }

    varr = ok / pop.length;
    
    ok = Math.sqrt(varr);
    sdd = ok;
    this.setState({ mean: meann, var: varr, sd: sdd });
  };

  render() {
    return (
      <div>
        <input onChange={this.onChangeHandler} placeholder="pop size" type="number"></input>
        <Button
          onClick={() => this.props.getPop(this.state.popSize)}
          color="info"
        >
          get population
        </Button>
        <Button
          onClick={() => this.getCalc(this.props.pop)}
          color="danger"
          disabled={this.state.popSize === 0 ? true : false}
        >
          calculate
        </Button>
        <Table>
          <thead>
            <tr>
              <th>population</th>
              <th>mean</th>
              <th>variance</th>
              <th>Standard Deviation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{"population"}</td>
              <td>{this.state.mean}</td>
              <td>{this.state.var}</td>
              <td>{this.state.sd} </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
