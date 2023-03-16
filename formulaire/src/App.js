import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h4>React-Bootstrap Formulaire</h4>
      <Form>
      <Form.Group>
          <Form.Label>Nom complet:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Adress mail:</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter your your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter  age:</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group>
        <Button variant="primary" type="submit">
           Clicker pour soumetre 
        </Button>
      </Form>
    </div>
  );
}

export default App;
