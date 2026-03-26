import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Coaching from './pages/Coaching';

// Coaching Subpages
import CoachingCore from './pages/coaching/CoachingCore';
import OurPrograms from './pages/coaching/OurPrograms';
import OurCoaches from './pages/coaching/OurCoaches';
import Testimonials from './pages/coaching/Testimonials';

// Training Subpages
import OnlineLeadsAccelerator from './pages/training/OnlineLeadsAccelerator';
import ProspectingBootcamp from './pages/training/ProspectingBootcamp';
import RecruitingRoadmap from './pages/training/RecruitingRoadmap';

// About Subpages
import Biography from './pages/about/Biography';

// Content Subpages
import Blog from './pages/content/Blog';

import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            
            <Route element={<ProtectedRoute />}>
              {/* Coaching Section */}
              <Route path="coaching">
                <Route index element={<Coaching />} />
                <Route path="core" element={<CoachingCore />} />
                <Route path="programs" element={<OurPrograms />} />
                <Route path="testimonials" element={<Testimonials />} />
              </Route>

              {/* Training / Programs Section */}
              <Route path="programs">
                <Route path="leads-accelerator" element={<OnlineLeadsAccelerator />} />
                <Route path="bootcamp" element={<ProspectingBootcamp />} />
                <Route path="roadmap" element={<RecruitingRoadmap />} />
              </Route>

              {/* Other Routes */}
              <Route path="coaches" element={<OurCoaches />} />
              <Route path="blog" element={<Blog />} />
              <Route path="about" element={<Biography />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
