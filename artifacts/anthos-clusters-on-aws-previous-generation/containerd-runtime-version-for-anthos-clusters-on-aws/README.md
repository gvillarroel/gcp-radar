# Containerd runtime version for Anthos clusters on AWS

Product: Anthos clusters on AWS (previous generation)
Feature slug: `containerd-runtime-version-for-anthos-clusters-on-aws`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Anthos clusters on AWS now use containerd runtime version 1.6.12.

## Lifecycle

- Latest feature date: 2023-01-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- logging
- policy

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/enterprise/clusters/docs/dataplane-v2](https://docs.cloud.google.com/kubernetes-engine/enterprise/clusters/docs/dataplane-v2)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration)
