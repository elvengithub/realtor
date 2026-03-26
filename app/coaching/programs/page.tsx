import OurPrograms from "@/src/pages/coaching/OurPrograms";
import ProtectedRoute from "@/src/components/ProtectedRoute";

export default function Page() {
  return (
    <ProtectedRoute>
      <OurPrograms />
    </ProtectedRoute>
  );
}
