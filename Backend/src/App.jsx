import { useEffect } from 'react';
import './App.css'
import Login from './Page/Login'
import api from './Utiles/axios'

function App() {

  const getCurrentUser = async () => {
    try {
      const { data } = await api.get("/auth/me");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCurrentUser();
  }, [])

  return (
    <>
      <Login />
    </>
  )
}

export default App
