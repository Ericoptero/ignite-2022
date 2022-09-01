import { useState } from 'react';
import { Trash, ThumbsUp} from 'phosphor-react'
import { Avatar } from '../Avatar';

import styles from './styles.module.css';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(previousValue => previousValue + 1)
  }

  return(
    <div className={styles.comment}>
      <Avatar src="https://github.com/ericoptero.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eric Nantes</strong>
              <time title='11 de maio às 08:13' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash onClick={handleDeleteComment} size="1.5rem" />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size="1rem" />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}