
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { Index } from "./components/Index";
import './App.css';


function App() {

  return (
    <>
      <BrowserRouter>
      <header>
          <Home />
      </header>
        <section>
          <Routes>
            <Route path='home' element={<Home />} />
            <Route path='/' element={<Index />} />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  )
}

export default App
