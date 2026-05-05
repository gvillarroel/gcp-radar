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

- access (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- auth (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- iam (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- identity (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- key (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- kms (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- permission (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- policy (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- role (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- security (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- token (evidence: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage), [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
