import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import TableComponet from '../componets/Table';

export default function Inventario(props) {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);

  const search = async () => {
    try {
      const res = await fetch(`http://localhost:9000/api/productos/${searchText}`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchText) {
      search();
    }
  }, [searchText]);

  const handleSearchClick = () => {
    search();
  };

  const handleEnterKeyPressed = (e) => {
    const text = e.target.value;
    setSearchText(text);

    if (e.key === 'Enter') {
      search();
    }
  };
    return (
    <Container fluid="md">
        <Row>
            <Col>
                <Form>
                    <Form.Group className="sb-2" controlId="txtSearch">
                        <Form.Label><b>Producto a Buscar</b></Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control type="text"  onKeyPress={handleEnterKeyPressed} placeholder="Search" />
                            <Button variant="outline-primary">Buscar</Button>{}
                        </InputGroup>
                    </Form.Group>
                    <br></br>
                    <TableComponet products={products}/>
                </Form>                
            </Col>
        </Row>
    </Container>
    );
};