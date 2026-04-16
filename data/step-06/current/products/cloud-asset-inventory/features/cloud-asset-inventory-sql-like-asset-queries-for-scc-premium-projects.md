---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.185Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory SQL-like asset queries for SCC Premium projects"
feature_slug: "cloud-asset-inventory-sql-like-asset-queries-for-scc-premium-projects"
latest_feature_date: "2023-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy"
  - "https://docs.cloud.google.com/asset-inventory/docs/query-assets"
  - "https://docs.cloud.google.com/asset-inventory/docs/query-assets-with-sql"
keywords:
  - "premium"
  - "like"
  - "queries"
  - "projects"
---

# Cloud Asset Inventory SQL-like asset queries for SCC Premium projects

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now supports SQL-like asset queries for projects enrolled in Security Command Center Premium.

## Extended Definition

Cloud Asset Inventory now supports SQL-like asset queries for projects enrolled in Security Command Center Premium.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy)
- [https://docs.cloud.google.com/asset-inventory/docs/query-assets](https://docs.cloud.google.com/asset-inventory/docs/query-assets)
- [https://docs.cloud.google.com/asset-inventory/docs/query-assets-with-sql](https://docs.cloud.google.com/asset-inventory/docs/query-assets-with-sql)

## Supporting Pages

### Query assets with SQL \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/query-assets](https://docs.cloud.google.com/asset-inventory/docs/query-assets)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "statement": " SELECT name, assetType FROM compute googleapis com Instance LIMIT 2", "outputConfig": { "bigqueryDestination": { "dataset": "projects/ my-project /datasets/ my-dataset ", "table": " my-table ", "writeDisposition": "WRITE TRUNCATE" } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body ` -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :queryAssets" Select-Object -Expand Content Additional SQL query examples The following code samples show specific SQL queries you can use to search for assets, to help you construct your own queries.
- Example Run the following command to get the names and asset types of the first two Compute Engine instances in the my-project project, and export the results to the my-table BigQuery table in the my-project project, overwriting the entire table if it already exists. gcloud asset query \ --project = my-project \ --statement = " SELECT name, assetType FROM compute googleapis com Instance LIMIT 2" \ --bigquery-table = projects/ my-project /datasets/ my-dataset /tables/ my-table \ --write-disposition = "write-truncate" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :queryAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "statement" : " SQL SELECT QUERY " , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID " , "table" : " TABLE NAME " , "writeDisposition" : " WRITE METHOD " } }, "pageSize" : " PAGE SIZE " } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export with an SQL query. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export with an SQL query.
- SELECT name AS pod name , JSON EXTRACT SCALAR ( resource . data . metadata , '$.namespace' ) AS namespace , resource . data . metadata . creationTimestamp AS creation time , JSON EXTRACT SCALAR ( resource . data . metadata . labels , "$['app.kubernetes.io/name']" ) AS app label , resource . data . metadata . labels [ 'app.kubernetes.io/version' ] AS version FROM k8s io Pod WHERE JSON EXTRACT SCALAR ( resource . data . metadata , '$.namespace' ) = "default" AND JSON EXTRACT SCALAR ( resource . data . metadata . labels , "$['app.kubernetes.io/name']" ) = "ingress-nginx" How many BigQuery datasets are in each project SELECT ancestor AS project , COUNT ( ) FROM bigquery googleapis com Dataset CROSS JOIN UNNEST ( ancestors ) AS ancestor WHERE ancestor LIKE '%project%' GROUP BY ancestor ORDER BY 2 DESC How many Compute Engine VM instances are in each region SELECT resource . location , COUNT ( ) FROM compute googleapis com Instance GROUP BY resource . location Name and assetType of all resources in a region SELECT name , assetType FROM STANDARD METADATA WHERE resource . location LIKE '%asia%' Publicly available Cloud Storage buckets Additionally, return their name .
- Similarly, f and v are used in the rows array instead of fields and value to keep responses as small as possible. { "jobReference" : "0000000000000000000000000000000000000000000000000000000000000000" , "done" : true , "queryResult" : { "rows" : [ { "f" : [ { "v" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-1" } , { "v" : "compute.googleapis.com/Instance" } ] } , { "f" : [ { "v" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-2" } , { "v" : "compute.googleapis.com/Instance" } ] } ], "schema" : { "fields" : [ { "field" : "name" , "type" : "STRING" , "mode" : "NULLABLE" , "fields" : [] } , { "field" : "assetType" , "type" : "STRING" , "mode" : "NULLABLE" , "fields" : [] } ] } , "nextPageToken" : "" , "totalRows" : "1" } } Unfinished job response If you set a timeout in your request, the query is performed asynchronously and you are sent a response that indicates the job is unfinished ( "done": false ).

### Query assets with SQL \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/query-assets-with-sql](https://docs.cloud.google.com/asset-inventory/docs/query-assets-with-sql)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "statement": " SELECT name, assetType FROM compute googleapis com Instance LIMIT 2", "outputConfig": { "bigqueryDestination": { "dataset": "projects/ my-project /datasets/ my-dataset ", "table": " my-table ", "writeDisposition": "WRITE TRUNCATE" } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body ` -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :queryAssets" Select-Object -Expand Content Additional SQL query examples The following code samples show specific SQL queries you can use to search for assets, to help you construct your own queries.
- Example Run the following command to get the names and asset types of the first two Compute Engine instances in the my-project project, and export the results to the my-table BigQuery table in the my-project project, overwriting the entire table if it already exists. gcloud asset query \ --project = my-project \ --statement = " SELECT name, assetType FROM compute googleapis com Instance LIMIT 2" \ --bigquery-table = projects/ my-project /datasets/ my-dataset /tables/ my-table \ --write-disposition = "write-truncate" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH :queryAssets Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "statement" : " SQL SELECT QUERY " , "outputConfig" : { "bigqueryDestination" : { "dataset" : "projects/ BIGQUERY PROJECT ID /datasets/ DATASET ID " , "table" : " TABLE NAME " , "writeDisposition" : " WRITE METHOD " } }, "pageSize" : " PAGE SIZE " } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export with an SQL query. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project that has the asset metadata you want to export with an SQL query.
- SELECT name AS pod name , JSON EXTRACT SCALAR ( resource . data . metadata , '$.namespace' ) AS namespace , resource . data . metadata . creationTimestamp AS creation time , JSON EXTRACT SCALAR ( resource . data . metadata . labels , "$['app.kubernetes.io/name']" ) AS app label , resource . data . metadata . labels [ 'app.kubernetes.io/version' ] AS version FROM k8s io Pod WHERE JSON EXTRACT SCALAR ( resource . data . metadata , '$.namespace' ) = "default" AND JSON EXTRACT SCALAR ( resource . data . metadata . labels , "$['app.kubernetes.io/name']" ) = "ingress-nginx" How many BigQuery datasets are in each project SELECT ancestor AS project , COUNT ( ) FROM bigquery googleapis com Dataset CROSS JOIN UNNEST ( ancestors ) AS ancestor WHERE ancestor LIKE '%project%' GROUP BY ancestor ORDER BY 2 DESC How many Compute Engine VM instances are in each region SELECT resource . location , COUNT ( ) FROM compute googleapis com Instance GROUP BY resource . location Name and assetType of all resources in a region SELECT name , assetType FROM STANDARD METADATA WHERE resource . location LIKE '%asia%' Publicly available Cloud Storage buckets Additionally, return their name .
- Similarly, f and v are used in the rows array instead of fields and value to keep responses as small as possible. { "jobReference" : "0000000000000000000000000000000000000000000000000000000000000000" , "done" : true , "queryResult" : { "rows" : [ { "f" : [ { "v" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-1" } , { "v" : "compute.googleapis.com/Instance" } ] } , { "f" : [ { "v" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-2" } , { "v" : "compute.googleapis.com/Instance" } ] } ], "schema" : { "fields" : [ { "field" : "name" , "type" : "STRING" , "mode" : "NULLABLE" , "fields" : [] } , { "field" : "assetType" , "type" : "STRING" , "mode" : "NULLABLE" , "fields" : [] } ] } , "nextPageToken" : "" , "totalRows" : "1" } } Unfinished job response If you set a timeout in your request, the query is performed asynchronously and you are sent a response that indicates the job is unfinished ( "done": false ).

### Analyze allow policies \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy)
- Source ID: `site-docs-reference-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Optional: If you want to execute more than 20 policy analysis queries per organization per day, ensure that you have an organization-level activation of the Premium or Enterprise tier of Security Command Center .
- If the condition evaluates to true, the condition evaluation value in the analysis response is TRUE . ... { "attachedResourceFullName": "//cloudresourcemanager.googleapis.com/projects/my-project", "iamBinding": { "role": "roles/compute.admin", "members": [ "user:my-user@example.com" ], "condition": { "expression": "request.time.getHours(\"America/Los Angeles\") \u003e= 5", "title": "No access before 5am PST" } }, "accessControlLists": [ { "resources": [ { "fullResourceName": "//cloudresourcemanager.googleapis.com/projects/my-project" } ], "accesses": [ { "permission": "compute.instances.get" }, { "permission": "compute.instances.start" } ], "conditionEvaluation": { "evaluationValue": "TRUE" } } ], "identityList": { "identities": [ { "name": "user:my-user@example.com" } ] }, "fullyExplored": true }, ...
- The following example shows a single analysis result with the resources field highlighted. ... { "attachedResourceFullName": "//compute.googleapis.com/projects/my-project/global/images/my-image", "iamBinding": { "role": "roles/compute.admin", "members": [ "user:my-user@example.com" ] }, "accessControlLists": [ { "resources": [ { "fullResourceName": "//compute.googleapis.com/projects/my-project/global/images/my-image" } ], "accesses": [ { "permission": "compute.instances.get" }, { "permission": "compute.instances.start" } ] } ], "identityList": { "identities": [ { "name": "user:my-user@example.com" } ] }, "fullyExplored": true }, ...
- If the condition evaluates to true, the result of the condition evaluation is listed as TRUE . ... --- ACLs: - accesses: - permission: compute.instances.get - permission: compute.instances.start conditionEvaluationValue: 'TRUE' identities: - name: user:my-user@example.com resources: - fullResourceName: //cloudresourcemanager.googleapis.com/projects/my-project policy: attachedResource: //cloudresourcemanager.googleapis.com/projects/my-project binding: condition: expression: request.time.getHours("America/Los Angeles") >= 5 title: No access before 5am PST members: - user: my-user@example.com role: roles/compute.admin --- ...

