---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.779Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory resource and IAM policy search"
feature_slug: "cloud-asset-inventory-resource-and-iam-policy-search"
latest_feature_date: "2020-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
  - "https://docs.cloud.google.com/asset-inventory/docs/searching-resources"
  - "https://docs.cloud.google.com/asset-inventory/docs/searching-iam-policies"
keywords:
  - "supports"
  - "resource"
  - "policy"
  - "search"
---

# Cloud Asset Inventory resource and IAM policy search

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now supports searching resource metadata and IAM policies within a project, folder, or organization.

## Extended Definition

Cloud Asset Inventory now supports searching resource metadata and IAM policies within a project, folder, or organization.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- [https://docs.cloud.google.com/asset-inventory/docs/searching-resources](https://docs.cloud.google.com/asset-inventory/docs/searching-resources)
- [https://docs.cloud.google.com/asset-inventory/docs/searching-iam-policies](https://docs.cloud.google.com/asset-inventory/docs/searching-iam-policies)

## Supporting Pages

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "state=RUNNING", "readMask": "name,assetType,location,versionedResources" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content IAM deny policies The following sample shows how to search for IAM deny policies in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --asset-types = iam.googleapis.com/PolicyV2 \ --query = "name:denypolicies" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content To search for Compute Engine instances that aren't running, replace state=RUNNING with NOT state:running .
- You can check the active account by running gcloud auth list . curl -X POST \ -H "X-HTTP-Method-Override: GET" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" }' \ https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "location:us- ", "readMask": "name,assetType,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances that are running The following sample shows how to search for Compute Engine instances that are running in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "state=RUNNING" \ --asset-types = compute.googleapis.com/Instance \ --read-mask = "name,assetType,location,versionedResources" \ --format = "table(name, assetType, location, versionedResources)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/searching-resources](https://docs.cloud.google.com/asset-inventory/docs/searching-resources)
- Source ID: `site-docs-reference-2`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "state=RUNNING", "readMask": "name,assetType,location,versionedResources" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content IAM deny policies The following sample shows how to search for IAM deny policies in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --asset-types = iam.googleapis.com/PolicyV2 \ --query = "name:denypolicies" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content To search for Compute Engine instances that aren't running, replace state=RUNNING with NOT state:running .
- You can check the active account by running gcloud auth list . curl -X POST \ -H "X-HTTP-Method-Override: GET" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" }' \ https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "location:us- ", "readMask": "name,assetType,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances that are running The following sample shows how to search for Compute Engine instances that are running in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "state=RUNNING" \ --asset-types = compute.googleapis.com/Instance \ --read-mask = "name,assetType,location,versionedResources" \ --format = "table(name, assetType, location, versionedResources)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.

### "Search for IAM allow policies on resources \_|\_ Cloud Asset Inventory \_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/searching-iam-policies](https://docs.cloud.google.com/asset-inventory/docs/searching-iam-policies)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "query": "policy:\"user: alex@example.com \"", "assetTypes": ["compute.googleapis.com/Instance"], "orderBy": "resource DESC" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies" Select-Object -Expand Content Example response { "resource" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/debian" , "project" : "projects/0000000000000" , "policy" : { "bindings" : [ { "role" : "roles/compute.viewer" , "members" : [ "user:alex@example.com" ] }, { "role" : "roles/editor" , "members" : [ "user:alex@example.com" ] }, { "role" : "roles/owner" , "members" : [ "user:alex@example.com" ] } ] }, "assetType" : "compute.googleapis.com/Instance" , "folders" : [ "folders/0000000000000" ], "organization" : "organizations/0000000000000" } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "cloudresourcemanager. ", "pageSize": 1, "query": "policy: alex@example.com policy.role.permissions:\"\"" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies" Select-Object -Expand Content Principals who can access Cloud Storage buckets The following sample shows how to search for principals who can access Cloud Storage buckets in the my-project project. gcloud gcloud asset search-all-iam-policies \ --scope = projects/ my-project \ --query = "policy.role.permissions:storage.buckets" \ --asset-types = cloudresourcemanager. \ --flatten = "policy.bindings[].members[]" \ --format = "table(policy.bindings.members)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies Note : You can use a GET method for this request with parameters as a query string.
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Asset\V1\Client\AssetServiceClient; use Google\Cloud\Asset\V1\SearchAllIamPoliciesRequest; / @param string $scope Scope of the search @param string $query (Optional) Query statement @param int $pageSize (Optional) Size of each result page @param string $pageToken (Optional) Token produced by the preceding call / function search all iam policies( string $scope, string $query = '', int $pageSize = 0, string $pageToken = '' ) { // Instantiate a client. $asset = new AssetServiceClient(); // Run request $request = (new SearchAllIamPoliciesRequest()) ->setScope($scope) ->setQuery($query) ->setPageSize($pageSize) ->setPageToken($pageToken); $response = $asset->searchAllIamPolicies($request); // Print the resources that the policies are set on foreach ($response->getPage() as $policy) { print($policy->getResource() .
- The results are in descending order by resource ( resource DESC ). gcloud asset search-all-iam-policies \ --scope = projects/my-project \ --query = "policy:\"user: alex@example.com \"" \ --asset-types = compute.googleapis.com/Instance \ --order-by = "resource DESC" Example response --- assetType: compute.googleapis.com/Instance folders: - folders/0000000000000 organization: organizations/0000000000000 policy: bindings: - members: - user:alex@example.com role: roles/compute.viewer - members: - user:alex@example.com role: roles/editor - members: - user:alex@example.com role: roles/owner project: projects/0000000000000 resource: //compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/debian REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :searchAllIamPolicies Note : You can use a GET method for this request with parameters as a query string.

