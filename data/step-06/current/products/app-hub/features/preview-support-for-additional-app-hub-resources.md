---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.019Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Preview support for additional App Hub resources"
feature_slug: "preview-support-for-additional-app-hub-resources"
latest_feature_date: "2025-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/overview"
  - "https://docs.cloud.google.com/app-hub/docs/register-resources"
  - "https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources"
keywords:
  - "types"
  - "adds"
  - "additional"
  - "resources"
  - "resource"
  - "preview"
---

# Preview support for additional App Hub resources

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

App Hub adds Preview support for new resource types, including multiple Vertex AI, Compute Engine, Dataflow, and networking resources; App Hub adds Preview support for Dataproc Metastore Service and additional Vertex AI resources, including Dataset, Featurestore, MetadataStore, and Model.

## Extended Definition

App Hub adds Preview support for new resource types, including multiple Vertex AI, Compute Engine, Dataflow, and networking resources; App Hub adds Preview support for Dataproc Metastore Service and additional Vertex AI resources, including Dataset, Featurestore, MetadataStore, and Model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)

## Supporting Pages

### App Hub overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This approach aligns your application management boundary with your organization's structure by business unit, environment, or team, and automatically includes all projects within that folder. ( Preview ) Single-project boundary : For small applications where all Google Cloud resources reside in one project, you can designate that single project as your boundary.
- For example, when an AI agent is deployed through a managed platform like Vertex AI Agent Engine , App Hub automatically classifies the resource with the AGENT functional type value to indicate that the workload runs an AI agent. ( Preview ) Extended metadata : an schema-driven property that provides rich, structured information about the service or workload.
- Detached : Services or workloads that have been registered to an application, but that App Hub can't manage or monitor because their underlying Google Cloud resources are no longer part of the application management boundary that you have defined.
- Registration status of services and workloads The organizational structure of your Google Cloud resources affects how App Hub can manage services and workloads and lets you register them in applications.

### "Register existing resources to an application \_|\_ App Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- Source ID: `site-docs-root-2`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example creates a regional application in us-central1 with defined criticality, environment, and owner attributes: resource "google apphub application" "example" { project = "my-project-id" location = "us-central1" application id = "my-application" display name = "My Application" description = "This application represents our platform." scope { type = "REGIONAL" } attributes { criticality { type = "MISSION CRITICAL" } environment { type = "PRODUCTION" } business owners { display name = "Alice" email = "alice@example.com" } developer owners { display name = "Bob" email = "bob@example.com" } operator owners { display name = "Charlie" email = "charlie@example.com" } } } Register services and workloads App Hub lets you select supported resources located within your application management boundary to register them as services and workloads.
- List the registered workloads in your application: gcloud apphub applications workloads list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered workload: ID DISPLAY NAME WORKLOAD REFERENCE CREATE TIME WORKLOAD NAME WORKLOAD DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /instanceGroups/mig-name' } 2023 -11-01T21:38:08 Terraform To use Terraform to register Google Cloud resources within your application management boundary as services or workloads in an application, use the google apphub discovered service and google apphub discovered workload data sources to dynamically retrieve information about the resources you want to register.
- The Services and workloads tab displays all the registered services and workloads of the application. gcloud App Hub lets you select supported resources located within your application management boundary as services or workloads.
- Create an application Create an application in App Hub to act as a logical container for your existing Google Cloud resources: Console In the Google Cloud console, use the project picker to select your management project.

### Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- Source ID: `site-docs-root-2`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Alternatively, view a list of all services and workloads with a registration status value of discovered or registered : Discovered Discovered Google Cloud resources within your application management boundary are available to be registered as services or workloads in an application.
- Follow these steps to list discovered resources: List discovered services: gcloud apphub discovered-services list \ --project = PROJECT ID \ --location = LOCATION Replace the following: PROJECT ID : the ID of your management project.
- Go to Application Design Center For applications created by registering existing resources in App Hub : Manage applications, services, and workloads directly within App Hub.
- Before you begin This document assumes you have an application with supported resources registered to it .

