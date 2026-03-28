export async function apiFetch<T>(
  url: string,
  options: RequestInit,
): Promise<T> {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const text = await res.text();

    switch (res.status) {
      case 403:
        throw new Error("Your login is invalid");
      case 422:
        throw new Error(text);
      case 429:
        throw new Error("Rate limit exceeded");
      default:
        throw new Error("Unknown error");
    }
  }

  return res.json();
}
