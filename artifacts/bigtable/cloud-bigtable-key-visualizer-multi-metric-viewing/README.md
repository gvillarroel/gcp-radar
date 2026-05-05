# Cloud Bigtable Key Visualizer multi-metric viewing

Product: Bigtable
Feature slug: `cloud-bigtable-key-visualizer-multi-metric-viewing`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Bigtable Key Visualizer now supports viewing multiple metrics at once.

## Lifecycle

- Latest feature date: 2018-09-04
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

- access (evidence: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/client-side-metrics](https://docs.cloud.google.com/bigtable/docs/client-side-metrics))
- auth (evidence: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/client-side-metrics](https://docs.cloud.google.com/bigtable/docs/client-side-metrics))
- iam (evidence: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/client-side-metrics](https://docs.cloud.google.com/bigtable/docs/client-side-metrics))
- key (evidence: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/client-side-metrics](https://docs.cloud.google.com/bigtable/docs/client-side-metrics))
- kms (evidence: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/client-side-metrics](https://docs.cloud.google.com/bigtable/docs/client-side-metrics))
- permission (evidence: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/client-side-metrics](https://docs.cloud.google.com/bigtable/docs/client-side-metrics))
- policy (evidence: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/client-side-metrics](https://docs.cloud.google.com/bigtable/docs/client-side-metrics))
- role (evidence: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/client-side-metrics](https://docs.cloud.google.com/bigtable/docs/client-side-metrics))
- token (evidence: [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/client-side-metrics](https://docs.cloud.google.com/bigtable/docs/client-side-metrics))

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics](https://docs.cloud.google.com/bigtable/docs/client-side-metrics)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
