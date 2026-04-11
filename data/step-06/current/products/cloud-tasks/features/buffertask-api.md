---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:19:02.595Z"
product_name: "Cloud Tasks"
product_slug: "cloud-tasks"
feature_name: "BufferTask API"
feature_slug: "buffertask-api"
latest_feature_date: "2023-04-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks"
  - "https://docs.cloud.google.com/tasks/docs/authentication"
  - "https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks"
keywords:
  - "buffertask"
  - "api"
  - "tasks"
  - "provides"
  - "the"
  - "method"
  - "to"
  - "create"
---

# BufferTask API

Product: Cloud Tasks
Coverage: LOW

## Step 02 Summary

Cloud Tasks provides the BufferTask method to create tasks by sending an HTTP request to a queue.

## Extended Definition

Cloud Tasks provides the BufferTask method to create tasks by sending an HTTP request to a queue.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks)
- [https://docs.cloud.google.com/tasks/docs/authentication](https://docs.cloud.google.com/tasks/docs/authentication)
- [https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks](https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks)

## Supporting Pages

### Create HTTP target tasks \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks](https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CreateTaskRequest ( parent = client . queue path ( project , location , queue ), task = task , ) ) Note the requirements.txt file: google - cloud - tasks == 2.18.0 BufferTask method The following examples use application default credentials to authenticate when using the BufferTask method for creating a task. curl curl -X HTTP METHOD \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues/ QUEUE ID /tasks:buffer" \ -H "Authorization: Bearer ACCESS TOKEN " Replace the following: HTTP METHOD : the HTTP method for your request; for example GET or POST .
- Call the BufferTask method The following examples show how to create a task by sending an HTTP POST request to the Cloud Tasks API buffer endpoint . curl The following code snippet shows an example of task creation using with the BufferTask method using curl : curl -X HTTP METHOD \ "https://cloudtasks.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /queues/ QUEUE ID /tasks:buffer" \ Replace the following: HTTP METHOD : the HTTP method for your request; for example GET or POST .
- CreateTaskRequest ( The queue to add the task to parent = client . queue path ( project , location , queue ), The task itself task = task , ) ) Note the requirements.txt file: google - cloud - tasks == 2.18.0 Ruby require "google/cloud/tasks" Create a Task with an HTTP Target @param [String] project id Your Google Cloud Project ID. @param [String] location id Your Google Cloud Project Location ID. @param [String] queue id Your Google Cloud Tasks Queue ID. @param [String] url The full path to sent the task request to. @param [String] payload The request body of your task. @param [Integer] seconds The delay, in seconds, to process your task. def create http task project id , location id , queue id , url , payload : nil , seconds : nil Instantiates a client. client = Google :: Cloud :: Tasks . cloud tasks Construct the fully qualified queue name. parent = client . queue path project : project id , location : location id , queue : queue id Construct task. task = { http request : { http method : "POST" , url : url } } Add payload to task body. task [ :http request ][ :body ] = payload if payload Add scheduled time to task. if seconds timestamp = Google :: Protobuf :: Timestamp . new timestamp . seconds = Time . now . to i + seconds . to i task [ :schedule time ] = timestamp end Send create task request. puts "Sending task #{ task } " response = client . create task parent : parent , task : task puts "Created task #{ response . name } " if response . name end Create a task using the BufferTask method This section discusses creating a task by sending an HTTP request.
- Removing or replacing it should not affect the execution of the samples in anyway . -- > < parent > < groupId>com . google . cloud . samples < / groupId > < artifactId>shared - configuration < / artifactId > < version>1 .2.0 < / version > < / parent > < properties > < maven . compiler . target>1 .8 < / maven . compiler . target > < maven . compiler . source>1 .8 < / maven . compiler . source > < project . build . sourceEncoding>UTF - 8 < / project . build . sourceEncoding > < / properties > < dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>libraries - bom < / artifactId > < version>26 .32.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - tasks < / artifactId > < / dependency > < dependency > < groupId>junit < / groupId > < artifactId>junit < / artifactId > < version>4 .13.2 < / version > < scope>test < / scope > < / dependency > < dependency > < groupId>com . google . truth < / groupId > < artifactId>truth < / artifactId > < version>1 .4.0 < / version > < scope>test < / scope > < / dependency > < / dependencies > < / project > Node.js // Imports the Google Cloud Tasks library. const { CloudTasksClient } = require ( ' @google-cloud/tasks ' ); // Instantiates a client. const client = new CloudTasksClient (); async function createHttpTask () { // TODO(developer): Uncomment these lines and replace with your values. // const project = 'my-project-id'; // const queue = 'my-queue'; // const location = 'us-central1'; // const url = 'https://example.com/taskhandler'; // const payload = 'Hello, World!'; // const inSeconds = 180; // Construct the fully qualified queue name. const parent = client . queuePath ( project , location , queue ); const task = { httpRequest : { headers : { 'Content-Type' : 'text/plain' , // Set content type to ensure compatibility your application's request parsing }, httpMethod : 'POST' , url , }, }; if ( payload ) { task . httpRequest . body = Buffer . from ( payload ). toString ( 'base64' ); } if ( inSeconds ) { // The time when the task is scheduled to be attempted. task . scheduleTime = { seconds : parseInt ( inSeconds ) + Date . now () / 1000 , }; } // Send create task request. console . log ( 'Sending task:' ); console . log ( task ); const request = { parent : parent , task : task }; const [ response ] = await client . createTask ( request ); console . log ( Created task ${ response . name } ); } createHttpTask (); Note the package.json file: { "name" : "appengine-cloudtasks" , "description" : "Google App Engine Cloud Tasks example." , "license" : "Apache-2.0" , "author" : "Google Inc." , "private" : true , "engines" : { "node" : ">=16.0.0" }, "files" : [ " .js" ], "scripts" : { "test" : "c8 mocha -p -j 2 --timeout 30000" , "start" : "node server.js" }, "dependencies" : { "@google-cloud/tasks" : "^5.0.0" , "express" : "^4.16.3" }, "devDependencies" : { "c8" : "^10.0.0" , "chai" : "^4.5.0" , "mocha" : "^10.0.0" , "uuid" : "^10.0.0" } } PHP use Google\Cloud\Tasks\V2\Client\CloudTasksClient; use Google\Cloud\Tasks\V2\CreateTaskRequest; use Google\Cloud\Tasks\V2\HttpMethod; use Google\Cloud\Tasks\V2\HttpRequest; use Google\Cloud\Tasks\V2\Task; / Uncomment and populate these variables in your code / // $projectId = 'The Google project ID'; // $locationId = 'The Location ID'; // $queueId = 'The Cloud Tasks Queue ID'; // $url = 'The full url path that the task request will be sent to.' // $payload = 'The payload your task should carry to the task handler.

### Authenticate to Cloud Tasks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tasks/docs/authentication](https://docs.cloud.google.com/tasks/docs/authentication)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Set the --service-account flag to the email address for the service account that you created. gcloud compute instances create INSTANCE NAME --zone = ZONE --service-account = SERVICE ACCOUNT EMAIL For more information about authenticating to Google APIs, see Authentication methods .
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .
- You can access the API in the following ways: Client libraries Google Cloud CLI REST Client libraries The Cloud Tasks client libraries provide high-level language support for authenticating to Cloud Tasks programmatically.
- Google Cloud CLI When you use the gcloud CLI to access Cloud Tasks, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.

### Create App Engine tasks \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks](https://docs.cloud.google.com/tasks/docs/creating-appengine-tasks)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See https://github.com/GoogleCloudPlatform/cloud-opensource-java/wiki/The-Google-Cloud-Platform-Libraries-BOM --> <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.32.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-tasks</artifactId> </dependency> <!-- Test dependencies --> <dependency> <groupId>junit</groupId> <artifactId>junit</artifactId> <version>4.13.2</version> <scope>test</scope> </dependency> <dependency> <groupId>com.google.truth</groupId> <artifactId>truth</artifactId> <version>1.4.0</version> <scope>test</scope> </dependency> </dependencies> <build> <finalName>tasks</finalName> <plugins> <plugin> <groupId>org.apache.maven.plugins</groupId> <artifactId>maven-war-plugin</artifactId> <version>3.4.0</version> <configuration> <failOnMissingWebXml>false</failOnMissingWebXml> </configuration> </plugin> <plugin> <groupId>org.codehaus.mojo</groupId> <artifactId>exec-maven-plugin</artifactId> <version>3.1.1</version> <configuration> <mainClass>com.example.task.CreateTask</mainClass> <cleanupDaemonThreads>false</cleanupDaemonThreads> </configuration> </plugin> </plugins> </build> </project> Node.js // Imports the Google Cloud Tasks library. const { CloudTasksClient } = require ( ' @google-cloud/tasks ' ); // Instantiates a client. const client = new CloudTasksClient (); async function createTask () { // TODO(developer): Uncomment these lines and replace with your values. // const project = 'my-project-id'; // const queue = 'my-appengine-queue'; // const location = 'us-central1'; // const payload = 'Hello, World!'; // Construct the fully qualified queue name. const parent = client . queuePath ( project , location , queue ); const task = { appEngineHttpRequest : { headers : { 'Content-Type' : 'text/plain' , // Set content type to ensure compatibility your application's request parsing }, httpMethod : 'POST' , relativeUri : '/log payload' , }, }; if ( payload ) { task . appEngineHttpRequest . body = Buffer . from ( payload ). toString ( 'base64' ); } if ( inSeconds ) { // The time when the task is scheduled to be attempted. task . scheduleTime = { seconds : inSeconds + Date . now () / 1000 , }; } console . log ( 'Sending task:' ); console . log ( task ); // Send create task request. const request = { parent : parent , task : task }; const [ response ] = await client . createTask ( request ); const name = response . name ; console . log ( Created task ${ name } ); } createTask (); Note the package.json file: { "name" : "appengine-cloudtasks" , "description" : "Google App Engine Cloud Tasks example." , "license" : "Apache-2.0" , "author" : "Google Inc." , "private" : true , "engines" : { "node" : ">=16.0.0" }, "files" : [ " .js" ], "scripts" : { "test" : "c8 mocha -p -j 2 --timeout 30000" , "start" : "node server.js" }, "dependencies" : { "@google-cloud/tasks" : "^5.0.0" , "express" : "^4.16.3" }, "devDependencies" : { "c8" : "^10.0.0" , "chai" : "^4.5.0" , "mocha" : "^10.0.0" , "uuid" : "^10.0.0" } } PHP use Google\Cloud\Tasks\V2\AppEngineHttpRequest; use Google\Cloud\Tasks\V2\CloudTasksClient; use Google\Cloud\Tasks\V2\HttpMethod; use Google\Cloud\Tasks\V2\Task; / Uncomment and populate these variables in your code / // $projectId = 'The Google project ID'; // $locationId = 'The Location ID'; // $queueId = 'The Cloud Tasks App Engine Queue ID'; // $payload = 'The payload your task should carry to the task handler.
- FromDatetime ( d ) Add the timestamp to the tasks. task [ "schedule time" ] = timestamp Use the client to build and send the task. response = client . create task ( parent = parent , task = task ) print ( f "Created task { response . name } " ) return response Note the requirements.txt file: Flask == 3.0.3 gunicorn == 23.0.0 google - cloud - tasks == 2.18.0 Ruby require "google/cloud/tasks" Create an App Engine Task @param [String] project id Your Google Cloud Project ID. @param [String] location id Your Google Cloud Project Location ID. @param [String] queue id Your Google Cloud App Engine Queue ID. @param [String] payload The request body of your task. @param [Integer] seconds The delay, in seconds, to process your task. def create task project id , location id , queue id , payload : nil , seconds : nil Instantiates a client. client = Google :: Cloud :: Tasks . cloud tasks Construct the fully qualified queue name. parent = client . queue path project : project id , location : location id , queue : queue id Construct task. task = { app engine http request : { http method : "POST" , relative uri : "/log payload" } } Add payload to task body. if payload task [ :app engine http request ][ :body ] = payload end Add scheduled time to task. if seconds timestamp = Google :: Protobuf :: Timestamp . new timestamp . seconds = Time . now . to i + seconds . to i task [ :schedule time ] = timestamp end Send create task request. puts "Sending task #{ task } " response = client . create task parent : parent , task : task puts "Created task #{ response . name } " if response . name end What's next Learn about creating App Engine task handlers .
- Optional'; // Instantiate the client and queue name. $client = new CloudTasksClient(); $queueName = $client->queueName($projectId, $locationId, $queueId); // Create an App Engine Http Request Object. $httpRequest = new AppEngineHttpRequest(); // The path of the HTTP request to the App Engine service. $httpRequest->setRelativeUri('/task handler'); // POST is the default HTTP method, but any HTTP method can be used. $httpRequest->setHttpMethod(HttpMethod::POST); // Setting a body value is only compatible with HTTP POST and PUT requests. if (isset($payload)) { $httpRequest->setBody($payload); } // Create a Cloud Task object. $task = new Task(); $task->setAppEngineHttpRequest($httpRequest); // Send request and print the task name. $response = $client->createTask($queueName, $task); printf('Created task %s' .
- For adding a task to a queue, see Add a task to a Cloud Tasks queue C# using Google.Cloud.Tasks.V2 ; using Google.Protobuf ; using Google.Protobuf.WellKnownTypes ; using System ; class CreateAppEngineTask { public string CreateTask ( // TODO<developer>: call this method by passing correct values for // the following parameters or change the parameters' default values. string projectId = "YOUR-PROJECT-ID" , string location = "us-central1" , string queue = "my-queue" , string payload = "Hello World!" , int inSeconds = 0 ) { CloudTasksClient client = CloudTasksClient .

