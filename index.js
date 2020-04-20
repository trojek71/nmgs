
import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import schema from "./graphql/";

require('dotenv').config()

const app = express();
mongoose.set('useFindAndModify', false);

mongoose
  .connect(
    process.env.DB_URI,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("💻 MongoDB connected at ",process.env.DB_URI))
  .catch(err => console.log(err));


app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(process.env.PORT, () => console.log(`🚀 Graphql Server running on port ${process.env.PORT}`));
