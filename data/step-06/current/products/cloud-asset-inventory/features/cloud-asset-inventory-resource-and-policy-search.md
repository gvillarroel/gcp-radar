---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.792Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory resource and policy search"
feature_slug: "cloud-asset-inventory-resource-and-policy-search"
latest_feature_date: "2020-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
  - "https://docs.cloud.google.com/asset-inventory/docs/searching-resources"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
keywords:
  - "adds"
  - "metadata"
  - "beta"
  - "resource"
  - "policy"
  - "search"
---

# Cloud Asset Inventory resource and policy search

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory adds beta support to search resource metadata and IAM policies across projects, folders, and organizations.

## Extended Definition

Cloud Asset Inventory adds beta support to search resource metadata and IAM policies across projects, folders, and organizations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- [https://docs.cloud.google.com/asset-inventory/docs/searching-resources](https://docs.cloud.google.com/asset-inventory/docs/searching-resources)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)

## Supporting Pages

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "state=RUNNING", "readMask": "name,assetType,location,versionedResources" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content IAM deny policies The following sample shows how to search for IAM deny policies in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --asset-types = iam.googleapis.com/PolicyV2 \ --query = "name:denypolicies" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content To search for Compute Engine instances that aren't running, replace state=RUNNING with NOT state:running .
- You can check the active account by running gcloud auth list . curl -X POST \ -H "X-HTTP-Method-Override: GET" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" }' \ https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Search for your resources Console To search for resource metadata, complete the following steps.

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/searching-resources](https://docs.cloud.google.com/asset-inventory/docs/searching-resources)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "state=RUNNING", "readMask": "name,assetType,location,versionedResources" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content IAM deny policies The following sample shows how to search for IAM deny policies in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --asset-types = iam.googleapis.com/PolicyV2 \ --query = "name:denypolicies" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content To search for Compute Engine instances that aren't running, replace state=RUNNING with NOT state:running .
- You can check the active account by running gcloud auth list . curl -X POST \ -H "X-HTTP-Method-Override: GET" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" }' \ https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Search for your resources Console To search for resource metadata, complete the following steps.

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This field contains a subset of the resource metadata fields that are returned by the List or Get APIs provided by the corresponding Google Cloud service (e.g., Compute Engine). see API references and supported searchable attributes to see which fields are included.
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource owners" } parentAssetType string The type of this resource's immediate parent, if there is one.
- The allowed values are: projects/{PROJECT ID} (e.g., "projects/foo-bar") projects/{PROJECT NUMBER} (e.g., "projects/12345678") folders/{FOLDER NUMBER} (e.g., "folders/1234567") organizations/{ORGANIZATION NUMBER} (e.g., "organizations/123456") Authorization requires the following IAM permission on the specified resource scope : cloudasset.assets.searchAllResources Query parameters Parameters query string Optional.
- HTTP request Path parameters Query parameters Request body Response body JSON representation Authorization scopes ResourceSearchResult JSON representation VersionedResource JSON representation AttachedResource JSON representation RelatedResources JSON representation RelatedResource JSON representation AssetEnrichment JSON representation ResourceOwners JSON representation Try it!

