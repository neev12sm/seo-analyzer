import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { FaSearch } from "react-icons/fa";

const UrlInput = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!url.trim()) {
      alert("Please enter a website URL");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/analyze", {
        url,
      });

      navigate(`/results/${res.data.jobId}`);

    } catch (err) {
      console.error(err);

      alert("Unable to analyze website.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-3xl mx-auto mt-12 bg-white rounded-xl shadow-xl overflow-hidden flex"
    >
      <input
        type="text"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-1 px-6 py-5 outline-none text-lg"
      />

      <button
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 flex items-center gap-2 disabled:bg-blue-300"
      >
        <FaSearch />

        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </form>
  );
};

export default UrlInput;


