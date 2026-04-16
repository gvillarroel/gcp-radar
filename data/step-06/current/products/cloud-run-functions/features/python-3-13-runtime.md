---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.908Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Python 3.13 runtime"
feature_slug: "python-3-13-runtime"
latest_feature_date: "2025-05-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/securing/custom-constraints"
  - "https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub"
  - "https://docs.cloud.google.com/functions/docs/building"
keywords:
  - "python"
  - "13"
  - "runtime"
  - "run"
  - "functions"
  - "supports"
---

# Python 3.13 runtime

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports the Python 3.13 runtime; Cloud Run functions supports the Python 3.13 runtime.

## Extended Definition

Cloud Run functions supports the Python 3.13 runtime; Cloud Run functions supports the Python 3.13 runtime.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints)
- [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub)
- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)

## Supporting Pages

### Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- Source ID: `site-iam-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- You can optionally use a private pool , which you specify using the --build-worker-pool flag. gcloud functions deploy FUNCTION NAME \ -- gen2 \ -- region = REGION \ -- project = PROJECT ID \ -- runtime = RUNTIME \ -- entry - point = CODE ENTRYPOINT \ -- build - service - account = projects / PROJECT ID / serviceAccounts / SA EMAIL \ -- memory = 256 Mi \ -- trigger - http \ -- source = .
- To stop using a given private pool and instead use the default Cloud Build pool, use the --clear-build-worker-pool flag when re-deploying. gcloud functions deploy FUNCTION NAME \ --runtime RUNTIME \ --clear-build-worker-pool [ FLAGS... ] Replace FUNCTION NAME with the name of the function and RUNTIME with the runtime you are using.
- Deploy your function to build using a private pool: gcloud functions deploy FUNCTION NAME \ --runtime RUNTIME \ --build-worker-pool PRIVATE POOL NAME [ FLAGS... ] Replace FUNCTION NAME with the name of the function, RUNTIME with the runtime you are using, and PRIVATE POOL NAME with the name of your pool.
- If your private worker pool is in a different project than your function, you need to grant the Cloud Functions Service Agent Service Account ( service-FUNCTION PROJECT NUMBER@gcf-admin-robot.iam.gserviceaccount.com ) the cloudbuild.workerPoolUser role so that the Cloud Build service can access the worker pool. gcloud projects add-iam-policy-binding PRIVATE POOL PROJECT ID \ --member serviceAccount:service- FUNCTION PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com --role roles/cloudbuild.workerPoolUser Replace FUNCTION PROJECT NUMBER with the number of the project where the function runs and PRIVATE POOL PROJECT ID with the ID of the project in which the worker pool is located.

### "Manage function resources using custom constraints \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Common organization policy examples The following table provides the syntax of some custom organization policies that you might find useful: Description Constraint syntax Prevent functions from being created with a specific language name : organizations/ ORGANIZATION ID /customConstraints/custom.cloudFunctionRuntimeBlock resource types : cloudfunctions.googleapis.com/Function method types : - CREATE - UPDATE condition : resource.buildConfig.runtime == "python312" action type : DENY display name : Deny functions using Python 3.12 description : Functions cannot be created with Python 3.12 as the language runtime Require functions to use a specific worker pool name : organizations/ ORGANIZATION ID /customConstraints/custom.cloudFunctionsWorkerPool resource types : cloudfunctions.googleapis.com/Function method types : - CREATE - UPDATE condition : resource.buildConfig.workerPool == " WORKER POOL " action type : DENY display name : Require worker pool description : Functions must use a worker pool Replace WORKER POOL with the name of your Cloud Build worker pool.
- Require that functions store all container images in a specific image repository name : organizations/ ORGANIZATION ID /customConstraints/custom.cloudFunctionsRepository resource types : cloudfunctions.googleapis.com/Function method types : - CREATE - UPDATE condition : resource.buildConfig.dockerRepository.startsWith(" REPO PATH ") action type : DENY display name : Image repository constraint description : Functions must push images to a central image repository under REPO PATH Replace REPO PATH with the URI of the image repository URL that you want all functions to store their container images in.
- Manage function resources using custom constraints Note: If you've created or deployed functions using Cloud Run, see Cloud Run's Manage custom constraints for projects guide for a detailed description of how to use custom constraints.
- This page provides supplemental information for setting custom constraints on functions created using the Cloud Functions v2 API , such as through the gcloud functions commands.

### "Terraform Pub/Sub Tutorial \_|\_ Cloud Run functions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub)
- Source ID: `site-docs-reference-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Here is the main.tf file: terraform { required providers { google = { source = "hashicorp/google" version = ">= 4.34.0" } } } resource "random id" "bucket prefix" { byte length = 8 } resource "google service account" "default" { account id = "test-gcf-sa" display name = "Test Service Account" } resource "google pubsub topic" "default" { name = "functions2-topic" } resource "google storage bucket" "default" { name = "${random id.bucket prefix.hex}-gcf-source" # Every bucket name must be globally unique location = "US" uniform bucket level access = true } data "archive file" "default" { type = "zip" output path = "/tmp/function-source.zip" source dir = "function-source/" } resource "google storage bucket object" "default" { name = "function-source.zip" bucket = google storage bucket.default.name source = data.archive file.default.output path # Path to the zipped function source code } resource "google cloudfunctions2 function" "default" { name = "function" location = "us-central1" description = "a new function" build config { runtime = "nodejs22" entry point = "helloPubSub" # Set the entry point environment variables = { BUILD CONFIG TEST = "build test" } source { storage source { bucket = google storage bucket.default.name object = google storage bucket object.default.name } } } service config { max instance count = 3 min instance count = 1 available memory = "256M" timeout seconds = 60 environment variables = { SERVICE CONFIG TEST = "config test" } ingress settings = "ALLOW INTERNAL ONLY" all traffic on latest revision = true service account email = google service account.default.email } event trigger { trigger region = "us-central1" event type = "google.cloud.pubsub.topic.v1.messagePublished" pubsub topic = google pubsub topic.default.id retry policy = "RETRY POLICY RETRY" } } Initialize Terraform In the terraform-docs-samples/functions/pubsub directory containing the main.tf file, run this command to add the necessary plugins and build the .terraform directory: terraform init Validate the Terraform configuration Preview the Terraform configuration.
- Terraform is an open source tool that lets you provision Google Cloud resources with declarative configuration files This tutorial uses a Node.js function as an example, but it also works with Python, Go, and Java functions.
- When prompted, enter yes : terraform apply Triggering the function To test the Pub/Sub function: Publish a message to the topic (in this example, the topic name is functions2-topic ): gcloud pubsub topics publish TOPIC NAME --message="Friend" Read the function logs to see the result, where FUNCTION NAME is the name of your function (in this example, the function name is function ): gcloud functions logs read FUNCTION NAME You should see logging output that includes your new "Friend" message.
- Cloud Shell can take several minutes to initialize: Open Cloud Shell Preparing the application In Cloud Shell, perform the following steps: Clone the sample app repository to your Cloud Shell instance: git clone https://github.com/terraform-google-modules/terraform-docs-samples.git Change to the directory that contains the Cloud Run functions sample code: cd terraform-docs-samples/functions/pubsub The Node.js sample used in this tutorial is a basic "Hello World" Pub/Sub function.

