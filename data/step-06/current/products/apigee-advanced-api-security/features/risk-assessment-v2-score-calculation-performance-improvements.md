---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.420Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Risk Assessment v2 score calculation performance improvements"
feature_slug: "risk-assessment-v2-score-calculation-performance-improvements"
latest_feature_date: "2024-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api"
  - "https://docs.cloud.google.com/apigee/docs/api-security"
keywords:
  - "calculation"
  - "improves"
  - "improvements"
  - "performance"
  - "assessment"
  - "score"
  - "risk"
---

# Risk Assessment v2 score calculation performance improvements

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Risk Assessment v2 improves score reliability with faster score calculations using recent proxy data.

## Extended Definition

Risk Assessment v2 improves score reliability with faster score calculations using recent proxy data.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api](https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api)
- [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security)

## Supporting Pages

### Risk assessment overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- Source ID: `site-docs-reference-required-5`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- The main feature differences between v1 and v2 are: v2 includes: Improved reliability, including faster score calculations with recent proxy data Score calculation without the need to first attach a security profile to an environment Simplified score presentation, based on a 0% to 100% scale The concept of assessment check weights, which v1 does not support.
- Risk Assessment v2 concepts and scoring methodology Risk assessment security scores assess the security risk of your APIs based on the scoring of security assessments and weights in a security profile.
- Limitations and known issues on Risk Assessment v2 Security scores have the following limitations and known issues: Security scores are only generated if an environment has deployed proxies.
- Overview Advanced API Security risk assessment continuously evaluates API proxy configurations and calculates security scores to help identify and address vulnerabilities in your APIs.

### Security scores and profiles API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api](https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api)
- Source ID: `site-api-reference-required-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Overview This page describes how to manage Risk Assessment security scores and security profiles (also referred to simply as "profiles") using APIs.
- Get existing custom security profiles This command retrieves the information for all security profiles for your project: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2" \ -H "Authorization: Bearer $TOKEN" This command retrieves the metadata for a specific security profile and can be used to retrieve information on the google-default profile as well as custom profiles: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2/ PROFILE ID " \ -H "Authorization: Bearer $TOKEN" Create a new custom security profile To create a new custom security profile, use a command like this: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2?security profile v2 id= PROFILE ID " \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-type: application/json' \ -d '{ "description": " PROFILE DESC ", "risk assessment type": "APIGEE", "profile assessment configs": { "auth-policies-check": {"weight": "MINOR"}, "threat-policies-check": {"weight": "MODERATE"} } }' Update an existing custom security profile To update an existing profile, use a command like: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2/ PROFILE ID ?update mask= UPDATE MASK " \ -X PATCH \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-type: application/json' \ -d '{"description": " PROFILE DESC "}' where UPDATE MASK can be one of these values, if present: description , profile assessment configs , description,profile assessment configs , or (everything).
- See securityAssessmentResults.batchCompute in the Apigee Management API reference documentation for more information on this functionality. curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityAssessmentResults:batchCompute" \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-type: application/json' \ -d '{ "profile": " PROFILE ID ", "scope": " ENV ", RESOURCES }' This is a potential response for the request: { "securityAssessmentResults": [ { "resource": { "type": "API PROXY", "name": "my-proxy-1", "resourceRevisionId": "1" }, "createTime": "2023-11-22T04:49:29.418166Z", "scoringResult": { "severity": "HIGH", "failedAssessmentPerWeight": { "MINOR": 1 }, "assessmentRecommendations": { "cors-policies-check": { "displayName": "CORS policies check", "weight": "MAJOR", "recommendations": [ { "description": "Check whether a CORS policy or CORS header in AssignMessage policy are present.", "link": { "text": "Learn more", "uri": "https://cloud.google.com/apigee/docs/api-platform/reference/policies/reference-overview-policy" } } ], "verdict": "FAIL", "scoreImpact": 100 } }, "dataUpdateTime": "2023-11-22T04:49:29.418166Z" } } ], "assessmentTime": "2023-11-22T04:49:29.418166Z" } Manage security profiles This section provides examples for managing security profiles using the APIs and is not exhaustive.
- See Disable collection of metrics for instructions on deleting the Cloud Monitoring metrics. curl -H "Authorization: Bearer $TOKEN" \ "https://apigee.googleapis.com/v1/organizations/ ORG /securityMonitoringConditions/ MONITORING CONDITION ID " \ -X DELETE Risk Assessment v1 This section shows information and examples for Risk Assessment v1 APIs.

### Overview of Advanced API Security | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security)
- Source ID: `feature-recovery-direct-http`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- API MONITORING API Monitoring overview Compare API Monitoring with Apigee Analytics Using the Timeline view Using the Investigate view Using the Recent view Setting up alerts and notifications Examples of alerts Fault codes ADVANCED API SECURITY Overview of Advanced API Security Apigee and Apigee hybrid Overview Getting started Detection rules Best practices Security reports Overview Manage security reports in the UI Manage security reports using the API Risk assessment Risk assessment overview and UI Security scores and profiles API Abuse detection Abuse detection UI Security stats API Incidents API Security feedback API Security alerts Security actions Security actions overview and UI Security actions API Multi-gateway risk assessment Overview API OBSERVATION Overview of API Observation Shadow APIs Shadow API Discovery overview Shadow API Discovery management APIs Shadow API Discovery audit logging Application Integration Use Application Integration Application Integration and Apigee proxy Integration target Subscription entitlements Application Integration policies IntegrationCallout policy SetIntegrationRequest policy Connectors Overview Get started with connectors Release notes API HUB What is Apigee API hub?
- Provision API hub Provision using Cloud console Provision using Command line Provision using Terraform Get started with API hub Quickstarts Overview Auto-register Apigee proxies Register an API Create an API version Create and edit attributes Create an Eventarc trigger API resources Overview Register an API Register MCP APIs Manage API resources Auto-register APIs View API resource insights View security scores for APIs Manage API resources Versions Overview Manage versions Operations and MCP tools Overview Manage operations Manage MCP tools Specifications Overview Manage specifications Deployments Overview Manage deployments API supply chain Overview Create a dependency Manage dependencies API observations in API hub Overview Configure API observations in API hub Manage API observations in API hub Advanced API security for multiple Apigee organizations and gateways Advanced API security for multi-gateway projects Configure Advanced API security for multi-gateway projects View security scores across all projects and gateways Manage security profiles for multi-gateway assessments Manage monitoring conditions for multi-gateway assessments Advanced API security advisor tool API insights Overview Configure API insights in API hub API insights dashboards Add-on management Manage add-ons Validate OpenAPI specification Search APIs using semantic search Specification boost Settings Overview Manage attributes Manage project associations Plugins Overview Manage Google Cloud plugins and plugin instances Manage third-party plugins and plugin instances Manage custom plugins and plugin instances Create plugin instances Manage plugins instances Curations Overview Create curations Manage curations Actions Overview Manage Agent Registry integration Deprovision API hub Audit logging for API hub Access Control Predefined IAM roles Add IAM conditions Attach and manage tags VPC Service Controls for API hub gcloud CLI for API hub API hub locations Tutorials Enrich API data with custom curation in API hub Ingest Azure API data into API hub Reference Limits REST Reference v1 Overview Resources REST Resources projects.locations Overview collectApiData get list lookupRuntimeProjectAttachment retrieveApiViews searchResources projects.locations.addons Overview get list manageConfig projects.locations.apiHubInstances Overview create delete get lookup projects.locations.apis Overview create delete get list patch projects.locations.apis.versions Overview create delete get list patch projects.locations.apis.versions.definitions Overview get projects.locations.apis.versions.operations Overview create delete get list patch projects.locations.apis.versions.specs Overview create delete fetchAdditionalSpecContent get getContents lint list patch projects.locations.attributes Overview create delete get list patch projects.locations.curations Overview create delete get list patch projects.locations.dependencies Overview create delete get list patch projects.locations.deployments Overview create delete get list patch projects.locations.discoveredApiObservations Overview get list projects.locations.discoveredApiObservations.discoveredApiOperations Overview get list projects.locations.externalApis Overview create delete get list patch projects.locations.hostProjectRegistrations Overview create get list projects.locations.operations Overview cancel delete get list projects.locations.plugins Overview create delete disable enable get getStyleGuide list updateStyleGuide projects.locations.plugins.instances Overview create delete disableAction enableAction executeAction get list manageSourceData patch projects.locations.plugins.styleGuide Overview getContents projects.locations.runtimeProjectAttachments Overview create delete get list Types AggregationFunction AllowedValue AttributeValues AuthType CollectApiDataResponse ConfigValueOption DisablePluginInstanceActionResponse Documentation EnablePluginInstanceActionResponse EnumerateExtendedApisRequest EnumerateExtendedApisResponse ExecutePluginInstanceActionResponse GoogleServiceAccountConfig HttpOperation InitializeSystemOwnedPluginRequest InitializeSystemOwnedPluginResponse InsightsMetric OperationMetadata Owner QueryApiMetricsRequest QueryApiMetricsResponse QueryDependencyMetricsRequest QueryDependencyMetricsResponse RemoveSystemOwnedPluginRequest RemoveSystemOwnedPluginResponse SourceMetadata StyleGuide StyleGuideContents WaitOperationRequest RPC Reference Overview google.cloud.apihub.v1 google.cloud.apihub.v1main google.cloud.common google.cloud.location google.longrunning google.rpc Client libraries Overview C# Go Java Node.js PHP Python Release notes Envoy Adapter v2.0.x Concepts Getting started Native Envoy example for Apigee and hybrid Apigee hybrid example with Kubernetes Operation Reference Troubleshooting v1.4.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.3.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.2.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.1.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.0.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting Release notes HYBRID RUNTIME Supported platforms and versions Kubernetes and custom resources used by Apigee v1.16 What is Apigee hybrid?
- Choose the right Advanced API Security features for your needs If you want the multi-gateway risk assessment functionality that you can apply to multiple Apigee gateways, including on Apigee Edge, enable the Advanced API Security add-on from your API hub instance.
- Use Advanced API Security to perform risk assessments on multiple Apigee organizations and gateways You can use Advanced API Security to perform risk assessments across multiple Apigee organizations and gateways, including Apigee, Apigee hybrid, and Apigee Edge.

