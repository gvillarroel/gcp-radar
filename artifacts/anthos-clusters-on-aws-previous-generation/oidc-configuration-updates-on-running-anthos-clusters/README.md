# OIDC configuration updates on running Anthos clusters

Product: Anthos clusters on AWS (previous generation)
Feature slug: `oidc-configuration-updates-on-running-anthos-clusters`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Users can update the OIDC configuration on an Anthos cluster while it is running.

## Lifecycle

- Latest feature date: 2021-09-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest))
- authorization (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest))
- identity (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest))
- logging (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates), [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/about-surge-updates)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters)
