---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.882Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Anywhere Cache us-west3 support"
feature_slug: "anywhere-cache-us-west3-support"
latest_feature_date: "2025-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/resume"
keywords:
  - "anywhere"
  - "cache"
  - "us"
  - "west3"
  - "is"
  - "supported"
  - "in"
  - "the"
---

# Anywhere Cache us-west3 support

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Anywhere Cache is supported in the us-west3-a, us-west3-b, and us-west3-c zones.

## Extended Definition

Anywhere Cache is supported in the us-west3-a, us-west3-b, and us-west3-c zones.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable)
- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list)
- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get)
- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/resume](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/resume)

## Supporting Pages

### AnywhereCaches: disable \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable)
- Source ID: `site-docs-reference`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request HTTP request POST https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches/ anywhereCacheID /disable In addition to standard query parameters , the following parameters apply to this method.
- Required permissions The authenticated user must have the storage.anywhereCaches.disable IAM permission on the bucket to use this method.
- Response If successful, this method returns an AnywhereCache resource in the response body.
- The AnywhereCaches: resume API can revoke the disablement during the 1-hour grace period.

### AnywhereCaches: list \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list)
- Source ID: `site-docs-reference`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Response If successful, this method returns a list of AnywhereCache resources in the following structure: { "kind" : "storage#AnywhereCache" , "items" : [ AnywhereCache Resource ], "nextPageToken" : string } Try it!
- Request HTTP request GET https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches In addition to standard query parameters , the following parameters apply to this method.
- Required permissions The authenticated user must have the storage.anywhereCaches.list IAM permission on the bucket to use this method.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### AnywhereCaches: get \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get)
- Source ID: `site-docs-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request HTTP request GET https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches/ anywhereCacheID In addition to standard query parameters , the following parameters apply to this method.
- Required permissions The authenticated user must have the storage.anywhereCaches.get IAM permission on the bucket to use this method.
- Response If successful, this method returns an AnywhereCache resource in the response body.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### AnywhereCaches: resume \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/resume](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/resume)
- Source ID: `site-docs-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request HTTP request POST https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches/ anywhereCacheID /resume In addition to standard query parameters , the following parameters apply to this method.
- Required permissions The authenticated user must have the storage.anywhereCaches.resume IAM permission on the bucket to use this method.
- Response If successful, this method returns an AnywhereCache resource in the response body.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

