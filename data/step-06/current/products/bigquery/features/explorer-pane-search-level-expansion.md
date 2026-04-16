---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.625Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Explorer pane search level expansion"
feature_slug: "explorer-pane-search-level-expansion"
latest_feature_date: "2023-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
keywords:
  - "explorer"
  - "pane"
  - "search"
  - "level"
  - "expansion"
  - "can"
  - "show"
  - "all"
---

# Explorer pane search level expansion

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The Explorer pane can show all resources at the searched resource's level through the Show more action.

## Extended Definition

The Explorer pane can show all resources at the searched resource's level through the Show more action.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)

## Supporting Pages

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- This permission is required for creating replica materialized views. bigquery.tables.restoreSnapshot Table Restore a table snapshot. bigquery.tables.setCategory Table Set policy tags in the table's schema. bigquery.tables.setColumnDataPolicy Table Set column-level access policies on a table. bigquery.tables.setIamPolicy Table Set access controls on a table. bigquery.tables.update Table Update table. metadata. bigquery.tables.get is also required to update table metadata in the console. bigquery.tables.updateData Table Update table data. bigquery.tables.updateIndex Table Update a search index on the table.
- Go to BigQuery In the left pane, click explore Explorer : In the Explorer pane, expand your project, click Datasets , and then select a dataset, or select a table, view, or routine in the dataset.
- Go to BigQuery In the left pane, click explore Explorer : In the Explorer pane, expand your project, click Datasets , and then select a dataset.
- Go to BigQuery In the left pane, click explore Explorer : In the Explorer pane, expand your project, click Datasets , and then select a dataset.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . df products mm [ "url" ] = bbq . obj . get access url ( df products mm [ "image" ], "R" ) . to frame () df products mm [ "prompt0" ] = "Can you describe the following image?" df products mm [ "prompt" ] = bbq . struct ( df products mm [[ "prompt0" , "url" ]]) df products mm = bbq . ai . generate table ( gemini model , df products mm , output schema = { "image description" : "STRING" } ) df products mm = df products mm [ [ "product id" , "product name" , "brand" , "category" , "subcategory" , "animal type" , "search keywords" , "price" , "description" , "inventory level" , "supplier id" , "average rating" , "image" , "image description" , ] ] Run the following to update the animal type , search keywords , and subcategory columns with generated data: SQL UPDATE cymbal pets . products mm p SET p . animal type = s . animal type , p . search keywords = s . search keywords , p . subcategory = s . subcategory FROM ( SELECT animal type , search keywords , subcategory , uri FROM AI .
- For more information, see Set up ADC for a local development environment . df products mm [ [ "product name" , "image description" , "animal type" , "search keywords" , "subcategory" , ] ] The results look similar to the following: +--------------------------------+-------------------------------------+-------------+------------------------+------------------+ product name image.description animal type search keywords subcategory +--------------------------------+-------------------------------------+-------------+------------------------+------------------+ AquaClear Aquarium Background The image shows a colorful coral fish aquarium background aquarium decor reef backdrop.
- To disable the voice message, record a blank message (hold VOICE button for 10 seconds without speaking). (Meal Enabled) 6.5 Low Food Level Indicator: +-------------------------------------------------------------------------------------------------------------------------------------------+ ... +-------------------------------------------------------------------------------------------------------------------------------------------+ Generate embeddings and perform a vector search Generate embeddings from image data, and then use the embeddings to return similar images by using vector search .
- Run the following to create and populate the image description column: SQL CREATE OR REPLACE TABLE cymbal pets . products mm AS SELECT product id , product name , brand , category , subcategory , animal type , search keywords , price , description , inventory level , supplier id , average rating , image , image description FROM AI .

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use administrative jobs explorer: To see data at project level: bigquery.jobs.listAll on the project To see data at organization level: bigquery.jobs.listAll on the organization To filter by reservations in your organization: bigquery.reservations.list on the organization You might also be able to get these permissions with custom roles or other predefined roles .
- System level analysis The System level analysis pane describes the factors potentially affecting the two jobs at the system level.
- Query level analysis The Query level analysis pane describes the differences between the two jobs at the query level.
- The System level analysis pane can suggest areas for improvement based on the differences between the two queries.

