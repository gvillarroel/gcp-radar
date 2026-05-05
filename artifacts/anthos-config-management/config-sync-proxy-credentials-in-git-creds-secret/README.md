# Config Sync proxy credentials in git-creds Secret

Product: Anthos Config Management
Feature slug: `config-sync-proxy-credentials-in-git-creds-secret`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Config Sync can store HTTPS or HTTP proxy credentials in the git-creds Secret using dedicated keys.

## Lifecycle

- Latest feature date: 2021-08-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo))
- auth (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo))
- credential (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo))
- key (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo))
- policy (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo))
- private (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo))
- secret (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo))
- security (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo))
- token (evidence: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git), [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo))

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/grant-access-git)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo)
