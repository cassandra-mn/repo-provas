# RepoProvas  <a href="https://github.com/cassandra-mn/repo-provas.git"><img src="https://camo.githubusercontent.com/9fc043de59486391ea60800bb55c0442838a476a434a63aff152768f4d172f66/68747470733a2f2f6e6f74696f6e2d656d6f6a69732e73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f70726f642f7376672d747769747465722f31663531322e737667" alt="readme-logo" width="30" height="30"></a>

## Usage

```bash
$ git clone https://github.com/cassandra-mn/repo-provas.git

$ cd repo-provas

$ npm install

$ npm run dev
```

## API

```bash
# Rotas de autenticação:

- POST /sign-up
    - headers: {}
    - body: {
        "email": "email@email.com",
        "password": "password"
      }
    
- POST /sign-in
    - headers: {}
    - body: {
        "email": "email@email.com",
        "password": "password"
      }
    
    
# Rotas dos tests:

- POST /test/create
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {
        "name": "projeto"
        "url": "http://",
        "categoryId": 1,
        "teacherId": 1,
        "disciplineId": 3
      }
      
- GET /test/discipline
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
    
- GET /test/teacher
    - headers: {
        "Authorization": "Bearer $token"
      }
    - body: {}
