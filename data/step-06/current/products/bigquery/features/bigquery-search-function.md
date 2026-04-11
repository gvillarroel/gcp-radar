---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.745Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery SEARCH function"
feature_slug: "bigquery-search-function"
latest_feature_date: "2022-04-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "text search over semi-structured data"
  - "SEARCH function call"
  - "SEARCH predicate"
  - "structured text query"
  - "SEARCH in Standard SQL"
  - "GoogleSQL SEARCH"
  - "SEARCH function"
  - "SEARCH()"
---

# BigQuery SEARCH function

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now includes a SEARCH function in Google Standard SQL to enable efficient text search over unstructured and semi-structured data.

## Extended Definition

BigQuery now includes a SEARCH function in Google Standard SQL to enable efficient text search over unstructured and semi-structured data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- If you specify a value for the distance type argument of the VECTOR SEARCH function , that value is used instead of the vector index's distance type value. ivf options JSON-formatted STRING The options to use with the IVF algorithm.
- When you use the VECTOR SEARCH function to search the vector data, it can use these partitions to reduce the amount of data it needs to read in order to determine a result.
- Higher values create more lists, so you can set the fraction lists to search option of the VECTOR SEARCH function to scan a smaller percentage of the index.
- The index creation itself always uses EUCLIDEAN distance for training but the distance used in the VECTOR SEARCH function can be different.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now use an alternate syntax when you call the VECTOR SEARCH function to improve query performance when you search for a single vector.
- You can also use the AI.SEARCH function, enabling semantic search on tables that have autonomous embedding generation enabled.
- March 24, 2025 Libraries Node.js 7.9.3 (2025-03-17) Bug Fixes Make sure to pass selectedFields to tabledata.list method ( #1449 ) ( 206aff9 ) Libraries Java 2.49.0 (2025-03-20) Features bigquery: Implement getArray in BigQueryResultImpl ( #3693 ) ( e2a3f2c ) Next release from main branch is 2.49.0 ( #3706 ) ( b46a6cc ) Bug Fixes Retry ExceptionHandler not retrying on IOException ( #3668 ) ( 83245b9 ) Dependencies Exclude io.netty:netty-common from org.apache.arrow:arrow-memor… ( #3715 ) ( 11b5809 ) Update actions/upload-artifact action to v4.6.2 ( #3724 ) ( 426a59b ) Update actions/upload-artifact action to v4.6.2 ( #3724 ) ( 483f930 ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.61.0 ( #3703 ) ( 53b07b0 ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.62.0 ( #3726 ) ( 38e004b ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250302-2.0.0 ( #3720 ) ( c0b3902 ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250313-2.0.0 ( #3723 ) ( b8875a8 ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.65.0 ( #3704 ) ( 53b68b1 ) Update dependency com.google.cloud:google-cloud-datacatalog-bom to v1.66.0 ( #3727 ) ( 7339f94 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.45.1 ( #3714 ) ( e4512aa ) Update dependency com.google.oauth-client:google-oauth-client-java6 to v1.39.0 ( #3710 ) ( c0c6352 ) Update dependency com.google.oauth-client:google-oauth-client-jetty to v1.39.0 ( #3711 ) ( 43b86e9 ) Update dependency node to v22 ( #3713 ) ( 251def5 ) Update netty.version to v4.1.119.final ( #3717 ) ( 08a290a ) Documentation Update error handling comment to be more precise in samples ( #3712 ) ( 9eb555f ) Libraries Go 1.67.0 (2025-03-14) Features bigquery/reservation: Add a new field enable gemini in bigquery to .google.cloud.bigquery.reservation.v1.Assignment that indicates if "Gemini in Bigquery"(https ( 601e742 ) bigquery/reservation: Add a new field replication status to .google.cloud.bigquery.reservation.v1.Reservation to provide visibility into errors that could arise during Disaster Recovery(DR) replication ( #11666 ) ( 601e742 ) bigquery/reservation: Add the CONTINUOUS Job type to .google.cloud.bigquery.reservation.v1.Assignment.JobType for continuous SQL jobs ( 601e742 ) bigquery: Support MetadataCacheMode for ExternalDataConfig ( #11803 ) ( af5174d ), refs #11802 Bug Fixes bigquery: Increase timeout for storage api test and remove usage of deprecated pkg ( #11810 ) ( f47e038 ), refs #11801 bigquery: Update golang.org/x/net to 0.37.0 ( 1144978 ) Documentation bigquery/reservation: Remove the section about EDITION UNSPECIFIED in the comment for slot capacity in .google.cloud.bigquery.reservation.v1.Reservation to clarify that ( 601e742 ) bigquery/reservation: Update the google.api.field behavior for the .google.cloud.bigquery.reservation.v1.Reservation.primary location and .google.cloud.bigquery.reservation.v1.Reservation.original primary location fields to clarify that they are OUTPUT ONLY ( 601e742 ) Feature We have redesigned the Add Data dialog to guide you through loading data into BigQuery with a source-first experience and enhanced search and filtering capabilities.
- November 03, 2025 Libraries Go 1.72.0 (2025-10-28) Features bigquery/reservation: Add new BACKGROUND CHANGE DATA CAPTURE , BACKGROUND COLUMN METADATA INDEX , and BACKGROUND SEARCH INDEX REFRESH reservation assignment types ( 182df61 ) bigquery/reservation: Add new reservation IAM policy get/set/test methods ( 182df61 ) bigquery/reservation: Add support for creation and modification of new reservation groups ( 182df61 ) bigquery: Expose continuous query in config ( #13130 ) ( 2f0942b ) Bug Fixes bigquery/v2: Upgrade gRPC service registration func ( 8fffca2 ) bigquery: Upgrade gRPC service registration func ( 8fffca2 ) October 31, 2025 Feature We have increased the row capacity for pivot tables backed by BigQuery in Connected Sheets from 100,000 to 200,000 rows.

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

