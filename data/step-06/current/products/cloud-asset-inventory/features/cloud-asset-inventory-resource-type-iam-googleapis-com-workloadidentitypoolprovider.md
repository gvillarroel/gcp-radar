---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.223Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory resource type iam.googleapis.com/WorkloadIdentityPoolProvider"
feature_slug: "cloud-asset-inventory-resource-type-iam-googleapis-com-workloadidentitypoolprovider"
latest_feature_date: "2025-09-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies"
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
keywords:
  - "asset"
  - "inventory"
  - "resource"
  - "type"
  - "iam"
  - "googleapis"
  - "com"
  - "workloadidentitypoolprovider"
---

# Cloud Asset Inventory resource type iam.googleapis.com/WorkloadIdentityPoolProvider

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory now supports the resource type iam.googleapis.com/WorkloadIdentityPoolProvider through the ExportAssets, ListAssets, BatchGetAssetsHistory, QueryAssets, Feed, and Search (SearchAllResources, SearchAllIamPolicies) APIs.

## Extended Definition

Cloud Asset Inventory now supports the resource type iam.googleapis.com/WorkloadIdentityPoolProvider through the ExportAssets, ListAssets, BatchGetAssetsHistory, QueryAssets, Feed, and Search (SearchAllResources, SearchAllIamPolicies) APIs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies](https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies)
- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)

## Supporting Pages

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .
- API reference workflows. googleapis. com/ Workflow Policy types Cloud Asset Inventory uses the following asset types for the ACCESS POLICY , IAM POLICY , and ORG POLICY content types .
- Blockchain Node Engine API reference blockchainnodeengine. googleapis. com/ BlockchainNode Certificate Authority Service API reference privateca. googleapis. com/ CaPool privateca. googleapis. com/ Certificate privateca. googleapis. com/ CertificateAuthority privateca. googleapis. com/ CertificateRevocationList IAM policies might be missing for this asset type. privateca. googleapis. com/ CertificateTemplate Certificate Manager API reference certificatemanager. googleapis. com/ Certificate Not available in the analysis APIs. certificatemanager. googleapis. com/ CertificateIssuanceConfig Not available in the analysis APIs. certificatemanager. googleapis. com/ CertificateMap Not available in the analysis APIs. certificatemanager. googleapis. com/ CertificateMapEntry Not available in the analysis APIs. certificatemanager. googleapis. com/ DnsAuthorization Not available in the analysis APIs. certificatemanager. googleapis. com/ TrustConfig Not available in the analysis APIs.
- You can use these asset types with the following Cloud Asset Inventory operations: Export to BigQuery Export to Cloud Storage List assets Monitor asset changes with Pub/Sub Query assets with SQL Search for resources Search resources for IAM allow policies You might also need to make use of asset names associated with these asset types when working with Cloud Asset Inventory.

### "Search for IAM allow policies on resources \_|\_ Cloud Asset Inventory \_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies](https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "query": "policy:\"user: alex@example.com \"", "assetTypes": ["compute.googleapis.com/Instance"], "orderBy": "resource DESC" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies" Select-Object -Expand Content Example response { "resource" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/debian" , "project" : "projects/0000000000000" , "policy" : { "bindings" : [ { "role" : "roles/compute.viewer" , "members" : [ "user:alex@example.com" ] }, { "role" : "roles/editor" , "members" : [ "user:alex@example.com" ] }, { "role" : "roles/owner" , "members" : [ "user:alex@example.com" ] } ] }, "assetType" : "compute.googleapis.com/Instance" , "folders" : [ "folders/0000000000000" ], "organization" : "organizations/0000000000000" } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "cloudresourcemanager. ", "pageSize": 1, "query": "policy: alex@example.com policy.role.permissions:\"\"" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies" Select-Object -Expand Content Principals who can access Cloud Storage buckets The following sample shows how to search for principals who can access Cloud Storage buckets in the my-project project. gcloud gcloud asset search-all-iam-policies \ --scope = projects/ my-project \ --query = "policy.role.permissions:storage.buckets" \ --asset-types = cloudresourcemanager. \ --flatten = "policy.bindings[].members[]" \ --format = "table(policy.bindings.members)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies Note : You can use a GET method for this request with parameters as a query string.
- The results are in descending order by resource ( resource DESC ). gcloud asset search-all-iam-policies \ --scope = projects/my-project \ --query = "policy:\"user: alex@example.com \"" \ --asset-types = compute.googleapis.com/Instance \ --order-by = "resource DESC" Example response --- assetType: compute.googleapis.com/Instance folders: - folders/0000000000000 organization: organizations/0000000000000 policy: bindings: - members: - user:alex@example.com role: roles/compute.viewer - members: - user:alex@example.com role: roles/editor - members: - user:alex@example.com role: roles/owner project: projects/0000000000000 resource: //compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/debian REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :searchAllIamPolicies Note : You can use a GET method for this request with parameters as a query string.
- The organization ID is shown next to the organization name. gcloud CLI You can retrieve the ID of a Google Cloud organization with the following command: gcloud organizations describe ORGANIZATION NAME --format = "value(name.segment(1))" gcloud This example makes use of the grep command, which is available in Cloud Shell and Unix-like operating systems. gcloud asset search-all-iam-policies \ --scope = organizations/ my-organization-id \ --query = "policy:(roles/owner serviceAccount)" \ --flatten = "policy.bindings[].members[]" \ --format = "table(resource.segment(3):label=RESOURCE TYPE, resource.basename():label=RESOURCE, policy.bindings.members)" grep serviceAccount REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/organizations/ my-organization-id :searchAllIamPolicies Note : You can use a GET method for this request with parameters as a query string.

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "state=RUNNING", "readMask": "name,assetType,location,versionedResources" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content IAM deny policies The following sample shows how to search for IAM deny policies in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --asset-types = iam.googleapis.com/PolicyV2 \ --query = "name:denypolicies" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "query": "name:instance 1", "assetTypes": ["compute.googleapis.com/Instance"], "orderBy": "name DESC", "readMask": "name,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Example response { "results" : [ { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-2-1" , "location" : "us-central1-a" }, { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-1" , "location" : "us-central1-a" } ] } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content To search for Compute Engine instances that aren't running, replace state=RUNNING with NOT state:running .
- You can check the active account by running gcloud auth list . curl -X POST \ -H "X-HTTP-Method-Override: GET" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" }' \ https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

