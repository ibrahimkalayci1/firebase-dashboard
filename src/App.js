import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';

function App() {



  return (
    <>
        <Toaster position="top-right" />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
       
      </Routes>
      
     
    </>
  );
}

export default App;