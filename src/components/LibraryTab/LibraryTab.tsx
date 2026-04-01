import { useEffect, useState } from "react";
import { PromptItem } from "@/src/types/types";
import "./LibraryTab.css";
import { deletePromptLocal, getPromptsLocal } from "@/src/hooks/library";
import CopySvg from "@/src/svg/copy";
import ShareSvg from "@/src/svg/share";
import DeleteSvg from "@/src/svg/delete";
import { storage } from "#imports";

function LibraryTab() {
  const [prompts, setPrompts] = useState<PromptItem[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPromptsLocal().then(setPrompts);
  }, []);

  const handleDelete = async (id: string) => {
    await deletePromptLocal(id);
    const updated = await getPromptsLocal();
    setPrompts(updated);
  };

  const filtered = prompts.filter(
    (p) =>
      p.original_text.toLowerCase().includes(search.toLowerCase()) ||
      p.improved_text.toLowerCase().includes(search.toLowerCase()),
  );

  let size = new Blob([JSON.stringify(storage.getItem("local:prompts"))]).size;

  return (
    <div className="libraryContainer">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search prompts..."
        className="search"
      />
      <div>
        {filtered.map((item) => (
          <div key={item.id} className="card">
            <div className="modelDate">
              <span>ChatGPT</span>
              <span>{item.created_at}</span>
            </div>
            <p className="original">Original: {item.original_text}</p>
            <div className="improvedContainer">
              <span className="improved">Improved:</span>
              <p className="improvedText">{item.improved_text}</p>
            </div>
            <div className="buttons">
              <button
                onClick={() =>
                  navigator.clipboard.writeText(item.improved_text)
                }
                className="button"
              >
                <CopySvg size={15} color="#808080" />
              </button>
              <button className="button">
                <ShareSvg size={15} color="#808080" />
              </button>
              <button onClick={() => handleDelete(item.id)} className="button">
                <DeleteSvg size={15} color="#ff0000" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="size">
        {prompts.length} prompts | {size} bytes
      </div>
    </div>
  );
}

export default LibraryTab;
