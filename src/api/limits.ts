import { API_BASE_URL } from "../config/env";
import { apiFetch } from "./client";

export interface LimitsResponse {
  per_minute_remaining: number;
  per_day_remaining: number;
  per_minute_total: number;
  per_day_total: number;
}

export function getLimits(installation_id: string) {
  return apiFetch<LimitsResponse>(
    `${API_BASE_URL}/v1/limits?installation_id=${installation_id}`,
    { method: "GET" },
  );
}
