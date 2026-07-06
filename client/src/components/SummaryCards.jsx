import {
  FaSearch,
  FaTools,
  FaBolt,
  FaFileAlt,
} from "react-icons/fa";

const SummaryCards = ({ report }) => {
  const cards = [
    {
      title: "SEO",
      icon: <FaSearch />,
      value:
        report.seo.titleLength >= 30 &&
        report.seo.titleLength <= 60
          ? "Good"
          : "Needs Work",
    },
    {
      title: "Technical",
      icon: <FaTools />,
      value: report.technical.https
        ? "Healthy"
        : "Issues",
    },
    {
      title: "Performance",
      icon: <FaBolt />,
      value: report.performance.performanceScore,
    },
    {
      title: "Content",
      icon: <FaFileAlt />,
      value: report.content.wordCount,
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="text-blue-600 text-3xl mb-4">
            {card.icon}
          </div>

          <h3 className="text-gray-500">
            {card.title}
          </h3>

          <p className="text-2xl font-bold mt-2">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;