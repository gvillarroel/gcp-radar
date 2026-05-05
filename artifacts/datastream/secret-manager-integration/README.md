# Secret Manager integration

Product: Datastream
Feature slug: `secret-manager-integration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Datastream can use Secret Manager to securely store authentication resources.

## Lifecycle

- Latest feature date: 2025-03-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles), [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles), [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles))
- allow (evidence: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles), [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles), [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles))
- auth (evidence: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles), [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles), [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles))
- key (evidence: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles), [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles), [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles))
- secret (evidence: [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles), [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles), [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics), [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles))

## Official Evidence

- [https://docs.cloud.google.com/datastream/docs/create-connection-profiles](https://docs.cloud.google.com/datastream/docs/create-connection-profiles)
- [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_connection_profiles)
- [https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles](https://docs.cloud.google.com/datastream/docs/reference/rest/v1/projects.locations.connectionProfiles)
