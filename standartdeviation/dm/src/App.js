import React, { Component } from "react";
import { Container, Row, Jumbotron, Col } from "reactstrap";
import Sample from "./Sample";
import Population from "./Population";

export default class App extends Component {
  state = { pop: [], rand: [], sample: [] , prevSamp : [] , sm : [] };

  getPop = (popSize = 0) => {
    if (popSize !== 0) {
      let b = this.state.pop;
      for (let i = 0; i < popSize; i++) {
        b[i] = i + 1;
      }

      this.setState({ pop: b });
    } else {
      alert("no population size");
    }

  };

  getSample = (sampleSize = 0) => {
    let b = this.state.rand;
      let c = this.state.prevSamp;
      let numb = this.state.prevSamp.length;
      
      for(let i = 0 ; i< numb ; i++){
        c.pop();
      }
      
    if (sampleSize !== 0 && sampleSize < this.state.pop.length  ) {
      
      for (let i = 0; i < sampleSize; i++) {
        let a = Math.floor(Math.random() * this.state.pop.length) + 1;
        
           b.push(a);
           c[i]=a;
      }
      this.setState({ prevSamp : c , rand: b  });
    } else {
      alert("no sample size or sample size bigger than pop size");
    }
    
  };
  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <center>
              <h1>Standart Deviation</h1>
            </center>
            <hr className="my-2" />
          </Jumbotron>
          <Row>
            <Col>
              <Population getPop={this.getPop} pop={this.state.pop} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Sample getSample={this.getSample} rand={this.state.rand} prevSamp={this.state.prevSamp} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
