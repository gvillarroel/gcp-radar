# Log Analytics JSON field inference

Product: Cloud Logging
Feature slug: `log-analytics-json-field-inference`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Log Analytics can infer fields from JSON columns and show how frequently those inferred fields appear.

## Lifecycle

- Latest feature date: 2025-05-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface))
- allow (evidence: [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface))
- audit (evidence: [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface))
- auth (evidence: [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface))
- certificate (evidence: [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface))
- credential (evidence: [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface))
- iam (evidence: [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface))
- identity (evidence: [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface))
- key (evidence: [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface))
- kms (evidence: [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface))
- logging (evidence: [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface))
- policy (evidence: [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface))
- token (evidence: [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog)
