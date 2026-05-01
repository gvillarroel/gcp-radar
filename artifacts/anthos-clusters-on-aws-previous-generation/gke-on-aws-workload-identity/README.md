# GKE on AWS Workload Identity

Product: Anthos clusters on AWS (previous generation)
Feature slug: `gke-on-aws-workload-identity`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Workload Identity enables binding Kubernetes service accounts to AWS IAM accounts and assigning per-workload IAM roles for fine-grained, least-privilege access.

## Lifecycle

- Latest feature date: 2020-10-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- certificate
- iam
- identity
- logging
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/workload-identity)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
