---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.931Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Shared VPC ingress"
feature_slug: "shared-vpc-ingress"
latest_feature_date: "2023-10-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl"
  - "https://docs.cloud.google.com/functions/docs/securing/cmek"
keywords:
  - "shared"
  - "vpc"
  - "ingress"
  - "run"
  - "functions"
  - "supports"
  - "2nd"
  - "gen"
---

# Shared VPC ingress

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports Shared VPC ingress for 2nd gen functions and treats Shared VPC traffic as internal; Cloud Run functions 2nd gen supports accepting requests from a connected Shared VPC network, including with internal ingress settings.

## Extended Definition

Cloud Run functions supports Shared VPC ingress for 2nd gen functions and treats Shared VPC traffic as internal; Cloud Run functions 2nd gen supports accepting requests from a connected Shared VPC network, including with internal ingress settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)

## Supporting Pages

### "Method: projects.locations.functions.generateUploadUrl \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When making a HTTP PUT request, these two headers need to be specified: content-type: application/zip x-goog-content-length-range: 0,104857600 And this header SHOULD NOT be specified: Authorization: Bearer YOUR TOKEN HTTP request POST https://cloudfunctions.googleapis.com/v1/{parent}/functions:generateUploadUrl Path parameters Parameters parent string The project and location in which the Google Cloud Storage signed URL should be generated, specified in the format projects/ /locations/ .
- Authorization requires the following IAM permission on the specified resource parent : cloudfunctions.functions.sourceCodeSet Request body The request body contains data with the following structure: JSON representation { "kmsKeyName" : string } Fields kmsKeyName string Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function source code objects in intermediate Cloud Storage buckets.
- The Google Cloud Functions service account (service-{project number}@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role 'Cloud KMS CryptoKey Encrypter/Decrypter (roles/cloudkms.cryptoKeyEncrypterDecrypter)' on the Key/KeyRing/Project/Organization (least access preferred).
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Method: projects.locations.functions.generateUploadUrl Stay organized with collections Save and categorize content based on your preferences.

### "Method: projects.locations.functions.generateDownloadUrl \_|\_ Cloud Run\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls HTTP request POST https://cloudfunctions.googleapis.com/v1/{name}:generateDownloadUrl Path parameters Parameters name string The name of function for which source code Google Cloud Storage signed URL should be generated.
- Authorization requires the following IAM permission on the specified resource name : cloudfunctions.functions.sourceCodeGet Request body The request body contains data with the following structure: JSON representation { "versionId" : string } Fields versionId string The optional version of function.
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Method: projects.locations.functions.generateDownloadUrl Stay organized with collections Save and categorize content based on your preferences.
- It takes the form projects/{project}/locations/{location}/functions/{function} .

### "Protect your data with CMEK \_|\_ Cloud Run functions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)
- Source ID: `site-iam-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Granting service accounts access to the key For all functions, you must grant the following service accounts access to the key: Cloud Run functions service agent ( service- PROJECT NUMBER @gcf-admin-robot.iam.gserviceaccount.com ) Artifact Registry service agent ( service- PROJECT NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com ) Cloud Storage service agent ( service- PROJECT NUMBER @gs-project-accounts.iam.gserviceaccount.com ) Cloud Run service agent ( service- PROJECT NUMBER @serverless-robot-prod.iam.gserviceaccount.com ) Eventarc service agent ( service- PROJECT NUMBER @gcp-sa-eventarc.iam.gserviceaccount.com ) To grant these service accounts access to the key, add each service account as a principal of the key and then grant the service account the Cloud KMS CryptoKey Encrypter/Decrypter role: Console Go to the Cloud Key Management Service page in the Google Cloud console: Go to the Cloud KMS page Click the name of the key ring that contains the chosen key.
- Cloud Run functions CMEK protection only applies to Google-managed Cloud Run functions resources; you are responsible for protecting data and resources managed by you, such as your source code repositories, event channels that live in the customer project, or any services used by your functions.
- Protect your data with CMEK This page provides supplemental information for protecting your data with customer-managed encryption keys (CMEKs) for functions created using gcloud functions commands or the Cloud Functions v2 API .
- Enabling CMEK for a function After setting up an Artifact Registry repository with CMEK enabled and granting Cloud Run functions access to your key, you're ready to enable CMEK for your function.

