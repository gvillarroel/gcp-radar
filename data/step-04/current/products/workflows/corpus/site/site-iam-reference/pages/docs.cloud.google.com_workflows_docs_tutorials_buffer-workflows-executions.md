---
title: "Use a Cloud Tasks queue to buffer your workflow executions \_|\_ Workflows\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/tutorials/buffer-workflows-executions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/tutorials/buffer-workflows-executions
  title: "Use a Cloud Tasks queue to buffer your workflow executions \_|\_ Workflows\
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
Use a Cloud Tasks queue to buffer your workflow executions
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to create a Cloud Tasks queue that
can regulate the rate of workflow executions.
There is a maximum number of active workflow
executions that can happen concurrently. Once this quota is exhausted, and if
execution backlogging
is disabled, or if the quota for backlogged executions is reached, any new
executions fail with an HTTP 429 Too many requests status code. By enabling a
Cloud Tasks queue to execute child workflows at a rate that you
define, you can avoid Workflows quota-related issues and achieve a
better execution rate.
Note that Cloud Tasks is designed to provide "at least once"
delivery; however, Workflows doesn't ensure exactly-once
processing of duplicate requests from Cloud Tasks.
In the following diagram, a parent workflow invokes child workflows that are
regulated by a Cloud Tasks queue that has a dispatch rate
applied.
Objectives
In this tutorial you will:
Create a Cloud Tasks queue that acts as an intermediary
between the parent and child workflows.
Create and deploy a child workflow that receives data from the parent
workflow.
Create and deploy the parent workflow that executes the child workflow
through the Cloud Tasks queue.
Run the parent workflow without a dispatch rate limit, which invokes
executions of the child workflow.
Apply a dispatch limit to the Cloud Tasks queue and run the
parent workflow.
Observe that the child workflows are executed at the rate defined through the
Cloud Tasks queue.
You can run the following commands in the Google Cloud console or by using the
Google Cloud CLI in either your terminal or Cloud Shell.
Costs
In this document, you use the following billable components of Google Cloud:
Cloud Tasks
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
Enable the Cloud Tasks, Compute Engine, and Workflows APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
Enable the Cloud Tasks, Compute Engine, and Workflows APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
In the Google Cloud console, go to the IAM page to set
permissions for the Compute Engine
default service account.
Go to IAM
Make note of the Compute Engine
default service account as you will associate it with the workflows in
this tutorial for testing purposes. This service account is automatically
created after enabling or using a Google Cloud service that uses
Compute Engine, and with the following email format:
PROJECT_NUMBER -compute@developer.gserviceaccount.com
Replace PROJECT_NUMBER with your
Google Cloud project number. You can find your project number on the
Welcome
page of the Google Cloud console.
For production environments, we strongly recommend
creating a new service account
and granting it one or more IAM roles that contain the
minimum permissions required
and follow the principle of
least privilege .
Note:
Depending on your organization policy configuration, the default service account might
automatically be granted the Editor role on your
project. We strongly recommend that you disable the automatic role grant by
enforcing the iam.automaticIamGrantsForDefaultServiceAccounts organization policy
constraint . If you created your organization after May 3, 2024, this
constraint is enforced by default.
If you disable the automatic role grant, you must decide which roles to grant to the default
service accounts, and then grant these
roles yourself.
If the default service account already has the Editor role, we recommend that you replace the
Editor role with less permissive roles.To safely modify the service account's roles, use Policy Simulator to see the impact of
the change, and then grant and revoke the
appropriate roles .
Select the Compute Engine default service account and in that
row, click edit Edit principal .
In the dialog box that appears, click
add Add another role and add the
following roles:
In the Select a role list, select
Workflows > Workflows Invoker so that the
account has permission to trigger your workflow execution.
In the Select a role list, select
Cloud Tasks > Cloud Tasks Enqueuer so that the
account has permission to create tasks.
Click Save .
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
Enable the Cloud Tasks, Compute Engine, and Workflows APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable cloudtasks.googleapis.com compute.googleapis.com workflows.googleapis.com
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
Enable the Cloud Tasks, Compute Engine, and Workflows APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable cloudtasks.googleapis.com compute.googleapis.com workflows.googleapis.com
Make note of the Compute Engine
default service account as you will associate it with the workflows in
this tutorial for testing purposes. This service account is automatically
created after enabling or using a Google Cloud service that uses
Compute Engine, and with the following email format:
PROJECT_NUMBER -compute@developer.gserviceaccount.com
Replace PROJECT_NUMBER with your
Google Cloud project number. You can find your project number by
running the following command:
gcloud projects describe PROJECT_ID --format = 'value(projectNumber)'
For production environments, we strongly recommend
creating a new service account
and granting it one or more IAM roles that contain the
minimum permissions required
and follow the principle of
least privilege .
Note:
Depending on your organization policy configuration, the default service account might
automatically be granted the Editor role on your
project. We strongly recommend that you disable the automatic role grant by
enforcing the iam.automaticIamGrantsForDefaultServiceAccounts organization policy
constraint . If you created your organization after May 3, 2024, this
constraint is enforced by default.
If you disable the automatic role grant, you must decide which roles to grant to the default
service accounts, and then grant these
roles yourself.
If the default service account already has the Editor role, we recommend that you replace the
Editor role with less permissive roles.To safely modify the service account's roles, use Policy Simulator to see the impact of
the change, and then grant and revoke the
appropriate roles .
Grant the
Workflows Invoker role
( roles/workflows.invoker ) on the project to the
Compute Engine default service account so that the account has
permission to trigger your workflow execution.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = roles/workflows.invoker
Replace the following:
PROJECT_ID : the Google Cloud project ID
PROJECT_NUMBER : the Google Cloud project number
Grant the
Cloud Tasks Enqueuer role
( roles/cloudtasks.enqueuer ) on the project to the
Compute Engine default service account so that the account has
permission to create tasks.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = roles/cloudtasks.enqueuer
Create a Cloud Tasks queue
Create a Cloud Tasks queue that you can use in the parent
workflow and that lets you regulate the rate of workflow executions.
Console
In the Google Cloud console, go to the Cloud Tasks
page:
Go to Cloud Tasks
Click add
Create push queue .
Enter the Queue name , queue-workflow-child .
In the Region list, select us-central1 (Iowa) .
Click Create .
gcloud
QUEUE = queue-workflow-child
LOCATION = us-central1
gcloud tasks queues create $QUEUE --location = $LOCATION
Create and deploy a child workflow
A child workflow can receive and process data from a parent workflow. Create and
deploy a child workflow that does the following:
Receives an iteration as an argument
Sleeps for 10 seconds to simulate some processing
Returns a string upon successful execution
Console
In the Google Cloud console, go to the Workflows
page.
Go to Workflows
Click add
Create .
Enter the name, workflow-child , for the new workflow.
In the Region list, select us-central1 (Iowa) .
In the Service account list, select the
Compute Engine default service account .
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
- return_message :
return : ${"Hello world"+iteration}
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
- return_message :
return : ${"Hello world"+iteration}
Deploy the workflow:
gcloud workflows deploy workflow-child \
--source = workflow-child.yaml \
--location = us-central1 \
--service-account = PROJECT_NUMBER -compute@developer.gserviceaccount.com
Create and deploy the parent workflow
The parent workflow executes multiple branches of the child workflow using a
for loop.
Copy the source code that defines the parent workflow:
main :
steps :
- init :
assign :
- project_id : ${sys.get_env("GOOGLE_CLOUD_PROJECT_ID")}
- project_number : ${sys.get_env("GOOGLE_CLOUD_PROJECT_NUMBER")}
- location : ${sys.get_env("GOOGLE_CLOUD_LOCATION")}
- workflow_child_name : "workflow-child"
- queue_name : "queue-workflow-child"
- enqueue_tasks_to_execute_child_workflow :
for :
value : iteration
range : [ 1 , 100 ]
steps :
- iterate :
assign :
- data :
iteration : ${iteration}
- exec :
# Encode object to JSON string in expression for workflow argument
argument : ${json.encode_to_string(data)}
- create_task_to_execute_child_workflow :
call : googleapis.cloudtasks.v2.projects.locations.queues.tasks.create
args :
parent : ${"projects/" + project_id + "/locations/" + location + "/queues/" + queue_name}
body :
task :
httpRequest :
body : ${base64.encode(json.encode(exec))}
url : ${"https://workflowexecutions.googleapis.com/v1/projects/" + project_id + "/locations/" + location + "/workflows/" + workflow_child_name + "/executions"}
oauthToken :
serviceAccountEmail : ${project_number + "-compute@developer.gserviceaccount.com"}
The workflow consists of the following parts:
A map that is used to assign constants referring to the child workflow
and the Cloud Tasks queue name. For more information, see
Maps .
A for loop that is executed to invoke the child workflow, iteratively.
For more information, see
Iteration .
A workflow step that creates and adds a large number of tasks to the
Cloud Tasks queue to execute the child workflow. For more
information, see
Cloud Tasks API connector .
Deploy the workflow:
Console
In the Google Cloud console, go to the Workflows
page:
Go to Workflows
Click add
Create .
Enter the name, workflow-parent , for the new workflow.
In the Region list, select us-central1 (Iowa) .
In the Service account list, select the
Compute Engine default service account .
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
--service-account = PROJECT_NUMBER -compute@developer.gserviceaccount.com
Execute the parent workflow without rate limits
Execute the parent workflow to invoke the child workflows through the
Cloud Tasks queue. The executions should take about 10
seconds to complete.
Console
In the Google Cloud console, go to the Workflows
page:
Go to Workflows
On the Workflows page, click the
workflow-parent workflow to go to its details page.
On the Workflow details page, click
play_arrow Execute .
Click Execute again.
As the parent workflow is running, return to the
Workflows page, and click the
workflow-child workflow to go to its details page.
Click the Executions tab.
You should see executions of the child workflow, running around the same
time, similar to the following:
gcloud
Execute the workflow:
gcloud workflows run workflow-parent \
--location = us-central1
To verify that a workflow execution was triggered, list the last four
executions:
gcloud workflows executions list workflow-child --limit = 4
Since the number of executions (100 ) is below the
Workflows concurrency limit, the results should be
similar to the following. Quota issues might arise if you submit
thousands of executions at the same time.
NAME: projects/620278351741/locations/us-central1/workflows/workflow-child/executions/1570d06e-d133-4536-a859-b7b6a1a85524
STATE: ACTIVE
START_TIME: 2023 -07-27T00:56:15.093934448Z
END_TIME:
NAME: projects/620278351741/locations/us-central1/workflows/workflow-child/executions/82724960-7d92-4961-aa2c-a0f0be46212c
STATE: ACTIVE
START_TIME: 2023 -07-27T00:56:14.903007626Z
END_TIME:
NAME: projects/620278351741/locations/us-central1/workflows/workflow-child/executions/598126fb-37f9-45bc-91d8-aea7d795d702
STATE: ACTIVE
START_TIME: 2023 -07-27T00:56:14.698260524Z
END_TIME:
NAME: projects/620278351741/locations/us-central1/workflows/workflow-child/executions/d2e9960b-f93f-4df4-a594-3e7e5c2be53f
STATE: ACTIVE
START_TIME: 2023 -07-27T00:56:14.503818840Z
END_TIME:
You have created and deployed a workflow that invokes 100 iterations of the
child workflow.
Execute the parent workflow with rate limits
Apply a rate limit of one dispatch per second to the Cloud Tasks
queue and then execute the parent workflow.
Console
In the Google Cloud console, go to the Cloud Tasks
page:
Go to Cloud Tasks
Click queue-workflow-child , the Cloud Tasks queue you
created, and click Edit queue .
In the Rate limits for task dispatches section, for the
Max dispatches field, type 1 .
Click Save .
Go to the Workflows page:
Go to Workflows
Click the workflow-parent workflow to go to its details page.
On the Workflow details page, click
play_arrow Execute .
Click Execute again.
As the parent workflow is running, return to the
Workflows page, and click the
workflow-child workflow to go to its details page.
Click the Executions tab.
You should see executions of the child workflow, running at one request
per second, similar to the following:
gcloud
Update the Cloud Tasks queue to apply a rate limit of one
dispatch per second:
gcloud tasks queues update $QUEUE \
--max-dispatches-per-second = 1 \
--location = us-central1
Execute the workflow:
gcloud workflows run workflow-parent \
--location = us-central1
To verify that a workflow execution was triggered, list the last four
executions:
gcloud workflows executions list workflow-child --limit = 4
The results should be similar to the following, with one workflow executed per
second:
NAME: projects/620278351741/locations/us-central1/workflows/workflow-child/executions/becf4957-9fb2-40d9-835d-0ff2dd0c1249
STATE: ACTIVE
START_TIME: 2023 -07-27T01:07:24.446361457Z
END_TIME:
NAME: projects/620278351741/locations/us-central1/workflows/workflow-child/executions/6c1e7c4b-7ac6-4121-b351-1e2d56d10903
STATE: ACTIVE
START_TIME: 2023 -07-27T01:07:23.448213989Z
END_TIME:
NAME: projects/620278351741/locations/us-central1/workflows/workflow-child/executions/f2ba5027-af40-4cd3-8cd0-b8033bcc6211
STATE: ACTIVE
START_TIME: 2023 -07-27T01:07:22.431485914Z
END_TIME:
NAME: projects/620278351741/locations/us-central1/workflows/workflow-child/executions/ecc61ee5-fe87-49eb-8803-89dba929f6c8
STATE: ACTIVE
START_TIME: 2023 -07-27T01:07:21.443466369Z
END_TIME:
You have successfully deployed a workflow that invokes 100 iterations of the
child workflow with a dispatch rate of one execution per second.
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
Delete the workflows and Cloud Tasks resources created in this
tutorial:
Console
To delete the workflows, follow these steps:
In the Google Cloud console, go to the Workflows
page:
Go to Workflows
From the list of workflows, click a workflow to go to its
Workflow details page.
Click delete Delete .
Type the name of the workflow and then click Confirm .
To delete the Cloud Tasks queue, follow these steps:
In the Google Cloud console, go to the Cloud Tasks
page:
Go to Cloud Tasks
Select the name of the queue you want to delete and click
Delete queue .
Confirm the action.
gcloud
To delete the workflows, run these commands:
gcloud workflows delete workflow-child
gcloud workflows delete workflow-parent
To delete the Cloud Tasks queue, run this command:
gcloud tasks queues delete queue-workflow-child
What's next
To learn more about how to use Cloud Tasks to queue a workflow and
execute it asynchronously, see Queue workflow executions using Cloud Tasks .
To learn more about the Workflows syntax, see the Workflows syntax reference .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
