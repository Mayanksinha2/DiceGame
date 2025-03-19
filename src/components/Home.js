import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <img
              src="/Images/dices.png"
              alt="Dice Game"
              className="w-full max-w-md rounded-lg"
            />
          </div>

          {/* Right Column - Heading and Button */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Dice Game
            </h1>
            <div className="flex justify-center">
              <button
                className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition"
                onClick={() => navigate("/game")}
              >
                Play Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
