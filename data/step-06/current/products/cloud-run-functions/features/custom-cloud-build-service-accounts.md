---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.922Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Custom Cloud Build service accounts"
feature_slug: "custom-cloud-build-service-accounts"
latest_feature_date: "2024-03-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/securing/cmek"
  - "https://docs.cloud.google.com/functions/docs/building"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl"
keywords:
  - "custom"
  - "build"
  - "accounts"
  - "run"
  - "functions"
  - "supports"
  - "1st"
  - "gen"
---

# Custom Cloud Build service accounts

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports custom service accounts for Cloud Build for 1st gen functions; Cloud Run functions supports custom service accounts for Cloud Build for 2nd gen functions.

## Extended Definition

Cloud Run functions supports custom service accounts for Cloud Build for 1st gen functions; Cloud Run functions supports custom service accounts for Cloud Build for 2nd gen functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)
- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)

## Supporting Pages

### "Protect your data with CMEK \_|\_ Cloud Run functions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)
- Source ID: `site-iam-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Granting service accounts access to the key For all functions, you must grant the following service accounts access to the key: Cloud Run functions service agent ( service- PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com ) Artifact Registry service agent ( service- PROJECT NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com ) Cloud Storage service agent ( service- PROJECT NUMBER @gs-project-accounts.iam.gserviceaccount.com ) Cloud Run service agent ( service- PROJECT NUMBER @serverless-robot-prod.iam.gserviceaccount.com ) Eventarc service agent ( service- PROJECT NUMBER @gcp-sa-eventarc.iam.gserviceaccount.com ) To grant these service accounts access to the key, add each service account as a principal of the key and then grant the service account the Cloud KMS CryptoKey Encrypter/Decrypter role: Console Go to the Cloud Key Management Service page in the Google Cloud console: Go to the Cloud KMS page Click the name of the key ring that contains the chosen key.
- Cloud Run functions CMEK protection only applies to Google-managed Cloud Run functions resources; you are responsible for protecting data and resources managed by you, such as your source code repositories, event channels that live in the customer project, or any services used by your functions.
- Protect your data with CMEK This page provides supplemental information for protecting your data with customer-managed encryption keys (CMEKs) for functions created using gcloud functions commands or the Cloud Functions v2 API .
- The following types of Cloud Run functions data are encrypted when using a CMEK: Function source code uploaded for deployment and stored by Google in Cloud Storage, used in the build process.

### Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- Source ID: `site-iam-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- You can optionally use a private pool , which you specify using the --build-worker-pool flag. gcloud functions deploy FUNCTION NAME \ -- gen2 \ -- region = REGION \ -- project = PROJECT ID \ -- runtime = RUNTIME \ -- entry - point = CODE ENTRYPOINT \ -- build - service - account = projects / PROJECT ID / serviceAccounts / SA EMAIL \ -- memory = 256 Mi \ -- trigger - http \ -- source = .
- To use Cloud Run functions with VPC Service Controls, you must configure your Cloud Build service account (whether default or custom ) to have access to your service perimeter.
- If your private worker pool is in a different project than your function, you need to grant the Cloud Functions Service Agent Service Account ( service-FUNCTION PROJECT NUMBER@gcf-admin-robot.iam.gserviceaccount.com ) the cloudbuild.workerPoolUser role so that the Cloud Build service can access the worker pool. gcloud projects add-iam-policy-binding PRIVATE POOL PROJECT ID \ --member serviceAccount:service- FUNCTION PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com --role roles/cloudbuild.workerPoolUser Replace FUNCTION PROJECT NUMBER with the number of the project where the function runs and PRIVATE POOL PROJECT ID with the ID of the project in which the worker pool is located.
- If you want to move your existing projects away from this service account, you can take the following steps to further secure your functions build environment: Prevent the legacy Cloud Build service account from being used for the build Prevent the default Compute service account from being used for the build Configure a new service account with appropriately scoped permissions to be used for the build Prevent the legacy Cloud Build service account from being used for build Warning: This will temporarily break all deployments until you assign a new service account.

### "Method: projects.locations.functions.generateDownloadUrl \_|\_ Cloud Run\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls HTTP request POST https://cloudfunctions.googleapis.com/v1/{name}:generateDownloadUrl Path parameters Parameters name string The name of function for which source code Google Cloud Storage signed URL should be generated.
- Authorization requires the following IAM permission on the specified resource name : cloudfunctions.functions.sourceCodeGet Request body The request body contains data with the following structure: JSON representation { "versionId" : string } Fields versionId string The optional version of function.
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Method: projects.locations.functions.generateDownloadUrl Stay organized with collections Save and categorize content based on your preferences.
- It takes the form projects/{project}/locations/{location}/functions/{function} .

