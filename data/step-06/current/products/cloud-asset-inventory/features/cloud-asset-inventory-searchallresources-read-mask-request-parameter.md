---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:39.026Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory SearchAllResources read_mask request parameter"
feature_slug: "cloud-asset-inventory-searchallresources-read-mask-request-parameter"
latest_feature_date: "2021-07-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
  - "https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes"
keywords:
  - "asset"
  - "inventory"
  - "searchallresources"
  - "read"
  - "mask"
  - "request"
  - "parameter"
  - "adds"
---

# Cloud Asset Inventory SearchAllResources read_mask request parameter

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory adds the SearchAllResources read_mask request parameter to let callers select which fields are returned.

## Extended Definition

Cloud Asset Inventory adds the SearchAllResources read_mask request parameter to let callers select which fields are returned.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)

## Supporting Pages

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource owners" } parentAssetType string The type of this resource's immediate parent, if there is one.
- The following fields are returned by default if not specified: name assetType project folders organization displayName description location labels tags effectiveTags networkTags kmsKeys createTime updateTime state additionalAttributes parentFullResourceName parentAssetType Some fields of large size, such as versionedResources , attachedResources , effectiveTags etc., are not returned by default, but you can specify them in the readMask parameter if you want to include them.
- The allowed values are: projects/{PROJECT ID} (e.g., "projects/foo-bar") projects/{PROJECT NUMBER} (e.g., "projects/12345678") folders/{FOLDER NUMBER} (e.g., "folders/1234567") organizations/{ORGANIZATION NUMBER} (e.g., "organizations/123456") Authorization requires the following IAM permission on the specified resource scope : cloudasset.assets.searchAllResources Query parameters Parameters query string Optional.
- HTTP request Path parameters Query parameters Request body Response body JSON representation Authorization scopes ResourceSearchResult JSON representation VersionedResource JSON representation AttachedResource JSON representation RelatedResources JSON representation RelatedResource JSON representation AssetEnrichment JSON representation ResourceOwners JSON representation Try it!

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "location:us- ", "readMask": "name,assetType,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances that are running The following sample shows how to search for Compute Engine instances that are running in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "state=RUNNING" \ --asset-types = compute.googleapis.com/Instance \ --read-mask = "name,assetType,location,versionedResources" \ --format = "table(name, assetType, location, versionedResources)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "createTime>2023-31-12", "readMask": "name,assetType,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances located in the US The following sample shows how to search for Compute Engine instances in the my-project project that are located in the US. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "location:us- " \ --asset-types = compute.googleapis.com/Instance \ --format = "table(name, assetType, location)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "state=RUNNING", "readMask": "name,assetType,location,versionedResources" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content IAM deny policies The following sample shows how to search for IAM deny policies in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --asset-types = iam.googleapis.com/PolicyV2 \ --query = "name:denypolicies" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "query": "name:instance 1", "assetTypes": ["compute.googleapis.com/Instance"], "orderBy": "name DESC", "readMask": "name,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Example response { "results" : [ { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-2-1" , "location" : "us-central1-a" }, { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-1" , "location" : "us-central1-a" } ] } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

### "Monitor asset changes with Pub/Sub \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "feed": { "assetNames": [], "assetTypes": [ "gkemulticloud.googleapis.com/AttachedCluster" ], "feedOutputConfig": { "pubsubDestination": { "topic": "projects/my-project/topics/my-topic" } } }, "update mask": { "paths": ["feed output config.pubsub destination.topic", "asset names", "asset types"] } } "@ Invoke-WebRequest -Method PATCH -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds/ my-feed " Select-Object -Expand Content Example response { "feeds" : [ { "name" : "projects/000000000000/feeds/my-feed" , "assetTypes" : [ "bigquery.googleapis.com/Table" , "gkemulticloud.googleapis.com/AttachedCluster" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } ] } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- For more information, see Set up authentication for a local development environment . const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); // example inputs: // const fullQueryName = 'folders/<FOLDER NUMBER>/savedQueries/<QUERY ID>'; // const description = 'a new description'; async function updateSavedQuery () { const request = { savedQuery : { name : fullQueryName , description : description , }, updateMask : { paths : [ 'description' ], }, }; // Handle the operation using the promise pattern. const [ query ] = await client . updateSavedQuery ( request ); // Do things with with the response. console . log ( 'Query name:' , query . name ); console . log ( 'Query description:' , query . description ); console . log ( 'Created time:' , query . createTime ); console . log ( 'Updated time:' , query . lastUpdateTime ); console . log ( 'Query type:' , query . content . queryContent ); console . log ( 'Query content:' , JSON . stringify ( query . content , null , 4 )); Python To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- This request removes all asset names from monitoring, and adds the asset type gkemulticloud.googleapis.com/AttachedCluster . gcloud asset feeds update my-feed \ --project = my-project \ --pubsub-topic = projects/ my-project /topics/ my-topic \ --clear-asset-names \ --add-asset-types = gkemulticloud.googleapis.com/AttachedCluster Example response assetTypes: - bigquery.googleapis.com/Table - gkemulticloud.googleapis.com/AttachedCluster condition: {} contentType: RESOURCE feedOutputConfig: pubsubDestination: topic: projects/my-project/topics/my-topic name: projects/000000000000/feeds/my-feed To update the attributes of a feed, you need to specify the attribute path in the update mask and the value of that attribute.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const feedId = 'my feed'; // const assetNames = '//storage.googleapis.com/<BUCKET NAME1>,//storage.googleapis.com/<BUCKET NAME2>'; // const topicName = 'projects/<PROJECT ID>/topics/<TOPIC ID>' // const contentType = 'RESOURCE'; const util = require ( 'util' ); const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); async function createFeed () { const projectId = await client . getProjectId (); // TODO(developer): Choose asset names, such as //storage.googleapis.com/[YOUR BUCKET NAME]. // const assetNames = ['ASSET NAME1', 'ASSET NAME2', ...]; const request = { parent : projects/ ${ projectId } , feedId : feedId , feed : { assetNames : assetNames . split ( ',' ), contentType : contentType , feedOutputConfig : { pubsubDestination : { topic : topicName , }, }, }, }; // Handle the operation using the promise pattern. const result = await client . createFeed ( request ); // Do things with with the response. console . log ( util . inspect ( result , { depth : null })); Python To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

