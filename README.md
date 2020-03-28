# Dustins-FEC-Service
Service Repo For FEC
# Project Name

> Project description

## Related Projects
  - https://github.com/rpt19-taniwha/Dustins-FEC-proxy
  - https://github.com/rpt19-taniwha/iris-fec-service
  - https://github.com/rpt19-taniwha/andy-service
  - https://github.com/rpt19-taniwha/Dustins-FEC-Service
  - https://github.com/rpt19-taniwha/mervin-fec-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Settings:
  - port: 8000
  - htmlId: 'images'
  - content delivery endpoint: '/dist/bundle.js'

  Instructions:
  - To use this service just place the endpoint in your html document and give the target element the htmlID above.

  Running the Service
  - to run the server type into the cli: npm run server
  - if you haven't installed mondodb globally instructions are here: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
  - to start mongodb type: mongo into the cli inside your the dustins-fec-service folder.
  - no username or password
  - seed the database by typing in: npm run seed in the cli
  -



## Requirements

- Node v12.16.1 (older versions may work, but this is the version it was built on)
- Express v4.17.1
- Mongoose v5.9.3



## Development

if for some reason you need to create a bundle.js file or you need to do development work run the following:

mongo
npm run server-dev
npm run react-dev
npm run seed

and

npm run test while doing testing




### Installing Dependencies
To install Dependencies use: (npm install) on the cli





