---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:58.957Z"
product_name: "Service Infrastructure"
product_slug: "service-infrastructure"
feature_name: "services.tenancyUnits.applyProjectConfig"
feature_slug: "services-tenancyunits-applyprojectconfig"
latest_feature_date: "2019-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/getting-started"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rpc/google.longrunning"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control"
keywords:
  - "services"
  - "tenancyunits"
  - "applyprojectconfig"
  - "the"
  - "method"
  - "applies"
  - "configuration"
  - "to"
---

# services.tenancyUnits.applyProjectConfig

Product: Service Infrastructure
Coverage: MEDIUM

## Step 02 Summary

The applyProjectConfig method applies configuration to an existing tenant project; The tenancyUnits.applyProjectConfig method applies a configuration to an existing tenant project.

## Extended Definition

The applyProjectConfig method applies configuration to an existing tenant project; The tenancyUnits.applyProjectConfig method applies a configuration to an existing tenant project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/getting-started)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rpc/google.longrunning](https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rpc/google.longrunning)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control](https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control)

## Supporting Pages

### Getting Started with the Service Consumer Management API | Service Infrastructure | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/getting-started)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Getting Started with the Service Consumer Management API Service Infrastructure Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/getting-started The page describes the steps that need to be completed before you can start to use the Service Consumer Management API.

### Package google.longrunning | Service Infrastructure | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rpc/google.longrunning](https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rpc/google.longrunning)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Package google.longrunning Service Infrastructure Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rpc/google.longrunning Manages long-running operations with an API service · When an API method normally takes long time to complete, it can be designed to return Operation to the client, and the client can use this interface to receive the real response asynchronously by polling the operation resource, or pass ...

### Service Control API Access Control | Service Infrastructure | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control](https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control)
- Source ID: `site-iam-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Service Control API Access Control Service Infrastructure Google Cloud Documentation Source URL: https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control The Service Control API uses the following resources to provide its functionality: Service producer project: A service producer project may own zero or more managed services.
- Service consumer: A service consumer refers to a Google Cloud project that has enabled the service.
- The service producer project is the parent of services in this hierarchy.
- The IAM access control is applied to the resource model.

