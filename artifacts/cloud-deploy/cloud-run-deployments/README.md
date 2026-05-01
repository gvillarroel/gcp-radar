# Cloud Run deployments

Product: Cloud Deploy
Feature slug: `cloud-run-deployments`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Deploy supports deploying applications to Cloud Run.

## Lifecycle

- Latest feature date: 2022-09-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key

## Official Evidence

- [https://docs.cloud.google.com/deploy/docs/hooks](https://docs.cloud.google.com/deploy/docs/hooks)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListAutomationRunsAsyncPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListAutomationRunsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListAutomationRunsPager](https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers.ListAutomationRunsPager)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
