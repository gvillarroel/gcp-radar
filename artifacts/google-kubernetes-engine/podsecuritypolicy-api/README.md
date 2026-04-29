# PodSecurityPolicy API

Product: Google Kubernetes Engine
Feature slug: `podsecuritypolicy-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The extensions/v1beta1 PodSecurityPolicy API is no longer served in GKE v1.16 and should be migrated to policy/v1beta1; deprecated on 2020-02-25.

## Lifecycle

- Latest feature date: 2020-02-25
- Deprecation date: 2020-02-25
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- authorization
- certificate
- identity
- key
- permission
- policy
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16](https://docs.cloud.google.com/kubernetes-engine/docs/deprecations/apis-1-16)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/mixed-workloads)
