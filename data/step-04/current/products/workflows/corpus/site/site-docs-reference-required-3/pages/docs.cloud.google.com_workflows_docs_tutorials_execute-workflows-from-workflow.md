---
title: "Run a workflow that executes other workflows in parallel \_|\_ Workflows \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/tutorials/execute-workflows-from-workflow
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/authentication
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/tutorials/execute-workflows-from-workflow
  title: "Run a workflow that executes other workflows in parallel \_|\_ Workflows\
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
Run a workflow that executes other workflows in parallel
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to create and run a parent workflow that executes
multiple child workflows in parallel.
In the following diagram, four parallel executions of the child workflow are
invoked. This allows the parent workflow to process data in parallel branches,
and reduces the overall execution time. The parent workflow waits for all the
child workflow executions to finish before returning a summary of successful and
failed executions, simplifying any error detection.
Objectives
In this tutorial you will:
Create and deploy a child workflow that receives data from a parent workflow.
Create and deploy a parent workflow that executes multiple child workflows
using a parallel for loop.
Run the parent workflow which invokes parallel executions of the child
workflow.
The results of all successful and failed child workflow executions are stored
and returned in a map.
You can run the following commands in the Google Cloud console or by using the
Google Cloud CLI in either your terminal or Cloud Shell.
Costs
In this document, you use the following billable components of Google Cloud:
Workflows
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
Security constraints defined by your organization might prevent you from completing the
following steps. For troubleshooting information, see
Develop applications in a constrained Google Cloud environment .
Console
Sign in to your Google Account. If you don't already have one,
sign up for a new account .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Workflow Executions and Workflows APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the Workflows > Workflows Invoker role to the service account.
To grant the role, find the Select a role list, then select
Workflows > Workflows Invoker .
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Workflow Executions and Workflows APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the Workflows > Workflows Invoker role to the service account.
To grant the role, find the Select a role list, then select
Workflows > Workflows Invoker .
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
gcloud
Sign in to your Google Account. If you don't already have one,
sign up for a new account .
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
Verify that billing is enabled for your Google Cloud project .
Enable the Workflow Executions and Workflows APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable workflowexecutions.googleapis.com workflows.googleapis.com
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant roles .
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
Grant the roles/workflows.invoker IAM
role to the service account:
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = roles/workflows.invoker
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
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
Verify that billing is enabled for your Google Cloud project .
Enable the Workflow Executions and Workflows APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable workflowexecutions.googleapis.com workflows.googleapis.com
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant roles .
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
Grant the roles/workflows.invoker IAM
role to the service account:
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = roles/workflows.invoker
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Create and deploy a child workflow
A child workflow can receive and process data from a parent workflow. The child
workflow demonstrates this by doing the following:
Receives an integer as an argument
Sleeps for 10 seconds to simulate some processing
Returns an indicator (based on whether the integer is an odd or even
number) to simulate success or failure of the workflow execution
Console
In the Google Cloud console, go to the Workflows
page.
Go to Workflows
Click add
Create .
Enter the name, workflow-child , for the new workflow.
In the Region list, select us-central1 .
Select the Service account you previously created.
Click Next .
In the workflow editor, enter the following definition for your workflow:
main :
params : [ args ]
steps :
- init :
assign :
- iteration : ${args.iteration}
- wait :
call : sys.sleep
args :
seconds : 10
- check_iteration_even_or_odd :
switch :
- condition : ${iteration % 2 == 0}
next : raise_error
- return_message :
return : ${"Hello world"+iteration}
- raise_error :
raise : ${"Error with iteration "+iteration}
Click Deploy .
gcloud
Create a source code file for your workflow:
touch workflow-child.yaml
Open your source code file in a text editor and copy the following
workflow to the file.
main :
params : [ args ]
steps :
- init :
assign :
- iteration : ${args.iteration}
- wait :
call : sys.sleep
args :
seconds : 10
- check_iteration_even_or_odd :
switch :
- condition : ${iteration % 2 == 0}
next : raise_error
- return_message :
return : ${"Hello world"+iteration}
- raise_error :
raise : ${"Error with iteration "+iteration}
Deploy the workflow:
gcloud workflows deploy workflow-child \
--source = workflow-child.yaml \
--location = us-central1 \
--service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Replace SERVICE_ACCOUNT_NAME with the name of the
service account you previously created.
Create and deploy the parent workflow
The parent workflow executes multiple branches of the child workflow using a
parallel for loop.
Copy the source code for the workflow definition. It consists of the
following parts:
A map is used to store the results of the child workflow executions.
For more information, see Maps .
main :
steps :
- init :
assign :
- execution_results : {} # results from each execution
- execution_results.success : {} # successful executions saved under 'success' key
- execution_results.failure : {} # failed executions saved under 'failure' key
A for loop is executed in parallel to invoke the child workflow.
For more information, see
Parallel steps and
Iteration .
- execute_child_workflows :
parallel :
shared : [ execution_results ]
for :
value : iteration
in : [ 1 , 2 , 3 , 4 ]
steps :
- iterate :
The child workflow is invoked using a connector. Each iteration of the
child workflow is passed the iteration argument. The parent workflow
waits for and stores the result of each child workflow execution. For more
information, see
Workflows Executions API connector
and Runtime arguments .
try :
steps :
- execute_child_workflow :
call : googleapis.workflowexecutions.v1.projects.locations.workflows.executions.run
args :
workflow_id : workflow-child
#location: ...
#project_id: ...
argument :
iteration : ${iteration}
result : execution_result
- save_successful_execution :
assign :
- execution_results.success[string(iteration)] : ${execution_result}
except :
as : e
steps :
- save_failed_execution :
assign :
- execution_results.failure[string(iteration)] : ${e}
The execution results are returned. For more information, see
Complete the execution of a workflow .
- return_execution_results :
return : ${execution_results}
Deploy the workflow:
Console
In the Google Cloud console, go to the Workflows
page:
Go to Workflows
Click add
Create .
Enter the name, workflow-parent , for the new workflow.
In the Region list, select us-central1 .
Select the Service account you previously created.
Click Next .
In the workflow editor, paste the definition for the parent workflow.
Click Deploy .
gcloud
Create a source code file for your workflow:
touch workflow-parent.yaml
Open your source code file in a text editor and paste the definition
for the parent workflow.
Deploy the workflow:
gcloud workflows deploy workflow-parent \
--source = workflow-parent.yaml \
--location = us-central1 \
--service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Replace SERVICE_ACCOUNT_NAME with the name of
the service account you previously created.
Execute the parent workflow
Execute the parent workflow so that invocations of the child workflow run in
parallel. The executions should take about about 10 seconds to complete.
Console
In the Google Cloud console, go to the Workflows
page:
Go to Workflows
On the Workflows page, click the
workflow-parent workflow to go to its details page.
On the Workflow details page, click
play_arrow Execute .
Click Execute again.
View the results of the workflow in the Output pane.
The results should be similar to the following, indicating errors with
iterations 2 and 4, and success with iterations 1 and 3.
"failure" : {
"2" : {
"message" : "Execution failed or cancelled." ,
"operation" : {
"argument" : "{\"iteration\":2}" ,
"duration" : "10.157992541s" ,
"endTime" : "2023-07-11T13:13:13.028424329Z" ,
"error" : {
"context" : "RuntimeError: \"Error with iteration 2\"\nin step \"raise_error\", routine \"main\", line: 18" ,
"payload" : "\"Error with iteration 2\"" ,
...
"4" : {
"message" : "Execution failed or cancelled." ,
"operation" : {
"argument" : "{\"iteration\":4}" ,
"duration" : "10.157929734s" ,
"endTime" : "2023-07-11T13:13:13.061289142Z" ,
"error" : {
"context" : "RuntimeError: \"Error with iteration 4\"\nin step \"raise_error\", routine \"main\", line: 18" ,
"payload" : "\"Error with iteration 4\"" ,
...
"success" : {
"1" : "Hello world1" ,
"3" : "Hello world3"
gcloud
Execute the workflow:
gcloud workflows run workflow-parent \
--location = us-central1
The results should be similar to the following, indicating errors with
iterations 2 and 4, and success with iterations 1 and 3.
Waiting for execution [ 06c753e4-6947-4c62-ac0b-2a9d53fb1b8f ] to complete...done.
argument: 'null'
duration: 14 .065415004s
endTime: '2023-07-11T12:50:43.929023883Z'
name: projects/386837416586/locations/us-central1/workflows/workflow-parent/executions/06c753e4-6947-4c62-ac0b-2a9d53fb1b8f
result: '{"failure":{"2":{"message":"Execution failed or cancelled.","operation":{"argument":"{\"iteration\":2}","duration":"10.143718070s","endTime":"2023-07-11T12:50:40.673209821Z","error":{"context":"RuntimeError:
...
"Error with iteration 2\"\nin step \"raise_error\", routine \"main\", line: 18","payload":"\"Error
...
"Error with iteration 4\"\nin step \"raise_error\", routine \"main\", line: 18","payload":"\"Error
...
"success":{"1":"Hello world1","3":"Hello world3"}}'
startTime: '2023-07-11T12:50:29.863608879Z'
state: SUCCEEDED
You have successfully created and deployed a workflow that invokes a child
workflow, executes four iterations of the child workflow in parallel branches,
and returns an indicator of success or failure for each child workflow execution.
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
Delete tutorial resources
Delete the workflows created in this tutorial:
gcloud workflows delete workflow-child
gcloud workflows delete workflow-parent
What's next
To learn more about the Workflows syntax, see the Workflows syntax reference .
To learn more about Workflows connectors, see Understand connectors .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
