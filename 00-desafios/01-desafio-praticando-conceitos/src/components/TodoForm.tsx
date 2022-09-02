import styles from './TodoForm.module.css'

import { PlusCircle } from 'phosphor-react';

export function TodoForm() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button type="submit">
        Criar
        <PlusCircle size='1rem' />
      </button>
    </form>
  );
}