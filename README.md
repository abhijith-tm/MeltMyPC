```markdown
# 🔥 MeltMyPC

> *"Will it run, or will it melt?"*

A lightweight web app that instantly tells you which PC games your machine can crush—and which ones will
turn it into a space heater—with zero downloads, zero terminal commands,and zero friction.

---

## ⚡ Features (MVP)

- **1-Click Browser Spec Sniffer:** Detects your GPU, logical processor threads, and approximate RAM via in-browser WebGL/WebGPU in milliseconds.
- **Smart Confirmation:** "Look like your rig?" confirmation modal with quick manual overrides for dual-GPU laptops.
- **The 4-Tier Playability Scale:**
  - 🤌 **Chef's Kiss** (60+ FPS, max settings, flawless run)
  - 🕹️ **Playable** (45–60 FPS, medium settings, solid experience)
  - 🪑 **Rough Ride** (30ish FPS, noticeable dips, low settings)
  - 🥔 **Potato Tier** (slideshow territory, don't bother)
- **Instant Game Library Filter:** Search and filter popular PC titles by their compatibility tier on your setup.

---

## 🛠️ Tech Stack

- **Frontend:** React 
- **Backend:** Django & Django REST Framework (DRF)
- **Database:** PostgreSQL 
- **Hardware Sniffing:** WebGL (`WEBGL_debug_renderer_info`) & WebGPU API

---

## 🚀 Quick Start (Local Setup)

### 1. Backend (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

```

### 2. Frontend (React)

```bash
cd frontend
npm install
npm run dev

```

Visit `http://localhost:5173` to see it in action.

---

## 🗺️ Roadmap

* [x] WebGL / WebGPU hardware detection prototype
* [ ] Django API models for games and tier benchmarks
* [ ] React UI with responsive tier badges
* [ ] AI-powered Task Manager screenshot spec scanner
* [ ] AI optimization coach (game-specific setting tweaks)

---

## 📄 License

MIT

```


```
