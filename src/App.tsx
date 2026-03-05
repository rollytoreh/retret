import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Renungan from '@/pages/Renungan';
import Motivasi from '@/pages/Motivasi';
import TokohInspiratif from '@/pages/TokohInspiratif';
import PostDetail from '@/pages/PostDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/renungan" element={<Renungan />} />
            <Route path="/motivasi" element={<Motivasi />} />
            <Route path="/tokoh" element={<TokohInspiratif />} />
            <Route path="/post/:slug" element={<PostDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
