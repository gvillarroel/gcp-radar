---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.761Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Managed I/O automatic connector upgrades"
feature_slug: "managed-i-o-automatic-connector-upgrades"
latest_feature_date: "2025-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/managed-io"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status"
keywords:
  - "managed"
  - "automatic"
  - "connector"
  - "upgrades"
  - "dataflow"
  - "can"
  - "automatically"
  - "use"
---

# Managed I/O automatic connector upgrades

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow Managed I/O can automatically use the latest reliable version of supported I/O connectors.

## Extended Definition

Dataflow Managed I/O can automatically use the latest reliable version of supported I/O connectors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/managed-io](https://docs.cloud.google.com/dataflow/docs/guides/managed-io)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)

## Supporting Pages

### Dataflow managed I/O \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/managed-io](https://docs.cloud.google.com/dataflow/docs/guides/managed-io)
- Source ID: `site-docs-reference-2`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Automatic upgrades Dataflow pipelines with managed I/O connectors automatically use the latest reliable version of the connector.
- Dataflow automatically upgrades the managed I/O connectors in your pipeline.
- For streaming jobs, Dataflow upgrades your Managed I/O connectors in running pipelines as new versions become available.
- If you're using a Flex Template that uses Managed I/O, use the gcloud dataflow flex-template run command. --additional-experiments=managed transforms rolling upgrade window= DAYS To disable rolling upgrades, set the managed transforms rolling upgrade window service option to never .

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Pipelines that use Managed I/O might fail with this error if Dataflow can't automatically upgrade the I/O transforms to the latest supported version.
- Dataflow automatically retries sending the Pub/Sub messages with a backoff delay.
- Dataflow automatically responds to and addresses the underlying issue.
- This means that the version of the runner harness process will be automatically updated at some point 7 days after the initial delivery of the message, resulting in a brief pause in processing.

### SDK version support status \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status](https://docs.cloud.google.com/dataflow/docs/support/sdk-version-support-status)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- The following tables contain the support status for the Apache Beam 2.x SDKs, including the Apache Beam Python SDK, Apache Beam Java SDK, and the Apache Beam Go SDK: Java SDK version Status Supported components Details 2.72.0 Supported org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on March 30, 2027.
- To mitigate the problem, downgrade to 2.66.0 (or before), or upgrade to 2.69 (or later) when available". org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on September 22, 2026.
- To mitigate the problem, downgrade to 2.66.0 (or before), or upgrade to 2.69 (or later) when available". org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed This version will be deprecated on August 12, 2026.
- This issue has been seen in SpannerIO in particular and manifests as a NoClassDefFoundError. org.apache.beam:beam-sdks-java-core org.apache.beam:beam-sdks-java-io-google-cloud-platform org.apache.beam:beam-sdks-java-extensions-google-cloud-platform-core org.apache.beam:beam-sdks-java-extensions-protobuf org.apache.beam:beam-runners-direct-java Google Cloud I/O connectors under module org.apache.beam:beam-runners-google-cloud-dataflow-java: bigquery, bigtable, datastore, healthcare, pubsub, spanner org.apache.beam:beam-model-pipeline org.apache.beam:beam-model-job-management org.apache.beam:beam-sdks-java-io-iceberg org.apache.beam:beam-sdks-java-io-jdbc org.apache.beam:beam-sdks-java-io-kafka org.apache.beam:beam-sdks-java-extensions-sql org.apache.beam:beam-sdks-java-managed Deprecated on March 31, 2026.

