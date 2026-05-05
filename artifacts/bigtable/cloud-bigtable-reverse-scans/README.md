# Cloud Bigtable reverse scans

Product: Bigtable
Feature slug: `cloud-bigtable-reverse-scans`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Bigtable added support for reverse scans, enabling reading row ranges in descending order; Introduces reverse scans in Cloud Bigtable, enabling scanning rows in reverse order.

## Lifecycle

- Latest feature date: 2023-12-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users), [https://docs.cloud.google.com/bigtable/docs/schema-design](https://docs.cloud.google.com/bigtable/docs/schema-design), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))
- key (evidence: [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users), [https://docs.cloud.google.com/bigtable/docs/schema-design](https://docs.cloud.google.com/bigtable/docs/schema-design), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users))

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)
- [https://docs.cloud.google.com/bigtable/docs/schema-design](https://docs.cloud.google.com/bigtable/docs/schema-design)
