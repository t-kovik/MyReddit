import express, {query} from 'express';
import ReactDOM from 'react-dom/server';
import { indexTemplate} from './indexTemplate';
import {App} from '../App';
import compression from 'compression';
import helmet from 'helmet';

const PORT = process.env.PORT || 3000;
const IS_DEV = process.env.NODE_ENV !== 'production';

const app = express();

app.use('/static', express.static('./dist/client'));
if(!IS_DEV) {
    app.use(compression());
    app.use(helmet({
        contentSecurityPolicy: false,
    }));
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.get('/auth', (req, res) => {
    let code = req.query.code;
    console.log(code)
    res.send(
      indexTemplate(ReactDOM.renderToString(App()), code)
    );
});

app.get('*', (req, res) => {
    res.send(
      indexTemplate(ReactDOM.renderToString(App()))
    );
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})

