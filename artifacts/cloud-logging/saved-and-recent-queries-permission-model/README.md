# Saved and recent queries permission model

Product: Cloud Logging
Feature slug: `saved-and-recent-queries-permission-model`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Saved and recent queries have updated permission requirements and support a configurable storage location in default resource settings.

## Lifecycle

- Latest feature date: 2024-07-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse))
- permission (evidence: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse))
- private (evidence: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse))
- token (evidence: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries), [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
