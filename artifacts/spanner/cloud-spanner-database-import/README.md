# Cloud Spanner database import

Product: Spanner
Feature slug: `cloud-spanner-database-import`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Spanner supports importing databases through the REST API and the gcloud command-line tool.

## Lifecycle

- Latest feature date: 2018-08-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.WorkerProxy](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.executor.spanner.WorkerProxy)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncResultSet](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.AsyncResultSet)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.CompositeTracer](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.CompositeTracer)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
