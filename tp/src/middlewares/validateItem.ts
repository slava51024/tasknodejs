import type { RequestHandler } from "express";
import items from "../services/store";

const SERIAL_NUMBER_RE = /^[A-Z]{2}-\d{4}$/;

// Проверяется тело POST/PUT. Дубликат номера запрещён; при PUT текущий id исключается.
const validateItem: RequestHandler = (req, res, next) => {
  const body: unknown = req.body;
  if (typeof body !== "object" || body === null || !("serialNumber" in body)) {
    res.status(400).json({ error: "Поле serialNumber обязательно" });
    return;
  }

  const serialNumber = (body as { serialNumber?: unknown }).serialNumber;
  if (typeof serialNumber !== "string" || !SERIAL_NUMBER_RE.test(serialNumber)) {
    res.status(400).json({
      error: "serialNumber должен быть в формате XX-0000, например AB-1234"
    });
    return;
  }

  const currentId = Number(req.params.id);
  const duplicate = items.some(
    (item) => item.serialNumber === serialNumber && item.id !== currentId
  );

  if (duplicate) {
    res.status(400).json({ error: "Запчасть с таким serialNumber уже существует" });
    return;
  }
  next();
};

export default validateItem;
