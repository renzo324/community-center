import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';


class Crafts extends Component {
	constructor(props){
		super(props);
		this.state={ Done: false};
	}
	render(){
		return(
			<Container fluid="true">
			<Row>
			<Col md="2" />
			<Col md="8" > 
			<h1> Hello World!!</h1>
			</Col>
			<Col md="2" />
			</Row>
			</Container>
			)
	}
}


export default Crafts;