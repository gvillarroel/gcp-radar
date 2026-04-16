---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:34.850Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "cloudasset.googleapis.com/Feed"
feature_slug: "cloudasset-googleapis-com-feed"
latest_feature_date: "2025-01-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes"
  - "https://docs.cloud.google.com/asset-inventory/docs/monitoring-asset-changes"
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
keywords:
  - "cloudasset"
  - "googleapis"
  - "exposes"
  - "feed"
---

# cloudasset.googleapis.com/Feed

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now exposes the cloudasset.googleapis.com/Feed resource type through ExportAssets, ListAssets, BatchGetAssetsHistory, QueryAssets, Feed, Search, and AnalyzeIamPolicy APIs.

## Extended Definition

Cloud Asset Inventory now exposes the cloudasset.googleapis.com/Feed resource type through ExportAssets, ListAssets, BatchGetAssetsHistory, QueryAssets, Feed, Search, and AnalyzeIamPolicy APIs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- [https://docs.cloud.google.com/asset-inventory/docs/monitoring-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitoring-asset-changes)
- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)

## Supporting Pages

### "Monitor asset changes with Pub/Sub \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The my-bucket Cloud Storage bucket Any BigQuery table gcloud asset feeds create my-feed \ --project = my-project \ --pubsub-topic = projects/ my-project /topics/ my-topic \ --asset-names = //storage.googleapis.com/ my-bucket \ --asset-types = bigquery.googleapis.com/Table \ --content-type = resource Example response assetNames: - //storage.googleapis.com/my-bucket assetTypes: - bigquery.googleapis.com/Table condition: {} contentType: RESOURCE feedOutputConfig: pubsubDestination: topic: projects/my-project/topics/my-topic name: projects/000000000000/feeds/my-feed REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH /feeds Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "feedId" : " FEED ID " , "feed" : { "assetNames" : [ " ASSET NAME 1 " , " ASSET NAME 2 " , "..." ], "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "relationshipTypes" : [ " RELATIONSHIP TYPE 1 " , " RELATIONSHIP TYPE 2 " , "..." ], "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/ TOPIC PROJECT ID /topics/ TOPIC ID " } }, "condition" : { "title" : " CONDITION TITLE " , "description" : " CONDITION DESCRIPTION " , "expression" : " CONDITION EXPRESSION " } } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project to create the feed in. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project to create the feed in.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "feed": { "assetNames": [], "assetTypes": [ "gkemulticloud.googleapis.com/AttachedCluster" ], "feedOutputConfig": { "pubsubDestination": { "topic": "projects/my-project/topics/my-topic" } } }, "update mask": { "paths": ["feed output config.pubsub destination.topic", "asset names", "asset types"] } } "@ Invoke-WebRequest -Method PATCH -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds/ my-feed " Select-Object -Expand Content Example response { "feeds" : [ { "name" : "projects/000000000000/feeds/my-feed" , "assetTypes" : [ "bigquery.googleapis.com/Table" , "gkemulticloud.googleapis.com/AttachedCluster" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } ] } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "feedId": " my-feed ", "feed": { "assetNames": [ "//storage.googleapis.com/ my-bucket " ], "assetTypes": [ "bigquery.googleapis.com/Table" ], "contentType": "RESOURCE", "feedOutputConfig": { "pubsubDestination": { "topic": "projects/ my-project /topics/ my-topic " } } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds" Select-Object -Expand Content Example response { "name" : "projects/000000000000/feeds/my-feed" , "assetNames" : [ "//storage.googleapis.com/my-bucket" ], "assetTypes" : [ "bigquery.googleapis.com/Table" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- REST HTTP method and URL: PATCH https://cloudasset.googleapis.com/v1/ SCOPE PATH /feeds/ FEED ID Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "feed" : { "assetNames" : [ " ASSET NAME 1 " , " ASSET NAME 2 " , "..." ], "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "relationshipTypes" : [ " RELATIONSHIP TYPE 1 " , " RELATIONSHIP TYPE 2 " , "..." ], "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/ TOPIC PROJECT ID /topics/ TOPIC ID " } } }, "condition" : { "title" : " CONDITION TITLE " , "description" : " CONDITION DESCRIPTION " , "expression" : " CONDITION EXPRESSION " }, "update mask" : { "paths" : [ "feed output config.pubsub destination.topic" , ATTRIBUTE PATH 1 , ATTRIBUTE PATH 2 , ... ] } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project to update the feed in. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project to update the feed in.

### "Monitor asset changes with Pub/Sub \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/monitoring-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitoring-asset-changes)
- Source ID: `site-docs-reference-2`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The my-bucket Cloud Storage bucket Any BigQuery table gcloud asset feeds create my-feed \ --project = my-project \ --pubsub-topic = projects/ my-project /topics/ my-topic \ --asset-names = //storage.googleapis.com/ my-bucket \ --asset-types = bigquery.googleapis.com/Table \ --content-type = resource Example response assetNames: - //storage.googleapis.com/my-bucket assetTypes: - bigquery.googleapis.com/Table condition: {} contentType: RESOURCE feedOutputConfig: pubsubDestination: topic: projects/my-project/topics/my-topic name: projects/000000000000/feeds/my-feed REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ SCOPE PATH /feeds Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "feedId" : " FEED ID " , "feed" : { "assetNames" : [ " ASSET NAME 1 " , " ASSET NAME 2 " , "..." ], "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "relationshipTypes" : [ " RELATIONSHIP TYPE 1 " , " RELATIONSHIP TYPE 2 " , "..." ], "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/ TOPIC PROJECT ID /topics/ TOPIC ID " } }, "condition" : { "title" : " CONDITION TITLE " , "description" : " CONDITION DESCRIPTION " , "expression" : " CONDITION EXPRESSION " } } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project to create the feed in. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project to create the feed in.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "feed": { "assetNames": [], "assetTypes": [ "gkemulticloud.googleapis.com/AttachedCluster" ], "feedOutputConfig": { "pubsubDestination": { "topic": "projects/my-project/topics/my-topic" } } }, "update mask": { "paths": ["feed output config.pubsub destination.topic", "asset names", "asset types"] } } "@ Invoke-WebRequest -Method PATCH -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds/ my-feed " Select-Object -Expand Content Example response { "feeds" : [ { "name" : "projects/000000000000/feeds/my-feed" , "assetTypes" : [ "bigquery.googleapis.com/Table" , "gkemulticloud.googleapis.com/AttachedCluster" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } ] } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } $body = @" { "feedId": " my-feed ", "feed": { "assetNames": [ "//storage.googleapis.com/ my-bucket " ], "assetTypes": [ "bigquery.googleapis.com/Table" ], "contentType": "RESOURCE", "feedOutputConfig": { "pubsubDestination": { "topic": "projects/ my-project /topics/ my-topic " } } } } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project /feeds" Select-Object -Expand Content Example response { "name" : "projects/000000000000/feeds/my-feed" , "assetNames" : [ "//storage.googleapis.com/my-bucket" ], "assetTypes" : [ "bigquery.googleapis.com/Table" ], "contentType" : "RESOURCE" , "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/my-project/topics/my-topic" } } } Go To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .
- REST HTTP method and URL: PATCH https://cloudasset.googleapis.com/v1/ SCOPE PATH /feeds/ FEED ID Headers: X-Goog-User-Project: BILLING PROJECT ID Request JSON body: { "feed" : { "assetNames" : [ " ASSET NAME 1 " , " ASSET NAME 2 " , "..." ], "assetTypes" : [ " ASSET TYPE 1 " , " ASSET TYPE 2 " , "..." ], "contentType" : " CONTENT TYPE " , "relationshipTypes" : [ " RELATIONSHIP TYPE 1 " , " RELATIONSHIP TYPE 2 " , "..." ], "feedOutputConfig" : { "pubsubDestination" : { "topic" : "projects/ TOPIC PROJECT ID /topics/ TOPIC ID " } } }, "condition" : { "title" : " CONDITION TITLE " , "description" : " CONDITION DESCRIPTION " , "expression" : " CONDITION EXPRESSION " }, "update mask" : { "paths" : [ "feed output config.pubsub destination.topic" , ATTRIBUTE PATH 1 , ATTRIBUTE PATH 2 , ... ] } } Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project to update the feed in. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project to update the feed in.

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "location:us- ", "readMask": "name,assetType,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances that are running The following sample shows how to search for Compute Engine instances that are running in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "state=RUNNING" \ --asset-types = compute.googleapis.com/Instance \ --read-mask = "name,assetType,location,versionedResources" \ --format = "table(name, assetType, location, versionedResources)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "createTime>2023-31-12", "readMask": "name,assetType,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances located in the US The following sample shows how to search for Compute Engine instances in the my-project project that are located in the US. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "location:us- " \ --asset-types = compute.googleapis.com/Instance \ --format = "table(name, assetType, location)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "state=RUNNING", "readMask": "name,assetType,location,versionedResources" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content IAM deny policies The following sample shows how to search for IAM deny policies in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --asset-types = iam.googleapis.com/PolicyV2 \ --query = "name:denypolicies" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "query": "name:instance 1", "assetTypes": ["compute.googleapis.com/Instance"], "orderBy": "name DESC", "readMask": "name,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Example response { "results" : [ { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-2-1" , "location" : "us-central1-a" }, { "name" : "//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/instance-1" , "location" : "us-central1-a" } ] } C# To learn how to install and use the client library for Cloud Asset Inventory, see Cloud Asset Inventory client libraries .

