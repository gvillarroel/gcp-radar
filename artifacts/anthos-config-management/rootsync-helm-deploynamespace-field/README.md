# RootSync Helm deployNamespace field

Product: Anthos Config Management
Feature slug: `rootsync-helm-deploynamespace-field`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The RootSync API adds the spec.helm.deployNamespace field to specify the namespace where a rendered Helm chart is deployed.

## Lifecycle

- Latest feature date: 2023-05-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- role

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
