"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const User_1 = __importDefault(require("./models/User"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const teamRoutes_1 = __importDefault(require("./routes/teamRoutes"));
const activityRoutes_1 = __importDefault(require("./routes/activityRoutes"));
const leaderboardRoutes_1 = __importDefault(require("./routes/leaderboardRoutes"));
const workoutRoutes_1 = __importDefault(require("./routes/workoutRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT ? Number(process.env.PORT) : 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
app.use(express_1.default.json());
app.get('/api/health', async (_req, res) => {
    const userCount = await User_1.default.countDocuments();
    res.json({ status: 'ok', service: 'octofit-backend', apiBaseUrl: baseUrl, userCount });
});
app.use('/api/users/', userRoutes_1.default);
app.use('/api/teams/', teamRoutes_1.default);
app.use('/api/activities/', activityRoutes_1.default);
app.use('/api/leaderboard/', leaderboardRoutes_1.default);
app.use('/api/workouts/', workoutRoutes_1.default);
async function startServer() {
    await (0, database_1.connectDatabase)();
    app.listen(port, '0.0.0.0', () => {
        console.log(`OctoFit backend listening on port ${port}`);
        console.log(`API base URL: ${baseUrl}`);
    });
}
startServer();
