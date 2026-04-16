---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.927Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: ".NET 8 runtime"
feature_slug: "net-8-runtime"
latest_feature_date: "2024-01-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl"
  - "https://docs.cloud.google.com/functions/docs/securing/gen-org-policy"
keywords:
  - "net"
  - "runtime"
  - "run"
  - "functions"
  - "supports"
  - "2nd"
  - "gen"
---

# .NET 8 runtime

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports the .NET 8 runtime for 2nd gen functions; Cloud Run functions supports the .NET 8 runtime.

## Extended Definition

Cloud Run functions supports the .NET 8 runtime for 2nd gen functions; Cloud Run functions supports the .NET 8 runtime.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateUploadUrl)
- [https://docs.cloud.google.com/functions/docs/securing/gen-org-policy](https://docs.cloud.google.com/functions/docs/securing/gen-org-policy)

## Supporting Pages

### "Method: projects.locations.functions.generateDownloadUrl \_|\_ Cloud Run\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/generateDownloadUrl)
- Source ID: `site-docs-root`
- Final score: 46
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
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When making a HTTP PUT request, these two headers need to be specified: content-type: application/zip x-goog-content-length-range: 0,104857600 And this header SHOULD NOT be specified: Authorization: Bearer YOUR TOKEN HTTP request POST https://cloudfunctions.googleapis.com/v1/{parent}/functions:generateUploadUrl Path parameters Parameters parent string The project and location in which the Google Cloud Storage signed URL should be generated, specified in the format projects/ /locations/ .
- Authorization requires the following IAM permission on the specified resource parent : cloudfunctions.functions.sourceCodeSet Request body The request body contains data with the following structure: JSON representation { "kmsKeyName" : string } Fields kmsKeyName string Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function source code objects in intermediate Cloud Storage buckets.
- The Google Cloud Functions service account (service-{project number}@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role 'Cloud KMS CryptoKey Encrypter/Decrypter (roles/cloudkms.cryptoKeyEncrypterDecrypter)' on the Key/KeyRing/Project/Organization (least access preferred).
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Method: projects.locations.functions.generateUploadUrl Stay organized with collections Save and categorize content based on your preferences.

### "Restrict new deployments by product version \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/securing/gen-org-policy](https://docs.cloud.google.com/functions/docs/securing/gen-org-policy)
- Source ID: `site-iam-reference`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a policy that restricts new Cloud Run functions, run the following command: gcloud resource-manager org-policies \ allow cloudfunctions.restrictAllowedGenerations \ --organization = ORGANIZATION NUMBER VERSION where ORGANIZATION NUMBER is the number of the organization to which you want to apply the policy, and VERSION is the Cloud Run functions version that must be used for new deployments.
- If your organization wants to enforce a restriction specifying that only one of the versions can be used to deploy new functions, you can define a new organization policy with the constraint constraints/cloudfunctions.restrictAllowedGenerations .
- Use a policy to set and enforce restrictions You can use Google Cloud CLI to create a policy restricting new Cloud Run functions from being deployed for the first time within a given organization to the specified environment.
- Restrict new deployments by product version Note: In this document, "Cloud Run functions (2nd gen)" refers to Cloud Run functions created with the Google Cloud Functions v2 APIs.

