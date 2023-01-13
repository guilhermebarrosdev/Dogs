import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './UserHeaderNav.module.css';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import useMedia from '../../Hooks/useMedia';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../store/user';

const UserHeaderNav = () => {
  const dispatch = useDispatch();
  const mobile = useMedia('(max-width: 768px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink
          to='/conta'
          end
          className={({ isActive }) => {
            const linkClasses = [styles.registerButton];
            if (isActive) linkClasses.push(styles.active);

            return linkClasses.join(' '); // returns "registerButton" or "registerButton active"
          }}
          // className={(isActive) => 'active' + (!isActive ? ' unselected' : '')}
          // className={`${styles.active ? styles.active : ''}`}
          title='Minha Conta'
        >
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink
          to='/conta/estatisticas'
          className={({ isActive }) => {
            const linkClasses = [styles.registerButton];
            if (isActive) linkClasses.push(styles.active);

            return linkClasses.join(' '); // returns "registerButton" or "registerButton active"
          }}
          // className={(isActive) => 'active' + (!isActive ? ' unselected' : '')}
          title='Estatísticas'
        >
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink
          to='/conta/postar'
          className={({ isActive }) => {
            const linkClasses = [styles.registerButton];
            if (isActive) linkClasses.push(styles.active);

            return linkClasses.join(' '); // returns "registerButton" or "registerButton active"
          }}
          // className={(isActive) => 'active' + (!isActive ? ' unselected' : '')}
          title='Poste sua Foto'
        >
          <AdicionarFoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={() => dispatch(userLogout())}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
