---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.009Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "ExtendedMetadata property for services and workloads"
feature_slug: "extendedmetadata-property-for-services-and-workloads"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/overview"
  - "https://docs.cloud.google.com/app-hub/docs/register-resources"
  - "https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources"
keywords:
  - "extendedmetadata"
  - "structured"
  - "property"
  - "include"
  - "output"
  - "workloads"
  - "only"
---

# ExtendedMetadata property for services and workloads

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

Services and workloads now include an output-only ExtendedMetadata property for structured, schema-based resource details.

## Extended Definition

Services and workloads now include an output-only ExtendedMetadata property for structured, schema-based resource details.

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
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key supported properties include: ( Preview ) Registration type : for services, an output-only property that indicates if a service can be registered to one or multiple applications.
- To learn how to visualize this metadata, see View extended metadata schemas . ( Preview ) Identity : an output-only property that contains the service account or managed workload identity name for a service or workload.
- To learn which services are shared or exclusive, see the list of App Hub supported services . ( Preview ) Functional type : an output-only property that identifies the known function of a service or workload.
- For example, when an AI agent is deployed through a managed platform like Vertex AI Agent Engine , App Hub automatically classifies the resource with the AGENT functional type value to indicate that the workload runs an AI agent. ( Preview ) Extended metadata : an schema-driven property that provides rich, structured information about the service or workload.

### "Register existing resources to an application \_|\_ App Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- Source ID: `site-docs-root-2`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: FILTER EXPRESSION : the filter expression for the --filter flag to only display services from a specified project within the application management boundary or with a specific property, for example: service properties.gcp project=projects/ PROJECT ID service properties.gcp project=projects/ PROJECT ID AND service reference.uri "forwardingRules" The output is similar to the following example: ID SERVICE REFERENCE SERVICE PROPERTIES SERVICE ID { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /forwardingRules/forwarding-rule' } { 'gcpProject' : 'projects/ PROJECT ID ' , 'location' : ' REGION ' } Copy the service ID, SERVICE ID , from the output.
- Optional: FILTER EXPRESSION : the filter expression for the --filter flag to only display workloads from a specified project within the application management boundary or with a specific property, for example, workload properties.gcp project=projects/ PROJECT ID .
- List the registered services in your application: gcloud apphub applications services list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered service: ID DISPLAY NAME SERVICE REFERENCE CREATE TIME SERVICE NAME SERVICE DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /forwardingRules/forwarding-rule' } 2023 -11-01T21:38:08 Register workloads List the available workloads that you can register to an application: gcloud apphub discovered-workloads list \ --project = PROJECT ID \ --location = REGION \ --filter = FILTER EXPRESSION For required and optional flags, replace the following: Required: PROJECT ID : the ID of the management project.
- List the registered workloads in your application: gcloud apphub applications workloads list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered workload: ID DISPLAY NAME WORKLOAD REFERENCE CREATE TIME WORKLOAD NAME WORKLOAD DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /instanceGroups/mig-name' } 2023 -11-01T21:38:08 Terraform To use Terraform to register Google Cloud resources within your application management boundary as services or workloads in an application, use the google apphub discovered service and google apphub discovered workload data sources to dynamically retrieve information about the resources you want to register.

### Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- Source ID: `site-docs-root-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- The following examples update the criticality and environment attributes of services and workloads of a regional application: Update service attributes: resource "google apphub service" "example" { ... other arguments attributes { criticality { type = "HIGH" # Updated criticality } environment { type = "PRODUCTION" } ... other attributes } } Update workload attributes: resource "google apphub workload" "example" { ... other arguments attributes { criticality { type = "HIGH" # Updated criticality } environment { type = "PRODUCTION" } ... other attributes } } Unregister services and workloads Unregistering a service or workload removes it from an application.
- The following example lets you view the details of the apphub.googleapis.com/AgentProperties schema for a workload with the AGENT functional type in the my-project-id project at the us-central1 location. data "google apphub extended metadata schema" "agent properties" { project = "my-project-id" location = "us-central1" name = "apphub.googleapis.com/AgentProperties" } Update service and workload attributes To modify the attributes of services and workloads that are registered in an application, follow these steps: Note: You cannot modify attributes for shared services .
- Update workload attributes: gcloud apphub applications workloads update WORKLOAD NAME \ --application = APPLICATION NAME \ --project = PROJECT ID \ --location = LOCATION \ --display-name = DISPLAY NAME \ --criticality-type = CRITICALITY LEVEL \ --environment-type = ENVIRONMENT \ --developer-owners = display-name = DEV NAME ,email = DEV EMAIL \ --operator-owners = display-name = OPERATOR NAME ,email = OPERATOR EMAIL \ --business-owners = display-name = BUSINESS NAME ,email = BUSINESS EMAIL Replace WORKLOAD NAME with the name of the workload you want to update.
- Required roles To get the permissions that you need to manage services and workloads in App Hub, ask your administrator to grant you the following IAM roles on the management project that defines your application management boundary : Update and unregister services and workloads: App Hub Editor ( roles/apphub.editor ) View services, workloads, and their details: App Hub Viewer ( roles/apphub.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .

