# RepoProvas 

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
        "password": "password",
        "confirmPassword": "password"
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
