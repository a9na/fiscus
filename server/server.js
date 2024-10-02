import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connect from "./database/mongodb.js";
import passport from "passport";
import passportConfig from "./config/passport.js";
import * as dotenv from "dotenv";
import routes from "./routes/index.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// CORS configuration
const allowedOrigins = ['https://fiscus-app.netlify.app/']; // Replace with your actual Netlify site URL
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(bodyParser.json());
app.use(passport.initialize());
passportConfig(passport);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Routes
app.use("/", routes);

// Database connection
await connect().catch((error) => {
  console.error('Database connection failed:', error);
  process.exit(1);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:3000`);
});
