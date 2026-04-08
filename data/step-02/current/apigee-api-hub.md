# Apigee API hub

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 55
Unique features: 57

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-10 | APigee Edge Private Cloud (OPDK) support in Advanced API Security multi-gateway risk assessment |  | Adds OPDK as a supported gateway type for risk assessment security profiles in Advanced API Security for multi-gateway projects. |
| 2026-03-10 | Security monitoring conditions in Advanced API Security for multi-gateway projects |  | Adds support in Advanced API Security multi-gateway risk assessment for mapping gateways to security profiles and generating monitoring conditions and alerts in Cloud Monitoring. |
| 2026-03-04 | gcloud CLI support for API hub |  | Adds Google Cloud CLI support to manage API hub catalog, API versions, and lifecycle metadata from the command line. |
| 2026-02-23 | Specification boost add-on preview in API hub |  | Introduces a preview AI-powered Specification Boost add-on that generates enhanced versions of API specifications for better readability and discoverability. |
| 2026-01-12 | Automatic API Gateway metadata ingestion into API hub |  | Adds automatic ingestion of API metadata from API Gateway by attaching API Gateway projects to API hub. |
| 2025-12-17 | Advanced API Security for multiple Apigee organizations and gateways |  | Introduces centralized multi-gateway API security governance with unified risk assessment, shared security profiles, and cross-project visibility in API hub. |
| 2025-12-15 | API card view in API hub |  | Adds a card-based API browsing and management view in API hub with richer at-a-glance API metadata. |
| 2025-12-11 | Model Context Protocol (MCP) support in API hub |  | Adds MCP as a first-class API style in API hub, including registration, management, and tool extraction for MCP APIs. |
| 2025-12-09 | API hub add-on management page |  | Introduces a centralized Add-on Management page in API hub for enabling, configuring, and managing add-on services. |
| 2025-11-18 | API deployments tab in API hub |  | Adds a dedicated API Deployments tab in the API details page for viewing, creating, and managing API deployments. |
| 2025-11-04 | Custom attribute filtering for APIs in API hub |  | Enables API filtering in API hub by user-defined custom attributes from the Google Cloud console. |
| 2025-10-28 | API insights in API hub |  | Introduces API insights in API hub to provide unified API traffic and performance monitoring across connected gateways. |
| 2025-10-28 | Apigee API hub API resource insights |  | Adds an Insights tab on the API details page that shows API-level analytics such as traffic, TPS, and request/response latency. |
| 2025-09-08 | Semantic search control in Apigee API hub |  | Adds the ability to enable and disable semantic search from the API hub Settings actions in Google Cloud console. |
| 2025-09-08 | Vertex AI Extensions support in Apigee API hub | 2025-09-08 | Deprecates the Vertex AI Extensions capability in API hub; deprecated on 2025-09-08. |
| 2025-08-22 | API hub instance deprovisioning |  | Adds the ability to deprovision an API hub instance from the API hub Settings Actions page in the Google Cloud console; Customers can now delete an API hub instance in a Google Cloud project through the ApiHubInstance API. |
| 2025-08-22 | Custom plugin management in Apigee API hub UI |  | Adds UI support to create and delete custom plugins from the API hub Plugins page. |
| 2025-08-12 | API observations in Apigee API hub |  | Introduces API observations to discover and manage undocumented APIs using shadow API discovery and automated discovery workflows. |
| 2025-07-31 | Apigee proxy deployment attributes in API hub imports | 2025-07-31 | Deprecates adding Apigee X and Hybrid environment/organization attributes to new Apigee proxy deployments imported by runtime project attachment; deprecated on 2025-07-31. |
| 2025-07-31 | Create Plugin API for custom plugins |  | Adds an API operation to create custom plugins in API hub for connecting to specific API data sources. |
| 2025-07-31 | Plugin data source support for Apigee Edge platforms |  | Adds dedicated plugin sources in API hub for Apigee Edge Public Cloud and Apigee Edge Private Cloud (OPDK). |
| 2025-07-31 | Pull-based plugin ingestion for Apigee plugins | 2025-07-31 | Deprecates pull-based plugin ingestion for Apigee and Apigee hybrid plugins, with existing configurations migrating to push-based ingestion; deprecated on 2025-07-31. |
| 2025-07-31 | Push-based plugin ingestion for API hub plugins |  | Adds support for push-based plugin ingestion as the default synchronization method for supported Apigee plugin types. |
| 2025-07-18 | Apigee and hybrid plugin instance management |  | Adds create and delete operations for Apigee and Apigee Hybrid plugin instances linked to corresponding runtime projects. |
| 2025-06-03 | Apigee API hub enablement for new organizations |  | Apigee API hub is now available automatically for new Apigee organizations in supported regions, including hybrid organizations, with no additional cost. |
| 2025-05-16 | API hub overview and metrics dashboard |  | The Get Started with API hub page now includes charts and scorecards for a quick overview of the API landscape. |
| 2025-04-29 | Apigee API hub enablement for existing organizations |  | Apigee API hub is now enabled for existing Apigee organizations in supported regions and is being rolled out to all eligible organizations. |
| 2025-04-02 | API hub data residency Zone C3 compliance |  | API hub is now compliant with Google Cloud data residency Zone C3 requirements. |
| 2025-04-02 | API hub plugin framework |  | API hub now uses a plugin framework to ingest API metadata from multiple Google Cloud and external API sources. |
| 2025-04-02 | API hub VPC Service Controls integration |  | API hub now integrates with VPC Service Controls, allowing service perimeters to control ingress and egress for the API hub instance. |
| 2025-04-02 | API metadata curation |  | API hub introduces a metadata curation process to transform and enrich ingested API metadata for consistent governance, discovery, and management. |
| 2025-04-02 | API operation management without valid specifications |  | The Operations entity now supports adding, editing, and deleting operations for an API version even without a valid or parseable specification file. |
| 2025-04-02 | API supply chain graph view |  | API hub now provides an interactive directed graph to visualize and explore API and operation dependency relationships. |
| 2025-04-02 | Terraform-based API hub provisioning |  | API hub instances can now be provisioned programmatically with Terraform in Google Cloud, including support in Cloud Shell. |
| 2025-02-11 | IAM Conditions integration for API hub |  | API hub now integrates with IAM Conditions to support fine-grained, attribute-based conditional access control over API hub resources. |
| 2025-01-15 | Resource filtering by user-defined attributes |  | API hub now supports filtering resources via REST API using user-defined attributes. |
| 2024-10-18 | API hub hosting region expansion |  | API hub added new deployment regions including us-east4, us-west1, europe-west2, asia-southeast1, asia-south, southamerica-east1, and australia-southeast1. |
| 2024-09-26 | API details card standardization in UI |  | API hub standardized the card layout on the API details page in the user interface. |
| 2024-09-26 | API hub client libraries |  | API hub now provides client libraries for multiple popular programming languages. |
| 2024-09-26 | API hub user interface performance improvements |  | API hub included performance improvements to its user interface. |
| 2024-09-26 | Cloud Audit Logging integration |  | API hub now supports integration with Cloud Audit Logs. |
| 2024-09-26 | Configurable Vertex Search data location |  | API hub provisioning now allows configuring Vertex Search data to be hosted in a different location. |
| 2024-09-26 | Deployment unlinking in the API hub UI |  | API hub introduced UI support for unlinking deployments. |
| 2024-09-26 | Enhanced list APIs with full responses |  | The List APIs for specifications, dependencies, and external APIs now return complete responses including user-defined attributes. |
| 2024-09-26 | Get started with API hub page |  | API hub added a dedicated Get started page in the interface with onboarding guidance and an FAQ. |
| 2024-09-26 | GMEK and CMEK support in API hub provisioning |  | API hub provisioning now supports using GMEK and CMEK customer-managed encryption keys. |
| 2024-09-26 | Optional Vertex Search disablement during provisioning |  | API hub provisioning now supports disabling Vertex Search for an instance. |
| 2024-09-26 | Semantic Search result scope expansion |  | Semantic Search now displays results across multiple API hub entities, including APIs, deployments, specifications, and versions. |
| 2024-09-26 | Supply chain dependency management page |  | A new API hub Supply chain page enables users to create, view, and manage API operation dependencies. |
| 2024-08-23 | API specification error-upload restriction setting |  | Cloud console users can now restrict uploading API specification files that contain errors. |
| 2024-08-23 | API specification metadata editing in Cloud Console |  | Users can now edit metadata for an uploaded API specification directly in the Cloud Console. |
| 2024-08-23 | API style guide upload validation for extends URL |  | API hub now validates style guide uploads and rejects uploaded style guides whose extends property contains a URL. |
| 2024-08-23 | Apigee proxy deployment type labeling |  | Auto-registered Apigee API proxy deployments are now labeled as Apigee X or Apigee hybrid. |
| 2024-08-23 | HTTPS default prefix for auto-registered API proxy endpoints |  | API proxy endpoints auto-registered from Apigee are now prefixed with https:// by default, and existing imported endpoints are updated accordingly. |
| 2024-06-11 | Eventarc trigger integration with API hub |  | API hub is now integrated with Google Cloud Eventarc so users can create Eventarc triggers for API hub events and launch custom workflows. |
| 2024-06-11 | Force option for API deletion with child resources |  | API hub now supports a force delete option to remove an API and its child resources in a single step. |
| 2024-06-11 | Vertex AI extensions in API hub |  | API hub now supports creating Vertex AI extensions for registered APIs, including integration with LLMs for real-time data processing. |

Source file slug: `apigee-api-hub.md`

