# 🎓 Campus Connect Portal
## 📌 Project Overview

**Campus Connect** is an integrated academic portal designed to connect students, faculty, and administrators onto a single digital platform. The project demonstrates progressive full-stack web development principles ranging from semantic HTML5 structure, responsive CSS3 styling, and client-side JavaScript DOM manipulation to state-driven architectures and Node.js/Express backend APIs.

---

## 🚀 Key Features

### 1. Modern Responsive Landing Page (`client/index.html`)
- **Semantic HTML5 Architecture**: Structured with `<header>`, `<nav>`, `<section>`, `<article>`, and `<footer>` elements.
- **Layouts with CSS Grid & Flexbox**:
  - Flexbox-driven navigation bar, logo grouping, and control groups.
  - Multi-column CSS Grid for role cards (`Student Portal`, `Faculty Portal`, `Admin Portal`) adapting automatically across viewport widths.
- **Campus Life Carousel**: Auto-advancing image slider with local campus and student photos, next/previous controls, and indicator dots.
- **Micro-Interactions**: Hover animations (`transform: translateY(-8px)` and elevated drop-shadows) on role cards and interactive buttons.
- **Mobile Responsiveness**: Adaptive media queries (`@media (max-width: 768px)` and `@media (max-width: 480px)`) ensuring seamless rendering on mobile devices.

### 2. Student Authentication System (`client/login.html`)
- Dedicated RV University branded login & registration interface.
- Tab-switching between **Student Login** and **Student Registration**.
- Native browser pop-up confirmations upon successful account creation and sign-in.
- Pre-filled credential transitions and seamless navigation to the performance portal.

### 3. Student Performance & Attendance Portal (`client/attendance.html`)
- **Task 1: Student Summary**: Variables, operators, and structured data rendering into the DOM.
- **Task 2: Batch Grade Evaluator**: Control flow (loops & switch statements) evaluating student scores.
- **Task 3: Attendance Counter**: Closure and arrow function maintaining a private counter incremented via button click.
- **Task 4: Quick Alerts & Dialogs**: Native alert, confirm, and prompt interactions.

### 4. State-Driven Task & Study Planner (`client/experiment4.html`)
- **Predictable State Architecture**: Driven by a single state source of truth (`UI = f(state)`).
- **Reactive Render Cycle**: User actions mutate state first, immediately triggering a full interface re-draw.
- **Task Filtering & Priority Badges**: Filter between `All`, `Pending`, and `Completed` tasks with color-coded priority indicators (High, Medium, Low).
- **State Persistence**: Preserves data across browser reloads using `localStorage`.

### 5. Backend API Server (`Server/`)
- Built with **Node.js** and **Express 5**.
- Modular routing architecture with `/api/auth` endpoints.
- MongoDB and Mongoose integration for user and session management.
- Assignment requests use a shared client API service and Vite's `/api` development proxy.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+), React 19, Vite |
| **Backend** | Node.js, Express.js 5, CORS, Dotenv |
| **Database & Auth** | MongoDB, Mongoose 9, JWT, bcryptjs |
| **Version Control** | Git, GitHub |

---

## 📂 Project Structure

```text
Campus_Connect/
├── README.md                      # Project documentation
├── package.json                   # Root configuration
├── client/                        # Client-side web application
│   ├── index.html                 # Main Campus Connect portal landing page
│   ├── login.html                 # Student login & registration portal
│   ├── attendance.html            # Student performance & attendance dashboard
│   ├── experiment4.html           # State-driven task & study planner
│   ├── experiment4.js             # State management & render engine for Experiment 4
│   ├── package.json               # Client dependencies (React, Vite)
│   ├── src/
│   │   ├── style.css              # Main external stylesheet (Grid, Flex, Media queries)
│   │   ├── carousel.js            # Auto-advancing home-page image carousel
│   │   ├── main.jsx               # React entry point
│   │   ├── App.jsx                # Core React router component
│   │   ├── assets/                # Local campus and student carousel photos
│   │   ├── components/
│   │   │   ├── AuthModule.jsx     # React authentication component
│   │   │   └── StudentPortal.jsx  # Student dashboard view
│   │   └── services/
│   │       └── api.js             # Shared assignment API client
│   └── public/                    # Static assets & icons
└── Server/                        # Backend REST API
    ├── package.json               # Server dependencies (Express, Mongoose)
    └── src/
        ├── app.js                 # Express server configuration & route mounting
        ├── config/
        │   └── db.js              # MongoDB database connection handler
        ├── models/
        │   └── User.js            # User data model & schema
        └── routes/
            └── authRoutes.js      # Authentication endpoints (/api/auth)
```

---

## 🧪 Laboratory Experiments Mapping

| Experiment | Title | Implementation |
| :--- | :--- | :--- |
| **Experiment 2** | Responsive Web Pages with HTML5 & CSS3 | [`client/index.html`](client/index.html) & [`client/src/style.css`](client/src/style.css) |
| **Experiment 4** | State Handling & Version Control | [`client/experiment4.html`](client/experiment4.html) & [`client/experiment4.js`](client/experiment4.js) |

---

## 💻 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/MedhaSrinath/Campus-connect.git
cd Campus-connect
```

### 2. Run the Frontend
You can open any of the HTML pages directly in your browser or with VS Code **Live Server**:
- **Home Page**: `client/index.html`
- **Login Portal**: `client/login.html`
- **Experiment 4**: `client/experiment4.html`

Launch the Vite development server:
```bash
cd client
npm install
npm run dev
```

### 3. Run the Backend Server
Copy `Server/.env.example` to `Server/.env`, then set `MONGO_URI` to your
MongoDB connection string. For a local MongoDB server, the example URI is
already provided. For MongoDB Atlas, use the connection string from your
cluster and replace its username, password, and database name locally. Do not
commit `Server/.env` or share its connection string.

```bash
cd Server
npm install
npm run dev
```
The Vite development proxy sends `/api` requests to `http://localhost:5000`.
For separate deployments, set `VITE_API_BASE_URL` in the client environment to
the API base URL and configure `CLIENT_ORIGIN` on the server to the deployed
client origin.

---

## 📝 License

This project is developed as part of the **CS3301 Full Stack Development** curriculum at **RV University**.
