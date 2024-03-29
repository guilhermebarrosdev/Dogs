import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { autoLogin } from './store/user';
import './App.css';

import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';
import Login from './Components/Login/Login';
import Photo from './Components/Photo/Photo';
import User from './Components/User/User';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <main className='app-body'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login/*' element={<Login />} />
            <Route path='conta/*' element={<User />} />
            <Route path='foto/:id' element={<Photo />} />
            <Route path='perfil/:user' element={<UserProfile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
