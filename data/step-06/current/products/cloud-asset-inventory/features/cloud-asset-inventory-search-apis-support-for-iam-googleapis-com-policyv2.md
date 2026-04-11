---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.622Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory Search APIs support for iam.googleapis.com/PolicyV2"
feature_slug: "cloud-asset-inventory-search-apis-support-for-iam-googleapis-com-policyv2"
latest_feature_date: "2023-09-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies"
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllIamPolicies"
keywords:
  - "asset"
  - "inventory"
  - "search"
  - "apis"
  - "for"
  - "iam"
  - "googleapis"
  - "com"
---

# Cloud Asset Inventory Search APIs support for iam.googleapis.com/PolicyV2

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory made IAM PolicyV2 resources publicly searchable through SearchAllResources and SearchAllIamPolicies.

## Extended Definition

Cloud Asset Inventory made IAM PolicyV2 resources publicly searchable through SearchAllResources and SearchAllIamPolicies.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies](https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies)
- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllIamPolicies](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllIamPolicies)

## Supporting Pages

### "Search for IAM allow policies on resources \_|\_ Cloud Asset Inventory \_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies](https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies)
- Source ID: `site-docs-root`
- Final score: 276
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "query": "policy:\"user: alex@example.com \"", "assetTypes": ["compute.googleapis.com/Instance"], "orderBy": "resource DESC" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies" Select-Object -Expand Content Example response { "resource" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/debian" , "project" : "projects/0000000000000" , "policy" : { "bindings" : [ { "role" : "roles/compute.viewer" , "members" : [ "user:alex@example.com" ] }, { "role" : "roles/editor" , "members" : [ "user:alex@example.com" ] }, { "role" : "roles/owner" , "members" : [ "user:alex@example.com" ] } ] }, "assetType" : "compute.googleapis.com/Instance" , "folders" : [ "folders/0000000000000" ], "organization" : "organizations/0000000000000" } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "cloudresourcemanager. ", "pageSize": 1, "query": "policy: alex@example.com policy.role.permissions:\"\"" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies" Select-Object -Expand Content Principals who can access Cloud Storage buckets The following sample shows how to search for principals who can access Cloud Storage buckets in the my-project project. gcloud gcloud asset search-all-iam-policies \ --scope = projects/ my-project \ --query = "policy.role.permissions:storage.buckets" \ --asset-types = cloudresourcemanager. \ --flatten = "policy.bindings[].members[]" \ --format = "table(policy.bindings.members)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies Note : You can use a GET method for this request with parameters as a query string.
- The results are in descending order by resource ( resource DESC ). gcloud asset search-all-iam-policies \ --scope = projects/my-project \ --query = "policy:\"user: alex@example.com \"" \ --asset-types = compute.googleapis.com/Instance \ --order-by = "resource DESC" Example response --- assetType: compute.googleapis.com/Instance folders: - folders/0000000000000 organization: organizations/0000000000000 policy: bindings: - members: - user:alex@example.com role: roles/compute.viewer - members: - user:alex@example.com role: roles/editor - members: - user:alex@example.com role: roles/owner project: projects/0000000000000 resource: //compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/debian REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :searchAllIamPolicies Note : You can use a GET method for this request with parameters as a query string.
- The organization ID is shown next to the organization name. gcloud CLI You can retrieve the ID of a Google Cloud organization with the following command: gcloud organizations describe ORGANIZATION NAME --format = "value(name.segment(1))" gcloud This example makes use of the grep command, which is available in Cloud Shell and Unix-like operating systems. gcloud asset search-all-iam-policies \ --scope = organizations/ my-organization-id \ --query = "policy:(roles/owner serviceAccount)" \ --flatten = "policy.bindings[].members[]" \ --format = "table(resource.segment(3):label=RESOURCE TYPE, resource.basename():label=RESOURCE, policy.bindings.members)" grep serviceAccount REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/organizations/ my-organization-id :searchAllIamPolicies Note : You can use a GET method for this request with parameters as a query string.

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "state=RUNNING", "readMask": "name,assetType,location,versionedResources" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content IAM deny policies The following sample shows how to search for IAM deny policies in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --asset-types = iam.googleapis.com/PolicyV2 \ --query = "name:denypolicies" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "query": "name:instance 1", "assetTypes": ["compute.googleapis.com/Instance"], "orderBy": "name DESC", "readMask": "name,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Example response { "results" : [ { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-2-1" , "location" : "us-central1-a" }, { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-1" , "location" : "us-central1-a" } ] } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content To search for Compute Engine instances that aren't running, replace state=RUNNING with NOT state:running .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "location:us- ", "readMask": "name,assetType,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances that are running The following sample shows how to search for Compute Engine instances that are running in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "state=RUNNING" \ --asset-types = compute.googleapis.com/Instance \ --read-mask = "name,assetType,location,versionedResources" \ --format = "table(name, assetType, location, versionedResources)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.

### "Method: searchAllIamPolicies \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllIamPolicies](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllIamPolicies)
- Source ID: `site-api-reference`
- Final score: 260
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: "compute.googleapis.com. " snapshots IAM policies attached to asset type starts with "compute.googleapis.com". ".
- HTTP request GET https://cloudasset.googleapis.com/v1/{scope= / }:searchAllIamPolicies The URL uses gRPC Transcoding syntax.
- Note that if callers don't have iam.roles.get access to a role's included permissions, policy bindings that specify this role will be dropped from the search results. resource:organizations/123456 to find IAM policy bindings that are set on "organizations/123456". resource=//cloudresourcemanager.googleapis.com/projects/myproject to find IAM policy bindings that are set on the project named "myproject".
- Important to find IAM policy bindings that contain "Important" as a word in any of the searchable fields (except for the included permissions). resource:(instance1 OR instance2) policy:amy to find IAM policy bindings that are set on resources "instance1" or "instance2" and also specify user "amy". roles:roles/compute.admin to find IAM policy bindings that specify the Compute Admin role. memberTypes:user to find IAM policy bindings that contain the principal type "user". pageSize integer Optional.

