// Components/Round.tsx
import React from "react";
import { useParams } from "react-router-dom";
import Game from "../pages/Game";


interface RoundProps {
  round: number;
}

const Round: React.FC<RoundProps> = () => {
  const { roundNumber } = useParams<{ roundNumber: string }>();
  const round = Number(roundNumber);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Round {round}</h1>
      <Game currentRound={round} /> {/* Pass the round number to the Game component */}
    </div>
  );
};

export default Round;
