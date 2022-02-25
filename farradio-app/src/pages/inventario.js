import React, {useState}  from 'react';
import {Container, Row, Col, Form, Button, InputGroup} from 'react-bootstrap';
import TableComponet from '../componets/Table'
export default function Inventario(props){

    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useState([])

const handelEnterKeyPressed = (e) =>{
    const text = e.target.value
    setSearchText(text)
    if(e.key==="Enter"){       
        getProducts(searchText)
    }
}
const getProducts = () =>{
    fetch('http://localhost:9000/api/productos/'+ searchText)
    .then(res => res.json())
    .then(res => setProducts(res))
} 

  /*  const [products, setProducts] = useState([])
    useEffect(() =>{
        const getProducts = () =>{
            fetch('http://localhost:9000/api/productos/')
            .then(res => res.json())
            .then(res => setProducts(res))
        }
        getProducts()
    }, [])*/

    return (
    <Container fluid="md">
        <Row>
            <Col>
                <Form>
                    <Form.Group className="sb-2" controlId="txtSearch">
                        <Form.Label><b>Producto a Buscar</b></Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control type="text"  onKeyPress={handelEnterKeyPressed} placeholder="Search" />
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