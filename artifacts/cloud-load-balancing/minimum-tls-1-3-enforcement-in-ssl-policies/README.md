# Minimum TLS 1.3 enforcement in SSL policies

Product: Cloud Load Balancing
Feature slug: `minimum-tls-1-3-enforcement-in-ssl-policies`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

SSL policies can enforce TLS 1.3 as the minimum protocol version for supported load balancers.

## Lifecycle

- Latest feature date: 2026-01-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts), [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas))
- allow (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts), [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas))
- auth (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts), [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas))
- authorization (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts), [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas))
- constraint (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts), [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas))
- credential (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts), [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas))
- key (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts), [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas))
- policy (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts), [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas))
- security (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts), [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints)
- [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas)
- [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts)
