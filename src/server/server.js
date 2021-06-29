import express, {query} from 'express';
import ReactDOM from 'react-dom/server';
import { indexTemplate} from './indexTemplate';
import {App} from '../App';
import compression from 'compression';
import helmet from 'helmet';
import axios from "axios";

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
    axios.post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://react-my-project-skillbox.herokuapp.com/auth`,
      {
          auth: { username: process.env.CLIENT_ID, password: 'FHbEHlHKDgksRbb06Fe6lv1z2g5BDA'},
          headers: { 'Content-type': 'application/x-www-form-urlencoded'}
      }
    )
      .then(({ data }) => {
          res.send(
            indexTemplate(ReactDOM.renderToString(App()), data['access_token']),
          );
      })
      .catch(console.log)
});

app.get('*', (req, res) => {
    res.send(
      indexTemplate(ReactDOM.renderToString(App()))
    );
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})

