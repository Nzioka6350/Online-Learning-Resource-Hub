# 📚 Online Learning & Resource Hub

## 📖 Overview

The **Online Learning & Resource Hub** is a web platform designed for students to access courses, resources, and learning materials uploaded by teachers.

* **Admin** manages users, approves content, and handles platform settings.
* **Teachers** create and manage courses/resources.
* **Students** view courses and materials without the ability to modify them.
* **M-Pesa integration** allows users to pay for premium courses.

---

## 🎯 Features

### 🔹 For Admin:

* Manage (Create/Update/Delete) teachers and students.
* Approve or reject uploaded courses/resources.
* View payment records and reports.

### 🔹 For Teachers:

* Upload courses, lessons, and resources.
* Edit or remove their own content.
* View student engagement statistics.

### 🔹 For Students:

* Browse and enroll in courses.
* View and download resources.
* Make M-Pesa payments for premium content.

### 🔹 Payment Integration:

* **M-Pesa API** integration for course purchases.
* Payment status tracking in the database.

---

## 🗄 Database Design

### Tables & Relationships

1. **users**

   * Stores admin, teacher, and student info.
   * `role` column defines the type of user.
   * Admin creates teacher accounts; students self-register.

2. **courses**

   * Created by teachers, approved by admin.
   * Linked to the teacher who created them.

3. **lessons**

   * Belong to a course.
   * Each lesson contains resources.

4. **resources**

   * PDFs, videos, or other files linked to a lesson.

5. **payments**

   * Records all M-Pesa transactions.

---

### **SQL Table Schemas**

```sql
-- Users Table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'teacher', 'student') NOT NULL DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Courses Table
CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    teacher_id INT,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (teacher_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Lessons Table
CREATE TABLE lessons (
    id INT PRIMARY KEY AUTO_INCREMENT,
    course_id INT,
    title VARCHAR(200) NOT NULL,
    content TEXT,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- Resources Table
CREATE TABLE resources (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lesson_id INT,
    type ENUM('pdf', 'video', 'doc', 'other') NOT NULL,
    url VARCHAR(255) NOT NULL,
    FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE
);

-- Payments Table
CREATE TABLE payments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    course_id INT,
    amount DECIMAL(10, 2) NOT NULL,
    mpesa_transaction_id VARCHAR(100) UNIQUE NOT NULL,
    status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);
```

---

## 🔧 Backend (Express.js)

* **Authentication & Authorization**

  * JWT-based authentication.
  * Role-based access middleware (`admin`, `teacher`, `student`).
* **Routes**

  * `/auth/register` – Student registration.
  * `/auth/login` – Login for all users.
  * `/admin/users` – Admin user management.
  * `/courses` – Course CRUD.
  * `/lessons` – Lesson CRUD.
  * `/resources` – Resource uploads.
  * `/payments` – M-Pesa integration endpoints.
* **M-Pesa Integration**

  * Handle STK Push requests.
  * Save payment records in `payments` table.
  * Webhook to confirm payment.

---

## 🎨 Frontend (React)

* **Pages**

  * Home Page – List of courses.
  * Course Details Page – Lessons & resources.
  * Admin Dashboard – User & course management.
  * Teacher Dashboard – Course/lesson/resource management.
  * Student Dashboard – Enrolled courses & payments.
  * Payment Page – M-Pesa payment interface.

* **Tech Stack**

  * React + React Router for navigation.
  * Axios for API calls.
  * Context API for authentication state.
  * Tailwind CSS / Bootstrap for styling.

---

## 🚀 Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/learning-hub.git
cd learning-hub
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
cp .env.example .env  # Update DB credentials & M-Pesa keys
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

### 4️⃣ Database Setup

```bash
mysql -u root -p
CREATE DATABASE learning_hub;
USE learning_hub;
-- Run the SQL schemas above
```

---

## 📌 Future Improvements

* Add quiz/exam feature.
* Implement certificate generation.
* Enable live classes via Zoom/Google Meet API.


