---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.768Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Worker utilization hints for horizontal autoscaling"
feature_slug: "worker-utilization-hints-for-horizontal-autoscaling"
latest_feature_date: "2024-03-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics"
  - "https://docs.cloud.google.com/dataflow/docs/guides/right-fitting"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType"
keywords:
  - "worker"
  - "utilization"
  - "hints"
  - "horizontal"
  - "autoscaling"
  - "dataflow"
  - "lets"
  - "users"
---

# Worker utilization hints for horizontal autoscaling

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow lets users provide worker utilization hints to tune horizontal autoscaling for streaming pipelines.

## Extended Definition

Dataflow lets users provide worker utilization hints to tune horizontal autoscaling for streaming pipelines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics](https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics)
- [https://docs.cloud.google.com/dataflow/docs/guides/right-fitting](https://docs.cloud.google.com/dataflow/docs/guides/right-fitting)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType)

## Supporting Pages

### Monitor Dataflow autoscaling \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics](https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These charts display metrics over the duration of a pipeline job and include the following information: The number of worker instances used by your job at any point in time The autoscaling log files The estimated backlog over time The average CPU utilization over time The charts are aligned vertically so that you can correlate the backlog and CPU utilization metrics with worker scaling events.
- What's next Tune Horizontal Autoscaling for streaming pipelines Troubleshoot Dataflow autoscaling Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If the target CPU utilization is set too high, you might see a pattern where Dataflow scales down, the backlog starts to grow, and Dataflow scales up again to compensate, instead of converging on a stable number of workers.
- Each metric is organized into the following charts: Autoscaling Backlog (Streaming Engine only) CPU utilization The autoscaling action bar displays the current autoscaling status and workers count.

### Right fitting \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/right-fitting](https://docs.cloud.google.com/dataflow/docs/guides/right-fitting)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataflow uses this value as a lower limit when allocating memory to new workers (horizontal scaling) or to existing workers (vertical scaling).
- Verify right fitting You can verify that right fitting is enabled by viewing the autoscaling metrics and verifying that the Worker pool column is visible and lists different pools: Streaming right fitting performance Streaming pipelines with right fitting enabled might not always perform better than pipelines without right fitting enabled.
- The worker pool executing the GPU-requiring stage, Pool 1 , is upscaled to 13 workers: The CPU Utilization graph shows that workers in both worker pools are demonstrating overall high CPU utilization: Troubleshoot right fitting This section provides instructions for troubleshooting common issues related to right fitting.
- Example: python my pipeline . py \ -- runner = DataflowRunner \ -- resource hints = min ram = number GB \ -- resource hints = cpu count = number \ -- resource hints = accelerator = "type: type ;count: number ;install-nvidia-driver" \ ...

### "Enum AutoscalingEvent.AutoscalingEventType (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType)
- Source ID: `site-java-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf enum google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType Implements ProtocolMessageEnum Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description ACTUATION FAILURE The ACTUATION FAILURE type should be used when we want to report an error to the user indicating why the current number of workers in the pool could not be changed.
- 0.92.0 (latest) 0.91.0 0.89.0 0.87.0 0.86.0 0.85.0 0.84.0 0.82.0 0.80.0 0.79.0 0.78.0 0.77.0 0.76.0 0.74.0 0.72.0 0.71.0 0.68.0 0.67.0 0.66.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.5.0 public enum AutoscalingEvent .
- ACTUATION FAILURE = 3; ACTUATION FAILURE VALUE The ACTUATION FAILURE type should be used when we want to report an error to the user indicating why the current number of workers in the pool could not be changed.
- Home Documentation Developer tools Java Client libraries Send feedback Enum AutoscalingEvent.AutoscalingEventType (0.92.0) Stay organized with collections Save and categorize content based on your preferences.

