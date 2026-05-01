# RootSync and RepoSync deletion propagation policy annotation

Product: Anthos Config Management
Feature slug: `rootsync-and-reposync-deletion-propagation-policy-annotation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

RootSync and RepoSync support the configsync.gke.io/deletion-propagation-policy annotation to enable foreground cascading deletion.

## Lifecycle

- Latest feature date: 2023-08-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- key
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/managing-objects)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/labels-and-annotations](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/labels-and-annotations)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
