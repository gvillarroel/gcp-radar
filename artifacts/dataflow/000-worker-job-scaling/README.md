# 000-worker job scaling

Product: Dataflow
Feature slug: `000-worker-job-scaling`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataflow jobs can scale to 4,000 worker VMs.

## Lifecycle

- Latest feature date: 2023-11-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics](https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics), [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType))
- iam (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics](https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics), [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics](https://docs.cloud.google.com/dataflow/docs/guides/autoscaling-metrics)
- [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingEvent.AutoscalingEventType)
