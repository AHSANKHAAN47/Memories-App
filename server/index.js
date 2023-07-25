import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use('/posts', postRoutes);

//monoDB connection
const CONNECTION_URL = 'mongodb+srv://ahsankhaan2992:password786@cluster0.hjqvii8.mongodb.net/';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
).catch((error) => console.log(error.message));
