---
title: "Trigger a workflow from Google Sheets \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/tutorials/trigger-workflow-from-sheets
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/tutorials/trigger-workflow-from-sheets
  title: "Trigger a workflow from Google Sheets \_|\_ Workflows \_|\_ Google Cloud\
    \ Documentation"
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
Trigger a workflow from Google Sheets
Stay organized with collections
Save and categorize content based on your preferences.
Google Sheets is a cloud-based
spreadsheet solution that supports real-time collaboration and provides tools to
visualize, process, and communicate data.
This tutorial demonstrates how to trigger Workflows from
Sheets.
Objectives
In this tutorial, you will:
Use Google Forms , a cloud-based
questionnaire and survey solution, to create a form that can submit requests to
create virtual machine (VM) instances.
Link a Google Sheets spreadsheet to the form to collect and save any
responses.
Use Google Apps Script , a
cloud-based JavaScript platform that lets you programmatically create, read,
and edit Google Workspace products, to trigger a workflow whenever a request
is approved through an update to the spreadsheet.
Deploy a workflow that calls the
Compute Engine API connector
and creates a Compute Engine VM instance based on the specifications
collected through the form. Connectors simplify the calling of other Google Cloud
APIs. Learn more about Workflows connectors .
Test the entire process and confirm that a VM instance is created as expected.
Costs
In this document, you use the following billable components of Google Cloud:
Compute Engine
Workflows
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
The tutorial also uses Google Workspace .
Business-grade services that are not included with Google's free consumer apps
are billable.
Before you begin
You can run some of the following commands in the Google Cloud console, or by
using the Google Cloud CLI in either your terminal or Cloud Shell.
Security constraints defined by your organization might prevent you from completing the
following steps. For troubleshooting information, see
Develop applications in a constrained Google Cloud environment .
Console
In the Google Cloud console, on the project selector page, select or
create a Google Cloud project .
Note: If you don't plan to keep the resources that you create in this
procedure, create a project instead of selecting an existing project. After
you finish these steps, you can delete the project, removing all resources
associated with the project.
Go to project selector
Make sure that billing is enabled for your Google Cloud project. Learn how to
check if billing is enabled on a project .
Enable the Compute Engine and Workflows APIs.
Enable the APIs
Make note of the
Compute Engine default service account
as you will associate it with the workflow in this tutorial for testing
purposes. New projects that have enabled the Compute Engine API
have this service account created with the IAM basic
Editor role, and with the following email format:
PROJECT_NUMBER -compute@developer.gserviceaccount.com
You can find your project number on the
Welcome
page of the Google Cloud console.
For production environments, we strongly recommend
creating a new service account and
granting it one or more IAM roles that contain the
minimum permissions required
and follow the principle of
least privilege .
Note:
The
iam.automaticIamGrantsForDefaultServiceAccounts organization policy constraint
prevents the Editor role from being automatically granted to default service accounts. If you
created your organization after May 3, 2024, this constraint is enforced by
default.
We strongly recommend that you enforce this constraint to disable the automatic role grant. If you
disable the automatic role grant, you must decide which roles to grant to the default service
accounts, and then grant these roles
yourself.
If the default service account already has the Editor role, we recommend that you replace the
Editor role with less permissive roles.To safely modify the service account's roles, use Policy Simulator to see the impact of
the change, and then grant and revoke the
appropriate roles .
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Make sure that billing is enabled for your Google Cloud project.
Learn how to
check if billing is enabled on a project .
Enable the Compute Engine and Workflows APIs.
gcloud services enable \
compute.googleapis.com \
workflows.googleapis.com
Make note of the
Compute Engine default service account
as you will associate it with the workflow in this tutorial for testing
purposes. New projects that have enabled the Compute Engine API
have this service account created with the IAM basic
Editor role, and with the following email format:
PROJECT_NUMBER -compute@developer.gserviceaccount.com
You can retrieve your project number:
gcloud projects describe PROJECT_ID
For production environments, we strongly recommend
creating a new service account and
granting it one or more IAM roles that contain the
minimum permissions required
and follow the principle of
least privilege .
Note:
The
iam.automaticIamGrantsForDefaultServiceAccounts organization policy constraint
prevents the Editor role from being automatically granted to default service accounts. If you
created your organization after May 3, 2024, this constraint is enforced by
default.
We strongly recommend that you enforce this constraint to disable the automatic role grant. If you
disable the automatic role grant, you must decide which roles to grant to the default service
accounts, and then grant these roles
yourself.
If the default service account already has the Editor role, we recommend that you replace the
Editor role with less permissive roles.To safely modify the service account's roles, use Policy Simulator to see the impact of
the change, and then grant and revoke the
appropriate roles .
Create a form to request VM instances
Create a form that can be used to submit a request to create a
Compute Engine virtual machine (VM) instance. By default, when you
create a form through Google Forms, it's saved in
Google Drive .
Go to forms.google.com .
Click Blank
.
A new form opens.
Create a form with five required sections. The form should appear similar
to the following:
View sample form
Machine name Short answer text
Zone Dropdown:
us-central1-a
us-central1-b
us-central1-c
us-central1-f
Type Dropdown:
e2-micro
e2-small
e2-medium
e2-standard-2
e2-standard-4
Disk size (GB) Short answer text
Operating system Dropdown:
debian-10
centos-stream-9
cos-93-lts
cos-97-lts
Enable email collection to record the email addresses of people who fill
in your form:
Click Settings .
Expand the Responses section.
Click the Collect email addresses toggle.
Link a spreadsheet to your form
After you have created a form, link a spreadsheet to it so that you can save
your form responses in that spreadsheet. The spreadsheet is saved in
Drive .
Open your form in Forms .
Click Responses .
Click Link to Sheets .
In the Select destination for responses dialog, select Create a new
spreadsheet .
Click Create .
The linked spreadsheet opens.
In column H , add an Approved? heading.
Place your cursor in the first row of column H and select
Insert > Checkbox .
The spreadsheet should appear similar to the following:
Each time the sheet is updated with a response, the checkbox will also appear
in the row for that response.
Extend Google Sheets using Apps Script
Apps Script lets you programmatically create, read, and edit
Sheets. Most scripts designed for Sheets manipulate
arrays to interact with the cells, rows, and columns in a spreadsheet. For an
introduction to using Apps Script with Sheets, see
the
Custom function quickstart .
Note: If you're logged into multiple Google Accounts at the same time, you might
have trouble accessing Apps Script. Multi-login, or being
logged into multiple Google Accounts at once, isn't supported for
Apps Script. For more information, see
Fix issues with multiple Google Accounts .
Create an Apps Script project from Sheets:
Open your Sheets spreadsheet.
Select Extensions > Apps Script .
In the script editor, click Untitled project .
Give your project a name and click Rename .
Your script is now bound
to your spreadsheet, which gives the script abilities to alter the user
interface or respond when the spreadsheet is opened.
A script project represents a collection of Apps Script
files and resources. Code files in a script project have a .gs
extension.
You can use Apps Script to write custom functions that you
can use in Sheets just like a built-in function. Custom functions are
created using standard JavaScript. Create a function:
Open your Apps Script project.
Click Editor code .
A script file appears as a project file named Code.gs . To edit the file,
select it.
Replace any code in the script editor with the following code which reads
the data in your spreadsheet and passes it along as input to a workflow
execution:
const PROJECT_ID = "your-project-id" ;
const REGION = "us-central1" ;
const WORKFLOW = "create-vm-from-form" ;
function handleEdit ( e ) {
var range = e . range . getA1Notation ();
var sheet = e . source ;
if ( range . length > 1 && range [ 0 ] === ' H ' ) {
if ( e . value == "TRUE" ) {
Logger . log ( "Approved checkbox: true" );
var row = range . slice ( 1 )
var email = sheet . getRange ( ' B ' + row ). getCell ( 1 , 1 ). getValue ()
var vmName = sheet . getRange ( ' c ' + row ). getCell ( 1 , 1 ). getValue ()
var zone = sheet . getRange ( ' D ' + row ). getCell ( 1 , 1 ). getValue ()
var machineType = sheet . getRange ( ' E ' + row ). getCell ( 1 , 1 ). getValue ()
var diskSize = sheet . getRange ( ' F ' + row ). getCell ( 1 , 1 ). getValue ()
var imageFamily = sheet . getRange ( ' G ' + row ). getCell ( 1 , 1 ). getValue ()
var imageProject = imageFamily . substring ( 0 , imageFamily . indexOf ( ' - ' )) + "-cloud"
const executionPayload = {
"argument" : "{\" diskSize \ ": \"" + diskSize + " \ ", \" email \ ": \"" + email + " \ ", \" imageFamily \ ": \"" + imageFamily + " \ ", \" imageProject \ ": \"" + imageProject + " \ ", \" machineType \ ": \"" + machineType + " \ ", \" vmName \ ": \"" + vmName + " \ ", \" zone \ ": \"" + zone + " \ "}"
};
approve ( executionPayload );
}
else {
Logger . log ( "Approved checkbox: false" );
}
}
}
function approve ( executionPayload ) {
const headers = {
"Authorization" : "Bearer " + ScriptApp . getOAuthToken ()
};
const params = {
"method" : ' post ' ,
"contentType" : ' application / json ' ,
"headers" : headers ,
"payload" : JSON . stringify ( executionPayload )
};
const url = "https://workflowexecutions.googleapis.com/v1/projects/" + PROJECT_ID + "/locations/" + REGION + "/workflows/" + WORKFLOW + "/executions" ;
Logger . log ( "Workflow execution request to " + url );
var response = UrlFetchApp . fetch ( url , params );
Logger . log ( response );
}
Replace your-project-id with your Google Cloud project ID.
You can find your project ID on the
Welcome
page of the Google Cloud console.
Click Save save .
Apps Script
installable triggers
let a script project execute a specified function when certain conditions are
met, such as when a spreadsheet is opened or edited. Create a trigger:
Open your Apps Script project.
Click Triggers alarm .
Click Add Trigger .
In the Add Trigger for YOUR_PROJECT_NAME dialog, configure the
trigger:
In the Choose which function to run list, select handleEdit .
In the Choose which deployment should run list, select Head .
In the Select event source list, select From spreadsheet .
In the Select event type list, select On edit .
In the Failure notification settings list, select Notify me daily .
Click Save .
If you receive a prompt to choose a Google Account, select the appropriate
account, and then click Allow .
This allows your Apps Script project to see, edit,
create, and delete your Sheets spreadsheets; and to connect to
an external service.
An Apps Script project manifest file
is a JSON file that specifies basic project information that
Apps Script needs to run a script successfully. Note that the
Apps Script editor hides manifest files by default to protect your Apps Script
project settings. Edit the manifest file:
Open your Apps Script project.
Click Project Settings settings .
Select the Show "appsscript.json" manifest file in editor checkbox.
Click Editor code .
The manifest file appears as a project file named appsscript.json . To
edit the file, select it.
The oauthScopes field specifies an array of strings. To set the
authorization scopes
your project uses, add an array with the scopes you want supported. For example:
{
"timeZone": "America/Toronto",
"dependencies": {
},
"exceptionLogging": "STACKDRIVER",
"runtimeVersion": "V8",
"oauthScopes": [
"https://www.googleapis.com/auth/script.external_request",
"https://www.googleapis.com/auth/cloud-platform",
"https://www.googleapis.com/auth/spreadsheets"
]
}
This sets explicit scopes to:
Connect to an external service
See, edit, configure, and delete your Google Cloud data and see
the email address for your Google Account
See, edit, create, and delete all your Sheets spreadsheets
Click Save save .
Note: To protect your project settings, hide the manifest when you are done
editing by clearing the Show "appsscript.json" manifest file in editor
checkbox.
Deploy a workflow that creates a VM instance
Deploy a workflow that is triggered when a request to create a VM instance is
approved. The workflow calls the
Compute Engine API connector
to create a Compute Engine VM instance based on the specifications
collected through the form.
Console
In the Google Cloud console, go to the Workflows
page:
Go to Workflows
Click add
Create .
Enter a name for the new workflow: create-vm-from-form .
In the Region list, select us-central1 (Iowa) .
For the Service account , select the Compute Engine default
service account
( PROJECT_NUMBER -compute@developer.gserviceaccount.com ).
Click Next .
In the workflow editor, enter the following definition for your workflow:
main :
params : [ input ]
steps :
- init :
assign :
- projectId : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
- zone : ${input.zone}
- machineType : ${input.machineType}
- diskSize : ${input.diskSize}
- imageProject : ${input.imageProject}
- imageFamily : ${input.imageFamily}
- vmName : ${input.vmName}
- email : ${input.email}
- createResource :
call : googleapis.compute.v1.instances.insert
args :
project : ${projectId}
zone : ${zone}
body :
name : ${vmName}
machineType : ${"projects/" + projectId + "/zones/" + zone + "/machineTypes/" + machineType}
disks :
- initializeParams :
diskSizeGb : ${diskSize}
sourceImage : ${"projects/" + imageProject + "/global/images/family/" + imageFamily}
type : PERSISTENT
boot : true
autoDelete : true
networkInterfaces :
- network : "global/networks/default"
result : insertResult
- retStep :
return : ${insertResult}
Click Deploy .
gcloud
Create a source code file for your workflow:
touch create-vm-from-form.yaml
In a text editor, copy the following workflow to your source code file:
main :
params : [ input ]
steps :
- init :
assign :
- projectId : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
- zone : ${input.zone}
- machineType : ${input.machineType}
- diskSize : ${input.diskSize}
- imageProject : ${input.imageProject}
- imageFamily : ${input.imageFamily}
- vmName : ${input.vmName}
- email : ${input.email}
- createResource :
call : googleapis.compute.v1.instances.insert
args :
project : ${projectId}
zone : ${zone}
body :
name : ${vmName}
machineType : ${"projects/" + projectId + "/zones/" + zone + "/machineTypes/" + machineType}
disks :
- initializeParams :
diskSizeGb : ${diskSize}
sourceImage : ${"projects/" + imageProject + "/global/images/family/" + imageFamily}
type : PERSISTENT
boot : true
autoDelete : true
networkInterfaces :
- network : "global/networks/default"
result : insertResult
- retStep :
return : ${insertResult}
Deploy the workflow by entering the following command:
gcloud workflows deploy create-vm-from-form \
--source = create-vm-from-form.yaml \
--location = us-central1 \
--service-account = PROJECT_NUMBER -compute@developer.gserviceaccount.com
Replace PROJECT_NUMBER with your Google Cloud
project number. You can retrieve your project number:
gcloud projects describe PROJECT_ID
Test the end-to-end flow
To confirm that all is working as expected, try running through the entire
process.
Send your form to yourself and answer the questions appropriately.
Ensure that the specifications you use to create a VM instance are valid;
otherwise, your workflow execution will fail. For more information, see
Compute Engine general-purpose machine family .
To submit your response, click Submit .
Open your form in Forms .
Click Responses .
Click View in Sheets .
Your linked spreadsheet opens.
In the row for your response, select the Approved? checkbox.
Open your Apps Script project.
Click Executions playlist_play .
Your trigger should be executed and listed with a status of Completed .
Confirm that the create-vm-from-form workflow completed successfully:
Console
In the Google Cloud console, go to the Workflows
page.
Go to Workflows
On the Workflows page, click the
create-vm-from-form workflow to go to its details page.
On the Workflow details page, to retrieve the details for a
particular execution, click the appropriate execution ID.
The Execution state should be Succeeded and, in the Input
pane, you should see the VM specifications that you requested.
gcloud
Retrieve a list of your workflow's execution attempts:
gcloud workflows executions list create-vm-from-form
The result should be similar to the following:
NAME: projects/918619793306/locations/us-central1/workflows/create-vm-from-form/executions/d8947ecb-9ccb-4ea1-ba10-e5c10414e3be
STATE: SUCCEEDED
START_TIME: 2023-01-24T15:07:40.404741791Z
END_TIME: 2023-01-24T15:07:55.649373625Z
Confirm that a new VM was created as expected:
Console
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Your VM instance should be listed with a status indicating that it is
running.
gcloud
Retrieve an aggregate list of all VMs in all zones for a project:
gcloud compute instances list
Your VM instance should be listed with a status indicating that it is
running.
For more information about the gcloud compute instances list command,
see its reference page .
Clean up
If you created a new project for this tutorial, delete the project .
If you used an existing project and wish to keep it without the changes added
in this tutorial, delete resources created for the tutorial .
Delete the project
The easiest way to eliminate billing is to delete the project that you
created for the tutorial.
To delete the project:
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Delete resources created in this tutorial
Delete files in Drive .
Delete a Compute Engine VM instance .
Delete a workflow .
What's next
Write to Sheets from a workflow .
Pause and resume a workflow using callbacks and Sheets .
Learn more about the Forms connector .
Explore the Google Workspace Learning Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
