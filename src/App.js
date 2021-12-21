import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Author from './Pages/Author';
import NotFound from './Pages/NotFound';

import { GithubProvider } from './context/github/GithubUserContext';
import { AlertProvider } from './context/Alert/AlertContext';
import Alert from './components/Layout/Alert';
import User from './Pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          <main className='container mx-auto px-3 pb-3'>
            <Alert />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/author' element={<Author />} />
              <Route path='/user/:login' element={<User />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
