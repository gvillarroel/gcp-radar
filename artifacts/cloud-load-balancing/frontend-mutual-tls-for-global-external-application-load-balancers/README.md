# Frontend mutual TLS for global external Application Load Balancers

Product: Cloud Load Balancing
Feature slug: `frontend-mutual-tls-for-global-external-application-load-balancers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Global external Application Load Balancers, including classic, support frontend mutual TLS with configurable client certificate validation.

## Lifecycle

- Latest feature date: 2023-09-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https), [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb), [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer))
- certificate (evidence: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https), [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb), [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer))
- encrypt (evidence: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https), [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb), [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer))
- firewall (evidence: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https), [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb), [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/application-load-balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer)
- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb](https://docs.cloud.google.com/load-balancing/docs/tutorials/about-capacity-optimization-with-global-lb)
