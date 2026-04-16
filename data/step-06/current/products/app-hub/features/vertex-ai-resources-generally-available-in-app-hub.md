---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.020Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Vertex AI resources generally available in App Hub"
feature_slug: "vertex-ai-resources-generally-available-in-app-hub"
latest_feature_date: "2025-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/register-resources"
  - "https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources"
  - "https://docs.cloud.google.com/app-hub/docs/global-regional-applications"
keywords:
  - "following"
  - "generally"
  - "vertex"
  - "available"
  - "resources"
---

# Vertex AI resources generally available in App Hub

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

The following Vertex AI resources are now generally available in App Hub: Dataset items, Featurestore containers, MetadataStore instances, and Model resources.

## Extended Definition

The following Vertex AI resources are now generally available in App Hub: Dataset items, Featurestore containers, MetadataStore instances, and Model resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- [https://docs.cloud.google.com/app-hub/docs/global-regional-applications](https://docs.cloud.google.com/app-hub/docs/global-regional-applications)

## Supporting Pages

### "Register existing resources to an application \_|\_ App Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- Source ID: `site-docs-root-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- The following example creates a regional application in us-central1 with defined criticality, environment, and owner attributes: resource "google apphub application" "example" { project = "my-project-id" location = "us-central1" application id = "my-application" display name = "My Application" description = "This application represents our platform." scope { type = "REGIONAL" } attributes { criticality { type = "MISSION CRITICAL" } environment { type = "PRODUCTION" } business owners { display name = "Alice" email = "alice@example.com" } developer owners { display name = "Bob" email = "bob@example.com" } operator owners { display name = "Charlie" email = "charlie@example.com" } } } Register services and workloads App Hub lets you select supported resources located within your application management boundary to register them as services and workloads.
- List the registered services in your application: gcloud apphub applications services list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered service: ID DISPLAY NAME SERVICE REFERENCE CREATE TIME SERVICE NAME SERVICE DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /forwardingRules/forwarding-rule' } 2023 -11-01T21:38:08 Register workloads List the available workloads that you can register to an application: gcloud apphub discovered-workloads list \ --project = PROJECT ID \ --location = REGION \ --filter = FILTER EXPRESSION For required and optional flags, replace the following: Required: PROJECT ID : the ID of the management project.
- List the registered workloads in your application: gcloud apphub applications workloads list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered workload: ID DISPLAY NAME WORKLOAD REFERENCE CREATE TIME WORKLOAD NAME WORKLOAD DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /instanceGroups/mig-name' } 2023 -11-01T21:38:08 Terraform To use Terraform to register Google Cloud resources within your application management boundary as services or workloads in an application, use the google apphub discovered service and google apphub discovered workload data sources to dynamically retrieve information about the resources you want to register.
- Commands are slightly different for services and workloads: Register services List the available services that you can register to an application: gcloud apphub discovered-services list \ --project = PROJECT ID \ --location = REGION \ --filter = FILTER EXPRESSION For required and optional flags, replace the following: Required: PROJECT ID : the ID of the management project.

### Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- Source ID: `site-docs-root-2`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- For a list of the supported metadata types and their schemas, see Extended metadata schemas . gcloud List all available extended metadata schemas in a project and location: gcloud alpha apphub extended-metadata-schemas list \ --project = PROJECT ID \ --location = LOCATION \ Replace the following: PROJECT ID : the ID of your management project.
- Alternatively, view a list of all services and workloads with a registration status value of discovered or registered : Discovered Discovered Google Cloud resources within your application management boundary are available to be registered as services or workloads in an application.
- Follow these steps to list discovered resources: List discovered services: gcloud apphub discovered-services list \ --project = PROJECT ID \ --location = LOCATION Replace the following: PROJECT ID : the ID of your management project.
- The following examples update the criticality and environment attributes of services and workloads of a regional application: Update service attributes: resource "google apphub service" "example" { ... other arguments attributes { criticality { type = "HIGH" # Updated criticality } environment { type = "PRODUCTION" } ... other attributes } } Update workload attributes: resource "google apphub workload" "example" { ... other arguments attributes { criticality { type = "HIGH" # Updated criticality } environment { type = "PRODUCTION" } ... other attributes } } Unregister services and workloads Unregistering a service or workload removes it from an application.

### Global and regional applications \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/global-regional-applications](https://docs.cloud.google.com/app-hub/docs/global-regional-applications)
- Source ID: `site-docs-root-2`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Review the list of available App Hub locations Identify App Hub supported resources Learn more about geography and regions Review Cloud locations Choose your application setup model Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- App Hub is available in supported locations to help you organize global or regional Google Cloud infrastructure resources in App Hub applications.
- Compare global and regional applications The following table highlights the key differences and considerations to help you choose between global and regional applications: Global application Regional application Recommended use case Best for applications with components that are inherently global or distributed across multiple regions.
- Reduce latency: Colocating application components within the same region generally minimizes network latency between components , potentially improving application performance and user experience.

