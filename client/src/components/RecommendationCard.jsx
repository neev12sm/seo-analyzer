import {
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const RecommendationCard = ({ report }) => {
  const { seo, technical, content } = report;

  const recommendations = [];

  if (seo.titleLength < 30)
    recommendations.push({
      type: "warning",
      text: "Increase the title length to 30–60 characters.",
    });

  if (seo.titleLength > 60)
    recommendations.push({
      type: "warning",
      text: "Reduce the title length to under 60 characters.",
    });

  if (seo.imagesWithoutAlt > 0)
    recommendations.push({
      type: "warning",
      text: `Add ALT text to ${seo.imagesWithoutAlt} image(s).`,
    });

  if (!technical.robots)
    recommendations.push({
      type: "warning",
      text: "Create a robots.txt file.",
    });

  if (!technical.sitemap)
    recommendations.push({
      type: "warning",
      text: "Generate a sitemap.xml.",
    });

  if (!technical.canonical)
    recommendations.push({
      type: "warning",
      text: "Add canonical tags.",
    });

  if (!content.contentLengthGood)
    recommendations.push({
      type: "warning",
      text: "Increase your content to at least 600 words.",
    });

  if (recommendations.length === 0) {
    recommendations.push({
      type: "good",
      text: "Excellent! No major SEO issues found.",
    });
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recommendations
      </h2>

      <div className="space-y-4">

        {recommendations.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 items-start border-b pb-3"
          >
            {item.type === "good" ? (
              <FaCheckCircle className="text-green-600 mt-1" />
            ) : (
              <FaExclamationTriangle className="text-yellow-500 mt-1" />
            )}

            <p>{item.text}</p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default RecommendationCard;