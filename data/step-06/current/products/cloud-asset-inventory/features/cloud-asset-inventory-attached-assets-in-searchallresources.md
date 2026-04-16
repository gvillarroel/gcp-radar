---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.528Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory attached assets in SearchAllResources"
feature_slug: "cloud-asset-inventory-attached-assets-in-searchallresources"
latest_feature_date: "2021-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
keywords:
  - "attached"
  - "querying"
  - "assets"
  - "searchallresources"
  - "supports"
---

# Cloud Asset Inventory attached assets in SearchAllResources

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now supports querying attached assets directly in SearchAllResources, enabling combined filtering on primary and attached resources.

## Extended Definition

Cloud Asset Inventory now supports querying attached assets directly in SearchAllResources, enabling combined filtering on primary and attached resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)

## Supporting Pages

### Method: searchAllResources | Cloud Asset Inventory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `feature-recovery-direct-http`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- Method: searchAllResources | Cloud Asset Inventory | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español – América Latina Français Português – Brasil 中文 – 简体 日本語 한국어 Sign in Cloud Asset Inventory Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Cloud Asset Inventory Asset types Asset names Relationship types Search query syntax Legacy fields APIs and gcloud Client libraries REST reference Overview v1 TopLevel analyzeIamPolicy analyzeIamPolicyLongrunning analyzeMove analyzeOrgPolicies analyzeOrgPolicyGovernedAssets analyzeOrgPolicyGovernedContainers batchGetAssetsHistory exportAssets queryAssets searchAllIamPolicies searchAllResources REST Resources assets Overview list effectiveIamPolicies Overview batchGet feeds Overview create delete get list patch operations Overview get savedQueries Overview create delete get list patch Types AnalyzerOrgPolicy AnalyzerOrgPolicyConstraint Asset AssetException ConditionEvaluation EffectiveTagDetails Tag TimeWindow v1p1beta1 REST Resources iamPolicies Overview searchAll resources Overview searchAll v1p2beta1 REST Resources feeds Overview create delete get list patch operations Overview get v1p7beta1 TopLevel exportAssets REST Resources operations Overview get Common types Types AuditConfig Binding GetOperationRequest LogType Operation Policy RPC reference Overview google.cloud.asset.v1 google.cloud.asset.v1p1beta1 google.cloud.asset.v1p2beta1 google.cloud.asset.v1p7beta1 google.cloud.orgpolicy.v1 google.cloud.osconfig.v1 google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.longrunning google.rpc google.type gcloud reference AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Cloud Asset Inventory Reference Send feedback Method: searchAllResources Stay organized with collections Save and categorize content based on your preferences.
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE_OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource_owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource_owners" } parentAssetType string The type of this resource's immediate parent, if there is one.
- The allowed values are: projects/{PROJECT_ID} (e.g., "projects/foo-bar") projects/{PROJECT_NUMBER} (e.g., "projects/12345678") folders/{FOLDER_NUMBER} (e.g., "folders/1234567") organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456") Authorization requires the following IAM permission on the specified resource scope : cloudasset.assets.searchAllResources Query parameters Parameters query string Optional.
- The caller must be granted the cloudasset.assets.searchAllResources permission on the desired scope, otherwise the request will be rejected.

### Asset types | Cloud Asset Inventory | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `feature-recovery-direct-http`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Asset types | Cloud Asset Inventory | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Cloud Asset Inventory Start free Overview Guides Reference Resources Technology areas More Overview Guides Reference Resources Cross-product tools More Console Cloud Asset Inventory Asset types Asset names Relationship types Search query syntax Legacy fields APIs and gcloud Client libraries REST reference Overview v1 TopLevel analyzeIamPolicy analyzeIamPolicyLongrunning analyzeMove analyzeOrgPolicies analyzeOrgPolicyGovernedAssets analyzeOrgPolicyGovernedContainers batchGetAssetsHistory exportAssets queryAssets searchAllIamPolicies searchAllResources REST Resources assets Overview list effectiveIamPolicies Overview batchGet feeds Overview create delete get list patch operations Overview get savedQueries Overview create delete get list patch Types AnalyzerOrgPolicy AnalyzerOrgPolicyConstraint Asset AssetException ConditionEvaluation EffectiveTagDetails Tag TimeWindow v1p1beta1 REST Resources iamPolicies Overview searchAll resources Overview searchAll v1p2beta1 REST Resources feeds Overview create delete get list patch operations Overview get v1p7beta1 TopLevel exportAssets REST Resources operations Overview get Common types Types AuditConfig Binding GetOperationRequest LogType Operation Policy RPC reference Overview google.cloud.asset.v1 google.cloud.asset.v1p1beta1 google.cloud.asset.v1p2beta1 google.cloud.asset.v1p7beta1 google.cloud.orgpolicy.v1 google.cloud.osconfig.v1 google.iam.v1 google.identity.accesscontextmanager.type google.identity.accesscontextmanager.v1 google.longrunning google.rpc google.type gcloud reference AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Security Cloud Asset Inventory Reference Send feedback Asset types Stay organized with collections Save and categorize content based on your preferences.
- You can use these asset types with the following Cloud Asset Inventory operations: Export to BigQuery Export to Cloud Storage List assets Monitor asset changes with Pub/Sub Query assets with SQL Search for resources Search resources for IAM allow policies You might also need to make use of asset names associated with these asset types when working with Cloud Asset Inventory.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS_INVENTORY content type .
- API reference Supported resource types that IAM policies can be attached to: All asset types in supported resource types .

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Asset\V1\Client\AssetServiceClient; use Google\Cloud\Asset\V1\SearchAllResourcesRequest; / @param string $scope Scope of the search @param string $query (Optional) Query statement @param string[] $assetTypes (Optional) Asset types to search for @param int $pageSize (Optional) Size of each result page @param string $pageToken (Optional) Token produced by the preceding call @param string $orderBy (Optional) Fields to sort the results / function search all resources( string $scope, string $query = '', array $assetTypes = [], int $pageSize = 0, string $pageToken = '', string $orderBy = '' ): void { // Instantiate a client. $asset = new AssetServiceClient(); // Run request $request = (new SearchAllResourcesRequest()) ->setScope($scope) ->setQuery($query) ->setAssetTypes($assetTypes) ->setPageSize($pageSize) ->setPageToken($pageToken) ->setOrderBy($orderBy); $response = $asset->searchAllResources($request); // Print the resource names in the first page of the result foreach ($response->getPage() as $resource) { print($resource->getName() .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const scope = ''; // const query = ''; // const assetTypes = []; // const pageSize = 0; // const pageToken = ''; // const orderBy = ''; const util = require ( 'util' ); const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); const projectId = await client . getProjectId (); async function searchAllResources () { const request = { scope : projects/ ${ projectId } , query : query , assetTypes : assetTypes , pageSize : pageSize , pageToken : pageToken , orderBy : orderBy , }; const options = { autoPaginate : false , }; // Handle the operation using the promise pattern. const result = await client . searchAllResources ( request , options ); // Do things with with the response. console . log ( util . inspect ( result , { depth : null })); } PHP To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( AssetServiceClient client = AssetServiceClient . create ()) { SearchAllResourcesPagedResponse response = client . searchAllResources ( request ); System . out . println ( "Search completed successfully:\n" + response . getPage (). getValues ()); } catch ( IOException e ) { System . out . println ( String . format ( "Failed to create client:%n%s" , e . toString ())); } catch ( InvalidArgumentException e ) { System . out . println ( String . format ( "Invalid request:%n%s" , e . toString ())); } catch ( ApiException e ) { System . out . println ( String . format ( "Error during SearchAllResources:%n%s" , e . toString ())); } } } Node.js To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "tagKeys:env", "readMask": "name,assetType,tags" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances by TagValue The following sample shows how to search for Compute Engine instances in the my-project project that have directly attached Tags where the TagValue . namespacedName contains prod or sea , and the instance name does not contain instance1 .

