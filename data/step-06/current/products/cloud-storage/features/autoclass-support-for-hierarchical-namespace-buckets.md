---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.876Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Autoclass support for hierarchical namespace buckets"
feature_slug: "autoclass-support-for-hierarchical-namespace-buckets"
latest_feature_date: "2025-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
  - "https://docs.cloud.google.com/storage/docs/introduction"
  - "https://docs.cloud.google.com/storage/docs/autoclass"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
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
Coverage: MEDIUM

## Step 02 Summary

Autoclass can be enabled for Cloud Storage buckets that use hierarchical namespace.

## Extended Definition

Autoclass can be enabled for Cloud Storage buckets that use hierarchical namespace.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- [https://docs.cloud.google.com/storage/docs/introduction](https://docs.cloud.google.com/storage/docs/introduction)
- [https://docs.cloud.google.com/storage/docs/autoclass](https://docs.cloud.google.com/storage/docs/autoclass)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)

## Supporting Pages

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Note this property is only set for soft-deleted buckets. hierarchical namespace enabled Whether hierarchical namespace is enabled for this bucket. :setter: Update whether hierarchical namespace is enabled for this bucket. :getter: Query whether hierarchical namespace is enabled for this bucket.
- Returns Type Description str The terminal storage class if Autoclass is enabled, else None . autoclass terminal storage class update time The time at which the Autoclass terminal storage class field was last updated for this bucket Returns Type Description datetime.datetime or NoneType point-in time at which the bucket's terminal storage class is last updated, or None if the property is not set locally. autoclass toggle time Retrieve the toggle time when Autoclaass was last enabled or disabled for the bucket.
- See https://cloud.google.com/storage/docs/json api/v1/buckets and https://cloud.google.com/storage/docs/locations Returns None if the property has not been set before creation, if the bucket's resource has not been loaded from the server, or if the bucket is not a dual-regions bucket. default event based hold Scalar property getter. default kms key name Retrieve / set default KMS encryption key for objects in the bucket.
- See https://cloud.google.com/storage/docs/json api/v1/buckets Returns Type Description datetime.datetime or NoneType Datetime object parsed from RFC3339 valid timestamp, or None if the bucket's resource has not been loaded from the server. user project Project ID to be billed for API requests made via this bucket.

### Cloud Storage overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/introduction](https://docs.cloud.google.com/storage/docs/introduction)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- While buckets are suitable for most data storage use cases, you can set up optional configurations and features on a bucket to make it more suitable for high-performance workloads specifically: Hierarchical namespace : Buckets can have hierarchical namespace enabled, which lets you store your data in a logical file system structure by using folders.
- Buckets with hierarchical namespace enabled offer up to 8 times higher initial queries per second (QPS) limits for reading and writing objects compared to buckets without hierarchical namespace enabled.
- Hierarchical namespace can only be enabled at the time of bucket creation and can't be enabled on an existing bucket.
- Folder : Buckets with hierarchical namespace enabled can contain folders.

### Autoclass \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/autoclass](https://docs.cloud.google.com/storage/docs/autoclass)
- Source ID: `site-iam-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, you can monitor the number of bytes stored in each storage class over time for your Autoclass-enabled buckets by going to the bucket's Configuration tab in the Google Cloud console and clicking See Performance .
- Autoclass for existing buckets Autoclass configurations can be enabled, disabled, or modified for an existing bucket.
- Overview When enabled, Autoclass manages all aspects of storage classes for a bucket: All objects added to the bucket begin in Standard storage, even if a different storage class is specified in the request.
- Cloud Storage pricing for Autoclass-enabled buckets has the following exceptions: A management fee and enablement charge apply when using Autoclass.

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions storage.buckets.create storage.buckets.enableObjectRetention (only required if enabling object retention configurations for the bucket) storage.buckets.list (only required if creating a bucket using the Google Cloud console.) resourcemanager.projects.get (only required if creating a bucket using the Google Cloud console) You might also be able to get these permissions with custom roles or other predefined roles.
- Client libraries Note: Other options for creating a new bucket can be found in the JSON API reference for bucket.insert C++ For more information, see the Cloud Storage C++ API reference documentation .
- In the Optimize storage for data-intensive workloads section, do the following: To enable hierarchical namespace , select Enable Hierarchical namespace on this bucket .
- Note: You cannot enable hierarchical namespace in an existing bucket.

