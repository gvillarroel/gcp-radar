# Regular expression matching in URL maps

Product: Cloud Load Balancing
Feature slug: `regular-expression-matching-in-url-maps`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Application Load Balancer URL maps support RE2 regular expressions for route rules, header matches, and query parameter matches.

## Lifecycle

- Latest feature date: 2025-12-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts), [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- authorization (evidence: [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts), [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- encrypt (evidence: [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts), [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- firewall (evidence: [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts), [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- key (evidence: [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts), [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))
- private (evidence: [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts), [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas), [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/quotas](https://docs.cloud.google.com/load-balancing/docs/quotas)
- [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts)
