import RecruitingRoadmap from "@/src/pages/training/RecruitingRoadmap";
import ProtectedRoute from "@/src/components/ProtectedRoute";

export default function Page() {
  return (
    <ProtectedRoute>
      <RecruitingRoadmap />
    </ProtectedRoute>
  );
}
