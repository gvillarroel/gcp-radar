---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:58.538Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "Workflow triggers within service perimeter"
feature_slug: "workflow-triggers-within-service-perimeter"
latest_feature_date: "2023-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls"
  - "https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal"
  - "https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub"
  - "https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform"
keywords:
  - "workflow"
  - "triggers"
  - "within"
  - "perimeter"
  - "eventarc"
  - "supports"
  - "triggering"
  - "using"
---

# Workflow triggers within service perimeter

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

Eventarc supports triggering a workflow within a service perimeter using VPC Service Controls.

## Extended Definition

Eventarc supports triggering a workflow within a service perimeter using VPC Service Controls.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls](https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls)
- [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal)
- [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub)
- [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform)

## Supporting Pages

### "Set up a service perimeter using VPC Service Controls \_|\_ Eventarc Standard\

- URL: [https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls](https://docs.cloud.google.com/eventarc/docs/using-vpc-service-controls)
- Source ID: `site-docs-root-2`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To access the Pub/Sub API and manage event triggers, the Eventarc API must be protected within the same VPC Service Controls service perimeter as the Pub/Sub API.
- Home Documentation Application development Eventarc Standard Guides Send feedback Set up a service perimeter using VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- Eventarc Standard In projects protected by a service perimeter, Eventarc Standard is bound by the same limitations as Pub/Sub: When routing events to Cloud Run destinations, you can only create new Pub/Sub push subscriptions when the push endpoints are set to Cloud Run services with default run.app URLs.
- When routing events to Workflows destinations for which the Pub/Sub push endpoint is set to a Workflows execution, you can only create new Pub/Sub push subscriptions through Eventarc.

### "Quickstart: Trigger Workflows using Cloud Audit Logs (Google Cloud CLI)\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-cal)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update gcloud components: gcloud components update Sign in using your account: gcloud auth login Enable the Compute Engine, Eventarc, Pub/Sub, and Workflows APIs. gcloud services enable \ compute.googleapis.com \ eventarc.googleapis.com \ pubsub.googleapis.com \ workflows.googleapis.com \ workflowexecutions.googleapis.com Set the configuration variables used in this quickstart: export WORKFLOW LOCATION = us-central1 export TRIGGER LOCATION = us-central1 export PROJECT ID = PROJECT ID gcloud config set project ${ PROJECT ID } gcloud config set workflows/location ${ WORKFLOW LOCATION } gcloud config set eventarc/location ${ TRIGGER LOCATION } If you are the project creator, you are granted the basic Owner role ( roles/owner ).
- Create a trigger that filters BigQuery events: gcloud eventarc triggers create events-cal-trigger \ --destination-workflow = ${ MY WORKFLOW } \ --destination-workflow-location = ${ WORKFLOW LOCATION } \ --event-filters = "type=google.cloud.audit.log.v1.written" \ --event-filters = "serviceName=bigquery.googleapis.com" \ --event-filters = "methodName=google.cloud.bigquery.v2.JobService.InsertJob" \ --service-account = " PROJECT NUMBER -compute@developer.gserviceaccount.com" This creates a trigger called events-cal-trigger .
- Trigger Workflows using Cloud Audit Logs (gcloud CLI) Standard This quickstart shows you how to execute a workflow using an Eventarc trigger that receives Cloud Audit Logs events from BigQuery.
- Create an Eventarc trigger To create an Eventarc trigger that routes events from BigQuery to a Workflows destination, run the gcloud eventarc triggers create command.

### "Quickstart: Trigger Workflows using Pub/Sub messages (Google Cloud CLI)\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub](https://docs.cloud.google.com/eventarc/standard/docs/workflows/quickstart-pubsub)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you created a trigger for a new Pub/Sub topic, find and set the Pub/Sub topic created, as an environment variable: export TOPIC ID = $( basename $( gcloud eventarc triggers describe events-pubsub-trigger --format = 'value(transport.pubsub.topic)' )) To trigger the workflow, send a message to the Pub/Sub topic: gcloud pubsub topics publish $TOPIC ID --message "Hello there" The generated event is passed as a runtime argument to the workflow which returns a "Hello there" message.
- Confirm that the trigger was successfully created: gcloud eventarc triggers describe events-pubsub-trigger --location = ${ TRIGGER LOCATION } The output should be similar to the following listing the time of creation and trigger location: createTime: '2021-10-14T15:15:43.872360951Z' [...] name: projects/ PROJECT ID /locations/us-central1/triggers/events-pubsub-trigger Generate and view an event Publish a message to the Pub/Sub topic to generate an event and trigger the workflow.
- Create a trigger to listen for Pub/Sub messages: New Pub/Sub topic gcloud eventarc triggers create events-pubsub-trigger \ --destination-workflow=${MY WORKFLOW} \ --destination-workflow-location=${WORKFLOW LOCATION} \ --event-filters="type=google.cloud.pubsub.topic.v1.messagePublished" \ --service-account=" PROJECT NUMBER -compute@developer.gserviceaccount.com" This creates a new Pub/Sub topic and a trigger for it called events-pubsub-trigger .
- Trigger Workflows using Pub/Sub messages (gcloud CLI) Standard This quickstart shows you how to execute a workflow using an Eventarc trigger that receives events using Pub/Sub.

### "Create a trigger using Terraform \_|\_ Eventarc Standard \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Standard This document describes how to use Terraform and the google eventarc trigger resource to create Eventarc triggers for the following Google Cloud destinations: Cloud Run Google Kubernetes Engine Workflows For more information about using Terraform, see the Terraform on Google Cloud documentation.
- Cloud Run Cloud Storage bucket names must be globally unique resource "random id" "bucket name suffix" { byte length = 4 } Create a Cloud Storage bucket resource "google storage bucket" "default" { name = "trigger-cloudrun-${data.google project.project.name}-${random id.bucket name suffix.hex}" location = google cloud run v2 service.default.location force destroy = true uniform bucket level access = true } Grant the Cloud Storage service account permission to publish pub/sub topics data "google storage project service account" "gcs account" {} resource "google project iam member" "pubsubpublisher" { project = data.google project.project.id role = "roles/pubsub.publisher" member = "serviceAccount:${data.google storage project service account.gcs account.email address}" depends on = [ data.google storage project service account.gcs account ] } GKE Cloud Storage bucket names must be globally unique resource "random id" "bucket name suffix" { byte length = 4 } Create a Cloud Storage bucket resource "google storage bucket" "default" { name = "trigger-gke-${data.google project.project.name}-${random id.bucket name suffix.hex}" location = "us-central1" force destroy = true uniform bucket level access = true } Grant the Cloud Storage service account permission to publish pub/sub topics data "google storage project service account" "gcs account" {} resource "google project iam member" "pubsubpublisher" { project = data.google project.project.id role = "roles/pubsub.publisher" member = "serviceAccount:${data.google storage project service account.gcs account.email address}" } Workflows Cloud Storage bucket names must be globally unique resource "random id" "bucket name suffix" { byte length = 4 } Create a Cloud Storage bucket resource "google storage bucket" "default" { name = "trigger-workflows-${data.google project.project.name}-${random id.bucket name suffix.hex}" location = google workflows workflow.default.region force destroy = true uniform bucket level access = true } Grant the Cloud Storage service account permission to publish Pub/Sub topics data "google storage project service account" "gcs account" {} resource "google project iam member" "pubsubpublisher" { project = data.google project.project.id role = "roles/pubsub.publisher" member = "serviceAccount:${data.google storage project service account.gcs account.email address}" } Create an event receiver to be the event target Create an event receiver using one of the following Terraform resources: google cloud run v2 service google container cluster google workflows workflow Cloud Run Create a Cloud Run service as an event destination for the Eventarc trigger: Deploy Cloud Run service resource "google cloud run v2 service" "default" { name = "hello-events" location = "us-central1" deletion protection = false # set to "true" in production template { containers { This container will log received events image = "us-docker.pkg.dev/cloudrun/container/hello" } service account = google service account.default.email } depends on = [ google project service.run ] } GKE To simplify this guide, create a Google Kubernetes Engine service as an event destination outside of Terraform, in between applying Terraform configurations.
- Verify the creation of resources Cloud Run Confirm that the service has been created: gcloud run services list --region us-central1 Confirm that the trigger has been created: gcloud eventarc triggers list --location us-central1 The output should be similar to the following: NAME: trigger-storage-cloudrun-tf TYPE: google.cloud.storage.object.v1.finalized DESTINATION: Cloud Run service: hello-events ACTIVE: Yes LOCATION: us-central1 GKE Confirm that the service has been created: kubectl get service hello-gke Confirm that the trigger has been created: gcloud eventarc triggers list --location us-central1 The output should be similar to the following: NAME: trigger-storage-gke-tf TYPE: google.cloud.storage.object.v1.finalized DESTINATION: GKE: hello-gke ACTIVE: Yes LOCATION: us-central1 Workflows Confirm that the workflow has been created: gcloud workflows list --location us-central1 Confirm that the Eventarc trigger has been created: gcloud eventarc triggers list --location us-central1 The output should be similar to the following: NAME: trigger-storage-workflows-tf TYPE: google.cloud.storage.object.v1.finalized DESTINATION: Workflows: storage-workflow-tf ACTIVE: Yes LOCATION: us-central1 Generate and view an event You can generate an event and confirm that the Eventarc trigger is working as expected.
- This identity is created with: gcloud beta services identity create --service eventarc.googleapis.com This local variable is used for convenience locals { eventarc sa = "serviceAccount:service-${data.google project.project.number}@gcp-sa-eventarc.iam.gserviceaccount.com" } resource "google project iam member" "computeViewer" { project = data.google project.project.id role = "roles/compute.viewer" member = local.eventarc sa } resource "google project iam member" "containerDeveloper" { project = data.google project.project.id role = "roles/container.developer" member = local.eventarc sa } resource "google project iam member" "serviceAccountAdmin" { project = data.google project.project.id role = "roles/iam.serviceAccountAdmin" member = local.eventarc sa } Create the service account: Create a service account to be used by GKE trigger resource "google service account" "eventarc gke trigger sa" { account id = "eventarc-gke-trigger-sa" display name = "Evenarc GKE Trigger Service Account" } Grant permission to receive Eventarc events resource "google project iam member" "eventreceiver" { project = data.google project.project.id role = "roles/eventarc.eventReceiver" member = "serviceAccount:${google service account.eventarc gke trigger sa.email}" } Grant permission to subscribe to Pub/Sub topics resource "google project iam member" "pubsubscriber" { project = data.google project.project.id role = "roles/pubsub.subscriber" member = "serviceAccount:${google service account.eventarc gke trigger sa.email}" } Workflows Used to retrieve project information later data "google project" "project" {} Create a service account for Eventarc trigger and Workflows resource "google service account" "eventarc" { account id = "eventarc-workflows-sa" display name = "Eventarc Workflows Service Account" } Grant permission to invoke Workflows resource "google project iam member" "workflowsinvoker" { project = data.google project.project.id role = "roles/workflows.invoker" member = "serviceAccount:${google service account.eventarc.email}" } Grant permission to receive events resource "google project iam member" "eventreceiver" { project = data.google project.project.id role = "roles/eventarc.eventReceiver" member = "serviceAccount:${google service account.eventarc.email}" } Grant permission to write logs resource "google project iam member" "logwriter" { project = data.google project.project.id role = "roles/logging.logWriter" member = "serviceAccount:${google service account.eventarc.email}" } The Pub/Sub service agent is automatically created when the Pub/Sub API is enabled.

