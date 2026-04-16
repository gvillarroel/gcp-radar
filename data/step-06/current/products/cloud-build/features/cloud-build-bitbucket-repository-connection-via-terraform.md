---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.822Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build Bitbucket repository connection via Terraform"
feature_slug: "cloud-build-bitbucket-repository-connection-via-terraform"
latest_feature_date: "2024-07-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud"
keywords:
  - "connection"
  - "terraform"
  - "repository"
  - "bitbucket"
  - "users"
---

# Cloud Build Bitbucket repository connection via Terraform

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build users can connect to Bitbucket Cloud and Bitbucket Data Center hosts and add repositories using the Google Cloud Terraform provider.

## Extended Definition

Cloud Build users can connect to Bitbucket Cloud and Bitbucket Data Center hosts and add repositories using the Google Cloud Terraform provider.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud)

## Supporting Pages

### "Connect to a Bitbucket Cloud repository \_|\_ Cloud Build \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Terraform To add a Bitbucket Cloud repository to your connection, add the following code snippet to your Terraform configuration: resource "google cloudbuildv2 repository" "my-repository" { project = " PROJECT ID " name = " REPO NAME " location = " REGION " parent connection = google cloudbuildv2 connection.
- Click Link . gcloud Connect to your Bitbucket Cloud repository: gcloud builds repositories create REPO NAME \ --remote-uri = https://bitbucket.org/ WORKSPACE / REPOSITORY .git \ --connection = CONNECTION NAME --region = REGION --project = PROJECT ID Where: REPO NAME is the name of your repository.
- For example, my-connection from the Terraform example in Connect to a Bitbucket Cloud host .
- Home Documentation Application development Cloud Build Guides Send feedback Connect to a Bitbucket Cloud repository Stay organized with collections Save and categorize content based on your preferences.

### Connect to a Bitbucket Cloud host \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Creates a Bitbucket Cloud connection. // Configure the Terraform Google provider terraform { required providers { google = {} } } provider "google" { project = " PROJECT ID " region = " REGION " } // Create secrets and grant permissions to the Cloud Build service agent resource "google secret manager secret" "admin-token-secret" { project = " PROJECT ID " secret id = " ADMIN TOKEN NAME " replication { auto {} } } resource "google secret manager secret version" "admin-token-secret-version" { secret = google secret manager secret.admin-token-secret.id secret data = " ADMIN TOKEN VALUE " } resource "google secret manager secret" "read-token-secret" { project = " PROJECT ID " secret id = " READ TOKEN NAME " replication { auto {} } } resource "google secret manager secret version" "read-token-secret-version" { secret = google secret manager secret.read-token-secret.id secret data = " READ TOKEN VALUE " } resource "google secret manager secret" "webhook-secret-secret" { project = " PROJECT ID " secret id = " WEBHOOK SECRET NAME " replication { auto {} } } resource "google secret manager secret version" "webhook-secret-secret-version" { secret = google secret manager secret.webhook-secret-secret.id secret data = " WEBHOOK SECRET VALUE " } data "google iam policy" "p4sa-secretAccessor" { binding { role = "roles/secretmanager.secretAccessor" members = [ "serviceAccount:service- PROJECT NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com" ] } } resource "google secret manager secret iam policy" "policy-pak" { project = google secret manager secret.admin-token-secret.project secret id = google secret manager secret.admin-token-secret.secret id policy data = data.google iam policy.p4sa-secretAccessor.policy data } resource "google secret manager secret iam policy" "policy-rpak" { project = google secret manager secret.read-token-secret.project secret id = google secret manager secret.read-token-secret.secret id policy data = data.google iam policy.p4sa-secretAccessor.policy data } resource "google secret manager secret iam policy" "policy-whs" { project = google secret manager secret.webhook-secret-secret.project secret id = google secret manager secret.webhook-secret-secret.secret id policy data = data.google iam policy.p4sa-secretAccessor.policy data } // Create the connection and add the repository resource resource "google cloudbuildv2 connection" "my-connection" { project = " PROJECT ID " location = " REGION " name = " CONNECTION NAME " bitbucket cloud config { workspace = " WORKSPACE ID " authorizer credential { user token secret version = google secret manager secret version.admin-token-secret-version.id } read authorizer credential { user token secret version = google secret manager secret version.read-token-secret-version.id } webhook secret secret version = google secret manager secret version.webhook-secret-secret-version.id } depends on = [ google secret manager secret iam policy.policy-pak , google secret manager secret iam policy.policy-rpak , google secret manager secret iam policy.policy-whs ] } Where: PROJECT ID is your Google Cloud project ID .
- Rotate old or expired Bitbucket Cloud access tokens If your Bitbucket Cloud access token expires, then your Cloud Build host connection is disconnected from its Bitbucket Cloud repository.
- As a result, you will see errors in the following circumstances: When you try to link a Bitbucket Cloud repository Cloud Build connection, a Failed to fetch repositories to link.
- Rotate each access token in Bitbucket Cloud: Go to the Bitbucket Cloud repository connected to your Cloud Build host connection.

### Build repositories from Bitbucket Cloud \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud)
- Source ID: `site-docs-root-2`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create to create your Bitbucket Cloud trigger. gcloud CLI To create Bitbucket Cloud triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- Enable the APIs To create a trigger for a Bitbucket Cloud repository, you must have a connection between Google Cloud and your repository.
- To create a connection through the Bitbucket Cloud app in Google Cloud, see Connect to a Bitbucket Cloud repository .
- API To create a Bitbucket Cloud trigger with the API, use the following JSON template: { "filename" : "cloudbuild.yaml" , "name" : "curl-trigger" , "description" : "curl trigger" , "bitbucket server trigger config" : { "repo slug" : " REPO SLUG " , "project key" : " PROJECT KEY " , "push" : { "branch" : " BRANCH NAME " # "tag" : " TAG NAME " }, "bitbucket server config resource" : "projects/ PROJECT NUMBER /locations/ REGION /bitbucketServerConfigs/ ID " "comment control" : " COMMENT SETTING " } } Where: REPO SLUG is the slug of your Bitbucket Server repository.

