import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Crafts from './crafts';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Community Center Tracker</h1>
          <h2 className="Subtitle">Styles by <a href="https://reactstrap.github.io/">ReactStrap</a></h2>  
          <h3 className="Subtitle"> Built with <a href="https://reactjs.net/">ReactJS</a></h3>
        </header>
        <Container fluid="true">
          <Row>
            <Col md="2" />
            <Col md="8">
              <Router>
                <ListGroup>              
                  <ListGroupItem className="justify-content-between"><Link to="/crafts">Crafts Room</Link> </ListGroupItem>
                  <Route exact path="/" component={App} />
                  <Route path="/crafts" component={Crafts} />
                </ListGroup> 
              </Router>
              <Button outline color="secondary">Go Home</Button>
            </Col>
            <Col md="2" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
