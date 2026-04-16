---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.758Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Streaming bottleneck detection"
feature_slug: "streaming-bottleneck-detection"
latest_feature_date: "2025-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring"
  - "https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
keywords:
  - "streaming"
  - "bottleneck"
  - "detection"
  - "dataflow"
  - "automatically"
  - "detects"
  - "performance"
  - "bottlenecks"
---

# Streaming bottleneck detection

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow automatically detects performance bottlenecks in streaming jobs and surfaces their causes in the Step Info panel.

## Extended Definition

Dataflow automatically detects performance bottlenecks in streaming jobs and surfaces their causes in the Step Info panel.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring)
- [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)

## Supporting Pages

### Dataflow project monitoring dashboard \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use this chart to find potential performance bottlenecks in your application logic.
- Shows backlogged streaming jobs by the largest number of backlogged keys in a bottleneck stage.
- This chart can indicate potential bottlenecks at per-stage granularity.
- This chart can indicate potential real-time processing bottlenecks.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- You can adjust several Dataflow BigQuery connector related configurations to achieve the expected performance when writing to BigQuery using streaming inserts.
- Dataflow is unable to determine backlog When running a streaming pipeline from Pub/Sub, the following warning occurs: Dataflow is unable to determine the backlog for Pub/Sub subscription When a Dataflow pipeline pulls data from Pub/Sub, Dataflow needs to repeatedly request information from Pub/Sub.
- When you run a Dataflow job that doesn't use Dataflow Shuffle or Streaming Engine, workers need to communicate with each other using TCP ports 12345 and 12346 within the VPC network.
- Or: Invalid extensions name: googclient deliveryattempt This error occurs when your Dataflow job has the following characteristics: The Dataflow job uses Streaming Engine.

### "Set the pipeline streaming mode \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- If you set the streaming mode at least once option, Dataflow automatically enables Streaming Engine with resource-based billing .
- Google-provided Dataflow templates automatically enable this option when you use at-least-once streaming.
- Java --dataflowServiceOptions=streaming mode at least once Python --dataflow service options=streaming mode at least once Go --dataflow service options=streaming mode at least once If you don't specify the streaming mode at least once option, then Dataflow uses exactly-once streaming mode.
- For more information, see the following sections in the Dataflow templates documentation: Flex templates: Metadata Classic templates: Use metadata in your pipeline code View a job's streaming mode To view the streaming mode for a job, go to the Jobs page in the Google Cloud console.

