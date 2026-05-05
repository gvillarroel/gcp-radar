# ReplicaSet legacy API versions

Product: Google Kubernetes Engine
Feature slug: `replicaset-legacy-api-versions`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The extensions/v1beta1, apps/v1beta1, and apps/v1beta2 API versions for ReplicaSet are no longer served in GKE 1.16; deprecated on 2020-03-06.

## Lifecycle

- Latest feature date: 2020-03-06
- Deprecation date: 2020-03-06
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac))
- certificate (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/rbac)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
