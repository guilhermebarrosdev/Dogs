import { useDispatch, useSelector } from 'react-redux';
import styles from './FeedModal.module.css';

import PhotoContent from '../Photo/PhotoContent';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import { closeModal } from '../../store/ui';
import { useEffect } from 'react';

const FeedModal = () => {
  const { modal } = useSelector((state) => state.ui);
  const { loading, error, data } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) dispatch(closeModal());
  }

  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  if (!modal) return null;

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
