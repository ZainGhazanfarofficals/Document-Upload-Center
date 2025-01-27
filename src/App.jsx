import React, { useState } from "react";

const App = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const clearFile = () => {
    setFile(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
        {/* Title */}
        <h2 className="text-center text-lg font-semibold">
          Document Upload Center{" "}
          <span className="text-sky-500">Upload</span>
        </h2>

        {/* Supported File Formats */}
        <p className="text-center text-sm text-gray-500 mt-2">
          The following are the file formats that you are able to upload: Doc,
          Docx, Jpg, Jpeg, Png, Pdf
        </p>

        {/* Upload Area */}
        {!file ? (
          <div className="mt-6 border border-gray-300 px-4 py-6 border-b-2 border-b-blue-500 rounded-md text-center">
            <label
              htmlFor="fileUpload"
              className="cursor-pointer text-sky-500 underline"
            >
              Click HERE to upload a File
            </label>
            <input
              id="fileUpload"
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        ) : (
          <div className="mt-6">
            {/* File Details */}
            <p className="text-sm text-gray-700">
              File: <strong>{file.name}</strong>
            </p>
            {/* Replace and Clear Buttons */}
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => document.getElementById("fileUpload").click()}
                className="flex items-center space-x-1 text-blue-500"
              >
                <span>🔄</span>
                <span>Replace</span>
              </button>
              <button
                onClick={clearFile}
                className="flex items-center space-x-1 text-red-500"
              >
                <span>❌</span>
                <span>Clear</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
