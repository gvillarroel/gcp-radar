---
title: "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/nodejs/specifying-dependencies
  title: "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Guides
Send feedback
Specifying dependencies
Stay organized with collections
Save and categorize content based on your preferences.
You specify the dependencies for your Node.js app by declaring
them in the package.json file.
For example, if you want to specify Lodash
as a dependency, your package.json file might look as follows:
{
"dependencies" : {
"lodash" : "^4.0.1"
}
}
During deployment, the Node.js runtime
automatically installs
all dependencies declared in your package.json file. By default, the
npm install command is used, however Yarn and Pnpm package managers are also
supported:
Yarn: If a yarn.lock file exists, the yarn install --production
command is used instead.
Pnpm: If a pnpm-lock.yaml file
exists, the pnpm install command is used instead.
Note that you must ensure that the yarn.lock or pnpm-lock.yaml file is
not specified in the skip_files section of your app.yaml file.
By default, App Engine caches fetched dependencies to reduce build
times. To install an uncached version of the dependency, use the command:
gcloud app deploy -- no - cache
Support and limitations for the package.json file in the standard
environment:
You can use any Linux-compatible Node.js package with
App Engine, including packages that require native (C) extensions.
If the engines field is specified in your package.json , you must define a
compatible Node.js version .
All dependencies that you define under the devDependencies field are
ignored and do not get installed for your app in App Engine.
The start script should be lightweight and exclude build steps for the
best performance because the script runs each time a new instance of your
application is created.
Private dependencies with Artifact Registry
If your app uses a private npm module ,
you can use an Artifact Registry Node.js package repository
to host private dependencies. When deploying your app, the build process
automatically generates Artifact Registry credentials for the
Cloud Build service account
so you won't need to generate additional credentials.
To include private dependencies, list the Artifact Registry repository and
configure settings for authenticating with the registry in your .npmrc
file in the app directory. For example:
@ SCOPE : registry = https : // REGION_ID -npm.pkg.dev/ PROJECT_ID / REPOSITORY_NAME
// REGION_ID -npm.pkg.dev/ PROJECT_ID / REPOSITORY_NAME :always-auth=true
Note that this approach also works for Yarn v1 package manager.
If you are using Yarn v2 or higher, list the Artifact Registry repository and
configure settings for authenticating with the registry in your .yarnrc.yml
file in the app directory. For example:
npmScopes :
SCOPE :
npmRegistryServer : https : // REGION_ID -npm.pkg.dev/ PROJECT_ID / REPOSITORY_NAME
npmAlwaysAuth : true
Afterwards, include your packages in the package.json file. For example:
{
"dependencies" : {
" @ SCOPE /my-package" : "^1.0.0"
}
}
Installing a web framework
You'll need to use a web framework to enable your app to serve web requests. You
can use any Node.js web framework including the following:
Express.js
Hapi.js
Loopback.js
Koa.js
Kraken.js
Restify.js
Sails.js
To use a particular web framework, such as Express.js , add the framework to your package.json file:
Using npm :
npm install express
Using yarn :
yarn add express
Using pnpm :
pnpm add express
For example, the resulting package.json file might look as follows:
{
"dependencies" : {
"lodash" : "^4.0.1" ,
"express" : "^4.16.2"
}
}
Installing the Cloud Client Libraries
The Cloud Client Libraries for Node.js
is the idiomatic way for Node.js developers to integrate with Google Cloud
services, such as Firestore in Datastore mode (Datastore)
and Cloud Storage .
To install the Node.js client library for Cloud Storage:
Install the Cloud Client Libraries locally by using a package manager:
To use npm , run:
npm install @google-cloud/storage
To use yarn , run:
yarn add @google-cloud/storage
To use pnpm , run:
pnpm add @google-cloud/storage
Set up authentication. You can configure the Cloud Client Libraries for Node.js
to handle authentication automatically .
Use the Node.js client library for Cloud Storage
reference to implement support for the Cloud Storage service in your
app.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
