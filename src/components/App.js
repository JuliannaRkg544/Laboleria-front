import SignUpCake from './SignUpCake';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route element={<Home/>} path="/" />
    <Route element ={<SignUpCake/>} path="/register-cake" />
    <Route element={<Signup/>} path="/signup"/>
    <Route element={<Login/>} path="/login"/>
  </Routes>
  </BrowserRouter>
 
  );
}

export default App;
