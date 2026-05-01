# Authorized views management in Google Cloud Console

Product: Bigtable
Feature slug: `authorized-views-management-in-google-cloud-console`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Google Cloud console now lets users create and manage authorized views for Bigtable tables.

## Lifecycle

- Latest feature date: 2024-12-11
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
- auth
- iam
- identity
- key
- kms
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
