---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.912Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Standard SQL"
feature_slug: "standard-sql"
latest_feature_date: "2016-09-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql"
  - "https://docs.cloud.google.com/bigquery/docs/introduction-sql"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "standard"
  - "sql"
  - "bigquery"
  - "supports"
  - "based"
  - "2011"
  - "extensions"
  - "nested"
---

# Standard SQL

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports Standard SQL based on the SQL 2011 standard with extensions for nested and repeated data; Standard SQL provides SQL 2011-based query support with extensions for nested and repeated data.

## Extended Definition

BigQuery supports Standard SQL based on the SQL 2011 standard with extensions for nested and repeated data; Standard SQL provides SQL 2011-based query support with extensions for nested and repeated data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql)
- [https://docs.cloud.google.com/bigquery/docs/introduction-sql](https://docs.cloud.google.com/bigquery/docs/introduction-sql)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### Introduction to SQL in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/introduction-sql](https://docs.cloud.google.com/bigquery/docs/introduction-sql)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- BigQuery SQL dialects BigQuery supports the GoogleSQL dialect, which is the recommended dialect for all new projects.
- Switch to the legacy SQL dialect To use legacy SQL syntax in a query job, set the useLegacySql parameter to true . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryLegacy () { // Queries the U.S. given names dataset for the state of Texas using legacy SQL. const query = 'SELECT word FROM [bigquery-public-data:samples.shakespeare] LIMIT 10;' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , useLegacySql : true , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); // Wait for the query to finish const [ rows ] = await job . getQueryResults (); // Print the results console . log ( 'Rows:' ); rows . forEach ( row = > console . log ( row )); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- Switch to the legacy SQL dialect To use legacy SQL syntax in a query job, pass the option legacy sql: true with your query. require "google/cloud/bigquery" def query legacy bigquery = Google :: Cloud :: Bigquery . new sql = "SELECT name FROM [bigquery-public-data:usa names.usa 1910 2013] " \ "WHERE state = 'TX' " \ "LIMIT 100" results = bigquery . query sql , legacy sql : true do config Location must match that of the dataset(s) referenced in the query. config . location = "US" end results . each do row puts row . inspect end end What's next For information about how to run a SQL query in BigQuery, see Running interactive and batch query jobs .

### Introduction to SQL in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql)
- Source ID: `site-docs-reference-required-6`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- BigQuery SQL dialects BigQuery supports the GoogleSQL dialect, which is the recommended dialect for all new projects.
- Switch to the legacy SQL dialect To use legacy SQL syntax in a query job, set the useLegacySql parameter to true . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryLegacy () { // Queries the U.S. given names dataset for the state of Texas using legacy SQL. const query = 'SELECT word FROM [bigquery-public-data:samples.shakespeare] LIMIT 10;' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , useLegacySql : true , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); // Wait for the query to finish const [ rows ] = await job . getQueryResults (); // Print the results console . log ( 'Rows:' ); rows . forEach ( row = > console . log ( row )); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- Switch to the legacy SQL dialect To use legacy SQL syntax in a query job, pass the option legacy sql: true with your query. require "google/cloud/bigquery" def query legacy bigquery = Google :: Cloud :: Bigquery . new sql = "SELECT name FROM [bigquery-public-data:usa names.usa 1910 2013] " \ "WHERE state = 'TX' " \ "LIMIT 100" results = bigquery . query sql , legacy sql : true do config Location must match that of the dataset(s) referenced in the query. config . location = "US" end results . each do row puts row . inspect end end What's next For information about how to run a SQL query in BigQuery, see Running interactive and batch query jobs .

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . df manuals agg The results look similar to the following: +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ manual.uri manual.version manual.authorizer manual.details chunks.uri chunks.version chunks.authorizer chunks.details +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ gs://cloud-samples-data/bigquery/ 1742492785900455 myproject.region.myconnection {"gcs metadata":{"content type":"application/pef", gs://cloud-samples-data/bigquery/ 1745875761227129 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"c9032b037693d15a33210d638c763d0e", tutorials/cymbal-pets/documents/ "md5 hash":"5a1116cce4978ec1b094d8e8b49a1d7c", crittercuisine 5000 user manual.pdf "size":566105,"updated":1742492785941000}} crittercuisine 5000 user manual page1.pdf "size":504583,"updated":1745875761266000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ crittercuisine 5000 user manual page1.pdf 1745875760613874 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"94d03ec65d28b173bc87eac7e587b325", crittercuisine 5000 user manual page2.pdf "size":94622,"updated":1745875760649000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ ... ... ... ... +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ Run the following to generate a single response from a Gemini model based on the analysis of an array of ObjectRef values: SQL WITH manuals AS ( SELECT OBJ .
- Create the products table Create a standard table that contains the Cymbal pets product information: In the Google Cloud console, go to the BigQuery page.
- Home Documentation Data analytics BigQuery Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Objectives Use ObjectRef values to store image data alongside structured data in a BigQuery standard table .

