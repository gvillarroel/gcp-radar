---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.456Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory resource and policy search support for Metastore Service"
feature_slug: "cloud-asset-inventory-resource-and-policy-search-support-for-metastore-service"
latest_feature_date: "2021-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
  - "https://docs.cloud.google.com/asset-inventory/docs/searching-resources"
  - "https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery"
keywords:
  - "metastore"
  - "supports"
  - "resource"
  - "policy"
  - "search"
---

# Cloud Asset Inventory resource and policy search support for Metastore Service

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now supports searching Metastore Service resources with SearchAllResources and searching related IAM policies with SearchAllIamPolicies.

## Extended Definition

Cloud Asset Inventory now supports searching Metastore Service resources with SearchAllResources and searching related IAM policies with SearchAllIamPolicies.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- [https://docs.cloud.google.com/asset-inventory/docs/searching-resources](https://docs.cloud.google.com/asset-inventory/docs/searching-resources)
- [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery)

## Supporting Pages

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "state=RUNNING", "readMask": "name,assetType,location,versionedResources" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content IAM deny policies The following sample shows how to search for IAM deny policies in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --asset-types = iam.googleapis.com/PolicyV2 \ --query = "name:denypolicies" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content To search for Compute Engine instances that aren't running, replace state=RUNNING with NOT state:running .
- You can check the active account by running gcloud auth list . curl -X POST \ -H "X-HTTP-Method-Override: GET" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" }' \ https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "location:us- ", "readMask": "name,assetType,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances that are running The following sample shows how to search for Compute Engine instances that are running in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "state=RUNNING" \ --asset-types = compute.googleapis.com/Instance \ --read-mask = "name,assetType,location,versionedResources" \ --format = "table(name, assetType, location, versionedResources)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/searching-resources](https://docs.cloud.google.com/asset-inventory/docs/searching-resources)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "state=RUNNING", "readMask": "name,assetType,location,versionedResources" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content IAM deny policies The following sample shows how to search for IAM deny policies in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --asset-types = iam.googleapis.com/PolicyV2 \ --query = "name:denypolicies" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content To search for Compute Engine instances that aren't running, replace state=RUNNING with NOT state:running .
- You can check the active account by running gcloud auth list . curl -X POST \ -H "X-HTTP-Method-Override: GET" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" }' \ https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "location:us- ", "readMask": "name,assetType,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances that are running The following sample shows how to search for Compute Engine instances that are running in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "state=RUNNING" \ --asset-types = compute.googleapis.com/Instance \ --read-mask = "name,assetType,location,versionedResources" \ --format = "table(name, assetType, location, versionedResources)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.

### "Write policy analysis to BigQuery \_|\_ Policy Intelligence \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery)
- Source ID: `site-docs-reference-2`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to analyze a policy and export the results to BigQuery: bigquery.datasets.create bigquery.jobs.create bigquery.tables.create bigquery.tables.get bigquery.tables.updateData bigquery.tables.update cloudasset.assets.analyzeIamPolicy cloudasset.assets.searchAllResources cloudasset.assets.searchAllIamPolicies To analyze policies with custom IAM roles: iam.roles.get To use the Google Cloud CLI to analyze policies: serviceusage.services.use You might also be able to get these permissions with custom roles or other predefined roles .
- Execute the gcloud asset analyze-iam-policy-longrunning command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud asset analyze-iam-policy-longrunning -- RESOURCE TYPE = RESOURCE ID \ --full-resource-name = FULL RESOURCE NAME \ --identity = PRINCIPAL \ --permissions = ' PERMISSIONS ' \ --bigquery-dataset = DATASET \ --bigquery-table-prefix = TABLE PREFIX \ --bigquery-partition-key = PARTITION KEY \ --bigquery-write-disposition = WRITE DISPOSITION Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud asset analyze-iam-policy-longrunning -- RESOURCE TYPE = RESOURCE ID --full-resource-name = FULL RESOURCE NAME --identity = PRINCIPAL --permissions = ' PERMISSIONS ' --bigquery-dataset = DATASET --bigquery-table-prefix = TABLE PREFIX --bigquery-partition-key = PARTITION KEY --bigquery-write-disposition = WRITE DISPOSITION Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project .
- HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ RESOURCE TYPE / RESOURCE ID :analyzeIamPolicyLongrunning Request JSON body: { "analysisQuery": { "resourceSelector": { "fullResourceName": " FULL RESOURCE NAME " }, "identitySelector": { "identity": " PRINCIPAL " }, "accessSelector": { "permissions": [ " PERMISSION 1 ", " PERMISSION 2 ", " PERMISSION N " ] } }, "outputConfig": { "bigqueryDestination": { "dataset": " DATASET ", "tablePrefix": " TABLE PREFIX ", "partitionKey": " PARTITION KEY ", "writeDisposition": " WRITE DISPOSITION " } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- BQ TABLE PREFIX analysis result WHERE opName = opName AND analysisId = 0 ORDER BY 1 , 2 ; List IAM policy bindings with ACE(Access Control Entry) in one Analysis In this query, we list the IAM policy bindings with their derived ACEs in one analysis DECLARE opName STRING DEFAULT "organizations/ ORG ID /operations/AnalyzeIamPolicyLongrunning/ OP ID " ; SELECT analysisResult . attachedResourceFullName as iam policy attached resource , TO JSON STRING ( analysisResult . iamBinding , true ) as iam policy binding , TO JSON STRING ( analysisResult . identityList . identities , true ) as identities , TO JSON STRING ( acls . accesses , true ) as accesses , TO JSON STRING ( acls . resources , true ) as resources FROM BQ PROJECT ID .

