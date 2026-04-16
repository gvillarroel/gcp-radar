---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.832Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Streaming Engine"
feature_slug: "streaming-engine"
latest_feature_date: "2021-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3"
keywords:
  - "streaming"
  - "engine"
  - "offloads"
  - "execution"
  - "state"
  - "processing"
  - "worker"
  - "vms"
---

# Streaming Engine

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Streaming Engine is a service that offloads streaming execution state and processing from worker VMs; Streaming Engine is a service that offloads streaming execution state and processing from worker VMs.

## Extended Definition

Streaming Engine is a service that offloads streaming execution state and processing from worker VMs; Streaming Engine is a service that offloads streaming execution state and processing from worker VMs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)

## Supporting Pages

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you run a Dataflow job that doesn't use Dataflow Shuffle or Streaming Engine, workers need to communicate with each other using TCP ports 12345 and 12346 within the VPC network.
- Full status: generic::invalid argument: Http(400) Bad Request Bad request warnings occur if worker state information is stale or out of sync due to processing delays.
- Worker VMs are fully managed Compute Engine instances that execute your data processing pipeline tasks.
- Run the following command: curl http://localhost:8081/threadz Operation ongoing in bundle When you run a pipeline reading from JdbcIO , the partitioned reads from JdbcIO are slow, and the following message appears in the worker log files: Operation ongoing in bundle process bundle-[0-9-] for PTransform{id=Read from JDBC with Partitions\/JdbcIO.Read\/JdbcIO.ReadAll\/ParDo\(Read\)\/ParMultiDo\(Read\). , state=process} for at least (0[1-9]h[0-5][0-9]m[0-5][0-9]s) without outputting or completing: To resolve this issue, make one or more of the following changes to your pipeline: Use partitions to increase the job parallelism.

### "Performance characteristics of Kafka to BigQuery pipelines \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Result Exactly-once At-least-once Input throughput per worker Mean: 15 MBps, n=3 Mean: 18 MBps, n=3 Average CPU utilization across all workers Mean: 70%, n=3 Mean: 75%, n=3 Number of worker nodes Mean: 63, n=3 Mean: 53, n=3 Streaming Engine Compute Units per hour Mean: 58, n=3 Mean: 0, n=3 The autoscaling algorithm can affect the target CPU utilization level.
- Based on the benchmark results for a 1 GiB/s pipeline, you can estimate the resource requirements as follows: Scaling Factor: (100 MiB/s) / (1 GiB/s) = 0.1 Projected worker nodes: 63 workers × 0.1 = 6.3 workers Projected number of Streaming Engine Compute Units per hour: 58 × 0.1 = 5.8 units per hour This value should only be used as an initial estimate.
- Setting Value Worker machine type e2-standard-2 Worker machine vCPUs 2 Worker machine RAM 8 GB Worker machine Persistent Disk Standard Persistent Disk (HDD), 30 GB Maximum workers 120 Streaming Engine Yes Horizontal autoscaling Yes Billing model Resource-based billing Storage Write API enabled?
- Total stage end-to-end latency, excluding input stage Exactly-once P50 Mean: 1,200 ms, n=3 P95 Mean: 3,000 ms, n=3 P99 Mean: 5,400 ms, n=3 The tests measured per-stage end-to-end latency (the job/streaming engine/stage end to end latencies metric) across three long-running test executions.

### "Package com.google.dataflow.v1beta3 (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- Source ID: `site-java-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Streaming Mode Specifies the Streaming Engine message processing guarantees.
- Job Type Specifies the processing model used by a [google.dataflow.v1beta3.Job], which determines the way the Job is managed by the Cloud Dataflow service (how workers are scheduled, how com. google. dataflow. v1beta3.
- Execution Stage State A message describing the state of a particular execution stage. com. google. dataflow. v1beta3.
- Stage Execution Details Information about the workers and work items within a stage. com. google. dataflow. v1beta3.

