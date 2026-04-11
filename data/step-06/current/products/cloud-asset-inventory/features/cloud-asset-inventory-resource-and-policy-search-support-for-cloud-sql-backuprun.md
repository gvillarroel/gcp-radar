---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.940Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory resource and policy search support for Cloud SQL BackupRun"
feature_slug: "cloud-asset-inventory-resource-and-policy-search-support-for-cloud-sql-backuprun"
latest_feature_date: "2021-10-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/query-assets-with-sql"
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets"
keywords:
  - "asset"
  - "inventory"
  - "resource"
  - "and"
  - "policy"
  - "search"
  - "for"
  - "sql"
---

# Cloud Asset Inventory resource and policy search support for Cloud SQL BackupRun

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory now supports searching Cloud SQL BackupRun resources with SearchAllResources and related IAM policies with SearchAllIamPolicies.

## Extended Definition

Cloud Asset Inventory now supports searching Cloud SQL BackupRun resources with SearchAllResources and related IAM policies with SearchAllIamPolicies.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/query-assets-with-sql](https://docs.cloud.google.com/asset-inventory/docs/query-assets-with-sql)
- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)

## Supporting Pages

### Query assets with SQL \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/query-assets-with-sql](https://docs.cloud.google.com/asset-inventory/docs/query-assets-with-sql)
- Source ID: `site-docs-root`
- Final score: 254
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "statement": " SELECT name, assetType FROM compute googleapis com Instance LIMIT 2", "outputConfig": { "bigqueryDestination": { "dataset": "projects/ my-project /datasets/ my-dataset ", "table": " my-table ", "writeDisposition": "WRITE TRUNCATE" } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body ` -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :queryAssets" Select-Object -Expand Content Additional SQL query examples The following code samples show specific SQL queries you can use to search for assets, to help you construct your own queries.
- If you don't see the project you're looking for, go to the Manage resources page and filter the list using the name of that project. gcloud CLI You can retrieve a Google Cloud project number with the following command: gcloud projects describe PROJECT ID --format = "value(projectNumber)" folders/ FOLDER ID , where FOLDER ID is the ID of the folder that has the asset metadata you want to export with an SQL query.
- SELECT name FROM IAM POLICY CROSS JOIN UNNEST ( iamPolicy . bindings ) AS binding WHERE ( 'allUsers' IN UNNEST ( binding . members ) OR 'allAuthenticatedUsers' IN UNNEST ( binding . members )) AND assetType = 'storage.googleapis.com/Bucket' Subnetworks that don't have attached VM instances SELECT subnetwork table . name FROM compute googleapis com Subnetwork AS subnetwork table LEFT JOIN ( SELECT interface . subnetwork AS subnetwork FROM compute googleapis com Instance CROSS JOIN UNNEST ( resource .
- The organization ID is shown next to the organization name. gcloud CLI You can retrieve the ID of a Google Cloud organization with the following command: gcloud organizations describe ORGANIZATION NAME --format = "value(name.segment(1))" BILLING PROJECT ID : The project ID that the default Cloud Asset Inventory service agent is in that has permissions to manage your BigQuery datasets and tables.

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const scope = ''; // const query = ''; // const assetTypes = []; // const pageSize = 0; // const pageToken = ''; // const orderBy = ''; const util = require ( 'util' ); const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); const projectId = await client . getProjectId (); async function searchAllResources () { const request = { scope : projects/ ${ projectId } , query : query , assetTypes : assetTypes , pageSize : pageSize , pageToken : pageToken , orderBy : orderBy , }; const options = { autoPaginate : false , }; // Handle the operation using the promise pattern. const result = await client . searchAllResources ( request , options ); // Do things with with the response. console . log ( util . inspect ( result , { depth : null })); } PHP To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "state=RUNNING", "readMask": "name,assetType,location,versionedResources" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content IAM deny policies The following sample shows how to search for IAM deny policies in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --asset-types = iam.googleapis.com/PolicyV2 \ --query = "name:denypolicies" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "query": "name:instance 1", "assetTypes": ["compute.googleapis.com/Instance"], "orderBy": "name DESC", "readMask": "name,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Example response { "results" : [ { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-2-1" , "location" : "us-central1-a" }, { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-1" , "location" : "us-central1-a" } ] } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( AssetServiceClient client = AssetServiceClient . create ()) { SearchAllResourcesPagedResponse response = client . searchAllResources ( request ); System . out . println ( "Search completed successfully:\n" + response . getPage (). getValues ()); } catch ( IOException e ) { System . out . println ( String . format ( "Failed to create client:%n%s" , e . toString ())); } catch ( InvalidArgumentException e ) { System . out . println ( String . format ( "Invalid request:%n%s" , e . toString ())); } catch ( ApiException e ) { System . out . println ( String . format ( "Error during SearchAllResources:%n%s" , e . toString ())); } } } Node.js To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

### "Method: analyzeOrgPolicyGovernedAssets \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- Source ID: `site-api-reference`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- This RPC supports custom constraints and the following canned constraints: constraints/ainotebooks.accessMode constraints/ainotebooks.disableFileDownloads constraints/ainotebooks.disableRootAccess constraints/ainotebooks.disableTerminal constraints/ainotebooks.environmentOptions constraints/ainotebooks.requireAutoUpgradeSchedule constraints/ainotebooks.restrictVpcNetworks constraints/compute.disableGuestAttributesAccess constraints/compute.disableInstanceDataAccessApis constraints/compute.disableNestedVirtualization constraints/compute.disableSerialPortAccess constraints/compute.disableSerialPortLogging constraints/compute.disableVpcExternalIpv6 constraints/compute.requireOsLogin constraints/compute.requireShieldedVm constraints/compute.restrictLoadBalancerCreationForTypes constraints/compute.restrictProtocolForwardingCreationForTypes constraints/compute.restrictXpnProjectLienRemoval constraints/compute.setNewProjectDefaultToZonalDNSOnly constraints/compute.skipDefaultNetworkCreation constraints/compute.trustedImageProjects constraints/compute.vmCanIpForward constraints/compute.vmExternalIpAccess constraints/gcp.detailedAuditLoggingMode constraints/gcp.resourceLocations constraints/iam.allowedPolicyMemberDomains constraints/iam.automaticIamGrantsForDefaultServiceAccounts constraints/iam.disableServiceAccountCreation constraints/iam.disableServiceAccountKeyCreation constraints/iam.disableServiceAccountKeyUpload constraints/iam.restrictCrossProjectServiceAccountLienRemoval constraints/iam.serviceAccountKeyExpiryHours constraints/resourcemanager.accessBoundaries constraints/resourcemanager.allowedExportDestinations constraints/sql.restrictAuthorizedNetworks constraints/sql.restrictNoncompliantDiagnosticDataAccess constraints/sql.restrictNoncompliantResourceCreation constraints/sql.restrictPublicIp constraints/storage.publicAccessPrevention constraints/storage.restrictAuthTypes constraints/storage.uniformBucketLevelAccess This RPC only returns either resources of types supported by search APIs or IAM policies.
- This field is available when the resource belongs (directly or cascadingly) to an organization. assetType string The asset type of the AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full resource name Example: cloudresourcemanager.googleapis.com/Project See Cloud Asset Inventory Supported Asset Types for all supported asset types. effectiveTags[] object ( EffectiveTagDetails ) The effective tags on this resource.
- See Cloud Asset Inventory Resource Name Format for more information. policy object ( Policy ) The IAM policy directly set on the given resource. project string The project that this IAM policy belongs to, in the format of projects/{PROJECT NUMBER}.
- JSON representation { "fullResourceName" : string , "parent" : string , "project" : string , "folders" : [ string ] , "organization" : string , "assetType" : string , "effectiveTags" : [ { object ( EffectiveTagDetails ) } ] } Fields fullResourceName string The full resource name of the Google Cloud resource. parent string The full resource name of the parent of AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full resource name . project string The project that this resource belongs to, in the format of projects/{PROJECT NUMBER}.

