import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { HomeV2 } from './pages/HomeV2';
import { About } from './pages/About';
import { Blyss } from './pages/case-studies/Blyss';
import { NotedByNani } from './pages/case-studies/NotedByNani';
import { Sereniti } from './pages/case-studies/Sereniti';
import { MentorMeCollective } from './pages/case-studies/MentorMeCollective';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeV2 />} />
          <Route path="/v1" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies/blyss" element={<Blyss />} />
          <Route path="/case-studies/noted-by-nani" element={<NotedByNani />} />
          <Route path="/case-studies/sereniti" element={<Sereniti />} />
          <Route path="/case-studies/mentor-me-collective" element={<MentorMeCollective />} />
        </Routes>
      </Layout>
    </Router>
  );
}
