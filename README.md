# Backend Models & Schema Practice (MERN Stack)

This repository contains backend database models and schema designs created using Node.js and MongoDB (Mongoose).

The purpose of this project is to practice real-world backend architecture and schema relationships for different types of applications.

---

## 📌 Projects Included

### 1️⃣ Todo Application

Folder: `/todo`

Models:

- `user.model.js` → Stores user information.
- `todo.model.js` → Stores main todo tasks.
- `subTodo.model.js` → Stores subtasks related to a todo.

Features:
- User-based todo management
- One-to-many relationship (Todo → SubTodo)
- Proper schema structure with references

---

### 2️⃣ E-commerce Application

Models:

- `user.model.js`
- `product.model.js`
- `category.model.js`
- `order.model.js`

Features:
- Product and category relationship
- Order linked with user
- Real-world ecommerce schema structure
- Reference-based data modeling

---

### 3️⃣ Hospital Management System

Models:

- `doctor.model.js`
- `patient.model.js`
- `hospital.model.js`
- `medicalRecord.model.js`

Features:
- Doctor and patient relationship
- Hospital record management
- Medical history tracking
- Structured healthcare database schema

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 🎯 Purpose of This Repository

This project is created for:

- Backend practice
- Understanding schema relationships
- Learning one-to-one, one-to-many references
- Building real-world scalable database structure

---

## 🚀 Author

Muhammad Osama  
MERN Stack Developer (Learning Phase)

---

## 📌 Future Improvements

- Add controllers and routes
- Add validation & authentication
- Implement APIs
- Connect with frontend