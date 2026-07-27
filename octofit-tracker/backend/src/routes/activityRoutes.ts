import { Router } from 'express';
import Activity from '../models/Activity';

const router = Router();

router.get('/', async (_req, res) => {
  const activities = await Activity.find({}).lean();
  res.json({ message: 'Activities route ready', activities });
});

router.post('/', async (req, res) => {
  const activity = await Activity.create(req.body);
  res.status(201).json({ message: 'Activities route ready', activity });
});

export default router;
