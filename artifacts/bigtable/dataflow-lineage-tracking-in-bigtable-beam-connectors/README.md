# Dataflow lineage tracking in Bigtable Beam connectors

Product: Bigtable
Feature slug: `dataflow-lineage-tracking-in-bigtable-beam-connectors`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Data lineage is now generally available for BigtableIO and CloudBigtableIO (Bigtable HBase Beam connector) in Dataflow jobs.

## Lifecycle

- Latest feature date: 2025-03-11
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
- [https://docs.cloud.google.com/bigtable/docs/change-streams-use-dataflow](https://docs.cloud.google.com/bigtable/docs/change-streams-use-dataflow)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform)
