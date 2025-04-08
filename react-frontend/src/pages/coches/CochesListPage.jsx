import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import CarsListComponent from '../../components/CarsListComponent';

function CochesListPage() {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  }
  const goToNewUser = () => {
      navigate("/cars/new");
  }

  return (
    <div>
      <h2>Welcome User List Peich</h2>
      <Button variant="contained" color="primary" onClick={goToNewUser}>
        Crear Coche
      </Button>
      <CarsListComponent />

      <Button variant="contained" color="primary" onClick={goToHome}>
        Home
      </Button>
    </div>
  );
}
export default CochesListPage;