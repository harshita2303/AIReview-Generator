import React, { useState } from "react";
import ReviewForm from "../Components/ReviewForm.JSX";
import GeneratedReview from "../Components/GeneratedReview.JSX";

const HomePage = () => {
  const [review, setReview] = useState("");

  const handleGenerate = async ({ businessName, businessType, location, services }) => {
    const prompt = `
      Generate a review for ${businessName}, a ${businessType} located in ${location}, specializing in ${services}.
    `;

    // Mock AI-generated response
    setReview(
      "Excellent services at ${businessName}! Their ${services} are top-notch, and the staff is friendly. Highly recommended!"
    );
  };

  const redirectToGoogleReview = () => {
    const googleReviewURL =
      "https://www.google.com/search?q=keshar+beauty+kadi&oq=keshar+beauty+kadi";
    window.open(googleReviewURL, "_blank");
  };

  return (
    <div className="container mx-auto p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-6">AI Review Generator</h1>

      {/* Review Form */}
      <ReviewForm onGenerate={handleGenerate} />

      {/* Generated Review */}
      <GeneratedReview review={review} />

      {/* Submit Review Button */}
      {review && (
        <div className="text-center mt-6">
          <button
            onClick={redirectToGoogleReview}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            Submit Review
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;