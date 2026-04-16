---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:18.911Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Deploy v2 functions in Cloud Run"
feature_slug: "deploy-v2-functions-in-cloud-run"
latest_feature_date: "2025-02-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/concepts/overview"
  - "https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get"
  - "https://docs.cloud.google.com/functions/docs/securing/gen-org-policy"
keywords:
  - "deploy"
  - "v2"
  - "functions"
  - "run"
  - "supports"
  - "deploying"
  - "customization"
---

# Deploy v2 functions in Cloud Run

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports deploying v2 functions in Cloud Run with Cloud Run service customization.

## Extended Definition

Cloud Run functions supports deploying v2 functions in Cloud Run with Cloud Run service customization.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/concepts/overview](https://docs.cloud.google.com/functions/docs/concepts/overview)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get)
- [https://docs.cloud.google.com/functions/docs/securing/gen-org-policy](https://docs.cloud.google.com/functions/docs/securing/gen-org-policy)

## Supporting Pages

### Functions overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/concepts/overview](https://docs.cloud.google.com/functions/docs/concepts/overview)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you have existing functions and need to use gcloud functions commands or the Cloud Functions v2 API for backward compatibility, see Deploy functions created with the v2 API .
- For Cloud Run functions (1st gen), see Deploy a function (1st gen) .
- Home Documentation Application hosting Cloud Run Cloud Run functions Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Functions overview See the following documentation based on your function version: For Cloud Run functions, see Cloud Run documentation .

### "Method: projects.locations.functions.get \_|\_ Cloud Run functions \_|\_\

- URL: [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions/get)
- Source ID: `site-docs-root`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting Cloud Run Cloud Run functions Reference Send feedback Method: projects.locations.functions.get Stay organized with collections Save and categorize content based on your preferences.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloudfunctions https://www.googleapis.com/auth/cloud-platform For more information, see the Authentication Overview .
- Authorization requires the following IAM permission on the specified resource name : cloudfunctions.functions.get Query parameters Parameters versionId string ( int64 format) Optional.
- HTTP request GET https://cloudfunctions.googleapis.com/v1/{name} Path parameters Parameters name string Required.

### "Restrict new deployments by product version \_|\_ Cloud Run functions \_\

- URL: [https://docs.cloud.google.com/functions/docs/securing/gen-org-policy](https://docs.cloud.google.com/functions/docs/securing/gen-org-policy)
- Source ID: `site-iam-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- To create a policy that restricts new Cloud Run functions, run the following command: gcloud resource-manager org-policies \ allow cloudfunctions.restrictAllowedGenerations \ --organization = ORGANIZATION NUMBER VERSION where ORGANIZATION NUMBER is the number of the organization to which you want to apply the policy, and VERSION is the Cloud Run functions version that must be used for new deployments.
- If your organization wants to enforce a restriction specifying that only one of the versions can be used to deploy new functions, you can define a new organization policy with the constraint constraints/cloudfunctions.restrictAllowedGenerations .
- Use a policy to set and enforce restrictions You can use Google Cloud CLI to create a policy restricting new Cloud Run functions from being deployed for the first time within a given organization to the specified environment.
- Restrict new deployments by product version Note: In this document, "Cloud Run functions (2nd gen)" refers to Cloud Run functions created with the Google Cloud Functions v2 APIs.

