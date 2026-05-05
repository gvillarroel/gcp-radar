# Cloud Bigtable API v2 RPC support

Product: Bigtable
Feature slug: `cloud-bigtable-api-v2-rpc-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Bigtable now offers version 2 of its RPC API, enabling custom gRPC clients for both the Data API and Admin API.

## Lifecycle

- Latest feature date: 2016-06-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- encrypt (evidence: [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_instance](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_instance))
- key (evidence: [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_instance](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_instance))
- kms (evidence: [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_instance](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_instance))
- policy (evidence: [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek), [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users), [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_instance](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_instance))

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_instance](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/delete_instance)
