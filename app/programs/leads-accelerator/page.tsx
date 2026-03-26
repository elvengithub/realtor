import OnlineLeadsAccelerator from "@/src/pages/training/OnlineLeadsAccelerator";
import ProtectedRoute from "@/src/components/ProtectedRoute";

export default function Page() {
  return (
    <ProtectedRoute>
      <OnlineLeadsAccelerator />
    </ProtectedRoute>
  );
}
