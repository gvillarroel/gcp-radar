# Backend buckets for regional Application Load Balancers

Product: Cloud Load Balancing
Feature slug: `backend-buckets-for-regional-application-load-balancers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Regional external and regional internal Application Load Balancers can use Cloud Storage backend buckets to serve static content from a specific region.

## Lifecycle

- Latest feature date: 2026-01-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-bucket](https://docs.cloud.google.com/load-balancing/docs/backend-bucket), [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- allow (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-bucket](https://docs.cloud.google.com/load-balancing/docs/backend-bucket), [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- armor (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-bucket](https://docs.cloud.google.com/load-balancing/docs/backend-bucket), [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- encrypt (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-bucket](https://docs.cloud.google.com/load-balancing/docs/backend-bucket), [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- firewall (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-bucket](https://docs.cloud.google.com/load-balancing/docs/backend-bucket), [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- private (evidence: [https://docs.cloud.google.com/load-balancing/docs/backend-bucket](https://docs.cloud.google.com/load-balancing/docs/backend-bucket), [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/backend-bucket](https://docs.cloud.google.com/load-balancing/docs/backend-bucket)
- [https://docs.cloud.google.com/load-balancing/docs/backend-service](https://docs.cloud.google.com/load-balancing/docs/backend-service)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
