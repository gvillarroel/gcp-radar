---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.535Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Custom attribute filtering for APIs in API hub"
feature_slug: "custom-attribute-filtering-for-apis-in-api-hub"
latest_feature_date: "2025-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments"
  - "https://docs.cloud.google.com/apigee/docs/apihub/provision"
keywords:
  - "attribute"
  - "filtering"
  - "enables"
  - "defined"
  - "custom"
  - "user"
  - "apis"
---

# Custom attribute filtering for APIs in API hub

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Enables API filtering in API hub by user-defined custom attributes from the Google Cloud console.

## Extended Definition

Enables API filtering in API hub by user-defined custom attributes from the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments)
- [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)

## Supporting Pages

### Manage attributes | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- Source ID: `feature-recovery-direct-http`
- Final score: 343
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Provision API hub Provision using Cloud console Provision using Command line Provision using Terraform Get started with API hub Quickstarts Overview Auto-register Apigee proxies Register an API Create an API version Create and edit attributes Create an Eventarc trigger API resources Overview Register an API Register MCP APIs Manage API resources Auto-register APIs View API resource insights View security scores for APIs Manage API resources Versions Overview Manage versions Operations and MCP tools Overview Manage operations Manage MCP tools Specifications Overview Manage specifications Deployments Overview Manage deployments API supply chain Overview Create a dependency Manage dependencies API observations in API hub Overview Configure API observations in API hub Manage API observations in API hub Advanced API security for multiple Apigee organizations and gateways Advanced API security for multi-gateway projects Configure Advanced API security for multi-gateway projects View security scores across all projects and gateways Manage security profiles for multi-gateway assessments Manage monitoring conditions for multi-gateway assessments Advanced API security advisor tool API insights Overview Configure API insights in API hub API insights dashboards Add-on management Manage add-ons Validate OpenAPI specification Search APIs using semantic search Specification boost Settings Overview Manage attributes Manage project associations Plugins Overview Manage Google Cloud plugins and plugin instances Manage third-party plugins and plugin instances Manage custom plugins and plugin instances Create plugin instances Manage plugins instances Curations Overview Create curations Manage curations Actions Overview Manage Agent Registry integration Deprovision API hub Audit logging for API hub Access Control Predefined IAM roles Add IAM conditions Attach and manage tags VPC Service Controls for API hub gcloud CLI for API hub API hub locations Tutorials Enrich API data with custom curation in API hub Ingest Azure API data into API hub Reference Limits REST Reference v1 Overview Resources REST Resources projects.locations Overview collectApiData get list lookupRuntimeProjectAttachment retrieveApiViews searchResources projects.locations.addons Overview get list manageConfig projects.locations.apiHubInstances Overview create delete get lookup projects.locations.apis Overview create delete get list patch projects.locations.apis.versions Overview create delete get list patch projects.locations.apis.versions.definitions Overview get projects.locations.apis.versions.operations Overview create delete get list patch projects.locations.apis.versions.specs Overview create delete fetchAdditionalSpecContent get getContents lint list patch projects.locations.attributes Overview create delete get list patch projects.locations.curations Overview create delete get list patch projects.locations.dependencies Overview create delete get list patch projects.locations.deployments Overview create delete get list patch projects.locations.discoveredApiObservations Overview get list projects.locations.discoveredApiObservations.discoveredApiOperations Overview get list projects.locations.externalApis Overview create delete get list patch projects.locations.hostProjectRegistrations Overview create get list projects.locations.operations Overview cancel delete get list projects.locations.plugins Overview create delete disable enable get getStyleGuide list updateStyleGuide projects.locations.plugins.instances Overview create delete disableAction enableAction executeAction get list manageSourceData patch projects.locations.plugins.styleGuide Overview getContents projects.locations.runtimeProjectAttachments Overview create delete get list Types AggregationFunction AllowedValue AttributeValues AuthType CollectApiDataResponse ConfigValueOption DisablePluginInstanceActionResponse Documentation EnablePluginInstanceActionResponse EnumerateExtendedApisRequest EnumerateExtendedApisResponse ExecutePluginInstanceActionResponse GoogleServiceAccountConfig HttpOperation InitializeSystemOwnedPluginRequest InitializeSystemOwnedPluginResponse InsightsMetric OperationMetadata Owner QueryApiMetricsRequest QueryApiMetricsResponse QueryDependencyMetricsRequest QueryDependencyMetricsResponse RemoveSystemOwnedPluginRequest RemoveSystemOwnedPluginResponse SourceMetadata StyleGuide StyleGuideContents WaitOperationRequest RPC Reference Overview google.cloud.apihub.v1 google.cloud.apihub.v1main google.cloud.common google.cloud.location google.longrunning google.rpc Client libraries Overview C# Go Java Node.js PHP Python Release notes Envoy Adapter v2.0.x Concepts Getting started Native Envoy example for Apigee and hybrid Apigee hybrid example with Kubernetes Operation Reference Troubleshooting v1.4.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.3.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.2.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.1.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.0.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting Release notes HYBRID RUNTIME Supported platforms and versions Kubernetes and custom resources used by Apigee v1.16 What is Apigee hybrid?
- Logging Logging overview View logs Access logs Cassandra logs MART logs Runtime logs Synchronizer logs UDCA logs Metrics collection Metrics collection overview Configure metrics collection View metrics Other data collection Runtime Services Runtime service configuration overview Manage runtime plane components Cassandra Configure Cassandra for production StorageClass configuration Backup and recovery TLS configuration Scale down Environments About environments Managing environments Create environments Delete environments Base path routing Generate self-signed TLS certificates MART MART configuration Add the MART IP to an org Synchronizer Service accounts About service accounts Service account validation Obtain TLS credentials: An example Cluster Management Cluster requirements Overview GKE non-production GKE production Anthos GKE non-production Anthos GKE production Configure ports and set up firewalls Secure the runtime installation Data encryption Multi-region deployments on GKE and GKE on-prem Multi-region deployments on AKS Configure static IP addresses Scale and autoscale services Configure dedicated node pools Download signed runtime images Apigee deployment services Rolling updates Upgrading Apigee hybrid Configuration property reference Release notes LOGGING Audit logging Audit logging for Apigee Connect Logging Apigee access logs TEST Customer security testing requests Performance testing TROUBLESHOOT Troubleshooting the Apigee installation Logging Apigee access logs AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application development Apigee Guides Send feedback Manage attributes Stay organized with collections Save and categorize content based on your preferences.
- The following example shows the API call to create the attribute-01 user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display_name" : "custom attribute", "description" : "custom attribute details", "definition_type" : "USER_DEFINED", "scope" : "API", "data_type" : "ENUM", "allowed_values" : [ { "id" : "value-1", "display_name" : "Value 1", "description" : "Value 1 test description", "immutable" : false, }, { "id" : "value-2", "display_name" : "Value 2", "description" : "Value 2 test description", "immutable" : false, }, ], "cardinality" : 4, "mandatory" : false }' \ -X POST https://apihub.googleapis.com/v1/projects/test-15/locations/us-central1/attributes?attribute_id=attribute-01 Edit a user defined attribute Caution: Avoid adding sensitive data to user defined attributes.
- The following example shows the API call update the API Visibility user defined attribute. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{"name": "projects/test-15/locations/us-central1/attributes/API Visibility", display_name" : "API Visibility Updated", "allowedValues": [ { "id": "internal", "displayName": "Internal", "description": "The API is visible internally in an organization" }, { "id": "external", "displayName": "External", "description": "The API is visible externally in an organization" }, { "id": "public", "displayName": "Public", "description": "The API is visible public in an organization" } ]}' \ -X PATCH https://autopush-apihub.sandbox.googleapis.com/v1/projects/common-dev-15/locations/us-central1/attributes/API Visibility?update_mask=display_name,allowed_values It's important to understand how API hub interprets the request payload for the UpdateAttribute API.

### Manage deployments \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments](https://docs.cloud.google.com/apigee/docs/apihub/manage-api-deployments)
- Source ID: `site-docs-reference-required-3`
- Final score: 239
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can add user-defined attributes in Manage attributes .
- Possible values are defined in a system attribute, and you can modify them in Manage attributes .
- Possible values are defined in a system attribute, and you can modify them in Manage attributes .
- You can modify values for this attribute in Manage attributes .

### Provision API hub in the Cloud console \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)
- Source ID: `site-docs-root-required-3`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Review the roles and permissions required to use API hub Configure API hub attributes: Manage attributes Quickstart: Create and edit attributes Register an API resource: Manage API resources Quickstart: Register an API Add an API version: Versions overview Quickstart: Create an API version Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Step 4: Encryption In this step, you can choose to use a Google-owned and Google-managed encryption key or a Customer Managed Encryption Key (CMEK) defined in the Cloud Key Management Service to encrypt the data stored in your API hub instance.
- Cloud Key Management Service (KMS) cloudkms.googleapis.com This is required if you choose to use a customer-managed encryption key (CMEK) to encrypt your API hub data.
- Important: Enabling the API hub API also automatically enables the Apigee API ( apigee.googleapis.com ) for your Google Cloud project.

