import { apiFetch } from "../api/client";
import AttemptsCounter from "../components/AttemptsCounter/AttemptsCounter";
import TabSwitcher from "../components/TabSwitcher/TabSwitcher";
import WandSvg from "../svg/wand";
import { Limits } from "../types/types";
import "./App.css";

function App() {
  const [limits, setLimits] = useState<Limits | null>(null);

  useEffect(() => {
    apiFetch<Limits>("/v1/limits", {
      method: "GET",
    }).then(setLimits);
  }, []);

  return (
    <div className="app">
      <section className="headlineBlock">
        <div className="headlineName">
          <WandSvg size="20px" color="#1c47ca" />
          <h1 className="h1">PromptTune</h1>
        </div>
        <AttemptsCounter limits={limits} />
      </section>
      <section>
        <TabSwitcher setLimits={setLimits} />
      </section>
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
      </section>
      <span className="footer">Powered by AI v1.2.0</span>
    </div>
  );
}

export default App;
