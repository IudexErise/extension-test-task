let perMinuteRemaining = 0;
let perDayRemaining = 0;

export async function apiFetch<T>(
  url: string,
  options: RequestInit,
): Promise<T> {
  await new Promise((r) => setTimeout(r, 500));

  const body = options.body ? JSON.parse(options.body as string) : {};

  if (options.method === "POST" && !body.text && url.includes("/improve")) {
    throw new Error("Text is required");
  }

  if (perMinuteRemaining >= 10 || perDayRemaining >= 50) {
    throw new Error("Rate limit exceeded");
  }

  if (url.includes("/v1/improve")) {
    perMinuteRemaining++;
    perDayRemaining++;

    return {
      request_id: crypto.randomUUID(),
      improved_text: "improved: " + body.text,
      rate_limit: {
        per_minute_remaining: perMinuteRemaining,
        per_day_remaining: perDayRemaining,
        per_minute_total: 10,
        per_day_total: 50,
      },
    } as T;
  }

  if (url.includes("/v1/limits")) {
    return {
      per_minute_remaining: perMinuteRemaining,
      per_day_remaining: perDayRemaining,
      per_minute_total: 10,
      per_day_total: 50,
    } as T;
  }

  if (url.includes("/v1/prompts")) {
    return {
      prompt_id: crypto.randomUUID(),
    } as T;
  }

  throw new Error("Unknown endpoint");
}
