# Cloud Bigtable monitoring in GCP Console

Product: Bigtable
Feature slug: `cloud-bigtable-monitoring-in-gcp-console`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The GCP Console added improved Cloud Bigtable monitoring with new charts for cluster storage utilization, node count, and replication status.

## Lifecycle

- Latest feature date: 2018-04-25
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
- audit
- auth
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- [https://docs.cloud.google.com/bigtable/docs/autoscaling](https://docs.cloud.google.com/bigtable/docs/autoscaling)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
