import StatCard from "./StatCard";

const PerformanceCard = ({ performance }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Performance
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        <StatCard
          title="Score"
          value={performance.performanceScore}
          status={
            performance.performanceScore >= 80
              ? "good"
              : "warning"
          }
        />

        <StatCard
          title="FCP"
          value={performance.FCP}
          status="good"
        />

        <StatCard
          title="LCP"
          value={performance.LCP}
          status="good"
        />

        <StatCard
          title="CLS"
          value={performance.CLS}
          status="good"
        />

        <StatCard
          title="TBT"
          value={performance.TBT}
          status="good"
        />

        <StatCard
          title="Speed Index"
          value={performance.SpeedIndex}
          status="good"
        />

      </div>

    </div>
  );
};

export default PerformanceCard;