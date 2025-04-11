import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const CarsSelector = () => {
    const [age, setAge] = useState(0)
    const [selectedCar, setSelectedCar] = useState({})
    const [year, setYear] = useState('');
    const [idCoche, setIdCoche] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [ano, setAno] = useState('')
    const [error, setError] = useState('')
    

    const handleChange = async (e) => {
      e.preventDefault()
      setAge(e.target.value)
      try {
        // http://localhost:5000/api/v1/cars/search?ano=1990
          const response = await fetch(`http://localhost:5000/api/v1/cars/search?ano=${age}`);
          if (!response.ok) {
          throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log("imprimo data: ", data)
          setSelectedCar([...data])
          console.log("imprimo selectedCar: ", selectedCar)
          setIdCoche(data._id)
          setMarca(data.marca)
          setModelo(data.modelo)
          setAno(data.ano)

      } catch (error) {
          setError(error.message); // Handle errors
      } finally {
          // setLoading(false); // Set loading to false once data is fetched or error occurs
      }
    }
    return (
      <>
        <Box sx={{ width: 120, margin: "20px"}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="Selecciona año mínimo"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={(e)=>handleChange(e)}
            >
              <MenuItem >empty</MenuItem>
              <MenuItem value={1990}>1990</MenuItem>
              <MenuItem value={1991}>1991</MenuItem>
              <MenuItem value={1992}>1992</MenuItem>
              <MenuItem value={1993}>1993</MenuItem>
              <MenuItem value={1994}>1994</MenuItem>
              <MenuItem value={1995}>1995</MenuItem>
              <MenuItem value={1996}>1996</MenuItem>
              <MenuItem value={1997}>1997</MenuItem>
            </Select>
          </FormControl>
          {/* crear componente y usar un map */}
        </Box>
    </>     
  )
}



export default CarsSelector;
