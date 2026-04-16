---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.513Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory SearchAllResources/SearchAllIamPolicies support for Filestore Backup"
feature_slug: "cloud-asset-inventory-searchallresources-searchalliampolicies-support-for-filestore-backup"
latest_feature_date: "2021-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
keywords:
  - "searchalliampolicies"
  - "searchallresources"
  - "filestore"
  - "backup"
  - "exposes"
---

# Cloud Asset Inventory SearchAllResources/SearchAllIamPolicies support for Filestore Backup

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now exposes the Filestore Backup resource type in SearchAllResources and SearchAllIamPolicies.

## Extended Definition

Cloud Asset Inventory now exposes the Filestore Backup resource type in SearchAllResources and SearchAllIamPolicies.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)

## Supporting Pages

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- You can use these asset types with the following Cloud Asset Inventory operations: Export to BigQuery Export to Cloud Storage List assets Monitor asset changes with Pub/Sub Query assets with SQL Search for resources Search resources for IAM allow policies You might also need to make use of asset names associated with these asset types when working with Cloud Asset Inventory.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .
- API reference workflows. googleapis. com/ Workflow Policy types Cloud Asset Inventory uses the following asset types for the ACCESS POLICY , IAM POLICY , and ORG POLICY content types .
- Home Documentation Security Cloud Asset Inventory Reference Send feedback Asset types Stay organized with collections Save and categorize content based on your preferences.

### Method: searchAllResources | Cloud Asset Inventory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `feature-recovery-direct-http`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- Method: searchAllResources | Cloud Asset Inventory | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Cloud Asset Inventory Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Cloud Asset Inventory Asset types Asset names Relationship types Search query syntax Legacy fields APIs and gcloud Client libraries REST reference Overview v1 TopLevel analyzeIamPolicy analyzeIamPolicyLongrunning analyzeMove analyzeOrgPolicies analyzeOrgPolicyGovernedAssets analyzeOrgPolicyGovernedContainers batchGetAssetsHistory exportAssets queryAssets searchAllIamPolicies searchAllResources REST Resources assets Overview list effectiveIamPolicies Overview batchGet feeds Overview create delete get list patch operations Overview get savedQueries Overview create delete get list patch Types AnalyzerOrgPolicy AnalyzerOrgPolicyConstraint Asset AssetException ConditionEvaluation EffectiveTagDetails Tag TimeWindow v1p1beta1 REST Resources iamPolicies Overview searchAll resources Overview searchAll v1p2beta1 REST Resources feeds Overview create delete get list patch operations Overview get v1p7beta1 TopLevel exportAssets REST Resources operations Overview get Common types Types AuditConfig Binding GetOperationRequest LogType Operation Policy RPC reference Overview google.cloud.asset.v1 google.cloud.asset.v1p1beta1 google.cloud.asset.v1p2beta1 google.cloud.asset.v1p7beta1 google.cloud.orgpolicy.v1 google.cloud.osconfig.v1 google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.longrunning google.rpc google.type gcloud reference AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Cloud Asset Inventory Reference Send feedback Method: searchAllResources Stay organized with collections Save and categorize content based on your preferences.
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE_OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource_owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource_owners" } parentAssetType string The type of this resource's immediate parent, if there is one.
- The allowed values are: projects/{PROJECT_ID} (e.g., "projects/foo-bar") projects/{PROJECT_NUMBER} (e.g., "projects/12345678") folders/{FOLDER_NUMBER} (e.g., "folders/1234567") organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456") Authorization requires the following IAM permission on the specified resource scope : cloudasset.assets.searchAllResources Query parameters Parameters query string Optional.
- The caller must be granted the cloudasset.assets.searchAllResources permission on the desired scope, otherwise the request will be rejected.

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Asset\V1\Client\AssetServiceClient; use Google\Cloud\Asset\V1\SearchAllResourcesRequest; / @param string $scope Scope of the search @param string $query (Optional) Query statement @param string[] $assetTypes (Optional) Asset types to search for @param int $pageSize (Optional) Size of each result page @param string $pageToken (Optional) Token produced by the preceding call @param string $orderBy (Optional) Fields to sort the results / function search all resources( string $scope, string $query = '', array $assetTypes = [], int $pageSize = 0, string $pageToken = '', string $orderBy = '' ): void { // Instantiate a client. $asset = new AssetServiceClient(); // Run request $request = (new SearchAllResourcesRequest()) ->setScope($scope) ->setQuery($query) ->setAssetTypes($assetTypes) ->setPageSize($pageSize) ->setPageToken($pageToken) ->setOrderBy($orderBy); $response = $asset->searchAllResources($request); // Print the resource names in the first page of the result foreach ($response->getPage() as $resource) { print($resource->getName() .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "location:us- ", "readMask": "name,assetType,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances that are running The following sample shows how to search for Compute Engine instances that are running in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "state=RUNNING" \ --asset-types = compute.googleapis.com/Instance \ --read-mask = "name,assetType,location,versionedResources" \ --format = "table(name, assetType, location, versionedResources)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "createTime>2023-31-12", "readMask": "name,assetType,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances located in the US The following sample shows how to search for Compute Engine instances in the my-project project that are located in the US. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "location:us- " \ --asset-types = compute.googleapis.com/Instance \ --format = "table(name, assetType, location)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const scope = ''; // const query = ''; // const assetTypes = []; // const pageSize = 0; // const pageToken = ''; // const orderBy = ''; const util = require ( 'util' ); const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); const projectId = await client . getProjectId (); async function searchAllResources () { const request = { scope : projects/ ${ projectId } , query : query , assetTypes : assetTypes , pageSize : pageSize , pageToken : pageToken , orderBy : orderBy , }; const options = { autoPaginate : false , }; // Handle the operation using the promise pattern. const result = await client . searchAllResources ( request , options ); // Do things with with the response. console . log ( util . inspect ( result , { depth : null })); } PHP To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

