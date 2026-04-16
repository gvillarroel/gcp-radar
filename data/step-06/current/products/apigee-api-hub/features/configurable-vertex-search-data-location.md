---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.545Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Configurable Vertex Search data location"
feature_slug: "configurable-vertex-search-data-location"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/locations"
  - "https://docs.cloud.google.com/apigee/docs/apihub/provision"
  - "https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform"
keywords:
  - "configurable"
  - "location"
  - "allows"
  - "provisioning"
  - "vertex"
  - "search"
---

# Configurable Vertex Search data location

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

API hub provisioning now allows configuring Vertex Search data to be hosted in a different location.

## Extended Definition

API hub provisioning now allows configuring Vertex Search data to be hosted in a different location.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations)
- [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)
- [https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform](https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform)

## Supporting Pages

### API hub locations \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/locations](https://docs.cloud.google.com/apigee/docs/apihub/locations)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- During the API hub instance provisioning process , you must specify locations for your instance and search data.
- If your organization has a Resource Location Restriction policy that prevents resources from being created in the fallback location, provisioning will fail.
- If you are provisioning API hub in one of the following locations, Cloud Scheduler will be provisioned in a different location as indicated in the table.
- When semantic search is enabled, Vertex AI is automatically provisioned within a Google Cloud region that resides within the selected multi-region.

### Provision API hub in the Cloud console \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)
- Source ID: `site-docs-root-required-3`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Step 2: Location You need to select two locations: First, the physical location (region) where you'd like to host your Apigee API hub instance, and second, the multi-region in which your Vertex AI search data will be stored: From the drop-down list, select the region in which you want your API hub instance to be hosted.
- If the Enable Vertex search capability option is enabled (the default), you must select the multi-region location in which to store your Vertex AI-based search data, the data associated with the Semantic Search feature of API hub.
- Note: When selected, the Vertex search option automatically provisions Vertex AI in a Google Cloud region that exists within the same multi-region as the region in which API hub is hosted.
- If your organization has a Resource Location Restriction policy that prevents resources from being created in the fallback location, provisioning will fail.

### Provision API hub using Terraform \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform](https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using CMEK resource "google apihub api hub instance" "apihub-instance-search"{ project = " PROJECT ID " api hub instance id = " API HUB INSTANCE ID " description = " DESCRIPTION " location = " LOCATION " config { encryption type = "CMEK" cmek key name = "projects/ PROJECT ID /locations/ HUB LOCATION /keyRings/ KEY RING ID /cryptoKeys/ KEY ID " disable search = SEMANTIC SEARCH BOOLEAN vertex location = " VERTEX AI LOCATION " } } Replace the following: PROJECT ID : the ID of the Google Cloud project.
- Provision an API hub instance: Using default GMEK resource "google apihub api hub instance" "apihub-instance-without-search"{ location = " HUB LOCATION " config { disable search = SEMANTIC SEARCH BOOLEAN } } Replace the following: HUB LOCATION : the location of the API hub instance.
- If your organization has a Resource Location Restriction policy that prevents resources from being created in the fallback location, provisioning will fail.
- If you are provisioning API hub in a location where Cloud Scheduler is not available, it will be provisioned in a fallback location.

