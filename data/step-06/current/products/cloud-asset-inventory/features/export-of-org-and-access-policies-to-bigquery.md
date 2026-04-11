---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:39.209Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Export of org and access policies to BigQuery"
feature_slug: "export-of-org-and-access-policies-to-bigquery"
latest_feature_date: "2020-04-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage"
  - "https://docs.cloud.google.com/asset-inventory/docs/export-bigquery"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets"
keywords:
  - "export"
  - "of"
  - "org"
  - "and"
  - "access"
  - "policies"
  - "to"
  - "asset"
---

# Export of org and access policies to BigQuery

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Asset Inventory now supports exporting org policies and access policies to BigQuery tables.

## Extended Definition

Cloud Asset Inventory now supports exporting org policies and access policies to BigQuery tables.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage](https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage)
- [https://docs.cloud.google.com/asset-inventory/docs/export-bigquery](https://docs.cloud.google.com/asset-inventory/docs/export-bigquery)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)

## Supporting Pages

### "Export asset metadata to Cloud Storage \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage](https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage)
- Source ID: `site-docs-reference`
- Final score: 274
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To do so, run the following command using a top level folder's ID: gcloud resource-manager folders list --folder = FOLDER ID organizations/ ORGANIZATION ID , where ORGANIZATION ID is the ID of the organization that has the asset metadata you want to export.
- To do so, run the following command using a top level folder's ID: gcloud resource-manager folders list --folder = FOLDER ID organization= ORGANIZATION ID , where ORGANIZATION ID is the ID of the organization that has the asset metadata you want to export.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const dumpFilePath = 'gs://my-bucket/my-assets.txt'; // const contentType = 'RESOURCE'; const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); async function exportAssets () { const projectId = await client . getProjectId (); const projectResource = projects/ ${ projectId } ; // TODO(developer): choose the dump file path // const dumpFilePath = 'Dump file path, e.g.: gs://<my bucket>/<my asset file>' const request = { parent : projectResource , contentType : contentType , outputConfig : { gcsDestination : { uri : dumpFilePath , }, }, }; // Handle the operation using the promise pattern. const [ operation ] = await client . exportAssets ( request ); // Operation#promise starts polling for the completion of the operation. const [ result ] = await operation . promise (); // Do things with with the response. console . log ( result ); } exportAssets (). catch ( err = > { throw err ; }); PHP To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "contentType": "RESOURCE", "readTime": "2024-01-30T00:00:00Z", "outputConfig": { "gcsDestination": { "uri": "gs:// my-bucket / my-file " } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :exportAssets" Select-Object -Expand Content Example response { "name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" , "parent" : "projects/000000000000" , "readTime" : "2024-01-30T00:00:00Z" , "contentType" : "RESOURCE" , "outputConfig" : { "gcsDestination" : { "uri" : "gs://my-bucket/export.txt" } } } } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

### "Export asset metadata to BigQuery \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/export-bigquery](https://docs.cloud.google.com/asset-inventory/docs/export-bigquery)
- Source ID: `site-docs-reference`
- Final score: 266
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "contentType": "RESOURCE", "readTime": " 2024-01-30T00:00:00Z ", "outputConfig": { "bigqueryDestination": { "dataset": "projects/ my-project /datasets/ my-dataset ", "table": " my-table ", "partitionSpec": { "partitionKey": " my-partition-key " }, "force": true, } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :exportAssets" Select-Object -Expand Content Check the status of an export Exports take time to complete.
- To do so, run the following command using a top level folder's ID: gcloud resource-manager folders list --folder = FOLDER ID organizations/ ORGANIZATION ID , where ORGANIZATION ID is the ID of the organization that has the asset metadata you want to export.
- To do so, run the following command using a top level folder's ID: gcloud resource-manager folders list --folder = FOLDER ID organizations/ ORGANIZATION ID , where ORGANIZATION ID is the ID of the organization that has the asset metadata you want to export.
- To do so, run the following command using a top level folder's ID: gcloud resource-manager folders list --folder = FOLDER ID organizations/ ORGANIZATION ID , where ORGANIZATION ID is the ID of the organization that has the asset metadata you want to export.

### "Method: analyzeOrgPolicyGovernedAssets \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/analyzeOrgPolicyGovernedAssets)
- Source ID: `site-api-reference`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- This RPC supports custom constraints and the following canned constraints: constraints/ainotebooks.accessMode constraints/ainotebooks.disableFileDownloads constraints/ainotebooks.disableRootAccess constraints/ainotebooks.disableTerminal constraints/ainotebooks.environmentOptions constraints/ainotebooks.requireAutoUpgradeSchedule constraints/ainotebooks.restrictVpcNetworks constraints/compute.disableGuestAttributesAccess constraints/compute.disableInstanceDataAccessApis constraints/compute.disableNestedVirtualization constraints/compute.disableSerialPortAccess constraints/compute.disableSerialPortLogging constraints/compute.disableVpcExternalIpv6 constraints/compute.requireOsLogin constraints/compute.requireShieldedVm constraints/compute.restrictLoadBalancerCreationForTypes constraints/compute.restrictProtocolForwardingCreationForTypes constraints/compute.restrictXpnProjectLienRemoval constraints/compute.setNewProjectDefaultToZonalDNSOnly constraints/compute.skipDefaultNetworkCreation constraints/compute.trustedImageProjects constraints/compute.vmCanIpForward constraints/compute.vmExternalIpAccess constraints/gcp.detailedAuditLoggingMode constraints/gcp.resourceLocations constraints/iam.allowedPolicyMemberDomains constraints/iam.automaticIamGrantsForDefaultServiceAccounts constraints/iam.disableServiceAccountCreation constraints/iam.disableServiceAccountKeyCreation constraints/iam.disableServiceAccountKeyUpload constraints/iam.restrictCrossProjectServiceAccountLienRemoval constraints/iam.serviceAccountKeyExpiryHours constraints/resourcemanager.accessBoundaries constraints/resourcemanager.allowedExportDestinations constraints/sql.restrictAuthorizedNetworks constraints/sql.restrictNoncompliantDiagnosticDataAccess constraints/sql.restrictNoncompliantResourceCreation constraints/sql.restrictPublicIp constraints/storage.publicAccessPrevention constraints/storage.restrictAuthTypes constraints/storage.uniformBucketLevelAccess This RPC only returns either resources of types supported by search APIs or IAM policies.
- The output assets will also be limited to the ones governed by those in-scope organization policies. organizations/{ORGANIZATION NUMBER} (e.g., "organizations/123456") Authorization requires one or more of the following IAM permissions on the specified resource scope : cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies cloudasset.assets.analyzeOrgPolicy Query parameters Parameters constraint string Required.
- If successful, the response body contains data with the following structure: JSON representation { "governedAssets" : [ { object ( GovernedAsset ) } ] , "constraint" : { object ( AnalyzerOrgPolicyConstraint ) } , "nextPageToken" : string } Fields governedAssets[] object ( GovernedAsset ) The list of the analyzed governed assets. constraint object ( AnalyzerOrgPolicyConstraint ) The definition of the constraint in the request. nextPageToken string The page token to fetch the next page for AnalyzeOrgPolicyGovernedAssetsResponse.governed assets .
- JSON representation { "fullResourceName" : string , "parent" : string , "project" : string , "folders" : [ string ] , "organization" : string , "assetType" : string , "effectiveTags" : [ { object ( EffectiveTagDetails ) } ] } Fields fullResourceName string The full resource name of the Google Cloud resource. parent string The full resource name of the parent of AnalyzeOrgPolicyGovernedAssetsResponse.GovernedResource.full resource name . project string The project that this resource belongs to, in the format of projects/{PROJECT NUMBER}.

