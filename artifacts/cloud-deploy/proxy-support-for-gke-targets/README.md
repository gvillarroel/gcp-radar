# Proxy support for GKE targets

Product: Cloud Deploy
Feature slug: `proxy-support-for-gke-targets`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Deploy supports deployments to Google Kubernetes Engine targets through a proxy.

## Lifecycle

- Latest feature date: 2024-06-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/deploy/docs/gke-targets](https://docs.cloud.google.com/deploy/docs/gke-targets), [https://docs.cloud.google.com/deploy/docs/deploy-app-parallel](https://docs.cloud.google.com/deploy/docs/deploy-app-parallel), [https://docs.cloud.google.com/deploy/docs/parallel](https://docs.cloud.google.com/deploy/docs/parallel))
- policy (evidence: [https://docs.cloud.google.com/deploy/docs/gke-targets](https://docs.cloud.google.com/deploy/docs/gke-targets), [https://docs.cloud.google.com/deploy/docs/deploy-app-parallel](https://docs.cloud.google.com/deploy/docs/deploy-app-parallel), [https://docs.cloud.google.com/deploy/docs/parallel](https://docs.cloud.google.com/deploy/docs/parallel))

## Official Evidence

- [https://docs.cloud.google.com/deploy/docs/deploy-app-parallel](https://docs.cloud.google.com/deploy/docs/deploy-app-parallel)
- [https://docs.cloud.google.com/deploy/docs/gke-targets](https://docs.cloud.google.com/deploy/docs/gke-targets)
- [https://docs.cloud.google.com/deploy/docs/parallel](https://docs.cloud.google.com/deploy/docs/parallel)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
