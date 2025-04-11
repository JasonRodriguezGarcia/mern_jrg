import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import DescriptionsListComponent from '../../components/descriptions/DescriptionsListComponent';

function DescriptionsListPage() {

  const navigate = useNavigate();

  const goToNewDescription = () => {
      navigate("/descriptions/new");
  }

  return (
    <div>
      <h1>Welcome to Descriptions</h1>
      <Button variant="contained" color="primary" onClick={goToNewDescription}>
        Create descriptions
      </Button>
      
      <DescriptionsListComponent />

    </div>
  );
}
export default DescriptionsListPage;