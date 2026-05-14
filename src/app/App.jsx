import { BrowserRouter } from 'react-router-dom';
import Layout from "../components/Layout";
import AppRouter from "../router/AppRouter";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
}