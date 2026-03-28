export async function getInstallationId(): Promise<string> {
  const { installation_id } = (await browser.storage.local.get(
    "installation_id",
  )) as { installation_id?: string };

  if (installation_id) return installation_id;

  const id = crypto.randomUUID();
  await browser.storage.local.set({ installation_id: id });

  return id;
}
