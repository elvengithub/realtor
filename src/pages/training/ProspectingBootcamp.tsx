"use client";
import MasterSalesPage from '../../components/MasterSalesPage';

const ProspectingBootcamp = () => {
  return (
    <MasterSalesPage 
      title="Prospecting Bootcamp"
      subtitle="High-Velocity Sales"
      description="30 days of intensive, high-impact prospecting. Learn the exact scripts, schedules, and systems Anthony Leuterio used to build a multi-billion peso pipeline."
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
      features={[
        "The Million-Peso Script Library",
        "Overcoming Objections with Heart",
        "Daily High-Energy Prospecting Schedules",
        "Expired & FSBO Mastery",
        "Live Call Coaching & Roleplay"
      ]}
      price="Join for $497"
    />
  );
};

export default ProspectingBootcamp;
