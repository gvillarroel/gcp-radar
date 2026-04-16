---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:48.037Z"
product_name: "Service Infrastructure"
product_slug: "service-infrastructure"
feature_name: "Service Infrastructure Billing Support"
feature_slug: "service-infrastructure-billing-support"
latest_feature_date: "2018-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-infrastructure/docs/reporting-billing-metrics"
  - "https://docs.cloud.google.com/service-infrastructure/docs/overview"
  - "https://docs.cloud.google.com/service-infrastructure/docs/glossary"
  - "https://docs.cloud.google.com/service-infrastructure/docs/how-to"
keywords:
  - "infrastructure"
  - "billing"
  - "now"
  - "generally"
  - "supports"
  - "capabilities"
---

# Service Infrastructure Billing Support

Product: Service Infrastructure
Coverage: MEDIUM

## Step 02 Summary

Service Infrastructure now generally supports billing capabilities.

## Extended Definition

Service Infrastructure now generally supports billing capabilities.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-infrastructure/docs/reporting-billing-metrics](https://docs.cloud.google.com/service-infrastructure/docs/reporting-billing-metrics)
- [https://docs.cloud.google.com/service-infrastructure/docs/overview](https://docs.cloud.google.com/service-infrastructure/docs/overview)
- [https://docs.cloud.google.com/service-infrastructure/docs/glossary](https://docs.cloud.google.com/service-infrastructure/docs/glossary)
- [https://docs.cloud.google.com/service-infrastructure/docs/how-to](https://docs.cloud.google.com/service-infrastructure/docs/how-to)

## Supporting Pages

### "Reporting Billing Metrics \_|\_ Service Infrastructure \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/reporting-billing-metrics](https://docs.cloud.google.com/service-infrastructure/docs/reporting-billing-metrics)
- Source ID: `site-iam-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Service Infrastructure Guides Send feedback Reporting Billing Metrics Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to use Service Infrastructure to enable managed services to send billing usage data so that Cloud Billing can charge against service consumers .
- The metrics to be used . metrics : - name : library . appspot . com / books / borrowed metric kind : DELTA value type : INT64 unit : '1' The billing configuration . billing : consumer destinations : - monitored resource : library . appspot . com / branch metrics : - library . appspot . com / books / borrowed Reporting billing metrics Once you have configured monitoring in the service configuration and pushed the service configuration using the Service Management API, you can call the Service Control API to report metrics.
- See billing.proto for details on billing configuration. library monitored resources : - type : library . appspot . com / branch labels : - key : cloud . googleapis . com / location description : The cloud location . - key : library . appspot . com / city description : The city where the library branch is located in .

### Service Infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/overview](https://docs.cloud.google.com/service-infrastructure/docs/overview)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service Infrastructure provides a wide range of features to service consumers and service producers, including authentication, authorization, auditing, rate limiting, analytics, billing, logging, and monitoring.
- Running APIs and services To run a managed service using Service Infrastructure, your service needs to call the Service Control API for admission control on each request, and telemetry reporting on each response, such as validating API keys and reporting API metrics.
- Creating APIs and services To create a managed service using Service Infrastructure, you need to create a service configuration to define your service settings and behaviors, such as service name and API surface.
- Home Documentation Application development Service Infrastructure Guides Send feedback Service Infrastructure Stay organized with collections Save and categorize content based on your preferences.

### Glossary \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/glossary](https://docs.cloud.google.com/service-infrastructure/docs/glossary)
- Source ID: `site-iam-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enabling a managed service for a service consumer project allows a user to use it, adds monitoring pages in the Google Cloud console, and enables billing for the service if billing is enabled for the project.
- The Service Management API also allows publishing an OpenAPI specification, formerly known as the Swagger Specification, which is automatically converted to a corresponding service configuration.
- Home Documentation Application development Service Infrastructure Guides Send feedback Glossary Stay organized with collections Save and categorize content based on your preferences.
- Operation Service Infrastructure uses the generic concept of an operation to represent the activities of a managed service , such as API calls and resource usage.

### How-to Guides \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/how-to](https://docs.cloud.google.com/service-infrastructure/docs/how-to)
- Source ID: `site-api-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Integrating with Service Infrastructure Admission Control Use the Service Control API to check whether an activity in a managed service is allowed, including authentication, authorization, and auditing.
- Home Documentation Application development Service Infrastructure Guides Send feedback How-to Guides Stay organized with collections Save and categorize content based on your preferences.
- Using Service Infrastructure APIs Getting Started with the Service Management API Set up and test the Service Management API from your local machine with curl .
- Telemetry Reporting Use the Service Control API to report telemetry about an activity in a managed service, including billing, logging, and monitoring.

