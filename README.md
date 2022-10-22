# aggregate-api
It's just a sample project of how can I use the aggregate on mongoose. It's fun to do and add some new topic on my skill list.
Stack use: node.js, express.js, mongodb, mongoose orm

## endpoints
- GET: `localhost:5000/` > get all
- GET: `localhost:5000/match`  > get the price is greater than 450
- POST: `localhost:5000/create-dummy` > create a dummy list of object
- POST: `localhost:5000/` > create a dummy object of name, price & address
- GET: `localhost:5000/pagination?limit=5&skip=0&price=250` > pagination

## resources
- [mongoose get started](https://mongoosejs.com/docs/index.html)
- [mongoose aggregate](https://mongoosejs.com/docs/api/aggregate.html)
