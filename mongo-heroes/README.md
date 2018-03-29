# Node Express routing with MongoDB

## Install and Run MongoDB

1. install mongodb
2. run `mongod` from a command line

## Quick Start

1. node www/index.js
2. Open postman
3. Create a GET request to <http://localhost:9000/api/heroes> and send it
4. Notice there are not heroes, let's add one
5. Create a POST request to <http://localhost:9000/api/hero>
6. Add the body to the request in `json` format

  ```json
  {
    "id": 100,
    "name": "John",
    "description": "hi"
  }
  ```

7. Send the POST request
8. Create a GET request to <http://localhost:9000/api/heroes> and send it
9. You should see your new hero in the results!
