---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.889Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Anywhere Cache"
feature_slug: "anywhere-cache"
latest_feature_date: "2025-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/update"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list"
keywords:
  - "anywhere"
  - "cache"
  - "provides"
  - "ssd"
  - "backed"
  - "caches"
  - "in"
  - "the"
---

# Anywhere Cache

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Anywhere Cache provides SSD-backed caches in the same zones as workloads to speed data access and reduce transfer fees.

## Extended Definition

Anywhere Cache provides SSD-backed caches in the same zones as workloads to speed data access and reduce transfer fees.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable)
- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/update](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/update)
- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get)
- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list)

## Supporting Pages

### AnywhereCaches: disable \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request HTTP request POST https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches/ anywhereCacheID /disable In addition to standard query parameters , the following parameters apply to this method.
- The AnywhereCaches: resume API can revoke the disablement during the 1-hour grace period.
- Parameters Parameter name Value Description Path parameters bucket string Name of a bucket. anywhereCacheID string A value that, along with the bucket's name, uniquely identifies the cache.
- Required permissions The authenticated user must have the storage.anywhereCaches.disable IAM permission on the bucket to use this method.

### AnywhereCaches: update \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/update](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/update)
- Source ID: `site-docs-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request HTTP request PATCH https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches/ anywhereCacheID In addition to standard query parameters , the following parameters apply to this method.
- Request body In the request body, supply an AnywhereCache resource with the following properties: Property name Value Description Notes Required Properties ttl string The time to live (TTL) of data in the cache, in seconds.
- Parameters Parameter name Value Description Path parameters bucket string Name of a bucket. anywhereCacheID string A value that, along with the bucket's name, uniquely identifies the cache.
- Required permissions The authenticated user must have the storage.anywhereCaches.update IAM permission on the bucket to use this method.

### AnywhereCaches: get \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/get)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request HTTP request GET https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches/ anywhereCacheID In addition to standard query parameters , the following parameters apply to this method.
- Parameters Parameter name Value Description Path parameters bucket string Name of a bucket. anywhereCacheID string A value that, along with the bucket's name, uniquely identifies the cache.
- Required permissions The authenticated user must have the storage.anywhereCaches.get IAM permission on the bucket to use this method.
- Response If successful, this method returns an AnywhereCache resource in the response body.

### AnywhereCaches: list \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/list)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request HTTP request GET https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches In addition to standard query parameters , the following parameters apply to this method.
- Response If successful, this method returns a list of AnywhereCache resources in the following structure: { "kind" : "storage#AnywhereCache" , "items" : [ AnywhereCache Resource ], "nextPageToken" : string } Try it!
- Required permissions The authenticated user must have the storage.anywhereCaches.list IAM permission on the bucket to use this method.
- Home Documentation Storage Cloud Storage Reference Send feedback AnywhereCaches: list Stay organized with collections Save and categorize content based on your preferences.

