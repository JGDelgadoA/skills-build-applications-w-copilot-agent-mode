import { Router } from 'express';
import User from '../models/User';

const router = Router();

router.get('/', async (_req, res) => {
  const users = await User.find({}).lean();
  res.json({ message: 'Users route ready', users });
});

router.post('/', async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ message: 'Users route ready', user });
});

export default router;
