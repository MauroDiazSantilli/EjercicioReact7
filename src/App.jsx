import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import EmpleadoList from './components/EmpleadoList';

function App() {
  return (
    <Container>
        <Col>
          <EmpleadoList />
        </Col>
    </Container>
  );
}

export default App;