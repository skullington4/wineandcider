import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Notes from '../Notes/Notes';
import NewNote from '../NewNote/NewNote';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../Home/Home';
import Conversions from '../Conversions/Conversions';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<Home />} />
              <Route path="/notes" element={<Notes user={user} />} />
              <Route path="/notes/new" element={<NewNote user={user} />} />
              <Route path="/conversions" element={<Conversions />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
