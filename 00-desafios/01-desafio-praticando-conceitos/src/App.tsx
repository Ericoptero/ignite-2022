import './globalStyle.css';

import { Header } from './components/Header';

export function App() {
  return (
    <>
      <Header />

      <form>
        <input type="text" placeholder='Adicione uma nova tarefa' />
        <button type="submit">
          Criar
          <img src="" alt="" />
        </button>
      </form>

      <main>
        <header>
          <div>
            Tarefas criadas
            <span>0</span>
          </div>
          <div>
            Concluídas
            <span>0</span>
          </div>
        </header>
        
        <section>
          <div>
            <img src="" alt="" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </section>
      </main>
    </>
  )
}
