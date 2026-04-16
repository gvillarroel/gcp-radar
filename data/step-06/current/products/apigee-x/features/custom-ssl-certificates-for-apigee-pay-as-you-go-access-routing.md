---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.764Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Custom SSL certificates for Apigee Pay-as-you-go access routing"
feature_slug: "custom-ssl-certificates-for-apigee-pay-as-you-go-access-routing"
latest_feature_date: "2023-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-custom-plugins"
  - "https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins"
keywords:
  - "certificates"
  - "custom"
  - "access"
---

# Custom SSL certificates for Apigee Pay-as-you-go access routing

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee Pay-as-you-go provisioning now supports using existing self-managed SSL certificates when configuring access routing.

## Extended Definition

Apigee Pay-as-you-go provisioning now supports using existing self-managed SSL certificates when configuring access routing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/manage-custom-plugins)
- [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins)

## Supporting Pages

### Manage custom plugins \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/manage-custom-plugins)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- REST You can create a custom plugin using the Create Plugin API : Custom plugin without a hosting service: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name": " PLUGIN DISPLAY NAME ", "description": " PLUGIN DESCRIPTION ", "actions config": [ { "id": " PLUGIN ACTION ID ", "display name": " PLUGIN ACTION DISPLAY NAME ", "description": " PLUGIN ACTION DESCRIPTION ", "trigger mode": " PLUGIN ACTION TRIGGER MODE " } ], "plugin category": " PLUGIN CATEGORY ", "ownership type": "USER OWNED" }' \ "https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins?plugin id= PLUGIN ID " Example curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name": "Nebula Connect", "description": "Nebula Connect plugin for syncing metadata via gRPC.", "actions config": [ { "id": "sync-metadata-core", "display name": "Sync Core Metadata", "description": "Initiates synchronization of core API metadata.", "trigger mode": "API HUB SCHEDULE TRIGGER" } ], "plugin category": "API GATEWAY", "ownership type": "USER OWNED" }' \ "https://apihub.googleapis.com/v1/projects/test-project/locations/us-west1/plugins?plugin id=nebula-connect-v1" Custom plugin with a hosting service: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name": " PLUGIN DISPLAY NAME ", "description": " PLUGIN DESCRIPTION ", "actions config": [ { "id": " PLUGIN ACTION ID ", "display name": " PLUGIN ACTION DISPLAY NAME ", "description": " PLUGIN ACTION DESCRIPTION ", "trigger mode": " PLUGIN ACTION TRIGGER MODE " } ], "plugin category": " PLUGIN CATEGORY ", "hosting service": { "service uri": " PLUGIN HOSTING SERVICE URI " }, "ownership type": "USER OWNED" }' \ "https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins?plugin id= PLUGIN ID " Example curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name": "Nebula Connect", "description": "Nebula Connect plugin for syncing metadata via gRPC.", "actions config": [ { "id": "sync-metadata-core", "display name": "Sync Core Metadata", "description": "Initiates synchronization of core API metadata.", "trigger mode": "API HUB SCHEDULE TRIGGER" } ], "plugin category": "API GATEWAY", "hosting service": { "service uri": "https://nebula-endpoints-987654321098.us-west1.run.app" }, "ownership type": "USER OWNED" }' \ "https://apihub.googleapis.com/v1/projects/test-project/locations/us-west1/plugins?plugin id=nebula-connect-v1" Replace the following: PLUGIN DISPLAY NAME : The display name of the plugin.
- List custom plugins REST API To list all the custom plugins in your project, do the following: Send a GET request to the plugins resource: curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins Replace the following: PROJECT ID : The name of your API hub host project.
- REST API To delete a custom plugin, do the following: Send a DELETE request to the plugins resource: curl -X DELETE -H "Authorization: Bearer $(gcloud auth print-access-token)" https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins/ PLUGIN ID Replace the following: PROJECT ID : The name of your API hub host project.
- To get a custom plugin, send a GET request to the plugins resource: curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins/ PLUGIN ID Replace the following: PROJECT ID : The name of your API hub host project.

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Objectives In this tutorial, you will complete the following steps: Step 1: Create an integration for custom curation Step 2: Set up custom curation in API hub Step 3: Edit existing plugin instance Step 4: Verify enriched API data Costs In this document, you use the following billable components of Google Cloud: Application Integration Integration Connectors Cloud Storage Secret Manager To generate a cost estimate based on your projected usage, use the pricing calculator .
- Before you begin Before you begin this tutorial, ensure you have completed the following: Grant the following IAM roles to the service account that you want to use to create the connection: roles/secretmanager.viewer, roles/secretmanager.secretAccessor roles/storage.admin For information on granting roles, see Granting, changing, and revoking access .
- The following table provides details about each element to help you understand how the curation logic works: Component Configuration Description API trigger API Trigger ID: api trigger/test-custom-curation API 1 Receives data from the API hub plugin instance to invoke the integration for custom curation.
- Step 1: Create an integration for custom curation With the environment ready, you can now define the custom curation logic using Application Integration, which will handle the process of identifying, enriching, and transforming the API metadata.

### Manage custom plugins \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST You can create a custom plugin using the Create Plugin API : Custom plugin without a hosting service: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name": " PLUGIN DISPLAY NAME ", "description": " PLUGIN DESCRIPTION ", "actions config": [ { "id": " PLUGIN ACTION ID ", "display name": " PLUGIN ACTION DISPLAY NAME ", "description": " PLUGIN ACTION DESCRIPTION ", "trigger mode": " PLUGIN ACTION TRIGGER MODE " } ], "plugin category": " PLUGIN CATEGORY ", "ownership type": "USER OWNED" }' \ "https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins?plugin id= PLUGIN ID " Example curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name": "Nebula Connect", "description": "Nebula Connect plugin for syncing metadata via gRPC.", "actions config": [ { "id": "sync-metadata-core", "display name": "Sync Core Metadata", "description": "Initiates synchronization of core API metadata.", "trigger mode": "API HUB SCHEDULE TRIGGER" } ], "plugin category": "API GATEWAY", "ownership type": "USER OWNED" }' \ "https://apihub.googleapis.com/v1/projects/test-project/locations/us-west1/plugins?plugin id=nebula-connect-v1" Custom plugin with a hosting service: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name": " PLUGIN DISPLAY NAME ", "description": " PLUGIN DESCRIPTION ", "actions config": [ { "id": " PLUGIN ACTION ID ", "display name": " PLUGIN ACTION DISPLAY NAME ", "description": " PLUGIN ACTION DESCRIPTION ", "trigger mode": " PLUGIN ACTION TRIGGER MODE " } ], "plugin category": " PLUGIN CATEGORY ", "hosting service": { "service uri": " PLUGIN HOSTING SERVICE URI " }, "ownership type": "USER OWNED" }' \ "https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins?plugin id= PLUGIN ID " Example curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name": "Nebula Connect", "description": "Nebula Connect plugin for syncing metadata via gRPC.", "actions config": [ { "id": "sync-metadata-core", "display name": "Sync Core Metadata", "description": "Initiates synchronization of core API metadata.", "trigger mode": "API HUB SCHEDULE TRIGGER" } ], "plugin category": "API GATEWAY", "hosting service": { "service uri": "https://nebula-endpoints-987654321098.us-west1.run.app" }, "ownership type": "USER OWNED" }' \ "https://apihub.googleapis.com/v1/projects/test-project/locations/us-west1/plugins?plugin id=nebula-connect-v1" Replace the following: PLUGIN DISPLAY NAME : The display name of the plugin.
- List custom plugins REST API To list all the custom plugins in your project, do the following: Send a GET request to the plugins resource: curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins Replace the following: PROJECT ID : The name of your API hub host project.
- REST API To delete a custom plugin, do the following: Send a DELETE request to the plugins resource: curl -X DELETE -H "Authorization: Bearer $(gcloud auth print-access-token)" https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins/ PLUGIN ID Replace the following: PROJECT ID : The name of your API hub host project.
- To get a custom plugin, send a GET request to the plugins resource: curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins/ PLUGIN ID Replace the following: PROJECT ID : The name of your API hub host project.

