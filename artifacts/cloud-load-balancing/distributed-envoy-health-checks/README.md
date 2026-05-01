# Distributed Envoy health checks

Product: Cloud Load Balancing
Feature slug: `distributed-envoy-health-checks`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Regional external HTTP(S), internal HTTP(S), and regional internal TCP proxy load balancers use distributed Envoy health checks originating from proxy-only subnets.

## Lifecycle

- Latest feature date: 2023-09-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- encrypt
- firewall
- logging

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/health-check-concepts](https://docs.cloud.google.com/load-balancing/docs/health-check-concepts)
- [https://docs.cloud.google.com/load-balancing/docs/health-check-logging](https://docs.cloud.google.com/load-balancing/docs/health-check-logging)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
