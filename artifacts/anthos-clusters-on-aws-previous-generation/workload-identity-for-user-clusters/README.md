# Workload Identity for user clusters

Product: Anthos clusters on AWS (previous generation)
Feature slug: `workload-identity-for-user-clusters`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Workload Identity authentication to Google Cloud services is available for Anthos user clusters running Kubernetes 1.20 and above; Workload Identity in Anthos clusters on AWS user clusters is generally available.

## Lifecycle

- Latest feature date: 2021-07-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- certificate
- credential
- encrypt
- iam
- identity
- logging
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/authentication](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/authentication)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
