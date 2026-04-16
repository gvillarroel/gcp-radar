---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.681Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory: folders searchable field in SearchAllResources"
feature_slug: "cloud-asset-inventory-folders-searchable-field-in-searchallresources"
latest_feature_date: "2021-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
keywords:
  - "searchallresources"
  - "folders"
  - "searchable"
  - "field"
---

# Cloud Asset Inventory: folders searchable field in SearchAllResources

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Folders is now a searchable field in Cloud Asset Inventory's SearchAllResources API.

## Extended Definition

Folders is now a searchable field in Cloud Asset Inventory's SearchAllResources API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)

## Supporting Pages

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 248
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The allowed values are: projects/{PROJECT ID} (e.g., "projects/foo-bar") projects/{PROJECT NUMBER} (e.g., "projects/12345678") folders/{FOLDER NUMBER} (e.g., "folders/1234567") organizations/{ORGANIZATION NUMBER} (e.g., "organizations/123456") Authorization requires the following IAM permission on the specified resource scope : cloudasset.assets.searchAllResources Query parameters Parameters query string Optional.
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource owners" } parentAssetType string The type of this resource's immediate parent, if there is one.
- Home Documentation Security Cloud Asset Inventory Reference Send feedback Method: searchAllResources Stay organized with collections Save and categorize content based on your preferences.
- The caller must be granted the cloudasset.assets.searchAllResources permission on the desired scope, otherwise the request will be rejected.

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Asset\V1\Client\AssetServiceClient; use Google\Cloud\Asset\V1\SearchAllResourcesRequest; / @param string $scope Scope of the search @param string $query (Optional) Query statement @param string[] $assetTypes (Optional) Asset types to search for @param int $pageSize (Optional) Size of each result page @param string $pageToken (Optional) Token produced by the preceding call @param string $orderBy (Optional) Fields to sort the results / function search all resources( string $scope, string $query = '', array $assetTypes = [], int $pageSize = 0, string $pageToken = '', string $orderBy = '' ): void { // Instantiate a client. $asset = new AssetServiceClient(); // Run request $request = (new SearchAllResourcesRequest()) ->setScope($scope) ->setQuery($query) ->setAssetTypes($assetTypes) ->setPageSize($pageSize) ->setPageToken($pageToken) ->setOrderBy($orderBy); $response = $asset->searchAllResources($request); // Print the resource names in the first page of the result foreach ($response->getPage() as $resource) { print($resource->getName() .
- The results are in descending order by name, and because of the read mask, only the name and location fields are returned. gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "name:instance 1" \ --asset-types = compute.googleapis.com/Instance \ --order-by = "name DESC" \ --read-mask = "name,location" Example response --- location: us-central1-a name: //compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-2-1 --- location: us-central1-a name: //compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-1 REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- Fields that can be used in a query are detailed in the searchAllResources reference documentation .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "location:us- ", "readMask": "name,assetType,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances that are running The following sample shows how to search for Compute Engine instances that are running in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "state=RUNNING" \ --asset-types = compute.googleapis.com/Instance \ --read-mask = "name,assetType,location,versionedResources" \ --format = "table(name, assetType, location, versionedResources)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- You can use these asset types with the following Cloud Asset Inventory operations: Export to BigQuery Export to Cloud Storage List assets Monitor asset changes with Pub/Sub Query assets with SQL Search for resources Search resources for IAM allow policies You might also need to make use of asset names associated with these asset types when working with Cloud Asset Inventory.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .
- API reference workflows. googleapis. com/ Workflow Policy types Cloud Asset Inventory uses the following asset types for the ACCESS POLICY , IAM POLICY , and ORG POLICY content types .
- Home Documentation Security Cloud Asset Inventory Reference Send feedback Asset types Stay organized with collections Save and categorize content based on your preferences.

