---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:59.309Z"
product_name: "Service Usage"
product_slug: "service-usage"
feature_name: "Service Usage services.list disabled filter"
feature_slug: "service-usage-services-list-disabled-filter"
latest_feature_date: "2018-03-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient"
  - "https://docs.cloud.google.com/service-usage/docs/reference/rest/v1/services/list"
  - "https://docs.cloud.google.com/service-usage/docs/list-services"
keywords:
  - "usage"
  - "services"
  - "list"
  - "disabled"
  - "filter"
  - "added"
  - "to"
  - "the"
---

# Service Usage services.list disabled filter

Product: Service Usage
Coverage: MEDIUM

## Step 02 Summary

Added support to the Service Usage `services.list` method to filter results for disabled APIs and services.

## Extended Definition

Added support to the Service Usage `services.list` method to filter results for disabled APIs and services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient)
- [https://docs.cloud.google.com/service-usage/docs/reference/rest/v1/services/list](https://docs.cloud.google.com/service-usage/docs/reference/rest/v1/services/list)
- [https://docs.cloud.google.com/service-usage/docs/list-services](https://docs.cloud.google.com/service-usage/docs/list-services)

## Supporting Pages

### Class ServiceUsageClient (1.15.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient)
- Source ID: `site-python-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Class ServiceUsageClient (1.15.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service usage v1.services.service usage.ServiceUsageClient list services( request: ...usage.pagers.ListServicesPager · List all services available to the specified project, and the current state of those services with respect to the project....

### Method: services.list | Service Usage | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-usage/docs/reference/rest/v1/services/list](https://docs.cloud.google.com/service-usage/docs/reference/rest/v1/services/list)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Method: services.list Service Usage Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-usage/docs/reference/rest/v1/services/list Service Usage · Reference · Send ... · Authorization scopes · List all services available to the specified project, and the current state of those services with respect to the project....

### List services | Service Usage | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-usage/docs/list-services](https://docs.cloud.google.com/service-usage/docs/list-services)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- List services Service Usage Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-usage/docs/list-services This document describes how to list the APIs and services that are enabled or available in a Google Cloud project.

