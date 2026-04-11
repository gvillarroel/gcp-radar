---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.928Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory resource and policy search support for Private CA CertificateRevocationList"
feature_slug: "cloud-asset-inventory-resource-and-policy-search-support-for-private-ca-certificaterevocationlist"
latest_feature_date: "2021-11-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
  - "https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies"
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
keywords:
  - "asset"
  - "inventory"
  - "resource"
  - "and"
  - "policy"
  - "search"
  - "for"
  - "private"
---

# Cloud Asset Inventory resource and policy search support for Private CA CertificateRevocationList

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory now supports searching Private Certificate Authority CertificateRevocationList resources with SearchAllResources and related IAM policies with SearchAllIamPolicies.

## Extended Definition

Cloud Asset Inventory now supports searching Private Certificate Authority CertificateRevocationList resources with SearchAllResources and related IAM policies with SearchAllIamPolicies.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- [https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies](https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies)
- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)

## Supporting Pages

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const scope = ''; // const query = ''; // const assetTypes = []; // const pageSize = 0; // const pageToken = ''; // const orderBy = ''; const util = require ( 'util' ); const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); const projectId = await client . getProjectId (); async function searchAllResources () { const request = { scope : projects/ ${ projectId } , query : query , assetTypes : assetTypes , pageSize : pageSize , pageToken : pageToken , orderBy : orderBy , }; const options = { autoPaginate : false , }; // Handle the operation using the promise pattern. const result = await client . searchAllResources ( request , options ); // Do things with with the response. console . log ( util . inspect ( result , { depth : null })); } PHP To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "state=RUNNING", "readMask": "name,assetType,location,versionedResources" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content IAM deny policies The following sample shows how to search for IAM deny policies in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --asset-types = iam.googleapis.com/PolicyV2 \ --query = "name:denypolicies" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "query": "name:instance 1", "assetTypes": ["compute.googleapis.com/Instance"], "orderBy": "name DESC", "readMask": "name,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Example response { "results" : [ { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-2-1" , "location" : "us-central1-a" }, { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-1" , "location" : "us-central1-a" } ] } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( AssetServiceClient client = AssetServiceClient . create ()) { SearchAllResourcesPagedResponse response = client . searchAllResources ( request ); System . out . println ( "Search completed successfully:\n" + response . getPage (). getValues ()); } catch ( IOException e ) { System . out . println ( String . format ( "Failed to create client:%n%s" , e . toString ())); } catch ( InvalidArgumentException e ) { System . out . println ( String . format ( "Invalid request:%n%s" , e . toString ())); } catch ( ApiException e ) { System . out . println ( String . format ( "Error during SearchAllResources:%n%s" , e . toString ())); } } } Node.js To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

### "Search for IAM allow policies on resources \_|\_ Cloud Asset Inventory \_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies](https://docs.cloud.google.com/asset-inventory/docs/search-allow-policies)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "query": "policy:\"user: alex@example.com \"", "assetTypes": ["compute.googleapis.com/Instance"], "orderBy": "resource DESC" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies" Select-Object -Expand Content Example response { "resource" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/debian" , "project" : "projects/0000000000000" , "policy" : { "bindings" : [ { "role" : "roles/compute.viewer" , "members" : [ "user:alex@example.com" ] }, { "role" : "roles/editor" , "members" : [ "user:alex@example.com" ] }, { "role" : "roles/owner" , "members" : [ "user:alex@example.com" ] } ] }, "assetType" : "compute.googleapis.com/Instance" , "folders" : [ "folders/0000000000000" ], "organization" : "organizations/0000000000000" } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "cloudresourcemanager. ", "pageSize": 1, "query": "policy: alex@example.com policy.role.permissions:\"\"" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies" Select-Object -Expand Content Principals who can access Cloud Storage buckets The following sample shows how to search for principals who can access Cloud Storage buckets in the my-project project. gcloud gcloud asset search-all-iam-policies \ --scope = projects/ my-project \ --query = "policy.role.permissions:storage.buckets" \ --asset-types = cloudresourcemanager. \ --flatten = "policy.bindings[].members[]" \ --format = "table(policy.bindings.members)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllIamPolicies Note : You can use a GET method for this request with parameters as a query string.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( AssetServiceClient client = AssetServiceClient . create ()) { SearchAllIamPoliciesPagedResponse response = client . searchAllIamPolicies ( request ); System . out . println ( "Search completed successfully:\n" + response . getPage (). getValues ()); } catch ( IOException e ) { System . out . println ( String . format ( "Failed to create client:%n%s" , e . toString ())); } catch ( InvalidArgumentException e ) { System . out . println ( String . format ( "Invalid request:%n%s" , e . toString ())); } catch ( ApiException e ) { System . out . println ( String . format ( "Error during SearchAllIamPolicies:%n%s" , e . toString ())); } } } Node.js To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- The results are in descending order by resource ( resource DESC ). gcloud asset search-all-iam-policies \ --scope = projects/my-project \ --query = "policy:\"user: alex@example.com \"" \ --asset-types = compute.googleapis.com/Instance \ --order-by = "resource DESC" Example response --- assetType: compute.googleapis.com/Instance folders: - folders/0000000000000 organization: organizations/0000000000000 policy: bindings: - members: - user:alex@example.com role: roles/compute.viewer - members: - user:alex@example.com role: roles/editor - members: - user:alex@example.com role: roles/owner project: projects/0000000000000 resource: //compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/debian REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :searchAllIamPolicies Note : You can use a GET method for this request with parameters as a query string.

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- You can use these asset types with the following Cloud Asset Inventory operations: Export to BigQuery Export to Cloud Storage List assets Monitor asset changes with Pub/Sub Query assets with SQL Search for resources Search resources for IAM allow policies You might also need to make use of asset names associated with these asset types when working with Cloud Asset Inventory.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .
- For details, see Search for resources . cloudresourcemanager. googleapis. com/ TagKey cloudresourcemanager. googleapis. com/ TagValue Retail API API reference retail.googleapis.com/Catalog Secret Manager The location field in the Secret Manager asset does not reflect the replication policy of the secret.
- API reference workflows. googleapis. com/ Workflow Policy types Cloud Asset Inventory uses the following asset types for the ACCESS POLICY , IAM POLICY , and ORG POLICY content types .

