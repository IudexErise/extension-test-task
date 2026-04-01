import { useEffect, useState } from "react";
import { PromptItem } from "@/src/types/types";
import "./LibraryTab.css";
import { deletePromptLocal, getPromptsLocal } from "@/src/hooks/library";

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

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search prompts..."
      />
      <div>
        {filtered.map((p) => (
          <div key={p.id} className="card">
            <div>
              <b>Original:</b> {p.original_text}
            </div>

            <div>
              <b>Improved:</b> {p.improved_text}
            </div>

            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LibraryTab;
