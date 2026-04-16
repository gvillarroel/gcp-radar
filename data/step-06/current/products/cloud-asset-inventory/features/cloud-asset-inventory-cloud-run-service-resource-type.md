---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.782Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory Cloud Run Service resource type"
feature_slug: "cloud-asset-inventory-cloud-run-service-resource-type"
latest_feature_date: "2020-07-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies"
  - "https://docs.cloud.google.com/asset-inventory/docs/searching-iam-policies"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
keywords:
  - "resource"
  - "exposes"
  - "through"
  - "type"
---

# Cloud Asset Inventory Cloud Run Service resource type

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now exposes the Cloud Run Service resource type through its Cloud Asset APIs.

## Extended Definition

Cloud Asset Inventory now exposes the Cloud Run Service resource type through its Cloud Asset APIs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies](https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies)
- [https://docs.cloud.google.com/asset-inventory/docs/searching-iam-policies](https://docs.cloud.google.com/asset-inventory/docs/searching-iam-policies)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)

## Supporting Pages

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "assetType" : string , "project" : string , "folders" : [ string ] , "organization" : string , "displayName" : string , "description" : string , "location" : string , "labels" : { string : string , ... } , "networkTags" : [ string ] , "kmsKey" : string , "kmsKeys" : [ string ] , "createTime" : string , "updateTime" : string , "state" : string , "additionalAttributes" : { object } , "parentFullResourceName" : string , "versionedResources" : [ { object ( VersionedResource ) } ] , "attachedResources" : [ { object ( AttachedResource ) } ] , "relationships" : { string : { object ( RelatedResources ) } , ... } , "tagKeys" : [ string ] , "tagValues" : [ string ] , "tagValueIds" : [ string ] , "tags" : [ { object ( Tag ) } ] , "effectiveTags" : [ { object ( EffectiveTagDetails ) } ] , "enrichments" : [ { object ( AssetEnrichment ) } ] , "parentAssetType" : string , "sccSecurityMarks" : { string : string , ... } } Fields name string The full resource name of this resource.
- Use the kmsKeys field to retrieve Cloud KMS key information. kmsKeys:key to find Google Cloud resources encrypted with customer-managed encryption keys whose name contains the word key . relationships:instance-group-1 to find Google Cloud resources that have relationships with instance-group-1 in the related resource name. relationships:INSTANCE TO INSTANCEGROUP to find Compute Engine instances that have relationships of type INSTANCE TO INSTANCEGROUP . relationships.INSTANCE TO INSTANCEGROUP:instance-group-1 to find Compute Engine instances that have relationships with instance-group-1 in the Compute Engine instance group resource name, for relationship type INSTANCE TO INSTANCEGROUP . sccSecurityMarks.key=value to find Cloud resources that are attached with security marks whose key is key and value is value . sccSecurityMarks.key: to find Cloud resources that are attached with security marks whose key is key . state:ACTIVE to find Google Cloud resources whose state contains ACTIVE as a word.
- Currently supported enrichment types with v1.searchAllResources API: RESOURCE OWNERS The corresponding read masks in order to get the enrichment: enrichments.resource owners The corresponding required permissions: cloudasset.assets.searchEnrichmentResourceOwners Example query to get resource owner enrichment: scope: "projects/my-project" query: "name: my-project" assetTypes: "cloudresourcemanager.googleapis.com/Project" readMask: { paths: "assetType" paths: "name" paths: "enrichments.resource owners" } parentAssetType string The type of this resource's immediate parent, if there is one.
- The following fields are returned by default if not specified: name assetType project folders organization displayName description location labels tags effectiveTags networkTags kmsKeys createTime updateTime state additionalAttributes parentFullResourceName parentAssetType Some fields of large size, such as versionedResources , attachedResources , effectiveTags etc., are not returned by default, but you can specify them in the readMask parameter if you want to include them.

### "Search for IAM allow policies on resources \_|\_ Cloud Asset Inventory \_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/searching-iam-policies](https://docs.cloud.google.com/asset-inventory/docs/searching-iam-policies)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- It doesn't include roles that alex@example.com inherited through policy inheritance . gcloud gcloud asset search-all-iam-policies \ --scope = projects/ my-project \ --query = "policy: alex@example.com " \ --asset-types = cloudresourcemanager.googleapis.com/Project \ --flatten = "policy.bindings[]" \ --format = "table(policy.bindings.role)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies Note : You can use a GET method for this request with parameters as a query string.
- It doesn't include permissions that alex@example.com inherited through policy inheritance . gcloud gcloud asset search-all-iam-policies \ --scope = projects/ my-project \ --query = "policy: alex@example.com policy.role.permissions:\"\"" \ --asset-types = cloudresourcemanager. \ --format = "default(explanation.matchedPermissions)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies Note : You can use a GET method for this request with parameters as a query string.
- It doesn't include principals who inherit the Owner role through policy inheritance . gcloud gcloud asset search-all-iam-policies \ --scope = projects/ my-project \ --query = "roles:roles/owner" \ --asset-types = cloudresourcemanager. \ --flatten = "policy.bindings[].members[]" \ --format = "table(policy.bindings.members)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "query": "policy:\"user: alex@example.com \"", "assetTypes": ["compute.googleapis.com/Instance"], "orderBy": "resource DESC" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies" Select-Object -Expand Content Example response { "resource" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/debian" , "project" : "projects/0000000000000" , "policy" : { "bindings" : [ { "role" : "roles/compute.viewer" , "members" : [ "user:alex@example.com" ] }, { "role" : "roles/editor" , "members" : [ "user:alex@example.com" ] }, { "role" : "roles/owner" , "members" : [ "user:alex@example.com" ] } ] }, "assetType" : "compute.googleapis.com/Instance" , "folders" : [ "folders/0000000000000" ], "organization" : "organizations/0000000000000" } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

### "Search for IAM allow policies on resources \_|\_ Cloud Asset Inventory \_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies](https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- It doesn't include roles that alex@example.com inherited through policy inheritance . gcloud gcloud asset search-all-iam-policies \ --scope = projects/ my-project \ --query = "policy: alex@example.com " \ --asset-types = cloudresourcemanager.googleapis.com/Project \ --flatten = "policy.bindings[]" \ --format = "table(policy.bindings.role)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies Note : You can use a GET method for this request with parameters as a query string.
- It doesn't include permissions that alex@example.com inherited through policy inheritance . gcloud gcloud asset search-all-iam-policies \ --scope = projects/ my-project \ --query = "policy: alex@example.com policy.role.permissions:\"\"" \ --asset-types = cloudresourcemanager. \ --format = "default(explanation.matchedPermissions)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies Note : You can use a GET method for this request with parameters as a query string.
- It doesn't include principals who inherit the Owner role through policy inheritance . gcloud gcloud asset search-all-iam-policies \ --scope = projects/ my-project \ --query = "roles:roles/owner" \ --asset-types = cloudresourcemanager. \ --flatten = "policy.bindings[].members[]" \ --format = "table(policy.bindings.members)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "query": "policy:\"user: alex@example.com \"", "assetTypes": ["compute.googleapis.com/Instance"], "orderBy": "resource DESC" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies" Select-Object -Expand Content Example response { "resource" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/debian" , "project" : "projects/0000000000000" , "policy" : { "bindings" : [ { "role" : "roles/compute.viewer" , "members" : [ "user:alex@example.com" ] }, { "role" : "roles/editor" , "members" : [ "user:alex@example.com" ] }, { "role" : "roles/owner" , "members" : [ "user:alex@example.com" ] } ] }, "assetType" : "compute.googleapis.com/Instance" , "folders" : [ "folders/0000000000000" ], "organization" : "organizations/0000000000000" } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

