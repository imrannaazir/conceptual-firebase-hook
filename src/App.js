import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import User from './components/User/User';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/users' element={<User />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

      </Routes>

    </div>
  );
}

export default App;
