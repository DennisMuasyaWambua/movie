import { useState } from 'react'
import Content from './content/content';
import Navbar from './navbar/navbar';
import './index.css';


function App() {
  const [count, setCount] = useState(0);

  const name = 'Dennis';

  return (
    <>
      <div className="app">
              <Content/>
          

      </div>
    </>
  )
}

export default App
