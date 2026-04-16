---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.684Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "Error groups on custom dashboards"
feature_slug: "error-groups-on-custom-dashboards"
latest_feature_date: "2023-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/viewing-errors"
  - "https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceClient"
keywords:
  - "error"
  - "groups"
  - "custom"
  - "dashboards"
  - "reporting"
  - "can"
  - "display"
---

# Error groups on custom dashboards

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

Error Reporting can display error groups on custom dashboards.

## Extended Definition

Error Reporting can display error groups on custom dashboards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/viewing-errors](https://docs.cloud.google.com/error-reporting/docs/viewing-errors)
- [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceClient)

## Supporting Pages

### View and filter error groups \_|\_ Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/viewing-errors](https://docs.cloud.google.com/error-reporting/docs/viewing-errors)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note : If you see the message "Set up Error Reporting" on the Error Reporting page, then your Google Cloud project has no error groups to display.
- The Error Reporting page displays a list of error groups that match the current filter.
- When you filter error groups by text, the bar graphs show grey bars to represent the number of error events that didn't match the text filter: For information on how Error Reporting organizes error events into error groups, see How error events are grouped .
- Filter error groups You can use the filters on the Error Reporting toolbar to filter by the status, the affected resources, and the region of the log buckets that store your log entries.

### "Class ErrorGroupServiceAsyncClient (1.15.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Call [groupStats.list] [google.devtools.clouderrorreporting.v1beta1.ErrorStatsService.ListGroupStats] to return a list of groups belonging to this project.
- ErrorGroupServiceAsyncClient () Initialize request argument(s) request = errorreporting v1beta1.
- ErrorGroupServiceAsyncClient () Initialize request argument(s) request = errorreporting v1beta1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import errorreporting v1beta1 async def sample update group(): Create a client client = errorreporting v1beta1.

### "Class ErrorGroupServiceClient (1.15.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceClient)
- Source ID: `site-python-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Call [groupStats.list] [google.devtools.clouderrorreporting.v1beta1.ErrorStatsService.ListGroupStats] to return a list of groups belonging to this project.
- ErrorGroupServiceClient () Initialize request argument(s) request = errorreporting v1beta1.
- ErrorGroupServiceClient () Initialize request argument(s) request = errorreporting v1beta1.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import errorreporting v1beta1 def sample update group(): Create a client client = errorreporting v1beta1.

