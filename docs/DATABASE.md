# EduHub Database Schema

## MongoDB Collections

### Users Collection

```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (enum: 'admin', 'teacher', 'student', 'parent'),
  phone: String,
  address: String,
  city: String,
  state: String,
  zipCode: String,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Students Collection

```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  rollNumber: String (unique),
  class: String,
  section: String,
  dateOfBirth: Date,
  parentName: String,
  parentPhone: String,
  parentEmail: String,
  emergencyContact: String,
  bloodGroup: String,
  enrollmentDate: Date,
  status: String (enum: 'active', 'inactive', 'graduated'),
  createdAt: Date,
  updatedAt: Date
}
```

### Teachers Collection

```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  employeeId: String (unique),
  subject: String,
  qualification: String,
  experience: Number,
  department: String,
  classes: [ObjectId] (ref: Classes),
  joinDate: Date,
  status: String (enum: 'active', 'inactive', 'on-leave'),
  createdAt: Date,
  updatedAt: Date
}
```

### Classes Collection

```javascript
{
  _id: ObjectId,
  name: String,
  section: String,
  capacity: Number,
  classTeacherId: ObjectId (ref: Teachers),
  academicYear: String,
  schedule: [
    {
      day: String,
      startTime: String,
      endTime: String,
      subject: String
    }
  ],
  createdAt: Date,
  updatedAt: Date
}
```

### Attendance Collection

```javascript
{
  _id: ObjectId,
  studentId: ObjectId (ref: Students),
  classId: ObjectId (ref: Classes),
  date: Date,
  status: String (enum: 'present', 'absent', 'late', 'leave'),
  remarks: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Exams Collection

```javascript
{
  _id: ObjectId,
  name: String,
  classId: ObjectId (ref: Classes),
  date: Date,
  totalMarks: Number,
  duration: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Grades Collection

```javascript
{
  _id: ObjectId,
  examId: ObjectId (ref: Exams),
  studentId: ObjectId (ref: Students),
  marksObtained: Number,
  grade: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Fees Collection

```javascript
{
  _id: ObjectId,
  studentId: ObjectId (ref: Students),
  amount: Number,
  dueDate: Date,
  paidDate: Date,
  status: String (enum: 'paid', 'pending', 'overdue'),
  paymentMethod: String,
  transactionId: String,
  createdAt: Date,
  updatedAt: Date
}
```
