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

- access
- allow
- auth
- authorization
- iam
- identity
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/beam-connector](https://docs.cloud.google.com/bigtable/docs/beam-connector)
- [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform)
