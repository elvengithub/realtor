"use client";
import MasterSalesPage from '../../components/MasterSalesPage';

const CoachingCore = () => {
  return (
    <MasterSalesPage 
      title="The Core Systems"
      subtitle="Foundational Ecosystem Architecture"
      description="This is not just sales training; it is a blueprint for domination. Learn the exact 'Market Gap' methodology that allowed Anthony to scale Filipino Homes from a local idea to a global empire. Master the art of digitizing your value chain."
      image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
      features={[
        "The 'Market Gap' Analysis Framework",
        "Digital Ecosystem Integration (Rent.ph Model)",
        "Global Lead Generation Systems",
        "The 'God-Family-Business' Leadership Model",
        "Scaling from Solo Agent to Network Builder"
      ]}
      price="Application Only"
      ctaText="Apply for Access"
    />
  );
};

export default CoachingCore;
