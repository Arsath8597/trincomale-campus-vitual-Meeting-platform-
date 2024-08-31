import connectDatabse from './config/database.js';
import app from './index.js';
import dotenv from 'dotenv';


dotenv.config({path:"config/config.env"})
connectDatabse()
app.listen(process.env.PORT, () => {
    console.log(`Server listening to Port ${process.env.PORT}`);
});

