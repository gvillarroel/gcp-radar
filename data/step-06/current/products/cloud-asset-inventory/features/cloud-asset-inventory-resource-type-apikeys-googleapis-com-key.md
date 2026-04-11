---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.790Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory resource type: apikeys.googleapis.com/Key"
feature_slug: "cloud-asset-inventory-resource-type-apikeys-googleapis-com-key"
latest_feature_date: "2022-06-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
keywords:
  - "asset"
  - "inventory"
  - "resource"
  - "type"
  - "apikeys"
  - "googleapis"
  - "com"
  - "key"
---

# Cloud Asset Inventory resource type: apikeys.googleapis.com/Key

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

The API Key resource type is now publicly available in AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning; The API Key resource type is now publicly available via ExportAssets, BatchGetAssetsHistory, Feed API, SearchAllResources, and SearchAllIamPolicies.

## Extended Definition

The API Key resource type is now publicly available in AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning; The API Key resource type is now publicly available via ExportAssets, BatchGetAssetsHistory, Feed API, SearchAllResources, and SearchAllIamPolicies.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)

## Supporting Pages

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .
- For details, see Search for resources . cloudresourcemanager. googleapis. com/ TagKey cloudresourcemanager. googleapis. com/ TagValue Retail API API reference retail.googleapis.com/Catalog Secret Manager The location field in the Secret Manager asset does not reflect the replication policy of the secret.
- Service Asset type Access policy (VPC Service Controls policy) API reference Supported policy parent cloudresourcemanager. googleapis. com/ Organization Not available in the analysis APIs.
- API reference workflows. googleapis. com/ Workflow Policy types Cloud Asset Inventory uses the following asset types for the ACCESS POLICY , IAM POLICY , and ORG POLICY content types .

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- Example: osconfig.googleapis.com/Inventory You can find the supported attached asset types of each resource in this table: https://cloud.google.com/asset-inventory/docs/supported-asset-types versionedResources[] object ( VersionedResource ) Versioned resource representations of this attached resource.
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource owners" } parentAssetType string The type of this resource's immediate parent, if there is one.
- You can find the resource definition for each supported resource type in this table: https://cloud.google.com/asset-inventory/docs/supported-asset-types assetExceptions[] object ( AssetException ) The exceptions of a resource.
- Example: cloudresourcemanager.googleapis.com/Project sccSecurityMarks map (key: string, value: string) The actual content of Security Command Center security marks associated with the asset.

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "query": "name:instance 1", "assetTypes": ["compute.googleapis.com/Instance"], "orderBy": "name DESC", "readMask": "name,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Example response { "results" : [ { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-2-1" , "location" : "us-central1-a" }, { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-1" , "location" : "us-central1-a" } ] } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "tagKeys:env", "readMask": "name,assetType,tags" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances by TagValue The following sample shows how to search for Compute Engine instances in the my-project project that have directly attached Tags where the TagValue . namespacedName contains prod or sea , and the instance name does not contain instance1 .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "labels.env: ", "readMask": "name,assetType,labels" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances by TagKey The following sample shows how to search for Compute Engine instances in the my-project project that have directly attached Tags with a TagKey . namespacedName containing env .
- You can check the active account by running gcloud auth list . curl -X POST \ -H "X-HTTP-Method-Override: GET" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "tagKeys:env", "readMask": "name,assetType,tags" }' \ https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

