import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Register/Login';
import { useState } from 'react';
import { AuthProvider } from './store/Auth';
import Register from './components/Register/Register';
import AllProducts from './components/Products/AllProducts';

function App() {

  const [isLogin, setIsLogin] = useState(1);
  return (
    <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/products' element={<AllProducts />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
