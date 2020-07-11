# Dustins-FEC-Service
Service Repo For FEC
# Project Name
 - [Image Service Display](./FEC.png)
 - [Image Service Zoom Display](./FEC/png)
 - [Tour the Service](https://www.loom.com/share/8922a8a8fbef4d4fa38b297e554d75ea)


## Related Projects
  - [Proxy](https://github.com/rpt19-taniwha/Dustins-FEC-proxy)
  - [reviews](https://github.com/rpt19-taniwha/iris-fec-service)
  - [You May Also Like](https://github.com/rpt19-taniwha/andy-service)
  - [Product](https://github.com/rpt19-taniwha/mervin-fec-service)

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [Production](#production)

## Usage

  API endpoints:
    - '/listing/:productNumber'
    - '/mainImage/:productNumber'

  Settings:
  - port: 8000
  - htmlId: 'images'
  - content delivery endpoint: '/dist/bundle.js'

  Instructions:
  To run development mode:
  1. clone repo on the command line
  2. To install dependencies type npm install on the cli
  2. go to the #development tab and follow instructions

    To run production mode:
  1. clone repo on the command line
  2. To install dependencies type npm install on the cli
  2. go to the #production tab and follow instructions


## Requirements

- Node v12.16.1 (older versions may work, but this is the version it was built on)
- Express v4.17.1
- Mongoose v5.9.3
- React: v16.13.0
- Jquery v3.4.1
- for an exhaustive list look under the dependencies and devDependencies in the package.json file.


## Development
  Database:
    To seed a local Mongo Database (optional)
    -- it currently runs on Mongo Atlas so seeding a local database is unnecessary
    -- by commenting out the url to the cloud database (line 45) and uncommenting the url to the local database (line 47) you will be able to see your local database

    Note: If you want to run a local MongoDB instance and have not installed it globally, find the instructions: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
    - once installed type mongo into the cli inside dustins-fec-service-folder
    - no username and password is necessary unless you choose to make one



  npm run server-dev
  npm run build-dev
   - it is currently set to run in production mode so to develop:
    - in server/index.js comment out the aws port on line 8 and  uncomment the localhost port on line 11
    - in client/src/app.jsx comment out the getUrls method on line 40 through 56 which is tailored for requests from the deployed service
    - uncomment the getUrls method which is tailored to developing on the local host:  lines 61 - 77.

  npm run test while doing testing with jest.


## Production
  -- no database setup is necessary but for the optional instructions to set up your database locally see the ## Development header

  -- npm run server-prod
  -- npm run build-prod











