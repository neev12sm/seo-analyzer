import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import { FaFilePdf } from "react-icons/fa";

const ExportButton = () => {
  const downloadPDF = async () => {
    try {
      const element = document.getElementById("report");

      if (!element) {
        alert("Report not found");
        return;
      }

      const dataUrl = await toPng(element, {
        cacheBust: true,
        pixelRatio: 2,
      });

      const pdf = new jsPDF("p", "mm", "a4");

      const imgProps = pdf.getImageProperties(dataUrl);

      const pdfWidth = pdf.internal.pageSize.getWidth();

      const pdfHeight =
        (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(
        dataUrl,
        "PNG",
        0,
        0,
        pdfWidth,
        pdfHeight
      );

      pdf.save("SEO_Report.pdf");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <button
      onClick={downloadPDF}
      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg"
    >
      <FaFilePdf />
      Download Report
    </button>
  );
};

export default ExportButton;