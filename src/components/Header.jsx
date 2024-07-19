import { useLocation } from 'react-router-dom';
import './styles/style.css';
import NavTabs from './NavTabs';
// import Home from './pages/Home';
// import Portfolio from './pages/Portfolio';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Resume from './pages/Resume';

export default function Header() {


  return (
    <header>
      
    <h1>Jaqueline Esteves's Portfolio</h1>
      <NavTabs />
      
      
    </header>
  );
}

