import styles from './Header.module.css';

import logoImg from '../img/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logoImg} alt='ToDo App' />
    </header>
  )
}