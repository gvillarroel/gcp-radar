# Symmetric hashing for internal TCP/UDP load balancers as next hops

Product: Cloud Load Balancing
Feature slug: `symmetric-hashing-for-internal-tcp-udp-load-balancers-as-next-hops`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Internal TCP/UDP load balancers used as next hops support symmetric hashing so multiple-NIC backends do not require source NAT for return traffic.

## Lifecycle

- Latest feature date: 2021-06-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- encrypt
- firewall
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/internal](https://docs.cloud.google.com/load-balancing/docs/internal)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy](https://docs.cloud.google.com/load-balancing/docs/tcp/internal-proxy)
