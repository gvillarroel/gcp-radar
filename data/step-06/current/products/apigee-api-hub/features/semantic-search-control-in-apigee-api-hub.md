---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.536Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Semantic search control in Apigee API hub"
feature_slug: "semantic-search-control-in-apigee-api-hub"
latest_feature_date: "2025-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/apihub/provision"
  - "https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform"
keywords:
  - "enable"
  - "semantic"
  - "ability"
  - "control"
  - "search"
  - "adds"
---

# Semantic search control in Apigee API hub

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Adds the ability to enable and disable semantic search from the API hub Settings actions in Google Cloud console.

## Extended Definition

Adds the ability to enable and disable semantic search from the API hub Settings actions in Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)
- [https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform](https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference-required-3`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create and deploy a Vector Search index To create and deploy a Vector Search index: Create a Vector Search index that allows streaming updates: ACCESS TOKEN = $( gcloud auth print-access-token ) && curl --location --request POST \ "https:// $REGION -aiplatform.googleapis.com/v1/projects/ $PROJECT ID /locations/ $REGION /indexes" \ --header "Authorization: Bearer $ACCESS TOKEN " \ --header 'Content-Type: application/json' \ --data-raw \ '{ "displayName": "semantic-cache-index", "description": "semantic-cache-index", "metadata": { "config": { "dimensions": "768", "approximateNeighborsCount": 150, "distanceMeasureType": "DOT PRODUCT DISTANCE", "featureNormType": "NONE", "algorithmConfig": { "treeAhConfig": { "leafNodeEmbeddingCount": "10000", "fractionLeafNodesToSearch": 0.05 } }, "shardSize": "SHARD SIZE MEDIUM" }, }, "indexUpdateMethod": "STREAM UPDATE" }' The $REGION defines the region where the Vector Search index deploys.
- Create an IndexEndpoint using the following command: gcloud ai index-endpoints create \ --display-name = semantic-cache-index-endpoint \ --public-endpoint-enabled \ --region = $REGION \ --project = $PROJECT ID This step may take several minutes to complete.
- Create an API proxy to enable semantic caching In this step, create a new API proxy using the Proxy with Semantic Cache template, if you have not done so already.
- The following sections describe the steps to create and configure the semantic caching policies: Configure a service account for the Vector Search index.

### Provision API hub in the Cloud console \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/provision](https://docs.cloud.google.com/apigee/docs/apihub/provision)
- Source ID: `site-docs-root-required-3`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- If the Enable Vertex search capability option is enabled (the default), you must select the multi-region location in which to store your Vertex AI-based search data, the data associated with the Semantic Search feature of API hub.
- If you deselect the Enable Vertex search capability option, Semantic Search is disabled, and the multi-region selector is hidden.
- The Vertex search option enables the Vertex AI-powered Semantic Search feature of API hub.
- Step 2: Location You need to select two locations: First, the physical location (region) where you'd like to host your Apigee API hub instance, and second, the multi-region in which your Vertex AI search data will be stored: From the drop-down list, select the region in which you want your API hub instance to be hosted.

### Provision API hub using Terraform \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform](https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform)
- Source ID: `site-iam-reference`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SEMANTIC SEARCH BOOLEAN : false if you want to enable semantic search, true otherwise.
- SEMANTIC SEARCH BOOLEAN : false if you want to enable semantic search, true otherwise.
- Using CMEK resource "google apihub api hub instance" "apihub-instance-search"{ project = " PROJECT ID " api hub instance id = " API HUB INSTANCE ID " description = " DESCRIPTION " location = " LOCATION " config { encryption type = "CMEK" cmek key name = "projects/ PROJECT ID /locations/ HUB LOCATION /keyRings/ KEY RING ID /cryptoKeys/ KEY ID " disable search = SEMANTIC SEARCH BOOLEAN vertex location = " VERTEX AI LOCATION " } } Replace the following: PROJECT ID : the ID of the Google Cloud project.
- Provision an API hub instance: Using default GMEK resource "google apihub api hub instance" "apihub-instance-without-search"{ location = " HUB LOCATION " config { disable search = SEMANTIC SEARCH BOOLEAN } } Replace the following: HUB LOCATION : the location of the API hub instance.

