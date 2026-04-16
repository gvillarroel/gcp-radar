---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.539Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Push-based plugin ingestion for API hub plugins"
feature_slug: "push-based-plugin-ingestion-for-api-hub-plugins"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies"
  - "https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins"
  - "https://docs.cloud.google.com/apigee/docs/apihub/curations"
keywords:
  - "default"
  - "push"
  - "ingestion"
  - "plugins"
  - "based"
  - "plugin"
  - "adds"
---

# Push-based plugin ingestion for API hub plugins

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Adds support for push-based plugin ingestion as the default synchronization method for supported Apigee plugin types.

## Extended Definition

Adds support for push-based plugin ingestion as the default synchronization method for supported Apigee plugin types.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies](https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies)
- [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins)
- [https://docs.cloud.google.com/apigee/docs/apihub/curations](https://docs.cloud.google.com/apigee/docs/apihub/curations)

## Supporting Pages

### "Auto-register APIs from Google Cloud projects \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies](https://docs.cloud.google.com/apigee/docs/apihub/auto-register-apigee-proxies)
- Source ID: `site-docs-reference-2`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For push-based plugins, data ingestion is automatically triggered by changes in the source.
- Supported Google Cloud services Auto-registration is currently supported for the following Google Cloud services: Google Cloud service Ingested data Apigee and Apigee hybrid Deployed API proxies and their associated OpenAPI specifications API Gateway Gateway definitions and managed endpoints Project associations and plugins Deprecated: Pull-based ingestion is no longer supported for Apigee and Apigee hybrid plugins as of July 31, 2025 .
- For existing projects that have pull-based Apigee and hybrid plugins configured, these plugins will continue to function and will be automatically migrated to the push-based type starting August, 2025 .
- During this process, API hub automatically discovers deployed APIs within the project and creates the necessary plugin instances in API hub to manage data ingestion.

### Manage custom plugins \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins](https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Apigee Guides Send feedback Manage custom plugins Stay organized with collections Save and categorize content based on your preferences.
- REST You can create a custom plugin using the Create Plugin API : Custom plugin without a hosting service: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name": " PLUGIN DISPLAY NAME ", "description": " PLUGIN DESCRIPTION ", "actions config": [ { "id": " PLUGIN ACTION ID ", "display name": " PLUGIN ACTION DISPLAY NAME ", "description": " PLUGIN ACTION DESCRIPTION ", "trigger mode": " PLUGIN ACTION TRIGGER MODE " } ], "plugin category": " PLUGIN CATEGORY ", "ownership type": "USER OWNED" }' \ "https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins?plugin id= PLUGIN ID " Example curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name": "Nebula Connect", "description": "Nebula Connect plugin for syncing metadata via gRPC.", "actions config": [ { "id": "sync-metadata-core", "display name": "Sync Core Metadata", "description": "Initiates synchronization of core API metadata.", "trigger mode": "API HUB SCHEDULE TRIGGER" } ], "plugin category": "API GATEWAY", "ownership type": "USER OWNED" }' \ "https://apihub.googleapis.com/v1/projects/test-project/locations/us-west1/plugins?plugin id=nebula-connect-v1" Custom plugin with a hosting service: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name": " PLUGIN DISPLAY NAME ", "description": " PLUGIN DESCRIPTION ", "actions config": [ { "id": " PLUGIN ACTION ID ", "display name": " PLUGIN ACTION DISPLAY NAME ", "description": " PLUGIN ACTION DESCRIPTION ", "trigger mode": " PLUGIN ACTION TRIGGER MODE " } ], "plugin category": " PLUGIN CATEGORY ", "hosting service": { "service uri": " PLUGIN HOSTING SERVICE URI " }, "ownership type": "USER OWNED" }' \ "https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins?plugin id= PLUGIN ID " Example curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -d '{ "display name": "Nebula Connect", "description": "Nebula Connect plugin for syncing metadata via gRPC.", "actions config": [ { "id": "sync-metadata-core", "display name": "Sync Core Metadata", "description": "Initiates synchronization of core API metadata.", "trigger mode": "API HUB SCHEDULE TRIGGER" } ], "plugin category": "API GATEWAY", "hosting service": { "service uri": "https://nebula-endpoints-987654321098.us-west1.run.app" }, "ownership type": "USER OWNED" }' \ "https://apihub.googleapis.com/v1/projects/test-project/locations/us-west1/plugins?plugin id=nebula-connect-v1" Replace the following: PLUGIN DISPLAY NAME : The display name of the plugin.
- List custom plugins REST API To list all the custom plugins in your project, do the following: Send a GET request to the plugins resource: curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins Replace the following: PROJECT ID : The name of your API hub host project.
- REST API To delete a custom plugin, do the following: Send a DELETE request to the plugins resource: curl -X DELETE -H "Authorization: Bearer $(gcloud auth print-access-token)" https://apihub.googleapis.com/v1/projects/ PROJECT ID /locations/ HUB LOCATION /plugins/ PLUGIN ID Replace the following: PROJECT ID : The name of your API hub host project.

### Curations overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/curations](https://docs.cloud.google.com/apigee/docs/apihub/curations)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When plugin instances contain APIs with the same display name from multiple sources, the default curation logic consolidates them into a single API entity within API hub.
- Default curation Default curation is the basic level of curation offered in API hub and is auto-selected during the plugin instance creation process.
- If both projects have an API named Orders , the default curation process recognizes these as the same API based on their display name.
- You can override the default curation behavior of a plugin instance by creating and attaching a custom curation logic.

