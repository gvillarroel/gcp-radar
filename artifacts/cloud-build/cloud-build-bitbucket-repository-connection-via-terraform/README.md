# Cloud Build Bitbucket repository connection via Terraform

Product: Cloud Build
Feature slug: `cloud-build-bitbucket-repository-connection-via-terraform`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Build users can connect to Bitbucket Cloud and Bitbucket Data Center hosts and add repositories using the Google Cloud Terraform provider.

## Lifecycle

- Latest feature date: 2024-07-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud))
- auth (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud))
- credential (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud))
- iam (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud))
- key (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud))
- permission (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud))
- policy (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud))
- role (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud))
- secret (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud))
- token (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud))

## Official Evidence

- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-cloud)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud)
