# RootSync and RepoSync CA certificate support for Helm and OCI

Product: Anthos Config Management
Feature slug: `rootsync-and-reposync-ca-certificate-support-for-helm-and-oci`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

RootSync and RepoSync support specifying CA certificates for Helm and OCI source types with the caCertSecretRef field.

## Lifecycle

- Latest feature date: 2024-05-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- certificate
- policy
- role
- secret

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rootsync-reposync-fields)
