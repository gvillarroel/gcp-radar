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

- access (evidence: [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- allow (evidence: [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- audit (evidence: [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- auth (evidence: [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- authorization (evidence: [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- encrypt (evidence: [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- iam (evidence: [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- identity (evidence: [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- key (evidence: [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- logging (evidence: [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- permission (evidence: [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- policy (evidence: [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- role (evidence: [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- security (evidence: [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- token (evidence: [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/migrate](https://docs.cloud.google.com/bigtable/docs/migrate)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform)
