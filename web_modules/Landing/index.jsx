import React, { Component } from 'react';
import {
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Grid,
  HelpBlock,
} from 'react-bootstrap';

export default class Landing extends Component {
  state = {
    value: '',
  }
  getValidationState = () => {
    const length = this.state.value.length;
    if (length > 10) {
      return 'success';
    }
    if (length > 5) {
      return 'warning';
    }
    if (length > 0) {
      return 'error';
    }
    return undefined;
  }
  handleChange = e => {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <form>
        <Grid fluid>
          <Col xs={12} md={8}>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Working example with validation</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length.</HelpBlock>
            </FormGroup>
          </Col>
          <Col xs={6} md={4} />
        </Grid>
      </form>
    );
  }
}
