import WandSvg from "@/src/svg/wand";
import "./TabSwitcher.css";
import { useState } from "react";
import BookmarkSvg from "@/src/svg/bookmark";
import CopySvg from "@/src/svg/copy";

function TabSwitcher() {
  const [activeTab, setActiveTab] = useState<"improve" | "library">("improve");
  const [originalPrompt, setOriginalPrompt] = useState<string>("");
  const [improvedPrompt, setImprovedPrompt] = useState<string>("");

  return (
    <div className="tabsContainer">
      <nav className="nav">
        <div
          className={activeTab === "improve" ? "navItemActive" : "navItem"}
          onClick={() => setActiveTab("improve")}
        >
          <WandSvg
            size="15px"
            color={activeTab === "improve" ? "white" : "#808080"}
          />
          Improve
        </div>
        <div
          className={activeTab === "library" ? "navItemActive" : "navItem"}
          onClick={() => setActiveTab("library")}
        >
          <BookmarkSvg
            size="15px"
            color={activeTab === "library" ? "white" : "#808080"}
          />
          Library
        </div>
      </nav>
      {activeTab === "improve" && (
        <div className="promptSection">
          <h2 className="h2">Original prompt</h2>
          <textarea
            className="textarea"
            value={originalPrompt}
            onChange={(e) => setOriginalPrompt(e.target.value)}
          />
          <button
            className="buttonImprove"
            onClick={() =>
              setImprovedPrompt("Imoproved prompt: " + originalPrompt)
            }
          >
            Improve
          </button>
          <h2 className="h2">Improved prompt</h2>
          <textarea
            className="textareaImproved"
            readOnly
            value={improvedPrompt}
          />
          <div className="improvedButtons">
            <button
              className="buttonImproved"
              onClick={() => navigator.clipboard.writeText(improvedPrompt)}
            >
              <CopySvg size="15px" color="#808080" />
              Copy
            </button>
            <button className="buttonImproved">
              <BookmarkSvg size="15px" color="#808080" />
              Save to library
            </button>
          </div>
        </div>
      )}
      {activeTab === "library" && (
        <div>
          <div>search</div>
          <div>
            <button>ChatGPT</button>
            <button>Claude</button>
            <button>Perplexity</button>
            <button>Groq</button>
            <button>Deepseek</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TabSwitcher;
