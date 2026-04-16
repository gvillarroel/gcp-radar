---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:46.600Z"
product_name: "Cloud Tasks"
product_slug: "cloud-tasks"
feature_name: "Queue-level HTTP target routing"
feature_slug: "queue-level-http-target-routing"
latest_feature_date: "2023-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks"
  - "https://docs.cloud.google.com/tasks/docs/configuring-queues"
  - "https://docs.cloud.google.com/tasks/docs/add-task-queue"
  - "https://docs.cloud.google.com/tasks/docs/creating-queues"
keywords:
  - "queue"
  - "level"
  - "http"
  - "target"
  - "routing"
  - "tasks"
  - "lets"
  - "queues"
---

# Queue-level HTTP target routing

Product: Cloud Tasks
Coverage: MEDIUM

## Step 02 Summary

Cloud Tasks lets queues define routing for HTTP target tasks so individual tasks do not need routing configuration.

## Extended Definition

Cloud Tasks lets queues define routing for HTTP target tasks so individual tasks do not need routing configuration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks)
- [https://docs.cloud.google.com/tasks/docs/configuring-queues](https://docs.cloud.google.com/tasks/docs/configuring-queues)
- [https://docs.cloud.google.com/tasks/docs/add-task-queue](https://docs.cloud.google.com/tasks/docs/add-task-queue)
- [https://docs.cloud.google.com/tasks/docs/creating-queues](https://docs.cloud.google.com/tasks/docs/creating-queues)

## Supporting Pages

### Create HTTP target tasks \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks)
- Source ID: `site-docs-root`
- Final score: 311
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page demonstrates how to programmatically create basic HTTP target tasks and place them in Cloud Tasks queues .
- If your queue does not already use queue-level routing, see Configure queue-level routing for HTTP tasks .
- Removing or replacing it should not affect the execution of the samples in anyway . -- > < parent > < groupId>com . google . cloud . samples < / groupId > < artifactId>shared - configuration < / artifactId > < version>1 .2.0 < / version > < / parent > < properties > < maven . compiler . target>1 .8 < / maven . compiler . target > < maven . compiler . source>1 .8 < / maven . compiler . source > < project . build . sourceEncoding>UTF - 8 < / project . build . sourceEncoding > < / properties > < dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>libraries - bom < / artifactId > < version>26 .32.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - tasks < / artifactId > < / dependency > < dependency > < groupId>junit < / groupId > < artifactId>junit < / artifactId > < version>4 .13.2 < / version > < scope>test < / scope > < / dependency > < dependency > < groupId>com . google . truth < / groupId > < artifactId>truth < / artifactId > < version>1 .4.0 < / version > < scope>test < / scope > < / dependency > < / dependencies > < / project > Node.js // Imports the Google Cloud Tasks library. const { CloudTasksClient } = require ( ' @google-cloud/tasks ' ); // Instantiates a client. const client = new CloudTasksClient (); async function createHttpTask () { // TODO(developer): Uncomment these lines and replace with your values. // const project = 'my-project-id'; // const queue = 'my-queue'; // const location = 'us-central1'; // const url = 'https://example.com/taskhandler'; // const payload = 'Hello, World!'; // const inSeconds = 180; // Construct the fully qualified queue name. const parent = client . queuePath ( project , location , queue ); const task = { httpRequest : { headers : { 'Content-Type' : 'text/plain' , // Set content type to ensure compatibility your application's request parsing }, httpMethod : 'POST' , url , }, }; if ( payload ) { task . httpRequest . body = Buffer . from ( payload ). toString ( 'base64' ); } if ( inSeconds ) { // The time when the task is scheduled to be attempted. task . scheduleTime = { seconds : parseInt ( inSeconds ) + Date . now () / 1000 , }; } // Send create task request. console . log ( 'Sending task:' ); console . log ( task ); const request = { parent : parent , task : task }; const [ response ] = await client . createTask ( request ); console . log ( Created task ${ response . name } ); } createHttpTask (); Note the package.json file: { "name" : "appengine-cloudtasks" , "description" : "Google App Engine Cloud Tasks example." , "license" : "Apache-2.0" , "author" : "Google Inc." , "private" : true , "engines" : { "node" : ">=16.0.0" }, "files" : [ " .js" ], "scripts" : { "test" : "c8 mocha -p -j 2 --timeout 30000" , "start" : "node server.js" }, "dependencies" : { "@google-cloud/tasks" : "^5.0.0" , "express" : "^4.16.3" }, "devDependencies" : { "c8" : "^10.0.0" , "chai" : "^4.5.0" , "mocha" : "^10.0.0" , "uuid" : "^10.0.0" } } PHP use Google\Cloud\Tasks\V2\Client\CloudTasksClient; use Google\Cloud\Tasks\V2\CreateTaskRequest; use Google\Cloud\Tasks\V2\HttpMethod; use Google\Cloud\Tasks\V2\HttpRequest; use Google\Cloud\Tasks\V2\Task; / Uncomment and populate these variables in your code / // $projectId = 'The Google project ID'; // $locationId = 'The Location ID'; // $queueId = 'The Cloud Tasks Queue ID'; // $url = 'The full url path that the task request will be sent to.' // $payload = 'The payload your task should carry to the task handler.
- Removing or replacing it should not affect the execution of the samples in anyway . -- > < parent > < groupId>com . google . cloud . samples < / groupId > < artifactId>shared - configuration < / artifactId > < version>1 .2.0 < / version > < / parent > < properties > < maven . compiler . target>1 .8 < / maven . compiler . target > < maven . compiler . source>1 .8 < / maven . compiler . source > < project . build . sourceEncoding>UTF - 8 < / project . build . sourceEncoding > < / properties > < dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>libraries - bom < / artifactId > < version>26 .32.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - tasks < / artifactId > < / dependency > < dependency > < groupId>junit < / groupId > < artifactId>junit < / artifactId > < version>4 .13.2 < / version > < scope>test < / scope > < / dependency > < dependency > < groupId>com . google . truth < / groupId > < artifactId>truth < / artifactId > < version>1 .4.0 < / version > < scope>test < / scope > < / dependency > < / dependencies > < / project > Node.js // Imports the Google Cloud Tasks library. const { CloudTasksClient } = require ( ' @google-cloud/tasks ' ); // Instantiates a client. const client = new CloudTasksClient (); async function createHttpTaskWithToken () { // TODO(developer): Uncomment these lines and replace with your values. // const project = 'my-project-id'; // const queue = 'my-queue'; // const location = 'us-central1'; // const url = 'https://example.com/taskhandler'; // const serviceAccountEmail = 'client@<project-id>.iam.gserviceaccount.com'; // const payload = 'Hello, World!'; // Construct the fully qualified queue name. const parent = client . queuePath ( project , location , queue ); const task = { httpRequest : { headers : { 'Content-Type' : 'text/plain' , // Set content type to ensure compatibility your application's request parsing }, httpMethod : 'POST' , url , oidcToken : { serviceAccountEmail , }, }, }; if ( payload ) { task . httpRequest . body = Buffer . from ( payload ). toString ( 'base64' ); } console . log ( 'Sending task:' ); console . log ( task ); // Send create task request. const request = { parent : parent , task : task }; const [ response ] = await client . createTask ( request ); const name = response . name ; console . log ( Created task ${ name } ); } createHttpTaskWithToken (); Note the package.json file: { "name" : "appengine-cloudtasks" , "description" : "Google App Engine Cloud Tasks example." , "license" : "Apache-2.0" , "author" : "Google Inc." , "private" : true , "engines" : { "node" : ">=16.0.0" }, "files" : [ " .js" ], "scripts" : { "test" : "c8 mocha -p -j 2 --timeout 30000" , "start" : "node server.js" }, "dependencies" : { "@google-cloud/tasks" : "^5.0.0" , "express" : "^4.16.3" }, "devDependencies" : { "c8" : "^10.0.0" , "chai" : "^4.5.0" , "mocha" : "^10.0.0" , "uuid" : "^10.0.0" } } Python from typing import Optional from google.cloud import tasks v2 def create http task with token ( project : str , location : str , queue : str , url : str , payload : bytes , service account email : str , audience : Optional [ str ] = None , ) - > tasks v2 .

### Configure Cloud Tasks queues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tasks/docs/configuring-queues](https://docs.cloud.google.com/tasks/docs/configuring-queues)
- Source ID: `site-docs-root`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PROJECT ID .appspot.com service : SERVICE name : projects/ PROJECT ID /locations/ LOCATION ID /queues/ QUEUE ID rateLimits : maxBurstSize : 100 maxConcurrentDispatches : 1000 maxDispatchesPerSecond : 500.0 retryConfig : maxAttempts : 100 maxBackoff : 3600s maxDoublings : 16 minBackoff : 0.100s state : RUNNING To remove queue-level routing, run the following command: gcloud tasks queues update QUEUE ID \ --clear-routing-override When queue-level routing is removed, task-level routing is applied to tasks in the queue and tasks added to the queue in the future.
- The following example uses the REST API to update the host that tasks are routed to: curl -X PATCH -d @- -i \ -H "Authorization: Bearer ACCESS TOKEN " \ -H "Content-Type: application/json" \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues/ QUEUE ID ?updateMask=httpTarget.uriOverride" << EOF { "httpTarget" : { "uriOverride" : { "host" : " NEW HOST " }} } EOF Replace the following: ACCESS TOKEN : your access token.
- Resume the queue by running the following command: gcloud tasks queues resume QUEUE ID Configure queue-level routing for App Engine tasks To configure queue-level routing for App Engine tasks, set the queue's appEngineRoutingOverride parameter to your preferred App Engine service and version.
- If CMEK is enabled, you can't do the following: Create tasks on a queue that has queue-level routing Apply queue-level routing Configure queue-level routing for HTTP tasks You can configure a queue to override task-level routing either when creating the queue or when updating the queue.

### "Quickstart: Add an HTTP target task to a Cloud Tasks queue \_|\_ Google\

- URL: [https://docs.cloud.google.com/tasks/docs/add-task-queue](https://docs.cloud.google.com/tasks/docs/add-task-queue)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In your terminal, create a queue that logs all operations. gcloud tasks queues create QUEUE NAME \ --log-sampling-ratio = 1 .0 \ --location = REGION Replace the following: QUEUE NAME : a name for your Cloud Tasks queue REGION : the supported region you deployed your service or app in Wait for the queue to initialize and then verify that it was created successfully. gcloud tasks queues describe QUEUE NAME \ --location = REGION The output should be similar to the following: name: projects/ PROJECT ID /locations/ LOCATION ID /queues/ QUEUE NAME rateLimits: maxBurstSize: 100 maxConcurrentDispatches: 1000 maxDispatchesPerSecond: 500.0 retryConfig: maxAttempts: 100 maxBackoff: 3600s maxDoublings: 16 minBackoff: 0.100s state: RUNNING Add a task to the Cloud Tasks queue Use the gcloud tasks create-http-task command to create a task that targets an HTTP endpoint and add the task to your queue.
- Verify that the task was executed successfully by reading the logs. gcloud logging read --limit = 3 The logs should look similar to the following: jsonPayload: '@type': type.googleapis.com/google.cloud.tasks.logging.v1.TaskActivityLog task: projects/ PROJECT ID /locations/ REGION /queues/ QUEUE NAME /tasks/ TASK ID taskCreationLog: scheduleTime: '2024-07-04T19:00:27.801837Z' status: OK targetAddress: GET https://www.example.com/ targetType: HTTP Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the Google Cloud project with the resources.
- Add an HTTP target task to a Cloud Tasks queue This quickstart shows you how to add an HTTP target task to a Cloud Tasks queue using the Cloud Tasks API.
- Delete a Google Cloud project: gcloud projects delete PROJECT ID Alternatively, you can delete the Cloud Tasks queue: gcloud tasks queues delete QUEUE NAME \ --location = REGION What's next Manage queues and tasks Create Cloud Tasks queues RPC API reference REST API reference Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Create Cloud Tasks queues \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tasks/docs/creating-queues](https://docs.cloud.google.com/tasks/docs/creating-queues)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "name": "projects/ PROJECT ID /locations/ LOCATION /queues/ QUEUE ID " } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues" Select-Object -Expand Content APIs Explorer (browser) Copy the request body and open the method reference page .
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json PROJECT ID /locations/ LOCATION /queues/ QUEUE ID " } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Create a queue You can create a queue in the following ways: In the Google Cloud console By using the Google Cloud CLI in either your terminal or Cloud Shell By sending a direct request to the Cloud Tasks API Note: If you are configuring routing for an App Engine queue and you don't explicitly set the target service that contains the appropriate worker, the default service is used.
- Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues/ QUEUE ID " PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

