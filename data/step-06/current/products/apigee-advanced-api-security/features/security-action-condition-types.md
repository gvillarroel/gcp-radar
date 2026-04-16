---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.423Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Security action condition types"
feature_slug: "security-action-condition-types"
latest_feature_date: "2024-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-actions"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores"
keywords:
  - "triggered"
  - "types"
  - "condition"
  - "actions"
  - "action"
---

# Security action condition types

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Security actions can now be triggered by additional condition types, including API keys, API products, access tokens, developers, developer apps, and user agents for finer-grained traffic handling.

## Extended Definition

Security actions can now be triggered by additional condition types, including API keys, API products, access tokens, developers, developer apps, and user agents for finer-grained traffic handling.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)

## Supporting Pages

### Security actions overview and UI | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
- Source ID: `feature-recovery-direct-http`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Provision API hub Provision using Cloud console Provision using Command line Provision using Terraform Get started with API hub Quickstarts Overview Auto-register Apigee proxies Register an API Create an API version Create and edit attributes Create an Eventarc trigger API resources Overview Register an API Register MCP APIs Manage API resources Auto-register APIs View API resource insights View security scores for APIs Manage API resources Versions Overview Manage versions Operations and MCP tools Overview Manage operations Manage MCP tools Specifications Overview Manage specifications Deployments Overview Manage deployments API supply chain Overview Create a dependency Manage dependencies API observations in API hub Overview Configure API observations in API hub Manage API observations in API hub Advanced API security for multiple Apigee organizations and gateways Advanced API security for multi-gateway projects Configure Advanced API security for multi-gateway projects View security scores across all projects and gateways Manage security profiles for multi-gateway assessments Manage monitoring conditions for multi-gateway assessments Advanced API security advisor tool API insights Overview Configure API insights in API hub API insights dashboards Add-on management Manage add-ons Validate OpenAPI specification Search APIs using semantic search Specification boost Settings Overview Manage attributes Manage project associations Plugins Overview Manage Google Cloud plugins and plugin instances Manage third-party plugins and plugin instances Manage custom plugins and plugin instances Create plugin instances Manage plugins instances Curations Overview Create curations Manage curations Actions Overview Manage Agent Registry integration Deprovision API hub Audit logging for API hub Access Control Predefined IAM roles Add IAM conditions Attach and manage tags VPC Service Controls for API hub gcloud CLI for API hub API hub locations Tutorials Enrich API data with custom curation in API hub Ingest Azure API data into API hub Reference Limits REST Reference v1 Overview Resources REST Resources projects.locations Overview collectApiData get list lookupRuntimeProjectAttachment retrieveApiViews searchResources projects.locations.addons Overview get list manageConfig projects.locations.apiHubInstances Overview create delete get lookup projects.locations.apis Overview create delete get list patch projects.locations.apis.versions Overview create delete get list patch projects.locations.apis.versions.definitions Overview get projects.locations.apis.versions.operations Overview create delete get list patch projects.locations.apis.versions.specs Overview create delete fetchAdditionalSpecContent get getContents lint list patch projects.locations.attributes Overview create delete get list patch projects.locations.curations Overview create delete get list patch projects.locations.dependencies Overview create delete get list patch projects.locations.deployments Overview create delete get list patch projects.locations.discoveredApiObservations Overview get list projects.locations.discoveredApiObservations.discoveredApiOperations Overview get list projects.locations.externalApis Overview create delete get list patch projects.locations.hostProjectRegistrations Overview create get list projects.locations.operations Overview cancel delete get list projects.locations.plugins Overview create delete disable enable get getStyleGuide list updateStyleGuide projects.locations.plugins.instances Overview create delete disableAction enableAction executeAction get list manageSourceData patch projects.locations.plugins.styleGuide Overview getContents projects.locations.runtimeProjectAttachments Overview create delete get list Types AggregationFunction AllowedValue AttributeValues AuthType CollectApiDataResponse ConfigValueOption DisablePluginInstanceActionResponse Documentation EnablePluginInstanceActionResponse EnumerateExtendedApisRequest EnumerateExtendedApisResponse ExecutePluginInstanceActionResponse GoogleServiceAccountConfig HttpOperation InitializeSystemOwnedPluginRequest InitializeSystemOwnedPluginResponse InsightsMetric OperationMetadata Owner QueryApiMetricsRequest QueryApiMetricsResponse QueryDependencyMetricsRequest QueryDependencyMetricsResponse RemoveSystemOwnedPluginRequest RemoveSystemOwnedPluginResponse SourceMetadata StyleGuide StyleGuideContents WaitOperationRequest RPC Reference Overview google.cloud.apihub.v1 google.cloud.apihub.v1main google.cloud.common google.cloud.location google.longrunning google.rpc Client libraries Overview C# Go Java Node.js PHP Python Release notes Envoy Adapter v2.0.x Concepts Getting started Native Envoy example for Apigee and hybrid Apigee hybrid example with Kubernetes Operation Reference Troubleshooting v1.4.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.3.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.2.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.1.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.0.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting Release notes HYBRID RUNTIME Supported platforms and versions Kubernetes and custom resources used by Apigee v1.16 What is Apigee hybrid?
- Values: Enter one of the following: If Condition type is Detection rules , select a set of detection rules that a request must have triggered for the security action to be applied to it.
- 3 Precedence order When a request meets the condition of more than one security action, the precedence order of the actions determines which action is performed.
- How security actions work With security actions, you can explicitly allow, deny, or flag requests based on specific conditions.

### Security Actions API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api](https://docs.cloud.google.com/apigee/docs/api-security/security-actions-api)
- Source ID: `site-api-reference-required-1`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- For example: "conditionConfig" : { "ipAddressRanges" : [ "100.0.225.0" ], "asns" : [ "10578" ]} This example shows two condition types in a deny action: curl -X POST "https://apigee.googleapis.com/v1/organizations/ ORG /environments/ ENV /securityActions?security action id= ACTION NAME " \ -H "Authorization: Bearer $TOKEN" \ -H "Content-Type: application/json" \ -d '{"state": "ENABLED", "deny": {"responseCode": 404}, "conditionConfig": {"ipAddressRanges": ["100.0.225.0"], "asns": ["10578"]}}' Create security actions This section provides examples for how to create security actions with different action types.
- Enable a security action To enable a security action, enter a command similar to the following: curl -X POST "https://apigee.googleapis.com/v1/organizations/ ORG /environments/ ENV /securityActions/ ACTION NAME :enable" -H "Authorization: Bearer $TOKEN" This returns a response like the following: { "name": " ACTION NAME ", "state": "ENABLED", "createTime": "2022-12-29T18:27:31Z", "updateTime": "2023-01-03T23:19:26.650965481Z", "conditionConfig": { "ipAddressRanges": [ "100.0.220.0", "200.0.0.0" ] }, "allow": {}, "expireTime": "2028-01-01T00:00:00Z" } Disable a security action To disable a security action, enter a command similar to the following: curl -X POST "https://apigee.googleapis.com/v1/organizations/ ORG /environments/ ENV /securityActions/ ACTION NAME :disable" -H "Authorization: Bearer $TOKEN" This returns a response like the following: { "name": "actionallow", "state": "DISABLED", "createTime": "2022-12-29T18:27:31Z", "updateTime": "2023-01-03T23:13:04.874540001Z", "conditionConfig": { "ipAddressRanges": [ "100.0.220.0", "200.0.0.0" ] }, "allow": {}, "expireTime": "2028-01-01T00:00:00Z" } Get or list security actions The following examples show how to get or list security actions Get a security action To get a security action, enter a command similar to the following: curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG /environments/ ENV /securityActions/ ACTION NAME " -H "Authorization: Bearer $TOKEN" This returns a response like the following: { "name": " ACTION NAME ", "state": "DISABLED", "createTime": "2022-12-29T18:27:31Z", "updateTime": "2023-01-03T23:13:04Z", "conditionConfig": { "ipAddressRanges": [ "100.0.220.0", "200.0.0.0" ] }, "allow": {}, "expireTime": "2028-01-01T00:00:00Z" } List security actions To list all security actions, enter a command similar to the following: curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG /environments/ ENV /securityActions" -H "Authorization: Bearer $TOKEN" Pause or resume security actions The following examples show how to pause or resume security actions Pause all security actions To Pause all security actions, enter a command similar to the following: curl -X PATCH "https://apigee.googleapis.com/v1/organizations/ ORG /environments/ ENV /securityActionsConfig" \ -H "Authorization: Bearer $TOKEN" \ -H "Content-Type: application/json" \ -d '{"enabled": "false", "name": "organizations/ ORG /environments/ ENV /securityActionsConfig"}' This returns a response like the following: { "name": "organizations/ ORG /environments/ ENV /securityActionsConfig", "enabled": false, "updateTime": "2023-01-23T21:44:58.063807Z" } Resume paused security actions To resume paused security actions, enter a command similar to the following: curl -X PATCH "https://apigee.googleapis.com/v1/organizations/ ORG /environments/ ENV /securityActionsConfig" \ -H "Authorization: Bearer $TOKEN" \ -H "Content-Type: application/json" \ -d '{"enabled": "true", "name": "organizations/ ORG /environments/ ENV /securityActionsConfig"}' This returns a response like the following: { "name": "organizations/ ORG /environments/ ENV /securityActionsConfig", "enabled": true, "updateTime": "2023-01-23T21:44:58.063807Z" } Delete security actions To delete a security action, enter a command similar to the following: curl -X DELETE "https://apigee.googleapis.com/v1/organizations/ ORG /environments/ ENV /securityActions/ ACTION NAME " -H "Authorization: Bearer $TOKEN" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- See the Security Actions API reference documentation for more information about potential values when editing actions. curl -X PATCH "https://apigee.googleapis.com/v1/organizations/ ORG /environments/ ENV /securityActions/ ACTION NAME ?update mask=deny,conditionConfig" \ -H "Authorization: Bearer $TOKEN" \ -d '{"deny": {"responseCode": 404}, "conditionConfig": {"ipAddressRanges": ["100.0.230.0"]}}' \ -H "Content-Type: application/json" { "name": " ACTION NAME ", "state": "ENABLED", "createTime": "2022-12-29T18:28:50Z", "updateTime": "2022-12-29T18:28:50Z", "conditionConfig": { "ipAddressRanges": [ "100.0.230.0" ] }, "deny": { "responseCode": 404 } } Enable or disable a security action The following examples show API calls to enable or disable security actions.
- Create a flag action To create a flag action, enter a command similar to the following: curl -X POST "https://apigee.googleapis.com/v1/organizations/ ORG /environments/ ENV /securityActions?security action id= ACTION NAME " \ -H "Authorization: Bearer $TOKEN" \ -H "Content-Type: application/json" \ -d '{"state": "ENABLED", "flag": {"headers": [{"name": "senseflag", "value": "flagvalue"}]}, "conditionConfig": {"ipAddressRanges": ["100.0.230.0"]}}' This creates a security action that flags requests from the IP addresses listed in ipAddressRanges and adds a header senseflag with value flagvalue .

### Risk assessment overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- Source ID: `site-docs-reference-required-5`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Delete monitoring conditions To delete an existing monitoring condition, select Delete from the Actions menu in the row for the monitoring condition, and then confirm.
- Create monitoring alerts To create a new monitoring alert, select Create monitoring alert from the Actions menu in the row for the monitoring condition.
- To edit an existing condition, select Edit from the Actions menu in the row for that monitoring condition.
- Duplicate security profiles To duplicate an existing security profile (to create a new custom profile), select Duplicate from the Actions menu in the row for that profile or click the profile name from the profiles list to see the profile metadata, and then click Duplicate .

