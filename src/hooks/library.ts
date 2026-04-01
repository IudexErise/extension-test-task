import { PromptItem } from "../types/types";
import { storage } from "#imports";

export async function getPromptsLocal(): Promise<PromptItem[]> {
  const data = await storage.getItem("local:prompts");
  return (data as PromptItem[]) || [];
}

export async function savePromptLocal(item: PromptItem) {
  const data = await storage.getItem("local:prompts");
  const prompts = (data || []) as PromptItem[];
  const updated = [item, ...prompts].slice(0, 200);
  await storage.setItem("local:prompts", updated);
}

export async function deletePromptLocal(id: string) {
  const prompts = await getPromptsLocal();

  const updated = prompts.filter((p) => p.id !== id);
  await storage.setItem("local:prompts", updated);
}
