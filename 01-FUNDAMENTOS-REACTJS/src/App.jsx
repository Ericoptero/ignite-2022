import { Header } from './components/Header';

import styles from './App.module.css';
import './globalStyles.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />

       <main>
          <p>Post</p>
       </main>

      </div>
    </>
  )
}

export default App
