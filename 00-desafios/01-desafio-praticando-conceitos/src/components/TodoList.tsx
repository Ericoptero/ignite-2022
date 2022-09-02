import styles from './TodoList.module.css';

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
      
      <section>
        <div>
          <img src="" alt="" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </section>
    </>
  )
}