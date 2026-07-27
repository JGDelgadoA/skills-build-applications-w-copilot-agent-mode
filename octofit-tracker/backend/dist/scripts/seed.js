"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = __importDefault(require("../models/User"));
const Team_1 = __importDefault(require("../models/Team"));
const Activity_1 = __importDefault(require("../models/Activity"));
const Leaderboard_1 = __importDefault(require("../models/Leaderboard"));
const Workout_1 = __importDefault(require("../models/Workout"));
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Connected to octofit_db');
        console.log('Seed the octofit_db database with test data');
        await Promise.all([
            User_1.default.deleteMany({}),
            Team_1.default.deleteMany({}),
            Activity_1.default.deleteMany({}),
            Leaderboard_1.default.deleteMany({}),
            Workout_1.default.deleteMany({}),
        ]);
        const teams = await Team_1.default.insertMany([
            { name: 'Northstar Cyclers', city: 'Seattle', sport: 'Cycling', members: ['user-1', 'user-2'] },
            { name: 'Harbor Runners', city: 'Portland', sport: 'Running', members: ['user-3', 'user-4'] },
        ]);
        const users = await User_1.default.insertMany([
            { name: 'Mina Chen', email: 'mina@example.com', role: 'captain', teamId: teams[0]._id.toString() },
            { name: 'Jules Ortiz', email: 'jules@example.com', role: 'member', teamId: teams[0]._id.toString() },
            { name: 'Kofi Mensah', email: 'kofi@example.com', role: 'captain', teamId: teams[1]._id.toString() },
            { name: 'Lina Patel', email: 'lina@example.com', role: 'member', teamId: teams[1]._id.toString() },
        ]);
        await Activity_1.default.insertMany([
            { userId: users[0]._id.toString(), type: 'Cycling', durationMinutes: 45, distanceKm: 18.4, date: new Date('2026-07-25') },
            { userId: users[2]._id.toString(), type: 'Running', durationMinutes: 32, distanceKm: 7.8, date: new Date('2026-07-26') },
            { userId: users[1]._id.toString(), type: 'Strength', durationMinutes: 60, distanceKm: 0, date: new Date('2026-07-27') },
        ]);
        await Leaderboard_1.default.insertMany([
            { userId: users[0]._id.toString(), teamId: teams[0]._id.toString(), score: 980, rank: 1 },
            { userId: users[2]._id.toString(), teamId: teams[1]._id.toString(), score: 948, rank: 2 },
            { userId: users[1]._id.toString(), teamId: teams[0]._id.toString(), score: 912, rank: 3 },
        ]);
        await Workout_1.default.insertMany([
            { title: 'Tempo Ride', difficulty: 'Intermediate', durationMinutes: 35, focus: ['cardio', 'endurance'] },
            { title: 'Core Blast', difficulty: 'Beginner', durationMinutes: 25, focus: ['core', 'mobility'] },
            { title: 'Hill Intervals', difficulty: 'Advanced', durationMinutes: 40, focus: ['sprint', 'power'] },
        ]);
        console.log('Database seeding complete');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
