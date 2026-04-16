---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:34.773Z"
product_name: "Data Catalog"
product_slug: "data-catalog"
feature_name: "Dataplex entry cataloging and search"
feature_slug: "dataplex-entry-cataloging-and-search"
latest_feature_date: "2022-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/data-catalog/docs/how-to/search"
  - "https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/catalog/search"
  - "https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient"
keywords:
  - "dataplex"
  - "entry"
  - "cataloging"
  - "and"
  - "search"
  - "catalog"
  - "can"
  - "lakes"
---

# Dataplex entry cataloging and search

Product: Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Data Catalog can catalog and search Dataplex lakes, zones, tables, and filesets.

## Extended Definition

Data Catalog can catalog and search Dataplex lakes, zones, tables, and filesets.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/data-catalog/docs/how-to/search](https://docs.cloud.google.com/data-catalog/docs/how-to/search)
- [https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/catalog/search](https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/catalog/search)
- [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient)

## Supporting Pages

### Search data assets with Data Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-catalog/docs/how-to/search](https://docs.cloud.google.com/data-catalog/docs/how-to/search)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can search for the following data assets: BigQuery sharing (formerly Analytics Hub) linked datasets BigQuery datasets, tables, views, and models Bigtable instances, clusters, and tables (including column family details) Data Catalog tag templates, entry groups, and custom entries Dataplex Universal Catalog lakes, zones, tables, and filesets Dataproc Metastore services, databases, and tables Pub/Sub data streams Spanner instances, databases, tables, and views Vertex AI Models, Datasets, and Vertex AI Feature Store resources Assets in enterprise data silos connected to Data Catalog Search scope You might have different search results based on your permissions.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " project-id " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https://datacatalog.googleapis.com/v1/catalog:search" Select-Object -Expand Content You should receive a JSON response similar to the following: { "results":[ { "searchResultType":"ENTRY", "searchResultSubtype":"entry.table", "relativeResourceName":"projects/ project-id /locations/US/entryGroups/@bigquery/entries/ entry1-id ", "linkedResource":"//bigquery.googleapis.com/projects/ project-id /datasets/demo dataset/tables/taxi trips" }, { "searchResultType":"ENTRY", "searchResultSubtype":"entry.table", "relativeResourceName":"projects/ project-id /locations/US/entryGroups/@bigquery/entries/ entry2-id ", "linkedResource":"//bigquery.googleapis.com/projects/ project-id /datasets/demo dataset/tables/tlc yellow trips 2018" } ] } View table details Use Data Catalog to view table details.
- For example, if you completed the Tag a BigQuery table by using Data Catalog quickstart, you can search for demo-dataset and select the trips table.
- Individual date-sharded tables aren't visible in Data Catalog search, even if they are present in Data Catalog and can be tagged.

### "Method: catalog.search \_|\_ Data Catalog Documentation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/catalog/search](https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/catalog/search)
- Source ID: `site-api-reference`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "results" : [ { object ( SearchCatalogResult ) } ] , "totalSize" : integer , "nextPageToken" : string , "unreachable" : [ string ] } Fields results[] object ( SearchCatalogResult ) Search results. totalSize integer The approximate total number of entries matched by the query. nextPageToken string Pagination token that can be used in subsequent calls to retrieve the next page of results. unreachable[] string Unreachable locations.
- Home Technology areas Data Catalog Documentation Reference Send feedback Method: catalog.search Stay organized with collections Save and categorize content based on your preferences.
- To get additional information on an error, repeat the search request and restrict it to specific locations by setting the SearchCatalogRequest.scope.restricted locations parameter.
- Applicable only when the search result type is ENTRY . system can be only one of the following: integratedSystem enum ( IntegratedSystem ) Output only.

### "Class DataCatalogAsyncClient (3.29.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient)
- Source ID: `site-python-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data Catalog automatically creates entry groups with names that start with the @ symbol for the following resources: BigQuery entries ( @bigquery ) Pub/Sub topics ( @pubsub ) Dataproc Metastore services ( @dataproc metastore {SERVICE NAME HASH} ) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies.
- Supported resources are: Tag templates Entry groups Note: This method sets policies only within Data Catalog and can't be used to manage policies in BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources synced with the Data Catalog.
- Supported resources are: Tag templates Entry groups Note: This method gets policies only within Data Catalog and can't be used to get policies from BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources ingested into Data Catalog.
- ReconcileTags returns a [long-running operation] [google.longrunning.Operation] resource that can be queried with Operations.GetOperation][google.longrunning.Operations.GetOperation] to return [ReconcileTagsMetadata] [google.cloud.datacatalog.v1.ReconcileTagsMetadata] and a [ReconcileTagsResponse] [google.cloud.datacatalog.v1.ReconcileTagsResponse] message.

### "Class DataCatalogClient (3.29.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient)
- Source ID: `site-python-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data Catalog automatically creates entry groups with names that start with the @ symbol for the following resources: BigQuery entries ( @bigquery ) Pub/Sub topics ( @pubsub ) Dataproc Metastore services ( @dataproc metastore {SERVICE NAME HASH} ) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies.
- Supported resources are: Tag templates Entry groups Note: This method sets policies only within Data Catalog and can't be used to manage policies in BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources synced with the Data Catalog.
- Supported resources are: Tag templates Entry groups Note: This method gets policies only within Data Catalog and can't be used to get policies from BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources ingested into Data Catalog.
- ReconcileTags returns a [long-running operation] [google.longrunning.Operation] resource that can be queried with Operations.GetOperation][google.longrunning.Operations.GetOperation] to return [ReconcileTagsMetadata] [google.cloud.datacatalog.v1.ReconcileTagsMetadata] and a [ReconcileTagsResponse] [google.cloud.datacatalog.v1.ReconcileTagsResponse] message.

