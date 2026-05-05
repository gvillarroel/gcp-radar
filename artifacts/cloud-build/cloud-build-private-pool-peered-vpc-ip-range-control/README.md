# Cloud Build private pool peered VPC IP range control

Product: Cloud Build
Feature slug: `cloud-build-private-pool-peered-vpc-ip-range-control`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Build private pools can now set peeredNetworkIpRange to consume fewer IP addresses in peered VPCs.

## Lifecycle

- Latest feature date: 2023-01-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- private (evidence: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network), [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network), [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network))

## Official Evidence

- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-data-center-private-network)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/build-repos-from-bitbucket-server-private-network)
- [https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github-enterprise-private-network)
