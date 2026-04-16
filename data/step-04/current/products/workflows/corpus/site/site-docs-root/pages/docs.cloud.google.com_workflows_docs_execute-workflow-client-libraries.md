---
title: "Quickstart: Execute a workflow using the Cloud Client Libraries \_|\_ Workflows\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/execute-workflow-client-libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/execute-workflow-client-libraries
  title: "Quickstart: Execute a workflow using the Cloud Client Libraries \_|\_ Workflows\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Execute a workflow using the Cloud Client Libraries
This quickstart shows you how to
execute a workflow and view the execution
results using the Cloud Client Libraries.
For more information about installing the Cloud Client Libraries and setting
up your development environment, see the
Workflows client libraries overview .
You can complete the following steps by using the Google Cloud CLI in either your
terminal or Cloud Shell.
Before you begin
Security constraints defined by your organization might prevent you from completing the
following steps. For troubleshooting information, see
Develop applications in a constrained Google Cloud environment .
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Workflows API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable workflows.googleapis.com
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
If you're using an existing project for this guide,
verify that you have the
permissions required to complete this guide . If you created a new project,
then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Workflows API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable workflows.googleapis.com
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant roles .
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
Grant the roles/logging.logWriter IAM
role to the service account:
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = roles/logging.logWriter
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
To learn more about service account roles and permissions, see
Grant a workflow permission to access
Google Cloud resources .
If required, download and install
the Git source code management tool.
Required roles
To get the permissions that
you need to complete this quickstart,
ask your administrator to grant you the
following IAM roles on your project:
Service Account User ( roles/iam.serviceAccountUser )
Workflows Admin ( roles/workflows.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Deploy a sample workflow
After defining a workflow, you deploy it to make it available for execution.
The deploy step also validates that the source file can be executed.
The following workflow sends a request to a public API and then returns the
API's response.
Create a text file with the filename myFirstWorkflow.yaml with
the following content:
# This workflow accepts an optional "searchTerm" argument for the Wikipedia API.
# If no input arguments are provided or "searchTerm" is absent,
# it will fetch the day of the week in Amsterdam and use it as the search term.
main :
params : [ input ]
steps :
- validateSearchTermAndRedirectToReadWikipedia :
switch :
- condition : '${map.get(input, "searchTerm") != null}'
assign :
- searchTerm : '${input.searchTerm}'
next : readWikipedia
- getCurrentTime :
call : http.get
args :
url : https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam
result : currentTime
- setFromCallResult :
assign :
- searchTerm : '${currentTime.body.dayOfWeek}'
- readWikipedia :
call : http.get
args :
url : 'https://en.wikipedia.org/w/api.php'
query :
action : opensearch
search : '${searchTerm}'
result : wikiResult
- returnOutput :
return : '${wikiResult.body[1]}'
After creating the workflow, you can deploy it, but don't execute the
workflow:
gcloud workflows deploy myFirstWorkflow \
--source = myFirstWorkflow.yaml \
--service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com \
--location = CLOUD_REGION
Replace CLOUD_REGION with a
supported location for the workflow. The default
region used in the code samples is us-central1 .
Get the sample code
You can clone the sample code from GitHub.
Clone the sample app repository to your local machine:
C#
git clone https://github.com/GoogleCloudPlatform/dotnet-docs-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
Go
git clone https://github.com/GoogleCloudPlatform/golang-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
Java
git clone https://github.com/GoogleCloudPlatform/java-docs-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
Node.js
git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
Python
git clone https://github.com/GoogleCloudPlatform/python-docs-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
Change to the directory that contains the Workflows sample
code:
C#
cd dotnet-docs-samples/workflows/api/Workflow.Samples/
Go
cd golang-samples/workflows/executions/
Java
cd java-docs-samples/workflows/cloud-client/
Node.js
cd nodejs-docs-samples/workflows/quickstart/
Python
cd python-docs-samples/workflows/cloud-client/
Take a look at the sample code. Each sample app does the following:
Sets up the Cloud Client Libraries for Workflows.
Executes a workflow.
Polls the workflow's execution (using exponential backoff) until the
execution terminates.
Prints the execution results.
C#
using Google . Cloud . Workflows . Common . V1 ;
using Google . Cloud . Workflows . Executions . V1 ;
using System ;
using System . Threading ;
using System . Threading . Tasks ;
public class ExecuteWorkflowSample
{
/// <summary>
/// Execute a workflow and return the execution operation.
/// </summary>
/// <param name="projectID">Your Google Cloud Project ID.</param>
/// <param name="locationID">The region where your workflow is located.</param>
/// <param name="workflowID">Your Workflow ID.</param>
/// <returns>
/// An Execute object representing the completed workflow execution.
/// </returns>
public async Task<Execution> ExecuteWorkflow (
string projectId = "YOUR-PROJECT-ID" ,
string locationID = "YOUR-LOCATION-ID" ,
string workflowID = "YOUR-WORKFLOW-ID" )
{
// Initialize the client.
ExecutionsClient client = await ExecutionsClient . CreateAsync ();
// Build the parent location path.
WorkflowName parent = new WorkflowName ( projectId , locationID , workflowID );
// Create an execution request.
CreateExecutionRequest createExecutionRequest = new CreateExecutionRequest
{
ParentAsWorkflowName = parent ,
};
// Execute the operation.
Execution execution = await client . CreateExecutionAsync ( createExecutionRequest );
Console . WriteLine ( "- Execution started..." );
TimeSpan backoffDelay = TimeSpan . FromSeconds ( 1 );
TimeSpan maxBackoffDelay = TimeSpan . FromSeconds ( 16 );
// Keep polling the state until the execution finishes, using exponential backoff.
while ( execution . State == Execution . Types . State . Active )
{
await Task . Delay ( backoffDelay );
// Implement exponential backoff by doubling the delay, but limiting it to a practical duration.
backoffDelay = ( backoffDelay < maxBackoffDelay ) ? backoffDelay * 2 : maxBackoffDelay ;
execution = await client . GetExecutionAsync ( execution . Name );
}
// Print results.
Console . WriteLine ( $ "Execution finished with state: {execution.State}" );
Console . WriteLine ( $ "Execution results: {execution.Result}" );
// Return the fetched execution.
return execution ;
}
}
Go
import (
"context"
"fmt"
"io"
"time"
workflowexecutions "google.golang.org/api/workflowexecutions/v1"
)
// Execute a workflow and print the execution results.
//
// For more information about Workflows see:
// https://cloud.google.com/workflows/docs/overview
func executeWorkflow ( w io . Writer , projectID , workflowID , locationID string ) error {
// TODO(developer): Uncomment and update the following lines:
// projectID := "YOUR_PROJECT_ID"
// workflowID := "YOUR_WORKFLOW_ID"
// locationID := "YOUR_LOCATION_ID"
ctx := context . Background ()
// Construct the location path.
parent := fmt . Sprintf ( "projects/%s/locations/%s/workflows/%s" , projectID , locationID , workflowID )
// Create execution client.
client , err := workflowexecutions . NewService ( ctx )
if err != nil {
return fmt . Errorf ( "workflowexecutions.NewService error: %w" , err )
}
// Get execution service.
service := client . Projects . Locations . Workflows . Executions
// Build and run the new workflow execution.
res , err := service . Create ( parent , & workflowexecutions . Execution {}). Do ()
if err != nil {
return fmt . Errorf ( "service.Create.Do error: %w" , err )
}
fmt . Fprintln ( w , "- Execution started..." )
// Set initial value for backoff delay in one second.
backoffDelay := time . Second
for res . State == "ACTIVE" {
time . Sleep ( backoffDelay )
// Request the updated state for the execution.
getReq := service . Get ( res . Name )
res , err = getReq . Do ()
if err != nil {
return fmt . Errorf ( "getReq error: %w" , err )
}
// Double the delay to provide exponential backoff (capped at 16 seconds).
if backoffDelay < time . Second * 16 {
backoffDelay *= 2
}
}
fmt . Fprintf ( w , "Execution finished with state: %s\n" , res . State )
fmt . Fprintf ( w , "Execution results: %s\n" , res . Result )
return nil
}
Java
// Imports the Google Cloud client library
import com.google.cloud.workflows.executions.v1. CreateExecutionRequest ;
import com.google.cloud.workflows.executions.v1. Execution ;
import com.google.cloud.workflows.executions.v1. ExecutionsClient ;
import com.google.cloud.workflows.executions.v1. WorkflowName ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
public class WorkflowsQuickstart {
private static final String PROJECT = System . getenv ( "GOOGLE_CLOUD_PROJECT" );
private static final String LOCATION = System . getenv (). getOrDefault ( "LOCATION" , "us-central1" );
private static final String WORKFLOW =
System . getenv (). getOrDefault ( "WORKFLOW" , "myFirstWorkflow" );
public static void main ( String ... args )
throws IOException , InterruptedException , ExecutionException {
if ( PROJECT == null ) {
throw new IllegalArgumentException (
"Environment variable 'GOOGLE_CLOUD_PROJECT' is required to run this quickstart." );
}
workflowsQuickstart ( PROJECT , LOCATION , WORKFLOW );
}
private static volatile boolean finished ;
public static void workflowsQuickstart ( String projectId , String location , String workflow )
throws IOException , InterruptedException , ExecutionException {
// Initialize client that will be used to send requests. This client only needs
// to be created once, and can be reused for multiple requests. After completing all of your
// requests, call the "close" method on the client to safely clean up any remaining background
// resources.
try ( ExecutionsClient executionsClient = ExecutionsClient . create ()) {
// Construct the fully qualified location path.
WorkflowName parent = WorkflowName . of ( projectId , location , workflow );
// Creates the execution object.
CreateExecutionRequest request =
CreateExecutionRequest . newBuilder ()
. setParent ( parent . toString ())
. setExecution ( Execution . newBuilder (). build ())
. build ();
Execution response = executionsClient . createExecution ( request );
String executionName = response . getName ();
System . out . printf ( "Created execution: %s%n" , executionName );
long backoffTime = 0 ;
long backoffDelay = 1_000 ; // Start wait with delay of 1,000 ms
final long backoffTimeout = 10 * 60 * 1_000 ; // Time out at 10 minutes
System . out . println ( "Poll for results..." );
// Wait for execution to finish, then print results.
while ( ! finished && backoffTime < backoffTimeout ) {
Execution execution = executionsClient . getExecution ( executionName );
finished = execution . getState () != Execution . State . ACTIVE ;
// If we haven't seen the results yet, wait.
if ( ! finished ) {
System . out . println ( "- Waiting for results" );
Thread . sleep ( backoffDelay );
backoffTime += backoffDelay ;
backoffDelay *= 2 ; // Double the delay to provide exponential backoff.
} else {
System . out . println ( "Execution finished with state: " + execution . getState (). name ());
System . out . println ( "Execution results: " + execution . getResult ());
}
}
}
}
}
Node.js
const { ExecutionsClient } = require ( ' @google-cloud/workflows ' );
const client = new ExecutionsClient ();
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// const projectId = 'my-project';
// const location = 'us-central1';
// const workflow = 'myFirstWorkflow';
// const searchTerm = '';
/**
* Executes a Workflow and waits for the results with exponential backoff.
* @param {string} projectId The Google Cloud Project containing the workflow
* @param {string} location The workflow location
* @param {string} workflow The workflow name
* @param {string} searchTerm Optional search term to pass to the Workflow as a runtime argument
*/
async function executeWorkflow ( projectId , location , workflow , searchTerm ) {
/**
* Sleeps the process N number of milliseconds.
* @param {Number} ms The number of milliseconds to sleep.
*/
function sleep ( ms ) {
return new Promise ( resolve = > {
setTimeout ( resolve , ms );
});
}
const runtimeArgs = searchTerm ? { searchTerm : searchTerm } : {};
// Execute workflow
try {
const createExecutionRes = await client . createExecution ({
parent : client . workflowPath ( projectId , location , workflow ),
execution : {
// Runtime arguments can be passed as a JSON string
argument : JSON . stringify ( runtimeArgs ),
},
});
const executionName = createExecutionRes [ 0 ]. name ;
console . log ( `Created execution: ${ executionName } ` );
// Wait for execution to finish, then print results.
let executionFinished = false ;
let backoffDelay = 1000 ; // Start wait with delay of 1,000 ms
console . log ( 'Poll every second for result...' );
while ( ! executionFinished ) {
const [ execution ] = await client . getExecution ({
name : executionName ,
});
executionFinished = execution . state !== 'ACTIVE' ;
// If we haven't seen the result yet, wait a second.
if ( ! executionFinished ) {
console . log ( '- Waiting for results...' );
await sleep ( backoffDelay );
backoffDelay *= 2 ; // Double the delay to provide exponential backoff.
} else {
console . log ( `Execution finished with state: ${ execution . state } ` );
console . log ( execution . result );
return execution . result ;
}
}
} catch ( e ) {
console . error ( `Error executing workflow: ${ e } ` );
}
}
executeWorkflow ( projectId , location , workflowName , searchTerm ). catch ( err = > {
console . error ( err . message );
process . exitCode = 1 ;
});
Python
import time
from google.cloud import workflows _v1
from google.cloud.workflows import executions_v1
from google.cloud.workflows.executions_v1.types import executions
# TODO(developer): Update and uncomment the following lines.
# project_id = "YOUR_PROJECT_ID"
# location = "YOUR_LOCATION" # For example: us-central1
# workflow_id = "YOUR_WORKFLOW_ID" # For example: myFirstWorkflow
# Initialize API clients.
execution_client = executions_v1 . ExecutionsClient ()
workflows_client = workflows_v1 . WorkflowsClient ()
# Construct the fully qualified location path.
parent = workflows_client . workflow_path ( project_id , location , workflow_id )
# Execute the workflow.
response = execution_client . create_execution ( request = { "parent" : parent })
print ( f "Created execution: { response . name } " )
# Wait for execution to finish, then print results.
execution_finished = False
backoff_delay = 1 # Start wait with delay of 1 second.
print ( "Poll for result..." )
# Keep polling the state until the execution finishes,
# using exponential backoff.
while not execution_finished :
execution = execution_client . get_execution (
request = { "name" : response . name }
)
execution_finished = execution . state != executions . Execution . State . ACTIVE
# If we haven't seen the result yet, keep waiting.
if not execution_finished :
print ( "- Waiting for results..." )
time . sleep ( backoff_delay )
# Double the delay to provide exponential backoff.
backoff_delay *= 2
else :
print ( f "Execution finished with state: { execution . state . name } " )
print ( f "Execution results: { execution . result } " )
Run the sample code
You can run the sample code and execute your workflow. Executing a workflow runs
the deployed workflow definition associated with the workflow.
To run the sample, first install dependencies:
C#
dotnet restore
Go
go mod download
Java
mvn compile
Node.js
npm install -D tsx
Python
pip3 install -r requirements.txt
Run the script:
C#
GOOGLE_CLOUD_PROJECT= PROJECT_ID LOCATION= CLOUD_REGION WORKFLOW= WORKFLOW_NAME dotnet run
Go
GOOGLE_CLOUD_PROJECT= PROJECT_ID LOCATION= CLOUD_REGION WORKFLOW= WORKFLOW_NAME go run .
Java
GOOGLE_CLOUD_PROJECT= PROJECT_ID LOCATION= CLOUD_REGION WORKFLOW= WORKFLOW_NAME mvn compile exec:java -Dexec.mainClass=com.example.workflows.WorkflowsQuickstart
Node.js
npx tsx index.js
Python
GOOGLE_CLOUD_PROJECT= PROJECT_ID LOCATION= CLOUD_REGION WORKFLOW= WORKFLOW_NAME python3 main.py
Replace the following:
PROJECT_ID : your Google Cloud project name
CLOUD_REGION : the location of your workflow (default: us-central1 )
WORKFLOW_NAME : your workflow name (default: myFirstWorkflow )
The output is similar to the following:
Execution finished with state: SUCCEEDED
Execution results: [ "Thursday" , "Thursday Night Football" , "Thursday (band)" , "Thursday Island" , "Thursday (album)" , "Thursday Next" , "Thursday at the Square" , "Thursday's Child (David Bowie song)" , "Thursday Afternoon" , "Thursday (film)" ]
Pass data in an execution request
Depending on the client library language, you can also pass a runtime argument
in an execution request. For example:
C#
public class ExecuteWorkflowWithArgumentsSample
{
/// <summary>
/// Execute a workflow with arguments and return the execution operation.
/// </summary>
/// <param name="projectID">Your Google Cloud Project ID.</param>
/// <param name="locationID">The region where your workflow is located.</param>
/// <param name="workflowID">Your Workflow ID.</param>
/// <returns>
/// An Execute object representing the completed workflow execution.
/// </returns>
public async Task<Execution> ExecuteWorkflowWithArguments (
string projectId = "YOUR-PROJECT-ID" ,
string locationID = "YOUR-LOCATION-ID" ,
string workflowID = "YOUR-WORKFLOW-ID" )
{
// Initialize the client.
ExecutionsClient client = await ExecutionsClient . CreateAsync ();
// Build the parent location path.
WorkflowName parent = new WorkflowName ( projectId , locationID , workflowID );
// Serialize the argument.
string argument = JsonSerializer . Serialize ( new
{
searchTerm = "Cloud"
});
// Create an execution request.
CreateExecutionRequest createExecutionRequest = new CreateExecutionRequest
{
ParentAsWorkflowName = parent ,
Execution = new Execution
{
Argument = argument ,
}
};
// Execute the operation and recieve the execution.
Execution execution = await client . CreateExecutionAsync ( createExecutionRequest );
Console . WriteLine ( "- Execution started..." );
TimeSpan backoffDelay = TimeSpan . FromSeconds ( 1 );
TimeSpan maxBackoffDelay = TimeSpan . FromSeconds ( 16 );
// Keep polling the state until the execution finishes, using exponential backoff.
while ( execution . State == Execution . Types . State . Active )
{
await Task . Delay ( backoffDelay );
// Implement exponential backoff by doubling the delay, but limiting it to a practical duration.
backoffDelay = ( backoffDelay < maxBackoffDelay ) ? backoffDelay * 2 : maxBackoffDelay ;
execution = await client . GetExecutionAsync ( execution . Name );
}
// Print results.
Console . WriteLine ( $"Execution finished with state: {execution.State}" );
Console . WriteLine ( $"Execution results: {execution.Result}" );
// Return the fetched execution.
return execution ;
}
}
Go
import (
"context"
"encoding/json"
"fmt"
"io"
"time"
workflowexecutions "google.golang.org/api/workflowexecutions/v1"
)
// Execute a workflow with arguments and print the execution results.
//
// For more information about Workflows see:
// https://cloud.google.com/workflows/docs/overview
func executeWorkflowWithArguments ( w io . Writer , projectID , workflowID , locationID string ) error {
// TODO(developer): Uncomment and update the following lines:
// projectID := "YOUR_PROJECT_ID"
// workflowID := "YOUR_WORKFLOW_ID"
// locationID := "YOUR_LOCATION_ID"
ctx := context . Background ()
// Construct the location path.
parent := fmt . Sprintf ( "projects/%s/locations/%s/workflows/%s" , projectID , locationID , workflowID )
// Create execution client.
client , err := workflowexecutions . NewService ( ctx )
if err != nil {
return fmt . Errorf ( "workflowexecutions.NewService error: %w" , err )
}
// Get execution service.
service := client . Projects . Locations . Workflows . Executions
// Create argument.
argument := struct {
SearchTerm string `json:"searchTerm"`
}{
SearchTerm : "Cloud" ,
}
// Encode argument to JSON.
argumentEncoded , err := json . Marshal ( argument )
if err != nil {
return fmt . Errorf ( "json.Marshal error: %w" , err )
}
// Build and run the new workflow execution adding the argument.
res , err := service . Create ( parent , & workflowexecutions . Execution {
Argument : string ( argumentEncoded ),
}). Do ()
if err != nil {
return fmt . Errorf ( "service.Create.Do error: %w" , err )
}
fmt . Fprintln ( w , "- Execution started..." )
// Set initial value for backoff delay in one second.
backoffDelay := time . Second
for res . State == "ACTIVE" {
time . Sleep ( backoffDelay )
// Request the updated state for the execution.
getReq := service . Get ( res . Name )
res , err = getReq . Do ()
if err != nil {
return fmt . Errorf ( "getReq error: %w" , err )
}
// Double the delay to provide exponential backoff (capped at 16 seconds).
if backoffDelay < time . Second * 16 {
backoffDelay *= 2
}
}
fmt . Fprintf ( w , "Execution finished with state: %s\n" , res . State )
fmt . Fprintf ( w , "Execution arguments: %s" , res . Argument )
fmt . Fprintf ( w , "Execution results: %s\n" , res . Result )
return nil
}
Java
// Creates the execution object
CreateExecutionRequest request =
CreateExecutionRequest . newBuilder ()
. setParent ( parent . toString ())
. setExecution ( Execution . newBuilder (). setArgument ( "{\"searchTerm\":\"Friday\"}" ). build ())
. build ();
Node.js
// Execute workflow
try {
const createExecutionRes = await client . createExecution ({
parent : client . workflowPath ( projectId , location , workflow ),
execution : {
argument : JSON . stringify ({ "searchTerm" : "Friday" })
}
});
const executionName = createExecutionRes [ 0 ]. name ;
Python
import time
from google.cloud import workflows _v1
from google.cloud.workflows import executions_v1
from google.cloud.workflows.executions_v1.types import executions
# TODO(developer): Update and uncomment the following lines.
# project_id = "YOUR_PROJECT_ID"
# location = "YOUR_LOCATION" # For example: us-central1
# workflow_id = "YOUR_WORKFLOW_ID" # For example: myFirstWorkflow
# Initialize API clients.
execution_client = executions_v1 . ExecutionsClient ()
workflows_client = workflows_v1 . WorkflowsClient ()
# Construct the fully qualified location path.
parent = workflows_client . workflow_path ( project_id , location , workflow_id )
# Execute the workflow adding an dictionary of arguments.
# Find more information about the Execution object here:
# https://cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.types.Execution
execution = executions_v1 . Execution (
name = parent ,
argument = '{"searchTerm": "Cloud"}' ,
)
response = execution_client . create_execution (
parent = parent ,
execution = execution ,
)
print ( f "Created execution: { response . name } " )
# Wait for execution to finish, then print results.
execution_finished = False
backoff_delay = 1 # Start wait with delay of 1 second.
print ( "Poll for result..." )
# Keep polling the state until the execution finishes,
# using exponential backoff.
while not execution_finished :
execution = execution_client . get_execution (
request = { "name" : response . name }
)
execution_finished = execution . state != executions . Execution . State . ACTIVE
# If we haven't seen the result yet, keep waiting.
if not execution_finished :
print ( "- Waiting for results..." )
time . sleep ( backoff_delay )
# Double the delay to provide exponential backoff.
backoff_delay *= 2
else :
print ( f "Execution finished with state: { execution . state . name } " )
print ( f "Execution results: { execution . result } " )
For more information about passing runtime arguments, see
Pass runtime arguments in an execution request .
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, delete the Google Cloud project with the
resources.
Delete the workflow you created:
gcloud workflows delete myFirstWorkflow
When asked if you want to continue, enter y .
The workflow is deleted.
What's next
Control the order of execution in a workflow
Update an existing workflow
Sample workflows
Workflows syntax reference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
