import React from 'react';
import {Table} from 'react-bootstrap';
export default function TableComponet({products}){
    return(
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
        {products.map(prod =>(
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
    )

}