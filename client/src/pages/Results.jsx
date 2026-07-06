
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import SummaryCards from "../components/SummaryCards";
// import CategoryChart from "../components/CategoryChart";

// import api from "../services/api";

// import Loading from "../components/Loading";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import WebsiteCard from "../components/WebsiteCard";
// import ScoreCard from "../components/ScoreCard";
// import SeoCard from "../components/SeoCard";
// import TechnicalCard from "../components/TechnicalCard";
// import PerformanceCard from "../components/PerformanceCard";
// import ContentCard from "../components/ContentCard";
// import RecommendationCard from "../components/RecommendationCard";

// const Results = () => {
//   const { id } = useParams();

//   const [report, setReport] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     let interval;

//     const fetchReport = async () => {
//       try {
//         const res = await api.get(`/results/${id}`);

//         setReport(res.data);

//         if (
//           res.data.status === "completed" ||
//           res.data.status === "failed"
//         ) {
//           setLoading(false);

//           if (interval) {
//             clearInterval(interval);
//           }
//         }
//       } catch (err) {
//         console.error(err);
//         setError("Unable to fetch report.");
//         setLoading(false);

//         if (interval) {
//           clearInterval(interval);
//         }
//       }
//     };

//     fetchReport();

//     interval = setInterval(fetchReport, 2000);

//     return () => clearInterval(interval);
//   }, [id]);

//   if (loading) {
//     return (
//       <>
//         <Navbar />
//         <Loading />
//       </>
//     );
//   }

//   if (error) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
//           {error}
//         </div>
//       </>
//     );
//   }

//   if (!report) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen flex items-center justify-center">
//           No report found.
//         </div>
//       </>
//     );
//   }

//   if (report.status === "failed") {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
//           Analysis Failed
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gray-100 py-10">

//         <div className="max-w-7xl mx-auto px-5">

//           {/* Website Header */}
//           <WebsiteCard
//             url={report.url}
//             status={report.status}
//           />

//           {/* Score + Recommendations */}
//           <div className="grid lg:grid-cols-3 gap-8 mt-8">

//             <div className="lg:col-span-1">
//               <ScoreCard score={report.score} />
//             </div>

//             <div className="lg:col-span-2">
//               <RecommendationCard
//                 report={report.report}
//               />
//             </div>

//           </div>

//           {/* SEO + Technical */}
//           <div className="grid lg:grid-cols-2 gap-8 mt-8">

//             <SeoCard
//               seo={report.report.seo}
//             />

//             <TechnicalCard
//               technical={report.report.technical}
//             />

//           </div>

//           {/* Performance + Content */}
//           <div className="grid lg:grid-cols-2 gap-8 mt-8">

//             <PerformanceCard
//               performance={report.report.performance}
//             />

//             <ContentCard
//               content={report.report.content}
//             />

//           </div>

//         </div>

//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Results;



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExportButton from "../components/ExportButton";
import api from "../services/api";

import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WebsiteCard from "../components/WebsiteCard";
import ScoreCard from "../components/ScoreCard";
import SeoCard from "../components/SeoCard";
import TechnicalCard from "../components/TechnicalCard";
import PerformanceCard from "../components/PerformanceCard";
import ContentCard from "../components/ContentCard";
import RecommendationCard from "../components/RecommendationCard";
import SummaryCards from "../components/SummaryCards";
import CategoryChart from "../components/CategoryChart";

const Results = () => {
  const { id } = useParams();

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let interval;

    const fetchReport = async () => {
      try {
        const res = await api.get(`/results/${id}`);

        setReport(res.data);

        if (
          res.data.status === "completed" ||
          res.data.status === "failed"
        ) {
          setLoading(false);
          clearInterval(interval);
        }
      } catch (err) {
        console.error(err);
        setError("Unable to fetch report.");
        setLoading(false);
        clearInterval(interval);
      }
    };

    fetchReport();

    interval = setInterval(fetchReport, 2000);

    return () => clearInterval(interval);
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-red-600 text-xl">{error}</h2>
        </div>
      </>
    );
  }

  if (!report) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-xl">No report found.</h2>
        </div>
      </>
    );
  }

  if (report.status === "failed") {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-red-600 text-xl">
            Analysis Failed
          </h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

     <div
  id="report"
  className="min-h-screen bg-gray-100 py-10"
>

        <div className="max-w-7xl mx-auto px-5 space-y-8">

          {/* Website Header */}
          <WebsiteCard
            url={report.url}
            status={report.status}
          />
          <div className="flex justify-end mt-6">
          <ExportButton />
          </div>

          {/* Summary Cards */}
          <SummaryCards report={report.report} />

          {/* Score + Recommendations */}
          <div className="grid lg:grid-cols-3 gap-8">

            <div className="lg:col-span-1">
              <ScoreCard score={report.score} />
            </div>

            <div className="lg:col-span-2">
              <RecommendationCard
                report={report.report}
              />
            </div>

          </div>

          {/* Category Chart */}
          <CategoryChart report={report.report} />

          {/* SEO + Technical */}
          <div className="grid lg:grid-cols-2 gap-8">

            <SeoCard
              seo={report.report.seo}
            />

            <TechnicalCard
              technical={report.report.technical}
            />

          </div>

          {/* Performance + Content */}
          <div className="grid lg:grid-cols-2 gap-8">

            <PerformanceCard
              performance={report.report.performance}
            />

            <ContentCard
              content={report.report.content}
            />

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Results;