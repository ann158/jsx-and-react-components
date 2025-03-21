import Description from './Description.js';
import Price from'./Price.js';
import Name from './Name.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

const firstName = "";

function App() {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Card style={{ width: "18rem", textAlign: "center" }} className="p-3 shadow-lg">
        
        <img src="/Assets/download.jpg" alt="Product" className="card-img-top" />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <h3 className="mt-3">Hello, {firstName ? firstName : "there"}!</h3>

      {firstName && (
        <img
          src="/Assets/download.jpg" 
          alt="User avatar"
          className="mt-2 rounded-circle"
          width="100"
        />
      )}
    </Container>
  );
}



export default App;
