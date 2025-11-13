import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import StripeSuccessPage from "./pages/StripeSuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stripe-successfull" element={<StripeSuccessPage />} />
        <Route path="/stripe-success" element={<StripeSuccessPage />} />
        <Route path="/success" element={<StripeSuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
