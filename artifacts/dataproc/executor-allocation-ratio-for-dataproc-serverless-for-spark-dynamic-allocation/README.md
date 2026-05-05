# Executor allocation ratio for Dataproc Serverless for Spark dynamic allocation

Product: Dataproc
Feature slug: `executor-allocation-ratio-for-dataproc-serverless-for-spark-dynamic-allocation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataproc Serverless for Spark supports the spark.dynamicAllocation.executorAllocationRatio property to tune scale-up aggressiveness.

## Lifecycle

- Latest feature date: 2022-09-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/profiling](https://docs.cloud.google.com/dataproc/docs/guides/profiling), [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- audit (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/profiling](https://docs.cloud.google.com/dataproc/docs/guides/profiling), [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- auth (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/profiling](https://docs.cloud.google.com/dataproc/docs/guides/profiling), [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- credential (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/profiling](https://docs.cloud.google.com/dataproc/docs/guides/profiling), [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- iam (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/profiling](https://docs.cloud.google.com/dataproc/docs/guides/profiling), [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- identity (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/profiling](https://docs.cloud.google.com/dataproc/docs/guides/profiling), [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- logging (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/profiling](https://docs.cloud.google.com/dataproc/docs/guides/profiling), [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- permission (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/profiling](https://docs.cloud.google.com/dataproc/docs/guides/profiling), [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))
- policy (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/profiling](https://docs.cloud.google.com/dataproc/docs/guides/profiling), [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics))

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics)
- [https://docs.cloud.google.com/dataproc/docs/guides/profiling](https://docs.cloud.google.com/dataproc/docs/guides/profiling)
