import React, { Component } from 'react';
import {Container, Row, Col, Form, Table} from 'react-bootstrap';
class Inventario extends Component {
    render() {
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
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Form>                
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Inventario;