---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:19.042Z"
product_name: "App Hub"
product_slug: "app-hub"
feature_name: "App Hub support for GKE services and workloads"
feature_slug: "app-hub-support-for-gke-services-and-workloads"
latest_feature_date: "2025-01-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/app-hub/docs/global-regional-applications"
  - "https://docs.cloud.google.com/app-hub/docs/monitor-applications"
  - "https://docs.cloud.google.com/app-hub/docs/roles-permissions"
keywords:
  - "kubernetes"
  - "engine"
  - "workloads"
  - "supports"
---

# App Hub support for GKE services and workloads

Product: App Hub
Coverage: LOW

## Step 02 Summary

App Hub now supports Google Kubernetes Engine (GKE) services and workloads in Preview.

## Extended Definition

App Hub now supports Google Kubernetes Engine (GKE) services and workloads in Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/app-hub/docs/global-regional-applications](https://docs.cloud.google.com/app-hub/docs/global-regional-applications)
- [https://docs.cloud.google.com/app-hub/docs/monitor-applications](https://docs.cloud.google.com/app-hub/docs/monitor-applications)
- [https://docs.cloud.google.com/app-hub/docs/roles-permissions](https://docs.cloud.google.com/app-hub/docs/roles-permissions)

## Supporting Pages

### "Monitor application health and performance \_|\_ App Hub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/app-hub/docs/monitor-applications](https://docs.cloud.google.com/app-hub/docs/monitor-applications)
- Source ID: `site-docs-root-2`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you register infrastructure resources as services or workloads in an application, using either App Hub or Application Design Center, Application Monitoring automatically provides predefined dashboards that display key log, metric, and trace data in an application-centric context.
- Because Application Monitoring understands the logical grouping of your application's services and workloads, it automatically enriches all telemetry with application-specific labels .
- For infrastructure supported by Application Monitoring , the registered services and workloads provide the telemetry needed for the predefined dashboards.
- View details for services and workloads: View dashboards for individual services and workloads to isolate issues.

### App Hub IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/roles-permissions](https://docs.cloud.google.com/app-hub/docs/roles-permissions)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Hub permissions The following table lists the permissions that each App Hub IAM role has: App Hub Admin App Hub Editor App Hub Viewer Clear all App Hub Admin ( roles/ apphub.admin ) Full access to App Hub resources. apphub. apphub.applications.create apphub.applications.delete apphub.applications.get apphub. applications. getIamPolicy apphub.applications.list apphub. applications. setIamPolicy apphub.applications.update apphub.boundaries.attach apphub.boundaries.get apphub.boundaries.update apphub.discoveredServices.get apphub.discoveredServices.list apphub. discoveredServices. register apphub.discoveredWorkloads.get apphub. discoveredWorkloads. list apphub. discoveredWorkloads. register apphub. extendedMetadataSchemas. get apphub. extendedMetadataSchemas. list apphub.locations.get apphub.locations.list apphub.operations.cancel apphub.operations.delete apphub.operations.get apphub.operations.list apphub. serviceProjectAttachments. attach apphub. serviceProjectAttachments. create apphub. serviceProjectAttachments. delete apphub. serviceProjectAttachments. detach apphub. serviceProjectAttachments. get apphub. serviceProjectAttachments. list apphub. serviceProjectAttachments. lookup apphub.services.create apphub.services.delete apphub.services.get apphub.services.list apphub.services.update apphub.workloads.create apphub.workloads.delete apphub.workloads.get apphub.workloads.list apphub.workloads.update resourcemanager.projects.get resourcemanager.projects.list App Hub Editor ( roles/ apphub.editor ) Edit access to App Hub resources. apphub.applications.create apphub.applications.delete apphub.applications.get apphub.applications.list apphub.applications.update apphub.boundaries.get apphub.discoveredServices. apphub.discoveredServices.get apphub.discoveredServices.list apphub. discoveredServices. register apphub.discoveredWorkloads. apphub.discoveredWorkloads.get apphub. discoveredWorkloads. list apphub. discoveredWorkloads. register apphub. extendedMetadataSchemas. apphub. extendedMetadataSchemas. get apphub. extendedMetadataSchemas. list apphub.locations. apphub.locations.get apphub.locations.list apphub.operations. apphub.operations.cancel apphub.operations.delete apphub.operations.get apphub.operations.list apphub. serviceProjectAttachments. lookup apphub.services. apphub.services.create apphub.services.delete apphub.services.get apphub.services.list apphub.services.update apphub.workloads. apphub.workloads.create apphub.workloads.delete apphub.workloads.get apphub.workloads.list apphub.workloads.update resourcemanager.projects.get resourcemanager.projects.list App Hub Viewer ( roles/ apphub.viewer ) View access to App Hub resources. apphub.applications.get apphub.applications.list apphub.boundaries.get apphub.discoveredServices.get apphub.discoveredServices.list apphub.discoveredWorkloads.get apphub. discoveredWorkloads. list apphub. extendedMetadataSchemas. apphub. extendedMetadataSchemas. get apphub. extendedMetadataSchemas. list apphub.locations. apphub.locations.get apphub.locations.list apphub.operations.get apphub.operations.list apphub. serviceProjectAttachments. lookup apphub.services.get apphub.services.list apphub.workloads.get apphub.workloads.list resourcemanager.projects.get resourcemanager.projects.list For more information about IAM permissions, see Find the right predefined roles and IAM roles and permissions index .
- App Hub roles The following table describes App Hub IAM roles and their typical responsibilities: Role Description Purpose App Hub Admin Use projects or folders to create applications, attach service projects to a host project, update application attributes, register services and workloads, update service and workload attributes, and delegate application control to the App Hub Editor.
- App Hub Editor Create and update applications, register and unregister services and workloads, and update attributes.
- App Hub Editor ( roles/apphub.editor ): create and manage applications, services, and workloads.

### Global and regional applications \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/global-regional-applications](https://docs.cloud.google.com/app-hub/docs/global-regional-applications)
- Source ID: `site-docs-root-2`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Global and regional applications are defined as follows: Global applications: Functionally group services and workloads that are globally distributed or spread across multiple Google Cloud regions.
- A well-planned hierarchy that aligns with your application management boundaries, whether regional or global, simplifies the grouping and management of services and workloads in applications.
- For example, you can include a regional Application Load Balancer service and its backend workloads, all located in us-central1 .
- Regional applications: Functionally group services and workloads that reside entirely within a single Google Cloud region.

