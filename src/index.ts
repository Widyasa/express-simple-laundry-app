import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import {router} from "./routes";
import {specs, swaggerUi} from './swagger';

const app = express()
dotenv.config();
const port = process.env.PORT || 8000;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', router)
app.use((req, res) => {
    res.send("route not found")
});

//akhir function functionnya

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
