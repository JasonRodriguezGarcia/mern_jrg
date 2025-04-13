import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


// https://jsonplaceholder.typicode.com/

const CochesCuenta = () => {

    const [cuenta, setCuenta] = useState(0)

    useEffect(()=> {
        fetch('http://localhost:5000/api/v1/coches?summary=count')
            .then(response=> response.json())
            .then(data => setCuenta(data))
        
    }, [])


    return (
        <>
            <Box sx={{display: "flex"}}>

                {/* <Card sx={{ minWidth: 275 }}> */}
                <Card sx={{width: "400px", margin: "20px", backgroundColor: 'beige'}}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Base de datos Coches
                        </Typography>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            Cuenta de Coches
                        </Typography>
                        <Typography variant="body2" sx={{color: "red"}}>
                            99 registros <br/>
                            Componente para usar la api <br/>
                            http://localhost:5000/api/v1/cars?summary=count
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Cerrar</Button>
                    </CardActions>
                </Card>
                <Card sx={{width: "400px", margin: "20px", backgroundColor: 'beige'}}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Base de datos Coches
                        </Typography>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            Coche más antiguo
                        </Typography>
                        <Typography variant="body2" sx={{color: "red"}}>
                            Volksvagen año 1990 <br/>
                            Componente para usar la api <br/>
                            http://localhost:5000/api/v1/cars?summary=older
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Cerrar</Button>
                    </CardActions>
                </Card>
                <Card sx={{width: "400px", margin: "20px", backgroundColor: 'beige'}}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Base de datos Coches
                        </Typography>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            Coche más nuevo
                        </Typography>
                        <Typography variant="body2" sx={{color: "red"}}>
                            Kia año 1997 <br/>
                            Componente para usar la api <br/>
                            http://localhost:5000/api/v1/cars?summary=newer
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Cerrar</Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}
export default CochesCuenta;