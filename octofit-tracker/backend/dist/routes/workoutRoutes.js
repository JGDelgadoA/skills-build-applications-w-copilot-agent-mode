"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Workout_1 = __importDefault(require("../models/Workout"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const workouts = await Workout_1.default.find({}).lean();
    res.json({ message: 'Workouts route ready', workouts });
});
router.post('/', async (req, res) => {
    const workout = await Workout_1.default.create(req.body);
    res.status(201).json({ message: 'Workouts route ready', workout });
});
exports.default = router;
