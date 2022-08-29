import styles from './styles.module.scss';

export function Button({type, children}) {
  return (
    <button className={`${styles.button} ${type && styles[type]}`}>
      {children}
    </button>
  )
}