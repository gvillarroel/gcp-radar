---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T03:03:36.812Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "Identity metadata property for services and workloads"
feature_slug: "identity-metadata-property-for-services-and-workloads"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources"
  - "https://docs.cloud.google.com/app-hub/docs/release-notes"
  - "https://docs.cloud.google.com/app-hub/docs/overview"
keywords:
  - "identity"
  - "property"
  - "workloads"
  - "metadata"
  - "services"
  - "and"
  - "for"
  - "now"
---

# Identity metadata property for services and workloads

Product: App Hub
Coverage: LOW

## Step 02 Summary

Services and workloads now include an output-only Identity field containing the service account or managed workload identity name.

## Extended Definition

Services and workloads now include an output-only Identity field containing the service account or managed workload identity name.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- [https://docs.cloud.google.com/app-hub/docs/release-notes](https://docs.cloud.google.com/app-hub/docs/release-notes)
- [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)

## Supporting Pages

### Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources](https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- The following example lets you view the details of the apphub.googleapis.com/AgentProperties schema for a workload with the AGENT functional type in the my-project-id project at the us-central1 location. data "google apphub extended metadata schema" "agent properties" { project = "my-project-id" location = "us-central1" name = "apphub.googleapis.com/AgentProperties" } Update service and workload attributes To modify the attributes of services and workloads that are registered in an application, follow these steps: Note: You cannot modify attributes for shared services .
- Required roles To get the permissions that you need to manage services and workloads in App Hub, ask your administrator to grant you the following IAM roles on the management project that defines your application management boundary : Update and unregister services and workloads: App Hub Editor ( roles/apphub.editor ) View services, workloads, and their details: App Hub Viewer ( roles/apphub.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- View details of services and workloads Follow these steps to view details of services and workloads within your application management boundary, including the following: Location Registration status to an application Properties and attributes For more information about these details, see App Hub concepts and data model .
- Go to Application Design Center For applications created by registering existing resources in App Hub : Manage applications, services, and workloads directly within App Hub.

### App Hub release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/release-notes](https://docs.cloud.google.com/app-hub/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- November 17, 2025 Feature App Hub now supports new metadata properties to provide deeper context and governance for your services and workloads: Functional type: Services and workloads now include the FunctionalType property, which is an output-only field that identifies the known function of a resource.
- Extended metadata: Services and workloads now include the ExtendedMetadata property to provide rich, structured, and schema-driven information about the resource, such as the apphub.googleapis.com/AgentProperties schema for AI agents.
- Identity: Services and workloads now include the Identity property, which is an output-only field that contains the service account or managed workload identity name for a service or workload.
- You can now register services and workloads from a wide range of products to your applications, including new resources from Access Approval, Certificate Authority Service, Cloud Run, Firebase, Gemini for Google Cloud, GKE Multi-Cloud, and more.

### App Hub overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/overview](https://docs.cloud.google.com/app-hub/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Additionally, applications, services, and workloads can contain metadata in the form of properties and attributes .
- To learn how to visualize this metadata, see View extended metadata schemas . ( Preview ) Identity : an output-only property that contains the service account or managed workload identity name for a service or workload.
- If you move a project out of the application management boundary, its detached services and workloads can become discoverable for applications in a different boundary.
- The registration status of services and workloads registered to an application can change to detached for the following reasons: The underlying resource is deleted.

