import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';


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
            <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Learn More</Button>
            </CardActions>
        </>
    )
}
export default CochesCuenta;