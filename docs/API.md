# EduHub API Documentation

## Base URL

```
http://localhost:5000/api
```

## Authentication

All protected endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### Login
- **POST** `/auth/login`
- Body: `{ email, password }`
- Response: `{ token, user }`

#### Register
- **POST** `/auth/register`
- Body: `{ name, email, password, role }`
- Response: `{ token, user }`

### Students

#### Get All Students
- **GET** `/students`
- Response: `[ { id, name, email, rollNumber, class, ... } ]`

#### Get Student by ID
- **GET** `/students/:id`
- Response: `{ id, name, email, ... }`

#### Create Student
- **POST** `/students`
- Body: `{ name, email, rollNumber, class, ... }`
- Response: `{ id, name, ... }`

#### Update Student
- **PUT** `/students/:id`
- Body: `{ name, email, ... }`
- Response: `{ id, name, ... }`

#### Delete Student
- **DELETE** `/students/:id`
- Response: `{ message: 'Student deleted' }`

### Teachers

#### Get All Teachers
- **GET** `/teachers`
- Response: `[ { id, name, email, subject, ... } ]`

#### Create Teacher
- **POST** `/teachers`
- Body: `{ name, email, subject, qualification, ... }`
- Response: `{ id, name, ... }`

### Classes

#### Get All Classes
- **GET** `/classes`
- Response: `[ { id, name, section, totalStudents, ... } ]`

#### Create Class
- **POST** `/classes`
- Body: `{ name, section, capacity, ... }`
- Response: `{ id, name, ... }`

## Error Responses

All errors follow this format:

```json
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "status": 400
}
```

## Status Codes

- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error
