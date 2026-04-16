---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.892Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Bay Area Bike Share Trips public dataset"
feature_slug: "bay-area-bike-share-trips-public-dataset"
latest_feature_date: "2017-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui"
keywords:
  - "bay"
  - "area"
  - "bike"
  - "share"
  - "trips"
  - "public"
  - "dataset"
  - "bigquery"
---

# Bay Area Bike Share Trips public dataset

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery public datasets program includes the Bay Area Bike Share Trips dataset.

## Extended Definition

The BigQuery public datasets program includes the Bay Area Bike Share Trips dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui)

## Supporting Pages

### Try BigQuery using the sandbox \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the query editor , enter the following query: SELECT start station name , start station latitude , start station longitude , ST GEOGPOINT ( start station longitude , start station latitude ) AS geo location , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips GROUP BY 1 , 2 , 3 ORDER BY num trips DESC LIMIT 100 ; If the query is valid, then a check mark appears along with the amount of data that the query processes.
- Query a public dataset In the following steps, you query the citibike trips table to determine the 100 most popular Citi Bike stations in the NYC Citi Bike Trips public dataset.
- The BigQuery sandbox does not support several BigQuery features, including the following: Streaming data Data manipulation language (DML) statements BigQuery Data Transfer Service View a public dataset BigQuery public datasets are available by default in BigQuery Studio in a project named bigquery-public-data .
- Delete the project If you used the BigQuery sandbox to query the public dataset, then billing is not enabled for your project, and you don't need to delete the project.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, enter the following statement: CREATE TABLE mydataset . trips AS ( SELECT bike id , start time , duration minutes FROM bigquery - public - data . austin bikeshare . bikeshare trips ); Click play circle Run .
- SQL The following example uses the CREATE TABLE statement to create the trips table from data in the public bikeshare trips table: In the Google Cloud console, go to the BigQuery page.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- TABLES WHERE table name = 'population by zip 2010' ; The result is similar to the following: +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ table name ddl +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ population by zip 2010 CREATE TABLE bigquery-public-data.census bureau usa.population by zip 2010 ( geo id STRING OPTIONS(description="Geo code"), zipcode STRING NOT NULL OPTIONS(description="Five digit ZIP Code Tabulation Area Census Code"), population INT64 OPTIONS(description="The total count of the population for this segment."), minimum age INT64 OPTIONS(description="The minimum age in the age range.

### Try BigQuery using the sandbox \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui)
- Source ID: `site-docs-root-2`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the query editor , enter the following query: SELECT start station name , start station latitude , start station longitude , ST GEOGPOINT ( start station longitude , start station latitude ) AS geo location , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips GROUP BY 1 , 2 , 3 ORDER BY num trips DESC LIMIT 100 ; If the query is valid, then a check mark appears along with the amount of data that the query processes.
- Query a public dataset In the following steps, you query the citibike trips table to determine the 100 most popular Citi Bike stations in the NYC Citi Bike Trips public dataset.
- The BigQuery sandbox does not support several BigQuery features, including the following: Streaming data Data manipulation language (DML) statements BigQuery Data Transfer Service View a public dataset BigQuery public datasets are available by default in BigQuery Studio in a project named bigquery-public-data .
- Delete the project If you used the BigQuery sandbox to query the public dataset, then billing is not enabled for your project, and you don't need to delete the project.

