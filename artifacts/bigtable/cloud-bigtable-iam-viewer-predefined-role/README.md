# Cloud Bigtable IAM viewer predefined role

Product: Bigtable
Feature slug: `cloud-bigtable-iam-viewer-predefined-role`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Bigtable IAM predefined roles now include a viewer role for basic console access.

## Lifecycle

- Latest feature date: 2017-09-19
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

- access (evidence: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- audit (evidence: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- key (evidence: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- role (evidence: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- security (evidence: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- token (evidence: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview), [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable)
