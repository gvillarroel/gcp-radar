---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.022Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "All App Hub supported resources generally available"
feature_slug: "all-app-hub-supported-resources-generally-available"
latest_feature_date: "2025-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/global-regional-applications"
  - "https://docs.cloud.google.com/app-hub/docs/register-resources"
  - "https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources"
keywords:
  - "generally"
  - "available"
  - "resources"
---

# All App Hub supported resources generally available

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

App Hub’s supported resources are now generally available.

## Extended Definition

App Hub’s supported resources are now generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/global-regional-applications](https://docs.cloud.google.com/app-hub/docs/global-regional-applications)
- [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)

## Supporting Pages

### "Register existing resources to an application \_|\_ App Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- Source ID: `site-docs-root-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- The following example creates a regional application in us-central1 with defined criticality, environment, and owner attributes: resource "google apphub application" "example" { project = "my-project-id" location = "us-central1" application id = "my-application" display name = "My Application" description = "This application represents our platform." scope { type = "REGIONAL" } attributes { criticality { type = "MISSION CRITICAL" } environment { type = "PRODUCTION" } business owners { display name = "Alice" email = "alice@example.com" } developer owners { display name = "Bob" email = "bob@example.com" } operator owners { display name = "Charlie" email = "charlie@example.com" } } } Register services and workloads App Hub lets you select supported resources located within your application management boundary to register them as services and workloads.
- List the registered services in your application: gcloud apphub applications services list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered service: ID DISPLAY NAME SERVICE REFERENCE CREATE TIME SERVICE NAME SERVICE DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /forwardingRules/forwarding-rule' } 2023 -11-01T21:38:08 Register workloads List the available workloads that you can register to an application: gcloud apphub discovered-workloads list \ --project = PROJECT ID \ --location = REGION \ --filter = FILTER EXPRESSION For required and optional flags, replace the following: Required: PROJECT ID : the ID of the management project.
- List the registered workloads in your application: gcloud apphub applications workloads list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered workload: ID DISPLAY NAME WORKLOAD REFERENCE CREATE TIME WORKLOAD NAME WORKLOAD DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /instanceGroups/mig-name' } 2023 -11-01T21:38:08 Terraform To use Terraform to register Google Cloud resources within your application management boundary as services or workloads in an application, use the google apphub discovered service and google apphub discovered workload data sources to dynamically retrieve information about the resources you want to register.
- Commands are slightly different for services and workloads: Register services List the available services that you can register to an application: gcloud apphub discovered-services list \ --project = PROJECT ID \ --location = REGION \ --filter = FILTER EXPRESSION For required and optional flags, replace the following: Required: PROJECT ID : the ID of the management project.

### Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- Source ID: `site-docs-root-2`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Alternatively, view a list of all services and workloads with a registration status value of discovered or registered : Discovered Discovered Google Cloud resources within your application management boundary are available to be registered as services or workloads in an application.
- For a list of the supported metadata types and their schemas, see Extended metadata schemas . gcloud List all available extended metadata schemas in a project and location: gcloud alpha apphub extended-metadata-schemas list \ --project = PROJECT ID \ --location = LOCATION \ Replace the following: PROJECT ID : the ID of your management project.
- Follow these steps to list discovered resources: List discovered services: gcloud apphub discovered-services list \ --project = PROJECT ID \ --location = LOCATION Replace the following: PROJECT ID : the ID of your management project.
- If it is still within your application management boundary, it becomes a resource with a registration status value of discovered , available for registration to another application.

### Global and regional applications \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/global-regional-applications](https://docs.cloud.google.com/app-hub/docs/global-regional-applications)
- Source ID: `site-docs-root-2`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Review the list of available App Hub locations Identify App Hub supported resources Learn more about geography and regions Review Cloud locations Choose your application setup model Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- App Hub is available in supported locations to help you organize global or regional Google Cloud infrastructure resources in App Hub applications.
- Reduce latency: Colocating application components within the same region generally minimizes network latency between components , potentially improving application performance and user experience.
- However, a regional application helps you make sure that the actual data the underlying Google Cloud resources process and store remains within the geographic limits you select.

