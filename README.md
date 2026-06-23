# MatchAgent AI

**Премиальный лендинг AI-сервиса знакомств** — витрина продукта MatchAgent с фокусом на Telegram-бота как основной точке входа.

[![Live site](https://img.shields.io/badge/site-matchagentai.com-7C3AED?style=for-the-badge)](https://matchagentai.com)
[![Telegram Bot](https://img.shields.io/badge/Telegram-@Matchagent__bot-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/Matchagent_bot)
[![HTML5](https://img.shields.io/badge/HTML5-landing-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-premium-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> Сайт: [matchagentai.com](https://matchagentai.com) · бот: [@Matchagent_bot](https://t.me/Matchagent_bot) · репозиторий: [github.com/srgsprn/matchagentai](https://github.com/srgsprn/matchagentai)

---

## О проекте

**MatchAgent** — AI-ассистент для осмысленных знакомств. Вместо бесконечных свайпов агент ведёт диалоги, проверяет совместимость и формирует шорт-лист кандидатов — пользователь получает только релевантные матчи.

Этот репозиторий — **маркетинговый лендинг** продукта: презентация ценности, тарифов и сценария использования. Основной продукт доступен в **Telegram-боте** [@Matchagent_bot](https://t.me/Matchagent_bot).

Автор: **Sergei Suprun**

| | |
|---|---|
| **Роль** | Дизайн, вёрстка, фронтенд, деплой, CI/CD |
| **Статус** | Production |
| **Сайт** | [matchagentai.com](https://matchagentai.com) |
| **Продукт** | [t.me/Matchagent_bot](https://t.me/Matchagent_bot) |
| **Коммитов** | 50+ |

---

## Что реализовано

### Лендинг и UX

- Кинематографичный hero с анимированным intro-экраном бренда
- Секции: продукт, процесс, приложение, преимущества, отзывы, тарифы, CTA
- Премиальная визуальная система: градиенты, glass-панели, phone mockups
- Плавные scroll-reveal анимации с учётом `prefers-reduced-motion`
- Floating CTA и адаптивная мобильная навигация (burger menu)
- Open Graph meta-теги для красивых превью в Telegram и соцсетях

### Интернационализация и темы

- Двуязычность **EN / RU** без фреймворков — собственный i18n-движок на vanilla JS
- Переключение языка с сохранением в `localStorage`
- Светлая и тёмная тема (`data-theme`) + системные настройки ОС
- Синхронизация `aria-*` атрибутов при смене языка

### Инфраструктура

- Статический сайт — быстрая загрузка, минимальные зависимости
- Деплой на VPS: **Nginx** + **Let's Encrypt** (HTTPS)
- **GitHub Actions** — автоматический деплой при push в `main`
- Bash-скрипты для первичной настройки сервера и ручного деплоя

---

## Технологический стек

| Слой | Технологии |
|------|------------|
| **Разметка** | HTML5, семантические теги, accessibility |
| **Стили** | CSS3 (Flexbox, Grid, custom properties), адаптивная вёрстка |
| **Логика** | Vanilla JavaScript (ES5-compatible IIFE) |
| **Шрифты** | Google Fonts — Syne, DM Sans |
| **DevOps** | Nginx, Certbot, GitHub Actions, bash-скрипты |
| **Хостинг** | VPS (Ubuntu), статика в `/var/www/matchagentai.com` |

---

## Архитектура

```mermaid
flowchart LR
    subgraph Users["Пользователи"]
        Browser[Браузер]
        TG[Telegram]
    end

    subgraph Product["MatchAgent"]
        Landing[Лендинг<br/>matchagentai.com]
        Bot[@Matchagent_bot]
    end

    subgraph Infra["Инфраструктура"]
        GH[GitHub Actions]
        VPS[Nginx + SSL]
    end

    Browser --> Landing
    TG --> Bot
    Landing -.->|CTA| Bot
    GH -->|git pull| VPS
    VPS --> Landing
```

### Путь пользователя

```
Лендинг → знакомство с продуктом → Telegram @Matchagent_bot → профиль → AI-агент → шорт-лист матчей
```

---

## Структура репозитория

```
matchagentai/
├── index.html                    # Главная страница (все секции)
├── assets/
│   ├── css/
│   │   ├── styles.css            # Базовые стили, темы, компоненты
│   │   └── cinematic-sections.css # Анимации и кинематографичные блоки
│   ├── js/
│   │   └── main.js               # i18n, темы, навигация, анимации
│   └── img/                      # Логотип, favicon, OG-preview
├── scripts/
│   ├── deploy-local.sh           # Деплой с Mac на VPS
│   └── deploy-server.sh          # Первичная настройка nginx + SSL
├── .github/workflows/deploy.yml  # CI/CD: push → SSH → git pull
├── DEPLOY.md                     # Подробная инструкция по деплою
└── README.md
```

---

## Быстрый старт (локально)

**Требования:** любой современный браузер или Python 3

```bash
git clone https://github.com/srgsprn/matchagentai.git
cd matchagentai

# Вариант 1: открыть index.html в браузере
open index.html

# Вариант 2: локальный сервер
python3 -m http.server 8080
```

Сайт: [http://localhost:8080](http://localhost:8080)

---

## Деплой

### Автоматический (рекомендуется)

При каждом `git push origin main` срабатывает GitHub Actions и выполняет `git pull` на VPS.

Секреты в репозитории: `SERVER_HOST`, `SERVER_USER`, `DEPLOY_SSH_KEY`.

### Ручной

```bash
chmod +x scripts/deploy-local.sh
./scripts/deploy-local.sh
```

Подробные шаги — в [`DEPLOY.md`](./DEPLOY.md).

---

## Секции лендинга

| Секция | Описание |
|--------|----------|
| **Hero** | Главный оффер, CTA, кинематографичный фон |
| **Trust strip** | Метрики: диалоги ИИ, фильтрация шума, 24/7 |
| **Product** | Ценность продукта + dashboard-панель агента |
| **How it works** | 3 шага: профиль → критерии → шорт-лист |
| **Inside the app** | Phone mockups интерфейса бота |
| **Benefits** | Преимущества AI-матчинга |
| **Proof** | Отзывы и блок приватности |
| **Pricing** | Basic / Premium / Ultimate |
| **CTA** | Финальный призыв к действию |

---

## Навыки, продемонстрированные в проекте

- Разработка **premium landing page** с нуля до production
- **Адаптивная вёрстка** без CSS-фреймворков — полный контроль над дизайном
- Реализация **i18n** и **theme switching** на чистом JavaScript
- **Accessibility**: семантика, `aria-*`, reduced motion, keyboard-friendly навигация
- **Performance**: статика, preconnect шрифтов, CSS-анимации без тяжёлых библиотек
- **DevOps**: CI/CD через GitHub Actions, nginx, SSL, bash-автоматизация
- Продуктовое мышление: лендинг как воронка в Telegram-бот

---

## Контакты

**Sergei Suprun**

- GitHub: [@srgsprn](https://github.com/srgsprn)
- Email: [sergeysuprun@list.ru](mailto:sergeysuprun@list.ru)
- Сайт: [matchagentai.com](https://matchagentai.com)
- Telegram-бот: [@Matchagent_bot](https://t.me/Matchagent_bot)

---

<sub>© MatchAgent AI · Portfolio project</sub>
