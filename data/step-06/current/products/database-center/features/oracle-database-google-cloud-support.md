---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:35.132Z"
product_name: "Database Center"
product_slug: "database-center"
feature_name: "Oracle Database@Google Cloud support"
feature_slug: "oracle-database-google-cloud-support"
latest_feature_date: "2025-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-center/docs/metrics"
  - "https://docs.cloud.google.com/database-center/docs/analyze-database-inventory"
  - "https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient"
keywords:
  - "oracle"
  - "database"
  - "center"
  - "supports"
  - "inventory"
  - "metrics"
  - "and"
  - "alerts"
---

# Oracle Database@Google Cloud support

Product: Database Center
Coverage: MEDIUM

## Step 02 Summary

Database Center supports inventory, metrics, and alerts monitoring for Oracle Database@Google Cloud databases.

## Extended Definition

Database Center supports inventory, metrics, and alerts monitoring for Oracle Database@Google Cloud databases.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-center/docs/metrics](https://docs.cloud.google.com/database-center/docs/metrics)
- [https://docs.cloud.google.com/database-center/docs/analyze-database-inventory](https://docs.cloud.google.com/database-center/docs/analyze-database-inventory)
- [https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information](https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient)

## Supporting Pages

### "Metrics and alerting policy filters \_|\_ Database Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-center/docs/metrics](https://docs.cloud.google.com/database-center/docs/metrics)
- Source ID: `site-docs-root`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Database Center Guides Send feedback Metrics and alerting policy filters Stay organized with collections Save and categorize content based on your preferences.
- Preview — Database Center metrics and filters This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- However, if you add the filters product=CLOUD SQL and version=2 to a chart, then the chart won't display data. product engine version ALLOYDB POSTGRES 14 , 15 , 16 , 17 BIGTABLE NATIVE N/A CLOUD SQL MYSQL 5.6 , 5.7 , 8.0 , 8.4 CLOUD SQL POSTGRES 9.6 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 CLOUD SQL SQL SERVER SQLSERVER 2017 EXPRESS , SQLSERVER 2017 STANDARD , SQLSERVER 2017 ENTERPRISE , SQLSERVER 2017 WEB , SQLSERVER 2019 EXPRESS , SQLSERVER 2019 STANDARD , SQLSERVER 2019 ENTERPRISE , SQLSERVER 2019 WEB , SQLSERVER 2022 EXPRESS , SQLSERVER 2022 STANDARD , SQLSERVER 2022 ENTERPRISE , SQLSERVER 2022 WEB COMPUTE ENGINE MYSQL , POSTGRES , SQL SERVER N/A FIRESTORE FIRESTORE WITH NATIVE MODE , FIRESTORE WITH DATASTORE MODE , FIRESTORE WITH MONGODB COMPATIBILITY MODE N/A MEMORYSTORE MEMORYSTORE FOR REDIS 3.2 , 4.0 , 5.0 , 6.X , 7.0 , 7.2 MEMORYSTORE MEMORYSTORE FOR REDIS CLUSTER 7 ORACLE ON GCP EXADATA ORACLE 19, 23 ORACLE ON GCP ADB SERVERLESS ORACLE 19c, 23ai SPANNER NATIVE N/A Filter by signal type The New database signals (resource/new signal count) metric type defines the one label key, issue type .
- To help you identify and troubleshoot performance issues for database products such as Cloud SQL, AlloyDB for PostgreSQL, and Spanner, create custom dashboards that display useful metrics and information about your alerting policies.

### "Analyze your database inventory \_|\_ Database Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-center/docs/analyze-database-inventory](https://docs.cloud.google.com/database-center/docs/analyze-database-inventory)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Database Center Guides Send feedback Analyze your database inventory Stay organized with collections Save and categorize content based on your preferences.
- The Fleet inventory section of the Database Center dashboard gives you a visual overview of the database groups and database resources in your database fleet.
- This document describes how to analyze your database inventory by grouping and sorting database fleet health information that you're interested in.
- Group and sort database fleet health information In the Google Cloud console, go to the Database Center Overview page.

### "Filter resources and export fleet inventory information \_|\_ Database Center\

- URL: [https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information](https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Database Center Guides Send feedback Filter resources and export fleet inventory information Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to filter the database fleet information that is displayed in your Database Center dashboard, and describes how to export database fleet inventory information into a CSV file.
- You can filter the following information in the Database Center dashboard: Database products and versions Regions Labels Tags Google Cloud projects, if you select a folder or organization in the Open project picker in the Google Cloud console.
- Database Center downloads fleet inventory information for your database scope (Google Cloud project, folder, or organization) resources to a CSV file.

### "Class DatabaseCenterClient (0.7.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.DatabaseCenterClient)
- Source ID: `site-python-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- QueryDatabaseResourceGroupsRequest ( parent="parent value", ) Make the request page result = client. query database resource groups (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.databasecenter v1beta.types.QueryDatabaseResourceGroupsRequest , dict] The request object.
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,DatabaseCenterTransport,Callable[..., DatabaseCenterTransport]]] The transport to use, or a Callable that constructs and returns a new transport.
- AggregateFleetRequest ( parent="parent value", ) Make the request page result = client. aggregate fleet (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.databasecenter v1beta.types.AggregateFleetRequest , dict] The request object.
- QueryProductsRequest ( parent="parent value", ) Make the request page result = client. query products (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.databasecenter v1beta.types.QueryProductsRequest , dict] The request object.

