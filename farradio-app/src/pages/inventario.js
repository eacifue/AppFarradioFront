import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import TableComponet from '../componets/Table';

export default function Inventario(props) {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (searchText) {
      search();
    }
  }, [searchText]);  

  const search = async () => {
    try {
      setProducts([]);
      const res = await fetch(`http://localhost:9000/api/productos/${searchText}`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleSearchClick = (e) => {
    e.preventDefault();
    setSearchText(e.target.previousSibling.value);
    search();
  };

    return (
    <Container fluid="md">
        <Row>
            <Col>
                <Form>
                    <Form.Group className="sb-2" controlId="txtSearch">
                        <Form.Label><b>Producto a Buscar</b></Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control type="text"  placeholder="Search" />
                            <Button variant="outline-primary"  onClick={handleSearchClick}>Buscar</Button>{}
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