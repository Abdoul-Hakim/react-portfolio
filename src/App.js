import logo from './assets/logo.svg';
import './App.css';
import Header from './components/Header';
import Profile from './pages/Profile';
import Project from './pages/Project';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo}/>
        <Routes>
          <Route path='/' element={<Profile userName="octocat" />}/>
          <Route path='/projects' element={<Project userName="octocat" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
