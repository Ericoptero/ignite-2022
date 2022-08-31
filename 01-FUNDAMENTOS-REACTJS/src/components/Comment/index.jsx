import { Trash, ThumbsUp} from 'phosphor-react'
import { Avatar } from '../Avatar';

import styles from './styles.module.css';

export function Comment() {
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
              <Trash size="1.5rem" />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size="1rem" />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}