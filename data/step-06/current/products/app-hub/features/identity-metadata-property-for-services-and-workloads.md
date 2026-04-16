---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.011Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Identity metadata property for services and workloads"
feature_slug: "identity-metadata-property-for-services-and-workloads"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/overview"
  - "https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources"
  - "https://docs.cloud.google.com/app-hub/docs/register-resources"
keywords:
  - "identity"
  - "property"
  - "include"
  - "output"
  - "workloads"
  - "metadata"
  - "only"
---

# Identity metadata property for services and workloads

Product: App Hub
Coverage: MEDIUM

## Step 02 Summary

Services and workloads now include an output-only Identity field containing the service account or managed workload identity name.

## Extended Definition

Services and workloads now include an output-only Identity field containing the service account or managed workload identity name.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)

## Supporting Pages

### App Hub overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn how to visualize this metadata, see View extended metadata schemas . ( Preview ) Identity : an output-only property that contains the service account or managed workload identity name for a service or workload.
- Key supported properties include: ( Preview ) Registration type : for services, an output-only property that indicates if a service can be registered to one or multiple applications.
- For example, workloads with a functional type value of AGENT can include apphub.googleapis.com/AgentProperties metadata, which contains information about an agent that is compatible with the Agent2Agent (A2A) Agent Card .
- To learn which services are shared or exclusive, see the list of App Hub supported services . ( Preview ) Functional type : an output-only property that identifies the known function of a service or workload.

### Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- Source ID: `site-docs-root-2`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example lets you view the details of the apphub.googleapis.com/AgentProperties schema for a workload with the AGENT functional type in the my-project-id project at the us-central1 location. data "google apphub extended metadata schema" "agent properties" { project = "my-project-id" location = "us-central1" name = "apphub.googleapis.com/AgentProperties" } Update service and workload attributes To modify the attributes of services and workloads that are registered in an application, follow these steps: Note: You cannot modify attributes for shared services .
- Follow these steps to view the schema definition of the extended metadata property, listing all available schemas or getting the details of a specific schema if available.
- App Hub enriches your services and workloads with metadata to improve discoverability, governance, and integration with other systems.
- For more information about the extended metadata property, see Properties and attributes .

### "Register existing resources to an application \_|\_ App Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- Source ID: `site-docs-root-2`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optional: FILTER EXPRESSION : the filter expression for the --filter flag to only display services from a specified project within the application management boundary or with a specific property, for example: service properties.gcp project=projects/ PROJECT ID service properties.gcp project=projects/ PROJECT ID AND service reference.uri "forwardingRules" The output is similar to the following example: ID SERVICE REFERENCE SERVICE PROPERTIES SERVICE ID { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /forwardingRules/forwarding-rule' } { 'gcpProject' : 'projects/ PROJECT ID ' , 'location' : ' REGION ' } Copy the service ID, SERVICE ID , from the output.
- Optional: FILTER EXPRESSION : the filter expression for the --filter flag to only display workloads from a specified project within the application management boundary or with a specific property, for example, workload properties.gcp project=projects/ PROJECT ID .
- List the registered services in your application: gcloud apphub applications services list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered service: ID DISPLAY NAME SERVICE REFERENCE CREATE TIME SERVICE NAME SERVICE DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /forwardingRules/forwarding-rule' } 2023 -11-01T21:38:08 Register workloads List the available workloads that you can register to an application: gcloud apphub discovered-workloads list \ --project = PROJECT ID \ --location = REGION \ --filter = FILTER EXPRESSION For required and optional flags, replace the following: Required: PROJECT ID : the ID of the management project.
- List the registered workloads in your application: gcloud apphub applications workloads list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered workload: ID DISPLAY NAME WORKLOAD REFERENCE CREATE TIME WORKLOAD NAME WORKLOAD DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /instanceGroups/mig-name' } 2023 -11-01T21:38:08 Terraform To use Terraform to register Google Cloud resources within your application management boundary as services or workloads in an application, use the google apphub discovered service and google apphub discovered workload data sources to dynamically retrieve information about the resources you want to register.

