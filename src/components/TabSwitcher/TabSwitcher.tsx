import WandSvg from "@/src/svg/wand";
import "./TabSwitcher.css";
import { Dispatch, useState } from "react";
import BookmarkSvg from "@/src/svg/bookmark";
import { Limits } from "@/src/types/types";
import ImproveTab from "../ImproveTab/ImproveTab";
import LibraryTab from "../LibraryTab/LibraryTab";

type Props = {
  setLimits: Dispatch<React.SetStateAction<Limits | null>>;
};

function TabSwitcher({ setLimits }: Props) {
  const [activeTab, setActiveTab] = useState<"improve" | "library">("improve");

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
      {activeTab === "improve" && <ImproveTab setLimits={setLimits} />}
      {activeTab === "library" && <LibraryTab />}
    </div>
  );
}

export default TabSwitcher;
