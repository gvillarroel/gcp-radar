# Cloud Bigtable Stackdriver Monitoring support

Product: Bigtable
Feature slug: `cloud-bigtable-stackdriver-monitoring-support`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Bigtable instances can be monitored with Stackdriver Monitoring.

## Lifecycle

- Latest feature date: 2017-05-01
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

- access (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- allow (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- auth (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- authorization (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- iam (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- identity (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- key (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- kms (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- logging (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- permission (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- policy (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- role (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))
- token (evidence: [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable))

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable)
