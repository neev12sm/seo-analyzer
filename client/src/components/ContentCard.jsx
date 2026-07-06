import StatCard from "./StatCard";

const ContentCard = ({ content }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Content
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <StatCard
          title="Word Count"
          value={content.wordCount}
          status={
            content.wordCount > 600
              ? "good"
              : "warning"
          }
        />

        <StatCard
          title="Content Quality"
          value={
            content.contentLengthGood
              ? "Good"
              : "Poor"
          }
          status={
            content.contentLengthGood
              ? "good"
              : "warning"
          }
        />

      </div>

    </div>
  );
};

export default ContentCard;