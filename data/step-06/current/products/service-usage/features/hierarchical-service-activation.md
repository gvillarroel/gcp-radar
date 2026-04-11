---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:59.308Z"
product_name: "Service Usage"
product_slug: "service-usage"
feature_name: "Hierarchical service activation"
feature_slug: "hierarchical-service-activation"
latest_feature_date: "2025-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/overview?hl=en"
  - "https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient"
  - "https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement"
keywords:
  - "hierarchical"
  - "activation"
  - "usage"
  - "adds"
  - "allowing"
  - "services"
  - "to"
  - "be"
---

# Hierarchical service activation

Product: Service Usage
Coverage: MEDIUM

## Step 02 Summary

Service Usage adds hierarchical service activation, allowing services to be enabled or disabled across an organization's resource hierarchy.

## Extended Definition

Service Usage adds hierarchical service activation, allowing services to be enabled or disabled across an organization's resource hierarchy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/overview?hl=en](https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/overview?hl=en)
- [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient)
- [https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement](https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement)

## Supporting Pages

### Hierarchical service activation overview | Service Usage | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/overview?hl=en](https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/overview?hl=en)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Hierarchical service activation overview Service Usage Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/overview?hl=en Hierarchical service activation is a Service Usage feature that gives you more control over enabling and disabling services, including public and private services, across your organization&#x27;s resource hierarchy.
- Hierarchical service activation supports a declarative policy model that helps you manage service dependencies and many services efficiently.
- This document provides an overview of hierarchical service activation.

### Class ServiceUsageClient (1.15.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient)
- Source ID: `site-python-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Class ServiceUsageClient (1.15.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service usage v1.services.service usage.ServiceUsageClient list services( request: ...usage.pagers.ListServicesPager · List all services available to the specified project, and the current state of those services with respect to the project....

### Manage service enablement | Service Usage | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement](https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage service enablement Service Usage Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-usage/docs/hierarchical-service-activation/manage-enablement To enable APIs, you need the Service Usage Admin IAM role (roles/serviceusage.serviceUsageAdmin), which contains the serviceusage.services.enable permission.
- Learn how to grant roles. gcloud services enable serviceusage.googleapis.com · If you don&#x27;t indicate the Google Cloud resource that you want to manage, the commands in this document default to the current project.

