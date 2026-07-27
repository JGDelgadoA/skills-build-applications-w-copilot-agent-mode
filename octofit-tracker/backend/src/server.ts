import express from 'express';
import { connectDatabase } from './config/database';
import User from './models/User';
import userRoutes from './routes/userRoutes';
import teamRoutes from './routes/teamRoutes';
import activityRoutes from './routes/activityRoutes';
import leaderboardRoutes from './routes/leaderboardRoutes';
import workoutRoutes from './routes/workoutRoutes';

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());

app.get('/api/health', async (_req, res) => {
  const userCount = await User.countDocuments();
  res.json({ status: 'ok', service: 'octofit-backend', apiBaseUrl: baseUrl, userCount });
});

app.use('/api/users/', userRoutes);
app.use('/api/teams/', teamRoutes);
app.use('/api/activities/', activityRoutes);
app.use('/api/leaderboard/', leaderboardRoutes);
app.use('/api/workouts/', workoutRoutes);

async function startServer() {
  await connectDatabase();

  app.listen(port, '0.0.0.0', () => {
    console.log(`OctoFit backend listening on port ${port}`);
    console.log(`API base URL: ${baseUrl}`);
  });
}

startServer();
