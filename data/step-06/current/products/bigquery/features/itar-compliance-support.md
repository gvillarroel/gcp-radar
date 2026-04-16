---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.593Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ITAR compliance support"
feature_slug: "itar-compliance-support"
latest_feature_date: "2023-06-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/mcp/authenticate-mcp"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui"
  - "https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries"
keywords:
  - "itar"
  - "compliance"
  - "bigquery"
  - "supports"
  - "international"
  - "traffic"
  - "arms"
  - "regulation"
---

# ITAR compliance support

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports the International Traffic in Arms Regulation compliance program.

## Extended Definition

BigQuery supports the International Traffic in Arms Regulation compliance program.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries)

## Supporting Pages

### Authenticate to Google and Google Cloud MCP servers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mcp/authenticate-mcp](https://docs.cloud.google.com/mcp/authenticate-mcp)
- Source ID: `site-docs-reference-required-13`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Query a public dataset with the BigQuery client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries](https://docs.cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries)
- Source ID: `site-docs-reference-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- String projectId = "MY PROJECT ID" ; simpleApp ( projectId ); } public static void simpleApp ( String projectId ) { try { BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); QueryJobConfiguration queryConfig = QueryJobConfiguration . newBuilder ( "SELECT CONCAT('https://stackoverflow.com/questions/', " + "CAST(id as STRING)) as url, view count " + "FROM bigquery-public-data.stackoverflow.posts questions " + "WHERE tags like '%google-bigquery%' " + "ORDER BY view count DESC " + "LIMIT 10" ) // Use standard SQL syntax for queries. // See: https://cloud.google.com/bigquery/sql-reference/ . setUseLegacySql ( false ) . build (); JobId jobId = JobId . newBuilder (). setProject ( projectId ). build (); Job queryJob = bigquery . create ( JobInfo . newBuilder ( queryConfig ). setJobId ( jobId ). build ()); // Wait for the query to complete. queryJob = queryJob . waitFor (); // Check for errors if ( queryJob == null ) { throw new RuntimeException ( "Job no longer exists" ); } else if ( queryJob . getStatus (). getExecutionErrors () != null && queryJob . getStatus (). getExecutionErrors (). size () > 0 ) { // TODO(developer): Handle errors here.
- To create a query against the bigquery-public-data.stackoverflow dataset that returns the top 10 most viewed Stack Overflow pages and their view counts, copy the following code into the app.js file: // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); async function queryStackOverflow () { // Queries a public Stack Overflow dataset. // Create a client const bigqueryClient = new BigQuery (); // The SQL query to run const sqlQuery = SELECT CONCAT( 'https://stackoverflow.com/questions/', CAST(id as STRING)) as url, view count FROM \bigquery-public-data.stackoverflow.posts questions\ WHERE tags like '%google-bigquery%' ORDER BY view count DESC LIMIT 10 ; const options = { query : sqlQuery , // Location must match that of the dataset(s) referenced in the query. location : 'US' , }; // Run the query const [ rows ] = await bigqueryClient . query ( options ); console . log ( 'Query Results:' ); rows . forEach ( row = > { const url = row [ 'url' ]; const viewCount = row [ 'view count' ]; console . log ( url: ${ url } , ${ viewCount } views ); }); } queryStackOverflow (); Click Open Terminal .
- If you are prompted to authorize Cloud Shell and agree to the terms, click Authorize . php app.php The result is similar to the following: --- Row 1 --- url: https://stackoverflow.com/questions/35159967, 170023 views --- Row 2 --- url: https://stackoverflow.com/questions/22879669, 142581 views --- Row 3 --- url: https://stackoverflow.com/questions/10604135, 132406 views --- Row 4 --- url: https://stackoverflow.com/questions/44564887, 128781 views --- Row 5 --- url: https://stackoverflow.com/questions/27060396, 127008 views --- Row 6 --- url: https://stackoverflow.com/questions/12482637, 120766 views --- Row 7 --- url: https://stackoverflow.com/questions/20673986, 115720 views --- Row 8 --- url: https://stackoverflow.com/questions/39109817, 108368 views --- Row 9 --- url: https://stackoverflow.com/questions/11057219, 105175 views --- Row 10 --- url: https://stackoverflow.com/questions/43195143, 101878 views Found 10 row(s) You have successfully queried a public dataset with the BigQuery PHP client library.
- If you are prompted to authorize Cloud Shell and agree to the terms, click Authorize . node app.js The result is similar to the following: Query Results: url: https://stackoverflow.com/questions/35159967, 170023 views url: https://stackoverflow.com/questions/22879669, 142581 views url: https://stackoverflow.com/questions/10604135, 132406 views url: https://stackoverflow.com/questions/44564887, 128781 views url: https://stackoverflow.com/questions/27060396, 127008 views url: https://stackoverflow.com/questions/12482637, 120766 views url: https://stackoverflow.com/questions/20673986, 115720 views url: https://stackoverflow.com/questions/39109817, 108368 views url: https://stackoverflow.com/questions/11057219, 105175 views url: https://stackoverflow.com/questions/43195143, 101878 views You have successfully queried a public dataset with the BigQuery Node.js client library.

### Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- Source ID: `site-docs-reference-5`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Go to Overview You can also open the BigQuery Overview page by entering the following URL in your browser: https://console.cloud.google.com/bigquery/overview Review the following sections of the Overview page: The Introduction section: gives you a quick video overview of BigQuery's capabilities.
- After you select a data source, you can do the following based on the capabilities available for your data source: Set up BigQuery table over external data ( federation ) : enables BigQuery to access external data without ingesting it into BigQuery.
- Note: To see how to use keyboard shortcuts in Studio, click keyboard BigQuery Studio shortcuts in the BigQuery Studio toolbar: To explore the Studio page, follow these steps: In the Google Cloud console, go to the BigQuery Studio page.
- Explore the Studio page The Studio page BigQuery is the central point for viewing your BigQuery resources and for performing common tasks such as creating datasets and creating and running notebooks.

