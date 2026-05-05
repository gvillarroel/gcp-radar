# Cloud Bigtable-BigQuery federation

Product: Bigtable
Feature slug: `cloud-bigtable-bigquery-federation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Bigtable now supports federation with BigQuery, allowing BigQuery to query Bigtable data and combine it with other sources.

## Lifecycle

- Latest feature date: 2022-08-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users), [https://docs.cloud.google.com/bigtable/docs/bigquery-analysis](https://docs.cloud.google.com/bigtable/docs/bigquery-analysis))
- allow (evidence: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users), [https://docs.cloud.google.com/bigtable/docs/bigquery-analysis](https://docs.cloud.google.com/bigtable/docs/bigquery-analysis))
- constraint (evidence: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users), [https://docs.cloud.google.com/bigtable/docs/bigquery-analysis](https://docs.cloud.google.com/bigtable/docs/bigquery-analysis))
- iam (evidence: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users), [https://docs.cloud.google.com/bigtable/docs/bigquery-analysis](https://docs.cloud.google.com/bigtable/docs/bigquery-analysis))
- identity (evidence: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users), [https://docs.cloud.google.com/bigtable/docs/bigquery-analysis](https://docs.cloud.google.com/bigtable/docs/bigquery-analysis))
- key (evidence: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users), [https://docs.cloud.google.com/bigtable/docs/bigquery-analysis](https://docs.cloud.google.com/bigtable/docs/bigquery-analysis))

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/bigquery-analysis](https://docs.cloud.google.com/bigtable/docs/bigquery-analysis)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-aerospike-users)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
