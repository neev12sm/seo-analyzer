import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ScoreCard = ({ score }) => {

  const color =
    score >= 80
      ? "#22c55e"
      : score >= 50
      ? "#f59e0b"
      : "#ef4444";

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">

      <h2 className="text-3xl font-bold mb-8">
        Overall SEO Score
      </h2>

      <div className="w-56 h-56 mx-auto">

        <CircularProgressbar
          value={score}
          text={`${score}`}
          styles={buildStyles({
            pathColor: color,
            textColor: "#111827",
            trailColor: "#e5e7eb",
          })}
        />

      </div>

    </div>
  );
};

export default ScoreCard;