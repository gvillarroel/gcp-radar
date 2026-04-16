---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:58.537Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "Workflow triggers"
feature_slug: "workflow-triggers"
latest_feature_date: "2023-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform"
  - "https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-storage"
  - "https://docs.cloud.google.com/eventarc/docs/retry-events"
  - "https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers"
keywords:
  - "workflow"
  - "triggers"
  - "eventarc"
  - "can"
  - "create"
  - "for"
  - "direct"
  - "events"
---

# Workflow triggers

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

Eventarc can create triggers for direct events from Workflows; Eventarc can create triggers for direct events from Workflows in Preview.

## Extended Definition

Eventarc can create triggers for direct events from Workflows; Eventarc can create triggers for direct events from Workflows in Preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform)
- [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-storage](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-storage)
- [https://docs.cloud.google.com/eventarc/docs/retry-events](https://docs.cloud.google.com/eventarc/docs/retry-events)
- [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers)

## Supporting Pages

### "Create a trigger using Terraform \_|\_ Eventarc Standard \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform)
- Source ID: `site-docs-root`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify the creation of resources Cloud Run Confirm that the service has been created: gcloud run services list --region us-central1 Confirm that the trigger has been created: gcloud eventarc triggers list --location us-central1 The output should be similar to the following: NAME: trigger-storage-cloudrun-tf TYPE: google.cloud.storage.object.v1.finalized DESTINATION: Cloud Run service: hello-events ACTIVE: Yes LOCATION: us-central1 GKE Confirm that the service has been created: kubectl get service hello-gke Confirm that the trigger has been created: gcloud eventarc triggers list --location us-central1 The output should be similar to the following: NAME: trigger-storage-gke-tf TYPE: google.cloud.storage.object.v1.finalized DESTINATION: GKE: hello-gke ACTIVE: Yes LOCATION: us-central1 Workflows Confirm that the workflow has been created: gcloud workflows list --location us-central1 Confirm that the Eventarc trigger has been created: gcloud eventarc triggers list --location us-central1 The output should be similar to the following: NAME: trigger-storage-workflows-tf TYPE: google.cloud.storage.object.v1.finalized DESTINATION: Workflows: storage-workflow-tf ACTIVE: Yes LOCATION: us-central1 Generate and view an event You can generate an event and confirm that the Eventarc trigger is working as expected.
- Cloud Run Cloud Storage bucket names must be globally unique resource "random id" "bucket name suffix" { byte length = 4 } Create a Cloud Storage bucket resource "google storage bucket" "default" { name = "trigger-cloudrun-${data.google project.project.name}-${random id.bucket name suffix.hex}" location = google cloud run v2 service.default.location force destroy = true uniform bucket level access = true } Grant the Cloud Storage service account permission to publish pub/sub topics data "google storage project service account" "gcs account" {} resource "google project iam member" "pubsubpublisher" { project = data.google project.project.id role = "roles/pubsub.publisher" member = "serviceAccount:${data.google storage project service account.gcs account.email address}" depends on = [ data.google storage project service account.gcs account ] } GKE Cloud Storage bucket names must be globally unique resource "random id" "bucket name suffix" { byte length = 4 } Create a Cloud Storage bucket resource "google storage bucket" "default" { name = "trigger-gke-${data.google project.project.name}-${random id.bucket name suffix.hex}" location = "us-central1" force destroy = true uniform bucket level access = true } Grant the Cloud Storage service account permission to publish pub/sub topics data "google storage project service account" "gcs account" {} resource "google project iam member" "pubsubpublisher" { project = data.google project.project.id role = "roles/pubsub.publisher" member = "serviceAccount:${data.google storage project service account.gcs account.email address}" } Workflows Cloud Storage bucket names must be globally unique resource "random id" "bucket name suffix" { byte length = 4 } Create a Cloud Storage bucket resource "google storage bucket" "default" { name = "trigger-workflows-${data.google project.project.name}-${random id.bucket name suffix.hex}" location = google workflows workflow.default.region force destroy = true uniform bucket level access = true } Grant the Cloud Storage service account permission to publish Pub/Sub topics data "google storage project service account" "gcs account" {} resource "google project iam member" "pubsubpublisher" { project = data.google project.project.id role = "roles/pubsub.publisher" member = "serviceAccount:${data.google storage project service account.gcs account.email address}" } Create an event receiver to be the event target Create an event receiver using one of the following Terraform resources: google cloud run v2 service google container cluster google workflows workflow Cloud Run Create a Cloud Run service as an event destination for the Eventarc trigger: Deploy Cloud Run service resource "google cloud run v2 service" "default" { name = "hello-events" location = "us-central1" deletion protection = false # set to "true" in production template { containers { This container will log received events image = "us-docker.pkg.dev/cloudrun/container/hello" } service account = google service account.default.email } depends on = [ google project service.run ] } GKE To simplify this guide, create a Google Kubernetes Engine service as an event destination outside of Terraform, in between applying Terraform configurations.
- This identity is created with: gcloud beta services identity create --service eventarc.googleapis.com This local variable is used for convenience locals { eventarc sa = "serviceAccount:service-${data.google project.project.number}@gcp-sa-eventarc.iam.gserviceaccount.com" } resource "google project iam member" "computeViewer" { project = data.google project.project.id role = "roles/compute.viewer" member = local.eventarc sa } resource "google project iam member" "containerDeveloper" { project = data.google project.project.id role = "roles/container.developer" member = local.eventarc sa } resource "google project iam member" "serviceAccountAdmin" { project = data.google project.project.id role = "roles/iam.serviceAccountAdmin" member = local.eventarc sa } Create the service account: Create a service account to be used by GKE trigger resource "google service account" "eventarc gke trigger sa" { account id = "eventarc-gke-trigger-sa" display name = "Evenarc GKE Trigger Service Account" } Grant permission to receive Eventarc events resource "google project iam member" "eventreceiver" { project = data.google project.project.id role = "roles/eventarc.eventReceiver" member = "serviceAccount:${google service account.eventarc gke trigger sa.email}" } Grant permission to subscribe to Pub/Sub topics resource "google project iam member" "pubsubscriber" { project = data.google project.project.id role = "roles/pubsub.subscriber" member = "serviceAccount:${google service account.eventarc gke trigger sa.email}" } Workflows Used to retrieve project information later data "google project" "project" {} Create a service account for Eventarc trigger and Workflows resource "google service account" "eventarc" { account id = "eventarc-workflows-sa" display name = "Eventarc Workflows Service Account" } Grant permission to invoke Workflows resource "google project iam member" "workflowsinvoker" { project = data.google project.project.id role = "roles/workflows.invoker" member = "serviceAccount:${google service account.eventarc.email}" } Grant permission to receive events resource "google project iam member" "eventreceiver" { project = data.google project.project.id role = "roles/eventarc.eventReceiver" member = "serviceAccount:${google service account.eventarc.email}" } Grant permission to write logs resource "google project iam member" "logwriter" { project = data.google project.project.id role = "roles/logging.logWriter" member = "serviceAccount:${google service account.eventarc.email}" } The Pub/Sub service agent is automatically created when the Pub/Sub API is enabled.
- Make sure the service is running: kubectl get svc The output should be similar to the following: NAME TYPE CLUSTER-IP EXTERNAL-IP PORT ( S ) AGE hello-gke ClusterIP 34 .118.230.123 <none> 80 /TCP 4m46s kubernetes ClusterIP 34 .118.224.1 <none> 443 /TCP 14m Workflows Deploy a workflow that executes when an object is updated in the Cloud Storage bucket: Create a workflow resource "google workflows workflow" "default" { name = "storage-workflow-tf" region = "us-central1" description = "Workflow that returns information about storage events" service account = google service account.eventarc.email deletion protection = false # set to "true" in production Note that $$ is needed for Terraform source contents = << EOF main : params : [ event ] steps : - log event : call : sys.log args : text : $$ { event } severity : INFO - gather data : assign : - bucket : $$ { event.data.bucket } - name : $$ { event.data.name } - message : $$ { "Received event " + event.type + " - " + bucket + ", " + name } - return data : return : $$ { message } EOF depends on = [ google project service.workflows ] } Define an Eventarc trigger An Eventarc trigger routes events from an event provider to an event destination.

### "Trigger Workflows with direct events from Cloud Storage (gcloud CLI) \_\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-storage](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-storage)
- Source ID: `site-iam-reference`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant the Eventarc Event Receiver role ( roles/eventarc.eventReceiver ) on the project to the Compute Engine default service account so that the Eventarc trigger can receive events from event providers. gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/eventarc.eventReceiver Grant the Workflows Invoker role ( roles/workflows.invoker ) on the project to the Compute Engine default service account so that the account has permission to trigger your workflow execution. gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/workflows.invoker Grant the Logging Logs Writer role ( roles/logging.logWriter ) on the project to the Compute Engine default service account so that the workflow can send logs to Cloud Logging. gcloud projects add-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = roles/logging.logWriter Before creating a trigger for direct events from Cloud Storage, grant the Pub/Sub Publisher role ( roles/pubsub.publisher ) to the Cloud Storage service agent: SERVICE ACCOUNT = " $( gcloud storage service-agent --project = PROJECT ID ) " gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount: ${ SERVICE ACCOUNT } " \ --role = 'roles/pubsub.publisher' If you enabled the Cloud Pub/Sub service agent on or before April 8, 2021, to support authenticated Pub/Sub push requests, grant the Service Account Token Creator role ( roles/iam.serviceAccountTokenCreator ) to the service agent.
- To confirm storage-events-trigger was successfully created, run: gcloud eventarc triggers describe storage-events-trigger --location = ${ TRIGGER LOCATION } The output should be similar to the following listing the time of creation and trigger location: createTime: '2021-10-14T15:15:43.872360951Z' [...] name: projects/ PROJECT ID /locations/us-central1/triggers/storage-events-trigger Note: Although your trigger is created immediately, it can take up to two minutes for a trigger to be fully functional.
- Create a trigger that filters Cloud Storage events: gcloud eventarc triggers create storage-events-trigger \ --destination-workflow = ${ MY WORKFLOW } \ --event-filters = "type=google.cloud.storage.object.v1.finalized" \ --event-filters = "bucket= ${ PROJECT ID } -bucket" \ --service-account = " PROJECT NUMBER -compute@developer.gserviceaccount.com" This creates a trigger called storage-events-trigger .
- Delete your storage bucket: gcloud storage rm gs:// ${ PROJECT ID } -bucket/ --recursive Delete the trigger created in this tutorial: gcloud eventarc triggers delete storage-events-trigger Alternatively, you can delete your Google Cloud project to avoid incurring charges.

### Retry events \_|\_ Eventarc Standard \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/eventarc/docs/retry-events](https://docs.cloud.google.com/eventarc/docs/retry-events)
- Source ID: `site-docs-root-2`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How retries work When you create an Eventarc trigger, the Pub/Sub transport topic and subscription are automatically created for you. (Events from Pub/Sub sources can use an existing Pub/Sub topic.) Any subscription ID automatically created by Eventarc will have a format that begins with eventarc- REGION - .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://eventarc.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /triggers/ TRIGGER NAME " Select-Object -Expand Content If successful, the response body contains an instance of Trigger similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /triggers/ TRIGGER NAME ", "uid": "d700773a-698b-47b2-a712-2ee10b690062", "createTime": "2022-12-06T22:44:04.744001514Z", "updateTime": "2022-12-06T22:44:09.116459550Z", "eventFilters": [ { "attribute": "type", "value": "google.cloud.pubsub.topic.v1.messagePublished" } ], "serviceAccount": " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com", "destination": { "workflow": "projects/ PROJECT ID /locations/ LOCATION /workflows/ WORKFLOW NAME " }, "transport": { "pubsub": { "topic": "projects/ PROJECT ID /topics/ TOPIC ID ", "subscription": "projects/ PROJECT ID /subscriptions/ SUBSCRIPTION ID " } } } Update the subscription To update the Pub/Sub subscription retry policy associated with your Eventarc trigger, do the following: Console In the Google Cloud console, go to the Eventarc Triggers page.
- This command returns information about the trigger that is similar to the following and that includes the subscription ID: createTime: '2023-03-16T13:40:44.889670204Z' destination: cloudRun: path: / region: us-central1 service: hello eventDataContentType: application/protobuf eventFilters: ... transport: pubsub: subscription: projects/ PROJECT ID /subscriptions/ SUBSCRIPTION ID topic: projects/ PROJECT ID /topics/ TOPIC ID Terraform To describe a google eventarc trigger Terraform resource, you can use the state show command. terraform state show google eventarc trigger.default The state show command returns information about the trigger that includes the subscription ID.
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "subscription": { "retryPolicy": { "minimumBackoff": " MIN RETRY DELAY s", "maximumBackoff": " MAX RETRY DELAY s" } }, "updateMask": "retry policy.maximum backoff,retry policy.minimum backoff" } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://pubsub.googleapis.com/v1/projects/ PROJECT ID /subscriptions/ SUBSCRIPTION ID " Select-Object -Expand Content If successful, the response body contains an instance of Subscription similar to the following: { "name": "projects/ PROJECT ID /subscriptions/ SUBSCRIPTION ID ", "topic": "projects/ PROJECT ID /topics/ TOPIC ID ", ... "retryPolicy": { "minimumBackoff": " MIN RETRY DELAY s", "maximumBackoff": " MAX RETRY DELAY s" }, "state": "ACTIVE" } Other retry considerations You should be aware of the following considerations when handling processing failures or forwarding undelivered messages.

### "Migrate Pub/Sub triggers from Events for Cloud Run for Anthos to Eventarc\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers](https://docs.cloud.google.com/eventarc/standard/docs/gke/migrating-event-triggers)
- Source ID: `site-iam-reference`
- Final score: 247
- Re-rank relevance: N/A

Evidence snippets:
- All the arguments, including the destination service, cluster, and topic ID, should match that of the existing event trigger. gcloud eventarc triggers create EVENTARC TRIGGER NAME \ --event-filters = "type=google.cloud.pubsub.topic.v1.messagePublished" \ --location LOCATION \ --destination-gke-service = DESTINATION SERVICE \ --destination-gke-cluster = CLUSTER NAME \ --destination-gke-location = CLUSTER LOCATION \ --destination-gke-namespace = EVENTS NAMESPACE \ --destination-gke-path = / \ --service-account = $TRIGGER GSA @ $PROJECT ID .iam.gserviceaccount.com \ --transport-topic = projects/ PROJECT ID /topics/ TOPIC ID Replace EVENTARC TRIGGER NAME with a name for the new Eventarc trigger and TOPIC ID with the Pub/Sub topic ID that you retrieved previously.
- Confirm that the trigger was successfully created: gcloud eventarc triggers list The output is similar to the following: NAME TYPE DESTINATION RUN SERVICE DESTINATION RUN PATH ACTIVE eventarc-trigger-name google.cloud.pubsub.topic.v1.messagePublished Yes Test the migration and verifying the output Caution: Before moving to production, verify and validate that events are being delivered and received as expected by your GKE service.
- The output is similar to the following: topic: topic-id type: google.cloud.pubsub.topic.v1.messagePublished name: cloud-run-service-name namespace: events Create an Eventarc trigger to replace the existing trigger Before creating the Eventarc trigger, set up a user-managed service account and grant it specific roles so that Eventarc can manage events for GKE destinations.
- Eventarc event: ☁️ cloudevents.Event Validation: valid Context Attributes, specversion: 1.0 type: google.cloud.pubsub.topic.v1.messagePublished source: //pubsub.googleapis.com/projects/project-id/topics/topic-name id: 2759155988927083 time: 2021-07-22T17:47:19.964Z datacontenttype: application/json Data, { "subscription": "projects/project-id/subscriptions/eventarc-us-central1-eventarc-trigger-name-sub-567", "message": { "data": "V29ybGQ=", "messageId": "2759155988927083", "publishTime": "2021-07-22T17:47:19.964Z" } } Knative serving event: ☁️ cloudevents.Event Validation: valid Context Attributes, specversion: 1.0 type: google.cloud.pubsub.topic.v1.messagePublished source: //pubsub.googleapis.com/projects/project-id/topics/topic-name id: 2759155988927083 time: 2021-07-22T17:47:19.964Z dataschema: https://raw.githubusercontent.com/googleapis/google-cloudevents/master/proto/google/events/cloud/pubsub/v1/data.proto datacontenttype: application/json Extensions, knativearrivaltime: 2021-07-22T17:47:20.723302362Z knsourcetrigger: link0.09767362059083662 traceparent: 00-f3cc6d754d361a0e49e83e5973fa3565-b4a20ef4ecffe96b-00 Data, { "subscription": "cre-src events source-for-trigger-name 5ffa9638-8cab-4010-900a-2edb275d9eaf", "message": { "messageId": "2759155988927083", "data": "V29ybGQ=", "publishTime": "2021-07-22T17:47:19.964Z" } } Clean up after the migration After testing and verifying the migration of the trigger to Eventarc, you can delete the original event trigger.

