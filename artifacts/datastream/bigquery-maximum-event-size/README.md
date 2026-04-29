# BigQuery maximum event size

Product: Datastream
Feature slug: `bigquery-maximum-event-size`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Datastream supports event sizes up to 20 MB when streaming data to BigQuery; Datastream supports event sizes up to 10 MB when streaming data to BigQuery.

## Lifecycle

- Latest feature date: 2024-01-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- encrypt
- key

## Official Evidence

- [https://docs.cloud.google.com/datastream/docs/faq](https://docs.cloud.google.com/datastream/docs/faq)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/get_stream)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_stream_objects](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_stream_objects)
- [https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams](https://docs.cloud.google.com/datastream/docs/reference/mcp/tools_list/list_streams)
