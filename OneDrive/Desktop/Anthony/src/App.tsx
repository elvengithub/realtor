import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Coaching from './pages/Coaching';
import Events from './pages/Events';
import NotFound from './pages/NotFound';

// Coaching Subpages
import CoachingPrograms from './pages/coaching/CoachingPrograms';
import CoachingPlans from './pages/coaching/CoachingPlans';
import CoachingCore from './pages/coaching/CoachingCore';
import CoachingElite from './pages/coaching/CoachingElite';
import OurPrograms from './pages/coaching/OurPrograms';
import OurCoaches from './pages/coaching/OurCoaches';
import Testimonials from './pages/coaching/Testimonials';
import TFLists from './pages/coaching/TFLists';
import FreeConsultation from './pages/coaching/FreeConsultation';
import EliteConsultation from './pages/coaching/EliteConsultation';
import ListingVelocityConsultation from './pages/coaching/ListingVelocityConsultation';
import CoachingFAQ from './pages/coaching/CoachingFAQ';

// Training Subpages
import OnlineLeadsAccelerator from './pages/training/OnlineLeadsAccelerator';
import ProspectingBootcamp from './pages/training/ProspectingBootcamp';
import RecruitingRoadmap from './pages/training/RecruitingRoadmap';
import AltmanAdvantage from './pages/training/AltmanAdvantage';
import FastTrack from './pages/training/FastTrack';
import Advantage from './pages/training/Advantage';
import AgentTools from './pages/training/AgentTools';
import SocialContentOffer from './pages/training/SocialContentOffer';
import ControlNarrativeOffer from './pages/training/ControlNarrativeOffer';
import AIIntegrationOffer from './pages/training/AIIntegrationOffer';

// Event Subpages
import Summit from './pages/events/Summit';
import TheEdge from './pages/events/TheEdge';
import Webinars from './pages/events/Webinars';
import Speakers from './pages/events/Speakers';

// Content Subpages
import Blog from './pages/content/Blog';
import Podcast from './pages/content/Podcast';
import TFShow from './pages/content/TFShow';
import Mindset from './pages/content/Mindset';
import Marketing from './pages/content/Marketing';

// About Subpages
import Biography from './pages/about/Biography';
import FerryInternational from './pages/about/FerryInternational';
import OurMission from './pages/about/OurMission';
import Careers from './pages/about/Careers';
import Contact from './pages/about/Contact';

// Legal Subpages
import Terms from './pages/legal/Terms';
import Privacy from './pages/legal/Privacy';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        
        {/* Coaching */}
        <Route path="coaching" element={<Coaching />} />
        <Route path="real-estate-coaching-programs" element={<CoachingPrograms />} />
        <Route path="coaching-plans" element={<CoachingPlans />} />
        <Route path="coaching-core" element={<CoachingCore />} />
        <Route path="coaching-elite" element={<CoachingElite />} />
        <Route path="our-programs" element={<OurPrograms />} />
        <Route path="our-programs/our-coaches" element={<OurCoaches />} />
        <Route path="tflists" element={<TFLists />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="free-coaching-consultation" element={<FreeConsultation />} />
        <Route path="elite-deal-consultation" element={<EliteConsultation />} />
        <Route path="listing-velocity-consultation" element={<ListingVelocityConsultation />} />
        <Route path="coaching-faq" element={<CoachingFAQ />} />

        {/* Training */}
        <Route path="program-online-leads-accelerator" element={<OnlineLeadsAccelerator />} />
        <Route path="program-prospecting-bootcamp" element={<ProspectingBootcamp />} />
        <Route path="program-recruiting-roadmap" element={<RecruitingRoadmap />} />
        <Route path="altman-advantage" element={<AltmanAdvantage />} />
        <Route path="program-fast-track" element={<FastTrack />} />
        <Route path="advantage" element={<Advantage />} />
        <Route path="agent-tools" element={<AgentTools />} />
        <Route path="agent-tools/brilliant-social-content-offer" element={<SocialContentOffer />} />
        <Route path="agent-tools/control-narrative-offer" element={<ControlNarrativeOffer />} />
        <Route path="agent-tools/ai-integration-lclf-offer" element={<AIIntegrationOffer />} />

        {/* Events */}
        <Route path="events" element={<Events />} />
        <Route path="summit" element={<Summit />} />
        <Route path="the-edge" element={<TheEdge />} />
        <Route path="webinars" element={<Webinars />} />
        <Route path="speakers" element={<Speakers />} />

        {/* Content */}
        <Route path="blog" element={<Blog />} />
        <Route path="podcast" element={<Podcast />} />
        <Route path="tfshow" element={<TFShow />} />
        <Route path="mindset" element={<Mindset />} />
        <Route path="marketing" element={<Marketing />} />

        {/* About */}
        <Route path="biography" element={<Biography />} />
        <Route path="ferry-international" element={<FerryInternational />} />
        <Route path="our-mission" element={<OurMission />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />

        {/* Legal */}
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
  );
}

    export default App;
