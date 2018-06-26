const express = require('express');

const PORT = process.env.PORT || 3000;
var app = express();

app.get('/', (req, res) => {
  res
    .status(404)
    .send({
      error: 'Page not found.',
      name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
  res
    .send([{
          name: 'Piero',
          age: 26
        }, {
          name: 'Naná',
          age: 32
      }, {
          name: 'Thais',
          age: 23
      }]);
});

app.listen(PORT, () => {
  console.log(`Server running on ${ PORT }`);
});

module.exports.app = app;
