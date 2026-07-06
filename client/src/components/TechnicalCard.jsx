import StatCard from "./StatCard";

const TechnicalCard = ({ technical }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Technical SEO
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <StatCard
          title="HTTPS"
          value={technical.https ? "Enabled" : "Missing"}
          status={technical.https ? "good" : "danger"}
        />

        <StatCard
          title="Robots.txt"
          value={technical.robots ? "Found" : "Missing"}
          status={technical.robots ? "good" : "danger"}
        />

        <StatCard
          title="Sitemap"
          value={technical.sitemap ? "Found" : "Missing"}
          status={technical.sitemap ? "good" : "danger"}
        />

        <StatCard
          title="Canonical"
          value={technical.canonical ? "Present" : "Missing"}
          status={technical.canonical ? "good" : "warning"}
        />

      </div>

    </div>
  );
};

export default TechnicalCard;