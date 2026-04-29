# Deployment fingerprint requirements

Product: Cloud Deployment Manager
Feature slug: `deployment-fingerprint-requirements`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Deployment Manager API requires fingerprints when updating, canceling, or stopping a deployment.

## Lifecycle

- Latest feature date: 2015-07-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- iam
- key
- policy

## Official Evidence

- [https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments](https://docs.cloud.google.com/deployment-manager/docs/deployments/updating-deployments)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/cancelPreview)
- [https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop](https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/stop)
