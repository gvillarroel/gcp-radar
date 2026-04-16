---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.912Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Google Cloud console management for v2 functions"
feature_slug: "google-cloud-console-management-for-v2-functions"
latest_feature_date: "2025-02-19"
deprecation_date: "2025-02-19"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/troubleshooting"
  - "https://docs.cloud.google.com/functions/docs/reference/iam/roles"
  - "https://docs.cloud.google.com/functions/docs/building"
keywords:
  - "console"
  - "management"
  - "v2"
  - "functions"
  - "creating"
  - "deploying"
  - "updating"
  - "was"
---

# Google Cloud console management for v2 functions

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

Google Cloud console support for creating, deploying, and updating v2 functions was removed; deprecated on 2025-02-19.

## Extended Definition

Google Cloud console support for creating, deploying, and updating v2 functions was removed; deprecated on 2025-02-19.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles)
- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)

## Supporting Pages

### Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
- Source ID: `site-iam-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Administration actions include creating, updating, and deleting functions.
- The error message Console ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/ PROJECT ID /locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com"] gcloud ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/<project-id>/locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com"] The solution To resolve this issue, reset this service account to the default role.
- The error message Console Validation failed for trigger projects/ PROJECT ID /locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com" gcloud ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/test-project-356312/locations/ LOCATION /triggers/ FUNCTION NAME - EVENTARC ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT NUMBER -compute@developer.gserviceaccount.com"] The solution You can reset your service account to the default cloudfunctions.serviceAgent role.
- The Create function feature is grayed out in the Google Cloud console with the following error: The error message gcloud ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Permission 'cloudfunctions.functions.generateUploadUrl' denied on 'projects/ PROJECT ID /locations/ LOCATION /functions'] The solution Assign the user Cloud Functions Developer role.

### Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- Source ID: `site-iam-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: Deploying function ( may take a while - up to 2 minutes ) ...⠹ For Cloud Build Stackdriver Logs , visit: https://console.cloud.google.com/logs/viewer?project = & advancedFilter = resource.type% 3Dbuild%0Aresource.labels.build id%3D38d5b662-2315-45dd-8aa2- 380d50d4f5e8%0AlogName%3Dprojects%2F % 2Flogs%2Fcloudbuild Deploying function ( may take a while - up to 2 minutes ) ...done.
- To stop using a given private pool and instead use the default Cloud Build pool, use the --clear-build-worker-pool flag when re-deploying. gcloud functions deploy FUNCTION NAME \ --runtime RUNTIME \ --clear-build-worker-pool [ FLAGS... ] Replace FUNCTION NAME with the name of the function and RUNTIME with the runtime you are using.
- You can use gcloud CLI or the Google Cloud console to reach the logs, which are available through Cloud Logging . gcloud Deploy your function using the gcloud functions deploy command .
- As a result of this change, new projects deploying functions for the first time may be using a default Cloud Build service account with insufficient permissions for building a function.

### Cloud Functions IAM Roles \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles)
- Source ID: `site-docs-reference-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Administration actions include creating, updating, and deleting functions.
- To deploy Cloud Run functions that were created with the Cloud Functions v1 API or v2 API, ask your administrator to grant you the following IAM roles: Cloud Functions Admin role ( roles/cloudfunctions.admin ), Cloud Functions Developer role ( roles/cloudfunctions.developer ), or a custom role that has the required permissions for deploying functions on the project.
- Additional configuration for deployment You use Identity and Access Management to authorize identities to perform administrative actions on functions created using the Cloud Functions v2 API —for example, using gcloud functions , the REST API, or Terraform.
- Predefined roles The following table describes Identity and Access Management (IAM) roles that are associated with Cloud Run functions (formerly known as Cloud Functions), and lists the permissions that are contained in each role.

