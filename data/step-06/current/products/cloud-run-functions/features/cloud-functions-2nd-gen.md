---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.015Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Cloud Functions 2nd gen"
feature_slug: "cloud-functions-2nd-gen"
latest_feature_date: "2022-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/functions/docs/reference/headers"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl"
keywords:
  - "functions"
  - "2nd"
  - "gen"
  - "run"
  - "includes"
  - "offering"
  - "advanced"
  - "infrastructure"
---

# Cloud Functions 2nd gen

Product: Cloud Run functions
Coverage: MEDIUM

## Step 02 Summary

Cloud Run functions includes a 2nd gen offering with advanced infrastructure, performance controls, runtime control, and broad event source support.

## Extended Definition

Cloud Run functions includes a 2nd gen offering with advanced infrastructure, performance controls, runtime control, and broad event source support.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/reference/headers](https://docs.cloud.google.com/functions/docs/reference/headers)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl)

## Supporting Pages

### "Method: projects.locations.functions.generateDownloadUrl \_|\_ Cloud Run\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- Source ID: `site-docs-root`
- Final score: 54
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
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When making a HTTP PUT request, these two headers need to be specified: content-type: application/zip x-goog-content-length-range: 0,104857600 And this header SHOULD NOT be specified: Authorization: Bearer YOUR TOKEN HTTP request POST https://cloudfunctions.googleapis.com/v1/{parent}/functions:generateUploadUrl Path parameters Parameters parent string The project and location in which the Google Cloud Storage signed URL should be generated, specified in the format projects/ /locations/ .
- Authorization requires the following IAM permission on the specified resource parent : cloudfunctions.functions.sourceCodeSet Request body The request body contains data with the following structure: JSON representation { "kmsKeyName" : string } Fields kmsKeyName string Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function source code objects in intermediate Cloud Storage buckets.
- The Google Cloud Functions service account (service-{project number}@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role 'Cloud KMS CryptoKey Encrypter/Decrypter (roles/cloudkms.cryptoKeyEncrypterDecrypter)' on the Key/KeyRing/Project/Organization (least access preferred).
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Method: projects.locations.functions.generateUploadUrl Stay organized with collections Save and categorize content based on your preferences.

### "Request Headers in Cloud Functions \_|\_ Cloud Run functions \_|\_ Google\

- URL: [https://docs.cloud.google.com/functions/docs/reference/headers](https://docs.cloud.google.com/functions/docs/reference/headers)
- Source ID: `site-docs-reference-2`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition, the following headers are removed from incoming requests because they relate to the transfer of HTTP data between the client and server: Connection Keep-Alive Proxy-Authorization TE Trailer Transfer-Encoding Note: Entity headers (headers relating to the request body) are not sanitized or checked, so functions should not rely on them.
- Headers added for your use Cloud Functions adds the following headers to all requests: X-Cloud-Trace-Context A unique identifier for the request used for Cloud Trace and Cloud Logging .
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- For example, if the request is sent to: https:// YOUR PROJECT ID .cloudfunctions.net/ YOUR FUNCTION NAME the X-Forwarded-Proto header value is https .

