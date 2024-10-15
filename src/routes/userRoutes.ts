import { Router, Request, Response } from 'express';
import { User } from '../models/user';

const router = Router();

// Отримання всіх користувачів
router.get('/', async (_req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: (err as Error).message });
    }
});

// Додавання нового користувача
router.post('/', async (req: Request, res: Response) => {
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: 'Error adding user', error: (err as Error).message });
    }
});

export default router;
