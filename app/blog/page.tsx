import Blog from "@/src/pages/content/Blog";
import ProtectedRoute from "@/src/components/ProtectedRoute";

export default function Page() {
  return (
    <ProtectedRoute>
      <Blog />
    </ProtectedRoute>
  );
}
