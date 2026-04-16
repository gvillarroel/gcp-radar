---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.156Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Go runtime"
feature_slug: "go-runtime"
latest_feature_date: "2019-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub"
  - "https://docs.cloud.google.com/functions/docs/running/direct-vpc"
  - "https://docs.cloud.google.com/functions/docs/reference/rest"
keywords:
  - "go"
  - "runtime"
  - "lets"
  - "functions"
  - "run"
  - "code"
---

# Go runtime

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

The Go runtime lets functions run Go code.

## Extended Definition

The Go runtime lets functions run Go code.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest)

## Supporting Pages

### "Terraform Pub/Sub Tutorial \_|\_ Cloud Run functions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here is the main.tf file: terraform { required providers { google = { source = "hashicorp/google" version = ">= 4.34.0" } } } resource "random id" "bucket prefix" { byte length = 8 } resource "google service account" "default" { account id = "test-gcf-sa" display name = "Test Service Account" } resource "google pubsub topic" "default" { name = "functions2-topic" } resource "google storage bucket" "default" { name = "${random id.bucket prefix.hex}-gcf-source" # Every bucket name must be globally unique location = "US" uniform bucket level access = true } data "archive file" "default" { type = "zip" output path = "/tmp/function-source.zip" source dir = "function-source/" } resource "google storage bucket object" "default" { name = "function-source.zip" bucket = google storage bucket.default.name source = data.archive file.default.output path # Path to the zipped function source code } resource "google cloudfunctions2 function" "default" { name = "function" location = "us-central1" description = "a new function" build config { runtime = "nodejs22" entry point = "helloPubSub" # Set the entry point environment variables = { BUILD CONFIG TEST = "build test" } source { storage source { bucket = google storage bucket.default.name object = google storage bucket object.default.name } } } service config { max instance count = 3 min instance count = 1 available memory = "256M" timeout seconds = 60 environment variables = { SERVICE CONFIG TEST = "config test" } ingress settings = "ALLOW INTERNAL ONLY" all traffic on latest revision = true service account email = google service account.default.email } event trigger { trigger region = "us-central1" event type = "google.cloud.pubsub.topic.v1.messagePublished" pubsub topic = google pubsub topic.default.id retry policy = "RETRY POLICY RETRY" } } Initialize Terraform In the terraform-docs-samples/functions/pubsub directory containing the main.tf file, run this command to add the necessary plugins and build the .terraform directory: terraform init Validate the Terraform configuration Preview the Terraform configuration.
- Cloud Shell can take several minutes to initialize: Open Cloud Shell Preparing the application In Cloud Shell, perform the following steps: Clone the sample app repository to your Cloud Shell instance: git clone https://github.com/terraform-google-modules/terraform-docs-samples.git Change to the directory that contains the Cloud Run functions sample code: cd terraform-docs-samples/functions/pubsub The Node.js sample used in this tutorial is a basic "Hello World" Pub/Sub function.
- Terraform is an open source tool that lets you provision Google Cloud resources with declarative configuration files This tutorial uses a Node.js function as an example, but it also works with Python, Go, and Java functions.
- When prompted, enter yes : terraform apply Triggering the function To test the Pub/Sub function: Publish a message to the topic (in this example, the topic name is functions2-topic ): gcloud pubsub topics publish TOPIC NAME --message="Friend" Read the function logs to see the result, where FUNCTION NAME is the name of your function (in this example, the function name is function ): gcloud functions logs read FUNCTION NAME You should see logging output that includes your new "Friend" message.

### "Configure Direct VPC egress for 2nd gen functions \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- Source ID: `site-iam-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BACKEND URL ; if ( ! backendUrl ) { console . error ( 'BACKEND URL environment variable not set.' ); res . status ( 500 ). send ( 'BACKEND URL not configured.' ); return ; } try { const metadataServerURL = 'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=' ; const tokenUrl = metadataServerURL + backendUrl ; const tokenResponse = await axios . get ( tokenUrl , { headers : { 'Metadata-Flavor' : 'Google' , }, }); const token = tokenResponse . data ; const response = await axios . get ( backendUrl , { headers : { Authorization : bearer ${ token } , }, }); res . status ( 200 ). send ( Response from backend: ${ response . data } ); } catch ( error ) { console . error ( Error calling backend service: ${ error . message } ); res . status ( 500 ). send ( Error calling backend: ${ error . message } ); } }; functions . http ( 'callVPCService' , callVPCService ); Deploy the function with Direct VPC egress configured to route all traffic to your default VPC network: gcloud functions deploy my-2ndgen-function \ --source . \ --runtime nodejs20 \ --trigger-http \ --entry-point callVPCService \ --network = default \ --subnet = default \ --direct-vpc-egress = all \ --region = REGION \ --allow-unauthenticated \ --set-env-vars BACKEND URL = BACKEND URL Replace the following: REGION : the region where you deployed the backend service.
- Configure Direct VPC egress Configure Direct VPC egress for new or existing 2nd gen functions. gcloud To configure Direct VPC egress when you deploy a function, use the gcloud functions deploy command with flags for your network settings. gcloud functions deploy FUNCTION NAME \ --source . \ --runtime RUNTIME \ --trigger-http \ --region REGION \ --network = NETWORK \ --subnet = SUBNET \ --network-tags = NETWORK TAG NAMES \ --direct-vpc-egress = EGRESS SETTING Replace the following: FUNCTION NAME : the name of your function.
- This code makes an authenticated request to the internal backend service. const axios = require ( 'axios' ); const functions = require ( '@google-cloud/functions-framework' ); const callVPCService = async ( req , res ) = > { const backendUrl = process . env .
- Configure Direct VPC egress for 2nd gen functions Direct VPC egress lets you route traffic from your Cloud Run functions (2nd gen) function directly to your VPC network.

### Cloud Functions API \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest](https://docs.cloud.google.com/functions/docs/reference/rest)
- Source ID: `site-docs-reference-2`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v2alpha.projects.locations.functions Methods abortFunctionUpgrade POST /v2alpha/{name}:abortFunctionUpgrade Aborts generation upgrade process for a function with the given name from the specified project. commitFunctionUpgrade POST /v2alpha/{name}:commitFunctionUpgrade Finalizes the upgrade after which function upgrade can not be rolled back. create POST /v2alpha/{parent}/functions Creates a new function. delete DELETE /v2alpha/{name} Deletes a function with the given name from the specified project. detachFunction POST /v2alpha/{name}:detachFunction Detaches 2nd Gen function to Cloud Run function. generateDownloadUrl POST /v2alpha/{name}:generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl POST /v2alpha/{parent}/functions:generateUploadUrl Returns a signed URL for uploading a function source code. get GET /v2alpha/{name} Returns a function with the given name from the requested project. getIamPolicy GET /v2alpha/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v2alpha/{parent}/functions Returns a list of functions that belong to the requested project. patch PATCH /v2alpha/{function.name} Updates existing function. redirectFunctionUpgradeTraffic POST /v2alpha/{name}:redirectFunctionUpgradeTraffic Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy. rollbackFunctionUpgradeTraffic POST /v2alpha/{name}:rollbackFunctionUpgradeTraffic Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function. setIamPolicy POST /v2alpha/{resource}:setIamPolicy Sets the access control policy on the specified resource. setupFunctionUpgradeConfig POST /v2alpha/{name}:setupFunctionUpgradeConfig Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name. testIamPermissions POST /v2alpha/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v2beta.projects.locations.functions Methods abortFunctionUpgrade POST /v2beta/{name}:abortFunctionUpgrade Aborts generation upgrade process for a function with the given name from the specified project. commitFunctionUpgrade POST /v2beta/{name}:commitFunctionUpgrade Finalizes the upgrade after which function upgrade can not be rolled back. create POST /v2beta/{parent}/functions Creates a new function. delete DELETE /v2beta/{name} Deletes a function with the given name from the specified project. detachFunction POST /v2beta/{name}:detachFunction Detaches 2nd Gen function to Cloud Run function. generateDownloadUrl POST /v2beta/{name}:generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl POST /v2beta/{parent}/functions:generateUploadUrl Returns a signed URL for uploading a function source code. get GET /v2beta/{name} Returns a function with the given name from the requested project. getIamPolicy GET /v2beta/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v2beta/{parent}/functions Returns a list of functions that belong to the requested project. patch PATCH /v2beta/{function.name} Updates existing function. redirectFunctionUpgradeTraffic POST /v2beta/{name}:redirectFunctionUpgradeTraffic Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy. rollbackFunctionUpgradeTraffic POST /v2beta/{name}:rollbackFunctionUpgradeTraffic Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function. setIamPolicy POST /v2beta/{resource}:setIamPolicy Sets the access control policy on the specified resource. setupFunctionUpgradeConfig POST /v2beta/{name}:setupFunctionUpgradeConfig Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name. testIamPermissions POST /v2beta/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v2.projects.locations.functions Methods abortFunctionUpgrade POST /v2/{name}:abortFunctionUpgrade Aborts generation upgrade process for a function with the given name from the specified project. commitFunctionUpgrade POST /v2/{name}:commitFunctionUpgrade Finalizes the upgrade after which function upgrade can not be rolled back. create POST /v2/{parent}/functions Creates a new function. delete DELETE /v2/{name} Deletes a function with the given name from the specified project. detachFunction POST /v2/{name}:detachFunction Detaches 2nd Gen function to Cloud Run function. generateDownloadUrl POST /v2/{name}:generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl POST /v2/{parent}/functions:generateUploadUrl Returns a signed URL for uploading a function source code. get GET /v2/{name} Returns a function with the given name from the requested project. getIamPolicy GET /v2/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v2/{parent}/functions Returns a list of functions that belong to the requested project. patch PATCH /v2/{function.name} Updates existing function. redirectFunctionUpgradeTraffic POST /v2/{name}:redirectFunctionUpgradeTraffic Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy. rollbackFunctionUpgradeTraffic POST /v2/{name}:rollbackFunctionUpgradeTraffic Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function. setIamPolicy POST /v2/{resource}:setIamPolicy Sets the access control policy on the specified resource. setupFunctionUpgradeConfig POST /v2/{name}:setupFunctionUpgradeConfig Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name. testIamPermissions POST /v2/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations.functions Methods call POST /v1/{name}:call Synchronously invokes a deployed Cloud Function. create POST /v1/{location}/functions Creates a new function. delete DELETE /v1/{name} Deletes a function with the given name from the specified project. generateDownloadUrl POST /v1/{name}:generateDownloadUrl Returns a signed URL for downloading deployed function source code. generateUploadUrl POST /v1/{parent}/functions:generateUploadUrl Returns a signed URL for uploading a function source code. get GET /v1/{name} Returns a function with the given name from the requested project. getIamPolicy GET /v1/{resource}:getIamPolicy Gets the IAM access control policy for a function. list GET /v1/{parent}/functions Returns a list of functions that belong to the requested project. patch PATCH /v1/{function.name} Updates existing function. setIamPolicy POST /v1/{resource}:setIamPolicy Sets the IAM access control policy on the specified function. testIamPermissions POST /v1/{resource}:testIamPermissions Tests the specified permissions against the IAM access control policy for a function.

