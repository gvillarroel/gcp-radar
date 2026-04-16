---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.768Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Autoscaling metrics dashboard"
feature_slug: "autoscaling-metrics-dashboard"
latest_feature_date: "2024-03-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType"
  - "https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring"
keywords:
  - "autoscaling"
  - "metrics"
  - "dashboard"
  - "dataflow"
  - "includes"
  - "charts"
  - "explain"
  - "scaling"
---

# Autoscaling metrics dashboard

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow includes new autoscaling metrics and charts that explain scaling decisions, worker CPU utilization, timer backlog, and parallel processing capacity.

## Extended Definition

Dataflow includes new autoscaling metrics and charts that explain scaling decisions, worker CPU utilization, timer backlog, and parallel processing capacity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics](https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType)
- [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring)

## Supporting Pages

### Monitor Dataflow autoscaling \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics](https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics)
- Source ID: `site-docs-reference-2`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These charts display metrics over the duration of a pipeline job and include the following information: The number of worker instances used by your job at any point in time The autoscaling log files The estimated backlog over time The average CPU utilization over time The charts are aligned vertically so that you can correlate the backlog and CPU utilization metrics with worker scaling events.
- Monitor autoscaling metrics The Dataflow service automatically chooses the number of worker instances required to run your autoscaling job.
- Access autoscaling monitoring charts You can access the Dataflow monitoring interface by using the Google Cloud console .
- You can view autoscaling monitoring charts for streaming jobs within the Dataflow monitoring interface.

### "Enum AutoscalingEvent.AutoscalingEventType (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType)
- Source ID: `site-java-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Protobuf enum google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType Implements ProtocolMessageEnum Inherited Members Enum.<T>valueOf(Class<T>,String) Enum.clone() Enum.compareTo(E) Enum.equals(Object) Enum.finalize() Enum.getDeclaringClass() Enum.hashCode() Enum.name() Enum.ordinal() Enum.toString() Object.getClass() Object.notify() Object.notifyAll() Object.wait() Object.wait(long) Object.wait(long,int) Static Fields Name Description ACTUATION FAILURE The ACTUATION FAILURE type should be used when we want to report an error to the user indicating why the current number of workers in the pool could not be changed.
- 0.92.0 (latest) 0.91.0 0.89.0 0.87.0 0.86.0 0.85.0 0.84.0 0.82.0 0.80.0 0.79.0 0.78.0 0.77.0 0.76.0 0.74.0 0.72.0 0.71.0 0.68.0 0.67.0 0.66.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.5.0 public enum AutoscalingEvent .
- Home Documentation Developer tools Java Client libraries Send feedback Enum AutoscalingEvent.AutoscalingEventType (0.92.0) Stay organized with collections Save and categorize content based on your preferences.
- AutoscalingEventType > implements ProtocolMessageEnum Indicates the type of autoscaling event.

### Dataflow project monitoring dashboard \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring](https://docs.cloud.google.com/dataflow/docs/guides/project-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Dataflow web-based monitoring interface includes a dashboard that monitors your Dataflow jobs at the project level.
- For an example of adding a custom metrics chart to the dashboard, see Customize the Dataflow monitoring dashboard .
- Go to dashboard Dashboard metrics By default, the following time-series charts appear in the dashboard.
- To edit the contents of the charts, see Select metrics for charts on dashboards .

