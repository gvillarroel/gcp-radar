# Bigtable LangChain vector and key-value integrations

Product: Bigtable
Feature slug: `bigtable-langchain-vector-and-key-value-integrations`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Bigtable now provides vector and key-value store integrations with LangChain for LLM-powered application development and retrieval workflows.

## Lifecycle

- Latest feature date: 2025-10-27
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

- access (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- allow (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- auth (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- authorization (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- firewall (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- iam (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- identity (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- key (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- kms (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- logging (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- permission (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- policy (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- role (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- secret (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- security (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- token (evidence: [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors), [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors](https://docs.cloud.google.com/bigtable/docs/find-k-nearest-neighbors)
- [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform)
