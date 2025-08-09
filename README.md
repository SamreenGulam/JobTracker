# Job Tracker API

A Spring Boot REST API for managing job applications and tracking their status.

## Features

### Core Features
- **Job CRUD Operations**: Create, Read, Update, Delete job listings
- **Status Tracking**: Track job status (Applied, Interview, Offer, Rejected)
- **Search & Filter**: Search by company, position, status, and notes
- **Clean Architecture**: Controller-Service-Repository pattern
- **Data Persistence**: MySQL database with JPA/Hibernate
- **API Documentation**: Interactive Swagger UI
- **Testing**: Comprehensive Postman test suite

### API Endpoints

#### Job Management
- `POST /api/jobs` - Create a new job
- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/{id}` - Get job by ID
- `PUT /api/jobs/{id}` - Update job
- `DELETE /api/jobs/{id}` - Delete job

#### Search & Filter
- `GET /api/jobs/status/{status}` - Get jobs by status
- `GET /api/jobs/company/{company}` - Get jobs by company
- `GET /api/jobs/search/position?keyword={keyword}` - Search by position
- `GET /api/jobs/search/notes?keyword={keyword}` - Search by notes

#### Statistics & Ordering
- `GET /api/jobs/stats/status/{status}` - Get job count by status
- `GET /api/jobs/ordered/date` - Get jobs ordered by date
- `GET /api/jobs/ordered/company` - Get jobs ordered by company

## Tech Stack

- **Backend**: Java 17+, Spring Boot 3.2.0
- **Database**: MySQL 8.0+
- **ORM**: JPA/Hibernate
- **API Documentation**: Swagger/OpenAPI 3
- **Build Tool**: Maven
- **Testing**: Spring Boot Test, H2 (for tests)

## Prerequisites

- Java 17 or higher
- Maven 3.6+
- MySQL 8.0+ (running on localhost:3306)

## Setup Instructions

### 1. Database Setup

Create a MySQL database:
```sql
CREATE DATABASE job_tracker_db;
CREATE USER 'job_tracker'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON job_tracker_db.* TO 'job_tracker'@'localhost';
FLUSH PRIVILEGES;
```

### 2. Application Configuration

Update `src/main/resources/application.properties` if needed:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/job_tracker_db?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=password
```

### 3. Build and Run

```bash
# Clone the repository
git clone <repository-url>
cd job-tracker-api

# Build the application
mvn clean compile

# Run the application
mvn spring-boot:run
```

The application will start on `http://localhost:8080`

### 4. Verify Setup

- **Health Check**: `GET http://localhost:8080/api/jobs`
- **Swagger UI**: `http://localhost:8080/swagger-ui.html`
- **API Docs**: `http://localhost:8080/api-docs`

## API Documentation

### Swagger UI
Access the interactive API documentation at: `http://localhost:8080/swagger-ui.html`

### Sample Requests

#### Create a Job
```bash
curl -X POST http://localhost:8080/api/jobs \\
  -H "Content-Type: application/json" \\
  -d '{
    "company": "Google",
    "position": "Software Engineer",
    "status": "APPLIED",
    "notes": "Applied through LinkedIn"
  }'
```

#### Get All Jobs
```bash
curl -X GET http://localhost:8080/api/jobs
```

#### Update Job Status
```bash
curl -X PUT http://localhost:8080/api/jobs/1 \\
  -H "Content-Type: application/json" \\
  -d '{
    "company": "Google",
    "position": "Software Engineer",
    "status": "INTERVIEW",
    "notes": "Phone screening scheduled"
  }'
```

## Testing

### Unit Tests
```bash
mvn test
```

### Postman Testing
1. Import `postman/Job_Tracker_API.postman_collection.json`
2. Import `postman/Job_Tracker_Environment.postman_environment.json`
3. Run the collection to test all endpoints

## Project Structure

```
src/
├── main/
│   ├── java/com/jobtracker/
│   │   ├── JobTrackerApplication.java     # Main application class
│   │   ├── controller/
│   │   │   └── JobController.java         # REST endpoints
│   │   ├── service/
│   │   │   ├── JobService.java            # Service interface
│   │   │   └── JobServiceImpl.java        # Service implementation
│   │   ├── repository/
│   │   │   └── JobRepository.java         # Data access layer
│   │   ├── model/
│   │   │   ├── Job.java                   # Job entity
│   │   │   └── JobStatus.java             # Status enum
│   │   └── config/
│   │       └── SwaggerConfig.java         # API documentation config
│   └── resources/
│       ├── application.properties         # Main configuration
│       └── application-test.properties    # Test configuration
└── test/
    └── resources/
        └── application.properties         # Test database config
```

## Job Status Values

- `APPLIED` - Application submitted
- `INTERVIEW` - Interview scheduled/in progress
- `OFFER` - Job offer received
- `REJECTED` - Application rejected

## Development

### Adding New Features

1. **Entity Changes**: Update `Job.java` and run migration
2. **Repository**: Add new query methods to `JobRepository.java`
3. **Service**: Implement business logic in `JobServiceImpl.java`
4. **Controller**: Add REST endpoints in `JobController.java`
5. **Tests**: Update Postman collection

### Database Migrations

The application uses `spring.jpa.hibernate.ddl-auto=update` for automatic schema updates in development. For production, consider using Flyway or Liquibase for proper migration management.

## Production Deployment

### Environment Variables
```bash
export SPRING_DATASOURCE_URL=jdbc:mysql://your-db-host:3306/job_tracker_db
export SPRING_DATASOURCE_USERNAME=your-username
export SPRING_DATASOURCE_PASSWORD=your-password
export SPRING_PROFILES_ACTIVE=prod
```

### Build JAR
```bash
mvn clean package
java -jar target/job-tracker-api-1.0.0.jar
```

## Future Enhancements

The following features are planned for future iterations:

- User authentication (JWT/OAuth)
- Frontend UI (React/Angular)
- Job application analytics dashboard
- File uploads (resume storage)
- Email notifications/reminders
- Advanced search filters
- Export functionality (PDF/Excel)
- Integration with job boards

## Support

For issues and questions:
- Check the Swagger UI for API documentation
- Review the Postman collection for example requests
- Check application logs for error details

## License

This project is licensed under the MIT License.
