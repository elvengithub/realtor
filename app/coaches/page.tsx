import OurCoaches from "@/src/pages/coaching/OurCoaches";
import ProtectedRoute from "@/src/components/ProtectedRoute";

export default function Page() {
  return (
    <ProtectedRoute>
      <OurCoaches />
    </ProtectedRoute>
  );
}
