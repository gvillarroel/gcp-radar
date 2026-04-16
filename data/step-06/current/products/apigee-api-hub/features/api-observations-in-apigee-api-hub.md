---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.538Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "API observations in Apigee API hub"
feature_slug: "api-observations-in-apigee-api-hub"
latest_feature_date: "2025-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
  - "https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview"
  - "https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies"
keywords:
  - "observations"
  - "undocumented"
  - "discover"
  - "manage"
  - "introduces"
  - "apis"
---

# API observations in Apigee API hub

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Introduces API observations to discover and manage undocumented APIs using shadow API discovery and automated discovery workflows.

## Extended Definition

Introduces API observations to discover and manage undocumented APIs using shadow API discovery and automated discovery workflows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)
- [https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies](https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies)

## Supporting Pages

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Task Required Role(s) Enable or disable Advanced API Security Apigee Organization Admin (roles/apigee.admin) Create observation sources and jobs API Management Admin (roles/apim.admin) View observations API Management Viewer (roles/apim.viewer) Access Shadow API Discovery in the Apigee UI This section describes how to access Shadow API Discovery in the Apigee UI.
- Shadow API Discovery finds shadow APIs (also known as undocumented APIs) in your existing cloud infrastructure.
- You can also use the Apigee Management (APIM) APIs to manage Shadow API Discovery.
- See Shadow API discovery management APIs .

### API observations in API hub \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The API observations feature in API hub helps you address the challenges of undocumented and unmanaged APIs, also known as shadow APIs , which can introduce significant security and governance risks in your API infrastructure.
- Evolving from the Shadow API Discovery feature in Apigee, API observations in API hub uses automated discovery processes to find and catalog all your APIs—both known and unknown—into a single, unified, and managed view.
- Last Event Detected (UTC) : the timestamp (in UTC) of the most recent detection of the discovered API observation Discovered API observations in API hub IAM roles and permissions To use API observations in API hub, you need the following IAM roles and permissions: IAM roles Permissions API Management Admin ( roles/apim.admin ) apim.operations.delete apim.operations.cancel apim.observationSources.create apim.observationSources.delete apim.observationJobs.create apim.observationJobs.enable apim.observationJobs.disable apim.observationJobs.delete apim.apiObservations.batchEditTags API Management Viewer ( roles/apim.viewer ) resourcemanager.projects.get resourcemanager.projects.list apim.operations.list apim.operations.get apim.locations.list apim.locations.get apim.locations.listApiObservationTags apim.observationSources.list apim.observationSources.get apim.observationJobs.list apim.observationJobs.get apim.apiObservations.list apim.apiObservations.get apim.apiOperations.list apim.apiOperations.get apim.entitlements.get Provisioning Admin Role ( roles/apihub.provisioningAdmin ) apihub.runtimeProjectAttachments.create apihub.hostProjects.attach Viewer Role ( roles/apihub.viewer ) apihub.discoveredObservations.list apihub.discoveredObservations.get apihub.discoveredOperations.list apihub.discoveredOperations.get Pricing and billing The API observations feature in API hub is provided at no direct cost.
- Discovered API observations The API observations page in API hub displays a list of all detected APIs from all associated data sources, including both known and unknown APIs.

### "Auto-register APIs from Google Cloud projects \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies](https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- During this process, API hub automatically discovers deployed APIs within the project and creates the necessary plugin instances in API hub to manage data ingestion.
- Supported Google Cloud services Auto-registration is currently supported for the following Google Cloud services: Google Cloud service Ingested data Apigee and Apigee hybrid Deployed API proxies and their associated OpenAPI specifications API Gateway Gateway definitions and managed endpoints Project associations and plugins Deprecated: Pull-based ingestion is no longer supported for Apigee and Apigee hybrid plugins as of July 31, 2025 .
- This page applies to Apigee and Apigee hybrid . orgs path.developers.apps.keys.create API % endsetvar % --> orgs path.environments.analytics.reports.dailysupp API % endsetvar % --> orgs path.environments analytics reports dailysummary d1 results API % endsetvar % --> This page describes how to automatically register APIs from Google Cloud projects to API hub.
- Auto-discovery of OpenAPI specs from Apigee proxies To simplify API documentation and maintain synchronization with your Apigee proxy deployments, API hub automatically discovers and ingests valid OpenAPI specifications (OAS) when they are included in your Apigee API proxy resources.

