import express from 'express';
const router = express.Router();

// @route   GET /api/teachers
// @desc    Get all teachers
router.get('/', (req, res) => {
  res.json({ message: 'Get all teachers' });
});

// @route   POST /api/teachers
// @desc    Create new teacher
router.post('/', (req, res) => {
  res.json({ message: 'Create teacher' });
});

export default router;
