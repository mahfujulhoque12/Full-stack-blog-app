import { db } from '../db.js';
import bcrypt from 'bcryptjs';

export const register = (req, res) => {
  // Check existing user
  const q = 'SELECT * FROM users WHERE email = ? OR username = ?';
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (data.length > 0) {
      // Check if email or username is taken
      const existingUser = data[0];
      if (existingUser.email === req.body.email) {
        return res.status(409).json({ error: 'Email already exists' });
      }
      if (existingUser.username === req.body.username) {
        return res.status(409).json({ error: 'Username already exists' });
      }
    }

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = 'INSERT INTO users(`username`, `email`, `password`) VALUES (?)';
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json({ error: 'Failed to create user' });
      return res.status(200).json({ message: 'User created successfully' });
    });
  });
};

export const login = (req, res) => {};
export const logout = (req, res) => {};