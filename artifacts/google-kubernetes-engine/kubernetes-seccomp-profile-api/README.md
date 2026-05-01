# Kubernetes seccomp profile API

Product: Google Kubernetes Engine
Feature slug: `kubernetes-seccomp-profile-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds the seccompProfile field to Pod and container securityContext objects to restrict allowed system calls; Adds the seccompProfile field to Pod and container securityContext objects to restrict allowed system calls.

## Lifecycle

- Latest feature date: 2021-01-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- armor
- auth
- authorization
- certificate
- confidential
- constraint
- encrypt
- identity
- key
- kms
- logging
- policy
- private
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/seccomp-in-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
