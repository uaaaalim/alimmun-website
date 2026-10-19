# alimmun-website

Мой личный сайт — немного обо мне, мои проекты и фотографии. Делаю его заодно с изучением веб-разработки и постепенно дополняю.

Сайт: [alimmun.com](https://alimmun.com)
Автор: [uaaaalim](https://github.com/uaaaalim)

## Стек

- Next.js 16.4.1 с App Router, React 19.3 и TypeScript.
- Tailwind CSS 4 для стилей, Motion для анимаций.
- Embla Carousel для каруселей, Sonner для уведомлений, Lucide и Simple Icons для иконок.
- Docker: Node.js 24, многоэтапная сборка и standalone-вывод Next.js.

## Локальный запуск

Нужны Node.js 24 и npm. Из корня проекта:

```bash
npm ci
npm run dev
```

Сайт будет доступен на [localhost:3000](http://localhost:3000).

Сборка и запуск в production-режиме без Docker:

```bash
npm run build
npm start
```

Проверка кода:

```bash
npm run lint
```

## Docker

Собрать образ и запустить контейнер локально:

```bash
docker build -t alimmun-website .
docker run -d --name alimmun-website -p 3000:3000 --restart unless-stopped alimmun-website
```

Открыть [localhost:3000](http://localhost:3000). Внутри контейнера приложение слушает порт `3000` и работает от пользователя `node`.

Логи и остановка:

```bash
docker logs -f alimmun-website
docker stop alimmun-website
docker rm alimmun-website
```

### Docker Compose на сервере

В `docker-compose.yaml` используется готовый образ `ghcr.io/uaaaalim/alimmun-website:latest`. Контейнер подключается к внешней сети `proxy`, порты на хост не публикуются. Reverse proxy должен находиться в той же сети и направлять запросы на `alimmun-website:3000`.

Если сеть ещё не создана:

```bash
docker network create proxy
```

Запуск и обновление образа:

```bash
docker compose pull
docker compose up -d
```

Логи и остановка:

```bash
docker compose logs -f website
docker compose down
```

Файл `.env.production` подключается Compose, если он есть. Для текущего приложения обязательных переменных окружения нет.

## Карта сайта

| Адрес | Что находится |
| --- | --- |
| `/` | Главная, информация обо мне и избранные проекты |
| `/projects` | Список проектов, их стек, статус и ссылки |
| `/gallery` | Галерея, пока в процессе наполнения |

[sitemap.xml](https://alimmun.com/sitemap.xml) формируется в `src/app/sitemap.ts`, [robots.txt](https://alimmun.com/robots.txt) — в `src/app/robots.ts`. При добавлении страниц список в sitemap нужно обновлять вручную. Домен также указан в метаданных в `src/app/layout.tsx`.

## Где что лежит

```text
src/app/            — страницы, общие стили, layouts и метаданные
src/components/     — компоненты интерфейса
src/lib/            — вспомогательные функции
public/             — фотографии и статические файлы
Dockerfile          — сборка production-образа
docker-compose.yaml — запуск на сервере
```

---

Сайт разрабатываю я, uaaaalim, своими руками. ИИ участвовал только как ассистент для помощи в разработке — авторство и реализация проекта за мной.
