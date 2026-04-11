---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.929Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Cloud Run v1alpha1 API"
feature_slug: "cloud-run-v1alpha1-api"
latest_feature_date: "2020-01-27"
deprecation_date: "2020-01-27"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/apis"
  - "https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.pagers.ListRevisionsAsyncPager"
keywords:
  - "run"
  - "v1alpha1"
  - "api"
  - "the"
  - "is"
  - "deprecated"
  - "and"
  - "replaced"
---

# Cloud Run v1alpha1 API

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

The Cloud Run v1alpha1 API is deprecated and replaced by the Cloud Run v1 API; deprecated on 2020-01-27.

## Extended Definition

The Cloud Run v1alpha1 API is deprecated and replaced by the Cloud Run v1 API; deprecated on 2020-01-27.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/apis](https://docs.cloud.google.com/run/docs/apis)
- [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.pagers.ListRevisionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.pagers.ListRevisionsAsyncPager)

## Supporting Pages

### APIs and references \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/apis](https://docs.cloud.google.com/run/docs/apis)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting Cloud Run Reference Send feedback APIs and references Stay organized with collections Save and categorize content based on your preferences.
- Cloud Run Admin API overview Cloud Run Overview page for the Cloud Run Admin API. gcloud command reference Cloud Run gcloud command reference.
- About API versions Describes difference between v1 and v2 of the Cloud Run Admin API.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]

### Authenticate to Cloud Run Admin API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page provides information and links for authenticating to the Cloud Run Admin API.
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .
- Home Documentation Application hosting Cloud Run Send feedback Authenticate to Cloud Run Admin API Stay organized with collections Save and categorize content based on your preferences.
- You can access the Cloud Run Admin API using the following methods: Google Cloud CLI REST API Cloud Client Libraries This page doesn't cover authenticating to Cloud Run services.

### "Class ListRevisionsAsyncPager (0.16.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.pagers.ListRevisionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.pagers.ListRevisionsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.run v2.types.ListRevisionsRequest The initial request object. response google.cloud.run v2.types.ListRevisionsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If there are more pages, the aiter method will make additional ListRevisions requests and continue to iterate through the revisions field on the corresponding responses.

