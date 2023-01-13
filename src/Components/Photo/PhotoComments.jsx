import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './PhotoComments.module.css';

import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef(null);
  const { data } = useSelector((state) => state.user);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ''}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {data && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
