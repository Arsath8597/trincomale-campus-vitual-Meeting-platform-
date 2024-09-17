import connectDatabse from './config/database.js';
import app from './index.js';
import dotenv from 'dotenv';
import cors from "cors"
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }));
dotenv.config({path:"config/config.env"})
connectDatabse()
app.listen(process.env.PORT, () => {
    console.log(`Server listening to Port ${process.env.PORT}`);
});

