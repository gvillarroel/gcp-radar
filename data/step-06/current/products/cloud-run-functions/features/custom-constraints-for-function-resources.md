---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.916Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Custom constraints for function resources"
feature_slug: "custom-constraints-for-function-resources"
latest_feature_date: "2024-10-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get"
keywords:
  - "custom"
  - "constraints"
  - "resources"
  - "run"
  - "functions"
  - "supports"
  - "managing"
  - "enforced"
---

# Custom constraints for function resources

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports managing function resources with custom constraints enforced at the project level; Cloud Run functions supports managing function resources with custom constraints enforced at the project level.

## Extended Definition

Cloud Run functions supports managing function resources with custom constraints enforced at the project level; Cloud Run functions supports managing function resources with custom constraints enforced at the project level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get)

## Supporting Pages

### "Method: projects.locations.functions.generateDownloadUrl \_|\_ Cloud Run\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls HTTP request POST https://cloudfunctions.googleapis.com/v1/{name}:generateDownloadUrl Path parameters Parameters name string The name of function for which source code Google Cloud Storage signed URL should be generated.
- Authorization requires the following IAM permission on the specified resource name : cloudfunctions.functions.sourceCodeGet Request body The request body contains data with the following structure: JSON representation { "versionId" : string } Fields versionId string The optional version of function.
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Method: projects.locations.functions.generateDownloadUrl Stay organized with collections Save and categorize content based on your preferences.
- It takes the form projects/{project}/locations/{location}/functions/{function} .

### "Method: projects.locations.functions.generateUploadUrl \_|\_ Cloud Run functions\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When making a HTTP PUT request, these two headers need to be specified: content-type: application/zip x-goog-content-length-range: 0,104857600 And this header SHOULD NOT be specified: Authorization: Bearer YOUR TOKEN HTTP request POST https://cloudfunctions.googleapis.com/v1/{parent}/functions:generateUploadUrl Path parameters Parameters parent string The project and location in which the Google Cloud Storage signed URL should be generated, specified in the format projects/ /locations/ .
- Authorization requires the following IAM permission on the specified resource parent : cloudfunctions.functions.sourceCodeSet Request body The request body contains data with the following structure: JSON representation { "kmsKeyName" : string } Fields kmsKeyName string Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function source code objects in intermediate Cloud Storage buckets.
- The Google Cloud Functions service account (service-{project number}@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role 'Cloud KMS CryptoKey Encrypter/Decrypter (roles/cloudkms.cryptoKeyEncrypterDecrypter)' on the Key/KeyRing/Project/Organization (least access preferred).
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Method: projects.locations.functions.generateUploadUrl Stay organized with collections Save and categorize content based on your preferences.

### "Method: projects.locations.functions.get \_|\_ Cloud Run functions \_|\_\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Method: projects.locations.functions.get Stay organized with collections Save and categorize content based on your preferences.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloudfunctions https://www.googleapis.com/auth/cloud-platform For more information, see the Authentication Overview .
- Authorization requires the following IAM permission on the specified resource name : cloudfunctions.functions.get Query parameters Parameters versionId string ( int64 format) Optional.
- HTTP request GET https://cloudfunctions.googleapis.com/v1/{name} Path parameters Parameters name string Required.

