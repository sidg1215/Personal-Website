import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Experience } from './pages/Experience';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="experiences" element={<Experience/>}/>
            <Route path="projects" element={<Projects/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
