import React, { Component } from "react";
import { Table, Button } from "reactstrap";
export default class Sample extends Component {
  state = {
    sampSize: 0,
    mean: 0,
    var: [],
    sd: [],
    prevMean: 0,
    prevVar: [],
    prevSd: [] ,
    deneme : ["n = -3" , "n = -2" , "n = -1" , "n = 0" , "n = 1"]
  };
  onChangeHandler = event => {
    this.setState({ sampSize: event.target.value });
  };
  getCalc = (rand, prevSamp) => {
    let meann = this.state.mean;
    let varr = this.state.var;
    let sdd = this.state.sd;
    let prevMeann = this.state.prevMean;
    let prevVarr = this.state.prevVar;
    let prevSdd = this.state.prevSd;
    let okk = 0;

    

    //mean
    for (let i = 0; i < rand.length; i++) {
      okk += i + 1;
    }
    meann = okk / rand.length;
okk=0;
    for (let i = 0; i < prevSamp.length; i++) {
      okk += i + 1;
    }
    prevMeann = okk / prevSamp.length;
    
okk=0;
    //variance

    for (let j = 0; j < rand.length; j++) {
      okk += Math.pow(rand[j] - meann, 2);
    }
    
    for (let i = -3; i < 2; i++) {
      varr[i + 3] = okk / (rand.length+i);  
    }

    okk=0;
    for (let j = 0; j < prevSamp.length; j++) {
      okk += Math.pow(prevSamp[j] - prevMeann, 2);
    }
    for (let i = -3; i < 2; i++) {
      prevVarr[i + 3] = okk / (prevSamp.length + i);
    }
    okk=0;
    
    //standart deviation
    for (let i = -3; i < 2; i++) {
      sdd[i + 3] = Math.sqrt(varr[i+3]);
      
    }
    
    
    for (let i = -3; i < 2; i++) {
      prevSdd[i + 3] = Math.sqrt(prevVarr[i+3]);
      
    }
console.log(prevSdd)

    // ok = Math.sqrt(varr);

    this.setState({
      mean: meann,
      var: varr,
      sd: sdd,
      prevMean: prevMeann,
      prevSd: prevSdd,
      prevVar: prevVarr 
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.onChangeHandler}
          placeholder="sample size"
          type="number"
        />
        <Button
          onClick={() => this.props.getSample(this.state.sampSize)}
          color="success"
        >
          get sample
        </Button>
        <Button
          onClick={() => this.getCalc(this.props.rand, this.props.prevSamp)}
          color="danger"
          disabled={this.state.sampSize === 0 ? true : false}
        >
          calculate
        </Button>
        <Table>
          <thead>
            <tr>
              <th>sampsize</th>
              <th>mean</th>
              <th>n value </th>
              <th>variance</th> 
              <th>standart deviation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.rand.length}</td>
              <td>{this.state.mean}</td>
              <td><ul>
              {this.state.deneme.map(deneme => (
            
            <li key={deneme}>{deneme}</li> 
          
          ))}
               </ul> </td>
              <td>
                <ul>
              {this.state.var.map(dene => (
            
            <li key={dene}>{dene}</li> 
          
          ))}
               </ul> 
              </td>
              <td>
                <ul>
              {this.state.sd.map(kal => (
            
            <li key={kal}>{kal}</li> 
          
          ))}
               </ul> 
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>{this.props.prevSamp.length}</td>
              <td>{this.state.prevMean}</td>
              <td><ul>
              {this.state.deneme.map(deneme => (
            
            <li key={deneme}>{deneme}</li> 
          
          ))}
               </ul> </td>
              <td>
                <ul>
              {this.state.prevVar.map(dene => (
            
            <li key={dene}>{dene}</li> 
          
          ))}
               </ul> 
              </td>
              <td>
                <ul>
              {this.state.prevSd.map(kal => (
            
            <li key={kal}>{kal}</li> 
          
          ))}
               </ul> 
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}




