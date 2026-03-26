import Biography from "@/src/pages/about/Biography";
import ProtectedRoute from "@/src/components/ProtectedRoute";

export default function Page() {
  return (
    <ProtectedRoute>
      <Biography />
    </ProtectedRoute>
  );
}
