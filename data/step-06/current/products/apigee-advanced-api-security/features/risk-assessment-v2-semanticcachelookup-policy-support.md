---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.409Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Risk Assessment v2 SemanticCacheLookup policy support"
feature_slug: "risk-assessment-v2-semanticcachelookup-policy-support"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores"
  - "https://docs.cloud.google.com/apigee/docs/api-security"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-alerts"
keywords:
  - "semanticcachelookup"
  - "assessments"
  - "policy"
  - "assessment"
  - "supports"
  - "risk"
---

# Risk Assessment v2 SemanticCacheLookup policy support

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Risk Assessment v2 now supports the SemanticCacheLookup policy in assessments.

## Extended Definition

Risk Assessment v2 now supports the SemanticCacheLookup policy in assessments.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-alerts](https://docs.cloud.google.com/apigee/docs/api-security/security-alerts)

## Supporting Pages

### Risk assessment overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- Source ID: `site-docs-reference-required-5`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Risk Assessment v2 concepts and scoring methodology Risk assessment security scores assess the security risk of your APIs based on the scoring of security assessments and weights in a security profile.
- The potential severity values are high (0-50%), medium (51-90%), low (91-99%), and minimal (100%/no risk found based on the assessments in the assigned security profile).
- Go to Risk assessment This displays the Risk Assessment page: The page has these sections: Environment : Select the environment on which to view assessments.
- Risk assessment scoring is based on: Assessments and assessment checks: The individual checks performed against proxies, and on which proxies are scored.

### Overview of Advanced API Security | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security)
- Source ID: `feature-recovery-direct-http`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- API MONITORING API Monitoring overview Compare API Monitoring with Apigee Analytics Using the Timeline view Using the Investigate view Using the Recent view Setting up alerts and notifications Examples of alerts Fault codes ADVANCED API SECURITY Overview of Advanced API Security Apigee and Apigee hybrid Overview Getting started Detection rules Best practices Security reports Overview Manage security reports in the UI Manage security reports using the API Risk assessment Risk assessment overview and UI Security scores and profiles API Abuse detection Abuse detection UI Security stats API Incidents API Security feedback API Security alerts Security actions Security actions overview and UI Security actions API Multi-gateway risk assessment Overview API OBSERVATION Overview of API Observation Shadow APIs Shadow API Discovery overview Shadow API Discovery management APIs Shadow API Discovery audit logging Application Integration Use Application Integration Application Integration and Apigee proxy Integration target Subscription entitlements Application Integration policies IntegrationCallout policy SetIntegrationRequest policy Connectors Overview Get started with connectors Release notes API HUB What is Apigee API hub?
- Use Advanced API Security to perform risk assessments on multiple Apigee organizations and gateways You can use Advanced API Security to perform risk assessments across multiple Apigee organizations and gateways, including Apigee, Apigee hybrid, and Apigee Edge.
- For details, see Use Advanced API Security to perform risk assessments on multiple Apigee organizations and gateways .
- Provision API hub Provision using Cloud console Provision using Command line Provision using Terraform Get started with API hub Quickstarts Overview Auto-register Apigee proxies Register an API Create an API version Create and edit attributes Create an Eventarc trigger API resources Overview Register an API Register MCP APIs Manage API resources Auto-register APIs View API resource insights View security scores for APIs Manage API resources Versions Overview Manage versions Operations and MCP tools Overview Manage operations Manage MCP tools Specifications Overview Manage specifications Deployments Overview Manage deployments API supply chain Overview Create a dependency Manage dependencies API observations in API hub Overview Configure API observations in API hub Manage API observations in API hub Advanced API security for multiple Apigee organizations and gateways Advanced API security for multi-gateway projects Configure Advanced API security for multi-gateway projects View security scores across all projects and gateways Manage security profiles for multi-gateway assessments Manage monitoring conditions for multi-gateway assessments Advanced API security advisor tool API insights Overview Configure API insights in API hub API insights dashboards Add-on management Manage add-ons Validate OpenAPI specification Search APIs using semantic search Specification boost Settings Overview Manage attributes Manage project associations Plugins Overview Manage Google Cloud plugins and plugin instances Manage third-party plugins and plugin instances Manage custom plugins and plugin instances Create plugin instances Manage plugins instances Curations Overview Create curations Manage curations Actions Overview Manage Agent Registry integration Deprovision API hub Audit logging for API hub Access Control Predefined IAM roles Add IAM conditions Attach and manage tags VPC Service Controls for API hub gcloud CLI for API hub API hub locations Tutorials Enrich API data with custom curation in API hub Ingest Azure API data into API hub Reference Limits REST Reference v1 Overview Resources REST Resources projects.locations Overview collectApiData get list lookupRuntimeProjectAttachment retrieveApiViews searchResources projects.locations.addons Overview get list manageConfig projects.locations.apiHubInstances Overview create delete get lookup projects.locations.apis Overview create delete get list patch projects.locations.apis.versions Overview create delete get list patch projects.locations.apis.versions.definitions Overview get projects.locations.apis.versions.operations Overview create delete get list patch projects.locations.apis.versions.specs Overview create delete fetchAdditionalSpecContent get getContents lint list patch projects.locations.attributes Overview create delete get list patch projects.locations.curations Overview create delete get list patch projects.locations.dependencies Overview create delete get list patch projects.locations.deployments Overview create delete get list patch projects.locations.discoveredApiObservations Overview get list projects.locations.discoveredApiObservations.discoveredApiOperations Overview get list projects.locations.externalApis Overview create delete get list patch projects.locations.hostProjectRegistrations Overview create get list projects.locations.operations Overview cancel delete get list projects.locations.plugins Overview create delete disable enable get getStyleGuide list updateStyleGuide projects.locations.plugins.instances Overview create delete disableAction enableAction executeAction get list manageSourceData patch projects.locations.plugins.styleGuide Overview getContents projects.locations.runtimeProjectAttachments Overview create delete get list Types AggregationFunction AllowedValue AttributeValues AuthType CollectApiDataResponse ConfigValueOption DisablePluginInstanceActionResponse Documentation EnablePluginInstanceActionResponse EnumerateExtendedApisRequest EnumerateExtendedApisResponse ExecutePluginInstanceActionResponse GoogleServiceAccountConfig HttpOperation InitializeSystemOwnedPluginRequest InitializeSystemOwnedPluginResponse InsightsMetric OperationMetadata Owner QueryApiMetricsRequest QueryApiMetricsResponse QueryDependencyMetricsRequest QueryDependencyMetricsResponse RemoveSystemOwnedPluginRequest RemoveSystemOwnedPluginResponse SourceMetadata StyleGuide StyleGuideContents WaitOperationRequest RPC Reference Overview google.cloud.apihub.v1 google.cloud.apihub.v1main google.cloud.common google.cloud.location google.longrunning google.rpc Client libraries Overview C# Go Java Node.js PHP Python Release notes Envoy Adapter v2.0.x Concepts Getting started Native Envoy example for Apigee and hybrid Apigee hybrid example with Kubernetes Operation Reference Troubleshooting v1.4.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.3.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.2.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.1.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.0.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting Release notes HYBRID RUNTIME Supported platforms and versions Kubernetes and custom resources used by Apigee v1.16 What is Apigee hybrid?

### Security alerts \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-alerts](https://docs.cloud.google.com/apigee/docs/api-security/security-alerts)
- Source ID: `site-docs-reference-required-6`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Example: Create a risk assessment monitoring condition monitoring alert (Risk Assessment v2) This example creates a new Cloud Monitoring alerting policy for a Risk Assessment monitoring condition that alerts if the security score on any of its monitored proxies falls below a certain threshold.
- Current security score of a deployed resource based on a security profile. location, org, scope, resource, security profile Filters Filter Label Description location Location of the resource: global always. org Apigee organization name env Apigee environment name profile Apigee API Security profile name proxy Apigee API proxy name target server Apigee target server name detection rule Apigee API security detection rule name scope For Risk Assessment v2, identifier of the scope associated with the assessed resource. resource For Risk Assessment v2, identifier of the assessed resource. security profile For Risk Assessment v2, identifier of the security profile used to assess the resource.
- This value is measured at least once every 3 hours. location, org, env, profile, target server Apigee API Security Profile Environment Association Security score of Apigee environment: apigee.googleapis.com/security/environment score Applies to Risk Assessment v1.
- This value is measured once every hour. location, org, env, incident id, detection rule Apigee API Security Profile Environment Association Security score of Apigee API sources: apigee.googleapis.com/security/source score Applies to Risk Assessment v1.

