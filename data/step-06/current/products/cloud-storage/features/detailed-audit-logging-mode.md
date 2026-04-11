---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.831Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Detailed audit logging mode"
feature_slug: "detailed-audit-logging-mode"
latest_feature_date: "2020-07-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/audit-logging"
  - "https://docs.cloud.google.com/storage/docs/release-notes"
  - "https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging"
keywords:
  - "detailed"
  - "audit"
  - "logging"
  - "mode"
  - "provides"
  - "more"
  - "granular"
  - "for"
---

# Detailed audit logging mode

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Detailed audit logging mode provides more granular audit logging for Cloud Storage activity.

## Extended Definition

Detailed audit logging mode provides more granular audit logging for Cloud Storage activity.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- [https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging](https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging)

## Supporting Pages

### Cloud Audit Logs with Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Within the protoPayload field, additional audit information specific to Cloud Storage is included in the request and response fields when Detailed audit logging mode is enforced.
- For more information about querying by using the Logs Explorer, see Build queries in the Logs Explorer . gcloud The Google Cloud CLI provides a command-line interface to the Logging API.
- You can also attach custom information to audit logs for more granular information about how your resources are accessed.
- Note that you don't need to enforce detailed audit logging to attach custom information to audit logs.

### Cloud Storage release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/release-notes](https://docs.cloud.google.com/storage/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- July 20, 2020 Feature Detailed audit logging mode launched.
- June 30, 2025 Libraries Java 2.53.2 (2025-06-25) Bug Fixes Fix Journaling BlobWriteSessionConfig to properly handle multiple consecutive retries ( #3166 ) ( 895bfbd ) Dependencies Update dependency com.google.cloud.opentelemetry:exporter-trace to v0.36.0 ( #3162 ) ( 41a1030 ) Update sdk-platform-java dependencies ( #3164 ) ( c22a131 ) June 23, 2025 Libraries Python 3.1.1 (2025-06-13) Bug Fixes Add a check for partial response data ( #1487 ) ( 7e0412a ) Add trove classifier for Python 3.13 ( 0100916 ) deps: Require google-crc32c >= 1.1.3 ( 0100916 ) deps: Require protobuf >= 3.20.2, < 7.0.0 ( 0100916 ) deps: Require requests >= 2.22.0 ( 0100916 ) Remove setup.cfg configuration for creating universal wheels ( #1448 ) ( d3b6b3f ) Resolve issue where pre-release versions of dependencies are installed ( 0100916 ) Segmentation fault in tink while writing data ( #1490 ) ( 2a46c0b ) Documentation Move quickstart to top of readme ( #1451 ) ( 53257cf ) Update README to break infinite redirect loop ( #1450 ) ( 03f1594 ) Java 2.53.1 (2025-06-18) Bug Fixes Cancel the future in RemoteStorageHelper#forceDelete when TimeoutException happens ( #3136 ) ( e6007d5 ) deps: Update the Java code generator (gapic-generator-java) to 2.59.0 ( 7dba9f0 ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20250605-2.0.0 ( #3143 ) ( 17a80d8 ) Update sdk-platform-java dependencies ( #3152 ) ( 2f78192 ) Feature The Cloud Storage Cloud Audit Logs have expanded support to include error scenario coverage and produce a more comprehensive error message with code, error messages, and details, in an easy to understand format.
- Go Changes for storage/internal/apiv2 1.39.1 (2024-03-11) Bug Fixes storage: Add object validation case and test ( #9521 ) ( 386bef3 ) Java Changes for google-cloud-storage 2.36.0 (2024-03-15) Features Add Custom Part Metadata Decorator to ParallelCompositeUploadConfig ( #2434 ) ( 43b8006 ) Add hierarchical namespace and folders features ( #2445 ) ( 8074fff ) Add soft delete feature ( #2403 ) ( 989f36f ) Bug Fixes Fix name digest for noprefix ( #2448 ) ( 12c9db8 ) Missing serialVersionUID of serializable classes ( #2344 ) ( 736865b ) Dependencies Update dependency com.google.apis:google-api-services-storage to v1-rev20240307-2.0.0 ( #2442 ) ( 1352203 ) Update dependency net.jqwik:jqwik to v1.8.4 ( #2447 ) ( 110b80c ) Update gcr.io/cloud-devrel-public-resources/storage-testbench docker tag to v0.42.0 ( #2441 ) ( 80745d4 ) March 12, 2024 Feature You can now view granular bucket-level cost data in the Cloud Billing Detailed data export .
- July 07, 2023 Feature Custom audit logging for Cloud Storage is now generally available (GA) .

### Storage batch operations audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging](https://docs.cloud.google.com/storage/docs/batch-operations/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Storage Batch Operations audit logs use the service name storagebatchoperations.googleapis.com .
- Filter for this method : protoPayload.methodName="google.longrunning.Operations.ListOperations" Methods that don't produce audit logs A method might not produce audit logs for one or more of the following reasons: It is a high volume method involving significant log generation and storage costs.
- This document describes audit logging for Storage Batch Operations.
- For more information see Audit logs for long-running operations .

