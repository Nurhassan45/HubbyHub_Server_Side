# 🛠️ HobbyHub Backend API

This is the **backend server** for the [HobbyHub](https://assignment10-aa06d.web.app/) project — a platform where users can create, manage, and join hobby-based groups. This server handles API routes for users, groups, events, and test data using **Node.js**, **Express**, and **MongoDB**.

---

## 🌐 Live Client App

🔗 [https://assignment10-aa06d.web.app/](https://assignment10-aa06d.web.app/)

---

## 📁 Project Structure

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- MongoDB (with MongoDB Atlas)
- dotenv
- CORS
- MongoDB Native Driver

---

## 🚀 API Features

### 🧪 Test Collection
- `POST /test` → Insert test data
- `GET /test` → Get all test documents

### 👤 User Collection
- `POST /user` → Add a new user
- `GET /user` → Get all users

### 🧩 Hobby Collection
- `POST /hubby` → Add a new hobby entry

### 👥 Group Collection
- `POST /group` → Create a new group
- `GET /group` → Get all groups
- `GET /group/:id` → Get group by ID
- `DELETE /group/:id` → Delete group by ID
- `PUT /group/:id` → Update group info
- `PATCH /group/:id` → Mark group as completed

---

## 🔐 Environment Variables

Create a `.env` file in your project root and add:

```env
PORT=5000
DB_User=your_mongodb_username
DB_Pass=your_mongodb_password

