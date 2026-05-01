# GKE on AWS Service Account-based Installation and Upgrade Access

Product: Anthos clusters on AWS (previous generation)
Feature slug: `gke-on-aws-service-account-based-installation-and-upgrade-access`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Installation and upgrade of Anthos GKE on AWS can be performed with any authenticated Google Cloud service account without requiring allowlist access.

## Lifecycle

- Latest feature date: 2020-10-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- iam
- identity
- logging
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/troubleshooting](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/troubleshooting)
- [https://docs.cloud.google.com/service-mesh/v1.21/docs/upgrade/upgrade](https://docs.cloud.google.com/service-mesh/v1.21/docs/upgrade/upgrade)
- [https://docs.cloud.google.com/service-mesh/v1.22/docs/upgrade/upgrade](https://docs.cloud.google.com/service-mesh/v1.22/docs/upgrade/upgrade)
