---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.541Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "API hub plugin framework"
feature_slug: "api-hub-plugin-framework"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/apis-intro"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub"
  - "https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins"
keywords:
  - "framework"
  - "ingest"
  - "uses"
  - "multiple"
  - "metadata"
  - "plugin"
---

# API hub plugin framework

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

API hub now uses a plugin framework to ingest API metadata from multiple Google Cloud and external API sources.

## Extended Definition

API hub now uses a plugin framework to ingest API metadata from multiple Google Cloud and external API sources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub)
- [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins)

## Supporting Pages

### "Ingest Microsoft Azure API data into API hub \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: The execute integration.sh script triggers a one-time ingestion of metadata from Azure APIM and does not set up a continuous synchronization.
- This tutorial shows you how to ingest API metadata from Azure API Management (APIM) platform into Apigee API hub.
- The following diagram illustrates the workflow you'll be setting up: Objectives In this tutorial, you will complete the following steps: Step 1: Create an Azure App Step 2: Configure Google Cloud resources Step 3: Create and publish an integration in Application Integration Step 4: Execute the integration to ingest API data from Azure APIM to API hub Step 5: Verify and view the ingested API data in API hub Costs In this document, you use the following billable components of Google Cloud: Application Integration To generate a cost estimate based on your projected usage, use the pricing calculator .
- For Each Parallel Task taskId: 19 For each API ID in $api id-list$ , runs a sub-integration ( api trigger/INTEGRATION NAME API 5 ) in parallel to gather detailed metadata for that API, including operations, revisions, specifications, and deployments.

### API resources overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using plugins Plugins, also known as on-ramp plugins , provide the framework that allows API hub to discover and ingest metadata from various API management platforms.
- When you use auto-registration by attaching a Google Cloud runtime project, API hub automatically creates a plugin instance in the background for that specific gateway service to ingest metadata and register your APIs as API resources.
- Alternatively, for non-Google Cloud or custom data sources, you can explicitly create plugin instances that establish a configured connection to your gateways to manually bring in metadata and populate your centralized portfolio.
- The actual ingestion of data and the registration of APIs as API resources is managed through plugin instances.

### Manage custom plugins \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST You can create a custom plugin using the Create Plugin API : Custom plugin without a hosting service: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name": " PLUGIN DISPLAY NAME ", "description": " PLUGIN DESCRIPTION ", "actions config": [ { "id": " PLUGIN ACTION ID ", "display name": " PLUGIN ACTION DISPLAY NAME ", "description": " PLUGIN ACTION DESCRIPTION ", "trigger mode": " PLUGIN ACTION TRIGGER MODE " } ], "plugin category": " PLUGIN CATEGORY ", "ownership type": "USER OWNED" }' \ "https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins?plugin id= PLUGIN ID " Example curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name": "Nebula Connect", "description": "Nebula Connect plugin for syncing metadata via gRPC.", "actions config": [ { "id": "sync-metadata-core", "display name": "Sync Core Metadata", "description": "Initiates synchronization of core API metadata.", "trigger mode": "API HUB SCHEDULE TRIGGER" } ], "plugin category": "API GATEWAY", "ownership type": "USER OWNED" }' \ "https://apihub.googleapis.com/v1/projects/test-project/locations/us-west1/plugins?plugin id=nebula-connect-v1" Custom plugin with a hosting service: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name": " PLUGIN DISPLAY NAME ", "description": " PLUGIN DESCRIPTION ", "actions config": [ { "id": " PLUGIN ACTION ID ", "display name": " PLUGIN ACTION DISPLAY NAME ", "description": " PLUGIN ACTION DESCRIPTION ", "trigger mode": " PLUGIN ACTION TRIGGER MODE " } ], "plugin category": " PLUGIN CATEGORY ", "hosting service": { "service uri": " PLUGIN HOSTING SERVICE URI " }, "ownership type": "USER OWNED" }' \ "https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins?plugin id= PLUGIN ID " Example curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name": "Nebula Connect", "description": "Nebula Connect plugin for syncing metadata via gRPC.", "actions config": [ { "id": "sync-metadata-core", "display name": "Sync Core Metadata", "description": "Initiates synchronization of core API metadata.", "trigger mode": "API HUB SCHEDULE TRIGGER" } ], "plugin category": "API GATEWAY", "hosting service": { "service uri": "https://nebula-endpoints-987654321098.us-west1.run.app" }, "ownership type": "USER OWNED" }' \ "https://apihub.googleapis.com/v1/projects/test-project/locations/us-west1/plugins?plugin id=nebula-connect-v1" Replace the following: PLUGIN DISPLAY NAME : The display name of the plugin.
- Once the plugin is created, you can create a plugin instance to establish the connection and ingest the third party API data into API hub.
- List custom plugins REST API To list all the custom plugins in your project, do the following: Send a GET request to the plugins resource: curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins Replace the following: PROJECT ID : The name of your API hub host project.
- REST API To delete a custom plugin, do the following: Send a DELETE request to the plugins resource: curl -X DELETE -H "Authorization: Bearer $(gcloud auth print-access-token)" https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins/ PLUGIN ID Replace the following: PROJECT ID : The name of your API hub host project.

