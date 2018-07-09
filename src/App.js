import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {


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
                  <ListGroupItem tag="a" href="#" className="justify-content-between"><Link to="">Crafts Room</Link> </ListGroupItem>
                  <ListGroupItem tag="a" href="#" className="justify-content-between"><Link to="">Pantry</Link> </ListGroupItem>
                  <ListGroupItem tag="a" href="#" className="justify-content-between"><Link to="">Fish Tank</Link> </ListGroupItem>
                  <ListGroupItem tag="a" href="#" className="justify-content-between"><Link to="">Boiler Room</Link> </ListGroupItem>
                  <ListGroupItem tag="a" href="#" className="justify-content-between"><Link to="">Bulletin Board</Link> </ListGroupItem>
                  <ListGroupItem tag="a" href="#" className="justify-content-between"><Link to="">Vault</Link> </ListGroupItem>
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
