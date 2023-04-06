import { useState } from 'react';
import LandingPage from './pages/landingPage';
import { BrowserRouter } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <article className="bg-black text-white px-5">
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    </article>
  )
}

export default App
