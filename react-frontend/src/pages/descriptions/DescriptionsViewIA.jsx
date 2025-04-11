import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { GoogleGenAI } from "@google/genai";
import CircularProgress from '@mui/material/CircularProgress';

function DescriptionsViewIA() {
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state
  const [selectedDescription, setSelectedDescription] = useState({})
  const [iaActivated, setIaActivated] = useState(false)
  const [message, setMessage] = useState("")
  const [responses, setResponses] = useState([])

  const {id} = useParams()
  const navigate = useNavigate();
  const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_API_KEY }); 

  useEffect(()=> {
    const fetchCar = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/descriptions/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSelectedDescription(data)
      } catch (error) {
        setError(error.message); // Handle errors
      } finally {
        setLoading(false); // Set loading to false once data is fetched or error occurs
      }
    }
    fetchCar()
  }, [])

  const handleHome = () => {
    // ()=> setOpenViewDialog(false)
    navigate(`/descriptions`);
  }

  const checkWithIA = async () => {
    setIaActivated(true)
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `You can check if the following text is grammatically correct: ${selectedDescription.description}`,
      });
    let geminiMessage = {message: response.text, role: "bot"}
    // setResponses(prevResponses => [...prevResponses, geminiMessage])
    console.log(response.text);
    setIaActivated(false)
    setMessage(geminiMessage.message)
  }
  return (
    <div>
      <h2>Welcome Descriptions View IA</h2>
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
        <Box component="img"
            src={`../../../assets/${selectedDescription.picture}.jpg`} sx={{width: "500px"}} 
            />
            <Typography>
                Student Name: {selectedDescription.name}
            </Typography>
            <Typography>
                Descripcion: {selectedDescription.description}
            </Typography>
            {iaActivated && <CircularProgress />}
            {!iaActivated && 
                <>
                    <h2>Corrected text</h2>
                    {message}
                </>
            }
            <Box>
                <Button variant="contained" color="primary" onClick={()=> checkWithIA(selectedDescription._id)} autoFocus
                    sx={{margin: "10px"}}
                    >
                    Check with IA
                </Button>
                <Button variant="contained" color="primary" onClick={handleHome} autoFocus
                    sx={{margin: "10px"}}
                >
                    Close
                </Button>
            </Box>
      </Box>
    </div>
  );
}
export default DescriptionsViewIA;