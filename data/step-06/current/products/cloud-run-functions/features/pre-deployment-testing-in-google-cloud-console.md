---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.932Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Pre-deployment testing in Google Cloud console"
feature_slug: "pre-deployment-testing-in-google-cloud-console"
latest_feature_date: "2023-08-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/securing/cmek"
  - "https://docs.cloud.google.com/functions/docs/securing/execution-environment-security"
  - "https://docs.cloud.google.com/functions/docs/troubleshooting"
keywords:
  - "pre"
  - "deployment"
  - "testing"
  - "console"
  - "run"
  - "functions"
  - "supports"
---

# Pre-deployment testing in Google Cloud console

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports pre-deployment testing in the Google Cloud console.

## Extended Definition

Cloud Run functions supports pre-deployment testing in the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)
- [https://docs.cloud.google.com/functions/docs/securing/execution-environment-security](https://docs.cloud.google.com/functions/docs/securing/execution-environment-security)
- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)

## Supporting Pages

### "Protect your data with CMEK \_|\_ Cloud Run functions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)
- Source ID: `site-iam-reference`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Granting service accounts access to the key For all functions, you must grant the following service accounts access to the key: Cloud Run functions service agent ( service- PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com ) Artifact Registry service agent ( service- PROJECT NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com ) Cloud Storage service agent ( service- PROJECT NUMBER @gs-project-accounts.iam.gserviceaccount.com ) Cloud Run service agent ( service- PROJECT NUMBER @serverless-robot-prod.iam.gserviceaccount.com ) Eventarc service agent ( service- PROJECT NUMBER @gcp-sa-eventarc.iam.gserviceaccount.com ) To grant these service accounts access to the key, add each service account as a principal of the key and then grant the service account the Cloud KMS CryptoKey Encrypter/Decrypter role: Console Go to the Cloud Key Management Service page in the Google Cloud console: Go to the Cloud KMS page Click the name of the key ring that contains the chosen key.
- The following types of Cloud Run functions data are encrypted when using a CMEK: Function source code uploaded for deployment and stored by Google in Cloud Storage, used in the build process.
- Cloud Run functions CMEK protection only applies to Google-managed Cloud Run functions resources; you are responsible for protecting data and resources managed by you, such as your source code repositories, event channels that live in the customer project, or any services used by your functions.
- Protect your data with CMEK This page provides supplemental information for protecting your data with customer-managed encryption keys (CMEKs) for functions created using gcloud functions commands or the Cloud Functions v2 API .

### "Execution environment security \_|\_ Cloud Run functions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/functions/docs/securing/execution-environment-security](https://docs.cloud.google.com/functions/docs/securing/execution-environment-security)
- Source ID: `site-iam-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Replace: FUNCTION NAME with the name of your function POLICY with automatic or on-deploy Inspect your function's update policy You can inspect your function's update policy with the following command: gcloud functions describe FUNCTION NAME \ Where FUNCTION NAME is the name of your function Functions with automatic security updates enabled will have the key automaticUpdatePolicy Functions that update on deployment will have the key onDeployUpdatePolicy Security scans on Cloud Run functions Cloud Run functions that have automatic updates enabled are built on top of a scratch image .
- As a result, the container that represents your function in Artifact Registry won't have a base image and will be considerably smaller than functions using on-deployment updates.
- On deployment updates : Updates and security patches are applied to runtimes only when functions are deployed or redeployed, unless otherwise noted.
- After a period of testing for stability and reliability, the updated runtime is rolled out to all functions resulting in a zero downtime update.

### Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- The error message Console ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/ PROJECT ID /locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com"] gcloud ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/<project-id>/locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com"] The solution To resolve this issue, reset this service account to the default role.
- The error message Console Validation failed for trigger projects/ PROJECT ID /locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com" gcloud ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/test-project-356312/locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com"] The solution You can reset your service account to the default cloudfunctions.serviceAgent role.
- The error message gcloud ResponseError: status=[400], code=[Ok], message=[" LOCATION " violates constraint "constraints/gcp.resourceLocations" on the resource "projects/ PROJECT ID /locations/ LOCATION /functions/ FUNCTION NAME ".] The solution You can add or remove locations from the allowed values or denied values lists of a resource locations constraint to suit successful deployment.
- The Create function feature is grayed out in the Google Cloud console with the following error: The error message gcloud ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Permission 'cloudfunctions.functions.generateUploadUrl' denied on 'projects/ PROJECT ID /locations/ LOCATION /functions'] The solution Assign the user Cloud Functions Developer role.

