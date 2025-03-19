import React, { useState } from "react";

const Game = () => {
  const [selectedNumber, setSelectedNumber] = useState(1); // Default selected number is 1
  const [diceImage, setDiceImage] = useState("/Images/dice_1.png"); // Default dice image
  const [score, setScore] = useState(0); // Score state
  const [showRules, setShowRules] = useState(false); // Show rules state

  const diceImages = [
    { number: 1, src: "/Images/dice_1.png" },
    { number: 2, src: "/Images/dice_2.png" },
    { number: 3, src: "/Images/dice_3.png" },
    { number: 4, src: "/Images/dice_4.png" },
    { number: 5, src: "/Images/dice_5.png" },
    { number: 6, src: "/Images/dice_6.png" },
  ];

  const handleDiceClick = () => {
    const randomIndex = Math.floor(Math.random() * diceImages.length);
    const randomDice = diceImages[randomIndex];
    setDiceImage(randomDice.src);

    // Compare the selected number with the dice number
    if (selectedNumber === randomDice.number) {
      setScore(score + 2); // Add 2 points for a correct guess
    } else {
      setScore(score - 2); // Subtract 2 points for an incorrect guess
    }
  };

  const handleResetScore = () => {
    setScore(0); // Reset score to 0
  };

  const handleShowRules = () => {
    setShowRules(!showRules); // Toggle rules visibility
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-between p-6">
      {/* Top Section */}
      <div className="w-full flex justify-between items-center mb-8">
        {/* Score Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">{score}</h1>
          <p className="text-lg font-semibold text-gray-600">Score</p>
        </div>

        {/* Number Selection Section */}
        <div className="grid grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <div
              key={number}
              className={`w-16 h-16 flex items-center justify-center border-2 border-gray-300 rounded-lg cursor-pointer ${
                selectedNumber === number
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelectedNumber(number)}
            >
              {number}
            </div>
          ))}
        </div>
      </div>
          <p className="text-lg font-semibold text-gray-600 self-end mt-[15px]">
      Select a number
    </p>

      {/* Middle Section */}
      <div className="flex flex-col items-center">
        {/* Dice Section */}
        <div
          className="w-56 h-56 flex items-center justify-center bg-white border-2 border-gray-300 rounded-lg mb-4"
          onClick={handleDiceClick}
        >
          <img src={diceImage} alt="Dice" className="w-60 h-60" />
        </div>
        <p className="text-lg font-semibold text-gray-600 mb-8">
          Click on the dice
        </p>

        {/* Buttons Section */}
        <button
          className="w-48 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition mb-4"
          onClick={handleResetScore}
        >
          Reset Score
        </button>
        <button
          className="w-48 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition"
          onClick={handleShowRules}
        >
          Show Rules
        </button>

        {/* Rules Section */}
        {showRules && (
          <div className="mt-6 text-gray-700 text-lg">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">How to play dice game</h1>
            <p className="mb-4">1. Select any number</p>
            <p className="mb-4">2. Click on dice image.</p>
            <p className="mb-4">
              3. after click on  dice  if selected number is equal to dice number you will get same point as dice 
            </p>
            <p className="mb-4">
              4. if you get wrong guess then  2 point will be dedcuted from your score.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
