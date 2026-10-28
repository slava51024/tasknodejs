# Типизированная версия проекта

Проект переведён с JavaScript на TypeScript. Исходная архитектура сохранена: routes → controllers → services → store.

## Запуск

```bash
npm install
npm run dev
```

Проверка типов и компиляция:

```bash
npm run build
npm start
```

Сервер запускается на `http://localhost:3000` (порт можно изменить в `.env`). Примеры запросов находятся в `requests.http`.

## Где находятся типы

- `src/types/item.ts` — интерфейс `Item`, типы создания и частичного обновления.
- `src/services/store.ts` — хранилище имеет тип `Item[]`.
- `src/services/itemService.ts` — типизированы аргументы и возвращаемые значения сервисов.
- `src/controllers/itemController.ts` — обработчики используют тип `RequestHandler` из Express.
- Middleware используют `RequestHandler` и `ErrorRequestHandler`.

Данные пока хранятся в памяти процесса, поэтому при перезапуске сервера начальные данные создаются заново.
