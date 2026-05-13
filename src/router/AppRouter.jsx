import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/DashboardPage';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;