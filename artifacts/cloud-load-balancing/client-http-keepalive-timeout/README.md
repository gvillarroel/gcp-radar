# Client HTTP keepalive timeout

Product: Cloud Load Balancing
Feature slug: `client-http-keepalive-timeout`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Supported regional and cross-region Application Load Balancers let you configure the maximum idle time for downstream client HTTP connections; Global external Application Load Balancers support a configurable client HTTP keepalive timeout for downstream client connections.

## Lifecycle

- Latest feature date: 2024-09-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal), [https://docs.cloud.google.com/load-balancing/docs/target-proxies](https://docs.cloud.google.com/load-balancing/docs/target-proxies), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- allow (evidence: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal), [https://docs.cloud.google.com/load-balancing/docs/target-proxies](https://docs.cloud.google.com/load-balancing/docs/target-proxies), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- auth (evidence: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal), [https://docs.cloud.google.com/load-balancing/docs/target-proxies](https://docs.cloud.google.com/load-balancing/docs/target-proxies), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- authorization (evidence: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal), [https://docs.cloud.google.com/load-balancing/docs/target-proxies](https://docs.cloud.google.com/load-balancing/docs/target-proxies), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- certificate (evidence: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal), [https://docs.cloud.google.com/load-balancing/docs/target-proxies](https://docs.cloud.google.com/load-balancing/docs/target-proxies), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- encrypt (evidence: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal), [https://docs.cloud.google.com/load-balancing/docs/target-proxies](https://docs.cloud.google.com/load-balancing/docs/target-proxies), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- key (evidence: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal), [https://docs.cloud.google.com/load-balancing/docs/target-proxies](https://docs.cloud.google.com/load-balancing/docs/target-proxies), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- policy (evidence: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal), [https://docs.cloud.google.com/load-balancing/docs/target-proxies](https://docs.cloud.google.com/load-balancing/docs/target-proxies), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- private (evidence: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal), [https://docs.cloud.google.com/load-balancing/docs/target-proxies](https://docs.cloud.google.com/load-balancing/docs/target-proxies), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/target-proxies](https://docs.cloud.google.com/load-balancing/docs/target-proxies)
