import express from 'express';
const router = express.Router();

// @route   POST /api/auth/login
// @desc    Login user
router.post('/login', (req, res) => {
  res.json({ message: 'Login endpoint' });
});

// @route   POST /api/auth/register
// @desc    Register user
router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint' });
});

// @route   POST /api/auth/logout
// @desc    Logout user
router.post('/logout', (req, res) => {
  res.json({ message: 'Logout endpoint' });
});

export default router;
