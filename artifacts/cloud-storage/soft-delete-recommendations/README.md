# Soft delete recommendations

Product: Cloud Storage
Feature slug: `soft-delete-recommendations`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Google Cloud console provides soft delete recommendations for buckets based on cost and security impact.

## Lifecycle

- Latest feature date: 2024-10-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console), [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console), [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console))
- allow (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console), [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console), [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console))
- audit (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console), [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console), [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console))
- constraint (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console), [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console), [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console))
- iam (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console), [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console), [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console))
- identity (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console), [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console), [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console))
- key (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console), [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console), [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console))
- kms (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console), [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console), [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console))
- logging (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console), [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console), [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console))
- permission (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console), [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console), [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console))
- policy (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console), [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console), [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console))
- role (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console), [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console), [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console))
- security (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console), [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console), [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console))

## Official Evidence

- [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles)
- [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console)
- [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
