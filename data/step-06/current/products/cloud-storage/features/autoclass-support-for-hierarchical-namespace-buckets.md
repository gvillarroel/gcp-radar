---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.631Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Autoclass support for hierarchical namespace buckets"
feature_slug: "autoclass-support-for-hierarchical-namespace-buckets"
latest_feature_date: "2025-11-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
  - "https://docs.cloud.google.com/storage/docs/autoclass"
keywords:
  - "autoclass"
  - "for"
  - "hierarchical"
  - "namespace"
  - "buckets"
  - "can"
  - "be"
  - "enabled"
---

# Autoclass support for hierarchical namespace buckets

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Autoclass can be enabled for Cloud Storage buckets that use hierarchical namespace.

## Extended Definition

Autoclass can be enabled for Cloud Storage buckets that use hierarchical namespace.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- [https://docs.cloud.google.com/storage/docs/autoclass](https://docs.cloud.google.com/storage/docs/autoclass)

## Supporting Pages

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- November 11, 2025 Feature You can now enable Autoclass for buckets with hierarchical namespace enabled.
- To learn more about how mounting buckets with hierarchical namespace enabled can help improve performance, see Mount buckets with hierarchical namespace enabled .
- September 09, 2024 Feature You can now use the Google Cloud console to do the following: Create buckets with hierarchical namespace enabled.
- November 03, 2023 Change The Autoclass feature can now be enabled for existing buckets.

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Note this property is only set for soft-deleted buckets. hierarchical namespace enabled Whether hierarchical namespace is enabled for this bucket. :setter: Update whether hierarchical namespace is enabled for this bucket. :getter: Query whether hierarchical namespace is enabled for this bucket.
- Returns Type Description str The terminal storage class if Autoclass is enabled, else None . autoclass terminal storage class update time The time at which the Autoclass terminal storage class field was last updated for this bucket Returns Type Description datetime.datetime or NoneType point-in time at which the bucket's terminal storage class is last updated, or None if the property is not set locally. autoclass toggle time Retrieve the toggle time when Autoclaass was last enabled or disabled for the bucket.
- See https://cloud.google.com/storage/docs/json api/v1/buckets and https://cloud.google.com/storage/docs/locations Returns None if the property has not been set before creation, if the bucket's resource has not been loaded from the server, or if the bucket is not a dual-regions bucket. default event based hold Scalar property getter. default kms key name Retrieve / set default KMS encryption key for objects in the bucket.
- See https://cloud.google.com/storage/docs/json api/v1/buckets Returns Type Description datetime.datetime or NoneType Datetime object parsed from RFC3339 valid timestamp, or None if the bucket's resource has not been loaded from the server. user project Project ID to be billed for API requests made via this bucket.

### Autoclass \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/autoclass](https://docs.cloud.google.com/storage/docs/autoclass)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Additionally, you can monitor the number of bytes stored in each storage class over time for your Autoclass-enabled buckets by going to the bucket's Configuration tab in the Google Cloud console and clicking See Performance .
- Autoclass for existing buckets Autoclass configurations can be enabled, disabled, or modified for an existing bucket.
- Overview When enabled, Autoclass manages all aspects of storage classes for a bucket: All objects added to the bucket begin in Standard storage, even if a different storage class is specified in the request.
- Cloud Storage pricing for Autoclass-enabled buckets has the following exceptions: A management fee and enablement charge apply when using Autoclass.

