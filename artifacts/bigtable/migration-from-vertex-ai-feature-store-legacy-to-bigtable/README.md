# Migration from Vertex AI Feature Store (Legacy) to Bigtable

Product: Bigtable
Feature slug: `migration-from-vertex-ai-feature-store-legacy-to-bigtable`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Bigtable now supports migrating machine-learning feature management workloads from Vertex AI Feature Store (Legacy) into a Bigtable instance.

## Lifecycle

- Latest feature date: 2026-02-18
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

- access
- allow
- audit
- auth
- authorization
- encrypt
- iam
- identity
- key
- logging
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform)
