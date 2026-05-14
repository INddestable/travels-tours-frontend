import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import LoginPage from '../pages/loginPage';
import Registro from '../pages/Registro';
import Catalogo from '../pages/Catalogo';
import DetallePaquete from '../pages/DetallePaquete';
import Blog from '../pages/Blog';
import ArticuloBlog from '../pages/ArticuloBlog';
import Contacto from '../pages/Contacto';
import PanelAdmin from '../pages/admin/PanelAdmin';
import GestionBlog from '../pages/admin/GestionBlog';
import Metricas from '../pages/admin/Metricas';
import CrearPaquete from '../pages/asesor/CrearPaquete';
import MisPaquetes from '../pages/asesor/MisPaquetes';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/paquete/:id" element={<DetallePaquete />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<ArticuloBlog />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/admin/paquetes" element={<PanelAdmin />} />
      <Route path="/admin/blog" element={<GestionBlog />} />
      <Route path="/admin/metricas" element={<Metricas />} />
      <Route path="/asesor/crear" element={<CrearPaquete />} />
      <Route path="/asesor/mis-paquetes" element={<MisPaquetes />} />
    </Routes>
  );
};

export default AppRouter;