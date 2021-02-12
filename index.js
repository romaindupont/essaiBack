const express = require('express')
const app = express()
const port = 3001

/* app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
}) */

const users_model = require('./users_model')
const question_model = require('./question_model')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  users_model.getUsers()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.post('/add', (req, res) => {
    console.log(req.body);
    users_model.createUsers(req.body)
    .then(response => {
      res.status(201).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  });

  app.post('/connexion', (req, res) => {
    console.log(req.body);
    //console.log(res);
    users_model.SearchUsers(req.body)
    .then(response => {
      res.status(201).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  });
  app.get('/mapquiz', (req, res) => {
    question_model.getReponse()
     .then(response => {
       console.log(response);
        res.status(201).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  }) ;
/**
 * request pour les question en fonction du theme
 */
  app.get('/category/:id', (req, res) => {
    console.log(req.params.id)
    question_model.getSpecificQuestion(req.params.id)
     .then(response => {
       console.log(response);
        res.status(201).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  }) ;

app.get('/', (req, res) => {
// homepage
  });

app.get('/avatars', (req, res) => {
//chargement des avatars
});
app.get('/trophies/:id_users', (req, res) => {
// chargement des trophées suivant users // level
});
app.get('/level/:id_users', (req, res) => {
  // +1 dans le champs level de la table users
  });
app.post('/:id_users', (req, res) => {
    // Information fiche user
    });
app.patch('/:id_users', (req, res) => {
  // Modification fiche user
  });

app.post('/signin', (req, res) => {
// Connexion au compte user
  });

app.post('/signout', (req, res) => {
  // Deconnexion au compte user
  });   

app.post('/remove/:id_user', (req, res) => {
// Deconnexion au compte user
});   
app.post('/subscribe', (req, res) => {
  // Création d'un compte user
  });  


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })