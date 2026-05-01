# SNI-based routing for proxy Network Load Balancers

Product: Cloud Load Balancing
Feature slug: `sni-based-routing-for-proxy-network-load-balancers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Proxy Network Load Balancers can route TLS traffic by SNI hostname using TLSRoute without terminating the TLS connection.

## Lifecycle

- Latest feature date: 2026-03-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- certificate
- policy

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing](https://docs.cloud.google.com/load-balancing/docs/network/udp-with-network-load-balancing)
- [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
- [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
