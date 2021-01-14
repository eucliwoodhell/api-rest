global.__baseDir       = __dirname;
global.__dirDB         = __baseDir + '/src/configs/database.js';

const express = require('express');
// crea encabezados que protegen de los ataques (seguridad)
const bodyParser = require('body-parser');

const app = express();

require('dotenv').config();

// Enable CORS on ExpressJS to avoid cross-origin errors when calling this server using AJAX
// We are authorizing all domains to be able to manage information via AJAX (this is just for development)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,recording-session");
    next();
});

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const index = require(__baseDir +'/src/routes/');
app.use('/', index);

const port = process.env.PORT || 8080;
app.listen(port , () => {
    console.log("Running app on port port. Visit: http://localhost:" + port + "/")
});