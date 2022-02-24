import React, {useEffect, useState}  from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import TableComponet from '../componets/Table'
export default function Inventario(){

    const [products, setProducts] = useState([])
    useEffect(() =>{
        const getProducts = () =>{
            fetch('http://localhost:9000/api')
            .then(res => res.json())
            .then(res => setProducts(res))
        }
        getProducts()
    }, [])
    return (
    <Container fluid="md">
        <Row>
            <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="txtSearch">
                        <Form.Label><b>Producto a Buscar</b></Form.Label>
                        <Form.Control type="text" placeholder="Search" />
                    </Form.Group>
                    <br></br>
                    <TableComponet products={products}/>
                </Form>                
            </Col>
        </Row>
    </Container>
    );
};