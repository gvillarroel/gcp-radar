---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.005Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Bulk registration of services and workloads"
feature_slug: "bulk-registration-of-services-and-workloads"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources"
  - "https://docs.cloud.google.com/app-hub/docs/overview"
  - "https://docs.cloud.google.com/app-hub/docs/key-concepts"
keywords:
  - "registering"
  - "enables"
  - "bulk"
  - "multiple"
  - "registration"
  - "workloads"
---

# Bulk registration of services and workloads

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

App Hub enables registering multiple services and workloads at once, supporting up to 10 resources in a single operation.

## Extended Definition

App Hub enables registering multiple services and workloads at once, supporting up to 10 resources in a single operation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts)

## Supporting Pages

### Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- Source ID: `site-docs-root-2`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following examples update the criticality and environment attributes of services and workloads of a regional application: Update service attributes: resource "google apphub service" "example" { ... other arguments attributes { criticality { type = "HIGH" # Updated criticality } environment { type = "PRODUCTION" } ... other attributes } } Update workload attributes: resource "google apphub workload" "example" { ... other arguments attributes { criticality { type = "HIGH" # Updated criticality } environment { type = "PRODUCTION" } ... other attributes } } Unregister services and workloads Unregistering a service or workload removes it from an application.
- List registered workloads in an application: gcloud apphub applications workloads list \ --application = APPLICATION NAME \ --project = PROJECT ID \ --location = LOCATION \ --filter = FILTER EXPRESSION The registration status of services and workloads in an application might change to detached if you move a project or folder out of your application management boundary or delete the underlying resource.
- View details of services and workloads Follow these steps to view details of services and workloads within your application management boundary, including the following: Location Registration status to an application Properties and attributes For more information about these details, see App Hub concepts and data model .
- Use the Filter field to narrow the results by properties, attributes, or status, using values like Environment , Owners , or Registration status . gcloud View details from services and workloads of an application with a registration status value of registered or detached : Find the project ID of your management project.

### Key concepts \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/key-concepts](https://docs.cloud.google.com/app-hub/docs/key-concepts)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this legacy model, the host project is equivalent to the management project , and the collection of the host project and service projects serves as an example of a multiple-project application management boundary .
- App Hub supports two registration type ( RegistrationType ) property values for services: Exclusive ( EXCLUSIVE ): services that you can only register to one application .
- Even after being registered to an application, shared services can have a discovered registration status in App Hub for other applications to use them.
- In this model, the combination of the host project and all of its connected service projects forms a multiple-project application management boundary .

### App Hub overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Services and workloads that you can register to an application have one of the following registration status: Discovered : Services and workloads that you can register to an application because they are part of the application management boundary and that aren't registered to any other application or can be registered to multiple applications.
- App Hub helps you implement the following application-centric capabilities: Streamline resource registration : Register at once multiple services and workloads to an application.
- Registration status of services and workloads The organizational structure of your Google Cloud resources affects how App Hub can manage services and workloads and lets you register them in applications.
- Key supported properties include: ( Preview ) Registration type : for services, an output-only property that indicates if a service can be registered to one or multiple applications.

