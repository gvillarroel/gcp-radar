---
title: "Quickstart: Receive events using Cloud Audit Logs (Google Cloud CLI) \_|\_\
  \ Eventarc Standard \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/eventarc/standard/docs/gke/quickstart-cal
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/eventarc/standard/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/eventarc/standard/docs/gke/quickstart-cal
  title: "Quickstart: Receive events using Cloud Audit Logs (Google Cloud CLI) \_\
    |\_ Eventarc Standard \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Eventarc
Standard
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Receive events using Cloud Audit Logs (gcloud CLI)
Standard
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This quickstart shows you how to set up a Google Kubernetes Engine (GKE) service
as a destination to receive events from Cloud Storage using
Eventarc.
Note: Support for GKE as an Eventarc
destination includes the public endpoints of private and public services running
in a GKE cluster.
In this quickstart, you will:
Set up a service account so that Eventarc can pull events
and forward it to the target.
Create a Cloud Storage bucket to be the event source.
Create a GKE cluster.
Initialize GKE destinations in Eventarc.
Deploy a GKE service that receives events.
Create an Eventarc trigger that
sends events from Cloud Storage to the GKE
service.
Upload a file to the Cloud Storage bucket to generate an event
and view the event in the GKE pod logs.
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
Update Google Cloud CLI components:
gcloud components update
Enable the Eventarc, Resource Manager, and Google Kubernetes Engine
APIs:
gcloud services enable eventarc.googleapis.com \
cloudresourcemanager.googleapis.com \
container.googleapis.com
Set the configuration variables used in this quickstart:
PROJECT_ID = $( gcloud config get-value project )
TRIGGER_SA = eventarc-sa
CLUSTER_NAME = events-cluster
SERVICE_NAME = hello-gke
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
Required permissions
To get the permissions that
you need to complete this quickstart,
ask your administrator to grant you the
following IAM roles on your project:
Eventarc Admin ( roles/eventarc.admin )
Kubernetes Engine Admin ( roles/container.admin )
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
Grant the
Pub/Sub
Subscriber role ( roles/pubsub.subscriber ) on the
project to the Compute Engine default service account so that
the Eventarc trigger can pull events from Pub/Sub.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = roles/pubsub.subscriber
Grant the
Eventarc
Event Receiver role ( roles/eventarc.eventReceiver ) on the
project to the Compute Engine default service account so that
the Eventarc trigger can receive events from event providers.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount: PROJECT_NUMBER -compute@developer.gserviceaccount.com \
--role = roles/eventarc.eventReceiver
If you enabled the Cloud Pub/Sub service agent on or before April
8, 2021, to support authenticated Pub/Sub push requests, grant
the Service
Account Token Creator role ( roles/iam.serviceAccountTokenCreator )
to the service agent. Otherwise, this role is granted by default:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com \
--role = roles/iam.serviceAccountTokenCreator
For Google Cloud Storage, enable log types for these services:
Admin Read , Data Read , and Data Write :
Read your project's IAM policy and store it in a file:
gcloud projects get-iam-policy PROJECT_ID > /tmp/policy.yaml
Edit your policy in `/tmp/policy.yaml`, adding or changing *only* the Data
Access audit logs configuration.
Caution: You must preserve the `bindings:` and `etag:` sections without
changes. Failure to do so might cause your project to become unusable.
auditConfigs :
- auditLogConfigs :
- logType : ADMIN_READ
- logType : DATA_WRITE
- logType : DATA_READ
service : storage.googleapis.com
bindings :
- members :
- user: EMAIL_ADDRESS
role : roles/owner
etag : BwW_bHKTV5U=
version : 1
Replace EMAIL_ADDRESS with your email address.
Write your new IAM policy:
gcloud projects set-iam-policy PROJECT_ID /tmp/policy.yaml
If the preceding command reports a conflict with another change, then
repeat these steps, starting with reading the project's IAM policy.
Create a Cloud Storage bucket
This quickstart uses Cloud Storage as the event source. Create a
Cloud Storage bucket:
gcloud storage buckets create gs://events-quickstart- $( gcloud config get-value project ) --location = us-central1
After the event source is created, you can deploy the event receiver service on
GKE.
Create a GKE cluster
A GKE cluster
consists of at least one cluster control plane machine and multiple worker
machines called nodes. Nodes are
Compute Engine virtual machine (VM) instances
that run the Kubernetes processes necessary to make them part of the cluster.
You deploy applications to clusters, and the applications run on the nodes.
Create an Autopilot cluster named events-cluster :
gcloud container clusters create-auto $CLUSTER_NAME --region us-central1
It might take several minutes for the creation of the cluster to complete. Once
the cluster is created, the output should be similar to the following:
Creating cluster events-cluster...done.
Created [https://container.googleapis.com/v1/projects/ MY_PROJECT /zones/us-central1/clusters/events-cluster].
[...]
STATUS: RUNNING
This creates a GKE cluster named events-cluster in a project
with a Google Cloud project ID of MY_PROJECT .
Enable GKE destinations
For each trigger that targets a GKE service,
Eventarc creates an event forwarder component that pulls events
from Pub/Sub and forwards it to the target. To create the
component and manage resources in the GKE cluster,
grant permissions to the Eventarc service agent:
Enable GKE destinations for Eventarc:
gcloud eventarc gke-destinations init
At the prompt to bind the required roles, enter y .
The following roles are bound to the service account:
compute.viewer
container.developer
iam.serviceAccountAdmin
Create a GKE service destination
Deploy a GKE service that will receive and log events using a
prebuilt image, us-docker.pkg.dev/cloudrun/container/hello :
Kubernetes uses a YAML file called
kubeconfig
to store cluster authentication information for kubectl . Update the
kubeconfig file with credentials and endpoint information to
point kubectl at the GKE cluster:
gcloud container clusters get-credentials $CLUSTER_NAME \
--region us-central1
Create a Kubernetes deployment:
kubectl create deployment $SERVICE_NAME \
--image = us-docker.pkg.dev/cloudrun/container/hello
Expose it as a Kubernetes service:
kubectl expose deployment $SERVICE_NAME \
--type ClusterIP --port 80 --target-port 8080
Create an Eventarc trigger
When you upload a file to Cloud Storage, the
Eventarc trigger sends events from Cloud Storage to
the hello-gke GKE service.
Create a Cloud Audit Logs trigger:
gcloud eventarc triggers create my-gke-trigger \
--location = "us-central1" \
--destination-gke-cluster = "events-cluster" \
--destination-gke-location = "us-central1" \
--destination-gke-namespace = "default" \
--destination-gke-service = "hello-gke" \
--destination-gke-path = "/" \
--event-filters = "type=google.cloud.audit.log.v1.written" \
--event-filters = "serviceName=storage.googleapis.com" \
--event-filters = "methodName=storage.objects.create" \
--service-account = " PROJECT_NUMBER -compute@developer.gserviceaccount.com"
This creates a trigger called my-gke-trigger .
Confirm that the trigger was successfully created:
gcloud eventarc triggers list
Note: It can take up to two minutes for the trigger to be fully functional.
The output should be similar to the following:
NAME: my-gke-trigger
TYPE: google.cloud.audit.log.v1.written
DESTINATION: GKE: hello-gke
ACTIVE: By 20:39:43
LOCATION: us-central1
Generate and view an event
Upload a text file to Cloud Storage to generate an event and
trigger the GKE service. You can then view the
event's message in the pod logs.
Upload a text file to Cloud Storage:
echo "Hello World" > random.txt
gcloud storage cp random.txt gs://events-quickstart- $( gcloud config get-value project ) /random.txt
The upload generates an event and the GKE pod logs the
event's message.
To view the event message:
Find the pod ID:
kubectl get pods
The output should be similar to the following:
NAME READY STATUS RESTARTS AGE
hello-gke-645964f578-2mjjt 1/1 Running 0 35s
Copy the NAME of the pod to use in the next step.
Check the logs of the pod:
kubectl logs NAME
Replace NAME with the name of the pod you copied.
Look for a log entry similar to:
2022/02/24 22:23:49 Hello from Cloud Run! The container started successfully and is listening for HTTP requests on $PORT
{"severity":"INFO","eventType":"google.cloud.audit.log.v1.written","message":"Received event of type google.cloud.audit.log.v1.written. [...]}
Clean up
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created.
You can:
Delete the Cloud Storage bucket .
Delete the Eventarc trigger .
Delete the GKE cluster .
Alternatively, you can delete your Google Cloud project to avoid incurring charges.
Deleting your Google Cloud project stops billing for all the resources used
within that project.
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
Delete a Google Cloud project:
gcloud projects delete PROJECT_ID
If you plan to explore multiple tutorials and quickstarts, reusing projects can
help you avoid exceeding project quota limits.
What's next
Receive events using Pub/Sub (Google Cloud CLI)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
