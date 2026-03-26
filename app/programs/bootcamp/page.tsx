import ProspectingBootcamp from "@/src/pages/training/ProspectingBootcamp";
import ProtectedRoute from "@/src/components/ProtectedRoute";

export default function Page() {
  return (
    <ProtectedRoute>
      <ProspectingBootcamp />
    </ProtectedRoute>
  );
}
