---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:39.128Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory: folders searchable field in SearchAllResources"
feature_slug: "cloud-asset-inventory-folders-searchable-field-in-searchallresources"
latest_feature_date: "2021-02-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-insights"
  - "https://docs.cloud.google.com/asset-inventory/docs/list-assets"
keywords:
  - "asset"
  - "inventory"
  - "folders"
  - "searchable"
  - "field"
  - "in"
  - "searchallresources"
  - "is"
---

# Cloud Asset Inventory: folders searchable field in SearchAllResources

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Folders is now a searchable field in Cloud Asset Inventory's SearchAllResources API.

## Extended Definition

Folders is now a searchable field in Cloud Asset Inventory's SearchAllResources API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/asset-inventory/docs/asset-insights](https://docs.cloud.google.com/asset-inventory/docs/asset-insights)
- [https://docs.cloud.google.com/asset-inventory/docs/list-assets](https://docs.cloud.google.com/asset-inventory/docs/list-assets)

## Supporting Pages

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "name" : string , "assetType" : string , "project" : string , "folders" : [ string ] , "organization" : string , "displayName" : string , "description" : string , "location" : string , "labels" : { string : string , ... } , "networkTags" : [ string ] , "kmsKey" : string , "kmsKeys" : [ string ] , "createTime" : string , "updateTime" : string , "state" : string , "additionalAttributes" : { object } , "parentFullResourceName" : string , "versionedResources" : [ { object ( VersionedResource ) } ] , "attachedResources" : [ { object ( AttachedResource ) } ] , "relationships" : { string : { object ( RelatedResources ) } , ... } , "tagKeys" : [ string ] , "tagValues" : [ string ] , "tagValueIds" : [ string ] , "tags" : [ { object ( Tag ) } ] , "effectiveTags" : [ { object ( EffectiveTagDetails ) } ] , "enrichments" : [ { object ( AssetEnrichment ) } ] , "parentAssetType" : string , "sccSecurityMarks" : { string : string , ... } } Fields name string The full resource name of this resource.
- The following fields are returned by default if not specified: name assetType project folders organization displayName description location labels tags effectiveTags networkTags kmsKeys createTime updateTime state additionalAttributes parentFullResourceName parentAssetType Some fields of large size, such as versionedResources , attachedResources , effectiveTags etc., are not returned by default, but you can specify them in the readMask parameter if you want to include them.
- The allowed values are: projects/{PROJECT ID} (e.g., "projects/foo-bar") projects/{PROJECT NUMBER} (e.g., "projects/12345678") folders/{FOLDER NUMBER} (e.g., "folders/1234567") organizations/{ORGANIZATION NUMBER} (e.g., "organizations/123456") Authorization requires the following IAM permission on the specified resource scope : cloudasset.assets.searchAllResources Query parameters Parameters query string Optional.
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource owners" } parentAssetType string The type of this resource's immediate parent, if there is one.

### "Improve your security posture with asset insights \_|\_ Cloud Asset Inventory\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-insights](https://docs.cloud.google.com/asset-inventory/docs/asset-insights)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This field is included for all asset insight subtypes. policySearchQuery : A query which can be used with the Cloud Asset Inventory IAM policy search API to retrieve the relevant policies in real time.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://recommender.googleapis.com/v1/projects/ my-project /locations/global/insightTypes/google.cloudasset.asset.Insight/insights" Select-Object -Expand Content Example response { "name" : "organizations/000000000000/locations/global/insightTypes/google.cloudasset.asset.Insight/insights/00000000-0000-0000-0000-000000000000" , "description" : "Domain example.com detected in 1 IAM policies" , "content" : { "domain" : "example.com" , "policyCount" : 1 , "policySearchQuery" : "policy: example.com" , "matchedPolicies" :[ { "resource" : "//cloudresourcemanager.googleapis.com/projects/000000000000" , "project" : "projects/000000000000" , "matchedBindings" :[ { "role" : "roles/viewer" , "matchedMembers" :[ "user:example@example.com" ] } ] } ] }, "lastRefreshTime" : "2024-01-30T00:00:00Z" , "observationPeriod" : "0s" , "stateInfo" : { "state" : "ACTIVE" }, "category" : "SECURITY" , "targetResources" : [ "//cloudresourcemanager.googleapis.com/organizations/000000000000" ], "insightSubtype" : "EXTERNAL MEMBER" , "etag" : "\"00000000000\"" , "initialRefreshTime" : "2024-01-30T00:00:00Z" } Interpreting insight responses In addition to the standard insight attributes , asset insights provide several specialized subtypes and fields.
- The organization ID is shown next to the organization name. gcloud CLI You can retrieve the ID of a Google Cloud organization with the following command: gcloud organizations describe ORGANIZATION NAME --format = "value(name.segment(1))" BILLING PROJECT ID : The project ID that the default Cloud Asset Inventory service agent is in that has permissions to manage your billing and quota.
- Additional content fields In addition to the standard fields in the response, asset insights provide several specialized fields in the content field. user : The user email address detected in the members of the policy bindings for this insight.

### List assets \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/list-assets](https://docs.cloud.google.com/asset-inventory/docs/list-assets)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": ["compute.googleapis.com/Instance"], "contentType": "RESOURCE", "readTime": " 2024-01-30T00:00:00Z " } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /assets" Select-Object -Expand Content Example response { "readTime" : "2024-01-30T00:00:00Z" , "assets" : [ { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-name" , "assetType" : "compute.googleapis.com/Instance" , "resource" : { "version" : "v1" , "discoveryDocumentUri" : "https://www.googleapis.com/discovery/v1/apis/compute/v1/rest?version=v1" , "discoveryName" : "Instance" , "parent" : "//cloudresourcemanager.googleapis.com/projects/000000000000" , "data" : { ASSET METADATA }, "location" : "us-central1-a" }, "ancestors" : [ "projects/000000000000" , "folders/000000000000" , "organizations/000000000000" ], "updateTime" : "2024-01-30T00:00:00.000000Z" } ] } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- AssetServiceClient (); const projectId = await client . getProjectId (); const projectResource = projects/ ${ projectId } ` ; // TODO(developer): Choose types of assets to list, such as 'storage.googleapis.com/Bucket': // const assetTypes = 'storage.googleapis.com/Bucket,bigquery.googleapis.com/Table'; // Or simply use empty string to list all types of assets: // const assetTypes = ''; const assetTypesList = assetTypes ? assetTypes . split ( ',' ) : []; async function listAssets () { const request = { parent : projectResource , assetTypes : assetTypesList , contentType : contentType , // (Optional) Add readTime parameter to list assets at the given time instead of current time: // readTime: { seconds: 1593988758 }, }; // Call cloud.assets.v1.ListAssets API. const result = await client . listAssets ( request ); // Handle the response. console . log ( util . inspect ( result , { depth : null })); } listAssets (); PHP To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- Before running this command, make sure to change the snapshot time to be within the last 35 days, and change the project name. gcloud asset list \ --project = my-project \ --asset-types = compute.googleapis.com/Instance \ --content-type = resource \ --snapshot-time = " 2024-01-30 " Example response --- ancestors: - projects/000000000000 - folders/000000000000 - organizations/000000000000 assetType: compute.googleapis.com/Instance name: //compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-name resource: data: ASSET METADATA updateTime: '2024-01-30T00:00:00.000000Z' REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH /assets Note : You can use a GET method for this request with parameters as a query string.
- ListAssetsPagedResponse response = client . listAssets ( request ); System . out . println ( response ); while ( ! response . getNextPageToken (). isEmpty ()) { request = request . toBuilder (). setPageToken ( response . getNextPageToken ()). build (); response = client . listAssets ( request ); System . out . println ( response ); } } } } Node.js To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

