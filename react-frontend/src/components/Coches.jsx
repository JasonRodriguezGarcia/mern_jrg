import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
// datos para una tabla
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// fin datos tabla
import ButtonGroup from '@mui/material/ButtonGroup';
// para iconos
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';

// https://jsonplaceholder.typicode.com/

const Coches = () => {

    const [datosCoches, setDatosCoches] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/api/v1/coches')
            .then(response=> response.json())
            .then(data => setDatosCoches(data))
        
    }, [])

    const handleView = (id) => {
        let resultado = ""
        fetch(`http://localhost:5000/api/v1/coches/${id}`,
            {method: "delete"}
            .then(response => response.json())
            .then(data => {
                resultado = data
                if (resultado) console.log("coche borrado:", resultado)
            })

        )


    }

    return (
        <>
            <Typography variant="h1" sx={{backgroundColor: "blue"}}>COCHES</Typography>

            {/* <ul>
                {datosCoches.map((coches, index) => {
                    return (
                        <li key={index}>{coches.id} {coches.marca} {coches.modelo} {coches.ano}</li>
                    )
                })}
            </ul> */}

    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Marca</TableCell>
                <TableCell align="right">Modelo</TableCell>
                <TableCell align="right">Año&nbsp;(g)</TableCell>
                <TableCell align="right">Acción</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {datosCoches.map((coche) => (
                    <TableRow
                    key={coche.id}
                    //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {coche.marca}
                        </TableCell>
                        <TableCell align="right">{coche.modelo}</TableCell>
                        <TableCell align="right">{coche.ano}</TableCell>
                        <TableCell align="right">
                        <ButtonGroup variant="contained" aria-label="Basic button group">
                            <Button onClick={()=> handleView(coche.id)}>🔎View</Button>
                            <Button sx={{ backgroundColor: "green", color: "white" }}>➕Add
                                <Icon baseClassName="fas" className="fa-plus-circle" color="primary" />
                            </Button>
                            <Button sx={{ backgroundColor: "green", color: "white" }}>✏️Modify</Button>
                            <Button sx={{ backgroundColor: "blue", color: "white" }}>❌Delete</Button>
                        </ButtonGroup>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>

        </>
    )
}
export default Coches;