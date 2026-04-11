---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:38.605Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory SearchAllResources searchable fields for effectiveTagKeys/effectiveTagValues/effectiveTagValueIds"
feature_slug: "cloud-asset-inventory-searchallresources-searchable-fields-for-effectivetagkeys-effectivetagvalues-effectivetagvalueids"
latest_feature_date: "2023-10-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
  - "https://docs.cloud.google.com/asset-inventory/docs/release-notes"
keywords:
  - "asset"
  - "inventory"
  - "searchallresources"
  - "searchable"
  - "fields"
  - "for"
  - "effectivetagkeys"
  - "effectivetagvalues"
---

# Cloud Asset Inventory SearchAllResources searchable fields for effectiveTagKeys/effectiveTagValues/effectiveTagValueIds

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory added the effectiveTagKeys, effectiveTagValues, and effectiveTagValueIds searchable fields to the SearchAllResources API.

## Extended Definition

Cloud Asset Inventory added the effectiveTagKeys, effectiveTagValues, and effectiveTagValueIds searchable fields to the SearchAllResources API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)

## Supporting Pages

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Example: effectiveTagKeys:"123456789/env " effectiveTagKeys="123456789/env" effectiveTagKeys:"env" effectiveTagKeyIds="tagKeys/123" effectiveTagValues:"env" effectiveTagValues:"env/prod" effectiveTagValues:"123456789/env/prod " effectiveTagValues="123456789/env/prod" effectiveTagValueIds="tagValues/456" enrichments[] object ( AssetEnrichment ) Enrichments of the asset.
- Important location:(us-west1 OR global) to find Google Cloud resources that contain Important as a word in any of the searchable fields and are also located in the us-west1 region or the global location. assetTypes[] string Optional.
- You can find the resource definition for each supported resource type in this table: https://cloud.google.com/asset-inventory/docs/supported-asset-types assetExceptions[] object ( AssetException ) The exceptions of a resource.
- Only the following fields in the response are sortable: name assetType project displayName description location createTime updateTime state parentFullResourceName parentAssetType readMask string ( FieldMask format) Optional.

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Asset\V1\Client\AssetServiceClient; use Google\Cloud\Asset\V1\SearchAllResourcesRequest; / @param string $scope Scope of the search @param string $query (Optional) Query statement @param string[] $assetTypes (Optional) Asset types to search for @param int $pageSize (Optional) Size of each result page @param string $pageToken (Optional) Token produced by the preceding call @param string $orderBy (Optional) Fields to sort the results / function search all resources( string $scope, string $query = '', array $assetTypes = [], int $pageSize = 0, string $pageToken = '', string $orderBy = '' ): void { // Instantiate a client. $asset = new AssetServiceClient(); // Run request $request = (new SearchAllResourcesRequest()) ->setScope($scope) ->setQuery($query) ->setAssetTypes($assetTypes) ->setPageSize($pageSize) ->setPageToken($pageToken) ->setOrderBy($orderBy); $response = $asset->searchAllResources($request); // Print the resource names in the first page of the result foreach ($response->getPage() as $resource) { print($resource->getName() .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const scope = ''; // const query = ''; // const assetTypes = []; // const pageSize = 0; // const pageToken = ''; // const orderBy = ''; const util = require ( 'util' ); const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); const projectId = await client . getProjectId (); async function searchAllResources () { const request = { scope : projects/ ${ projectId } , query : query , assetTypes : assetTypes , pageSize : pageSize , pageToken : pageToken , orderBy : orderBy , }; const options = { autoPaginate : false , }; // Handle the operation using the promise pattern. const result = await client . searchAllResources ( request , options ); // Do things with with the response. console . log ( util . inspect ( result , { depth : null })); } PHP To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "query": "name:instance 1", "assetTypes": ["compute.googleapis.com/Instance"], "orderBy": "name DESC", "readMask": "name,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Example response { "results" : [ { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-2-1" , "location" : "us-central1-a" }, { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-1" , "location" : "us-central1-a" } ] } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources. try ( AssetServiceClient client = AssetServiceClient . create ()) { SearchAllResourcesPagedResponse response = client . searchAllResources ( request ); System . out . println ( "Search completed successfully:\n" + response . getPage (). getValues ()); } catch ( IOException e ) { System . out . println ( String . format ( "Failed to create client:%n%s" , e . toString ())); } catch ( InvalidArgumentException e ) { System . out . println ( String . format ( "Invalid request:%n%s" , e . toString ())); } catch ( ApiException e ) { System . out . println ( String . format ( "Error during SearchAllResources:%n%s" , e . toString ())); } } } Node.js To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

### Cloud Asset Inventory release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/release-notes](https://docs.cloud.google.com/asset-inventory/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- The following searchable fields are now publicly available through the resource search API ( SearchAllResources ). kmsKey state createTime updateTime December 10, 2020 Feature Filestore resource type now available The following Filestore resource type is now publicly available through the Cloud Asset APIs. file.googleapis.com/Instance December 09, 2020 Feature OS inventory management resource type now available The following OS inventory management resource type is now publicly available through the Cloud Asset APIs. compute.googleapis.com/Instance This resource type provides information on the operating system, installed packages, and available package updates for a Compute Engine VM instance.
- Cloud IDs ids.googleapis.com/Endpoint Feature The following searchable fields are now publicly available through the resource search API ( SearchAllResources ). kmsKeys August 12, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Dataproc dataproc.googleapis.com/AutoscalingPolicy dataproc.googleapis.com/Batch dataproc.googleapis.com/WorkflowTemplate August 11, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Cloud IDS (Cloud Intrusion Detection System) ids.googleapis.com/Endpoint Speech-to-Text speech.googleapis.com/CustomClass speech.googleapis.com/PhraseSet August 02, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Firebase firebase.googleapis.com/FirebaseProject firebase.googleapis.com/FirebaseAppInfo July 29, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Backup for GKE gkebackup.googleapis.com/BackupPlan gkebackup.googleapis.com/Backup gkebackup.googleapis.com/VolumeBackup gkebackup.googleapis.com/RestorePlan gkebackup.googleapis.com/Restore gkebackup.googleapis.com/VolumeRestore July 27, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Firestore firestore.googleapis.com/Database July 19, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Network Connectivity networkconnectivity.googleapis.com/Hub networkconnectivity.googleapis.com/Spoke Compute compute.googleapis.com/ServiceAttachment July 12, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Dataproc dataproc.googleapis.com/AutoscalingPolicy dataproc.googleapis.com/Batch dataproc.googleapis.com/WorkflowTemplate July 01, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Google Kubernetes Engine (GKE) batch.k8s.io/Job apps.k8s.io/ReplicaSet Compute compute.googleapis.com/ServiceAttachment June 29, 2022 Feature The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): Network Connectivity Center networkconnectivity.googleapis.com/Hub networkconnectivity.googleapis.com/Spoke Virtual Private Cloud (VPC) vpcaccess.googleapis.com/Connector Firebase firebase.googleapis.com/FirebaseProject firebase.googleapis.com/FirebaseAppInfo June 24, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): API keys apikeys.googleapis.com/Key June 22, 2022 Feature The following resource types are now publicly available through the resource search API ( SearchAllResources ) and policy search API ( SearchAllIamPolicies ): Compute compute.googleapis.com/FirewallPolicy May 26, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Certificate Authority Service privateca.googleapis.com/Certificate Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ) , Feed API , and Search APIs ( SearchAllResources and SearchAllIamPolicies ): Cloud Run run.googleapis.com/Execution run.googleapis.com/Job API Keys apikeys.googleapis.com/Key May 25, 2022 Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Cloud KMS cloudkms.googleapis.com/EkmConnection Cloud Run run.googleapis.com/Job run.googleapis.com/Execution May 18, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ), the Feed API , and the Search APIs ( SearchAllResources and SearchAllIamPolicies ): Cloud Firestore firestore.googleapis.com/Database Feature The following resource types are now publicly available through the Analyze Policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Datastream datastream.googleapis.com/Stream datastream.googleapis.com/ConnectionProfile datastream.googleapis.com/PrivateConnection May 16, 2022 Feature The following resource types are now publicly available through the Export APIs ( ExportAssets and BatchGetAssetsHistory ), the Feed API , and the Search APIs ( SearchAllResources and SearchAllIamPolicies ): Cloud KMS cloudkms.googleapis.com/EkmConnection May 05, 2022 Change Documentation for Policy Analyzer has moved to the Policy Intelligence documentation .
- The following resource types are now publicly available through the resource search API ( SearchAllResources ), policy search API ( SearchAllIamPolicies ), and analyze policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ): Cloud Functions cloudfunctions.googleapis.com/CloudFunction Cloud SQL sqladmin.googleapis.com/Instance Cloud TPU tpu.googleapis.com/Node The following resource types are now publicly available through the export API ( ExportAssets and BatchGetAssetsHistory ) and the Feed API : Artifact Registry artifactregistry.googleapis.com/DockerImage Api Gateway apigateway.googleapis.com/Api apigateway.googleapis.com/ApiConfig apigateway.googleapis.com/Gateway Assured Workloads for Government assuredworkloads.googleapis.com/Workload Feature The following searchable fields are now publicly available through the resource search API ( SearchAllResources ): parentAssetType project folders organization January 29, 2021 Feature New resource types now available.
- The following searchable fields are now publicly available through the resource search API ( SearchAllResources ). effectiveTagKeys effectiveTagValues effectiveTagValueIds The following search result fields are now publicly available through the resource search API ( SearchAllResources ). tags effectiveTags October 10, 2023 Feature The following resource types are now publicly available through the analyze policy APIs ( AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning ).

