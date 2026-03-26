import Coaching from "@/src/pages/Coaching";
import ProtectedRoute from "@/src/components/ProtectedRoute";

export default function Page() {
  return (
    <ProtectedRoute>
      <Coaching />
    </ProtectedRoute>
  );
}
