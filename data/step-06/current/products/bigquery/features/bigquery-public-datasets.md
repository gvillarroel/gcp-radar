---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.942Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery public datasets"
feature_slug: "bigquery-public-datasets"
latest_feature_date: "2016-03-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console"
  - "https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui"
  - "https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries"
keywords:
  - "public dataset browsing"
  - "Cloud Console public datasets"
  - "public datasets project"
  - "Google Cloud public data"
  - "BigQuery Public Datasets"
  - "bigquery-public-data"
  - "Public BigQuery data"
  - "Public Datasets"
---

# BigQuery public datasets

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery announced the availability of BigQuery Public Datasets.

## Extended Definition

BigQuery announced the availability of BigQuery Public Datasets.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console)
- [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui)
- [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries)

## Supporting Pages

### Try BigQuery using the sandbox \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console](https://docs.cloud.google.com/bigquery/docs/quickstarts/query-public-dataset-console)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: The page explains that users can try BigQuery by querying public datasets and references the Google Cloud Public Dataset Program.

Evidence snippets:
- The BigQuery sandbox does not support several BigQuery features, including the following: Streaming data Data manipulation language (DML) statements BigQuery Data Transfer Service View a public dataset BigQuery public datasets are available by default in BigQuery Studio in a project named bigquery-public-data .
- Google Cloud offers public datasets that are stored in BigQuery and made available to the general public through the Google Cloud Public Dataset Program .
- For more information about working with public datasets, see BigQuery public datasets .
- In the query editor , enter the following query: SELECT start station name , start station latitude , start station longitude , ST GEOGPOINT ( start station longitude , start station latitude ) AS geo location , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips GROUP BY 1 , 2 , 3 ORDER BY num trips DESC LIMIT 100 ; If the query is valid, then a check mark appears along with the amount of data that the query processes.

### Try BigQuery using the sandbox \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui)
- Source ID: `site-docs-root-2`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: The page refers to Google Cloud Public Dataset Program and using a public dataset in the sandbox, which provides supporting context for public dataset availability.

Evidence snippets:
- The BigQuery sandbox does not support several BigQuery features, including the following: Streaming data Data manipulation language (DML) statements BigQuery Data Transfer Service View a public dataset BigQuery public datasets are available by default in BigQuery Studio in a project named bigquery-public-data .
- Google Cloud offers public datasets that are stored in BigQuery and made available to the general public through the Google Cloud Public Dataset Program .
- For more information about working with public datasets, see BigQuery public datasets .
- In the query editor , enter the following query: SELECT start station name , start station latitude , start station longitude , ST GEOGPOINT ( start station longitude , start station latitude ) AS geo location , COUNT ( ) AS num trips FROM bigquery-public-data.new york.citibike trips GROUP BY 1 , 2 , 3 ORDER BY num trips DESC LIMIT 100 ; If the query is valid, then a check mark appears along with the amount of data that the query processes.

### "Query a public dataset with the BigQuery client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: The page directly demonstrates querying a public dataset with client libraries, which is useful context for how BigQuery public datasets are accessed.

Evidence snippets:
- Learn more about BigQuery public datasets .
- String projectId = "MY PROJECT ID" ; simpleApp ( projectId ); } public static void simpleApp ( String projectId ) { try { BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); QueryJobConfiguration queryConfig = QueryJobConfiguration . newBuilder ( "SELECT CONCAT('https://stackoverflow.com/questions/', " + "CAST(id as STRING)) as url, view count " + "FROM bigquery-public-data.stackoverflow.posts questions " + "WHERE tags like '%google-bigquery%' " + "ORDER BY view count DESC " + "LIMIT 10" ) // Use standard SQL syntax for queries. // See: https://cloud.google.com/bigquery/sql-reference/ . setUseLegacySql ( false ) . build (); JobId jobId = JobId . newBuilder (). setProject ( projectId ). build (); Job queryJob = bigquery . create ( JobInfo . newBuilder ( queryConfig ). setJobId ( jobId ). build ()); // Wait for the query to complete. queryJob = queryJob . waitFor (); // Check for errors if ( queryJob == null ) { throw new RuntimeException ( "Job no longer exists" ); } else if ( queryJob . getStatus (). getExecutionErrors () != null && queryJob . getStatus (). getExecutionErrors (). size () > 0 ) { // TODO(developer): Handle errors here.
- To create a query against the bigquery-public-data.stackoverflow dataset that returns the top 10 most viewed Stack Overflow pages and their view counts, copy the following code into the app.js file: // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); async function queryStackOverflow () { // Queries a public Stack Overflow dataset. // Create a client const bigqueryClient = new BigQuery (); // The SQL query to run const sqlQuery = SELECT CONCAT( 'https://stackoverflow.com/questions/', CAST(id as STRING)) as url, view count FROM \bigquery-public-data.stackoverflow.posts questions\ WHERE tags like '%google-bigquery%' ORDER BY view count DESC LIMIT 10 ; const options = { query : sqlQuery , // Location must match that of the dataset(s) referenced in the query. location : 'US' , }; // Run the query const [ rows ] = await bigqueryClient . query ( options ); console . log ( 'Query Results:' ); rows . forEach ( row = > { const url = row [ 'url' ]; const viewCount = row [ 'view count' ]; console . log ( url: ${ url } , ${ viewCount } views ); }); } queryStackOverflow (); Click Open Terminal .
- To create a query against the bigquery-public-data.stackoverflow dataset that returns the top 10 most viewed Stack Overflow pages and their view counts, copy the following code into the app.php file: < ?php ... require DIR . '/vendor/autoload.php'; use Google\Cloud\BigQuery\BigQueryClient; $bigQuery = new BigQueryClient(); $query = <<<ENDSQL SELECT CONCAT( 'https://stackoverflow.com/questions/', CAST(id as STRING)) as url, view count FROM bigquery-public-data.stackoverflow.posts questions WHERE tags like '%google-bigquery%' ORDER BY view count DESC LIMIT 10; ENDSQL; $queryJobConfig = $bigQuery->query($query); $queryResults = $bigQuery->runQuery($queryJobConfig); if ($queryResults->isComplete()) { $i = 0; $rows = $queryResults->rows(); foreach ($rows as $row) { printf('--- Row %s ---' .

