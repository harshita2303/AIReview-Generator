import React, { useState } from "react";

const ReviewForm = ({ onGenerate }) => {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [location, setLocation] = useState("");
  const [services, setServices] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({ businessName, businessType, location, services });
  };

  return (
    <form
      className="bg-white p-6 rounded shadow-md max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-lg font-bold mb-4">Enter Business Details</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Business Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Business Type</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Location</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Services</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={services}
          onChange={(e) => setServices(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
      >
        Generate Review
      </button>
    </form>
  );
};

export default ReviewForm;