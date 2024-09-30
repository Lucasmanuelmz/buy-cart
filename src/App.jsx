import './App.css';
import './media580.css';
import './media780.css';
import './media1024.css';
import './min1024.css';
import Header from './Contains/header'
import Footer from './Contains/footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default App
