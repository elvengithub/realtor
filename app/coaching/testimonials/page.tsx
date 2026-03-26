import Testimonials from "@/src/pages/coaching/Testimonials";
import ProtectedRoute from "@/src/components/ProtectedRoute";

export default function Page() {
  return (
    <ProtectedRoute>
      <Testimonials />
    </ProtectedRoute>
  );
}
