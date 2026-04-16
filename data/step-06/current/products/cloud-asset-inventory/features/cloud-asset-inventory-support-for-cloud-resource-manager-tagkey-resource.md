---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.448Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory support for Cloud Resource Manager TagKey resource"
feature_slug: "cloud-asset-inventory-support-for-cloud-resource-manager-tagkey-resource"
latest_feature_date: "2021-11-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/feeds/create"
  - "https://docs.cloud.google.com/tasks/docs/apis"
keywords:
  - "tagkey"
  - "manager"
  - "resources"
  - "resource"
  - "exposes"
---

# Cloud Asset Inventory support for Cloud Resource Manager TagKey resource

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory now exposes Cloud Resource Manager TagKey resources through ExportAssets and Feed APIs.

## Extended Definition

Cloud Asset Inventory now exposes Cloud Resource Manager TagKey resources through ExportAssets and Feed APIs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/feeds/create](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/feeds/create)
- [https://docs.cloud.google.com/tasks/docs/apis](https://docs.cloud.google.com/tasks/docs/apis)

## Supporting Pages

### APIs and references \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tasks/docs/apis](https://docs.cloud.google.com/tasks/docs/apis)
- Source ID: `site-docs-reference-3`
- Final score: 52
- Re-rank relevance: N/A

### Method: feeds.create \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/feeds/create](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/feeds/create)
- Source ID: `site-api-reference`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "tagKeys:env", "readMask": "name,assetType,tags" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances by TagValue The following sample shows how to search for Compute Engine instances in the my-project project that have directly attached Tags where the TagValue . namespacedName contains prod or sea , and the instance name does not contain instance1 .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "labels.env: ", "readMask": "name,assetType,labels" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances by TagKey The following sample shows how to search for Compute Engine instances in the my-project project that have directly attached Tags with a TagKey . namespacedName containing env .
- You can check the active account by running gcloud auth list . curl -X POST \ -H "X-HTTP-Method-Override: GET" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "tagKeys:env", "readMask": "name,assetType,tags" }' \ https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- To search by effective TagKeys instead, replace tagKeys with effectiveTagKeys . gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "tagKeys:env" \ --asset-types = compute.googleapis.com/Instance \ --format = "table(name, assetType, tags)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.

