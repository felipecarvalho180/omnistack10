const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (request, response) => {
  const { github_username } = request.body;

  const res = await
    axios.get(`https://api.github.com/users/${ github_username }`);
    console.log(res.data);
  return response.json(res.data);
});

module.exports = routes;