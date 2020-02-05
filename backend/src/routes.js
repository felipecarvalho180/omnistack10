const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

//controller deverá ter no máximo 5 funções
//index = get de lista
//show = get de um unico item
//store = post
//update = atualizar
//destroy = deletar

const routes = Router();

//Devs
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

//Search
routes.get('/search', SearchController.index);

module.exports = routes;