import mongoose, { Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
}

const userSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true }
});

export const User = mongoose.model<IUser>('User', userSchema);
