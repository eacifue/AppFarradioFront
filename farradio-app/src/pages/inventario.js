import React, {useEffect, useState}  from 'react';
import {Container, Row, Col, Form, Table} from 'react-bootstrap';
export default function Inventario(){

    const [products, setProducts] = useState([])
const prueba = products
    useEffect(() =>{
        const getProducts = () =>{
            fetch('http://localhost:9000/api')
            .then(res => res.json)
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
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Sku</th>
                            <th>Cantidad</th>                            
                            <th>Fecha</th>                            
                            </tr>
                        </thead>
                        <tbody>
                        {prueba.map(prod =>(
                            <tr key={prod.idProductos}>
                            <td>{prod.idProductos}</td>
                            <td>{prod.Nombre}</td>
                            <td>{prod.Descripcion}</td>
                            <td>{prod.Sku}</td>
                            <td>{prod.Cantidad}</td>
                            <td>{prod.Fecha}</td>                            
                            </tr>                            
                        ))}

                        </tbody>
                    </Table>
                </Form>                
            </Col>
        </Row>
    </Container>
    );
};