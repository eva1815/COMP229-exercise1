// File Name: app.js
//  Student Name: Eva Fan 
//  StudentID: 301238820
// Date: October 16, 2022  
// Third-Party Modules
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

// ES Modules fix for __dirname
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Auth Setup 1 - import modules
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

// Auth Setup 2 - define our auth strategy
let localStrategy = passportLocal.Strategy;

// Auth Setup 3 - import the user model
import User from './models/user.js';

//Import Mongoose Module
import mongoose from 'mongoose';

// Configuration Module
import { MongoURI, Secret } from '../config/config.js';

// Import Routes
import indexRouter from './routes/index.route.server.js';
import businessRouter from './routes/business.route.server.js';
import authRouter from './routes/auth.route.server.js';

// Instantiate Express Application
const app = express();

//complete the DB configuration
mongoose.connect(MongoURI);
const db = mongoose.connection;

//listen for connection success or error
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("Mongo Connection Error"));

// Set Up Middlewares

// Setup ViewEngine EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname,'/client')));
app.use(express.static(path.join(__dirname,'../public')));

// Auth Step 4 - setup Express Session
app.use(session({
    secret: Secret,
    saveUninitialized: false, 
    resave: false
}));

// Auth Step - 5 Setup Flash
app.use(flash());

//Auth Step 6 - Initialize Passport and Session
app.use(passport.initialize());
app.use(passport.session());

//Auth step 7 - Implement the Auth Strategy
passport.use(User.createStrategy());

//Auth step 8 - Setup serialization and deserialization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Use Routes
app.use('/', indexRouter);
app.use('/', businessRouter);
app.use('/', authRouter);


export default app;

