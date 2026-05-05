# Storage Insights public object identification

Product: Cloud Storage
Feature slug: `storage-insights-public-object-identification`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Storage Insights datasets can identify publicly accessible objects to support data security and compliance management; Storage Insights datasets can identify publicly accessible objects using object metadata schema fields that expose public access status.

## Lifecycle

- Latest feature date: 2026-03-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-public-data](https://docs.cloud.google.com/storage/docs/access-public-data), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public))
- allow (evidence: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-public-data](https://docs.cloud.google.com/storage/docs/access-public-data), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public))
- audit (evidence: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-public-data](https://docs.cloud.google.com/storage/docs/access-public-data), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public))
- auth (evidence: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-public-data](https://docs.cloud.google.com/storage/docs/access-public-data), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public))
- iam (evidence: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-public-data](https://docs.cloud.google.com/storage/docs/access-public-data), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public))
- identity (evidence: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-public-data](https://docs.cloud.google.com/storage/docs/access-public-data), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public))
- logging (evidence: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-public-data](https://docs.cloud.google.com/storage/docs/access-public-data), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public))
- permission (evidence: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-public-data](https://docs.cloud.google.com/storage/docs/access-public-data), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public))
- policy (evidence: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-public-data](https://docs.cloud.google.com/storage/docs/access-public-data), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public))
- role (evidence: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-public-data](https://docs.cloud.google.com/storage/docs/access-public-data), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public))
- security (evidence: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-public-data](https://docs.cloud.google.com/storage/docs/access-public-data), [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects), [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public))

## Official Evidence

- [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public)
- [https://docs.cloud.google.com/storage/docs/access-public-data](https://docs.cloud.google.com/storage/docs/access-public-data)
- [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- [https://docs.cloud.google.com/storage/docs/uploading-objects](https://docs.cloud.google.com/storage/docs/uploading-objects)
