import express from 'express';
import { create } from 'express-handlebars';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

// routes
import AuthRoutes from './routes/auth.js';
import ProductRoutes from './routes/product.js'

dotenv.config()

const app = express()

const hbs = create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use(AuthRoutes)
app.use(ProductRoutes)

mongoose.set('strictQuery', false)
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true},
)


const PORT = process.env.PORT || 4100
app.listen(4100, () => console.log(`server is running: ${PORT}`))

