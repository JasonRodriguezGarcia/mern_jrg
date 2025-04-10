import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import DescriptionsListComponent from '../../components/descriptions/DescriptionsListComponent';

function DescriptionsListPage() {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/descriptions");
  }
  const goToNewCar = () => {
      navigate("/descriptions/new");
  }

  return (
    <div>
      <h2>Welcome to Descriptions</h2>
      <Button variant="contained" color="primary" onClick={goToNewCar}>
        Create descriptions
      </Button>
      
      <DescriptionsListComponent />

      {/* <Button variant="contained" color="primary" onClick={goToHome}>
        Home
      </Button> */}
    </div>
  );
}
export default DescriptionsListPage;