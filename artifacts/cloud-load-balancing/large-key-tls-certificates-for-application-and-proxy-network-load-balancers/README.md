# Large-key TLS certificates for Application and Proxy Network Load Balancers

Product: Cloud Load Balancing
Feature slug: `large-key-tls-certificates-for-application-and-proxy-network-load-balancers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Application Load Balancers and Proxy Network Load Balancers support self-managed TLS certificates with RSA-3072, RSA-4096, and ECDSA P-384 keys.

## Lifecycle

- Latest feature date: 2025-07-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- certificate (evidence: [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp), [https://docs.cloud.google.com/load-balancing/docs/ssl-certificates](https://docs.cloud.google.com/load-balancing/docs/ssl-certificates), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- encrypt (evidence: [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp), [https://docs.cloud.google.com/load-balancing/docs/ssl-certificates](https://docs.cloud.google.com/load-balancing/docs/ssl-certificates), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- key (evidence: [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp), [https://docs.cloud.google.com/load-balancing/docs/ssl-certificates](https://docs.cloud.google.com/load-balancing/docs/ssl-certificates), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- private (evidence: [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp), [https://docs.cloud.google.com/load-balancing/docs/ssl-certificates](https://docs.cloud.google.com/load-balancing/docs/ssl-certificates), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/ssl-certificates](https://docs.cloud.google.com/load-balancing/docs/ssl-certificates)
- [https://docs.cloud.google.com/load-balancing/docs/tcp](https://docs.cloud.google.com/load-balancing/docs/tcp)
