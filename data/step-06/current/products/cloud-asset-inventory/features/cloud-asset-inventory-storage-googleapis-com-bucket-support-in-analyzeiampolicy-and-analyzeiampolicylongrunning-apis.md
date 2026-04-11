---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:56:39.114Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory: storage.googleapis.com/Bucket support in AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning APIs"
feature_slug: "cloud-asset-inventory-storage-googleapis-com-bucket-support-in-analyzeiampolicy-and-analyzeiampolicylongrunning-apis"
latest_feature_date: "2021-03-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage"
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-insights"
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
keywords:
  - "asset"
  - "inventory"
  - "storage"
  - "googleapis"
  - "com"
  - "bucket"
  - "in"
  - "analyzeiampolicy"
---

# Cloud Asset Inventory: storage.googleapis.com/Bucket support in AnalyzeIamPolicy and AnalyzeIamPolicyLongrunning APIs

Product: Cloud Asset Inventory
Coverage: LOW

## Step 02 Summary

Cloud Storage Bucket resources are now available through analyze policy APIs in Cloud Asset Inventory.

## Extended Definition

Cloud Storage Bucket resources are now available through analyze policy APIs in Cloud Asset Inventory.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage](https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage)
- [https://docs.cloud.google.com/asset-inventory/docs/asset-insights](https://docs.cloud.google.com/asset-inventory/docs/asset-insights)
- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)

## Supporting Pages

### "Export asset metadata to Cloud Storage \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage](https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage)
- Source ID: `site-docs-reference`
- Final score: 266
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "contentType": "RESOURCE", "readTime": "2024-01-30T00:00:00Z", "outputConfig": { "gcsDestination": { "uri": "gs:// my-bucket / my-file " } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :exportAssets" Select-Object -Expand Content Example response { "name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" , "parent" : "projects/000000000000" , "readTime" : "2024-01-30T00:00:00Z" , "contentType" : "RESOURCE" , "outputConfig" : { "gcsDestination" : { "uri" : "gs://my-bucket/export.txt" } } } } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://cloudasset.googleapis.com/v1/ OPERATION PATH " Select-Object -Expand Content Example response { "name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" , "parent" : "projects/000000000000" , "readTime" : "2024-01-30T00:00:00Z" , "contentType" : "RESOURCE" , "outputConfig" : { "gcsDestination" : { "uri" : "gs://my-bucket/export.txt" } } } } View an asset snapshot To view your asset snapshot: Go to the Cloud Storage Buckets page in the Google Cloud console.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const dumpFilePath = 'gs://my-bucket/my-assets.txt'; // const contentType = 'RESOURCE'; const { AssetServiceClient } = require ( ' @google-cloud/asset ' ); const client = new AssetServiceClient (); async function exportAssets () { const projectId = await client . getProjectId (); const projectResource = projects/ ${ projectId } ; // TODO(developer): choose the dump file path // const dumpFilePath = 'Dump file path, e.g.: gs://<my bucket>/<my asset file>' const request = { parent : projectResource , contentType : contentType , outputConfig : { gcsDestination : { uri : dumpFilePath , }, }, }; // Handle the operation using the promise pattern. const [ operation ] = await client . exportAssets ( request ); // Operation#promise starts polling for the completion of the operation. const [ result ] = await operation . promise (); // Do things with with the response. console . log ( result ); } exportAssets (). catch ( err = > { throw err ; }); PHP To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . curl -X POST \ -H "X-Goog-User-Project: BILLING PROJECT ID " \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "contentType": "RESOURCE", "readTime": "2024-01-30T00:00:00Z", "outputConfig": { "gcsDestination": { "uri": "gs:// my-bucket / my-file " } } }' \ https://cloudasset.googleapis.com/v1/projects/ my-project :exportAssets PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Improve your security posture with asset insights \_|\_ Cloud Asset Inventory\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-insights](https://docs.cloud.google.com/asset-inventory/docs/asset-insights)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://recommender.googleapis.com/v1/projects/ my-project /locations/global/insightTypes/google.cloudasset.asset.Insight/insights" Select-Object -Expand Content Example response { "name" : "organizations/000000000000/locations/global/insightTypes/google.cloudasset.asset.Insight/insights/00000000-0000-0000-0000-000000000000" , "description" : "Domain example.com detected in 1 IAM policies" , "content" : { "domain" : "example.com" , "policyCount" : 1 , "policySearchQuery" : "policy: example.com" , "matchedPolicies" :[ { "resource" : "//cloudresourcemanager.googleapis.com/projects/000000000000" , "project" : "projects/000000000000" , "matchedBindings" :[ { "role" : "roles/viewer" , "matchedMembers" :[ "user:example@example.com" ] } ] } ] }, "lastRefreshTime" : "2024-01-30T00:00:00Z" , "observationPeriod" : "0s" , "stateInfo" : { "state" : "ACTIVE" }, "category" : "SECURITY" , "targetResources" : [ "//cloudresourcemanager.googleapis.com/organizations/000000000000" ], "insightSubtype" : "EXTERNAL MEMBER" , "etag" : "\"00000000000\"" , "initialRefreshTime" : "2024-01-30T00:00:00Z" } Interpreting insight responses In addition to the standard insight attributes , asset insights provide several specialized subtypes and fields.
- Example Run the following command to list insights for the my-project project. gcloud recommender insights list \ --project = my-project \ --location = global \ --insight-type = google.cloudasset.asset.Insight Example response INSIGHT ID: 00000000-0000-0000-0000-000000000000 CATEGORY: SECURITY INSIGHT STATE: ACTIVE LAST REFRESH TIME: 2024-01-30T00:00:00Z SEVERITY: LOW INSIGHT SUBTYPE: EXTERNAL MEMBER DESCRIPTION: Domain example.com detected in 1 IAM policies REST HTTP method and URL: GET https://recommender.googleapis.com/v1/ SCOPE PATH /locations/global/insightTypes/google.cloudasset.asset.Insight/insights Headers: X-Goog-User-Project: BILLING PROJECT ID Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project you want insights for. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project you want insights for.
- You can check the active account by running gcloud auth list . curl -X GET \ -H "X-Goog-User-Project: BILLING PROJECT ID " \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ https://recommender.googleapis.com/v1/projects/ my-project /locations/global/insightTypes/google.cloudasset.asset.Insight/insights PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- The organization ID is shown next to the organization name. gcloud CLI You can retrieve the ID of a Google Cloud organization with the following command: gcloud organizations describe ORGANIZATION NAME --format = "value(name.segment(1))" BILLING PROJECT ID : The project ID that the default Cloud Asset Inventory service agent is in that has permissions to manage your billing and quota.

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- API reference sqladmin.googleapis.com/Backup Not available in the analysis APIs. sqladmin. googleapis. com/ BackupRun sqladmin. googleapis. com/ Instance Cloud Storage API reference storage.googleapis.com/Bucket Cloud Tasks API reference cloudtasks. googleapis. com/ Queue Cloud TPU API reference tpu.googleapis.com/Node Cloud Workstations API reference workstations. googleapis. com/ Workstation Not available in the analysis APIs. workstations. googleapis. com/ WorkstationCluster Not available in the analysis APIs. workstations. googleapis. com/ WorkstationConfig Not available in the analysis APIs.
- Organization policy API reference Supported resource types that organization policies can be attached to: cloudresourcemanager. googleapis. com/ Folder cloudresourcemanager. googleapis. com/ Organization cloudresourcemanager. googleapis. com/ Project Runtime information types Cloud Asset Inventory uses the following asset types for the OS INVENTORY content type .
- Chrome Enterprise Premium API reference beyondcorp. googleapis. com/ AppConnection beyondcorp. googleapis. com/ AppConnector beyondcorp. googleapis. com/ AppGateway beyondcorp. googleapis. com/ ClientConnectorService beyondcorp. googleapis. com/ ClientGateway Cloud Asset Inventory API reference cloudasset.googleapis.com/Feed Effective tags aren't supported.
- API reference workflows. googleapis. com/ Workflow Policy types Cloud Asset Inventory uses the following asset types for the ACCESS POLICY , IAM POLICY , and ORG POLICY content types .

