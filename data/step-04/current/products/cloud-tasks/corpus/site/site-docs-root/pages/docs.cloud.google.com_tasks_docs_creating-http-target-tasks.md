---
title: "Create HTTP target tasks \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/tasks/docs
source_metadata:
  url: https://docs.cloud.google.com/tasks/docs/creating-http-target-tasks
  title: "Create HTTP target tasks \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Tasks
Guides
Send feedback
Create HTTP target tasks
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Tasks handlers can be run on any HTTP endpoint with an external IP
address such as GKE ,
Compute Engine , or even an on-premises web server. Your
tasks can be executed on any of these services in a reliable, configurable
fashion.
This page demonstrates how to programmatically create basic HTTP target tasks
and place them in
Cloud Tasks queues . The
quickstart demonstrates how to do this using the
Google Cloud CLI.
For tasks that have HTTP targets (as opposed to explicit App Engine targets,
which are less common), there are two ways to create tasks:
CreateTask method: You must explicitly create a task object. Use this
method if the tasks in your queue have different routing configurations. In
this case, you specify routing at the task level and cannot use queue-level
routing. This approach uses the CreateTask method.
BufferTask method: Use this method if your queue is set up to
buffer tasks in front of a service. The queue must have queue-level routing.
This approach uses the BufferTask method.
Create a task using the CreateTask method
This section discusses creating a task by constructing the task object. You use
the CreateTask method.
When you create a task using the CreateTask method, you explicitly create and
define the task object. You must specify the service and handler that process
the task.
Optionally, you can pass task-specific data along to the handler. You can also
fine-tune the
configuration
for the task, like scheduling a time in the future when it should be executed
or limiting the number of times you want the task to be retried if it fails
(see Advanced configuration ).
The following examples call the CreateTask method to create a task using the
Cloud Tasks client libraries.
C#
using Google.Cloud.Tasks.V2 ;
using Google.Protobuf ;
using Google.Protobuf.WellKnownTypes ;
using System ;
class CreateHttpTask
{
public string CreateTask (
string projectId = "YOUR-PROJECT-ID" ,
string location = "us-central1" ,
string queue = "my-queue" ,
string url = "http://example.com/taskhandler" ,
string payload = "Hello World!" ,
int inSeconds = 0 )
{
CloudTasksClient client = CloudTasksClient . Create ();
QueueName parent = new QueueName ( projectId , location , queue );
var response = client . CreateTask ( new CreateTaskRequest
{
Parent = parent . ToString (),
Task = new Task
{
HttpRequest = new HttpRequest
{
HttpMethod = HttpMethod . Post ,
Url = url ,
Body = ByteString . CopyFromUtf8 ( payload )
},
ScheduleTime = Timestamp . FromDateTime (
DateTime . UtcNow . AddSeconds ( inSeconds ))
}
});
Console . WriteLine ( $"Created Task {response.Name}" );
return response . Name ;
}
}
Go
// Command createHTTPtask constructs and adds a task to a Cloud Tasks Queue.
package main
import (
"context"
"fmt"
cloudtasks "cloud.google.com/go/cloudtasks/apiv2"
taskspb "cloud.google.com/go/cloudtasks/apiv2/cloudtaskspb"
)
// createHTTPTask creates a new task with a HTTP target then adds it to a Queue.
func createHTTPTask ( projectID , locationID , queueID , url , message string ) ( * taskspb . Task , error ) {
// Create a new Cloud Tasks client instance.
// See https://godoc.org/cloud.google.com/go/cloudtasks/apiv2
ctx := context . Background ()
client , err := cloudtasks . NewClient ( ctx )
if err != nil {
return nil , fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
// Build the Task queue path.
queuePath := fmt . Sprintf ( "projects/%s/locations/%s/queues/%s" , projectID , locationID , queueID )
// Build the Task payload.
// https://godoc.org/google.golang.org/genproto/googleapis/cloud/tasks/v2#CreateTaskRequest
req := & taskspb . CreateTaskRequest {
Parent : queuePath ,
Task : & taskspb . Task {
// https://godoc.org/google.golang.org/genproto/googleapis/cloud/tasks/v2#HttpRequest
MessageType : & taskspb . Task_HttpRequest {
HttpRequest : & taskspb . HttpRequest {
HttpMethod : taskspb . HttpMethod_POST ,
Url : url ,
},
},
},
}
// Add a payload message if one is present.
req . Task . GetHttpRequest (). Body = [] byte ( message )
createdTask , err := client . CreateTask ( ctx , req )
if err != nil {
return nil , fmt . Errorf ( "cloudtasks.CreateTask: %w" , err )
}
return createdTask , nil
}
Java
import com.google.cloud.tasks.v2. CloudTasksClient ;
import com.google.cloud.tasks.v2. HttpMethod ;
import com.google.cloud.tasks.v2. HttpRequest ;
import com.google.cloud.tasks.v2. QueueName ;
import com.google.cloud.tasks.v2. Task ;
import com.google.protobuf. ByteString ;
import java.io.IOException ;
import java.nio.charset.Charset ;
public class CreateHttpTask {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String locationId = "us-central1" ;
String queueId = "my-queue" ;
createTask ( projectId , locationId , queueId );
}
// Create a task with a HTTP target using the Cloud Tasks client.
public static void createTask ( String projectId , String locationId , String queueId )
throws IOException {
// Instantiates a client.
try ( CloudTasksClient client = CloudTasksClient . create ()) {
String url = "https://example.com/taskhandler" ;
String payload = "Hello, World!" ;
// Construct the fully qualified queue name.
String queuePath = QueueName . of ( projectId , locationId , queueId ). toString ();
// Construct the task body.
Task . Builder taskBuilder =
Task . newBuilder ()
. setHttpRequest (
HttpRequest . newBuilder ()
. setBody ( ByteString . copyFrom ( payload , Charset . defaultCharset ()))
. setUrl ( url )
. setHttpMethod ( HttpMethod . POST )
. build ());
// Send create task request.
Task task = client . createTask ( queuePath , taskBuilder . build ());
System . out . println ( "Task created: " + task . getName ());
}
}
}
Note the pom.xml file:
< ? xml version = ' 1.0 ' encoding = ' UTF - 8 ' ? >
< project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" >
< modelVersion>4 .0.0 < / modelVersion >
< groupId>com . example . tasks < / groupId >
< artifactId>cloudtasks - snippets < / artifactId >
< packaging>jar < / packaging >
< name>Google Cloud Tasks Snippets < / name >
< !--
The parent pom defines common style checks and testing strategies for our samples .
Removing or replacing it should not affect the execution of the samples in anyway .
-- >
< parent >
< groupId>com . google . cloud . samples < / groupId >
< artifactId>shared - configuration < / artifactId >
< version>1 .2.0 < / version >
< / parent >
< properties >
< maven . compiler . target>1 .8 < / maven . compiler . target >
< maven . compiler . source>1 .8 < / maven . compiler . source >
< project . build . sourceEncoding>UTF - 8 < / project . build . sourceEncoding >
< / properties >
< dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>libraries - bom < / artifactId >
< version>26 .32.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - tasks < / artifactId >
< / dependency >
< dependency >
< groupId>junit < / groupId >
< artifactId>junit < / artifactId >
< version>4 .13.2 < / version >
< scope>test < / scope >
< / dependency >
< dependency >
< groupId>com . google . truth < / groupId >
< artifactId>truth < / artifactId >
< version>1 .4.0 < / version >
< scope>test < / scope >
< / dependency >
< / dependencies >
< / project >
Node.js
// Imports the Google Cloud Tasks library.
const { CloudTasksClient } = require ( ' @google-cloud/tasks ' );
// Instantiates a client.
const client = new CloudTasksClient ();
async function createHttpTask () {
// TODO(developer): Uncomment these lines and replace with your values.
// const project = 'my-project-id';
// const queue = 'my-queue';
// const location = 'us-central1';
// const url = 'https://example.com/taskhandler';
// const payload = 'Hello, World!';
// const inSeconds = 180;
// Construct the fully qualified queue name.
const parent = client . queuePath ( project , location , queue );
const task = {
httpRequest : {
headers : {
'Content-Type' : 'text/plain' , // Set content type to ensure compatibility your application's request parsing
},
httpMethod : 'POST' ,
url ,
},
};
if ( payload ) {
task . httpRequest . body = Buffer . from ( payload ). toString ( 'base64' );
}
if ( inSeconds ) {
// The time when the task is scheduled to be attempted.
task . scheduleTime = {
seconds : parseInt ( inSeconds ) + Date . now () / 1000 ,
};
}
// Send create task request.
console . log ( 'Sending task:' );
console . log ( task );
const request = { parent : parent , task : task };
const [ response ] = await client . createTask ( request );
console . log ( `Created task ${ response . name } ` );
}
createHttpTask ();
Note the package.json file:
{
"name" : "appengine-cloudtasks" ,
"description" : "Google App Engine Cloud Tasks example." ,
"license" : "Apache-2.0" ,
"author" : "Google Inc." ,
"private" : true ,
"engines" : {
"node" : ">=16.0.0"
},
"files" : [
"*.js"
],
"scripts" : {
"test" : "c8 mocha -p -j 2 --timeout 30000" ,
"start" : "node server.js"
},
"dependencies" : {
"@google-cloud/tasks" : "^5.0.0" ,
"express" : "^4.16.3"
},
"devDependencies" : {
"c8" : "^10.0.0" ,
"chai" : "^4.5.0" ,
"mocha" : "^10.0.0" ,
"uuid" : "^10.0.0"
}
}
PHP
use Google\Cloud\Tasks\V2\Client\CloudTasksClient;
use Google\Cloud\Tasks\V2\CreateTaskRequest;
use Google\Cloud\Tasks\V2\HttpMethod;
use Google\Cloud\Tasks\V2\HttpRequest;
use Google\Cloud\Tasks\V2\Task;
/** Uncomment and populate these variables in your code */
// $projectId = 'The Google project ID';
// $locationId = 'The Location ID';
// $queueId = 'The Cloud Tasks Queue ID';
// $url = 'The full url path that the task request will be sent to.'
// $payload = 'The payload your task should carry to the task handler. Optional';
// Instantiate the client and queue name.
$client = new CloudTasksClient();
$queueName = $client->queueName($projectId, $locationId, $queueId);
// Create an Http Request Object.
$httpRequest = new HttpRequest();
// The full url path that the task request will be sent to.
$httpRequest->setUrl($url);
// POST is the default HTTP method, but any HTTP method can be used.
$httpRequest->setHttpMethod(HttpMethod::POST);
// Setting a body value is only compatible with HTTP POST and PUT requests.
if (!empty($payload)) {
$httpRequest->setBody($payload);
}
// Create a Cloud Task object.
$task = new Task();
$task->setHttpRequest($httpRequest);
// Send request and print the task name.
$request = (new CreateTaskRequest())
->setParent($queueName)
->setTask($task);
$response = $client->createTask($request);
printf('Created task %s' . PHP_EOL, $response->getName());
Note the composer.json file:
{
"require" : {
"google/cloud-tasks" : "^2.0"
}
}
Python
import datetime
import json
from typing import Dict , Optional
from google.cloud import tasks_v2
from google.protobuf import duration_pb2 , timestamp_pb2
def create_http_task (
project : str ,
location : str ,
queue : str ,
url : str ,
json_payload : Dict ,
scheduled_seconds_from_now : Optional [ int ] = None ,
task_id : Optional [ str ] = None ,
deadline_in_seconds : Optional [ int ] = None ,
) - > tasks_v2 . Task :
"""Create an HTTP POST task with a JSON payload.
Args:
project: The project ID where the queue is located.
location: The location where the queue is located.
queue: The ID of the queue to add the task to.
url: The target URL of the task.
json_payload: The JSON payload to send.
scheduled_seconds_from_now: Seconds from now to schedule the task for.
task_id: ID to use for the newly created task.
deadline_in_seconds: The deadline in seconds for task.
Returns:
The newly created task.
"""
# Create a client.
client = tasks_v2 . CloudTasksClient ()
# Construct the task.
task = tasks_v2 . Task (
http_request = tasks_v2 . HttpRequest (
http_method = tasks_v2 . HttpMethod . POST ,
url = url ,
headers = { "Content-type" : "application/json" },
body = json . dumps ( json_payload ) . encode (),
),
name = (
client . task_path ( project , location , queue , task_id )
if task_id is not None
else None
),
)
# Convert "seconds from now" to an absolute Protobuf Timestamp
if scheduled_seconds_from_now is not None :
timestamp = timestamp_pb2 . Timestamp ()
timestamp . FromDatetime (
datetime . datetime . utcnow ()
+ datetime . timedelta ( seconds = scheduled_seconds_from_now )
)
task . schedule_time = timestamp
# Convert "deadline in seconds" to a Protobuf Duration
if deadline_in_seconds is not None :
duration = duration_pb2 . Duration ()
duration . FromSeconds ( deadline_in_seconds )
task . dispatch_deadline = duration
# Use the client to send a CreateTaskRequest.
return client . create_task (
tasks_v2 . CreateTaskRequest (
# The queue to add the task to
parent = client . queue_path ( project , location , queue ),
# The task itself
task = task ,
)
)
Note the requirements.txt file:
google - cloud - tasks == 2.18.0
Ruby
require "google/cloud/tasks"
# Create a Task with an HTTP Target
#
# @param [String] project_id Your Google Cloud Project ID.
# @param [String] location_id Your Google Cloud Project Location ID.
# @param [String] queue_id Your Google Cloud Tasks Queue ID.
# @param [String] url The full path to sent the task request to.
# @param [String] payload The request body of your task.
# @param [Integer] seconds The delay, in seconds, to process your task.
def create_http_task project_id , location_id , queue_id , url , payload : nil , seconds : nil
# Instantiates a client.
client = Google :: Cloud :: Tasks . cloud_tasks
# Construct the fully qualified queue name.
parent = client . queue_path project : project_id , location : location_id , queue : queue_id
# Construct task.
task = {
http_request : {
http_method : "POST" ,
url : url
}
}
# Add payload to task body.
task [ :http_request ][ :body ] = payload if payload
# Add scheduled time to task.
if seconds
timestamp = Google :: Protobuf :: Timestamp . new
timestamp . seconds = Time . now . to_i + seconds . to_i
task [ :schedule_time ] = timestamp
end
# Send create task request.
puts "Sending task #{ task } "
response = client . create_task parent : parent , task : task
puts "Created task #{ response . name } " if response . name
end
Create a task using the BufferTask method
This section discusses creating a task by sending an HTTP request. The method
you use is called BufferTask .
Limitations
The BufferTask method is subject to the following limitations:
Client libraries: The BufferTask method is not supported in client
libraries.
RPC API: The BufferTask method is not supported in the RPC API.
Task-level routing: This method does not support task-level routing. Since
there is nowhere to add routing information when creating a task this way, you
must use queue-level routing (otherwise the task has no routing information).
If your queue does not already use queue-level routing, see
Configure queue-level routing for HTTP tasks .
Call the BufferTask method
The following examples show how to create a task by sending an HTTP POST
request to the Cloud Tasks API
buffer endpoint .
curl
The following code snippet shows an example of task creation using with the
BufferTask method using curl :
curl -X HTTP_METHOD \
"https://cloudtasks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /queues/ QUEUE_ID /tasks:buffer" \
Replace the following:
HTTP_METHOD : the HTTP method for your request; for
example GET or POST .
PROJECT_ID : the ID of your Google Cloud project.
You can get this by running the following in your terminal:
gcloud config get-value project
LOCATION : the location of your queue.
QUEUE_ID : the ID of your queue.
Python
from google.cloud import tasks_v2beta3 as tasks
import requests
def send_task_to_http_queue (
queue : tasks . Queue , body : str = "" , token : str = "" , headers : dict = {}
) - > int :
"""Send a task to an HTTP queue.
Args:
queue: The queue to send task to.
body: The body of the task.
auth_token: An authorization token for the queue.
headers: Headers to set on the task.
Returns:
The matching queue, or None if it doesn't exist.
"""
# Use application default credentials if not supplied in a header
if token :
headers [ "Authorization" ] = f "Bearer { token } "
endpoint = f "https://cloudtasks.googleapis.com/v2beta3/ { queue . name } /tasks:buffer"
response = requests . post ( endpoint , body , headers = headers )
return response . status_code
Set up a service account for HTTP target handler authentication
Cloud Tasks can call HTTP target handlers that require
authentication if you have a service account
with the appropriate credentials to access the handler.
You can use your current service account if you grant it the appropriate roles.
These instructions cover creating a new service account specifically for this
function. The existing or new service account used for Cloud Tasks
authentication must be in the same project as your Cloud Tasks
queues.
In the Google Cloud console, go to the Service Accounts page.
Go to Service Accounts
If necessary, select the appropriate project.
Click add
Create service account .
Give your service account a name. Note the related email address that is
generated in the console. You will search for this email in a subsequent step.
To copy the email, click Copy to clipboard
content_copy .
You can also add a description of what the account is for.
Click Create and continue .
In the Select a role list, search for and select
Cloud Tasks Enqueuer (Beta) . This role gives the service
account permission to add tasks to the queue.
If you are using a Google Cloud handler, click + Add another role
to grant the service account the role associated with accessing the service
where your handler is running. Each service within Google Cloud
requires a different role. For example, to access a handler on
Cloud Run, grant the Cloud Run Invoker role.
To finish creating the service account, click Done .
To allow Cloud Tasks to create authentication tokens using the
service account you just created, you must grant the
Service Account User
( roles/iam.serviceAccountUser ) role to the Cloud Tasks
primary service agent on the service account you
just created.
In the Google Cloud console, go to the Service accounts page.
Go to Service accounts
In the row for the service account you just created, select the checkbox,
and then click
person_add
Manage access .
In the Manage Access pane, click
person_add
Add principal .
In the New principals list, search for and select the
Cloud Tasks service agent which will have an email address in
the format
service- PROJECT_NUMBER @gcp-sa-cloudtasks.iam.gserviceaccount.com .
In the Select a role list, search for and select the
Service Account User role.
Click Save .
Note: Cloud Tasks must have a primary service agent with the
Cloud Tasks Service Agent role granted. This allows
Cloud Tasks to generate header tokens based on the
credentials associated with the Cloud Tasks service account and
authenticate with its handler. The Cloud Tasks service agent is
automatically created with this role granted when you enable the
Cloud Tasks API, unless you enabled it prior to March 19, 2019, in which
case you must add the role manually .
Use HTTP target tasks with authentication tokens
To authenticate between Cloud Tasks and an HTTP target
handler that requires such authentication, Cloud Tasks creates
a header token. This token is based on the credentials in the
Cloud Tasks Enqueuer service account, identified by its email address. The
service account used for authentication must be part of the same
project where your Cloud Tasks queue resides. The request, with the
header token, is sent from the queue to the handler by HTTPS. You can use either
an ID token
or an access token .
ID tokens should generally be used for any handler running on Google Cloud,
for example, on Cloud Run functions or Cloud Run. The main exception is
for Google APIs hosted on *.googleapis.com : these APIs expect an access token.
You can configure authentication at the queue level, or at the task level. To
configure authentication at the queue level, see
Limiting access to single queues .
If authentication is configured at the queue level, this configuration overrides
configuration at the task level. To configure authentication at the task level,
specify either an
ID (OIDC) token
or access (OAuth) token
in the task
itself.
CreateTask method
The following examples use the CreateTask method with the
Cloud Tasks client libraries to create a task that also
includes the creation of a header token. ID tokens are used in the examples.
To use an access token, replace the OIDC parameter with the language appropriate
OAuth parameter in constructing the request.
Go
import (
"context"
"fmt"
cloudtasks "cloud.google.com/go/cloudtasks/apiv2"
taskspb "cloud.google.com/go/cloudtasks/apiv2/cloudtaskspb"
)
// createHTTPTaskWithToken constructs a task with a authorization token
// and HTTP target then adds it to a Queue.
func createHTTPTaskWithToken ( projectID , locationID , queueID , url , email , message string ) ( * taskspb . Task , error ) {
// Create a new Cloud Tasks client instance.
// See https://godoc.org/cloud.google.com/go/cloudtasks/apiv2
ctx := context . Background ()
client , err := cloudtasks . NewClient ( ctx )
if err != nil {
return nil , fmt . Errorf ( "NewClient: %w" , err )
}
defer client . Close ()
// Build the Task queue path.
queuePath := fmt . Sprintf ( "projects/%s/locations/%s/queues/%s" , projectID , locationID , queueID )
// Build the Task payload.
// https://godoc.org/google.golang.org/genproto/googleapis/cloud/tasks/v2#CreateTaskRequest
req := & taskspb . CreateTaskRequest {
Parent : queuePath ,
Task : & taskspb . Task {
// https://godoc.org/google.golang.org/genproto/googleapis/cloud/tasks/v2#HttpRequest
MessageType : & taskspb . Task_HttpRequest {
HttpRequest : & taskspb . HttpRequest {
HttpMethod : taskspb . HttpMethod_POST ,
Url : url ,
AuthorizationHeader : & taskspb . HttpRequest_OidcToken {
OidcToken : & taskspb . OidcToken {
ServiceAccountEmail : email ,
},
},
},
},
},
}
// Add a payload message if one is present.
req . Task . GetHttpRequest (). Body = [] byte ( message )
createdTask , err := client . CreateTask ( ctx , req )
if err != nil {
return nil , fmt . Errorf ( "cloudtasks.CreateTask: %w" , err )
}
return createdTask , nil
}
Java
import com.google.cloud.tasks.v2. CloudTasksClient ;
import com.google.cloud.tasks.v2. HttpMethod ;
import com.google.cloud.tasks.v2. HttpRequest ;
import com.google.cloud.tasks.v2. OidcToken ;
import com.google.cloud.tasks.v2. QueueName ;
import com.google.cloud.tasks.v2. Task ;
import com.google.protobuf. ByteString ;
import java.io.IOException ;
import java.nio.charset.Charset ;
public class CreateHttpTaskWithToken {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String locationId = "us-central1" ;
String queueId = "my-queue" ;
String serviceAccountEmail =
"java-docs-samples-testing@java-docs-samples-testing.iam.gserviceaccount.com" ;
createTask ( projectId , locationId , queueId , serviceAccountEmail );
}
// Create a task with a HTTP target and authorization token using the Cloud Tasks client.
public static void createTask (
String projectId , String locationId , String queueId , String serviceAccountEmail )
throws IOException {
// Instantiates a client.
try ( CloudTasksClient client = CloudTasksClient . create ()) {
String url =
"https://example.com/taskhandler" ; // The full url path that the request will be sent to
String payload = "Hello, World!" ; // The task HTTP request body
// Construct the fully qualified queue name.
String queuePath = QueueName . of ( projectId , locationId , queueId ). toString ();
// Add your service account email to construct the OIDC token.
// in order to add an authentication header to the request.
OidcToken . Builder oidcTokenBuilder =
OidcToken . newBuilder (). setServiceAccountEmail ( serviceAccountEmail );
// Construct the task body.
Task . Builder taskBuilder =
Task . newBuilder ()
. setHttpRequest (
HttpRequest . newBuilder ()
. setBody ( ByteString . copyFrom ( payload , Charset . defaultCharset ()))
. setHttpMethod ( HttpMethod . POST )
. setUrl ( url )
. setOidcToken ( oidcTokenBuilder )
. build ());
// Send create task request.
Task task = client . createTask ( queuePath , taskBuilder . build ());
System . out . println ( "Task created: " + task . getName ());
}
}
}
Note the pom.xml file:
< ? xml version = ' 1.0 ' encoding = ' UTF - 8 ' ? >
< project xmlns = "http://maven.apache.org/POM/4.0.0" xmlns : xsi = "http://www.w3.org/2001/XMLSchema-instance" xsi : schemaLocation = "http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd" >
< modelVersion>4 .0.0 < / modelVersion >
< groupId>com . example . tasks < / groupId >
< artifactId>cloudtasks - snippets < / artifactId >
< packaging>jar < / packaging >
< name>Google Cloud Tasks Snippets < / name >
< !--
The parent pom defines common style checks and testing strategies for our samples .
Removing or replacing it should not affect the execution of the samples in anyway .
-- >
< parent >
< groupId>com . google . cloud . samples < / groupId >
< artifactId>shared - configuration < / artifactId >
< version>1 .2.0 < / version >
< / parent >
< properties >
< maven . compiler . target>1 .8 < / maven . compiler . target >
< maven . compiler . source>1 .8 < / maven . compiler . source >
< project . build . sourceEncoding>UTF - 8 < / project . build . sourceEncoding >
< / properties >
< dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>libraries - bom < / artifactId >
< version>26 .32.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - tasks < / artifactId >
< / dependency >
< dependency >
< groupId>junit < / groupId >
< artifactId>junit < / artifactId >
< version>4 .13.2 < / version >
< scope>test < / scope >
< / dependency >
< dependency >
< groupId>com . google . truth < / groupId >
< artifactId>truth < / artifactId >
< version>1 .4.0 < / version >
< scope>test < / scope >
< / dependency >
< / dependencies >
< / project >
Node.js
// Imports the Google Cloud Tasks library.
const { CloudTasksClient } = require ( ' @google-cloud/tasks ' );
// Instantiates a client.
const client = new CloudTasksClient ();
async function createHttpTaskWithToken () {
// TODO(developer): Uncomment these lines and replace with your values.
// const project = 'my-project-id';
// const queue = 'my-queue';
// const location = 'us-central1';
// const url = 'https://example.com/taskhandler';
// const serviceAccountEmail = 'client@<project-id>.iam.gserviceaccount.com';
// const payload = 'Hello, World!';
// Construct the fully qualified queue name.
const parent = client . queuePath ( project , location , queue );
const task = {
httpRequest : {
headers : {
'Content-Type' : 'text/plain' , // Set content type to ensure compatibility your application's request parsing
},
httpMethod : 'POST' ,
url ,
oidcToken : {
serviceAccountEmail ,
},
},
};
if ( payload ) {
task . httpRequest . body = Buffer . from ( payload ). toString ( 'base64' );
}
console . log ( 'Sending task:' );
console . log ( task );
// Send create task request.
const request = { parent : parent , task : task };
const [ response ] = await client . createTask ( request );
const name = response . name ;
console . log ( `Created task ${ name } ` );
}
createHttpTaskWithToken ();
Note the package.json file:
{
"name" : "appengine-cloudtasks" ,
"description" : "Google App Engine Cloud Tasks example." ,
"license" : "Apache-2.0" ,
"author" : "Google Inc." ,
"private" : true ,
"engines" : {
"node" : ">=16.0.0"
},
"files" : [
"*.js"
],
"scripts" : {
"test" : "c8 mocha -p -j 2 --timeout 30000" ,
"start" : "node server.js"
},
"dependencies" : {
"@google-cloud/tasks" : "^5.0.0" ,
"express" : "^4.16.3"
},
"devDependencies" : {
"c8" : "^10.0.0" ,
"chai" : "^4.5.0" ,
"mocha" : "^10.0.0" ,
"uuid" : "^10.0.0"
}
}
Python
from typing import Optional
from google.cloud import tasks_v2
def create_http_task_with_token (
project : str ,
location : str ,
queue : str ,
url : str ,
payload : bytes ,
service_account_email : str ,
audience : Optional [ str ] = None ,
) - > tasks_v2 . Task :
"""Create an HTTP POST task with an OIDC token and an arbitrary payload.
Args:
project: The project ID where the queue is located.
location: The location where the queue is located.
queue: The ID of the queue to add the task to.
url: The target URL of the task.
payload: The payload to send.
service_account_email: The service account to use for generating the OIDC token.
audience: Audience to use when generating the OIDC token.
Returns:
The newly created task.
"""
# Create a client.
client = tasks_v2 . CloudTasksClient ()
# Construct the request body.
task = tasks_v2 . Task (
http_request = tasks_v2 . HttpRequest (
http_method = tasks_v2 . HttpMethod . POST ,
url = url ,
oidc_token = tasks_v2 . OidcToken (
service_account_email = service_account_email ,
audience = audience ,
),
body = payload ,
),
)
# Use the client to build and send the task.
return client . create_task (
tasks_v2 . CreateTaskRequest (
parent = client . queue_path ( project , location , queue ),
task = task ,
)
)
Note the requirements.txt file:
google - cloud - tasks == 2.18.0
BufferTask method
The following examples use application default credentials to authenticate when
using the BufferTask method for creating a task.
curl
curl -X HTTP_METHOD \
"https://cloudtasks.googleapis.com/v2/projects/ PROJECT_ID /locations/ LOCATION /queues/ QUEUE_ID /tasks:buffer" \
-H "Authorization: Bearer ACCESS_TOKEN "
Replace the following:
HTTP_METHOD : the HTTP method for your request; for
example GET or POST .
PROJECT_ID : the ID of your Google Cloud project.
You can get this by running the following in your terminal:
gcloud config get-value project
LOCATION : the location of your queue.
QUEUE_ID : the ID of your queue.
ACCESS_TOKEN : your access token. You can get this by
running the following in your terminal:
gcloud auth application-default login
gcloud auth application-default print-access-token
Python
In the following code sample, provide your authentication token value.
from google.cloud import tasks_v2beta3 as tasks
import requests
def send_task_to_http_queue (
queue : tasks . Queue , body : str = "" , token : str = "" , headers : dict = {}
) - > int :
"""Send a task to an HTTP queue.
Args:
queue: The queue to send task to.
body: The body of the task.
auth_token: An authorization token for the queue.
headers: Headers to set on the task.
Returns:
The matching queue, or None if it doesn't exist.
"""
# Use application default credentials if not supplied in a header
if token :
headers [ "Authorization" ] = f "Bearer { token } "
endpoint = f "https://cloudtasks.googleapis.com/v2beta3/ { queue . name } /tasks:buffer"
response = requests . post ( endpoint , body , headers = headers )
return response . status_code
Provide your own HTTP target task handlers
HTTP Target task handlers are very similar to
App Engine task handlers ,
with the following exceptions:
Timeouts : for all HTTP target task handlers the default timeout is 10
minutes, with a maximum of 30 minutes.
Authentication logic : if you are writing your own code in the targeted
service to validate the token, you should use an ID token. For more
information on what this entails, see
OpenID Connect ,
particularly
Validating an ID token .
Headers : an HTTP target request has headers set by the queue, which contain
task-specific information your handler can use. These are similar to, but not
identical with, the headers set on App Engine task requests .
These headers provide information only . They should not be used as
sources of identity.
If these headers were present in an external user request to your app, they
are replaced by the internal ones. The sole exception is for requests from
logged-in administrators of the application, who are allowed to set headers
for testing purposes.
HTTP target requests always contain the following headers:
Header
Description
X-CloudTasks-QueueName
The name of the queue.
X-CloudTasks-TaskName
The "short" name of the task, or, if no name was specified at creation, a unique system-generated id. This is the my-task-id value in the complete task name, ie, task_name = projects/my-project-id/locations/my-location/queues/my-queue-id/tasks/my-task-id .
X-CloudTasks-TaskRetryCount
The number of times this task has been retried. For the first attempt, this value is 0 . This number includes attempts where the task failed due to 5XX error codes and never reached the execution phase.
X-CloudTasks-TaskExecutionCount
The total number of times that the task has received a response from the handler. Since Cloud Tasks deletes the task once a successful response has been received, all previous handler responses were failures. This number does not include failures due to 5XX error codes.
X-CloudTasks-TaskETA
The schedule time of the task, specified in seconds since January 1st 1970.
In addition, requests from Cloud Tasks might contain the
following headers:
Header
Description
X-CloudTasks-TaskPreviousResponse
The HTTP response code from the previous retry.
X-CloudTasks-TaskRetryReason
The reason for retrying the task.
Manually add the Cloud Tasks Service Agent role
You can manually add the
Cloud Tasks Service Agent
( roles/cloudtasks.serviceAgent ) role to your Cloud Tasks service
account which is the
primary service agent for
Cloud Tasks.
This is necessary only if you enabled the Cloud Tasks API prior to
March 19, 2019.
Console
Find and copy the project number for your Google Cloud project on the
Welcome
page of the Google Cloud console.
In the Google Cloud console, go to the IAM page.
Go to IAM
Click Grant access . The Grant access pane opens.
In the Add principals section, add an email address in this format:
service- PROJECT_NUMBER @gcp-sa-cloudtasks.iam.gserviceaccount.com
Replace PROJECT_NUMBER with your
Google Cloud project number.
In the Assign roles section, search for and select
Cloud Tasks Service Agent .
Click Save .
gcloud
Find your project number:
gcloud projects describe PROJECT_ID --format = 'table(projectNumber)'
Replace PROJECT_ID with your project ID.
Copy down the number.
Grant the Cloud Tasks service account the Cloud Tasks Service Agent role, using the project number you copied down:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member serviceAccount:service- PROJECT_NUMBER @gcp-sa-cloudtasks.iam.gserviceaccount.com \
--role roles/cloudtasks.serviceAgent
Replace the following:
PROJECT_ID : your Google Cloud project
ID.
PROJECT_NUMBER : your Google Cloud
project number.
Note: Adding the service account can take a few minutes to complete.
Other configurations
There are a number of task attributes that you can configure. For a full
list, see the
task resource definition .
For example, you can customize the following attributes:
Naming: If you choose to specify a name for the task,
Cloud Tasks can use that name to ensure task deduplication,
although the processing necessary for this can add increased latency.
Scheduling: You can schedule a task at a future time. This is supported
for CreateTask only and not supported for BufferTask .
You can also configure queue attributes such as routing overrides, rate limits,
and retry parameters. These configurations are applied to all tasks in a queue.
For more information, see
Configure Cloud Tasks queues .
What's next
Learn more about HTTP target tasks in the RPC API reference .
Learn more about HTTP target tasks in the REST API reference .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
