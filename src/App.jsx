import './App.css'
import AdminPannel from './AdminPanel';
import LoginForm from './LoginForm';

function App() {
  let isLoggedIn = true;

  return (
    <>
      <h1>Welcome to my apps</h1>
      {isLoggedIn && <AdminPannel />}
    </>
  )
}

export default App
