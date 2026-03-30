export function getInstallationId(): string {
  const existing = localStorage.getItem("installation_id");

  if (existing) return existing;

  const id = crypto.randomUUID();
  localStorage.setItem("installation_id", id);

  return id;
}
