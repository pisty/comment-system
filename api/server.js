import express from "express";
import mongoose from "mongoose";
import {Comment} from "./models/commentModel";
import bodyParser from "body-parser";
import routes from "./routes/commentRoutes";

const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/comment-mongo');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);

console.log(`comment system ${port}`);