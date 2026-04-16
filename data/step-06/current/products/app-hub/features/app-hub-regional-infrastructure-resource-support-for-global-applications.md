---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.044Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub regional infrastructure resource support for global applications"
feature_slug: "app-hub-regional-infrastructure-resource-support-for-global-applications"
latest_feature_date: "2024-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/global-regional-applications"
  - "https://docs.cloud.google.com/app-hub/docs/register-resources"
  - "https://docs.cloud.google.com/app-hub/docs/manage-applications"
keywords:
  - "regional"
  - "infrastructure"
  - "global"
  - "applications"
  - "resource"
---

# App Hub regional infrastructure resource support for global applications

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

App Hub now supports regional infrastructure resources for global applications in Preview.

## Extended Definition

App Hub now supports regional infrastructure resources for global applications in Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/global-regional-applications](https://docs.cloud.google.com/app-hub/docs/global-regional-applications)
- [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- [https://docs.cloud.google.com/app-hub/docs/manage-applications](https://docs.cloud.google.com/app-hub/docs/manage-applications)

## Supporting Pages

### Global and regional applications \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/global-regional-applications](https://docs.cloud.google.com/app-hub/docs/global-regional-applications)
- Source ID: `site-docs-root-2`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Hub is available in supported locations to help you organize global or regional Google Cloud infrastructure resources in App Hub applications.
- Compare global and regional applications The following table highlights the key differences and considerations to help you choose between global and regional applications: Global application Regional application Recommended use case Best for applications with components that are inherently global or distributed across multiple regions.
- Global and regional applications are defined as follows: Global applications: Functionally group services and workloads that are globally distributed or spread across multiple Google Cloud regions.
- Home Documentation Application development App Hub Guides Send feedback Global and regional applications Stay organized with collections Save and categorize content based on your preferences.

### "Register existing resources to an application \_|\_ App Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about the best location for your application, see Global and regional applications .
- For more information about the best location for your application, see Global and regional applications .
- The following example creates a regional application in us-central1 with defined criticality, environment, and owner attributes: resource "google apphub application" "example" { project = "my-project-id" location = "us-central1" application id = "my-application" display name = "My Application" description = "This application represents our platform." scope { type = "REGIONAL" } attributes { criticality { type = "MISSION CRITICAL" } environment { type = "PRODUCTION" } business owners { display name = "Alice" email = "alice@example.com" } developer owners { display name = "Bob" email = "bob@example.com" } operator owners { display name = "Charlie" email = "charlie@example.com" } } } Register services and workloads App Hub lets you select supported resources located within your application management boundary to register them as services and workloads.
- List the registered workloads in your application: gcloud apphub applications workloads list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered workload: ID DISPLAY NAME WORKLOAD REFERENCE CREATE TIME WORKLOAD NAME WORKLOAD DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /instanceGroups/mig-name' } 2023 -11-01T21:38:08 Terraform To use Terraform to register Google Cloud resources within your application management boundary as services or workloads in an application, use the google apphub discovered service and google apphub discovered workload data sources to dynamically retrieve information about the resources you want to register.

### Manage App Hub applications \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/manage-applications](https://docs.cloud.google.com/app-hub/docs/manage-applications)
- Source ID: `site-docs-root-2`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use global for global applications or a specific region, such as us-east1 , for regional applications.
- Use global for global applications or a specific region, such as us-east1 , for regional applications.
- Use global for global applications or a specific region, such as us-east1 , for regional applications.
- Use global for global applications or a specific region, such as us-east1 , for regional applications.

