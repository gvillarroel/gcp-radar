# Bigtable similarity vector search

Product: Bigtable
Feature slug: `bigtable-similarity-vector-search`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Bigtable now supports K-nearest-neighbors similarity vector search.

## Lifecycle

- Latest feature date: 2025-04-29
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

- access (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- allow (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- auth (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- authorization (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- iam (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- identity (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- key (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- logging (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- permission (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- policy (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- role (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- token (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)
- [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform)
