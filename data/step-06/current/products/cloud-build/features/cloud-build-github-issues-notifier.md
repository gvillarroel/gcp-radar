---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.860Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build GitHub Issues notifier"
feature_slug: "cloud-build-github-issues-notifier"
latest_feature_date: "2022-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events"
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/connect-host-github-enterprise"
  - "https://docs.cloud.google.com/build/docs/automate-builds-webhook-events"
keywords:
  - "includes"
  - "creates"
  - "issues"
  - "response"
  - "events"
  - "notifier"
  - "github"
---

# Cloud Build GitHub Issues notifier

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build includes a GitHub Issues notifier that creates GitHub issues in response to build events.

## Extended Definition

Cloud Build includes a GitHub Issues notifier that creates GitHub issues in response to build events.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/connect-host-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/connect-host-github-enterprise)
- [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)

## Supporting Pages

### "Automate builds in response to Pub/Sub events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events](https://docs.cloud.google.com/build/docs/automate-builds-pubsub-events)
- Source ID: `site-docs-root-2`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Comment control : If you selected Pull request (GitHub App only) as your Event , choose one of the following options to control whether a build will automatically be executed by the trigger: Warning: Any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the source code in the pull request.
- Comment control : If you selected Pull request (GitHub App only) as your Event , choose one of the following options to control whether a build will automatically be executed by the trigger: Warning: Any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the source code in the pull request.
- Home Documentation Application development Cloud Build Guides Send feedback Automate builds in response to Pub/Sub events Stay organized with collections Save and categorize content based on your preferences.
- This page explains how you can create a Pub/Sub trigger to automate builds in response to events on Artifact Registry and Cloud Storage.

### "Connect to a GitHub Enterprise host \_|\_ Cloud Build \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/connect-host-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/connect-host-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Permissions section, specify the following permissions: Repository permissions : Checks : Read and write Contents : Read and write Issues : Read-only Metadata Read-only Commit statuses : Read-only Pull requests : Read-only In the Subscribe to events section, check the following boxes: Check run Check suite Commit comment Issue comment Pull request Pull request review comment Push Repository Check the box for Any account to allow your GitHub app to be installed by any user or organization.
- In the following example, the code snippet does the following: Configures the Terraform Google provider Creates a secret to store the GitHub App's private key and webhook secret Grants necessary permissions to the Cloud Build Service Agent to access secrets Creates a GitHub Enterprise connection // Configure the terraform google provider terraform { required providers { google = {} } } // create Secrets and grant permissions to the Service Agent resource "google secret manager secret" "private-key-secret" { project = " PROJECT ID " secret id = " PRIVATE KEY SECRET " replication { auto {} } } resource "google secret manager secret version" "private-key-secret-version" { secret = google secret manager secret.private-key-secret.id secret data = file ( "private-key.pem" ) } resource "google secret manager secret" "webhook-secret-secret" { project = " PROJECT ID " secret id = " WEBHOOK SECRET " replication { auto {} } } resource "google secret manager secret version" "webhook-secret-secret-version" { secret = google secret manager secret.webhook-secret-secret.id secret data = " WEBHOOK SECRET VALUE " } data "google iam policy" "serviceagent-secretAccessor" { binding { role = "roles/secretmanager.secretAccessor" members = [ "serviceAccount:service- PROJECT NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com" ] } } resource "google secret manager secret iam policy" "policy-pk" { project = google secret manager secret.private-key-secret.project secret id = google secret manager secret.private-key-secret.secret id policy data = data.google iam policy.serviceagent-secretAccessor.policy data } resource "google secret manager secret iam policy" "policy-whs" { project = google secret manager secret.webhook-secret-secret.project secret id = google secret manager secret.webhook-secret-secret.secret id policy data = data.google iam policy.serviceagent-secretAccessor.policy data } // create the connection and add the repository resource --- resource "google cloudbuildv2 connection" "my-connection" { project = " PROJECT ID " location = " REGION " name = " CONNECTION NAME " github enterprise config { host uri = " URI " private key secret version = google secret manager secret version.private-key-secret-version.id webhook secret secret version = google secret manager secret version.webhook-secret-secret-version.id app id = " APP ID " app slug = " APP SLUG " app installation id = INSTALLATION ID } depends on = [ google secret manager secret iam policy.policy-pk , google secret manager secret iam policy.policy-whs ] } Where: PROJECT ID is your Google Cloud project ID.
- Your installation ID can be found in the URL of your Cloud Build GitHub App, https://github.com/settings/installations/{installation-id} . gcloud After you have installed your GitHub app, complete the following steps to connect your GitHub Enterprise host programmatically using gcloud : Store your secrets in Secret Manager: echo - n WEBHOOK SECRET gcloud secrets create mygheapp - webhook - secret -- data - file =- creating secret from the downloaded private key: gcloud secrets create mygheapp - private - key -- data - file = PRIVATE KEY FILE Where: WEBHOOK SECRET is the string you created for your webhook secret.
- Create your GitHub Enterprise connection: gcloud builds connections create github - enterprise CONNECTION NAME \ -- host - uri = HOST URI \ -- app - id = APP ID \ -- app - slug = APP SLUG \ -- private - key - secret - version = projects / PROJECT ID / secrets / mygheapp - private - key / versions / 1 \ -- webhook - secret - secret - version = projects / PROJECT ID / secrets / mygheapp - webhook - secret / versions / 1 \ -- app - installation - id = INSTALLATION ID \ -- region = REGION Where: CONNECTION NAME is a name for your GitHub Enterprise host connection in Cloud Build.

### "Automate builds in response to webhook events \_|\_ Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/automate-builds-webhook-events](https://docs.cloud.google.com/build/docs/automate-builds-webhook-events)
- Source ID: `site-docs-root-2`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Comment control : If you selected Pull request (GitHub App only) as your Event , choose one of the following options to control whether a build will automatically be executed by the trigger: Warning: Any user with read access to the repository can submit a pull request, which may execute a build that includes changes to the source code in the pull request.
- Home Documentation Application development Cloud Build Guides Send feedback Automate builds in response to webhook events Stay organized with collections Save and categorize content based on your preferences.
- Event : Select Webhook event to set up your trigger to start builds in response to incoming webhook events.
- This page outlines how you can create webhook triggers to automate builds in response to webhook events.

