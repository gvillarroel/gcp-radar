# GKE on AWS Installation Preflight API Checks

Product: Anthos clusters on AWS (previous generation)
Feature slug: `gke-on-aws-installation-preflight-api-checks`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Additional preflight validation checks were introduced to enforce that required Google Cloud APIs are enabled during installation and upgrade.

## Lifecycle

- Latest feature date: 2020-10-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- identity
- private
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster-with-terraform)
- [https://docs.cloud.google.com/service-mesh/v1.21/docs/upgrade/upgrade](https://docs.cloud.google.com/service-mesh/v1.21/docs/upgrade/upgrade)
- [https://docs.cloud.google.com/service-mesh/v1.22/docs/upgrade/upgrade](https://docs.cloud.google.com/service-mesh/v1.22/docs/upgrade/upgrade)
