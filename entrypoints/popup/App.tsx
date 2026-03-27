import "./App.css";
import "./style.css";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState<"improve" | "library">("improve");

  return (
    <div className="app">
      <section className="headlineBlock">
        <div className="headlineName">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g fill="#1c47ca">
                {" "}
                <path d="M4.083.183a.5.5 0 00-.65.65l.393.981a.5.5 0 010 .371l-.393.982a.5.5 0 00.65.65l.981-.393a.5.5 0 01.372 0l.98.392a.5.5 0 00.65-.65l-.392-.98a.5.5 0 010-.372l.393-.981a.5.5 0 00-.65-.65l-.981.392a.5.5 0 01-.372 0l-.98-.392z"></path>{" "}
                <path
                  fillRule="evenodd"
                  d="M11.414 4.104a2 2 0 00-2.828 0L.808 11.882a2 2 0 002.828 2.828l7.778-7.778a2 2 0 000-2.828zm-1.768 1.06a.5.5 0 01.708.707l-.884.884-.707-.707.883-.884zM7.702 7.11l.707.707-5.834 5.834a.5.5 0 11-.707-.707l5.834-5.834z"
                  clipRule="evenodd"
                ></path>{" "}
                <path d="M10.572 11.21a.5.5 0 010-.92l1.22-.522a.5.5 0 00.262-.262l.522-1.22a.5.5 0 01.92 0l.521 1.22a.5.5 0 00.263.262l1.219.522a.5.5 0 010 .92l-1.219.522a.5.5 0 00-.263.263l-.522 1.218a.5.5 0 01-.919 0l-.522-1.218a.5.5 0 00-.263-.263l-1.219-.522zM12.833.183a.5.5 0 00-.65.65l.293.731a.5.5 0 010 .371l-.293.732a.5.5 0 00.65.65l.731-.293a.5.5 0 01.372 0l.73.292a.5.5 0 00.65-.65l-.292-.73a.5.5 0 010-.372l.293-.731a.5.5 0 00-.65-.65l-.731.292a.5.5 0 01-.372 0l-.73-.292z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <h1 className="h1">PromptTune</h1>
        </div>
        <div className="attemptsContainer">
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke=""
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z"
                stroke="#808080"
                strokeWidth="2"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <span className="attemptsCount">47/50 today</span>
        </div>
      </section>
      <section>
        <nav className="nav">
          <div
            className={activeTab === "improve" ? "navItemActive" : "navItem"}
            onClick={() => setActiveTab("improve")}
          >
            Improve
          </div>
          <div
            className={activeTab === "library" ? "navItemActive" : "navItem"}
            onClick={() => setActiveTab("library")}
          >
            Library
          </div>
        </nav>
        <div className="promptSection">
          <h2 className="h2">Original prompt</h2>
          <textarea className="textarea" />
          <button className="buttonImprove">Improve</button>
          <h2 className="h2">Improved prompt</h2>
          <textarea className="textareaImproved" />
          <div className="improvedButtons">
            <button className="buttonImproved">
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M16 16V18.8C16 19.9201 16 20.4802 15.782 20.908C15.5903 21.2843 15.2843 21.5903 14.908 21.782C14.4802 22 13.9201 22 12.8 22H5.2C4.0799 22 3.51984 22 3.09202 21.782C2.71569 21.5903 2.40973 21.2843 2.21799 20.908C2 20.4802 2 19.9201 2 18.8V11.2C2 10.0799 2 9.51984 2.21799 9.09202C2.40973 8.71569 2.71569 8.40973 3.09202 8.21799C3.51984 8 4.0799 8 5.2 8H8M11.2 16H18.8C19.9201 16 20.4802 16 20.908 15.782C21.2843 15.5903 21.5903 15.2843 21.782 14.908C22 14.4802 22 13.9201 22 12.8V5.2C22 4.0799 22 3.51984 21.782 3.09202C21.5903 2.71569 21.2843 2.40973 20.908 2.21799C20.4802 2 19.9201 2 18.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.07989 8 5.2V12.8C8 13.9201 8 14.4802 8.21799 14.908C8.40973 15.2843 8.71569 15.5903 9.09202 15.782C9.51984 16 10.0799 16 11.2 16Z"
                    stroke="#808080"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              Copy
            </button>
            <button className="buttonImproved">
              {" "}
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke=""
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z"
                    stroke="#808080"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              Save to library
            </button>
          </div>
        </div>
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
