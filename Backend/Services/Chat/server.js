import dotenv from 'dotenv';
import express from 'express';
import connectDb from './Config/db.js';
import cors from 'cors';
import chatRouter from './Routes/chat.route.js';
dotenv.config();

connectDb();

const port = process.env.PORT;
const app = express();


app.get('/', (req, res) => {
    res.send('Hello Chat!');
});
app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));
app.use(express.urlencoded({ extended: true }));
app.use('/message', chatRouter)

app.listen(port, () => {
    console.log(`Chat is running on port ${port}`);

});