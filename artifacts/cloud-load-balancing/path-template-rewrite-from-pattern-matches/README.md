# Path template rewrite from pattern matches

Product: Cloud Load Balancing
Feature slug: `path-template-rewrite-from-pattern-matches`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Supported Application Load Balancers can rewrite request paths using values captured from flexible pattern matching; Global external HTTP(S) load balancers can rewrite request paths using values captured from flexible pattern matching.

## Lifecycle

- Latest feature date: 2024-04-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb), [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https))
- auth (evidence: [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb), [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https))
- authorization (evidence: [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb), [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https))
- firewall (evidence: [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb), [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https))
- policy (evidence: [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb), [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https))
- security (evidence: [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb), [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- [https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https](https://docs.cloud.google.com/load-balancing/docs/https/setting-up-https)
- [https://docs.cloud.google.com/load-balancing/docs/url-map-concepts](https://docs.cloud.google.com/load-balancing/docs/url-map-concepts)
