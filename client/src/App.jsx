// App.tsx
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MaxWidthWrapper from './components/MaxWidthWrapper';
import 'react-quill/dist/quill.snow.css'; // Quill styles


function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

function MainLayout() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      
      {/* Only wrap main page content with MaxWidthWrapper */}
      <MaxWidthWrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/post/:id' element={<Single />} />
          <Route path='/write' element={<Write />} />
        </Routes>
      </MaxWidthWrapper>

      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
