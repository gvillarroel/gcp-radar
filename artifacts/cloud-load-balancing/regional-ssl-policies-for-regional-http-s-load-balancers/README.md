# Regional SSL policies for regional HTTP(S) load balancers

Product: Cloud Load Balancing
Feature slug: `regional-ssl-policies-for-regional-http-s-load-balancers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Regional external and regional internal HTTP(S) load balancers support regional SSL policies to control negotiated SSL features with clients.

## Lifecycle

- Latest feature date: 2022-05-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb), [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts), [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network))
- allow (evidence: [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb), [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts), [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network))
- auth (evidence: [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb), [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts), [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network))
- authorization (evidence: [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb), [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts), [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network))
- policy (evidence: [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb), [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts), [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network))
- security (evidence: [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb), [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts), [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- [https://docs.cloud.google.com/load-balancing/docs/network](https://docs.cloud.google.com/load-balancing/docs/network)
- [https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts](https://docs.cloud.google.com/load-balancing/docs/ssl-policies-concepts)
