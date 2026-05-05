# Speculative execution for batch pipelines

Product: Dataflow
Feature slug: `speculative-execution-for-batch-pipelines`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataflow can mitigate stragglers in batch pipelines by launching redundant executions of slow-running tasks.

## Lifecycle

- Latest feature date: 2025-11-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices), [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines), [https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines))
- iam (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices), [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines), [https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines))
- role (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices), [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines), [https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines)
- [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
