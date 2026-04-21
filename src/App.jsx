import { Routes, Route, Navigate } from "react-router-dom";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Gallery from "./pages/Gallery";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />

      <Route
        path="/gallery"
        element={
          <ProtectedRoute>
            <Gallery />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;