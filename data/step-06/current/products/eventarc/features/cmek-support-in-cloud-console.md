---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:18.695Z"
product_name: "Eventarc"
product_slug: "eventarc"
feature_name: "CMEK support in Cloud Console"
feature_slug: "cmek-support-in-cloud-console"
latest_feature_date: "2022-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/eventarc/standard/docs/vpc-endpoints/roles-permissions-internal"
  - "https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Eventarc.Publishing.V1/latest/Google.Cloud.Eventarc.Publishing.V1.PublisherClient"
  - "https://docs.cloud.google.com/eventarc/docs/overview"
keywords:
  - "cmek"
  - "in"
  - "console"
  - "eventarc"
  - "can"
  - "use"
  - "customer"
  - "managed"
---

# CMEK support in Cloud Console

Product: Eventarc
Coverage: MEDIUM

## Step 02 Summary

Eventarc can use customer-managed encryption keys when configured through Cloud Console.

## Extended Definition

Eventarc can use customer-managed encryption keys when configured through Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/eventarc/standard/docs/vpc-endpoints/roles-permissions-internal](https://docs.cloud.google.com/eventarc/standard/docs/vpc-endpoints/roles-permissions-internal)
- [https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Eventarc.Publishing.V1/latest/Google.Cloud.Eventarc.Publishing.V1.PublisherClient](https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Eventarc.Publishing.V1/latest/Google.Cloud.Eventarc.Publishing.V1.PublisherClient)
- [https://docs.cloud.google.com/eventarc/docs/overview](https://docs.cloud.google.com/eventarc/docs/overview)

## Supporting Pages

### Roles and permissions for an internal HTTP endpoint in a VPC network | Eventarc Standard | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/eventarc/standard/docs/vpc-endpoints/roles-permissions-internal](https://docs.cloud.google.com/eventarc/standard/docs/vpc-endpoints/roles-permissions-internal)
- Source ID: `site-iam-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Roles and permissions for an internal HTTP endpoint in a VPC network Eventarc Standard Google Cloud Documentation Source URL: https://docs.cloud.google.com/eventarc/standard/docs/vpc-endpoints/roles-permissions-internal This document shows you how to grant Identity and Access Management (IAM) roles and permissions to support routing events from Google Cloud to an internal HTTP endpoint in a Virtual Private Cloud (VPC) network using Eventarc.

### Eventarc Publishing v1 API - Class PublisherClient (2.0.0-beta08) | .NET client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Eventarc.Publishing.V1/latest/Google.Cloud.Eventarc.Publishing.V1.PublisherClient](https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Eventarc.Publishing.V1/latest/Google.Cloud.Eventarc.Publishing.V1.PublisherClient)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Eventarc Publishing v1 API - Class PublisherClient (2.0.0-beta08) .NET client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Eventarc.Publishing.V1/latest/Google.Cloud.Eventarc.Publishing.V1.PublisherClient Reference documentation and code samples for the Eventarc Publishing v1 API class PublisherClient.

### Eventarc overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/eventarc/docs/overview](https://docs.cloud.google.com/eventarc/docs/overview)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Both editions offer a scalable, serverless, and fully managed eventing solution that lets you asynchronously route messages from sources to targets using loosely coupled services that are triggered by and react to state changes known as events.
- Eventarc overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/eventarc/docs/overview Eventarc is offered in two editions: Eventarc Advanced and Eventarc Standard.
- Both editions support a range of event providers and destinations—including Google Cloud services, custom applications, SaaS applications, and third-party services—while managing delivery, security, authorization, observability, and error-handling for you.

