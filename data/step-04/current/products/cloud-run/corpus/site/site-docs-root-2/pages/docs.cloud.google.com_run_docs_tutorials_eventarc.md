---
title: "Use Eventarc to receive events from Cloud Storage \_|\_ Cloud Run \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/tutorials/eventarc
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run
source_metadata:
  url: https://docs.cloud.google.com/run/docs/tutorials/eventarc
  title: "Use Eventarc to receive events from Cloud Storage \_|\_ Cloud Run \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Guides
Send feedback
Use Eventarc to receive events from Cloud Storage
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to deploy a containerized application using an
authenticated Cloud Run service that receives events through
Eventarc.
Note: All Cloud Run services are deployed privately by
default, which means that they can't be accessed without providing
authentication credentials in the request. For projects with
domain restricted sharing organization policies , use an authenticated
Cloud Run target service rather than one that allows
public (unauthenticated) access .
By specifying filters for an Eventarc trigger, you can
configure the routing of events, including the event source and the event
target. In this case, an update to a Cloud Storage bucket triggers
the event and a request is sent to your Cloud Run service in
the form of an of HTTP request.
Objectives
In this tutorial, you will:
Create a Cloud Storage bucket to be the event source.
Deploy an event receiver service to Cloud Run that
requires authenticated invocations.
Create an Eventarc trigger that routes events from
the Cloud Storage bucket to the Cloud Run
service.
Generate an event by uploading a file to the Cloud Storage bucket
and view the event in the Cloud Run logs.
Costs
In this document, you use the following billable components of Google Cloud:
Artifact Registry
Cloud Build
Cloud Run
Cloud Storage
Eventarc
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
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
Verify that billing is enabled for your Google Cloud project .
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
If you are not using Cloud Shell, update the Google Cloud CLI
components and log in using your account:
gcloud components update
gcloud auth login
Enable the APIs:
gcloud services enable artifactregistry.googleapis.com \
cloudbuild.googleapis.com \
eventarc.googleapis.com \
run.googleapis.com \
storage.googleapis.com
Set the configuration variables used in this tutorial:
export REGION = us-central1
gcloud config set run/region ${ REGION }
gcloud config set run/platform managed
gcloud config set eventarc/location ${ REGION }
You or your administrator must grant the deployer account, the trigger
identity, and optionally, the Pub/Sub service agent the following
IAM roles.
Required roles for the deployer account
If you are the project creator, you are granted the
basic Owner role
( roles/owner ). By default, this Identity and Access Management (IAM) role
includes the permissions necessary for full access to most Google Cloud
resources and you can skip this step.
If you are not the project creator, required permissions must be granted on
the project to the appropriate principal . For example, a principal can be
a Google Account (for end users) or a service account (for applications and
compute workloads). For more information, see the
Roles and permissions page
for your event destination.
To get the permissions that
you need to complete this tutorial,
ask your administrator to grant you the
following IAM roles on your project:
Cloud Build Editor ( roles/cloudbuild.builds.editor )
Cloud Run Admin ( roles/run.admin )
Cloud Run Source Developer ( roles/run.sourceDeveloper )
Eventarc Admin ( roles/eventarc.admin )
Logs View Accessor ( roles/logging.viewAccessor )
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Service Account Admin ( roles/iam.serviceAccountAdmin )
Service Account User ( roles/iam.serviceAccountUser )
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
Storage Admin ( roles/storage.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Note that by default,
Cloud Build
permissions include permissions to upload and download Artifact Registry
artifacts .
Required roles for the trigger identity
Make note of the Compute Engine
default service account as you will you attach it to an Eventarc trigger to represent
the identity of the trigger for testing purposes. This service account is automatically created
after enabling or using a Google Cloud service that uses Compute Engine, and with the
following email format:
PROJECT_NUMBER -compute@developer.gserviceaccount.com
Replace PROJECT_NUMBER with your Google Cloud
project number. You can find your project number on the
Welcome
page of the Google Cloud console or by running the following command:
gcloud projects describe PROJECT_ID --format = 'value(projectNumber)'
For production environments, we strongly recommend
creating a new service account
and granting it one or more IAM roles that contain the
minimum permissions required
and follow the principle of least privilege .
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
By default, Cloud Run services are only callable by Project
Owners, Project Editors, and Cloud Run Admins and Invokers.
You can
control
access on a per-service basis ; however, for testing purposes, grant the
Cloud Run
Invoker role ( run.invoker ) on the Google Cloud project to the
Compute Engine service account. This grants the role on all
Cloud Run services and jobs in a project.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = roles/run.invoker
Note that if you create a trigger for an authenticated
Cloud Run service without granting the Cloud Run
Invoker role, the trigger is created successfully and is active. However, the
trigger will not work as expected and a message similar to the following appears
in the logs:
The request was not authenticated. Either allow
unauthenticated invocations or set the proper Authorization header.
Grant the
Eventarc
Event Receiver role ( roles/eventarc.eventReceiver ) on the
project to the Compute Engine default service account so that
the Eventarc trigger can receive events from event providers.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = roles/eventarc.eventReceiver
Optional role for the Pub/Sub service agent
If you enabled the Cloud Pub/Sub service agent on or before April
8, 2021, to support authenticated Pub/Sub push requests, grant
the Service
Account Token Creator role ( roles/iam.serviceAccountTokenCreator )
to the service agent. Otherwise, this role is granted by default:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com \
--role = roles/iam.serviceAccountTokenCreator
Create an Artifact Registry standard repository
Create an Artifact Registry standard repository to store your container image:
gcloud artifacts repositories create REPOSITORY \
--repository-format = docker \
--location = $REGION
Replace REPOSITORY with a unique name for the
repository.
Create a Cloud Storage bucket
Create a Cloud Storage bucket to use as the event source:
gcloud storage buckets create gs:// PROJECT_ID -bucket/ --location = us-central1
Note: The Cloud Storage bucket must reside in the same
Google Cloud project and region or multi-region
as the Eventarc trigger.
After the event source is created, you can deploy the event receiver service on
Cloud Run.
Deploy an event receiver to Cloud Run
Deploy a Cloud Run service that receives and logs
events.
Clone the GitHub repository:
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
C#
git clone https://github.com/GoogleCloudPlatform/dotnet-docs-samples.git
Alternatively, you can
download the sample
as a zip file and extract it.
Change to the directory that contains the Cloud Run
sample code:
Node.js
cd nodejs-docs-samples/eventarc/audit-storage/
Python
cd python-docs-samples/eventarc/audit-storage/
Go
cd golang-samples/eventarc/audit_storage/
Java
cd java-docs-samples/eventarc/audit-storage/
C#
cd dotnet-docs-samples/eventarc/audit-storage/
Build the container for the Cloud Run service:
export PROJECT_ID = $( gcloud config get-value project )
export SERVICE_NAME = helloworld-events
gcloud builds submit --tag $REGION -docker.pkg.dev/ ${ PROJECT_ID } / REPOSITORY / ${ SERVICE_NAME } :v1
Deploy the container image to Cloud Run:
gcloud run deploy ${ SERVICE_NAME } \
--image $REGION -docker.pkg.dev/ ${ PROJECT_ID } / REPOSITORY / ${ SERVICE_NAME } :v1
At the Allow public access to
helloworld-events (y/N)? prompt, respond n for "No".
Note: Based on the required level of network access to the Cloud Run
service, you can also set the
ingress flag .
When you see the Cloud Run service URL, the deployment is
complete.
Create an Eventarc trigger
The Eventarc trigger sends events from the
Cloud Storage bucket to the helloworld-events
Cloud Run service. The service requires authentication,
and the event should be triggered by a caller that has a service account with
the required IAM roles and permissions
to use the resource.
Create a trigger that filters Cloud Storage events:
gcloud eventarc triggers create ${ SERVICE_NAME } \
--destination-run-service = ${ SERVICE_NAME } \
--destination-run-region = ${ REGION } \
--location = ${ REGION } \
--event-filters = "type=google.cloud.storage.object.v1.finalized" \
--event-filters = "bucket= PROJECT_ID -bucket" \
--service-account = PROJECT_NUMBER -compute@developer.gserviceaccount.com
This creates a trigger called helloworld-events .
Note that when creating an Eventarc trigger for the first
time in a Google Cloud project, there might be a delay in provisioning
the Eventarc service agent. This issue can usually be resolved
by attempting to create the trigger again. For more information, see
Permission denied errors .
Confirm that the trigger was successfully created. Note that although your
trigger is created immediately, it can take up to two minutes for a trigger
to be fully functional.
gcloud eventarc triggers list --location = ${ REGION }
The output should be similar to the following:
NAME: helloworld-events
TYPE: google.cloud.storage.object.v1.finalized
DESTINATION: Cloud Run service: helloworld-events
ACTIVE: Yes
Generate and view an event
Upload a text file to the Cloud Storage bucket to generate an event
which is routed to the Cloud Run service. The
Cloud Run service logs the event in the service logs.
To generate an event:
Upload a text file to Cloud Storage:
echo "Hello World" > random.txt
gcloud storage cp random.txt gs:// PROJECT_ID -bucket/random.txt
The upload generates an event and the Cloud Run
service logs the event's message.
To view the log entry:
Filter the log entries and return the output in JSON format:
gcloud logging read "resource.labels.service_name=helloworld-events AND textPayload:random.txt" --format=json
Look for a log entry similar to:
"textPayload": "Detected change in Cloud Storage bucket: objects/random.txt"
Note: If you do not see a log entry, wait a few minutes and retry the
gcloud logging read command. The trigger can take up to two minutes
after being created to start filtering events.
Logs might take a few moments to appear. If you don't see them immediately,
check again after a minute.
Success: You deployed a containerized application using an authenticated Cloud Run service that receives events through Eventarc.
Clean up
If you created a new project for this tutorial, delete the project .
If you used an existing project and want to keep it without the changes added
in this tutorial, delete the resources created for the tutorial .
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
Delete the Cloud Run service you deployed in this tutorial:
gcloud run services delete SERVICE_NAME
Where SERVICE_NAME is your chosen service name.
You can also delete Cloud Run services from the
Google Cloud console .
Remove any gcloud CLI default configurations you added during
the tutorial setup.
For example:
gcloud config unset run/region
or
gcloud config unset project
Delete other Google Cloud resources created in this tutorial:
Delete the Eventarc trigger:
gcloud eventarc triggers delete TRIGGER_NAME
Replace TRIGGER_NAME with the name of your
trigger.
Delete your container image
What's next
Create Eventarc triggers for other event types
Build containers
Develop Cloud Run services
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
