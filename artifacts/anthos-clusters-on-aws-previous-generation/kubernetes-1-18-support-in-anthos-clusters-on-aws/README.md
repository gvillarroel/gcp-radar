# Kubernetes 1.18 support in Anthos clusters on AWS

Product: Anthos clusters on AWS (previous generation)
Feature slug: `kubernetes-1-18-support-in-anthos-clusters-on-aws`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Support for Kubernetes 1.18 clusters on Anthos clusters on AWS is removed; deprecated on 2021-12-14.

## Lifecycle

- Latest feature date: 2021-12-14
- Deprecation date: 2021-12-14
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools))
- allow (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools))
- encrypt (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools))
- role (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
