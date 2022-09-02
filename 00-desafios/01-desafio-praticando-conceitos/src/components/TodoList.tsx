import styles from './TodoList.module.css';

import clipboardImg from '../img/clipboard.svg'
import { CheckCircle, Circle, Trash } from 'phosphor-react';

export function TodoList() {
  return (
    <>
      <header className={styles.header}>
        <p className={styles.createdTasks}>
          Tarefas criadas
          <span>0</span>
        </p>
        <p className={styles.doneTasks}>
          Concluídas
          <span>0</span>
        </p>
      </header>
      
      <section className={styles.emptyTasks}>
        <img src={clipboardImg} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </section>

      <section>
        <div className={styles.task}>
          {/* <CheckCircle className={styles.checkCircle} size="1.125rem" weight='fill'/> */}
          <Circle className={styles.circle} size="1.125rem" />
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
          </p>
          <button>
            <Trash size=".875rem" />
          </button>
        </div>


        <div className={`${styles.task} ${styles.taskChecked}`}>
          <CheckCircle className={styles.checkCircle} size="1.125rem" weight='fill'/>
          {/* <Circle className={styles.circle} size="1.125rem" /> */}
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
          </p>
          <button>
            <Trash size=".875rem" />
          </button>
        </div>

        <div className={styles.task}>
          {/* <CheckCircle className={styles.checkCircle} size="1.125rem" weight='fill'/> */}
          <Circle className={styles.circle} size="1.125rem" />
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
          </p>
          <button>
            <Trash size=".875rem" />
          </button>
        </div>
      </section>
    </>
  )
}