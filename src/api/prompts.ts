import { API_BASE_URL } from "../config/env";
import { apiFetch } from "./client";

export function savePrompt(data: {
  installation_id: string;
  client: "extension";
  client_version: string;
  original_text: string;
  improved_text: string;
  meta: { source: "popup" };
}) {
  return apiFetch<{ prompt_id: string }>(`${API_BASE_URL}/v1/prompts`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
