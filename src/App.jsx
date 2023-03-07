import Home from './pages/Home';
import axios from 'axios';

// require('dotenv').config();

// import dotenv from 'dotenv';
// dotenv.config();
const username = 'Brime-lee';

// const apiKey = process.env.REACT_APP_GITHUB_TOKEN;
// console.log('apiKey', apiKey);
// console.log('process', process.env);
axios
  .get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${'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'}`,
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
function App() {
  return <Home />;
}

export default App;
