'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const path = require('path');
const fs = require('fs')

const port = 3600;
const app = express()

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10 // limit each IP to 100 requests per windowMs
});

app.use(helmet());
app.use(helmet.frameguard({ action: 'sameorigin' }))
app.use(helmet.hidePoweredBy({
  setTo: 'PHP 4.2.0'
}));
app.disable('x-powered-by');
app.use(cookieParser());

app.use(express.static(path.resolve(`${__dirname}`)));
console.log(`${__dirname}`);
app.use('*', (req, res, next) => {
  console.log(`URL: ${req.baseUrl}`);
  next();
});
app.use(cors(corsOptions));
app.options('*', cors());

app.use((err, req, res, next) => {
    if (err) {
      res.send(err);
    }
});

app.get('/', (req, res, next) => {
    res.sendFile(path.resolve(`${__dirname}/index.html`));
});

app.get('/about', (req, res, next) => {
    res.sendFile(path.resolve(`${__dirname}/about.html`));
});

app.get('/roadmap', (req, res, next) => {
    res.sendFile(path.resolve(`${__dirname}/roadmap.html`));
});

app.listen(port)
  .on('error', error => {
    console.log(error);
  })
  .on('listening', () => {
    console.log(`listening on port ${port}`);
  });
