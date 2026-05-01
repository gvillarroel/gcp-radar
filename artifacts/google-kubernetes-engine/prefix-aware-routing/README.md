# Prefix-Aware Routing

Product: Google Kubernetes Engine
Feature slug: `prefix-aware-routing`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Prefix-Aware Routing sends requests with shared prefixes to the same model replica to improve cache hits and latency.

## Lifecycle

- Latest feature date: 2025-12-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- authorization
- firewall
- identity
- key
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-gke-inference-gateway)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
