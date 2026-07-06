const HeroStats = () => {
  const stats = [
    {
      number: "10K+",
      title: "Websites Audited",
    },
    {
      number: "98%",
      title: "Detection Accuracy",
    },
    {
      number: "24/7",
      title: "Availability",
    },
  ];

  return (
    <div className="flex flex-wrap gap-10 mt-14">

      {stats.map((item) => (
        <div key={item.title}>

          <h2 className="text-4xl font-bold text-cyan-400">
            {item.number}
          </h2>

          <p className="text-gray-400 mt-2">
            {item.title}
          </p>

        </div>
      ))}

    </div>
  );
};

export default HeroStats;