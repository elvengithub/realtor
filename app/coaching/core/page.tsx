import CoachingCore from "@/src/pages/coaching/CoachingCore";
import ProtectedRoute from "@/src/components/ProtectedRoute";

export default function Page() {
  return (
    <ProtectedRoute>
      <CoachingCore />
    </ProtectedRoute>
  );
}
