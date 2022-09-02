import { useState } from 'react';

import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

import './globalStyle.css';
import styles from './App.module.css';

interface Task {
  id: string;
  taskText: string;
  hasChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState([{hasChecked: false, id: '213', taskText: 'teste'}, {hasChecked: false, id: '213as', taskText: 'testasde'}] as Task[]);

  function addNewTask(newTaskText: string) {
    setTasks(prev => [
        ...prev, {
          id: Math.random().toString(16).slice(2),
          hasChecked: false,
          taskText: newTaskText
        }
      ]
    );
  }

  function checkTask(task: Task) {
    const tasksWithCheckedOne = tasks.map(item => {
      if (item.id === task.id) {
        return {...item, hasChecked: !item.hasChecked}
      }

      return {...item}
    })

    setTasks(tasksWithCheckedOne)
  }

  function deleteTask(task: Task) {
    const tasksWithoutDeletedOne = tasks.filter(item => item.id !== task.id)

    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <>
      <Header />

      <main className={styles.container} >
        <TodoForm addNewTask={addNewTask} />
        
        <TodoList tasks={tasks} checkTask={checkTask} deleteTask={deleteTask} />
      </main>
    </>
  )
}
