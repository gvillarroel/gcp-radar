---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:15:58.546Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "Cloud Storage triggers"
feature_slug: "cloud-storage-triggers"
latest_feature_date: "2021-12-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/eventarc/standard/docs/gke/big-query-tutorial"
  - "https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform"
  - "https://docs.cloud.google.com/eventarc/docs/understand-locations"
  - "https://docs.cloud.google.com/eventarc/docs/locations"
keywords:
  - "storage"
  - "triggers"
  - "eventarc"
  - "supports"
  - "in"
  - "general"
  - "availability"
  - "preview"
---

# Cloud Storage triggers

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

Eventarc supports Cloud Storage triggers in general availability; Eventarc supports Cloud Storage triggers in preview.

## Extended Definition

Eventarc supports Cloud Storage triggers in general availability; Eventarc supports Cloud Storage triggers in preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/eventarc/standard/docs/gke/big-query-tutorial](https://docs.cloud.google.com/eventarc/standard/docs/gke/big-query-tutorial)
- [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform)
- [https://docs.cloud.google.com/eventarc/docs/understand-locations](https://docs.cloud.google.com/eventarc/docs/understand-locations)
- [https://docs.cloud.google.com/eventarc/docs/locations](https://docs.cloud.google.com/eventarc/docs/locations)

## Supporting Pages

### "Build a BigQuery processing pipeline for Knative serving with Eventarc \_\

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/gke/big-query-tutorial](https://docs.cloud.google.com/eventarc/standard/docs/gke/big-query-tutorial)
- Source ID: `site-iam-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a service account called TRIGGER GSA : TRIGGER GSA = eventarc-bigquery-triggers gcloud iam service-accounts create $TRIGGER GSA Grant the pubsub.subscriber , monitoring.metricWriter , and eventarc.eventReceiver roles to the service account: PROJECT ID = $( gcloud config get-value project ) gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount: $TRIGGER GSA @ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/pubsub.subscriber" gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount: $TRIGGER GSA @ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/monitoring.metricWriter" gcloud projects add-iam-policy-binding $PROJECT ID \ --member "serviceAccount: $TRIGGER GSA @ $PROJECT ID .iam.gserviceaccount.com" \ --role "roles/eventarc.eventReceiver" Create a Cloud Storage bucket Create a Cloud Storage bucket to save the charts.
- Create the trigger: gcloud eventarc triggers create trigger- ${ SERVICE NAME } -gke \ --destination-gke-cluster = $CLUSTER NAME \ --destination-gke-location = $CLUSTER LOCATION \ --destination-gke-namespace = default \ --destination-gke-service = $SERVICE NAME \ --destination-gke-path = / \ --event-filters = "type=google.cloud.audit.log.v1.written" \ --event-filters = "serviceName=storage.googleapis.com" \ --event-filters = "methodName=storage.objects.create" \ --service-account = $TRIGGER GSA @ $PROJECT ID .iam.gserviceaccount.com This creates a trigger called trigger-notifier-gke .
- Standard Preview — Eventarc for GKE destinations This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Remove any Google Cloud CLI default configurations you added during the tutorial setup. gcloud config unset project gcloud config unset run/cluster gcloud config unset run/cluster location gcloud config unset run/platform gcloud config unset eventarc/location gcloud config unset compute/zone Delete the images from Artifact Registry. gcloud artifacts docker images delete $CLUSTER LOCATION -docker.pkg.dev/ $( gcloud config get-value project ) / REPOSITORY /notifier:v1 gcloud artifacts docker images delete $CLUSTER LOCATION -docker.pkg.dev/ $( gcloud config get-value project ) / REPOSITORY /chart-creator:v1 gcloud artifacts docker images delete $CLUSTER LOCATION -docker.pkg.dev/ $( gcloud config get-value project ) / REPOSITORY /query-runner:v1 Delete the bucket, along with all the objects within the bucket: gcloud storage rm --recursive gs://${BUCKET}/ Delete the Cloud Scheduler jobs: gcloud scheduler jobs delete cre-scheduler-cy gcloud scheduler jobs delete cre-scheduler-uk What's next Learn more about Eventarc Learn more about Knative serving Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Create a trigger using Terraform \_|\_ Eventarc Standard \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform](https://docs.cloud.google.com/eventarc/docs/creating-triggers-terraform)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Verify the creation of resources Cloud Run Confirm that the service has been created: gcloud run services list --region us-central1 Confirm that the trigger has been created: gcloud eventarc triggers list --location us-central1 The output should be similar to the following: NAME: trigger-storage-cloudrun-tf TYPE: google.cloud.storage.object.v1.finalized DESTINATION: Cloud Run service: hello-events ACTIVE: Yes LOCATION: us-central1 GKE Confirm that the service has been created: kubectl get service hello-gke Confirm that the trigger has been created: gcloud eventarc triggers list --location us-central1 The output should be similar to the following: NAME: trigger-storage-gke-tf TYPE: google.cloud.storage.object.v1.finalized DESTINATION: GKE: hello-gke ACTIVE: Yes LOCATION: us-central1 Workflows Confirm that the workflow has been created: gcloud workflows list --location us-central1 Confirm that the Eventarc trigger has been created: gcloud eventarc triggers list --location us-central1 The output should be similar to the following: NAME: trigger-storage-workflows-tf TYPE: google.cloud.storage.object.v1.finalized DESTINATION: Workflows: storage-workflow-tf ACTIVE: Yes LOCATION: us-central1 Generate and view an event You can generate an event and confirm that the Eventarc trigger is working as expected.
- Important: Because Eventarc Standard uses Pub/Sub as its transport layer, Cloud Storage triggers can fail if a Cloud Storage event originates from a region not permitted by your Pub/Sub message storage policy, and if in-transit operations are enforced ( "enforceInTransit": true ).
- Cloud Run Cloud Storage bucket names must be globally unique resource "random id" "bucket name suffix" { byte length = 4 } Create a Cloud Storage bucket resource "google storage bucket" "default" { name = "trigger-cloudrun-${data.google project.project.name}-${random id.bucket name suffix.hex}" location = google cloud run v2 service.default.location force destroy = true uniform bucket level access = true } Grant the Cloud Storage service account permission to publish pub/sub topics data "google storage project service account" "gcs account" {} resource "google project iam member" "pubsubpublisher" { project = data.google project.project.id role = "roles/pubsub.publisher" member = "serviceAccount:${data.google storage project service account.gcs account.email address}" depends on = [ data.google storage project service account.gcs account ] } GKE Cloud Storage bucket names must be globally unique resource "random id" "bucket name suffix" { byte length = 4 } Create a Cloud Storage bucket resource "google storage bucket" "default" { name = "trigger-gke-${data.google project.project.name}-${random id.bucket name suffix.hex}" location = "us-central1" force destroy = true uniform bucket level access = true } Grant the Cloud Storage service account permission to publish pub/sub topics data "google storage project service account" "gcs account" {} resource "google project iam member" "pubsubpublisher" { project = data.google project.project.id role = "roles/pubsub.publisher" member = "serviceAccount:${data.google storage project service account.gcs account.email address}" } Workflows Cloud Storage bucket names must be globally unique resource "random id" "bucket name suffix" { byte length = 4 } Create a Cloud Storage bucket resource "google storage bucket" "default" { name = "trigger-workflows-${data.google project.project.name}-${random id.bucket name suffix.hex}" location = google workflows workflow.default.region force destroy = true uniform bucket level access = true } Grant the Cloud Storage service account permission to publish Pub/Sub topics data "google storage project service account" "gcs account" {} resource "google project iam member" "pubsubpublisher" { project = data.google project.project.id role = "roles/pubsub.publisher" member = "serviceAccount:${data.google storage project service account.gcs account.email address}" } Create an event receiver to be the event target Create an event receiver using one of the following Terraform resources: google cloud run v2 service google container cluster google workflows workflow Cloud Run Create a Cloud Run service as an event destination for the Eventarc trigger: Deploy Cloud Run service resource "google cloud run v2 service" "default" { name = "hello-events" location = "us-central1" deletion protection = false # set to "true" in production template { containers { This container will log received events image = "us-docker.pkg.dev/cloudrun/container/hello" } service account = google service account.default.email } depends on = [ google project service.run ] } GKE To simplify this guide, create a Google Kubernetes Engine service as an event destination outside of Terraform, in between applying Terraform configurations.
- Make sure the service is running: kubectl get svc The output should be similar to the following: NAME TYPE CLUSTER-IP EXTERNAL-IP PORT ( S ) AGE hello-gke ClusterIP 34 .118.230.123 <none> 80 /TCP 4m46s kubernetes ClusterIP 34 .118.224.1 <none> 443 /TCP 14m Workflows Deploy a workflow that executes when an object is updated in the Cloud Storage bucket: Create a workflow resource "google workflows workflow" "default" { name = "storage-workflow-tf" region = "us-central1" description = "Workflow that returns information about storage events" service account = google service account.eventarc.email deletion protection = false # set to "true" in production Note that $$ is needed for Terraform source contents = << EOF main : params : [ event ] steps : - log event : call : sys.log args : text : $$ { event } severity : INFO - gather data : assign : - bucket : $$ { event.data.bucket } - name : $$ { event.data.name } - message : $$ { "Received event " + event.type + " - " + bucket + ", " + name } - return data : return : $$ { message } EOF depends on = [ google project service.workflows ] } Define an Eventarc trigger An Eventarc trigger routes events from an event provider to an event destination.

### "Understand Eventarc locations \_|\_ Eventarc Standard \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/eventarc/docs/understand-locations](https://docs.cloud.google.com/eventarc/docs/understand-locations)
- Source ID: `site-docs-root-2`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to capture Cloud Storage events from a bucket in the europe-west1 region with an audit logs trigger, create a trigger in the same location: gcloud eventarc triggers create trigger-auditlog \ --destination-run-service = hello \ --destination-run-region = us-central1 \ --location = europe-west1 \ --event-filters = "type=google.cloud.audit.log.v1.written" \ --event-filters = "serviceName=storage.googleapis.com" \ --event-filters = "methodName=storage.objects.create" \ --service-account = $PROJECT NUMBER -compute@developer.gserviceaccount.com As there's no filtering by bucket when you use a Cloud Audit Logs trigger, this will match all buckets in the europe-west1 region. (To filter by bucket, you can instead use a direct Cloud Storage trigger.) Or, to match a dual-region or multi-region bucket such as eu , you can create a trigger with a global location and this will match all buckets in all regions for which the event filters match: gcloud eventarc triggers create trigger-storage \ --destination-run-service = hello \ --destination-run-region = us-central1 \ --location = global \ --event-filters = "type=google.cloud.storage.object.v1.finalized" \ --event-filters = "bucket=my-bucket-in-europe-west1-region" \ --service-account = $PROJECT NUMBER -compute@developer.gserviceaccount.com Note: There is a known issue with Cloud Audit Logs triggers for Compute Engine that results in events originating from a single region: us-central1 .
- In the following example, the trigger location matches that of the Cloud Storage bucket (the eu multi-region location): gcloud eventarc triggers create trigger-storage \ --destination-run-service = hello \ --destination-run-region = us-central1 \ --location = eu \ --event-filters = "type=google.cloud.storage.object.v1.finalized" \ --event-filters = "bucket=my-bucket-in-eu-multi-region" \ --service-account = $PROJECT NUMBER -compute@developer.gserviceaccount.com If the bucket and trigger regions don't match, you will see an error similar to the following: ERROR: ( gcloud.eventarc.triggers.create ) INVALID ARGUMENT: The request was invalid: Bucket "my-bucket-in-eu-multi-region" location "eu" does not match trigger location "europe-west1" .
- In the following example, since the Cloud Storage bucket is in the europe-west1 region, the trigger must also be located in europe-west1 . gcloud eventarc triggers create trigger-storage \ --destination-run-service = hello \ --destination-run-region = us-central1 \ --location = europe-west1 \ --event-filters = "type=google.cloud.storage.object.v1.finalized" \ --event-filters = "bucket=my-bucket-in-europe-west1-region" \ --service-account = $PROJECT NUMBER -compute@developer.gserviceaccount.com Target location When deploying your event target (for example, a Cloud Run service), you choose a supported region as its location.
- Cloud Storage Important: Because Eventarc Standard uses Pub/Sub as its transport layer, Cloud Storage triggers can fail if a Cloud Storage event originates from a region not permitted by your Pub/Sub message storage policy, and if in-transit operations are enforced ( "enforceInTransit": true ).

### Eventarc locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/eventarc/docs/locations](https://docs.cloud.google.com/eventarc/docs/locations)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Supported regions The supported regions for Eventarc Standard are as follows: Americas Europe Asia-Pacific Middle East Africa Cloud Storage triggers only Cloud Firestore triggers only Americas The following table lists the regions in North and South America where Eventarc is available.
- Important: Because Eventarc Standard uses Pub/Sub as its transport layer, Cloud Storage triggers can fail if a Cloud Storage event originates from a region not permitted by your Pub/Sub message storage policy, and if in-transit operations are enforced ( "enforceInTransit": true ).
- Important: Because Eventarc Standard uses Pub/Sub as its transport layer, Cloud Storage triggers can fail if a Cloud Storage event originates from a region not permitted by your Pub/Sub message storage policy, and if in-transit operations are enforced ( "enforceInTransit": true ).
- Cloud Storage Triggers for Cloud Storage events are available in single-region, dual-region, and multi-region locations; you can't create a global Eventarc trigger.

