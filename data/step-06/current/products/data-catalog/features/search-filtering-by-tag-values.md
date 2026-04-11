---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:06.151Z"
product_name: "Data Catalog"
product_slug: "data-catalog"
feature_name: "Search filtering by tag values"
feature_slug: "search-filtering-by-tag-values"
latest_feature_date: "2022-08-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/data-catalog/docs/tags-and-tag-templates"
  - "https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/catalog/search"
  - "https://docs.cloud.google.com/data-catalog/docs/how-to/search"
keywords:
  - "search"
  - "filtering"
  - "by"
  - "tag"
  - "values"
  - "catalog"
  - "can"
  - "filter"
---

# Search filtering by tag values

Product: Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Data Catalog search can filter results based on tag values.

## Extended Definition

Data Catalog search can filter results based on tag values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/data-catalog/docs/tags-and-tag-templates](https://docs.cloud.google.com/data-catalog/docs/tags-and-tag-templates)
- [https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/catalog/search](https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/catalog/search)
- [https://docs.cloud.google.com/data-catalog/docs/how-to/search](https://docs.cloud.google.com/data-catalog/docs/how-to/search)

## Supporting Pages

### Tags and tag templates \_|\_ Data Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-catalog/docs/tags-and-tag-templates](https://docs.cloud.google.com/data-catalog/docs/tags-and-tag-templates)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Searching for private tags in the Data Catalog page requires that you use the tag: search syntax or the search filters.
- The fields in a tag are defined by a tag template, and each field can be used to store one or more values .
- You can then search for the template fields and values using Data Catalog.
- This document explains two key Data Catalog concepts: Tags : custom metadata fields that you can attach to a data entry to provide context Tag templates : reusable structures that you can use to rapidly create new tags Tags Tags are a type of business metadata.

### "Method: catalog.search \_|\_ Data Catalog Documentation \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/catalog/search](https://docs.cloud.google.com/data-catalog/docs/reference/rest/v1/catalog/search)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "results" : [ { object ( SearchCatalogResult ) } ] , "totalSize" : integer , "nextPageToken" : string , "unreachable" : [ string ] } Fields results[] object ( SearchCatalogResult ) Search results. totalSize integer The approximate total number of entries matched by the query. nextPageToken string Pagination token that can be used in subsequent calls to retrieve the next page of results. unreachable[] string Unreachable locations.
- HTTP request POST https://datacatalog.googleapis.com/v1/catalog:search Request body The request body contains data with the following structure: JSON representation { "scope" : { object ( Scope ) } , "query" : string , "pageSize" : integer , "pageToken" : string , "orderBy" : string , "adminSearch" : boolean } Fields scope object ( Scope ) Required.
- Currently supported case-sensitive values are: relevance that can only be descending last modified timestamp [asc desc] with descending ( desc ) as default default that can only be descending Search queries don't guarantee full recall.
- If set, use searchAll permission granted on organizations from includeOrgIds and projects from includeProjectIds instead of the fine grained per resource permissions when filtering the search results.

### Search data assets with Data Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-catalog/docs/how-to/search](https://docs.cloud.google.com/data-catalog/docs/how-to/search)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To search for data assets publicly available in Google Cloud in addition to the assets available to you, select Include public datasets Additionally, you can do the following: Filter your search by adding a keyword : value to your search terms in the search field: Keyword Description name: Match data asset name column: Match column name or nested column name description: Match table description Perform a tag search by adding one of the following tag keyword prefixes to your search terms in the search field: Tag Description tag: project-name . tag template name Match tag name tag: project-name . tag template name . key Match a tag key tag: project-name . tag template name . key : value Match tag key:string value pair Search expression tips Enclose your search expression in quotes (" search terms ") if it contains spaces.
- For example, if you completed the Tag a BigQuery table by using Data Catalog quickstart, you can search for demo-dataset and select the trips table.
- You can use the playlist add Customize menu to further refine results and filter by specific tag values.
- You can search for the following data assets: BigQuery sharing (formerly Analytics Hub) linked datasets BigQuery datasets, tables, views, and models Bigtable instances, clusters, and tables (including column family details) Data Catalog tag templates, entry groups, and custom entries Dataplex Universal Catalog lakes, zones, tables, and filesets Dataproc Metastore services, databases, and tables Pub/Sub data streams Spanner instances, databases, tables, and views Vertex AI Models, Datasets, and Vertex AI Feature Store resources Assets in enterprise data silos connected to Data Catalog Search scope You might have different search results based on your permissions.

