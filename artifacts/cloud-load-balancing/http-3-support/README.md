# HTTP/3 support

Product: Cloud Load Balancing
Feature slug: `http-3-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

External HTTP(S) Load Balancing supports HTTP/3 to reduce latency, improve throughput, and mitigate head-of-line blocking.

## Lifecycle

- Latest feature date: 2021-06-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- armor (evidence: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https), [https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency](https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency), [https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection](https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection))
- auth (evidence: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https), [https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency](https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency), [https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection](https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection))
- authorization (evidence: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https), [https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency](https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency), [https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection](https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection))
- encrypt (evidence: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https), [https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency](https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency), [https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection](https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection))
- logging (evidence: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https), [https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency](https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency), [https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection](https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection](https://docs.cloud.google.com/load-balancing/docs/tutorials/faster-performance-improved-protection)
- [https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency](https://docs.cloud.google.com/load-balancing/docs/tutorials/optimize-app-latency)
