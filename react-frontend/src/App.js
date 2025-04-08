import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/coches/HomePage';
// import UserListPage from './pages/users/UserListPage';
// import UserFormInsertPage from './pages/users/UserFormInsertPage';
import CochesListPage from './pages/coches/CochesListPage';
import CochesFormInsertPage from './pages/coches/CochesFormInsertPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CochesListPage />} />
        {/* <Route path="/users/:id/edit" element={<CochesFormEditPage />} />  No implementado */}
        <Route path="/cars/new" element={<CochesFormInsertPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;