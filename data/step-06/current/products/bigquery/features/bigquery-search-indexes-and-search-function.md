---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.706Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Search indexes and SEARCH() function"
feature_slug: "bigquery-search-indexes-and-search-function"
latest_feature_date: "2022-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "semi-structured search"
  - "unstructured data search"
  - "SEARCH in Standard SQL"
  - "CREATE SEARCH INDEX"
  - "SEARCH function"
  - "search index"
  - "Search index"
  - "SEARCH()"
---

# BigQuery Search indexes and SEARCH() function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports Search indexes and the SEARCH() function in Google Standard SQL for efficient lookup in unstructured and semi-structured data.

## Extended Definition

BigQuery Search indexes are created in GoogleSQL using the CREATE SEARCH INDEX statement to build search indexes on one or more table columns, with support for explicit column lists or ALL COLUMNS and optional IF NOT EXISTS behavior. The index definition can include options such as analyzer and column-granularity settings, and BigQuery also exposes search-index consumption via INFORMATION_SCHEMA.SEARCH_INDEXES_BY_ORGANIZATION. The provided excerpts do not directly document the SEARCH() function syntax or behavior, so that part of the feature is not evidenced here.

## Evidence Summary

The DDL reference defines how to create search indexes and their options, while release notes describe configurable index column granularity and an INFORMATION_SCHEMA view for search index consumption metrics.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Example The following example assigns the project my project to the prod reservation for query jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'projects/my project' , job type = 'QUERY' ); The following example assigns an organization to the prod reservation for pipeline jobs, such as load and extract jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'organizations/1234' , job type = 'PIPELINE' ); CREATE SEARCH INDEX statement Creates a new search index on one or more columns of a table.
- CREATE TABLE dataset . complex table ( a STRING , my struct STRUCT < string field STRING , int field INT64 > , b ARRAY < STRING > ); CREATE SEARCH INDEX my index ON dataset . complex table ( a OPTIONS ( index granularity = 'GLOBAL' ), my struct , b ) OPTIONS ( analyzer = 'NO OP ANALYZER' , default index column granularity = 'COLUMN' ); CREATE VECTOR INDEX statement Creates a new vector index on a column of a table.
- Syntax CREATE SEARCH INDEX [ IF NOT EXISTS ] index name ON table name ( { ALL COLUMNS [ WITH COLUMN OPTIONS ( column [ , ... ] ) ] column [ , ... ]} ) [ OPTIONS ( index option list ) ] column := column name [ OPTIONS ( index column option list ) ] Arguments IF NOT EXISTS : If there is already a search index by that name on the table, do nothing.
- CREATE TABLE dataset . my table ( a STRING , b INT64 ); CREATE SEARCH INDEX my index ON dataset . my table ( ALL COLUMNS ); The following example creates a search index on columns a , my struct.string field , and b that uses the NO OP ANALYZER text analyzer.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- November 03, 2025 Libraries Go 1.72.0 (2025-10-28) Features bigquery/reservation: Add new BACKGROUND CHANGE DATA CAPTURE , BACKGROUND COLUMN METADATA INDEX , and BACKGROUND SEARCH INDEX REFRESH reservation assignment types ( 182df61 ) bigquery/reservation: Add new reservation IAM policy get/set/test methods ( 182df61 ) bigquery/reservation: Add support for creation and modification of new reservation groups ( 182df61 ) bigquery: Expose continuous query in config ( #13130 ) ( 2f0942b ) Bug Fixes bigquery/v2: Upgrade gRPC service registration func ( 8fffca2 ) bigquery: Upgrade gRPC service registration func ( 8fffca2 ) October 31, 2025 Feature We have increased the row capacity for pivot tables backed by BigQuery in Connected Sheets from 100,000 to 200,000 rows.
- March 26, 2025 Feature You can now set the column granularity when you create a search index , which stores additional column information in your search index to further optimize your search query performance.
- Feature You can set the column granularity when you create a search index , which stores additional column information in your search index to further optimize your search query performance.
- You can now use the INFORMATION SCHEMA.SEARCH INDEXES BY ORGANIZATION view to understand your current consumption towards that limit, broken down by projects and tables.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- DataFrame ( { "uri" : [ "gs://cloud-samples-data/bigquery/tutorials/cymbal-pets/images/cozy-naps-cat-scratching-post-with-condo.png" ] } ) . cache () df image [ "image" ] = bbq . obj . make ref ( df image [ "uri" ], "us.cymbal conn" ) df search = bbq . ai . generate embedding ( embedding model , bbq . obj . get access url ( bbq . obj . fetch metadata ( df image [ "image" ]), "R" ), ) search result = bbq . vector search ( "cymbal pets.products embedding" , "embedding" , df search [ "embedding" ] ) search result The results look similar to the following: +-----------------+-----------------+----------------+----------------------------------------------+--------------------+-------------------------------+------------------------------------------------+----------------+ query.embedding base.product id base.embedding base.image.uri base.image.version base.image.authorizer base.image.details distance +-----------------+-----------------+----------------+----------------------------------------------+--------------------+-------------------------------+------------------------------------------------+----------------+ -0.0112330541 181 -0.0112330541 gs://cloud-samples-data/bigquery/ 12345678910 myproject.region.myconnection {"gcs metadata":{"content type": 0.0 0.0142525584 0.0142525584 tutorials/cymbal-pets/images/ "image/png","md5 hash":"21234567hst16555w60j", 0.0135886827 0.0135886827 cozy-naps-cat-scratching-post-with-condo.png "size":828318,"updated":1742492688982000}} 0.0149955815 0.0149955815 ... ... +-----------------+-----------------+----------------+----------------------------------------------+--------------------+-------------------------------+------------------------------------------------+----------------+ -0.0112330541 187 -0.0190353896 gs://cloud-samples-data/bigquery/ 23456789101 myproject.region.myconnection {"gcs metadata":{"content type": 0.4216330832..
- For more information, see Set up ADC for a local development environment . df products mm [ "url" ] = bbq . obj . get access url ( df products mm [ "image" ], "R" ) . to frame () df products mm [ "prompt0" ] = "Can you describe the following image?" df products mm [ "prompt" ] = bbq . struct ( df products mm [[ "prompt0" , "url" ]]) df products mm = bbq . ai . generate table ( gemini model , df products mm , output schema = { "image description" : "STRING" } ) df products mm = df products mm [ [ "product id" , "product name" , "brand" , "category" , "subcategory" , "animal type" , "search keywords" , "price" , "description" , "inventory level" , "supplier id" , "average rating" , "image" , "image description" , ] ] Run the following to update the animal type , search keywords , and subcategory columns with generated data: SQL UPDATE cymbal pets . products mm p SET p . animal type = s . animal type , p . search keywords = s . search keywords , p . subcategory = s . subcategory FROM ( SELECT animal type , search keywords , subcategory , uri FROM AI .
- For more information, see Set up ADC for a local development environment . df prompt = bbq . obj . get access url ( df products mm [ "image" ], "R" ) . to frame () df prompt [ "prompt0" ] = "For the image of a pet product, concisely generate the following metadata: 1) animal type and 2) 5 SEO search keywords, and 3) product subcategory." df products mm [ "prompt" ] = bbq . struct ( df prompt [[ "prompt0" , "image" ]]) df products mm = df products mm . drop ( columns = [ "animal type" , "search keywords" , "subcategory" ] ) df products mm = bbq . ai . generate table ( gemini model , df products mm , output schema = "animal type STRING, search keywords ARRAY<STRING>, subcategory STRING" , ) Run the following to view the generated data: SQL SELECT product name , image description , animal type , search keywords , subcategory , FROM cymbal pets . products mm ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- For more information, see Set up ADC for a local development environment . df products mm [ [ "product name" , "image description" , "animal type" , "search keywords" , "subcategory" , ] ] The results look similar to the following: +--------------------------------+-------------------------------------+-------------+------------------------+------------------+ product name image.description animal type search keywords subcategory +--------------------------------+-------------------------------------+-------------+------------------------+------------------+ AquaClear Aquarium Background The image shows a colorful coral fish aquarium background aquarium decor reef backdrop.

