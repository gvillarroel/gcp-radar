# Saved query loading in Log Analytics

Product: Cloud Logging
Feature slug: `saved-query-loading-in-log-analytics`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Log Analytics can load saved queries into the Query pane for editing before execution.

## Lifecycle

- Latest feature date: 2023-11-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- audit (evidence: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- iam (evidence: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- key (evidence: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- private (evidence: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))
- token (evidence: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse), [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
