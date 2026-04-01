import "./ImproveTab.css";
import { Dispatch, useState } from "react";
import BookmarkSvg from "@/src/svg/bookmark";
import CopySvg from "@/src/svg/copy";
import { useImprove } from "@/src/hooks/useImprove";
import { Limits } from "@/src/types/types";
import { savePromptLocal } from "@/src/hooks/library";
import { savePrompt } from "@/src/api/prompts";
import { getInstallationId } from "@/src/hooks/installationId";

type Props = {
  setLimits: Dispatch<React.SetStateAction<Limits | null>>;
};

function ImproveTab({ setLimits }: Props) {
  const [originalPrompt, setOriginalPrompt] = useState<string>("");
  const [improvedPrompt, setImprovedPrompt] = useState<string>("");

  const { improve, loading, error } = useImprove();

  const handleImprove = async () => {
    if (!originalPrompt.trim()) return;
    try {
      const res = await improve(originalPrompt);
      setImprovedPrompt(res.improved_text);
      setLimits(res.rate_limit);
    } catch (e) {
      alert((e as Error).message);
    }
  };

  const handleSave = async () => {
    if (!improvedPrompt.trim()) return;
    const id = await getInstallationId();
    const res = await savePrompt({
      installation_id: id,
      client: "extension",
      client_version: "0.1.0",
      original_text: originalPrompt,
      improved_text: improvedPrompt,
      meta: { source: "popup" },
    });

    await savePromptLocal({
      id: res.prompt_id,
      original_text: originalPrompt,
      improved_text: improvedPrompt,
      created_at: Date.now(),
    });
    setOriginalPrompt("");
    setImprovedPrompt("");
  };

  return (
    <div className="promptSection">
      <h2 className="h2">Original prompt</h2>
      <textarea
        className="textarea"
        value={originalPrompt}
        onChange={(e) => setOriginalPrompt(e.target.value)}
        disabled={loading}
      />
      {error && <div>{error}</div>}
      <button
        className="buttonImprove"
        onClick={handleImprove}
        disabled={loading}
      >
        {loading ? "Improving..." : "Improve"}
      </button>
      <h2 className="h2">Improved prompt</h2>
      <textarea className="textareaImproved" readOnly value={improvedPrompt} />
      <div className="improvedButtons">
        <button
          className="buttonImproved"
          onClick={() => navigator.clipboard.writeText(improvedPrompt)}
        >
          <CopySvg size="15px" color="#808080" />
          Copy
        </button>
        <button className="buttonImproved" onClick={handleSave}>
          <BookmarkSvg size="15px" color="#808080" />
          Save to library
        </button>
      </div>
      <section className="modelsSection">
        <div className="openPaste">
          <span>Open & Paste</span>
        </div>
        <div className="models">
          <button>ChatGPT</button>
          <button>Claude</button>
          <button>Perplexity</button>
          <button>Groq</button>
          <button>Deepseek</button>
        </div>
        <span className="footer">Powered by AI v1.2.0</span>
      </section>
    </div>
  );
}

export default ImproveTab;
