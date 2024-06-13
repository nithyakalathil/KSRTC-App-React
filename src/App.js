import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import View from './components/View';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
<BrowserRouter>
<Routes>

      <Route path='/s' element={<Search/>}/>
      <Route path='/v' element={<View/>}/>
      
      <Route path='/add' element={<Add/>}/>
</Routes>
</BrowserRouter>

  );
}

export default App;
