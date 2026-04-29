# Canary pod overprovisioning control

Product: Cloud Deploy
Feature slug: `canary-pod-overprovisioning-control`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Canary pod overprovisioning control prevents extra GKE and Anthos pods from being created during canary deployments.

## Lifecycle

- Latest feature date: 2023-06-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- key
- permission
- policy

## Official Evidence

- [https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines](https://docs.cloud.google.com/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines)
- [https://docs.cloud.google.com/deploy/docs/config-files](https://docs.cloud.google.com/deploy/docs/config-files)
- [https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary](https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary)
