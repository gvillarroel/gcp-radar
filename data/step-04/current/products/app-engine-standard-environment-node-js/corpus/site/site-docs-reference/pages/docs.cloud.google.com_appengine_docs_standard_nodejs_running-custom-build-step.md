---
title: "Running a custom build step \_|\_ App Engine standard environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/nodejs/running-custom-build-step
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/nodejs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/nodejs/running-custom-build-step
  title: "Running a custom build step \_|\_ App Engine standard environment \_|\_\
    \ Google Cloud Documentation"
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
Running a custom build step
Stay organized with collections
Save and categorize content based on your preferences.
By default, the node.js runtime will execute npm run build if a build script
is detected in package.json file. If you require additional control over your build
steps before starting your application, you can provide a custom build
step. Custom build steps can be executed by adding gcp-build in your
package.json file.
To prevent your build from running the npm run build script, you must either:
Add a gcp-build script with an empty value in your package.json file:
"gcp-build":"" . For details about configuring the package.json , see
Node.js buildpacks configurations .
Add the GOOGLE_NODE_RUN_SCRIPTS
build environment variable with an empty value in your app.yaml file.
build_env_variables :
GOOGLE_NODE_RUN_SCRIPTS : ''
For details about specifying build environment variables see
build_env_variables section in the app.yaml file.
When this script is executed, the dependencies in the dependencies and
devDependencies fields of your package.json file are available.
After executing your custom build step, App Engine removes and regenerates the
node_modules folder by only installing the production dependencies declared
in the dependencies field of your package.json file.
For more information on how to configure the runtime for custom build steps,
see Executing custom build steps during deployment
for Node.js buildpacks.
Example
A custom build script can be used for pre-processing tasks, such as
pre-processing CSS, minifying client side JavaScript, or running tools, such as
webpack or gulp .
For example, to compile TypeScript to JavaScript, your package.json file might
look like the following. Note the gcp-build script:
{
"name" : "appengine-typescript" ,
"description" : "An example TypeScript app running on Google App Engine." ,
"version" : "0.0.1" ,
"private" : true ,
"license" : "Apache Version 2.0" ,
"author" : "Google Inc." ,
"engines" : {
"node" : "20.x"
},
"scripts" : {
"prepare" : "npm run gcp-build" ,
"pretest" : "npm run gcp-build" ,
"test" : "c8 mocha -p -j 2 test/*.test.js --exit" ,
"lint" : "gts lint" ,
"start" : "node ./index.js" ,
"deploy" : "gcloud app deploy" ,
"clean" : "gts clean" ,
"compile" : "tsc -p ." ,
"fix" : "gts fix" ,
"build" : "tsc -p ." ,
"gcp-build" : "tsc -p ."
},
"dependencies" : {
"@typescript-eslint/parser" : "^8.0.0" ,
"express" : "^4.16.3"
},
"devDependencies" : {
"@types/express" : "^4.17.17" ,
"@types/node" : "^20.0.0" ,
"c8" : "^10.0.0" ,
"chai" : "^4.5.0" ,
"gts" : "^5.0.0" ,
"mocha" : "^10.2.0" ,
"typescript" : "^5.0.0" ,
"wait-port" : "^1.0.0"
}
}
Serving static files
When you generate or copy files during the custom build step, App Engine does
not serve these static files directly from your app using either the
static_dir
or static_files
elements defined in the app.yaml file. Instead, App Engine uploads
the static files to the serving infrastructure in the standard environment
before running the custom build step. Any request to the files generated or
copied during the custom build step results in a 404 NOT FOUND
HTTP error.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
