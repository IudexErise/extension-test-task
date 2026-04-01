export type Limits = {
  per_minute_remaining: number;
  per_day_remaining: number;
  per_minute_total: number;
  per_day_total: number;
};

export type PromptItem = {
  id: string;
  original_text: string;
  improved_text: string;
  created_at: number;
};
