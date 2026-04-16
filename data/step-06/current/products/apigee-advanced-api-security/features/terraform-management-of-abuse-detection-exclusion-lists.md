---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.407Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Terraform management of Abuse Detection exclusion lists"
feature_slug: "terraform-management-of-abuse-detection-exclusion-lists"
latest_feature_date: "2026-01-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-actions"
keywords:
  - "terraform"
  - "lists"
  - "management"
  - "exclusion"
  - "added"
  - "detection"
  - "abuse"
---

# Terraform management of Abuse Detection exclusion lists

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Terraform support was added to create and manage Abuse Detection exclusion lists for excluding safe CIDR ranges or IP addresses from incident reporting.

## Extended Definition

Terraform support was added to create and manage Abuse Detection exclusion lists for excluding safe CIDR ranges or IP addresses from incident reporting.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)

## Supporting Pages

### Abuse detection \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- Source ID: `site-docs-reference-required-7`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Exclude traffic from abuse detection by adding attributes to exclusion lists , which specify the traffic to exclude and the reasons why.
- Manage exclusion lists To manage exclusion lists directly: Select an environment for abuse detection.
- Exclusion lists Exclusion lists collect the attributes to exclude from detection.
- Change permissions for allowing Apigee to improve your machine learning models You can change your permissions for allowing Apigee to improve your machine learning models at any time, by clicking Settings at the top right of the Abuse detection page and selecting the option to either enable or disable this feature.

### Use Terraform with Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview)
- Source ID: `site-docs-root-2`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Provision API hub with Terraform Configure Advanced API Security Configure risk assessment security profiles and monitoring conditions (v2) Configure abuse detection exclusion lists Configure security actions Configure Advanced API Security with Terraform Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enable the Cloud Resource Manager and Identity, Access Management (IAM) APIs: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Before you begin In order to set up Terraform for your Apigee project: Prepare your development environment, either Cloud Shell or a local shell: Cloud Shell To use an online terminal with the gcloud CLI and Terraform already set up, activate Cloud Shell.
- Learn how to grant roles . gcloud services enable cloudresourcemanager.googleapis.com iam.googleapis.com Ensure that your Google Cloud project doesn't have the Google Cloud Platform - Resource Location Restriction organization policy constraint added.

### Security actions overview and UI | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- Source ID: `feature-recovery-direct-http`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- API MONITORING API Monitoring overview Compare API Monitoring with Apigee Analytics Using the Timeline view Using the Investigate view Using the Recent view Setting up alerts and notifications Examples of alerts Fault codes ADVANCED API SECURITY Overview of Advanced API Security Apigee and Apigee hybrid Overview Getting started Detection rules Best practices Security reports Overview Manage security reports in the UI Manage security reports using the API Risk assessment Risk assessment overview and UI Security scores and profiles API Abuse detection Abuse detection UI Security stats API Incidents API Security feedback API Security alerts Security actions Security actions overview and UI Security actions API Multi-gateway risk assessment Overview API OBSERVATION Overview of API Observation Shadow APIs Shadow API Discovery overview Shadow API Discovery management APIs Shadow API Discovery audit logging Application Integration Use Application Integration Application Integration and Apigee proxy Integration target Subscription entitlements Application Integration policies IntegrationCallout policy SetIntegrationRequest policy Connectors Overview Get started with connectors Release notes API HUB What is Apigee API hub?
- Provision API hub Provision using Cloud console Provision using Command line Provision using Terraform Get started with API hub Quickstarts Overview Auto-register Apigee proxies Register an API Create an API version Create and edit attributes Create an Eventarc trigger API resources Overview Register an API Register MCP APIs Manage API resources Auto-register APIs View API resource insights View security scores for APIs Manage API resources Versions Overview Manage versions Operations and MCP tools Overview Manage operations Manage MCP tools Specifications Overview Manage specifications Deployments Overview Manage deployments API supply chain Overview Create a dependency Manage dependencies API observations in API hub Overview Configure API observations in API hub Manage API observations in API hub Advanced API security for multiple Apigee organizations and gateways Advanced API security for multi-gateway projects Configure Advanced API security for multi-gateway projects View security scores across all projects and gateways Manage security profiles for multi-gateway assessments Manage monitoring conditions for multi-gateway assessments Advanced API security advisor tool API insights Overview Configure API insights in API hub API insights dashboards Add-on management Manage add-ons Validate OpenAPI specification Search APIs using semantic search Specification boost Settings Overview Manage attributes Manage project associations Plugins Overview Manage Google Cloud plugins and plugin instances Manage third-party plugins and plugin instances Manage custom plugins and plugin instances Create plugin instances Manage plugins instances Curations Overview Create curations Manage curations Actions Overview Manage Agent Registry integration Deprovision API hub Audit logging for API hub Access Control Predefined IAM roles Add IAM conditions Attach and manage tags VPC Service Controls for API hub gcloud CLI for API hub API hub locations Tutorials Enrich API data with custom curation in API hub Ingest Azure API data into API hub Reference Limits REST Reference v1 Overview Resources REST Resources projects.locations Overview collectApiData get list lookupRuntimeProjectAttachment retrieveApiViews searchResources projects.locations.addons Overview get list manageConfig projects.locations.apiHubInstances Overview create delete get lookup projects.locations.apis Overview create delete get list patch projects.locations.apis.versions Overview create delete get list patch projects.locations.apis.versions.definitions Overview get projects.locations.apis.versions.operations Overview create delete get list patch projects.locations.apis.versions.specs Overview create delete fetchAdditionalSpecContent get getContents lint list patch projects.locations.attributes Overview create delete get list patch projects.locations.curations Overview create delete get list patch projects.locations.dependencies Overview create delete get list patch projects.locations.deployments Overview create delete get list patch projects.locations.discoveredApiObservations Overview get list projects.locations.discoveredApiObservations.discoveredApiOperations Overview get list projects.locations.externalApis Overview create delete get list patch projects.locations.hostProjectRegistrations Overview create get list projects.locations.operations Overview cancel delete get list projects.locations.plugins Overview create delete disable enable get getStyleGuide list updateStyleGuide projects.locations.plugins.instances Overview create delete disableAction enableAction executeAction get list manageSourceData patch projects.locations.plugins.styleGuide Overview getContents projects.locations.runtimeProjectAttachments Overview create delete get list Types AggregationFunction AllowedValue AttributeValues AuthType CollectApiDataResponse ConfigValueOption DisablePluginInstanceActionResponse Documentation EnablePluginInstanceActionResponse EnumerateExtendedApisRequest EnumerateExtendedApisResponse ExecutePluginInstanceActionResponse GoogleServiceAccountConfig HttpOperation InitializeSystemOwnedPluginRequest InitializeSystemOwnedPluginResponse InsightsMetric OperationMetadata Owner QueryApiMetricsRequest QueryApiMetricsResponse QueryDependencyMetricsRequest QueryDependencyMetricsResponse RemoveSystemOwnedPluginRequest RemoveSystemOwnedPluginResponse SourceMetadata StyleGuide StyleGuideContents WaitOperationRequest RPC Reference Overview google.cloud.apihub.v1 google.cloud.apihub.v1main google.cloud.common google.cloud.location google.longrunning google.rpc Client libraries Overview C# Go Java Node.js PHP Python Release notes Envoy Adapter v2.0.x Concepts Getting started Native Envoy example for Apigee and hybrid Apigee hybrid example with Kubernetes Operation Reference Troubleshooting v1.4.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.3.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.2.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.1.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.0.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting Release notes HYBRID RUNTIME Supported platforms and versions Kubernetes and custom resources used by Apigee v1.16 What is Apigee hybrid?
- One way to identify which requests to take action on is to use the Abuse detection Detected traffic or Incident views, which show IP addresses and API keys that are sources of abuse.
- For example, you can create a security action to deny requests from an IP address that has been identified by Abuse Detection as abuse and block them from accessing your APIs.

