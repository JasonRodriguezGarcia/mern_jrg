import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/coches/HomePage';
// import UserListPage from './pages/users/UserListPage';
// import UserFormInsertPage from './pages/users/UserFormInsertPage';
import CarsListPage from './pages/coches/CarsListPage';
import CarsFormInsertPage from './pages/coches/CarsFormInsertPage';
import CarsView from './pages/coches/CarsView';

// http://localhost:5000/api/v1/users?summary=count

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsListPage />} />
        {/* <Route path="/users/:id/edit" element={<CochesFormEditPage />} />  No implementado */}
        <Route path="/cars/new" element={<CarsFormInsertPage />} />
        <Route path="/cars/view/:id" element={<CarsView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;