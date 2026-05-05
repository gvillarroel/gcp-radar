# Custom constraints for Cloud Load Balancing resources

Product: Cloud Load Balancing
Feature slug: `custom-constraints-for-cloud-load-balancing-resources`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Load Balancing resources support custom organization policy constraints to enforce user-defined restrictions.

## Lifecycle

- Latest feature date: 2024-11-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview](https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb))
- allow (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview](https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb))
- auth (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview](https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb))
- authorization (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview](https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb))
- certificate (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview](https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb))
- constraint (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview](https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb))
- credential (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview](https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb))
- iam (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview](https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb))
- identity (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview](https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb))
- key (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview](https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb))
- policy (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview](https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb))
- security (evidence: [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview](https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview), [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb))

## Official Evidence

- [https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview](https://docs.cloud.google.com/load-balancing/docs/auth-policy/auth-policy-overview)
- [https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb](https://docs.cloud.google.com/load-balancing/docs/auth-policy/set-up-auth-policy-app-lb)
- [https://docs.cloud.google.com/load-balancing/docs/custom-constraints](https://docs.cloud.google.com/load-balancing/docs/custom-constraints)
