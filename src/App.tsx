import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './i18n';
import { useAnalytics } from './hooks/useAnalytics';
import HomePage from './pages/HomePage';
import StripeSuccessPage from './pages/StripeSuccessPage';

function AnalyticsTracker() {
  useAnalytics();
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stripe-successfull" element={<StripeSuccessPage />} />
          <Route path="/stripe-success" element={<StripeSuccessPage />} />
          <Route path="/success" element={<StripeSuccessPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
