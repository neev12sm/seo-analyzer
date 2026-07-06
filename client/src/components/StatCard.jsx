const StatCard = ({ title, value, status }) => {

  const width =
    status === "good"
      ? "100%"
      : status === "warning"
      ? "60%"
      : "25%";

  return (
    <div className="bg-white rounded-xl border p-5 shadow">

      <h3 className="text-gray-500">
        {title}
      </h3>

      <h2 className="text-2xl font-bold mt-2">
        {value}
      </h2>

      <div className="w-full bg-gray-200 rounded-full h-2 mt-5">

        <div
          className={`h-2 rounded-full ${
            status === "good"
              ? "bg-green-500"
              : status === "warning"
              ? "bg-yellow-400"
              : "bg-red-500"
          }`}
          style={{ width }}
        />

      </div>

    </div>
  );
};

export default StatCard;