export interface Item {
  id: number;
  serialNumber: string;
  name: string;
  quantity: number;
  price: number;
}

export type CreateItemInput = Omit<Item, "id">;
export type PatchItemInput = Partial<CreateItemInput>;
