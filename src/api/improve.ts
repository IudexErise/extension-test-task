import { API_BASE_URL } from "../config/env";
import { apiFetch } from "./client";

export interface ImproveRequest {
  text: string;
  installation_id: string;
  client: "extension";
  client_version: string;
  client_ts: number;
}

export interface ImproveResponse {
  request_id: string;
  improved_text: string;
  rate_limit: {
    per_minute_remaining: number;
    per_day_remaining: number;
    per_minute_total: number;
    per_day_total: number;
  };
}

export function improveText(data: ImproveRequest) {
  return apiFetch<ImproveResponse>(`${API_BASE_URL}/v1/improve`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
