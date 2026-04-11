---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:18.321Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "GKE workload error reporting"
feature_slug: "gke-workload-error-reporting"
latest_feature_date: "2023-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/go/docs/reference/cloud.google.com/go/errorreporting/latest/apiv1beta1"
  - "https://docs.cloud.google.com/error-reporting/docs/service-errors"
  - "https://googleapis.dev/python/clouderroreporting/latest/usage.html"
keywords:
  - "gke"
  - "workload"
  - "error"
  - "reporting"
  - "shows"
  - "recent"
  - "application"
  - "errors"
---

# GKE workload error reporting

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

Error Reporting shows recent application errors for Google Kubernetes Engine workloads of type Deployment or Pod.

## Extended Definition

Error Reporting shows recent application errors for Google Kubernetes Engine workloads of type Deployment or Pod.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/go/docs/reference/cloud.google.com/go/errorreporting/latest/apiv1beta1](https://docs.cloud.google.com/go/docs/reference/cloud.google.com/go/errorreporting/latest/apiv1beta1)
- [https://docs.cloud.google.com/error-reporting/docs/service-errors](https://docs.cloud.google.com/error-reporting/docs/service-errors)
- [https://googleapis.dev/python/clouderroreporting/latest/usage.html](https://googleapis.dev/python/clouderroreporting/latest/usage.html)

## Supporting Pages

### Error Reporting API v1beta1 - Package cloud.google.com/go/errorreporting/apiv1beta1 (v0.4.0) | Go client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/go/docs/reference/cloud.google.com/go/errorreporting/latest/apiv1beta1](https://docs.cloud.google.com/go/docs/reference/cloud.google.com/go/errorreporting/latest/apiv1beta1)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Groups and counts similar errors from cloud services and applications, reports new errors, and provides access to error groups and their associated errors.
- Error Reporting API v1beta1 - Package cloud.google.com/go/errorreporting/apiv1beta1 (v0.4.0) Go client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/go/docs/reference/cloud.google.com/go/errorreporting/latest/apiv1beta1 Package errorreporting is an auto-generated package for the Error Reporting API.

### Manage service error events | Error Reporting | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/service-errors](https://docs.cloud.google.com/error-reporting/docs/service-errors)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Manage service error events Error Reporting Google Cloud Documentation Source URL: https://docs.cloud.google.com/error-reporting/docs/service-errors When Error Reporting determines that there is a service failure, it groups these error events and sets the type of error to Service error.
- The Error Reporting overview displays the type of error along with other information about the error group:

### Using Stackdriver Error Reporting — google-cloud-error-reporting 0.1.0 documentation

- URL: [https://googleapis.dev/python/clouderroreporting/latest/usage.html](https://googleapis.dev/python/clouderroreporting/latest/usage.html)
- Source ID: `site-python-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Using Stackdriver Error Reporting — google-cloud-error-reporting 0.1.0 documentation Source URL: https://googleapis.dev/python/clouderroreporting/latest/usage.html Errors can also be reported to Stackdriver Error Reporting outside the context of an exception.
- The library will include the file path, function name, and line number of the location where the error was reported. from google.cloud import error reporting client = error reporting.Client() client.report(&quot;Found an error!&quot;)

