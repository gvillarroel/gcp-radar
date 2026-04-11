---
title: "Quickstart: Add an HTTP target task to a Cloud Tasks queue \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/tasks/docs/add-task-queue
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/tasks/docs
source_metadata:
  url: https://docs.cloud.google.com/tasks/docs/add-task-queue
  title: "Quickstart: Add an HTTP target task to a Cloud Tasks queue \_|\_ Google\
    \ Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Add an HTTP target task to a Cloud Tasks queue
This quickstart shows you how to add an
HTTP target task to a
Cloud Tasks queue using the Cloud Tasks API.
Before you begin
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
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Tasks API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable cloudtasks.googleapis.com
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/cloudtasks.admin, roles/logging.viewer
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
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
Enable the Cloud Tasks API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable cloudtasks.googleapis.com
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/cloudtasks.admin, roles/logging.viewer
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Create a Cloud Tasks queue
Use the gcloud tasks queues create
command to create your queue.
Caution: Using Cloud Tasks gcloud queue management methods
carries some risk if used together with methods based on uploading
queue.yaml/queue.xml . For more information, see
Use Queue Management or queue.yaml .
In your terminal, create a queue that logs all operations.
gcloud tasks queues create QUEUE_NAME \
--log-sampling-ratio = 1 .0 \
--location = REGION
Replace the following:
QUEUE_NAME : a name for your Cloud Tasks
queue
REGION : the
supported region you deployed your service or app
in
Wait for the queue to initialize and then verify that it was created
successfully.
gcloud tasks queues describe QUEUE_NAME \
--location = REGION
The output should be similar to the following:
name: projects/ PROJECT_ID /locations/ LOCATION_ID /queues/ QUEUE_NAME
rateLimits:
maxBurstSize: 100
maxConcurrentDispatches: 1000
maxDispatchesPerSecond: 500.0
retryConfig:
maxAttempts: 100
maxBackoff: 3600s
maxDoublings: 16
minBackoff: 0.100s
state: RUNNING
Add a task to the Cloud Tasks queue
Use the
gcloud tasks create-http-task
command to create a task that targets an HTTP endpoint and add the task to your
queue.
Create a task, add it to the queue you created, and deliver that task to an
HTTP endpoint.
gcloud tasks create-http-task \
--queue = QUEUE_NAME \
--url = URL_PATH \
--method = GET \
--location = REGION \
--project = PROJECT_ID
Replace URL_PATH with the full URL path that the
request will be sent to. The path must begin with either http:// or
https:// —for example: https://www.example.com .
Note: To target a Cloud Run service or function, use its
default run.app URL .
Verify that the task was executed successfully by reading the logs.
gcloud logging read --limit = 3
The logs should look similar to the following:
jsonPayload:
'@type': type.googleapis.com/google.cloud.tasks.logging.v1.TaskActivityLog
task: projects/ PROJECT_ID /locations/ REGION /queues/ QUEUE_NAME /tasks/ TASK_ID
taskCreationLog:
scheduleTime: '2024-07-04T19:00:27.801837Z'
status: OK
targetAddress: GET https://www.example.com/
targetType: HTTP
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, delete the Google Cloud project with the
resources.
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
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
Alternatively, you can delete the Cloud Tasks queue:
gcloud tasks queues delete QUEUE_NAME \
--location = REGION
What's next
Manage queues and tasks
Create Cloud Tasks queues
RPC API reference
REST API reference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
