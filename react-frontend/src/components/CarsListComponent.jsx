import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

const CarsListComponent = () => {
  const [cars, setCars] = useState([]); // Set initial state to an empty array
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

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

  // Render loading, error, or the list of cars
  return (
    <div>
      <h1>Cars from Express:</h1>
      {loading && <p>Loading...</p>} {/* Show loading if data is being fetched */}
      {error && <p>Error: {error}</p>} {/* Show error message if there was an error */}
      {!loading && !error && (
        <ul>
          {cars.map(car => (
            <li key={car.id}>
              <Button sx={{ backgroundColor: "white", color: "white", width: 1 }}>🔎</Button>
              <Button sx={{ backgroundColor: "white", color: "white" }}>➕</Button>
              <Button sx={{ backgroundColor: "white", color: "white" }}>✏️</Button>
              <Button sx={{ backgroundColor: "white", color: "white" }}>❌</Button>
              {car.marca} - {car.modelo} - {car.ano} - {car.type}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarsListComponent;