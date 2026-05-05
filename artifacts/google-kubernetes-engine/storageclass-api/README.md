# StorageClass API

Product: Google Kubernetes Engine
Feature slug: `storageclass-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The v1beta1 StorageClass API was removed in Kubernetes 1.22 in favor of the GA API; deprecated on 2021-10-01.

## Lifecycle

- Latest feature date: 2021-10-01
- Deprecation date: 2021-10-01
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload))
- armor (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload))
- certificate (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload))
- constraint (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload))
- permission (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins), [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions), [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions](https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workload)
