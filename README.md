# Task Manager

A full-stack Task Manager web application developed using the MERN Stack. The application allows users to register, log in securely, and manage their daily tasks efficiently through a simple and responsive interface.

---

## Project Overview

Task Manager is a productivity application where users can create, update, complete, search, filter, and delete tasks. Authentication is implemented using JSON Web Tokens (JWT), and all user data is securely stored in MongoDB.

---

## Features

### User Authentication
- User Registration
- User Login
- JWT Authentication
- Secure Password Hashing using bcrypt
- Protected Routes

### Task Management
- Create Tasks
- Edit Tasks
- Delete Tasks
- Mark Tasks as Completed
- Search Tasks
- Filter Tasks
- Sort Tasks
- Delete Completed Tasks

### Dashboard
- Total Tasks
- Completed Tasks
- Pending Tasks
- Overdue Tasks

### User Interface
- Responsive Design
- Clean Dashboard Layout
- Toast Notifications
- Simple Navigation

---

## Technologies Used

### Frontend
- React.js
- Vite
- Axios
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## Project Structure

```
task-manager/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Ramanath-Behera/Task-manager-minor.git
```

### Install Backend

```bash
cd backend
npm install
```

### Install Frontend

```bash
cd frontend
npm install
```

---

## Environment Variables

Create a `.env` file inside the **backend** folder.

Example:

```env
MONGO_URI=Your_MongoDB_URI
JWT_SECRET=Your_JWT_Secret
PORT=5000
```

---

## Run the Backend

```bash
cd backend
npm run dev
```

---

## Run the Frontend

```bash
cd frontend
npm run dev
```

Open:

```
http://localhost:5173
```

---

## Deployment

### Frontend

Deployed using **Vercel**

### Backend

Deployed using **Render**

### Database

Hosted on **MongoDB Atlas**

---

## Screenshots

You can add screenshots here.

Example:

```
screenshots/
│── login.png
│── dashboard.png
│── add-task.png
```

---

## Future Improvements

- Task Categories
- Task Priority Colors
- Due Date Reminders
- Drag and Drop Tasks
- Dark Mode
- User Profile Management

---

## Learning Outcomes

Through this project, I learned:

- MERN Stack Development
- REST API Development
- JWT Authentication
- MongoDB Integration
- CRUD Operations
- Git & GitHub
- Deployment using Render and Vercel

---

## License

This project was developed for learning and internship purposes.

**Ramanath Behera**

B.Tech CSE 
College : C.V. Raman Global University

---

## License

This project is developed for learning and internship purposes.
