---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.312Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner CPU utilization metrics by task priority"
feature_slug: "spanner-cpu-utilization-metrics-by-task-priority"
latest_feature_date: "2022-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
keywords:
  - "task"
  - "priority"
  - "utilization"
  - "metrics"
  - "adds"
---

# Spanner CPU utilization metrics by task priority

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Adds Spanner CPU utilization metrics that can be grouped by all task priorities and viewed in the monitoring console by operation type.

## Extended Definition

Adds Spanner CPU utilization metrics that can be grouped by all task priorities and viewed in the monitoring console by operation type.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)

## Supporting Pages

### Autoscaler tool overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Custom thresholds The Autoscaler tool determines the number of nodes or processing units to be added or subtracted to an instance using the recommended Spanner thresholds for the following load metrics: High priority CPU 24-hour rolling average CPU Storage utilization We recommend that you use the default thresholds as described in Creating alerts for Spanner metrics .
- To help you to balance cost control with performance needs, the Autoscaler tool monitors your instances and automatically adds or removes nodes or processing units to help ensure that they stay within the following parameters: The recommended maximums for CPU utilization .
- For example, multi-regional and dual-region deployments are scaled at 45% high-priority CPU utilization, whereas regional deployments are scaled at 65% high-priority CPU utilization, both plus or minus an allowed margin .
- Read more about Spanner CPU utilization metrics and latency metrics .

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Standard Dataflow metrics Dataflow provides several metrics to make sure your job is healthy, such as data freshness, system lag, job throughput, worker CPU utilization and more.
- The owner of a Dataflow job that uses the SpannerIO connector needs to have the following IAM permissions set with this metadata database: spanner.databases.updateDdl spanner.databases.beginReadOnlyTransaction spanner.databases.beginOrRollbackReadWriteTransaction spanner.databases.read spanner.databases.select spanner.databases.write spanner.sessions.create spanner.sessions.get Configure the connector The Spanner change streams connector can be configured as follows: SpannerConfig spannerConfig = SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" ); // Needed for fine-grained access control only Timestamp startTime = Timestamp . now (); Timestamp endTime = Timestamp . ofTimeSecondsAndNanos ( startTime . getSeconds () + ( 10 60 ), startTime . getNanos () ); SpannerIO . readChangeStream () . withSpannerConfig ( spannerConfig ) . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-meta-instance-id" ) . withMetadataDatabase ( "my-meta-database-id" ) . withMetadataTable ( "my-meta-table-name" ) . withRpcPriority ( RpcPriority .
- Custom change stream metrics These metrics are exposed in Cloud Monitoring and include: Bucketed (histogram) latency between a record being committed in Spanner to it being emitted into a PCollection by the connector.
- If the buffer has data change records whose timestamp is greater than or equal to the timer's expiration time, it adds those data change records back into the buffer instead of outputting them.

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

