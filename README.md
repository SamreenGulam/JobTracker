# 📌 Job Tracker API

*A Spring Boot REST API for managing and tracking job applications efficiently.*

[![Java](https://img.shields.io/badge/Java-17+-blue)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.0-brightgreen)](https://spring.io/projects/spring-boot)
[![MySQL](https://img.shields.io/badge/MySQL-8.0+-orange)](https://www.mysql.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](LICENSE)

## 🚀 Overview

The **Job Tracker API** is a backend solution built with Spring Boot, designed to help professionals organize and monitor their job search process.
It enables CRUD operations, filtering, statistics, and integrates **Swagger UI** for easy API exploration.

This project can be used as a **standalone API** or integrated into a frontend like React or Angular.
## ✨ Features

* **Job Management:** Create, read, update, and delete job listings
* **Status Tracking:** Monitor application stages (`Applied`, `Interview`, `Offer`, `Rejected`)
* **Search & Filters:** Find jobs by company, position, status, or notes
* **Statistics:** Track number of applications by status
* **Clean Architecture:** Controller → Service → Repository pattern
* **Data Persistence:** MySQL + JPA/Hibernate
* **Interactive Docs:** Swagger/OpenAPI integration
* **Testing:** Postman collections & unit tests

## 📂 API Endpoints

| Method | Endpoint                                      | Description              |
| ------ | --------------------------------------------- | ------------------------ |
| POST   | `/api/jobs`                                   | Create a new job         |
| GET    | `/api/jobs`                                   | Get all jobs             |
| GET    | `/api/jobs/{id}`                              | Get job by ID            |
| PUT    | `/api/jobs/{id}`                              | Update job               |
| DELETE | `/api/jobs/{id}`                              | Delete job               |
| GET    | `/api/jobs/status/{status}`                   | Filter by status         |
| GET    | `/api/jobs/company/{company}`                 | Filter by company        |
| GET    | `/api/jobs/search/position?keyword={keyword}` | Search by position       |
| GET    | `/api/jobs/stats/status/{status}`             | Get statistics by status |


## 🛠 Tech Stack

* **Backend:** Java 17+, Spring Boot 3.2.0
* **Database:** MySQL 8.0+
* **ORM:** JPA/Hibernate
* **Docs:** Swagger/OpenAPI 3
* **Build Tool:** Maven
* **Testing:** JUnit, Postman, H2 (for tests)


## ⚙️ Setup Instructions

### 1️⃣ Clone & Navigate

```bash
git clone <repository-url>
cd job-tracker-api
```

### 2️⃣ Database Setup

```sql
CREATE DATABASE job_tracker_db;
CREATE USER 'job_tracker'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON job_tracker_db.* TO 'job_tracker'@'localhost';
FLUSH PRIVILEGES;
```

### 3️⃣ Configure Application

`src/main/resources/application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/job_tracker_db
spring.datasource.username=root
spring.datasource.password=password
```

### 4️⃣ Build & Run

```bash
mvn clean compile
mvn spring-boot:run
```

Access API at: **`http://localhost:8080`**
Swagger UI: **`http://localhost:8080/swagger-ui.html`**

---

## 🧪 Testing

```bash
mvn test
```

For Postman:

1. Import `postman/Job_Tracker_API.postman_collection.json`
2. Run the collection

---

## 📌 Future Roadmap

* 🔑 User authentication (JWT/OAuth)
* 📊 Analytics dashboard
* 📎 Resume/file uploads
* 📬 Email notifications
* 📤 Export to PDF/Excel
* 🌐 Integration with job boards

---

## 📜 License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.
