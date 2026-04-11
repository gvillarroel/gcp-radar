---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.646Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Anywhere Cache us-west3 support"
feature_slug: "anywhere-cache-us-west3-support"
latest_feature_date: "2025-07-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get"
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
Coverage: LOW

## Step 02 Summary

Anywhere Cache is supported in the us-west3-a, us-west3-b, and us-west3-c zones.

## Extended Definition

Anywhere Cache is supported in the us-west3-a, us-west3-b, and us-west3-c zones.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable)
- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list)
- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get)

## Supporting Pages

### AnywhereCaches: disable \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Request HTTP request POST https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches/ anywhereCacheID /disable In addition to standard query parameters , the following parameters apply to this method.
- Required permissions The authenticated user must have the storage.anywhereCaches.disable IAM permission on the bucket to use this method.
- Response If successful, this method returns an AnywhereCache resource in the response body.
- The AnywhereCaches: resume API can revoke the disablement during the 1-hour grace period.

### AnywhereCaches: list \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Response If successful, this method returns a list of AnywhereCache resources in the following structure: { "kind" : "storage#AnywhereCache" , "items" : [ AnywhereCache Resource ], "nextPageToken" : string } Try it!
- Request HTTP request GET https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches In addition to standard query parameters , the following parameters apply to this method.
- Required permissions The authenticated user must have the storage.anywhereCaches.list IAM permission on the bucket to use this method.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### AnywhereCaches: get \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Request HTTP request GET https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches/ anywhereCacheID In addition to standard query parameters , the following parameters apply to this method.
- Required permissions The authenticated user must have the storage.anywhereCaches.get IAM permission on the bucket to use this method.
- Response If successful, this method returns an AnywhereCache resource in the response body.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

