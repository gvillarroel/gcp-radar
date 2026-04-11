---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.816Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "All App Hub supported resources generally available"
feature_slug: "all-app-hub-supported-resources-generally-available"
latest_feature_date: "2025-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/register-resources"
  - "https://docs.cloud.google.com/app-hub/docs/release-notes"
  - "https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources"
keywords:
  - "all"
  - "generally"
  - "available"
  - "are"
  - "supported"
  - "resources"
  - "app"
  - "hub"
---

# All App Hub supported resources generally available

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub’s supported resources are now generally available.

## Extended Definition

App Hub’s supported resources are now generally available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- [https://docs.cloud.google.com/app-hub/docs/release-notes](https://docs.cloud.google.com/app-hub/docs/release-notes)
- [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)

## Supporting Pages

### "Register existing resources to an application \_|\_ App Hub \_|\_ Google\

- URL: [https://docs.cloud.google.com/app-hub/docs/register-resources](https://docs.cloud.google.com/app-hub/docs/register-resources)
- Source ID: `site-iam-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Services and workloads tab displays all the registered services and workloads of the application. gcloud App Hub lets you select supported resources located within your application management boundary as services or workloads.
- The following example creates a regional application in us-central1 with defined criticality, environment, and owner attributes: resource "google apphub application" "example" { project = "my-project-id" location = "us-central1" application id = "my-application" display name = "My Application" description = "This application represents our platform." scope { type = "REGIONAL" } attributes { criticality { type = "MISSION CRITICAL" } environment { type = "PRODUCTION" } business owners { display name = "Alice" email = "alice@example.com" } developer owners { display name = "Bob" email = "bob@example.com" } operator owners { display name = "Charlie" email = "charlie@example.com" } } } Register services and workloads App Hub lets you select supported resources located within your application management boundary to register them as services and workloads.
- List the registered workloads in your application: gcloud apphub applications workloads list \ --application = APPLICATION NAME --project = PROJECT ID \ --location = REGION You must obtain an output similar to the following for each registered workload: ID DISPLAY NAME WORKLOAD REFERENCE CREATE TIME WORKLOAD NAME WORKLOAD DISPLAY NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT NUMBER /regions/ REGION /instanceGroups/mig-name' } 2023 -11-01T21:38:08 Terraform To use Terraform to register Google Cloud resources within your application management boundary as services or workloads in an application, use the google apphub discovered service and google apphub discovered workload data sources to dynamically retrieve information about the resources you want to register.
- Commands are slightly different for services and workloads: Register services List the available services that you can register to an application: gcloud apphub discovered-services list \ --project = PROJECT ID \ --location = REGION \ --filter = FILTER EXPRESSION For required and optional flags, replace the following: Required: PROJECT ID : the ID of the management project.

### App Hub release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/release-notes](https://docs.cloud.google.com/app-hub/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- August 25, 2025 Feature App Hub supports resources from the following sources in Preview : Vertex AI Pipeline job Custom job Hyperparameter tuning job Index Index endpoint NAS job Model deployment monitoring job Compute Engine Autoscaler Commitment Disk Regional disk Instance template Regional instance template License Node group Image Resource policy Reservation Node template Router Snapshot Route Subnetwork Global public delegated prefix Public delegated prefix Dataflow Job Datastream Stream Cloud DNS Managed zone Policy July 30, 2025 Feature The following Vertex AI supported resources are now generally available ( GA ): Dataset items Featurestore containers MetadataStore instances Model resources July 08, 2025 Feature Dataproc Metastore services are now generally available ( GA ).
- June 25, 2025 Feature App Hub supports resources from the following sources in Preview : Dataproc Metastore Service Vertex AI Dataset Vertex AI Featurestore Vertex AI MetadataStore Vertex AI Model May 01, 2025 Feature App Hub supported resources are now generally available ( GA ).
- Feature Management projects are now Generally Available (GA) to enable application management in folders.
- March 19, 2024 Announcement App Hub is generally available ( GA ).

### Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For a list of the supported metadata types and their schemas, see Extended metadata schemas . gcloud List all available extended metadata schemas in a project and location: gcloud alpha apphub extended-metadata-schemas list \ --project = PROJECT ID \ --location = LOCATION \ Replace the following: PROJECT ID : the ID of your management project.
- Alternatively, view a list of all services and workloads with a registration status value of discovered or registered : Discovered Discovered Google Cloud resources within your application management boundary are available to be registered as services or workloads in an application.
- The following example lets you view the details of the apphub.googleapis.com/AgentProperties schema for a workload with the AGENT functional type in the my-project-id project at the us-central1 location. data "google apphub extended metadata schema" "agent properties" { project = "my-project-id" location = "us-central1" name = "apphub.googleapis.com/AgentProperties" } Update service and workload attributes To modify the attributes of services and workloads that are registered in an application, follow these steps: Note: You cannot modify attributes for shared services .
- Alternatively, view a list of all services and workloads with a registration status value of discovered or registered : Navigate to the Services and workloads page from App Hub: Go to Services and workloads The page displays a list of all discovered and registered services and workloads.

