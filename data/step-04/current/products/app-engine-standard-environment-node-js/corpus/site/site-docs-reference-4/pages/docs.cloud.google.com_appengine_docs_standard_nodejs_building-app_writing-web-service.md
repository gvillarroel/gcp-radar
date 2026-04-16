---
title: "Write your web service with Node.js \_|\_ App Engine standard environment\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service
knowledge_key: corpus
source_id: site-docs-reference-4
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service
  title: "Write your web service with Node.js \_|\_ App Engine standard environment\
    \ \_|\_ Google Cloud Documentation"
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
Write your web service with Node.js
Stay organized with collections
Save and categorize content based on your preferences.
Note: If you are deploying a new Node.js web service to Google Cloud,
we recommend getting started with
Cloud Run .
This guide shows how to write a Node.js web service to
run in the App Engine standard environment. To learn more about
the Node.js runtime and how it works, see
Node.js Runtime Environment .
Before you begin
Install Node.js LTS .
Key points
You can use dependencies by listing them in your
package.json file. See
Specifying Dependencies
for more information.
App Engine starts your application by running npm start .
Your server must listen to the port specified by the process.env.PORT , an
environment variable
set by the App Engine runtime.
You need an
app.yaml
file to deploy your service to App Engine.
Create a server to listen for HTTP requests
The core of your web service is the HTTP server. The sample code in this guide
uses the Express.js
framework to handle HTTP requests, but you are free to use a web framework of
your choice.
Create a new folder called my-nodejs-service for your Node.js
service.
Navigate to the folder in your terminal, and create a package.json file
by running npm init .
Add Express as a dependency by running:
npm install express
Confirm that Express appears in your package.json file's dependencies
field. Here's an example:
{
...
"dependencies" : {
"express" : "^4.16.3"
}
...
}
Add a start script to your package.json file:
"scripts" : {
"start" : "node server.js"
}
Create a file called server.js in the same folder and add the following
code:
const express = require ( 'express' );
const app = express ();
app . get ( '/' , ( req , res ) = > {
res . send ( 'Hello from App Engine!' );
});
// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process . env . PORT || 8080 ;
app . listen ( PORT , () = > {
console . log ( `Server listening on port ${ PORT } ...` );
});
This is a very basic web server - it responds to all GET requests to the root
path ( '/' ) with the text "Hello from App Engine!" Note the last four lines,
where the server is set to listen to the port specified by process.env.PORT ,
an environment variable
set by the App Engine runtime. If your server isn't set to listen to
this port, it will not receive requests.
Notice that if process.env.PORT is not set, port 8080 is used as
a default. This is necessary for testing your app locally, because
process.env.PORT doesn't get set during local runs - it is only set when
your app is running on App Engine. You can use whichever port
you prefer for testing, but this guide uses 8080 .
Run the server locally
To run the server locally:
Run npm start in your terminal. This will run your server.js file.
Point your web browser to http://localhost:8080 .
You should see a page with the text "Hello from App Engine!"
Create the app.yaml file
An app.yaml file specifies settings for your App Engine service's
runtime environment. Your service will not deploy without this file.
In your my-nodejs-service folder, create a file called
app.yaml .
Add the following contents:
runtime : nodejs24
This is a minimal configuration file, indicating to App Engine the
version of the Node.js runtime. The app.yaml file can also specify network
settings, scaling settings, and more. For more information, see the
app.yaml reference .
At this point, you should have a file structure like the following:
my-nodejs-service/
app.yaml
package.json
server.js
Next steps
Now that you've created a simple Node.js web server that listens to the correct
port and you've specified the runtime in an app.yaml file, you're ready to
deploy your service on App Engine .
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how
App Engine performs in real-world
scenarios. New customers also get $300 in free credits to run, test, and
deploy workloads.
Try App Engine free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
