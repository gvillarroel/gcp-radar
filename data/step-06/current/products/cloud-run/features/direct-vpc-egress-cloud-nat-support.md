---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.915Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Direct VPC egress Cloud NAT support"
feature_slug: "direct-vpc-egress-cloud-nat-support"
latest_feature_date: "2024-03-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/tutorials/pubsub"
  - "https://docs.cloud.google.com/run/docs/deploy-functions"
keywords:
  - "direct"
  - "vpc"
  - "egress"
  - "nat"
  - "can"
  - "use"
  - "with"
  - "public"
---

# Direct VPC egress Cloud NAT support

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Direct VPC egress can use Cloud NAT with public NAT IP addresses.

## Extended Definition

Direct VPC egress can use Cloud NAT with public NAT IP addresses.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/tutorials/pubsub](https://docs.cloud.google.com/run/docs/tutorials/pubsub)
- [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- November 11, 2025 Feature You can set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (GA) November 06, 2025 Feature Use dual-stack subnets with IPv6 to let your Cloud Run resources send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress, and send external IPv6 traffic to the public internet. (GA) October 31, 2025 Feature Support for Java 25 runtime is in Preview .
- March 19, 2024 Feature You can now mount an NFS file share as a volume for Cloud Run services and jobs . (In Preview) March 14, 2024 Feature Direct VPC egress now supports Cloud NAT with Public NAT IP addresses (in Preview).
- January 24, 2025 Feature You can now use dual-stack subnets with internal IPv6 to let your Cloud Run services and jobs send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress. (Preview) January 22, 2025 Feature The Cloud Run Builder ( roles/run.builder ) IAM role is now available in preview.
- March 05, 2021 Feature You can now use VPC Service Controls with Cloud Run to set up a secure perimeter to guard against data exfiltration. (Available in public preview.) March 03, 2021 Feature Cloud Run reports a new Cloud Monitoring metric: Instance count , which counts the number of container instances that exist, broken down by state (active or idle).

### Use Pub/Sub with Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/pubsub](https://docs.cloud.google.com/run/docs/tutorials/pubsub)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To integrate the service with Pub/Sub: gcloud Create or select a service account to represent the Pub/Sub subscription identity. gcloud iam service-accounts create cloud-run-pubsub-invoker \ --display-name " Cloud Run Pub/Sub Invoker " You can use cloud-run-pubsub-invoker or replace with a name unique within your Google Cloud project.
- Create a Pub/Sub topic The sample service is triggered by messages published to a Pub/Sub topic, so you'll need to create a topic in Pub/Sub. gcloud To create a new Pub/Sub topic, use the command: gcloud pubsub topics create myRunTopic You can use myRunTopic or replace with a topic name unique within your Google Cloud project.
- Retrieve the code sample To retrieve the code sample for use: Clone the sample app repository to your local machine: Node.js git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git Alternatively, you can download the sample as a zip file and extract it.
- To create a Pub/Sub topic, add the following to your existing main.tf file: resource "google pubsub topic" "default" { name = "pubsub topic" } You can use a topic name unique within your Cloud project.

### Deploy a Cloud Run function \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Alternatively, if you want to use a specific system package in the stack or specify the region where the base image is downloaded from, you can specify one of the following: The full base image path, such as us-central1-docker.pkg.dev/serverless-runtimes/google-24-full/runtimes/nodejs24 .
- VPC Service Controls configurations: Ensure that the build service account can reach the target REPOSITORY within the VPC-SC perimeter.
- Create a new main.tf file with this content: provider "google" { project = " PROJECT-ID " } resource "google cloud run v2 service" "default" { name = " SERVICE " location = " REGION " client = "terraform" template { containers { name = " SERVICE " image = " IMAGE URL " # Container image built from your function in the previous step. base image uri = " BASE IMAGE " } } build config { function target = " FUNCTION TARGET " image uri = " IMAGE URL " base image = " BASE IMAGE " enable automatic updates = true } } resource "google cloud run v2 service iam member" "noauth" { location = google cloud run v2 service.default.location name = google cloud run v2 service.default.name role = "roles/run.invoker" member = "allUsers" } Replace: PROJECT-ID with the Google Cloud project ID.
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } Source bucket Your source code must be accessible to the build process and the Google Cloud console source editor.

