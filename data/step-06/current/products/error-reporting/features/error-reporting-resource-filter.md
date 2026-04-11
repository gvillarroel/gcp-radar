---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:18.321Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "Error Reporting resource filter"
feature_slug: "error-reporting-resource-filter"
latest_feature_date: "2022-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://googleapis.dev/python/clouderroreporting/latest/usage.html"
  - "https://docs.cloud.google.com/error-reporting/docs/setup"
  - "https://docs.cloud.google.com/error-reporting/docs/service-errors"
keywords:
  - "error"
  - "reporting"
  - "resource"
  - "filter"
  - "the"
  - "can"
  - "groups"
  - "by"
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

- [https://googleapis.dev/python/clouderroreporting/latest/usage.html](https://googleapis.dev/python/clouderroreporting/latest/usage.html)
- [https://docs.cloud.google.com/error-reporting/docs/setup](https://docs.cloud.google.com/error-reporting/docs/setup)
- [https://docs.cloud.google.com/error-reporting/docs/service-errors](https://docs.cloud.google.com/error-reporting/docs/service-errors)

## Supporting Pages

### Using Stackdriver Error Reporting — google-cloud-error-reporting 0.1.0 documentation

- URL: [https://googleapis.dev/python/clouderroreporting/latest/usage.html](https://googleapis.dev/python/clouderroreporting/latest/usage.html)
- Source ID: `site-python-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using Stackdriver Error Reporting — google-cloud-error-reporting 0.1.0 documentation Source URL: https://googleapis.dev/python/clouderroreporting/latest/usage.html Errors can also be reported to Stackdriver Error Reporting outside the context of an exception.
- The library will include the file path, function name, and line number of the location where the error was reported. from google.cloud import error reporting client = error reporting.Client() client.report(&quot;Found an error!&quot;)

### Collect error data by using Error Reporting | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/setup](https://docs.cloud.google.com/error-reporting/docs/setup)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Collect error data by using Error Reporting Google Cloud Documentation Source URL: https://docs.cloud.google.com/error-reporting/docs/setup This document lists the environments supported by Error Reporting and it links to language-specific guides for application developers.
- We recommend that you use the language-specific client libraries or rely on automatically-collected log entries; however, you can write error data with the Cloud ...

### Manage service error events | Error Reporting | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/service-errors](https://docs.cloud.google.com/error-reporting/docs/service-errors)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage service error events Error Reporting Google Cloud Documentation Source URL: https://docs.cloud.google.com/error-reporting/docs/service-errors When Error Reporting determines that there is a service failure, it groups these error events and sets the type of error to Service error.
- The Error Reporting overview displays the type of error along with other information about the error group:

