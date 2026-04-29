# Custom instance configurations with read-only replicas

Product: Spanner
Feature slug: `custom-instance-configurations-with-read-only-replicas`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner allows you to create custom instance configurations and add optional read-only replicas to improve read scalability and support low-latency stale reads.

## Lifecycle

- Latest feature date: 2022-12-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- encrypt
- key
- kms

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
