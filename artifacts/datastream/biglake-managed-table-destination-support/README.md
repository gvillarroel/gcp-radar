# BigLake managed table destination support

Product: Datastream
Feature slug: `biglake-managed-table-destination-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Datastream API supports streaming data to BigLake managed tables.

## Lifecycle

- Latest feature date: 2025-04-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream), [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder), [https://docs.cloud.google.com/datastream/docs/create-a-stream-automated](https://docs.cloud.google.com/datastream/docs/create-a-stream-automated))
- allow (evidence: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream), [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder), [https://docs.cloud.google.com/datastream/docs/create-a-stream-automated](https://docs.cloud.google.com/datastream/docs/create-a-stream-automated))
- auth (evidence: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream), [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder), [https://docs.cloud.google.com/datastream/docs/create-a-stream-automated](https://docs.cloud.google.com/datastream/docs/create-a-stream-automated))
- authorization (evidence: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream), [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder), [https://docs.cloud.google.com/datastream/docs/create-a-stream-automated](https://docs.cloud.google.com/datastream/docs/create-a-stream-automated))
- iam (evidence: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream), [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder), [https://docs.cloud.google.com/datastream/docs/create-a-stream-automated](https://docs.cloud.google.com/datastream/docs/create-a-stream-automated))
- identity (evidence: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream), [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder), [https://docs.cloud.google.com/datastream/docs/create-a-stream-automated](https://docs.cloud.google.com/datastream/docs/create-a-stream-automated))
- permission (evidence: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream), [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder), [https://docs.cloud.google.com/datastream/docs/create-a-stream-automated](https://docs.cloud.google.com/datastream/docs/create-a-stream-automated))
- role (evidence: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream), [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder), [https://docs.cloud.google.com/datastream/docs/create-a-stream-automated](https://docs.cloud.google.com/datastream/docs/create-a-stream-automated))
- token (evidence: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream), [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis), [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder), [https://docs.cloud.google.com/datastream/docs/create-a-stream-automated](https://docs.cloud.google.com/datastream/docs/create-a-stream-automated))

## Official Evidence

- [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- [https://docs.cloud.google.com/datastream/docs/create-a-stream-automated](https://docs.cloud.google.com/datastream/docs/create-a-stream-automated)
- [https://docs.cloud.google.com/datastream/docs/using-datastream-apis](https://docs.cloud.google.com/datastream/docs/using-datastream-apis)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-datastream/latest/com.google.cloud.datastream.v1.BigQueryDestinationConfig.Builder)
