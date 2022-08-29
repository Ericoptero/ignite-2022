import styles from './styles.module.css'

import logoImg from '../../img/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Ignite Feed" />
    </header>
  )
}