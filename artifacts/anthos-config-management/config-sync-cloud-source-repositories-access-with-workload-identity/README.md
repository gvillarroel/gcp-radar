# Config Sync Cloud Source Repositories access with Workload Identity

Product: Anthos Config Management
Feature slug: `config-sync-cloud-source-repositories-access-with-workload-identity`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Config Sync can access Cloud Source Repositories through a Google service account when Workload Identity is enabled.

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
- iam
- identity
- permission
- policy
- role
- secret

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-helm-oci)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
