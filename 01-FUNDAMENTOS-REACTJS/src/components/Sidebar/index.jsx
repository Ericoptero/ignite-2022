import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

import styles from './styles.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1566577134624-6f6cc4bb272b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" 
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/ericoptero.png" hasBorder />

        <strong>Eric Nantes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size="1.25rem" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}