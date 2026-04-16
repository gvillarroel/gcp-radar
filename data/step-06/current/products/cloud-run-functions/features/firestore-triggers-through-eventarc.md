---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.947Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Firestore triggers through Eventarc"
feature_slug: "firestore-triggers-through-eventarc"
latest_feature_date: "2023-05-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/managing"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl"
keywords:
  - "firestore"
  - "triggers"
  - "through"
  - "eventarc"
  - "run"
  - "functions"
  - "supports"
  - "2nd"
---

# Firestore triggers through Eventarc

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports 2nd gen Firestore triggers through Eventarc.

## Extended Definition

Cloud Run functions supports 2nd gen Firestore triggers through Eventarc.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl)

## Supporting Pages

### Manage functions \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing)
- Source ID: `site-iam-reference`
- Final score: 35
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- During the detach operation, Cloud Run functions modifies the triggers attached to functions configured with no retry on failure , to ensure that the underlying Pub/Sub topic makes a maximum of five delivery attempts.
- Triggers cannot be managed through the run.googleapis.com API directly.
- Triggers attached to event-driven functions will be retained.
- For example, you can update an existing function using either gcloud functions or gcloud run commands: gcloud functions gcloud functions deploy FUNCTION NAME \ --runtime=nodejs24 \ --source= . \ --entry-point= ENTRYPOINT --trigger-http gcloud run gcloud run deploy FUNCTION NAME \ --source= . \ --function= ENTRYPOINT --base-image=google-22-full/nodejs24 Detach The gcloud functions detach command lets you detach a Cloud Functions v2 function from its existing API environment.

### "Method: projects.locations.functions.generateDownloadUrl \_|\_ Cloud Run\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls HTTP request POST https://cloudfunctions.googleapis.com/v1/{name}:generateDownloadUrl Path parameters Parameters name string The name of function for which source code Google Cloud Storage signed URL should be generated.
- Authorization requires the following IAM permission on the specified resource name : cloudfunctions.functions.sourceCodeGet Request body The request body contains data with the following structure: JSON representation { "versionId" : string } Fields versionId string The optional version of function.
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Method: projects.locations.functions.generateDownloadUrl Stay organized with collections Save and categorize content based on your preferences.
- It takes the form projects/{project}/locations/{location}/functions/{function} .

### "Method: projects.locations.functions.generateUploadUrl \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- When making a HTTP PUT request, these two headers need to be specified: content-type: application/zip x-goog-content-length-range: 0,104857600 And this header SHOULD NOT be specified: Authorization: Bearer YOUR TOKEN HTTP request POST https://cloudfunctions.googleapis.com/v1/{parent}/functions:generateUploadUrl Path parameters Parameters parent string The project and location in which the Google Cloud Storage signed URL should be generated, specified in the format projects/ /locations/ .
- Authorization requires the following IAM permission on the specified resource parent : cloudfunctions.functions.sourceCodeSet Request body The request body contains data with the following structure: JSON representation { "kmsKeyName" : string } Fields kmsKeyName string Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function source code objects in intermediate Cloud Storage buckets.
- The Google Cloud Functions service account (service-{project number}@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role 'Cloud KMS CryptoKey Encrypter/Decrypter (roles/cloudkms.cryptoKeyEncrypterDecrypter)' on the Key/KeyRing/Project/Organization (least access preferred).
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Method: projects.locations.functions.generateUploadUrl Stay organized with collections Save and categorize content based on your preferences.

