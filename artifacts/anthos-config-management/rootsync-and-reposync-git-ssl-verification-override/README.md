# RootSync and RepoSync Git SSL verification override

Product: Anthos Config Management
Feature slug: `rootsync-and-reposync-git-ssl-verification-override`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The spec.git.noSSLVerify field lets users disable Git SSL certificate verification.

## Lifecycle

- Latest feature date: 2021-08-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- certificate
- key
- policy
- secret

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-multi-repo)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
