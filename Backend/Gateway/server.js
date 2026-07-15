import dotenv from 'dotenv';
import express from 'express';
import proxy from 'express-http-proxy';
import cors from 'cors';
dotenv.config();

const port = process.env.PORT || 8000;
const app = express();
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));
app.use("/auth", proxy(process.env.AUTH_SERVICE_URL));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Gateway is running on port ${port}`);
});