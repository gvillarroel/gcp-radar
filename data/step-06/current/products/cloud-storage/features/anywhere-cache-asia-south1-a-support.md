---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.880Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Anywhere Cache asia-south1-a support"
feature_slug: "anywhere-cache-asia-south1-a-support"
latest_feature_date: "2025-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCache"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get"
keywords:
  - "anywhere"
  - "cache"
  - "asia"
  - "south1"
  - "is"
  - "supported"
  - "in"
  - "the"
---

# Anywhere Cache asia-south1-a support

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Anywhere Cache is supported in the asia-south1-a zone.

## Extended Definition

Anywhere Cache is supported in the asia-south1-a zone.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable)
- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list)
- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCache](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCache)
- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get)

## Supporting Pages

### AnywhereCaches: disable \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request HTTP request POST https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches/ anywhereCacheID /disable In addition to standard query parameters , the following parameters apply to this method.
- Response If successful, this method returns an AnywhereCache resource in the response body.
- The AnywhereCaches: resume API can revoke the disablement during the 1-hour grace period.
- Parameters Parameter name Value Description Path parameters bucket string Name of a bucket. anywhereCacheID string A value that, along with the bucket's name, uniquely identifies the cache.

### AnywhereCaches: list \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Response If successful, this method returns a list of AnywhereCache resources in the following structure: { "kind" : "storage#AnywhereCache" , "items" : [ AnywhereCache Resource ], "nextPageToken" : string } Try it!
- Request HTTP request GET https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches In addition to standard query parameters , the following parameters apply to this method.
- Required permissions The authenticated user must have the storage.anywhereCaches.list IAM permission on the bucket to use this method.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### AnywhereCache \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCache](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCache)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource representation { "kind": "storage#AnywhereCache" "id": string , "selfLink": string , "bucket": string , "zone": string , "state": string , "createTime": datetime , "updateTime": datetime , "ttl": string , "ingestOnWrite": boolean , "pendingUpdate": boolean } Property name Value Description Notes kind string The kind of item this is.
- For caches, this is always " storage#anywhereCache ". id string The ID of the cache instance, formatted as BUCKET NAME / ANYWHERE CACHE ZONE ID .
- Methods create Create a Rapid Cache cache. disable Disable a Rapid Cache cache. get Get a Rapid Cache cache. list Retrieve a list of Rapid Cache caches. resume Resume the data ingestion of a Rapid Cache cache, or revoke the disablement of the cache. update Update a Rapid Cache cache.
- Can be CREATING , RUNNING , or DISABLED . createTime datetime The creation time of the cache instance. updateTime datetime The last modification time of the cache instance. ttl string The TTL (time to live) of data in the cache, in seconds.

### AnywhereCaches: get \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request HTTP request GET https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches/ anywhereCacheID In addition to standard query parameters , the following parameters apply to this method.
- Response If successful, this method returns an AnywhereCache resource in the response body.
- Parameters Parameter name Value Description Path parameters bucket string Name of a bucket. anywhereCacheID string A value that, along with the bucket's name, uniquely identifies the cache.
- Required permissions The authenticated user must have the storage.anywhereCaches.get IAM permission on the bucket to use this method.

