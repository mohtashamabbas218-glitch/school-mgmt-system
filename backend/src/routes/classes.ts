import express from 'express';
const router = express.Router();

// @route   GET /api/classes
// @desc    Get all classes
router.get('/', (req, res) => {
  res.json({ message: 'Get all classes' });
});

// @route   POST /api/classes
// @desc    Create new class
router.post('/', (req, res) => {
  res.json({ message: 'Create class' });
});

export default router;
