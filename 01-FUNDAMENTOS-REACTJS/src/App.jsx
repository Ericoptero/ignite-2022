import { Button } from './components/Button';
import './globalStyles.css';
import {FaThumbsUp} from 'react-icons/fa';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Button>
        Botão
      </Button>

      <Button type="outlined">
        Botão
      </Button>

      <Button type="onlyIcon">
        <FaThumbsUp />
      </Button>

    
    </>
  )
}

export default App
