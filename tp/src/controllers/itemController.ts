import type { RequestHandler } from "express";
import * as service from "../services/itemService";
import type { CreateItemInput, PatchItemInput } from "../types/item";

export const getAll: RequestHandler = (req, res, next) => {
  try {
    const rawFilter = req.query.serialNumber;
    const filter = typeof rawFilter === "string" ? rawFilter : undefined;
    res.status(200).json(service.getAll(filter));
  } catch (err) { next(err); }
};

export const getById: RequestHandler<{ id: string }> = (req, res, next) => {
  try {
    const item = service.getById(req.params.id);
    if (!item) {
      res.status(404).json({ error: "Запчасть не найдена" });
      return;
    }
    res.status(200).json(item);
  } catch (err) { next(err); }
};

export const create: RequestHandler = (req, res, next) => {
  try {
    const item = service.create(req.body as CreateItemInput);
    res.status(201).json(item);
  } catch (err) { next(err); }
};

export const update: RequestHandler<{ id: string }> = (req, res, next) => {
  try {
    const item = service.update(req.params.id, req.body as CreateItemInput);
    if (!item) {
      res.status(404).json({ error: "Запчасть не найдена" });
      return;
    }
    res.status(200).json(item);
  } catch (err) { next(err); }
};

export const patch: RequestHandler<{ id: string }> = (req, res, next) => {
  try {
    const item = service.patch(req.params.id, req.body as PatchItemInput);
    if (!item) {
      res.status(404).json({ error: "Запчасть не найдена" });
      return;
    }
    res.status(200).json(item);
  } catch (err) { next(err); }
};

export const remove: RequestHandler<{ id: string }> = (req, res, next) => {
  try {
    const removed = service.remove(req.params.id);
    if (!removed) {
      res.status(404).json({ error: "Запчасть не найдена" });
      return;
    }
    res.status(204).send();
  } catch (err) { next(err); }
};
