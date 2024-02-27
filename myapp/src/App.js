import './App.css';
import './fonts.css';
import {Navbar} from './components/navbar';
import {MainPage} from './components/mainpage';
import {Projects} from './components/projects';
import { Achievements } from './components/achievements';
import { Contact } from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
