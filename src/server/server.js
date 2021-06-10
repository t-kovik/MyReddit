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

