import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Login.module.css';

import LoginPasswordReset from './LoginPasswordReset';
import LoginPasswordLost from './LoginPasswordLost';
import LoginCreate from './LoginCreate';
import Loading from '../Helper/Loading';
import LoginForm from './LoginForm';
import NotFound from '../NotFound';

const Login = () => {
  const { data, loading } = useSelector((state) => state.user);

  if (loading) return <Loading />;
  if (data) return <Navigate to='/conta' />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='criar' element={<LoginCreate />} />
          <Route path='perdeu' element={<LoginPasswordLost />} />
          <Route path='resetar' element={<LoginPasswordReset />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
