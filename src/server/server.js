import express, {query} from 'express';
import ReactDOM from 'react-dom/server';
import { indexTemplate} from './indexTemplate';
import {App} from '../App';

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/static', express.static('./dist/client'));

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

