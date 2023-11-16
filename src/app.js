import express from 'express';
import handlebars from 'express-handlebars';
import {__dirname} from './utils.js';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(express.static('src/public'));
app.use(express.static(__dirname + '/views/partials/'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

import mainRoutes from './routes/main.router.js';

app.use('/', mainRoutes);

app.listen(8081, console.log("Listening on 8081"))