import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [cropImage, setCropImage] = useState(null);
  const [sensorData, setSensorData] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0];
    if (fileType === "image") {
      setCropImage(file);
    } else {
      setSensorData(file);
    }
  };

  const handleUpload = () => {
    setErrorMessage("");

    if (!cropImage || !sensorData) {
      setErrorMessage("Please select both a crop image and a sensor data file.");
      return;
    }

    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      navigate("./Dashboard"); // ✅ go to dashboard route
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 p-4 sm:p-6 lg:p-8">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Crop Data Uploader
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Upload your crop image and sensor data CSV to get started with analytics.
        </p>

        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="flex flex-col gap-5">
          {/* Image Upload */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="crop-image" className="text-gray-700 font-medium">
              Crop Image (JPG/PNG)
            </label>
            <input
              type="file"
              id="crop-image"
              accept=".jpg,.jpeg,.png"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              onChange={(e) => handleFileChange(e, "image")}
            />
            {cropImage && (
              <span className="text-green-500 text-sm mt-1">
                Selected: {cropImage.name}
              </span>
            )}
          </div>

          {/* CSV Upload */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="sensor-data" className="text-gray-700 font-medium">
              Sensor Data (CSV)
            </label>
            <input
              type="file"
              id="sensor-data"
              accept=".csv"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              onChange={(e) => handleFileChange(e, "csv")}
            />
            {sensorData && (
              <span className="text-green-500 text-sm mt-1">
                Selected: {sensorData.name}
              </span>
            )}
          </div>

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={!cropImage || !sensorData || isUploading}
            className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
              isUploading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white shadow-lg"
            }`}
          >
            {isUploading ? "Uploading..." : "Upload & Get Analytics"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
