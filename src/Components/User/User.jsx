import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserPhotoPost from './UserPhotoPost';
import UserHeader from './UserHeader';
import UserStats from './UserStats';
import NotFound from '../NotFound';
import Head from '../Helper/Head';
import Feed from '../Feed/Feed';

const User = () => {
  const { data } = useSelector((state) => state.user);

  if (data)
    return (
      <section className='container'>
        <Head title='Minha Conta' />
        <UserHeader />
        <Routes>
          <Route path='/' element={<Feed user={data.id} />} />
          <Route path='postar' element={<UserPhotoPost />} />
          <Route path='estatisticas' element={<UserStats />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </section>
    );
  else return <Navigate to='/login' />;
};

export default User;
