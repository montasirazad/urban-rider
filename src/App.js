import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Ride from './components/Ride/Ride';

function App() {
   
  return (
    <div >
      
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/:ride' element={<Ride/>}/>

      </Routes>
    </div>
  );
}

export default App;
