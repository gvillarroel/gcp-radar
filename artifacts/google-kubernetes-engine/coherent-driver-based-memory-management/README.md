# Coherent Driver-Based Memory Management

Product: Google Kubernetes Engine
Feature slug: `coherent-driver-based-memory-management`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

CDMM lets GPU memory be managed by the driver instead of the operating system and is enabled by default on supported A4X nodes.

## Lifecycle

- Latest feature date: 2025-11-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- confidential
- firewall
- iam
- identity
- key
- kms
- logging
- policy
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
