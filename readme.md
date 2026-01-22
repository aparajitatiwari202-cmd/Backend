Student Merit Portal – Backend System
👩‍💻 Author

Aparajita Tiwari
Department of Computer Science
Maitreyi College, University of Delhi

📌 Introduction

The Student Merit Portal is a backend-driven web application designed to support the IQAC Meritorious Student Award process at Maitreyi College.
This system provides a structured, secure, and scalable way to manage student achievements, certificate submissions, and verification workflows.

The backend is responsible for handling authentication, database operations, file uploads, and API communication with the frontend (built separately using Next.js).

🎯 Objectives

The main objectives of this project are:

To digitize the student merit evaluation process

To allow students to upload academic and co-curricular certificates securely

To store and manage certificate data efficiently using MySQL

To provide APIs for frontend-backend communication

To ensure transparency and scalability in the merit assessment workflow

🛠️ Technology Stack

Backend Technologies

Node.js

Express.js

MySQL

Multer (for file uploads)

dotenv (environment configuration)

CORS

Frontend (connected separately)

Next.js

Axios (API communication)

🗂️ Project Structure

The backend follows a modular and scalable folder structure:

backend/
├── src/
│   ├── index.js                # Server entry point
│   ├── db/
│   │   └── mysql.js            # MySQL database connection
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── student.route.js
│   │   └── certificate.route.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── student.controller.js
│   │   └── certificate.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── upload.middleware.js
│
├── uploads/
│   └── certificates/           # Stored certificate files
│
├── .env
├── package.json
└── README.md

📄 Certificate Management Approach

Instead of storing certificate files directly inside the database, this project follows industry best practices:

Certificate files (PDFs / images) are stored on the server (uploads/ folder)

Only the file path and metadata are stored in the MySQL database

This approach:

Improves performance

Keeps the database lightweight

Makes file access and verification easier

🔐 Key Features

Student authentication and authorization

Secure certificate upload using Multer

MySQL-based data storage

RESTful API endpoints

Static file serving for uploaded certificates

Clean separation of routes, controllers, and middleware

🔄 Workflow Overview

Student logs in via frontend

Certificate is uploaded through an API request

File is stored in the server’s uploads directory

Certificate details and file path are saved in MySQL

Data becomes available for verification and evaluation

🚀 Future Enhancements

Teacher/Admin verification dashboard

Role-based access control (RBAC)

Cloud storage integration (AWS S3 / Cloudinary)

Automated merit point calculation

Deployment on cloud platforms

📚 Academic Context

This project is developed as part of academic learning and practical implementation in Computer Science, focusing on:

Backend development

Database integration

Real-world system design

Secure file handling
