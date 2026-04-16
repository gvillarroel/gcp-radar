---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.894Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "San Francisco Fire Department Service Calls public dataset"
feature_slug: "san-francisco-fire-department-service-calls-public-dataset"
latest_feature_date: "2017-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/visualize-jupyter"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries"
keywords:
  - "san"
  - "francisco"
  - "fire"
  - "department"
  - "calls"
  - "public"
  - "dataset"
  - "bigquery"
---

# San Francisco Fire Department Service Calls public dataset

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery public datasets program includes the San Francisco Fire Department Service Calls dataset.

## Extended Definition

The BigQuery public datasets program includes the San Francisco Fire Department Service Calls dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries)

## Supporting Pages

### "Visualize geospatial analytics data using a Colab notebook \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/visualize-jupyter](https://docs.cloud.google.com/bigquery/docs/visualize-jupyter)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- This tutorial uses the following BigQuery public datasets : San Francisco Ford GoBike Share San Francisco Neighborhoods San Francisco Police Department (SFPD) Reports For information on accessing these public datasets, see Access public datasets in the Google Cloud console .
- In the following example, you query data in the bigquery-public-data.san francisco sfpd incidents.sfpd incidents table in the San Francisco Police Department (SFPD) Reports dataset.
- This code uses the %%bigquery magic function to run the query and return the results in a DataFrame: Query the neighborhood name and geometry from the San Francisco neighborhoods dataset. %% bigquery gdf sanfrancisco neighborhoods -- project { GCP PROJECT ID } -- use geodataframe geometry SELECT neighborhood , neighborhood geom AS geometry FROM bigquery - public - data . san francisco neighborhoods . boundaries Click play circle filled Run cell .
- You use the public datasets to create the following visualizations: A scatter plot of all bike share stations from the Ford GoBike Share dataset Polygons in the San Francisco Neighborhoods dataset A choropleth map of the number of bike share stations by neighborhood A heatmap of incidents from the San Francisco Police Department Reports dataset Objectives Set up authentication with Google Cloud and, optionally, Google Maps.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example of gcloud and bq commands in a bash script: #!/bin/bash gcloud config set project myProject bq query --use legacy sql = false --destination table = myDataset.myTable \ 'SELECT word, SUM(word count) AS count FROM bigquery-public-data`.samples.shakespeare WHERE word LIKE "%raisin%" GROUP BY word' Use a service account You can use a service account to make authorized API calls or run query jobs on your behalf.
- For example: --filter "labels.department:marketing labels.team:sales" For transfer configurations, use dataSourceIds as the key, and one of the following data sources as the value: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration For example: --filter labels.dataSourceIds:dcm dt For transfer runs, use states as the key and one or more of the following transfer states as the value: SUCCEEDED FAILED PENDING RUNNING CANCELLED For example: --filter="states:FAILED" For jobs, use states as the key and one or more of the following job states as the value: RUNNING PENDING DONE For example: bq ls --jobs --filter="states:RUNNING" bq ls --jobs --filter="states:RUNNING,PENDING" --jobs={true false} or -j={true false} To list jobs, set to true .
- For example, this command specifies false for the boolean flag --use legacy sql by placing no at the front of the flag: bq query --nouse legacy sql \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Alternatively, to specify false as the flag's argument, you can enter the following: bq query --use legacy sql = false \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Run commands in a script You can run the bq command-line tool in a script, as you would run a Google Cloud CLI command .
- Synopsis bq insert [ FLAGS ] TABLE FILE Examples bq insert --ignore unknown values --template suffix = insert myDataset.myTable /tmp/myData.json echo '{"a":1, "b":2}' bq insert myDataset.myTable Flags and arguments The bq insert command uses the following flags and arguments: --ignore unknown values={true false} or -i={true false} When set to true , BigQuery ignores any key-value pairs that don't match the table's schema, and inserts the row with the data that does match the schema.

### "Query a public dataset with the BigQuery client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- To create a query against the bigquery-public-data.stackoverflow dataset that returns the top 10 most viewed Stack Overflow pages and their view counts, copy the following code into the app.js file: // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); async function queryStackOverflow () { // Queries a public Stack Overflow dataset. // Create a client const bigqueryClient = new BigQuery (); // The SQL query to run const sqlQuery = SELECT CONCAT( 'https://stackoverflow.com/questions/', CAST(id as STRING)) as url, view count FROM \bigquery-public-data.stackoverflow.posts questions\ WHERE tags like '%google-bigquery%' ORDER BY view count DESC LIMIT 10 ; const options = { query : sqlQuery , // Location must match that of the dataset(s) referenced in the query. location : 'US' , }; // Run the query const [ rows ] = await bigqueryClient . query ( options ); console . log ( 'Query Results:' ); rows . forEach ( row = > { const url = row [ 'url' ]; const viewCount = row [ 'view count' ]; console . log ( url: ${ url } , ${ viewCount } views ); }); } queryStackOverflow (); Click Open Terminal .
- If you are prompted to authorize Cloud Shell and agree to the terms, click Authorize . php app.php The result is similar to the following: --- Row 1 --- url: https://stackoverflow.com/questions/35159967, 170023 views --- Row 2 --- url: https://stackoverflow.com/questions/22879669, 142581 views --- Row 3 --- url: https://stackoverflow.com/questions/10604135, 132406 views --- Row 4 --- url: https://stackoverflow.com/questions/44564887, 128781 views --- Row 5 --- url: https://stackoverflow.com/questions/27060396, 127008 views --- Row 6 --- url: https://stackoverflow.com/questions/12482637, 120766 views --- Row 7 --- url: https://stackoverflow.com/questions/20673986, 115720 views --- Row 8 --- url: https://stackoverflow.com/questions/39109817, 108368 views --- Row 9 --- url: https://stackoverflow.com/questions/11057219, 105175 views --- Row 10 --- url: https://stackoverflow.com/questions/43195143, 101878 views Found 10 row(s) You have successfully queried a public dataset with the BigQuery PHP client library.
- If you are prompted to authorize Cloud Shell and agree to the terms, click Authorize . node app.js The result is similar to the following: Query Results: url: https://stackoverflow.com/questions/35159967, 170023 views url: https://stackoverflow.com/questions/22879669, 142581 views url: https://stackoverflow.com/questions/10604135, 132406 views url: https://stackoverflow.com/questions/44564887, 128781 views url: https://stackoverflow.com/questions/27060396, 127008 views url: https://stackoverflow.com/questions/12482637, 120766 views url: https://stackoverflow.com/questions/20673986, 115720 views url: https://stackoverflow.com/questions/39109817, 108368 views url: https://stackoverflow.com/questions/11057219, 105175 views url: https://stackoverflow.com/questions/43195143, 101878 views You have successfully queried a public dataset with the BigQuery Node.js client library.
- If you are prompted to authorize Cloud Shell and agree to the terms, click Authorize . dotnet run The result is similar to the following: Query Results: ------------ https://stackoverflow.com/questions/35159967: 170023 views https://stackoverflow.com/questions/22879669: 142581 views https://stackoverflow.com/questions/10604135: 132406 views https://stackoverflow.com/questions/44564887: 128781 views https://stackoverflow.com/questions/27060396: 127008 views https://stackoverflow.com/questions/12482637: 120766 views https://stackoverflow.com/questions/20673986: 115720 views https://stackoverflow.com/questions/39109817: 108368 views https://stackoverflow.com/questions/11057219: 105175 views https://stackoverflow.com/questions/43195143: 101878 views You have successfully queried a public dataset with the BigQuery C# client library.

