---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.813Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "RegistrationType metadata property"
feature_slug: "registrationtype-metadata-property"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/release-notes"
  - "https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources"
  - "https://docs.cloud.google.com/app-hub/docs/overview"
keywords:
  - "registrationtype"
  - "property"
  - "include"
  - "output"
  - "metadata"
  - "services"
  - "an"
  - "now"
---

# RegistrationType metadata property

Product: App Hub
Coverage: LOW

## Step 02 Summary

Services now include an output-only RegistrationType field that indicates whether they are exclusive or shared across applications.

## Extended Definition

Services now include an output-only RegistrationType field that indicates whether they are exclusive or shared across applications.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/release-notes](https://docs.cloud.google.com/app-hub/docs/release-notes)
- [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)

## Supporting Pages

### App Hub release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/release-notes](https://docs.cloud.google.com/app-hub/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- November 17, 2025 Feature App Hub now supports new metadata properties to provide deeper context and governance for your services and workloads: Functional type: Services and workloads now include the FunctionalType property, which is an output-only field that identifies the known function of a resource.
- Extended metadata: Services and workloads now include the ExtendedMetadata property to provide rich, structured, and schema-driven information about the resource, such as the apphub.googleapis.com/AgentProperties schema for AI agents.
- Identity: Services and workloads now include the Identity property, which is an output-only field that contains the service account or managed workload identity name for a service or workload.
- August 25, 2025 Feature App Hub supports resources from the following sources in Preview : Vertex AI Pipeline job Custom job Hyperparameter tuning job Index Index endpoint NAS job Model deployment monitoring job Compute Engine Autoscaler Commitment Disk Regional disk Instance template Regional instance template License Node group Image Resource policy Reservation Node template Router Snapshot Route Subnetwork Global public delegated prefix Public delegated prefix Dataflow Job Datastream Stream Cloud DNS Managed zone Policy July 30, 2025 Feature The following Vertex AI supported resources are now generally available ( GA ): Dataset items Featurestore containers MetadataStore instances Model resources July 08, 2025 Feature Dataproc Metastore services are now generally available ( GA ).

### Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- The following example lets you view the details of the apphub.googleapis.com/AgentProperties schema for a workload with the AGENT functional type in the my-project-id project at the us-central1 location. data "google apphub extended metadata schema" "agent properties" { project = "my-project-id" location = "us-central1" name = "apphub.googleapis.com/AgentProperties" } Update service and workload attributes To modify the attributes of services and workloads that are registered in an application, follow these steps: Note: You cannot modify attributes for shared services .
- App Hub enriches your services and workloads with metadata to improve discoverability, governance, and integration with other systems.
- For more information about the extended metadata property, see Properties and attributes .
- The following examples update the criticality and environment attributes of services and workloads of a regional application: Update service attributes: resource "google apphub service" "example" { ... other arguments attributes { criticality { type = "HIGH" # Updated criticality } environment { type = "PRODUCTION" } ... other attributes } } Update workload attributes: resource "google apphub workload" "example" { ... other arguments attributes { criticality { type = "HIGH" # Updated criticality } environment { type = "PRODUCTION" } ... other attributes } } Unregister services and workloads Unregistering a service or workload removes it from an application.

### App Hub overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To learn which services are shared or exclusive, see the list of App Hub supported services . ( Preview ) Functional type : an output-only property that identifies the known function of a service or workload.
- Key supported properties include: ( Preview ) Registration type : for services, an output-only property that indicates if a service can be registered to one or multiple applications.
- To learn how to visualize this metadata, see View extended metadata schemas . ( Preview ) Identity : an output-only property that contains the service account or managed workload identity name for a service or workload.
- For example, when an AI agent is deployed through a managed platform like Vertex AI Agent Engine , App Hub automatically classifies the resource with the AGENT functional type value to indicate that the workload runs an AI agent. ( Preview ) Extended metadata : an schema-driven property that provides rich, structured information about the service or workload.

