import { useState } from 'react'
import './App.css'
import AuthContext from './context/auth-context';
import Auth from './context/Auth';

function App() {
  const [authStatus, setAuthStatus] = useState(false)
  const loginAuth = () => {
    setAuthStatus(true);
  }

  return (
    <div>
        <AuthContext.Provider value={{status:authStatus,login:loginAuth}}>
          <Auth />
        </AuthContext.Provider>
        
    </div>
  )
}

export default App
