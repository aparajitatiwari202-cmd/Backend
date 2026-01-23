# 🎓 Student Merit Portal – Backend System

## 👩‍💻 Author
**Aparajita Tiwari**, **Anshika** 
Department of Computer Science  
Maitreyi College, University of Delhi  

---

## 📌 Introduction
The **Student Merit Portal** is a backend-driven web application designed to support the  
**IQAC Meritorious Student Award** process at Maitreyi College.

This backend system ensures **secure, scalable, and structured management** of student
achievements, certificate submissions, and verification workflows.

The frontend is built separately using **Next.js** and communicates with this backend via APIs.

---

## 🎯 Objectives

| Objective | Description |
|---------|-------------|
| Digitization | Automate student merit evaluation |
| Secure Uploads | Allow students to upload certificates safely |
| Data Management | Store and manage data using MySQL |
| API Communication | Enable frontend-backend interaction |
| Transparency | Ensure fair and scalable evaluation |

---

## 🛠️ Technology Stack

### Backend
| Technology | Purpose |
|-----------|--------|
| Node.js | Runtime environment |
| Express.js | Backend framework |
| MySQL | Database |
| Multer | File uploads |
| dotenv | Environment configuration |
| CORS | Cross-origin access |

### Frontend (Connected Separately)
| Technology | Purpose |
|-----------|--------|
| Next.js | User interface |
| Axios | API communication |

---

## 🗂️ Project Structure

```plaintext
backend/
├── src/
│   ├── index.js                # Server entry point
│   ├── db/
│   │   └── mysql.js            # MySQL connection
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
│   └── certificates/           # Uploaded certificate files
│
├── .env
├── package.json
└── README.md
#🗄️ Database Tables
👩‍🎓 Students Table
Column Name	Data Type	Description
id	INT (PK)	Unique student ID
name	VARCHAR(100)	Student name
email	VARCHAR(100)	Student email
password	VARCHAR(255)	Hashed password
course	VARCHAR(50)	Course name
year	INT	Academic year
created_at	TIMESTAMP	Record creation time
#📄 Certificates Table
Column Name	Data Type	Description
id	INT (PK)	Certificate ID
student_id	INT (FK)	Linked student ID
title	VARCHAR(100)	Certificate title
category	VARCHAR(50)	Academic / Co-curricular
file_path	VARCHAR(255)	Stored file path
uploaded_at	TIMESTAMP	Upload date
# 📄 Certificate Management Approach

Certificates are stored in the server file system

Only file paths & metadata are stored in MySQL

#✅ Benefits

Better performance

Lightweight database

Easy access and verification

# 🔐 Key Features
Feature	Description
Authentication	Secure student login
Authorization	Protected routes
File Upload	Multer-based uploads
Database Storage	MySQL integration
REST APIs	Clean API endpoints
Static Files	Serve uploaded certificates
# 🔄 Workflow

Student logs in via frontend

Certificate uploaded using API

File saved in uploads/ directory

Metadata stored in MySQL

Data available for verification

#🚀 Future Enhancements
Feature	Description
Admin Panel	Teacher verification dashboard
RBAC	Role-based access
Cloud Storage	AWS S3 / Cloudinary
Auto Scoring	Merit point calculation
Deployment	Cloud hosting
📚 Academic Context

This project is developed as part of academic learning to gain hands-on experience in:

Backend development

Database integration

Secure file handling

Real-world system design
