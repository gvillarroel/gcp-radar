# In-place Pod Resize

Product: Google Kubernetes Engine
Feature slug: `in-place-pod-resize`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

In-place Pod Resize lets you change Pod CPU and memory requests and limits without restarting Pods or containers; In-Place Pod Resize now supports decreasing memory limits with best-effort OOM protection and improved deferred resize retries.

## Lifecycle

- Latest feature date: 2025-12-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- confidential
- constraint
- iam
- key
- kms
- logging
- policy
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass](https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
