import React from 'react';
import Navbar from './components/Navbar';
import UploadSection from './components/UploadSection';

function App() {
  return (
    <div className="w-full">
      {/* Navbar */}
      <Navbar />
      {/* Upload Section */}
      <UploadSection />
    </div>
  );
}

export default App;
