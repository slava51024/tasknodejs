import items from "./store";
import type { Item, CreateItemInput, PatchItemInput } from "../types/item";

export function getAll(filter?: string): Item[] {
  if (!filter) return items;
  return items.filter((item) => item.serialNumber === filter);
}

export function getById(id: string): Item | undefined {
  return items.find((item) => item.id === Number(id));
}

export function create(data: CreateItemInput): Item {
  const item: Item = {
    id: items.length ? Math.max(...items.map((entry) => entry.id)) + 1 : 1,
    ...data
  };
  items.push(item);
  return item;
}

export function update(id: string, data: CreateItemInput): Item | null {
  const numericId = Number(id);
  const index = items.findIndex((item) => item.id === numericId);
  if (index === -1) return null;
  const updated: Item = { id: numericId, ...data };
  items[index] = updated;
  return updated;
}

export function patch(id: string, data: PatchItemInput): Item | null {
  const numericId = Number(id);
  const index = items.findIndex((item) => item.id === numericId);
  if (index === -1) return null;
  const updated: Item = { ...items[index], ...data, id: numericId };
  items[index] = updated;
  return updated;
}

export function remove(id: string): boolean {
  const index = items.findIndex((item) => item.id === Number(id));
  if (index === -1) return false;
  items.splice(index, 1);
  return true;
}
