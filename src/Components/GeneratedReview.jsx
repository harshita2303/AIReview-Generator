import React from "react";

const GeneratedReview = ({ review }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto mt-6">
      <h2 className="text-lg font-bold mb-4">Generated Review</h2>
      {review ? (
        <p>{review}</p>
      ) : (
        <p className="text-gray-500">No review generated yet.</p>
      )}
    </div>
  );
};

export default GeneratedReview;