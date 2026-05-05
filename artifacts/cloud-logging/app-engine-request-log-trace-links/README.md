# App Engine request log trace links

Product: Cloud Logging
Feature slug: `app-engine-request-log-trace-links`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Certain App Engine request logs link to detailed traces that explain request latency.

## Lifecycle

- Latest feature date: 2018-10-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog))
- allow (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog))
- audit (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog))
- auth (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog))
- authorization (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog))
- certificate (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog))
- credential (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog))
- iam (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog))
- identity (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog))
- key (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog))
- kms (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog))
- policy (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog))
- security (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog))
- threat (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog))
- token (evidence: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog](https://docs.cloud.google.com/python/docs/reference/logging/latest/changelog)
