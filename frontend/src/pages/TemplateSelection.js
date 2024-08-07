import React from 'react';

const TemplateSelection = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Select a Template</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Template Thumbnails */}
          <div className="border p-4 rounded">
            <h3 className="text-lg font-bold">Template 1</h3>
            <img src="template1-thumbnail.jpg" alt="Template 1" className="w-full mt-2" />
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-lg font-bold">Template 2</h3>
            <img src="template2-thumbnail.jpg" alt="Template 2" className="w-full mt-2" />
          </div>
          {/* Add more templates as needed */}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;
