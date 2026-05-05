# TLS 1.3 to backends for global external Application Load Balancers

Product: Cloud Load Balancing
Feature slug: `tls-1-3-to-backends-for-global-external-application-load-balancers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Global external Application Load Balancers can negotiate TLS 1.3 on HTTPS connections from the load balancer to backends.

## Lifecycle

- Latest feature date: 2025-05-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb), [https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics](https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- auth (evidence: [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb), [https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics](https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- authorization (evidence: [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb), [https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics](https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- encrypt (evidence: [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb), [https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics](https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- firewall (evidence: [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb), [https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics](https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- policy (evidence: [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb), [https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics](https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- private (evidence: [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb), [https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics](https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics](https://docs.cloud.google.com/load-balancing/docs/https/applb-custom-metrics)
- [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb)
