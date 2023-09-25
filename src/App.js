import './App.css';
import Layout from './components/layout/Layout';
import Logo from './components/commons/Logo/Logo';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Projects from './pages/projects/projects';
import Skills from './pages/skills/skills';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
        <Route path="/" element={<Logo size="large" theme="light" />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
