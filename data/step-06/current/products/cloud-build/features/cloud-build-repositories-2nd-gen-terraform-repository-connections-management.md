---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.717Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build repositories 2nd gen Terraform repository connections management"
feature_slug: "cloud-build-repositories-2nd-gen-terraform-repository-connections-management"
latest_feature_date: "2023-02-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/github/connect-host-github-enterprise"
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center"
keywords:
  - "build"
  - "repositories"
  - "2nd"
  - "gen"
  - "terraform"
  - "repository"
  - "connections"
  - "management"
---

# Cloud Build repositories 2nd gen Terraform repository connections management

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build repositories (2nd gen) now support creating and managing repository connections through Terraform.

## Extended Definition

Cloud Build repositories (2nd gen) now support creating and managing repository connections through Terraform.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/github/connect-host-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/connect-host-github-enterprise)
- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)

## Supporting Pages

### "Connect to a GitHub Enterprise host \_|\_ Cloud Build \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/github/connect-host-github-enterprise](https://docs.cloud.google.com/build/docs/automating-builds/github/connect-host-github-enterprise)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the following example, the code snippet does the following: Configures the Terraform Google provider Creates a secret to store the GitHub App's private key and webhook secret Grants necessary permissions to the Cloud Build Service Agent to access secrets Creates a GitHub Enterprise connection // Configure the terraform google provider terraform { required providers { google = {} } } // create Secrets and grant permissions to the Service Agent resource "google secret manager secret" "private-key-secret" { project = " PROJECT ID " secret id = " PRIVATE KEY SECRET " replication { auto {} } } resource "google secret manager secret version" "private-key-secret-version" { secret = google secret manager secret.private-key-secret.id secret data = file ( "private-key.pem" ) } resource "google secret manager secret" "webhook-secret-secret" { project = " PROJECT ID " secret id = " WEBHOOK SECRET " replication { auto {} } } resource "google secret manager secret version" "webhook-secret-secret-version" { secret = google secret manager secret.webhook-secret-secret.id secret data = " WEBHOOK SECRET VALUE " } data "google iam policy" "serviceagent-secretAccessor" { binding { role = "roles/secretmanager.secretAccessor" members = [ "serviceAccount:service- PROJECT NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com" ] } } resource "google secret manager secret iam policy" "policy-pk" { project = google secret manager secret.private-key-secret.project secret id = google secret manager secret.private-key-secret.secret id policy data = data.google iam policy.serviceagent-secretAccessor.policy data } resource "google secret manager secret iam policy" "policy-whs" { project = google secret manager secret.webhook-secret-secret.project secret id = google secret manager secret.webhook-secret-secret.secret id policy data = data.google iam policy.serviceagent-secretAccessor.policy data } // create the connection and add the repository resource --- resource "google cloudbuildv2 connection" "my-connection" { project = " PROJECT ID " location = " REGION " name = " CONNECTION NAME " github enterprise config { host uri = " URI " private key secret version = google secret manager secret version.private-key-secret-version.id webhook secret secret version = google secret manager secret version.webhook-secret-secret-version.id app id = " APP ID " app slug = " APP SLUG " app installation id = INSTALLATION ID } depends on = [ google secret manager secret iam policy.policy-pk , google secret manager secret iam policy.policy-whs ] } Where: PROJECT ID is your Google Cloud project ID.
- To create connections using gcloud installation steps, grant the Secret Manager Admin role ( roles/secretmanager.admin ) to the Cloud Build Service Agent by running the following command in your Google Cloud project: PN=$(gcloud projects describe ${ PROJECT ID } --format="value(projectNumber)") CLOUD BUILD SERVICE AGENT="service- ${ PN } @gcp-sa-cloudbuild.iam.gserviceaccount.com" gcloud projects add-iam-policy-binding ${ PROJECT ID } \ --member="serviceAccount: ${ CLOUD BUILD SERVICE AGENT } " \ --role="roles/secretmanager.admin" Note: You can revoke the Secret Manager Admin role ( roles/secretmanager.admin ) after your connection is in state COMPLETE .
- After authorizing the Cloud Build GitHub App, you will be redirected to the Cloud Build Repositories page. gcloud To connect your GitHub Enterprise host to Cloud Build using gcloud commands, complete the following steps: Enter the following command to create a GitHub Enterprise connection: gcloud builds connections create github - enterprise CONNECTION NAME \ -- host - uri = HOST URI -- region = REGION Where: CONNECTION NAME is a name for your GitHub Enterprise host connection in Cloud Build.
- 1st gen 2nd gen This page explains how to connect a GitHub Enterprise host to Cloud Build.

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- February 08, 2023 Feature You can now create and manage repository connections using Terraform when using Cloud Build repositories (2nd gen).
- January 23, 2023 Feature Cloud Build repositories (2nd gen) lets you easily create and manage repository connections, not only through Cloud Console but also through gcloud and the Cloud Build API.
- Cloud Build repositories (2nd gen) integrates directly with GitHub , GitHub Enterprise , GitLab , and GitLab Enterprise Edition and comes with end-to-end Terraform support.
- May 11, 2023 Feature You can now create manual triggers , webhook triggers , or Pub/Sub triggers using Cloud Build repositories (2nd gen).

### Build repositories from Bitbucket Data Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- 1st gen 2nd gen Developer Connect Cloud Build lets you create triggers to build from repositories hosted on Bitbucket Data Center .
- Click Create to create your Bitbucket Cloud trigger. gcloud CLI To create Bitbucket Data Center triggers using gcloud commands, run the following command: gcloud alpha builds triggers create developer connect -- name = TRIGGER NAME \ -- git - repository - link = projects / PROJECT ID / locations / REGION / connections / CONNECTION NAME / gitRepositoryLinks / REPO NAME \ -- branch - pattern = BRANCH PATTERN # or -- tag - pattern = TAG PATTERN \ -- build - config = BUILD CONFIG FILE \ -- region = REGION \ -- service - account = SERVICE - ACCOUNT Where: TRIGGER NAME is the name of your trigger.
- Terraform For sample Terraform code about creating a build trigger and connecting it to your Bitbucket Data Center installation using Developer Connect, see the following topics in the Terraform documentation: Create a Developer Connect push trigger Create a Developer Connect pull trigger Data sharing The data sent to Bitbucket Data Center from Cloud Build helps you identify triggers by name and see build results on your Bitbucket Data Center repositories.
- Source : Configure information about your Bitbucket Data Center repository: Repository service : Select Cloud Build repositories.

