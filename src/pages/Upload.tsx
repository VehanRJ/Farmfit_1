import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [cropImage, setCropImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [predictionData, setPredictionData] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCropImage(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
  };

  const handleUpload = async () => {
    setErrorMessage("");
    setPredictionData(null);

    if (!cropImage) {
      setErrorMessage("Please select a crop image before uploading.");
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", cropImage);

      // Optional: simulate a small delay for loading animation
      await new Promise((resolve) => setTimeout(resolve, 800));

      const response = await axios.post("http://localhost:8000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Optional: small delay before showing results
      await new Promise((resolve) => setTimeout(resolve, 500));

      setPredictionData(response.data);
    } catch (error) {
      console.error("Upload/Prediction failed:", error);
      setErrorMessage("Failed to get prediction from server.");
    } finally {
      setIsUploading(false);
    }
  };

  const getResultBgColor = () => {
    if (!predictionData) return "bg-green-50";
    return predictionData.Status === "Healthy" ? "bg-green-50" : "bg-red-50";
  };
  const getBorderColor = () => {
    if (!predictionData) return "border-green-200";
    return predictionData.Status === "Healthy" ? "border-green-200" : "border-red-400";
  };
  const getTextColor = () => {
    if (!predictionData) return "text-gray-700";
    return predictionData.Status === "Healthy" ? "text-green-800" : "text-red-800";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl p-10">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
          Crop Disease Analyzer
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Upload your crop image to get disease prediction and treatment solutions.
        </p>

        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center">
            {errorMessage}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Image Upload & Preview */}
          <div className="flex flex-col items-center gap-4 w-full lg:w-1/2">
            <label
              htmlFor="crop-image"
              className="text-lg font-medium text-gray-700"
            >
              Select Crop Image (JPG/PNG)
            </label>
            <input
              type="file"
              id="crop-image"
              accept=".jpg,.jpeg,.png"
              className="w-full text-gray-500 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 hover:cursor-pointer"
              onChange={handleFileChange}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg shadow-md border border-gray-300 mt-4"
              />
            )}
            <button
              onClick={handleUpload}
              disabled={isUploading}
              className={`mt-6 w-full py-3 px-6 rounded-full font-semibold text-white shadow-lg transition-all duration-300 ${
                isUploading
                  ? "bg-green-400"
                  : "bg-green-600 hover:bg-green-700 hover:cursor-pointer"
              }`}
            >
              {isUploading ? "Analyzing..." : "Upload & Get Analytics"}
            </button>

            {/* Loading Spinner */}
            {isUploading && (
              <div className="flex justify-center mt-4">
                <div className="w-12 h-12 border-4 border-green-300 border-t-green-600 rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          {/* Right: Prediction Results */}
          {predictionData && !isUploading && (
            <div
              className={`flex-1 p-6 rounded-2xl shadow-lg border ${getBorderColor()} ${getResultBgColor()} flex flex-col justify-center`}
            >
              <h2 className={`text-3xl font-semibold mb-6 ${getTextColor()}`}>
                Prediction Results
              </h2>
              <div className="grid grid-cols-1 gap-3">
                <p className="text-lg"><strong>Status:</strong> {predictionData.Status}</p>
                <p className="text-lg"><strong>Message:</strong> {predictionData.message}</p>
                <p className="text-lg"><strong>Confidence:</strong> {predictionData.confidence}</p>
              </div>
              {predictionData.solutions && (
                <div className="mt-6">
                  <strong className="text-lg">Solutions:</strong>
                  <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
                    {Array.isArray(predictionData.solutions)
                      ? predictionData.solutions.map((sol, idx) => (
                          <li key={idx}>{sol}</li>
                        ))
                      : <li>{predictionData.solutions}</li>
                    }
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
