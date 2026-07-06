import StatCard from "./StatCard";

const SeoCard = ({ seo }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        SEO Analysis
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <StatCard
          title="Title Length"
          value={seo.titleLength}
          status={
            seo.titleLength >= 30 &&
            seo.titleLength <= 60
              ? "good"
              : "warning"
          }
        />

        <StatCard
          title="H1 Tags"
          value={seo.h1Count}
          status={seo.h1Count === 1 ? "good" : "warning"}
        />

        <StatCard
          title="Images Missing ALT"
          value={seo.imagesWithoutAlt}
          status={
            seo.imagesWithoutAlt === 0
              ? "good"
              : "danger"
          }
        />

        <StatCard
          title="Internal Links"
          value={seo.internalLinks}
          status="good"
        />

      </div>

    </div>
  );
};

export default SeoCard;