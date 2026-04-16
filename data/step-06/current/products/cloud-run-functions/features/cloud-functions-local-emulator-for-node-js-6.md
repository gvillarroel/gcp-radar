---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.150Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Cloud Functions Local Emulator for Node.js 6"
feature_slug: "cloud-functions-local-emulator-for-node-js-6"
latest_feature_date: "2019-06-06"
deprecation_date: "2019-06-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/apis/libraries"
  - "https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub"
  - "https://docs.cloud.google.com/functions/docs/securing/authenticating"
keywords:
  - "functions"
  - "local"
  - "emulator"
  - "node"
  - "js"
  - "lets"
  - "run"
  - "locally"
---

# Cloud Functions Local Emulator for Node.js 6

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

The Cloud Functions Local Emulator for Node.js 6 lets Node.js 6 functions run locally for development; deprecated on 2019-06-06.

## Extended Definition

The Cloud Functions Local Emulator for Node.js 6 lets Node.js 6 functions run locally for development; deprecated on 2019-06-06.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/apis/libraries](https://docs.cloud.google.com/functions/docs/apis/libraries)
- [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub)
- [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating)

## Supporting Pages

### "Cloud Functions client libraries \_|\_ Cloud Run functions \_|\_ Google\

- URL: [https://docs.cloud.google.com/functions/docs/apis/libraries](https://docs.cloud.google.com/functions/docs/apis/libraries)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Additional resources C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-cloud-functions on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-cloud-functions on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-cloud-functions on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-cloud-functions on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-cloud-functions on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-cloud-functions on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-cloud-functions on Stack Overflow Source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Node.js npm install @google-cloud/functions For more information, see Setting Up a Node.js Development Environment .
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . < dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>libraries - bom < / artifactId > < version>26 .79.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - functions < / artifactId > < / dependency > < / dependencies > If you are using Gradle , add the following to your dependencies: implementation ' com . google . cloud : google - cloud - functions : 2.90.0 ' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-functions" % "2.90.0" Note: Cloud Java client libraries do not currently support Android.
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Cloud Functions client libraries Stay organized with collections Save and categorize content based on your preferences.

### "Authenticate for invocation \_|\_ Cloud Run functions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/functions/docs/securing/authenticating](https://docs.cloud.google.com/functions/docs/securing/authenticating)
- Source ID: `site-iam-reference`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Run functions supports two different kinds of identities, which are also called principals : Service accounts: These are special accounts that serve as the identity of a non-person, like a function or an application or a VM.
- Authenticate for invocation This document provides supplemental information on how to invoke functions created using the Cloud Functions v2 API —for example, using gcloud functions , the REST API, or Terraform.
- HTTP functions, however, can be invoked by different identity types originating from different places, such as by a developer testing the function or by another service using the function.
- The topics covered in the Cloud Run guides also apply to functions created using the Cloud Functions v2 API , since v2 functions also use the Cloud Run Invoker role ( roles/run.invoker ).

### "Terraform Pub/Sub Tutorial \_|\_ Cloud Run functions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub)
- Source ID: `site-docs-reference-2`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Terraform is an open source tool that lets you provision Google Cloud resources with declarative configuration files This tutorial uses a Node.js function as an example, but it also works with Python, Go, and Java functions.
- Here is the main.tf file: terraform { required providers { google = { source = "hashicorp/google" version = ">= 4.34.0" } } } resource "random id" "bucket prefix" { byte length = 8 } resource "google service account" "default" { account id = "test-gcf-sa" display name = "Test Service Account" } resource "google pubsub topic" "default" { name = "functions2-topic" } resource "google storage bucket" "default" { name = "${random id.bucket prefix.hex}-gcf-source" # Every bucket name must be globally unique location = "US" uniform bucket level access = true } data "archive file" "default" { type = "zip" output path = "/tmp/function-source.zip" source dir = "function-source/" } resource "google storage bucket object" "default" { name = "function-source.zip" bucket = google storage bucket.default.name source = data.archive file.default.output path # Path to the zipped function source code } resource "google cloudfunctions2 function" "default" { name = "function" location = "us-central1" description = "a new function" build config { runtime = "nodejs22" entry point = "helloPubSub" # Set the entry point environment variables = { BUILD CONFIG TEST = "build test" } source { storage source { bucket = google storage bucket.default.name object = google storage bucket object.default.name } } } service config { max instance count = 3 min instance count = 1 available memory = "256M" timeout seconds = 60 environment variables = { SERVICE CONFIG TEST = "config test" } ingress settings = "ALLOW INTERNAL ONLY" all traffic on latest revision = true service account email = google service account.default.email } event trigger { trigger region = "us-central1" event type = "google.cloud.pubsub.topic.v1.messagePublished" pubsub topic = google pubsub topic.default.id retry policy = "RETRY POLICY RETRY" } } Initialize Terraform In the terraform-docs-samples/functions/pubsub directory containing the main.tf file, run this command to add the necessary plugins and build the .terraform directory: terraform init Validate the Terraform configuration Preview the Terraform configuration.
- Cloud Shell can take several minutes to initialize: Open Cloud Shell Preparing the application In Cloud Shell, perform the following steps: Clone the sample app repository to your Cloud Shell instance: git clone https://github.com/terraform-google-modules/terraform-docs-samples.git Change to the directory that contains the Cloud Run functions sample code: cd terraform-docs-samples/functions/pubsub The Node.js sample used in this tutorial is a basic "Hello World" Pub/Sub function.
- When prompted, enter yes : terraform apply Triggering the function To test the Pub/Sub function: Publish a message to the topic (in this example, the topic name is functions2-topic ): gcloud pubsub topics publish TOPIC NAME --message="Friend" Read the function logs to see the result, where FUNCTION NAME is the name of your function (in this example, the function name is function ): gcloud functions logs read FUNCTION NAME You should see logging output that includes your new "Friend" message.

