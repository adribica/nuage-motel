import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import UnitPage from './pages/UnitPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<UnitPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
