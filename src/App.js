import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Ride from './components/Ride/Ride';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    image: '',
    isLoggedIn: false
  })

  return (
    <UserContext.Provider value={[user, setUser]}>
     
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
         
        <Route path='/ride' element={<ProtectedRoute>
          <Ride />
        </ProtectedRoute>} />

        <Route path='/*' element={<NotFound />} />

      </Routes>

    </UserContext.Provider>
  );
}

export default App;
