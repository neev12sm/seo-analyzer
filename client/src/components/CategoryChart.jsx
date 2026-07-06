import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const CategoryChart = ({ report }) => {
  const data = [
    {
      name: "SEO",
      score:
        report.seo.titleLength >= 30 &&
        report.seo.titleLength <= 60
          ? 90
          : 50,
    },
    {
      name: "Technical",
      score: report.technical.https ? 90 : 40,
    },
    {
      name: "Content",
      score: report.content.contentLengthGood ? 90 : 50,
    },
    {
      name: "Performance",
      score: report.performance.performanceScore,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        SEO Categories
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="score" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;