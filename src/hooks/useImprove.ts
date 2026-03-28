import { useState } from "react";
import { improveText } from "../api/improve";
import { savePrompt } from "../api/prompts";
import { getInstallationId } from "./installationId";

export function useImprove() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const improve = async (text: string) => {
    setLoading(true);
    setError(null);

    try {
      const installation_id = await getInstallationId();

      const res = await improveText({
        text,
        installation_id,
        client: "extension",
        client_version: "0.1.0",
        client_ts: Date.now(),
      });

      await savePrompt({
        installation_id,
        client: "extension",
        client_version: "0.1.0",
        original_text: text,
        improved_text: res.improved_text,
        meta: { source: "popup" },
      });

      return res;
    } catch (e: any) {
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { improve, loading, error };
}
