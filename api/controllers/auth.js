import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = (req, res) => {
  const q = 'SELECT * FROM users WHERE email = ? OR username = ?';
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (data.length > 0) {
      const existingUser = data[0];
      if (existingUser.email === req.body.email) {
        return res.status(409).json({ error: 'Email already exists' });
      }
      if (existingUser.username === req.body.username) {
        return res.status(409).json({ error: 'Username already exists' });
      }
    }

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


export const login = (req, res) => {
  const q = 'SELECT * FROM users WHERE username = ?';

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json({ message: 'Database error' });

    // If no user found
    if (data.length === 0) {
      return res.status(404).json({ message: 'Username not found' });
    }

    const user = data[0];

    // Check password
    const isPassCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isPassCorrect) {
      return res.status(400).json({ message: 'Wrong username or password' });
    }

    // Generate token
    const token = jwt.sign({ id: user.id }, 'jwtKey');

    // Remove password from user object before sending
    const { password, ...other } = user;

    res.cookie('access_token', token, {
      httpOnly: true,
    })
    .status(200)
    .json(other);
  });
};


export const logout = (req, res) => {};