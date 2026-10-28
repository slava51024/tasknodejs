import items from "./services/store";
import type { Item } from "./types/item";

export default function seed(): void {
  // В варианте N = 1 создаётся одна начальная запись.
  if (items.length > 0) return;

  const initialItem: Item = {
    id: 1,
    serialNumber: "AB-0001",
    name: "Запчасть №1",
    quantity: 10,
    price: 1100
  };
  items.push(initialItem);
}
