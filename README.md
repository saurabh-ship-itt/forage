# Forge 2 · Edition 1 Qualifier — Kanban Board

**Builder:** Saurabh Mishra · PSIT Kanpur (B.Tech CSE Data Science)
**Qualifier:** Forge 2 Edition 1 · NMG Gurgaon · June 27 2026

> A Trello-style Kanban board built by a two-agent system (OpenClaw + Hermes) orchestrated through Slack — Laravel API + React frontend, 100% free stack.

**Live URL:** `https://forge2-kanban-saurabh.vercel.app` *(update after deploy)*
**GitHub:** `https://github.com/saurabhmishra-psit/forge2-qualifier-saurabh`

---

## What the App Does

- **Boards** — Create and manage multiple project boards with colour labels
- **Lists** — Each board has ordered lists (To Do / In Progress / Done, etc.)
- **Cards** — Create cards in lists with title + description; drag between lists
- **Tags / Labels** — Add coloured tags (bug, feature, design, urgent…) to cards
- **Assign Members** — Add members to a board and assign them to individual cards
- **Due Dates** — Set due dates; overdue cards are visually flagged in red

---

## Models Used

| Agent    | Primary Model                    | Fallback                     | Provider |
|----------|----------------------------------|------------------------------|----------|
| Hermes   | `openai/gpt-oss-120b`            | `gemini-2.5-flash`           | Groq / Gemini (free) |
| OpenClaw | `llama-3.3-70b-versatile`        | `qwen2.5-coder` (local)      | Groq / Ollama (free) |

**Why this routing:** Hermes (brain/planning) needs stronger multi-step reasoning → stronger model. OpenClaw (hands/coding) needs speed and code ability → llama-3.3 on Groq or local qwen2.5-coder via Ollama for unlimited fallback. No paid models used.

---

## Run Locally

### Prerequisites

```bash
# Check versions
php --version     # needs 8.2+
composer --version
node --version    # needs 18+
npm --version
```

If missing — see **Installation** section below.

### Backend (Laravel API)

```bash
cd backend

# 1. Install PHP dependencies
composer install

# 2. Set up environment
cp .env.example .env
# Edit .env: set DB_DATABASE to the absolute path of database/database.sqlite
# e.g. DB_DATABASE=/Users/yourname/forge2-qualifier-saurabh/backend/database/database.sqlite

# 3. Generate app key
php artisan key:generate

# 4. Create SQLite database + run migrations
touch database/database.sqlite
php artisan migrate

# 5. (Optional) Seed demo data
php artisan db:seed

# 6. Start the server
php artisan serve
# API is now running at http://localhost:8000
```

### Frontend (React + Vite)

```bash
cd frontend

# 1. Install JS dependencies
npm install

# 2. Set up environment
cp .env.example .env
# VITE_API_URL is already set to http://localhost:8000/api

# 3. Start dev server
npm run dev
# App is now running at http://localhost:5173
```

Open `http://localhost:5173` in your browser.

---

## Installation (if PHP/Node not installed)

### Install PHP 8.2+ and Composer

**Windows:**
```
# Download and install from https://windows.php.net/download/
# Or use XAMPP: https://www.apachefriends.org/
# Then install Composer: https://getcomposer.org/Composer-Setup.exe
```

**macOS:**
```bash
brew install php composer
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install php8.2 php8.2-cli php8.2-sqlite3 php8.2-xml php8.2-curl unzip
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

### Install Node.js 18+

Download from https://nodejs.org/ (LTS version) or:

**macOS:** `brew install node`
**Ubuntu:** `curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt install nodejs`

---

## Deploy

### Frontend → Vercel (free)

```bash
cd frontend
npm run build
# Push to GitHub, then connect repo to vercel.com
# Set: Build Command = npm run build, Output Directory = dist
# Add env var: VITE_API_URL = https://your-api.onrender.com/api
```

### API → Render (free)

1. Connect GitHub repo at render.com
2. New Web Service → select `backend/` folder
3. Build command: `composer install && php artisan migrate --force`
4. Start command: `php artisan serve --host=0.0.0.0 --port=$PORT`
5. Add env vars from `.env.example`

---

## Repo Structure

```
forge2-qualifier-saurabh/
├── backend/                  Laravel 11 REST API
│   ├── app/
│   │   ├── Http/Controllers/ BoardController, CardController, ...
│   │   └── Models/           Board, KanbanList, Card, Tag, Member
│   ├── database/
│   │   └── migrations/       All 7 tables in one migration
│   ├── routes/api.php        28 API routes
│   └── .env.example
├── frontend/                 React 18 + Vite SPA
│   └── src/
│       ├── api/client.js     Axios API client
│       ├── pages/            BoardsPage, BoardPage
│       └── components/       KanbanColumn, CardItem, CardModal, MembersPanel
├── skills/
│   └── status-report/SKILL.md   Hermes reusable skill
├── slack-export/             Slack evidence (screenshots)
├── agent-log.md              Unedited agent chat log
├── ARCHITECTURE.md           System design + model routing
└── README.md                 This file
```

---

## Video Walkthrough

[60–90s walkthrough → link to Loom/Drive] *(record after local run)*

---

*Built for Forge 2 Edition 1 · nmg.labs · All models free (Groq + Gemini + Ollama)*
