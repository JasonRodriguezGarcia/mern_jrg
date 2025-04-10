import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, TextField } from '@mui/material';

function DescriptionsFormInsertPage() {
    const [picture, setPicture] = useState(Math.floor(Math.random() * 6))
    const [description, setDescription] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState(new Date().toUTCString())

    console.log("imagen nº: ", picture)
    const navigate = useNavigate();

    const goToHome = () => {
      navigate("/descriptions");
    }
  const handleFormSubmit = async (e) => {
    e.preventDefault()

    // crear user con datos de inputs
    const descriptionItem = {
        picture: picture,
        description: description,
        name: name,
        date: date
    }

      // fetch POST y pasar user como cuerpo (body)
      const response = await fetch('http://localhost:5000/api/v1/descriptions',
        {
          method: 'POST',
          headers: {'Content-type': 'application/json; charset=UTF-8'},
          body: JSON.stringify(descriptionItem)

        }
      );
    navigate(`/descriptions`);  
    console.log("Mandar fetch")
  }

  return (
    <div>
      <Box component="div" sx={{display: "flex", alignItems: "center", flexDirection: "column"}}>
        <h2>Welcome Descriptions Form Insert Peich</h2>

        {/* UN BOX QUE ACTUA COMO UN FORMULARIO */}
        <Box component="form" onSubmit={handleFormSubmit}
            sx={{
                width: 500,
                // height: 300,
                borderRadius: 1,
                display: "flex",
                alignContent: "center",
                flexDirection: "column",
                gap: 4,
                p: 2
            }}
        >
            <Box component="img" sx={{width: "500px"}}
            src={`../../assets/${picture}.jpg`}
            />

            {/* <TextField id="picture" label="Picture" variant="outlined" onChange={(e)=> setPicture(e.target.value)} /> */}
            <TextField id="name" label="Student's name ..." variant="filled" onChange={(e)=> setName(e.target.value)} required/>
            <TextField id="description" label="Describe the image..." variant="outlined" multiline rows={5}
            onChange={(e)=> setDescription(e.target.value)} required
            />
            {/* <TextField value={date} id="date" variant="filled" onChange={(e)=> setDate(e.target.value)} disabled={true}/> */}

            <Box sx={{display: "flex", gap: "20px", justifyContent: "center"}}>
                <Button type="submit" variant="contained" color="primary">
                Save
                </Button>
                <Button type="button" onClick={()=> navigate('/descriptions')} variant="contained" color="primary">
                Cancel
                </Button>
            </Box>
        </Box>

        {/* <Button variant="contained" color="primary" onClick={goToHome}>
            Home
        </Button> */}

      </Box>
    </div>
  );
}
export default DescriptionsFormInsertPage;