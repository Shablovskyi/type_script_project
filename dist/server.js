"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware для парсингу JSON
app.use(express_1.default.json());
// Підключення до MongoDB
mongoose_1.default.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
    process.exit(1);
});
// Використання маршрутів
app.use('/users', userRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
