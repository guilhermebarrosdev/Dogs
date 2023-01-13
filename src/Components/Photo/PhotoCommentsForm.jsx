import { useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_COMMENT_POST } from '../../api';
import styles from './PhotoCommentsForm.module.css';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';

import Error from '../Helper/Error';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = PHOTO_COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComments((comments) => [...comments, json]);
      setComment('');
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id='comment'
        name='comment'
        placeholder='Comente...'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      {error && <Error error={error} />}
    </form>
  );
};

export default PhotoCommentsForm;
