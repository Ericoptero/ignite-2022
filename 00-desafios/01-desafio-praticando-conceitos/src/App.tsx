import './globalStyle.css';

import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';

import styles from './App.module.css';
import { TodoList } from './components/TodoList';

export function App() {
  return (
    <>
      <Header />

      <main className={styles.container} >
        <TodoForm />
        
        <TodoList />
      </main>
    </>
  )
}
