"use client";
import MasterSalesPage from '../../components/MasterSalesPage';

const RecruitingRoadmap = () => {
  return (
    <MasterSalesPage 
      title="Recruiting Roadmap"
      subtitle="Team Building Mastery"
      description="The definitive guide to building a high-performance real estate team. Learn how to attract, interview, and retain top-tier talent using the exact systems that built Filipino Homes."
      image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
      features={[
        "The 'Top Producer' Attraction System",
        "Behavioral Interviewing Blueprints",
        "Compensation & Commission Structuring",
        "Retention Strategies for High Performers",
        "Scaling from Solo to Multi-City Operations"
      ]}
      price="Join for $797"
    />
  );
};

export default RecruitingRoadmap;
