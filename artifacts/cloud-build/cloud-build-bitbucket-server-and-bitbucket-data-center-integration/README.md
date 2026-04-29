# Cloud Build Bitbucket Server and Bitbucket Data Center integration

Product: Cloud Build
Feature slug: `cloud-build-bitbucket-server-and-bitbucket-data-center-integration`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Build supports building repositories hosted on Bitbucket Server and Bitbucket Data Center, including on-premises deployments.

## Lifecycle

- Latest feature date: 2022-02-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- key
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-data-center)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
