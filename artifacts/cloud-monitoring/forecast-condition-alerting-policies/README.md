# Forecast condition alerting policies

Product: Cloud Monitoring
Feature slug: `forecast-condition-alerting-policies`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Alerting policies can forecast threshold violations within a configurable time window for constraint metrics such as quota, memory, and storage usage.

## Lifecycle

- Latest feature date: 2023-01-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- authorization
- constraint
- iam
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/monitoring/docs/custom-constraints](https://docs.cloud.google.com/monitoring/docs/custom-constraints)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.AlertPolicyServiceAsyncClient)
