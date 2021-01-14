const rt_dogs = require('express').Router();

const ctl_dogs = require(__baseDir + '/src/controllers/dog');

//URL http://localhost:9080/dog

rt_dogs.post('/table', (req, res) => ctl_dogs.table(req, res));

rt_dogs.get('/', (req, res) => ctl_dogs.get(req, res) );
rt_dogs.get('/get', (req, res) => ctl_dogs.get(req, res) );
rt_dogs.get('/get/:id', (req, res) => ctl_dogs.getBy(req, res) );
rt_dogs.post('/insert', (req, res) => ctl_dogs.insert(req, res) );
rt_dogs.post('/update', (req, res) => ctl_dogs.update(req, res) );
rt_dogs.post('/delete', (req, res) => ctl_dogs.del(req, res) );


module.exports = rt_dogs;