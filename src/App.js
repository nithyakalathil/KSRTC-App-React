import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import View from './components/View';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    
<BrowserRouter>
<Routes>
<Route path='/' element={<Login/>}/>
      <Route path='/s' element={<Search/>}/>
      <Route path='/v' element={<View/>}/>
      <Route path='/p' element={<Signup/>}/>
      <Route path='/add' element={<Add/>}/>
</Routes>
</BrowserRouter>

  );
}

export default App;
