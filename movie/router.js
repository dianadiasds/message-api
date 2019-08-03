const express = require('express');
const {Router} = express;
const Movie = require('./model.js');

const movieRouter = new Router();

movieRouter.post('/', (request, response, next) =>
    Movie
        .create(request.body)
        .then(movie => {response.json(movie)})
        .catch(next)
);
movieRouter.get('/', (request, response, next) =>
    Movie
        .findAll()
        .then(movie => {response.json(movie)})
        .catch(next)
);
movieRouter.get('/:id', (request, response, next) =>
    Movie
        .findByPk(request.params.id)
        .then(movie => {response.json(movie)})
        .catch(next)
);

movieRouter.put('/:id', (request, response, next) =>
    Movie
        .findByPk(request.params.id)
        .then(movie => movie.update(request.body))
        .then(movie => response.send(movie))
        .catch(next)
);
movieRouter.delete('/:id', (request, response, next) =>
    Movie
        .destroy({where: {id: request.params.id}})
        .then(movie => response.send({movie}))
        .catch(next)
);

module.exports = movieRouter;
