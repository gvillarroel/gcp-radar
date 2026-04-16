---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.417Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Risk Assessment v2 custom security profiles"
feature_slug: "risk-assessment-v2-custom-security-profiles"
latest_feature_date: "2024-10-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores"
  - "https://docs.cloud.google.com/apigee/docs/api-security"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api"
keywords:
  - "gains"
  - "creating"
  - "custom"
  - "profiles"
  - "assessment"
  - "risk"
---

# Risk Assessment v2 custom security profiles

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Risk Assessment v2 gains support for creating custom security profiles with unique combinations of checks and weights.

## Extended Definition

Risk Assessment v2 gains support for creating custom security profiles with unique combinations of checks and weights.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api](https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api)

## Supporting Pages

### Risk assessment overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- Source ID: `site-docs-reference-required-5`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When working with security profiles or creating custom security profiles, note that multiple assessment checks within a category are assessed individually.
- Custom security profile You can create custom security profiles that include only your chosen assessment checks and weights to evaluate against proxies.
- Create and edit custom security profiles On the Risk Assessment screen, select the Security Profiles tab.
- For instructions on creating and using custom security profiles from the Apigee UI, see Manage custom profiles in the Apigee UI .

### Security scores and profiles API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api](https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api)
- Source ID: `site-api-reference-required-2`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Get existing custom security profiles This command retrieves the information for all security profiles for your project: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2" \ -H "Authorization: Bearer $TOKEN" This command retrieves the metadata for a specific security profile and can be used to retrieve information on the google-default profile as well as custom profiles: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2/ PROFILE ID " \ -H "Authorization: Bearer $TOKEN" Create a new custom security profile To create a new custom security profile, use a command like this: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2?security profile v2 id= PROFILE ID " \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-type: application/json' \ -d '{ "description": " PROFILE DESC ", "risk assessment type": "APIGEE", "profile assessment configs": { "auth-policies-check": {"weight": "MINOR"}, "threat-policies-check": {"weight": "MODERATE"} } }' Update an existing custom security profile To update an existing profile, use a command like: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2/ PROFILE ID ?update mask= UPDATE MASK " \ -X PATCH \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-type: application/json' \ -d '{"description": " PROFILE DESC "}' where UPDATE MASK can be one of these values, if present: description , profile assessment configs , description,profile assessment configs , or (everything).
- Overview This page describes how to manage Risk Assessment security scores and security profiles (also referred to simply as "profiles") using APIs.
- This can be any subset of the following security categories : abuse authorization cors mtls mediation threat Define the profile in the body of an API call To define a custom profile in the body of an API call, enter a command similar to the following: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfiles?security profile id= PROFILE ID " \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H "Content-Type: application/json" \ -d '{ "description":"test custom profile", "profileConfig" : { "categories":[ {"cors":{}}, {"threat":{}} ] } }' This creates a custom profile that includes the categories cors and threat, and returns a response like this: { "name": " PROFILE ID ", "revisionId": "1", "revisionCreateTime": "2023-07-17T18:47:08Z", "revisionUpdateTime": "2023-07-17T18:47:08Z", "scoringConfigs": [ { "title": "json", "scorePath": "/org@ ORG /envgroup@ ENVGROUP /env@ ENV /proxies/proxy@$proxy/policies/individual/security/threat/json", "description": "Check if JSONThreatProtection policy is configured." }, { "title": "xml", "scorePath": "/org@ ORG /envgroup@ ENVGROUP /env@ ENV /proxies/proxy@$proxy/policies/individual/security/threat/xml", "description": "Check if XMLThreatProtection policy is configured." }, { "title": "cors", "scorePath": "/org@ ORG /envgroup@ ENVGROUP /env@ ENV /proxies/proxy@$proxy/policies/individual/security/cors", "description": "Check if CORS policy is configured." } ], "maxScore": 1200, "minScore": 200, "profileConfig": { "categories": [ { "cors": {} }, { "threat": {} } ] }, "description": "test custom profile" } Define the profile by attaching a JSON file to an API call You can also define a custom security profile by attaching a JSON file that defines the profile to an API call.
- See securityAssessmentResults.batchCompute in the Apigee Management API reference documentation for more information on this functionality. curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityAssessmentResults:batchCompute" \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-type: application/json' \ -d '{ "profile": " PROFILE ID ", "scope": " ENV ", RESOURCES }' This is a potential response for the request: { "securityAssessmentResults": [ { "resource": { "type": "API PROXY", "name": "my-proxy-1", "resourceRevisionId": "1" }, "createTime": "2023-11-22T04:49:29.418166Z", "scoringResult": { "severity": "HIGH", "failedAssessmentPerWeight": { "MINOR": 1 }, "assessmentRecommendations": { "cors-policies-check": { "displayName": "CORS policies check", "weight": "MAJOR", "recommendations": [ { "description": "Check whether a CORS policy or CORS header in AssignMessage policy are present.", "link": { "text": "Learn more", "uri": "https://cloud.google.com/apigee/docs/api-platform/reference/policies/reference-overview-policy" } } ], "verdict": "FAIL", "scoreImpact": 100 } }, "dataUpdateTime": "2023-11-22T04:49:29.418166Z" } } ], "assessmentTime": "2023-11-22T04:49:29.418166Z" } Manage security profiles This section provides examples for managing security profiles using the APIs and is not exhaustive.

### Overview of Advanced API Security | Apigee | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security)
- Source ID: `feature-recovery-direct-http`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Choose the right Advanced API Security features for your needs If you want the multi-gateway risk assessment functionality that you can apply to multiple Apigee gateways, including on Apigee Edge, enable the Advanced API Security add-on from your API hub instance.
- Provision API hub Provision using Cloud console Provision using Command line Provision using Terraform Get started with API hub Quickstarts Overview Auto-register Apigee proxies Register an API Create an API version Create and edit attributes Create an Eventarc trigger API resources Overview Register an API Register MCP APIs Manage API resources Auto-register APIs View API resource insights View security scores for APIs Manage API resources Versions Overview Manage versions Operations and MCP tools Overview Manage operations Manage MCP tools Specifications Overview Manage specifications Deployments Overview Manage deployments API supply chain Overview Create a dependency Manage dependencies API observations in API hub Overview Configure API observations in API hub Manage API observations in API hub Advanced API security for multiple Apigee organizations and gateways Advanced API security for multi-gateway projects Configure Advanced API security for multi-gateway projects View security scores across all projects and gateways Manage security profiles for multi-gateway assessments Manage monitoring conditions for multi-gateway assessments Advanced API security advisor tool API insights Overview Configure API insights in API hub API insights dashboards Add-on management Manage add-ons Validate OpenAPI specification Search APIs using semantic search Specification boost Settings Overview Manage attributes Manage project associations Plugins Overview Manage Google Cloud plugins and plugin instances Manage third-party plugins and plugin instances Manage custom plugins and plugin instances Create plugin instances Manage plugins instances Curations Overview Create curations Manage curations Actions Overview Manage Agent Registry integration Deprovision API hub Audit logging for API hub Access Control Predefined IAM roles Add IAM conditions Attach and manage tags VPC Service Controls for API hub gcloud CLI for API hub API hub locations Tutorials Enrich API data with custom curation in API hub Ingest Azure API data into API hub Reference Limits REST Reference v1 Overview Resources REST Resources projects.locations Overview collectApiData get list lookupRuntimeProjectAttachment retrieveApiViews searchResources projects.locations.addons Overview get list manageConfig projects.locations.apiHubInstances Overview create delete get lookup projects.locations.apis Overview create delete get list patch projects.locations.apis.versions Overview create delete get list patch projects.locations.apis.versions.definitions Overview get projects.locations.apis.versions.operations Overview create delete get list patch projects.locations.apis.versions.specs Overview create delete fetchAdditionalSpecContent get getContents lint list patch projects.locations.attributes Overview create delete get list patch projects.locations.curations Overview create delete get list patch projects.locations.dependencies Overview create delete get list patch projects.locations.deployments Overview create delete get list patch projects.locations.discoveredApiObservations Overview get list projects.locations.discoveredApiObservations.discoveredApiOperations Overview get list projects.locations.externalApis Overview create delete get list patch projects.locations.hostProjectRegistrations Overview create get list projects.locations.operations Overview cancel delete get list projects.locations.plugins Overview create delete disable enable get getStyleGuide list updateStyleGuide projects.locations.plugins.instances Overview create delete disableAction enableAction executeAction get list manageSourceData patch projects.locations.plugins.styleGuide Overview getContents projects.locations.runtimeProjectAttachments Overview create delete get list Types AggregationFunction AllowedValue AttributeValues AuthType CollectApiDataResponse ConfigValueOption DisablePluginInstanceActionResponse Documentation EnablePluginInstanceActionResponse EnumerateExtendedApisRequest EnumerateExtendedApisResponse ExecutePluginInstanceActionResponse GoogleServiceAccountConfig HttpOperation InitializeSystemOwnedPluginRequest InitializeSystemOwnedPluginResponse InsightsMetric OperationMetadata Owner QueryApiMetricsRequest QueryApiMetricsResponse QueryDependencyMetricsRequest QueryDependencyMetricsResponse RemoveSystemOwnedPluginRequest RemoveSystemOwnedPluginResponse SourceMetadata StyleGuide StyleGuideContents WaitOperationRequest RPC Reference Overview google.cloud.apihub.v1 google.cloud.apihub.v1main google.cloud.common google.cloud.location google.longrunning google.rpc Client libraries Overview C# Go Java Node.js PHP Python Release notes Envoy Adapter v2.0.x Concepts Getting started Native Envoy example for Apigee and hybrid Apigee hybrid example with Kubernetes Operation Reference Troubleshooting v1.4.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.3.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.2.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.1.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting v1.0.x Concepts Getting started Apigee hybrid example Operation Reference Troubleshooting Release notes HYBRID RUNTIME Supported platforms and versions Kubernetes and custom resources used by Apigee v1.16 What is Apigee hybrid?
- Obfuscating user data for analytics Logging Logging overview View logs Logging with HTTP proxy forwarding enabled Cassandra logs MART logs Runtime logs Synchronizer logs Audit logging information Metrics collection Metrics collection overview Cluster monitoring guidelines Configuring metrics collection OpenTelemetry collector with HTTP proxy forwarding enabled Viewing metrics Other data collection Pod metrics annotations details Runtime services Runtime service configuration overview Managing runtime plane components Cassandra admin Managing Cassandra persistent volume size Scaling Cassandra pods Storing Cassandra secrets in Hashicorp Vault Rotating Cassandra credentials in Hashicorp Vault Rotating Cassandra credentials in Kubernetes secrets Environments About environments Managing environments Creating environments Deleting environments Configuring virtual hosts Configuring proxy forwarding Generating self-signed TLS certificates Configuring TLS and mTLS on the ingress gateway DNS setup quickstart Synchronizer Apigee connect Configure the MART service account Service accounts About service accounts Service account validation Storing service account keys in Hashicorp Vault Storing service account keys in Kubernetes secrets Ingress gateway Managing Apigee Ingress Migrating to Apigee Ingress Enabling non-SNI clients Obtain TLS credentials: An example Running cert-manager in a custom namespace Enhanced per-environment proxy limits Configure large message payload support Configure target timeout limit Cluster management Configuring Kubernetes network policies Securing the runtime installation Configure Seccomp profiles for pod security Data encryption Enabling Workload Identity for GKE Enabling Workload Identity Federation on AKS and EKS Storing data in a Kubernetes secret Storing data in an external secret manager Multi-region deployments Adding multiple hybrid orgs to a cluster Migrating an org to another cluster Scale and autoscale services Decommission a hybrid region Decommission a hybrid org Use a private image repository with Apigee hybrid Apigee deployment services Rolling updates Using Kubernetes Tolerations Manage process ID limits Cassandra backup and restore Backup overview CSI backup and restore Non-CSI backup and restore Scheduling backups in Cloud Storage Scheduling backups in a remote server Monitoring backups Restoring Cassandra backups Restore overview Restoring in a single region Restoring in multiple regions Viewing restore logs Monetization Enable monetization for Apigee hybrid Reference Configuration property reference Apigee hybrid Helm charts reference apigee-pull-push.sh apigeectl common.sh create-service-account dump_kubernetes.sh Upgrading hybrid v1.15 What is Apigee hybrid?
- API MONITORING API Monitoring overview Compare API Monitoring with Apigee Analytics Using the Timeline view Using the Investigate view Using the Recent view Setting up alerts and notifications Examples of alerts Fault codes ADVANCED API SECURITY Overview of Advanced API Security Apigee and Apigee hybrid Overview Getting started Detection rules Best practices Security reports Overview Manage security reports in the UI Manage security reports using the API Risk assessment Risk assessment overview and UI Security scores and profiles API Abuse detection Abuse detection UI Security stats API Incidents API Security feedback API Security alerts Security actions Security actions overview and UI Security actions API Multi-gateway risk assessment Overview API OBSERVATION Overview of API Observation Shadow APIs Shadow API Discovery overview Shadow API Discovery management APIs Shadow API Discovery audit logging Application Integration Use Application Integration Application Integration and Apigee proxy Integration target Subscription entitlements Application Integration policies IntegrationCallout policy SetIntegrationRequest policy Connectors Overview Get started with connectors Release notes API HUB What is Apigee API hub?

