# Cloud Bigtable batch write flow control

Product: Bigtable
Feature slug: `cloud-bigtable-batch-write-flow-control`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Adds batch write flow control for Dataflow-to-Bigtable batch writes to automatically rate-limit traffic.

## Lifecycle

- Latest feature date: 2023-06-27
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

- access (evidence: [https://docs.cloud.google.com/bigtable/docs/beam-connector](https://docs.cloud.google.com/bigtable/docs/beam-connector), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- allow (evidence: [https://docs.cloud.google.com/bigtable/docs/beam-connector](https://docs.cloud.google.com/bigtable/docs/beam-connector), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- auth (evidence: [https://docs.cloud.google.com/bigtable/docs/beam-connector](https://docs.cloud.google.com/bigtable/docs/beam-connector), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- authorization (evidence: [https://docs.cloud.google.com/bigtable/docs/beam-connector](https://docs.cloud.google.com/bigtable/docs/beam-connector), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- iam (evidence: [https://docs.cloud.google.com/bigtable/docs/beam-connector](https://docs.cloud.google.com/bigtable/docs/beam-connector), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- identity (evidence: [https://docs.cloud.google.com/bigtable/docs/beam-connector](https://docs.cloud.google.com/bigtable/docs/beam-connector), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- logging (evidence: [https://docs.cloud.google.com/bigtable/docs/beam-connector](https://docs.cloud.google.com/bigtable/docs/beam-connector), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- permission (evidence: [https://docs.cloud.google.com/bigtable/docs/beam-connector](https://docs.cloud.google.com/bigtable/docs/beam-connector), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- policy (evidence: [https://docs.cloud.google.com/bigtable/docs/beam-connector](https://docs.cloud.google.com/bigtable/docs/beam-connector), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- role (evidence: [https://docs.cloud.google.com/bigtable/docs/beam-connector](https://docs.cloud.google.com/bigtable/docs/beam-connector), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))
- token (evidence: [https://docs.cloud.google.com/bigtable/docs/beam-connector](https://docs.cloud.google.com/bigtable/docs/beam-connector), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users))

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/beam-connector](https://docs.cloud.google.com/bigtable/docs/beam-connector)
- [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform)
