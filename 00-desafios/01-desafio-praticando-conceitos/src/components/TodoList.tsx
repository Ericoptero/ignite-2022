import styles from './TodoList.module.css';

import clipboardImg from '../img/clipboard.svg'
import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { FormEvent } from 'react';

interface Task {
  id: string;
  taskText: string;
  hasChecked: boolean;
}

interface TodoListProps {
  tasks: Task[];
  checkTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
}

export function TodoList({ tasks, checkTask, deleteTask }: TodoListProps) {
  const doneTasks = tasks.filter(item => item.hasChecked);
  
  function handleCheckTask(event: FormEvent, selectedTask: Task) {
    event.stopPropagation();

    checkTask(selectedTask)
  }

  function handleDeleteTask(event: FormEvent, selectedTask: Task) {
    event.stopPropagation();

    deleteTask(selectedTask)
  }

  return (
    <>
      <header className={styles.header}>
        <p className={styles.createdTasks}>
          Tarefas criadas
          <span>{tasks.length}</span>
        </p>
        <p className={styles.doneTasks}>
          Concluídas
          <span>
            {tasks.length === 0 ? (
              tasks.length
            ) : (
              `${doneTasks.length} de ${tasks.length}`
            )}
          </span>
        </p>
      </header>
      
      {tasks.length === 0 ? (
        <section className={styles.emptyTasks}>
          <img src={clipboardImg} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </section>
      ) : (
        <section>
          {tasks.map(task => (
            <div 
              className={`${styles.task} ${task.hasChecked && styles.taskChecked}`}
              onClick={(event) => handleCheckTask(event, task)}
              key={task.id}
            >
              {
                task.hasChecked ?
                (
                  <CheckCircle className={styles.checkCircle} size="1.125rem" weight='fill'/>
                ) : (
                  <Circle className={styles.circle} size="1.125rem" />
                )
              }
              <p>{task.taskText}</p>
              <button onClick={(event) => handleDeleteTask(event, task)}>
                <Trash size=".875rem" />
              </button>
            </div>
          ))}
        </section>
      )}
    </>
  )
}