---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.795Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Hot key detection and logging"
feature_slug: "hot-key-detection-and-logging"
latest_feature_date: "2022-03-31"
deprecation_date: "2022-03-31"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys"
  - "https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes"
keywords:
  - "hot"
  - "key"
  - "detection"
  - "logging"
  - "identifies"
  - "records"
  - "keys"
  - "streaming"
---

# Hot key detection and logging

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Hot key detection and logging identifies and records hot keys in streaming pipelines for debugging; deprecated on 2022-03-31.

## Extended Definition

Hot key detection and logging identifies and records hot keys in streaming pipelines for debugging; deprecated on 2022-03-31.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes)

## Supporting Pages

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A hot key ... was detected Note: Hot key detection and logging is disabled for streaming pipelines as of March 2022.
- For example, for Apache Beam SDK for Java, adjust numStreamingKeys to match the maximum number of workers and consider increasing insertBundleParallelism to configure BigQuery connector to write to BigQuery using more parallel threads.
- If your workflow can't tolerate duplicate records, use the exactly-once streaming mode.
- Java --enableStreamingEngine=true Python --enable streaming engine=true Request Entity Too Large When you submit your job, one of the following errors appears in your console or terminal window: 413 Request Entity Too Large The size of serialized JSON representation of the pipeline exceeds the allowable limit Failed to create a workflow job: Invalid JSON payload received Failed to create a workflow job: Request payload exceeds the allowable limit When you encounter an error about the JSON payload when submitting your job, the JSON representation of your pipeline exceeds the maximum 20 MB request size.

### "Use customer-managed encryption keys \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Job metadata includes the following: User-supplied data, such as Job Names, Job Parameter values, and Pipeline Graph System-generated data, such as Job IDs and IP addresses of workers Encryption of pipeline state locations The following storage locations are protected with Cloud KMS keys: Persistent Disks attached to Dataflow workers and used for Persistent Disk-based shuffle and streaming state storage.
- Encryption of pipeline state artifacts Data that a Dataflow pipeline reads from user-specified data sources is encrypted, except for the data keys that you specify for key-based transforms in streaming jobs.
- For streaming jobs created before March 7, 2024, data keys used in key-based operations, such as windowing, grouping, and joining, are not protected by CMEK encryption.
- Support and limitations Cloud KMS is supported in the following Apache Beam SDK versions: Java SDK versions 2.13.0 and later Python SDK versions 2.13.0 and later Go SDK versions 2.40.0 and later Cloud KMS with Dataflow supports regional keys .

### "Set the pipeline streaming mode \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Choose at-least-once streaming mode if your workload can tolerate duplicated records and might benefit from reduced cost or latency.
- The streaming mode affects how Streaming Engine processes records, but does not change the semantics of I/O connectors.
- REST Use the additionalExperiments field in the FlexTemplateRuntimeEnvironment (Flex templates) or RuntimeEnvironment (classic templates) object. { addi t io nal Experime nts : [ "streaming mode at least once" ] ... } Custom templates If you create a custom template that supports at-least-once processing, add the following top-level fields to the template metadata file: { "streaming" : true , "supportsAtLeastOnce" : true , "supportsExactlyOnce" : true , "defaultStreamingMode" : "AT LEAST ONCE" } These metadata fields enable users to select the streaming mode when deploying the template in the Google Cloud console.
- If the template supports only one mode, then this option is disabled. gcloud To enable at-least-once mode, set the streaming mode at least once option in the additional-experiments flag: --additional-experiments=streaming mode at least once To enable exactly-once mode, set the streaming mode exactly once option in the additional-experiments flag: --additional-experiments=streaming mode exactly once These two options are mutually exclusive.

