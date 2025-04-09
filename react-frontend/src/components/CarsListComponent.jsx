import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const CarsListComponent = () => {
  const [cars, setCars] = useState([]); // Set initial state to an empty array
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  const navigate = useNavigate();

  useEffect(() => {
    // Define an async function to fetch the cars
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/cars');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCars(data); // Set the cars to state
      } catch (error) {
        setError(error.message); // Handle errors
      } finally {
        setLoading(false); // Set loading to false once data is fetched or error occurs
      }
    };

    fetchCars(); // Call the async function
  }, []); // Empty dependency array, so it runs once when the component mounts

    const goToViewCar = () => {
        // navigate("/cars/view");
        alert("Enviar a ViewCar")
    }

    const goToNewCar = () => {
        navigate("/cars/new");
    }


  // Render loading, error, or the list of cars
    return (
        <div>
        <h1>Cars from Express:</h1>
        {loading && <p>Loading...</p>} {/* Show loading if data is being fetched */}
        {error && <p>Error: {error}</p>} {/* Show error message if there was an error */}
        {!loading && !error && (
            cars.map((car, key) => (
                <p key={key}>
                    <Button title="Mostrar" sx={{ backgroundColor: "green", color: "white", fontSize: "20px"}}
                         onClick={goToViewCar}
                         >🔎</Button>
                    <Button title="Crear" sx={{ backgroundColor: "green", color: "white", fontSize: "20px"}}
                         onClick={goToNewCar}
                    >➕</Button>
                    <Button title="Editar" sx={{ backgroundColor: "green", color: "white", fontSize: "20px"}}>✏️</Button>
                    <Button title="Borrar" sx={{ backgroundColor: "red", color: "white", fontSize: "20px"}}>❌</Button>
                    {car.marca} - {car.modelo} - {car.ano} - {car.type}
                </p>
            ))
        )}
        </div>
    );
};

export default CarsListComponent;