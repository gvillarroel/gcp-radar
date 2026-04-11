---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:18.323Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "Error group resolution status"
feature_slug: "error-group-resolution-status"
latest_feature_date: "2017-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/service-errors"
  - "https://docs.cloud.google.com/go/docs/reference/cloud.google.com/go/errorreporting/latest/apiv1beta1"
  - "https://docs.cloud.google.com/error-reporting/docs/grouping-errors"
keywords:
  - "error"
  - "group"
  - "resolution"
  - "status"
  - "users"
  - "can"
  - "assign"
  - "to"
---

# Error group resolution status

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

Users can assign a resolution status to error groups to help triage errors.

## Extended Definition

Users can assign a resolution status to error groups to help triage errors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/service-errors](https://docs.cloud.google.com/error-reporting/docs/service-errors)
- [https://docs.cloud.google.com/go/docs/reference/cloud.google.com/go/errorreporting/latest/apiv1beta1](https://docs.cloud.google.com/go/docs/reference/cloud.google.com/go/errorreporting/latest/apiv1beta1)
- [https://docs.cloud.google.com/error-reporting/docs/grouping-errors](https://docs.cloud.google.com/error-reporting/docs/grouping-errors)

## Supporting Pages

### Manage service error events | Error Reporting | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/service-errors](https://docs.cloud.google.com/error-reporting/docs/service-errors)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Manage service error events Error Reporting Google Cloud Documentation Source URL: https://docs.cloud.google.com/error-reporting/docs/service-errors When Error Reporting determines that there is a service failure, it groups these error events and sets the type of error to Service error.
- The Error Reporting overview displays the type of error along with other information about the error group:

### Error Reporting API v1beta1 - Package cloud.google.com/go/errorreporting/apiv1beta1 (v0.4.0) | Go client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/go/docs/reference/cloud.google.com/go/errorreporting/latest/apiv1beta1](https://docs.cloud.google.com/go/docs/reference/cloud.google.com/go/errorreporting/latest/apiv1beta1)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Groups and counts similar errors from cloud services and applications, reports new errors, and provides access to error groups and their associated errors.
- Error Reporting API v1beta1 - Package cloud.google.com/go/errorreporting/apiv1beta1 (v0.4.0) Go client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/go/docs/reference/cloud.google.com/go/errorreporting/latest/apiv1beta1 Package errorreporting is an auto-generated package for the Error Reporting API.
- It is not stable, and may be subject to changes.

### Error Reporting overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/grouping-errors](https://docs.cloud.google.com/error-reporting/docs/grouping-errors)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Error Reporting overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/error-reporting/docs/grouping-errors Error Reporting aggregates error events produced in your running cloud services.
- An error event represents a single occurrence of an error in your application.

