# 🎯 GoalTracker

A full-stack Android application for creating, managing, and tracking personal goals.

The project is divided into two parts:

- 📱 **client** — React Native mobile application
- 🚀 **server** — REST API built with Node.js, Express.js, and MongoDB

---

## ✨ Features

- Create goals
- View all goals
- Update existing goals
- Delete goals
- RESTful API
- MongoDB database
- Responsive mobile interface
- Clean project architecture

---

# 📁 Project Structure

```text
GoalTracker/
│
├── client/                 # React Native application
│
├── server/                 # Backend API
│   ├── config/
│   │   └── conf.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

# 🛠️ Tech Stack

## Client

- React Native
- JavaScript (ES6+)
- Axios
- React Navigation

## Server

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

---

# 🏗️ Backend Architecture

```text
Client
   │
   ▼
Express Server
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Mongoose Models
   │
   ▼
MongoDB
```

---

# 📡 API

Base endpoint:

```text
/api/goals
```

| Method | Endpoint | Description |
| ------- | ---------------- | ---------------- |
| GET | `/api/goals` | Get all goals |
| GET | `/api/goals/:id` | Get goal by ID |
| POST | `/api/goals` | Create a new goal |
| PUT | `/api/goals/:id` | Update a goal |
| DELETE | `/api/goals/:id` | Delete a goal |

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/yourusername/GoalTracker.git

cd GoalTracker
```

---

## Install dependencies

### Server

```bash
cd server
npm install
```

### Client

```bash
cd client
npm install
```

---

## Configure the server

Open the following file:

```text
server/config/conf.js
```

Configure your application settings:

```javascript
module.exports = {
    PORT: 5000,
    DB_URL: "your_mongodb_connection_string"
}
```

---

## Start the backend

```bash
cd server
npm start
```

The server will start on:

```text
http://localhost:5000
```

---

## Run the Android application

```bash
cd client
npx react-native run-android
```

---

# 💾 Database

The backend uses **MongoDB** with **Mongoose** for data storage.

Database connection is established using:

```javascript
await mongoose.connect(DB_URL)
```

---

# 📌 Future Improvements

- User authentication
- JWT authorization
- Goal categories
- Due dates
- Progress tracking
- Statistics dashboard
- Search and filtering
- Push notifications

---

# 👨‍💻 Author

**wimetop**

Full Stack Developer

GitHub: https://github.com/yourusername
