# Project name: Bicycle Store
## Live server link:  https://bicycle-store-blond.vercel.app/

## Technology used:
* Node.js
* Express.js
* Mongoose
* TypeScript - installed as dev dependency

In addition to those I installed -
* eslint - to check and fix code errors.
* prettier - to format code to have better look.
* ts-node-dev - to run the server every time the code is updated


## The project has a database named bicycle-store and has two databases - bicycles and orders.

Both the database has its own module where all the actions happen.

1. interface: Where all the types are declared.
2. model: schema is declared with all the validation rules.
3. route: routes (createProduct, getAll, getSingle, updateSingle, deleteSingle) are declared.
4. controller: All controllers are declared with conditions and queries.
5. services: All service logics are created here.

## How it works:

We have api end points for products - '/api/products'  and api end points fo orders - '/api/orders'.

1. we can create a single product through '/create-bicycle' api.
2. we can get all the product created in the database through '/' api.
3. get api also has search functionality to search by name, type or brand.
3. we can get a single product using '/:productId' api 
4. update api '/:productId' to update single product. and finally
5. delete api '/:productId' to delete a single product from database

We have one additional api to get the total revenue from the orders created - '/api/orders/revenue'.

## Features:
1. When an order is created the main inventory of the specific item is reduced by the quantity ordered.
2. If a specific product inventory goes to 0 then then stock flag show false.
3. If the order quantity is more than the inventory available then there is an error message created saying low inventory.
4. when a product is created createdAt and updatedAt fields are created dynamically with created time and when a product is updated the updatedAt field is updated to the updated time dynamically.
5. when we use revenue route total revenue from all the orders are added to get the total revenue using mongoDB aggregate.
