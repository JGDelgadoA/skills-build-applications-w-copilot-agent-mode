import mongoose, { Schema, type Document } from 'mongoose';

export interface IActivity extends Document {
  userId: string;
  type: string;
  durationMinutes: number;
  distanceKm: number;
  date: Date;
}

const activitySchema = new Schema<IActivity>({
  userId: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  distanceKm: { type: Number, required: true },
  date: { type: Date, required: true, default: Date.now },
});

export default mongoose.model<IActivity>('Activity', activitySchema);
