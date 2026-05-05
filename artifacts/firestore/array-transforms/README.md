# Array transforms

Product: Firestore
Feature slug: `array-transforms`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Firestore supports arrayUnion() and arrayRemove() for directly modifying array field values.

## Lifecycle

- Latest feature date: 2018-08-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField), [https://docs.cloud.google.com/firestore/docs/backups](https://docs.cloud.google.com/firestore/docs/backups), [https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance](https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance))
- identity (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField), [https://docs.cloud.google.com/firestore/docs/backups](https://docs.cloud.google.com/firestore/docs/backups), [https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance](https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance))
- permission (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField), [https://docs.cloud.google.com/firestore/docs/backups](https://docs.cloud.google.com/firestore/docs/backups), [https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance](https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance))
- role (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField), [https://docs.cloud.google.com/firestore/docs/backups](https://docs.cloud.google.com/firestore/docs/backups), [https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance](https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance))

## Official Evidence

- [https://docs.cloud.google.com/firestore/docs/backups](https://docs.cloud.google.com/firestore/docs/backups)
- [https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance](https://docs.cloud.google.com/firestore/native/docs/enterprise-optimize-query-performance)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField](https://docs.cloud.google.com/java/docs/reference/google-cloud-firestore/latest/com.google.cloud.firestore.AggregateField)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
