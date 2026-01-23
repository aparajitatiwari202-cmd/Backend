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
