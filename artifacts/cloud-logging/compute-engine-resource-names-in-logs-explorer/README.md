# Compute Engine Resource Names in Logs Explorer

Product: Cloud Logging
Feature slug: `compute-engine-resource-names-in-logs-explorer`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Logs Explorer supports Compute Engine resource names alongside resource IDs.

## Lifecycle

- Latest feature date: 2022-02-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- audit (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- auth (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- certificate (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- credential (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- firewall (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- key (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- kms (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- policy (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- private (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- security (evidence: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
