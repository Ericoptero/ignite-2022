import styles from './TodoForm.module.css'

import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';

interface TodoFormProps {
  addNewTask: (task: string) => void;
}

export function TodoForm({ addNewTask }: TodoFormProps) {
  const [taskInput, setTaskInput] = useState('');

  function handleNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    addNewTask(taskInput)
    setTaskInput('')
  }

  return (
    <form onSubmit={handleNewTask} className={styles.form}>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa'
        value={taskInput}
        onChange={event => setTaskInput(event.target.value)}
      />
      <button type="submit">
        Criar
        <PlusCircle size='1rem' />
      </button>
    </form>
  );
}