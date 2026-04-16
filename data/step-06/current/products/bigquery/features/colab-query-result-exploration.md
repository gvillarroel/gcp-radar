---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.652Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Colab query result exploration"
feature_slug: "colab-query-result-exploration"
latest_feature_date: "2022-10-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent"
  - "https://docs.cloud.google.com/bigquery/docs/visualize-jupyter"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append"
keywords:
  - "colab"
  - "query"
  - "result"
  - "exploration"
  - "bigquery"
  - "results"
  - "can"
  - "explored"
---

# Colab query result exploration

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery query results can be explored in Colab with Python libraries.

## Extended Definition

BigQuery query results can be explored in Colab with Python libraries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)
- [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append)

## Supporting Pages

### "Use the Colab Enterprise Data Science Agent with BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent](https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent)
- Source ID: `site-docs-reference-5`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Data Science Agent (DSA) for Colab Enterprise and BigQuery lets you automate exploratory data analysis, perform machine learning tasks, and deliver insights all within a Colab Enterprise notebook.
- Use the Colab Enterprise Data Science Agent with BigQuery Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- If you're new to Colab Enterprise in BigQuery, see the setup steps on the Create notebooks page.
- For example: "Help me perform exploratory data analysis and get insights about the data in this table: project id : dataset . table ." Replace the following: project id : your project ID dataset : the name of the dataset that contains the table you're analyzing table : the name of the table you're analyzing Type @ to search for a BigQuery table in your current project.

### "Visualize geospatial analytics data using a Colab notebook \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Query data in BigQuery and download the results into Colab.
- This code uses the %%bigquery magic function to run the query and return the results in a DataFrame: Query the neighborhood name and geometry from the San Francisco neighborhoods dataset. %% bigquery gdf sanfrancisco neighborhoods -- project { GCP PROJECT ID } -- use geodataframe geometry SELECT neighborhood , neighborhood geom AS geometry FROM bigquery - public - data . san francisco neighborhoods . boundaries Click play circle filled Run cell .
- This code uses the %%bigquery magic function to run the query and return the results in a DataFrame: Query the incident key and location data from the SFPD reports dataset. %% bigquery gdf incidents -- project { GCP PROJECT ID } -- use geodataframe location geography SELECT unique key , location geography FROM ( SELECT unique key , SAFE .
- This code uses the %%bigquery magic function to run the query and return the results in a DataFrame: Query the station ID, station name, station short name, and station geometry from the bike share dataset.

### Add a column using a query job \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-query-append)
- Source ID: `site-docs-reference-required-15`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate client const bigquery = new BigQuery (); async function addColumnQueryAppend () { // Adds a new column to a BigQuery table while appending rows via a query job. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Retrieve destination table reference const [ table ] = await bigquery . dataset ( datasetId ). table ( tableId ). get (); const destinationTableRef = table . metadata . tableReference ; // In this example, the existing table contains only the 'name' column. // 'REQUIRED' fields cannot be added to an existing schema, // so the additional column must be 'NULLABLE'. const query = SELECT name, year FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 10 ; // Set load job options const options = { query : query , schemaUpdateOptions : [ 'ALLOW FIELD ADDITION' ], writeDisposition : 'WRITE APPEND' , destinationTable : destinationTableRef , // Location must match that of the dataset(s) referenced in the query. location : 'US' , }; const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); // Wait for the query to finish const [ rows ] = await job . getQueryResults (); console . log ( Job ${ job . id } completed. ); // Print the results console . log ( 'Rows:' ); rows . forEach ( row = > console . log ( row )); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // createTableAndWidenQuery demonstrates how the schema of a table can be modified to add columns by appending // query results that include the new columns. func createTableAndWidenQuery ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- Client () TODO(developer): Set table id to the ID of the destination table. table id = "your-project.your dataset.your table name" Retrieves the destination table and checks the length of the schema. table = client . get table ( table id ) # Make an API request. print ( "Table {} contains {} columns" . format ( table id , len ( table . schema ))) Configures the query to append the results to a destination table, allowing field addition. job config = bigquery .
- WRITE APPEND , ) Start the query, passing in the extra configuration. client . query and wait ( In this example, the existing table contains only the 'full name' and 'age' columns, while the results of this query will contain an additional 'favorite color' column. 'SELECT "Timmy" as full name, 85 as age, "Blue" as favorite color;' , job config = job config , ) # Make an API request and wait for job to complete.

