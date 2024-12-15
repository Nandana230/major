import React from 'react';

const UploadSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-white to-purple-100 gap-4">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">
        Upload Your Research Paper
      </h1>
      <label className="bg-indigo-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-indigo-700">
        Choose File
        <input type="file" className="hidden" />
      </label>
      <button className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700">
        Upload File
      </button>
    </div>
  );
};

export default UploadSection;
