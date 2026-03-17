import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AccessibilityWidget from './AccessibilityWidget';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
};

export default Layout;
