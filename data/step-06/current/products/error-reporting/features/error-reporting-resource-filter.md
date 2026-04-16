---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.687Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "Error Reporting resource filter"
feature_slug: "error-reporting-resource-filter"
latest_feature_date: "2022-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/viewing-errors"
  - "https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceClient"
  - "https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient"
keywords:
  - "error"
  - "reporting"
  - "resource"
  - "filter"
  - "can"
  - "groups"
  - "type"
---

# Error Reporting resource filter

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

The Error Reporting resource filter can filter error groups by resource type.

## Extended Definition

The Error Reporting resource filter can filter error groups by resource type.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/viewing-errors](https://docs.cloud.google.com/error-reporting/docs/viewing-errors)
- [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceClient)
- [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient)

## Supporting Pages

### View and filter error groups \_|\_ Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/viewing-errors](https://docs.cloud.google.com/error-reporting/docs/viewing-errors)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Filter error groups You can use the filters on the Error Reporting toolbar to filter by the status, the affected resources, and the region of the log buckets that store your log entries.
- When you filter error groups by text, the bar graphs show grey bars to represent the number of error events that didn't match the text filter: For information on how Error Reporting organizes error events into error groups, see How error events are grouped .
- Home Documentation Observability Error Reporting Guides Send feedback View and filter error groups Stay organized with collections Save and categorize content based on your preferences.
- For example, if you have error groups for the Kubernetes Container Services resource, then you can filter first by service and then by version: To save your selections, click Apply .

### "Class ErrorGroupServiceClient (1.15.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceClient)
- Source ID: `site-python-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GetGroupRequest ( group name="group name value", ) Make the request response = client. get group (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.errorreporting v1beta1.types.GetGroupRequest , dict] The request object.
- UpdateGroupRequest ( ) Make the request response = client. update group (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.errorreporting v1beta1.types.UpdateGroupRequest , dict] The request object.
- Returns Type Description ErrorGroupServiceClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description ErrorGroupServiceClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.

### "Class ErrorGroupServiceAsyncClient (1.15.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/clouderrorreporting/latest/google.cloud.errorreporting_v1beta1.services.error_group_service.ErrorGroupServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GetGroupRequest ( group name="group name value", ) Make the request response = await client. get group (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.errorreporting v1beta1.types.GetGroupRequest , dict]] The request object.
- UpdateGroupRequest ( ) Make the request response = await client. update group (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.errorreporting v1beta1.types.UpdateGroupRequest , dict]] The request object.
- Returns Type Description ErrorGroupServiceAsyncClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description ErrorGroupServiceAsyncClient The constructed client. from service account info from service account info ( info : dict , args , kwargs ) Creates an instance of this client using the provided credentials info.

