# Storage Object User IAM role

Product: Cloud Storage
Feature slug: `storage-object-user-iam-role`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Storage Object User role grants object and metadata access without granting access to object ACLs.

## Lifecycle

- Latest feature date: 2023-08-23
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

- access (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions))
- allow (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions))
- auth (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions))
- constraint (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions))
- iam (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions))
- identity (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions))
- key (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions))
- kms (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions))
- permission (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions))
- policy (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions))
- role (evidence: [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles), [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud), [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console), [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions))

## Official Evidence

- [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
- [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud)
