import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Header from './commen/Header';
import Footer from './commen/footer';
import ThankYou from './commen/ThankYou'; // <-- new

import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './Term&Condition';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/privacy-policy"
          element={
            <>
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />

        <Route
          path="/terms-and-conditions"
          element={
            <>
              <TermsAndConditions />
              <Footer />
            </>
          }
        />

        {/* New: standalone page, no Header/Footer */}
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;