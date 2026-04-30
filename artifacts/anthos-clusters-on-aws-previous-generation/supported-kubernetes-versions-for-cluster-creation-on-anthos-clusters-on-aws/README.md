# Supported Kubernetes versions for cluster creation on Anthos clusters on AWS

Product: Anthos clusters on AWS (previous generation)
Feature slug: `supported-kubernetes-versions-for-cluster-creation-on-anthos-clusters-on-aws`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Support was added to launch clusters with Kubernetes versions 1.23.15-gke.2000, 1.24.9-gke.2100, and 1.25.5-gke.2100; Support was added to launch clusters with Kubernetes versions 1.23.13-gke.2000, 1.24.7-gke.2000, and 1.25.3-gke.1900.

## Lifecycle

- Latest feature date: 2023-01-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- certificate
- identity
- logging
- role

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
