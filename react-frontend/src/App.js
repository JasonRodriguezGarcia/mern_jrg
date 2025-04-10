import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/coches/HomePage';
// import UserListPage from './pages/users/UserListPage';
// import UserFormInsertPage from './pages/users/UserFormInsertPage';
import CarsListPage from './pages/coches/CarsListPage';
import CarsFormInsertPage from './pages/coches/CarsFormInsertPage';
import CarsView from './pages/coches/CarsView';
import CarsFormModifyPage from './pages/coches/CarsFormModifyPage';

import DescriptionsListPage from './pages/descriptions/DescriptionsListPage';
import DescriptionsFormInsertPage from './pages/descriptions/DescriptionsFormInsertPage';
import DescriptionsView from './pages/descriptions/DescriptionsView';



// http://localhost:5000/api/v1/users?summary=count

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsListPage />} />
        <Route path="/cars/new" element={<CarsFormInsertPage />} />
        <Route path="/cars/view/:id" element={<CarsView />} />
        <Route path="/cars/edit/:id" element={<CarsFormModifyPage />} /> */}

        <Route path="/" element={<HomePage />} />
        <Route path="/descriptions" element={<DescriptionsListPage />} />
        <Route path="/descriptions/new" element={<DescriptionsFormInsertPage />} />
        <Route path="/descriptions/view/:id" element={<DescriptionsView />} />
        {/* <Route path="/descriptions/edit/:id" element={<CarsFormModifyPage />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;