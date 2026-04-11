---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.664Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Anywhere Cache"
feature_slug: "anywhere-cache"
latest_feature_date: "2025-03-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/update"
  - "https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/create"
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
Coverage: LOW

## Step 02 Summary

Anywhere Cache provides SSD-backed caches in the same zones as workloads to speed data access and reduce transfer fees.

## Extended Definition

Anywhere Cache provides SSD-backed caches in the same zones as workloads to speed data access and reduce transfer fees.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable)
- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/update](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/update)
- [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/create](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/create)

## Supporting Pages

### AnywhereCaches: disable \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/disable)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Request HTTP request POST https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches/ anywhereCacheID /disable In addition to standard query parameters , the following parameters apply to this method.
- The AnywhereCaches: resume API can revoke the disablement during the 1-hour grace period.
- Parameters Parameter name Value Description Path parameters bucket string Name of a bucket. anywhereCacheID string A value that, along with the bucket's name, uniquely identifies the cache.
- Required permissions The authenticated user must have the storage.anywhereCaches.disable IAM permission on the bucket to use this method.

### AnywhereCaches: update \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/update](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/update)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Request HTTP request PATCH https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches/ anywhereCacheID In addition to standard query parameters , the following parameters apply to this method.
- Request body In the request body, supply an AnywhereCache resource with the following properties: Property name Value Description Notes Required Properties ttl string The time to live (TTL) of data in the cache, in seconds.
- Parameters Parameter name Value Description Path parameters bucket string Name of a bucket. anywhereCacheID string A value that, along with the bucket's name, uniquely identifies the cache.
- Required permissions The authenticated user must have the storage.anywhereCaches.update IAM permission on the bucket to use this method.

### AnywhereCaches: create \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/create](https://docs.cloud.google.com/storage/docs/json_api/v1/AnywhereCaches/create)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Request HTTP request POST https://storage.googleapis.com/storage/v1/b/ bucket /anywhereCaches In addition to standard query parameters , the following query parameters apply to this method.
- Request body In the request body, supply an AnywhereCache resource with the following properties: Property name Value Description Notes Required Properties zone string The zone that the cache instance will run in.
- Required permissions The authenticated user must have the storage.anywhereCaches.create IAM permission on the bucket to use this method.
- If not specified, defaults to 86400s , which equates to 1 day. writable ingestOnWrite boolean Whether or not the cache ingests data as the data is written to the bucket. writable Response If successful, this method returns a google.longrunning.Operation in the response body.

