import { useSelector } from 'react-redux';
import styles from './FeedPhotos.module.css';

import FeedPhotosItem from './FeedPhotosItem';

const FeedPhotos = ({ setModalPhoto }) => {
  const { list } = useSelector((state) => state.feed);

  return (
    <ul className={`${styles.feed} animeLeft`}>
      {list.map((photo) => (
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </ul>
  );
};

export default FeedPhotos;
