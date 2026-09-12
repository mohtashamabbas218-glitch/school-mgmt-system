import express from 'express';
const router = express.Router();

// @route   GET /api/students
// @desc    Get all students
router.get('/', (req, res) => {
  res.json({ message: 'Get all students' });
});

// @route   GET /api/students/:id
// @desc    Get student by ID
router.get('/:id', (req, res) => {
  res.json({ message: 'Get student by ID' });
});

// @route   POST /api/students
// @desc    Create new student
router.post('/', (req, res) => {
  res.json({ message: 'Create student' });
});

// @route   PUT /api/students/:id
// @desc    Update student
router.put('/:id', (req, res) => {
  res.json({ message: 'Update student' });
});

// @route   DELETE /api/students/:id
// @desc    Delete student
router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete student' });
});

export default router;
