import Home from './pages/Home';
import axios from 'axios';

// import dotenv from 'dotenv';
// dotenv.config();

function App() {
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
  return <Home />;
}

export default App;
