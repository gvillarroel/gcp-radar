---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.651Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Multi-statement transactions"
feature_slug: "multi-statement-transactions"
latest_feature_date: "2022-10-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes"
  - "https://docs.cloud.google.com/bigquery/docs/reference/libraries"
  - "https://docs.cloud.google.com/bigquery/docs/table-decorators"
keywords:
  - "multi"
  - "statement"
  - "transactions"
  - "bigquery"
  - "supports"
  - "span"
  - "multiple"
  - "sql"
---

# Multi-statement transactions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports transactions that span multiple SQL statements; Multi-statement transactions let BigQuery execute multiple mutating operations atomically with commit or rollback.

## Extended Definition

BigQuery supports transactions that span multiple SQL statements; Multi-statement transactions let BigQuery execute multiple mutating operations atomically with commit or rollback.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes)
- [https://docs.cloud.google.com/bigquery/docs/reference/libraries](https://docs.cloud.google.com/bigquery/docs/reference/libraries)
- [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators)

## Supporting Pages

### CAPACITY_COMMITMENT_CHANGES view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-capacity-commitment-changes)
- Source ID: `site-api-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each of the following predefined IAM roles includes the required permission: roles/bigquery.resourceAdmin roles/bigquery.resourceEditor roles/bigquery.resourceViewer roles/bigquery.user roles/bigquery.admin For more information about BigQuery permissions, see Access control with IAM .
- Required permission To query the INFORMATION SCHEMA.CAPACITY COMMITMENT CHANGES view, you need the bigquery.capacityCommitments.list Identity and Access Management (IAM) permission for the project.
- For more information about editions, see Introduction to BigQuery editions . is flat rate BOOL Whether the commitment is associated with the legacy flat-rate capacity model or an edition.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Table decorators in legacy SQL \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- To view the status of this feature request, see the BigQuery feature request tracker .
- Normally, BigQuery performs a full column scan when running a query .
- The preferred query syntax for BigQuery is GoogleSQL.

### BigQuery API Client Libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/libraries](https://docs.cloud.google.com/bigquery/docs/reference/libraries)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Client () query = """ SELECT name, SUM(number) as total people FROM bigquery-public-data.usa names.usa 1910 2013 WHERE state = 'TX' GROUP BY name, state ORDER BY total people DESC LIMIT 20 """ rows = client . query and wait ( query ) # Make an API request. print ( "The query data:" ) for row in rows : Row values can be accessed by field name or index. print ( "name= {} , count= {} " . format ( row [ 0 ], row [ "total people" ])) Ruby require "google/cloud/bigquery" def query bigquery = Google :: Cloud :: Bigquery . new sql = "SELECT name FROM bigquery-public-data.usa names.usa 1910 2013 " \ "WHERE state = 'TX' " \ "LIMIT 100" Location must match that of the dataset(s) referenced in the query. results = bigquery . query sql do config config . location = "US" end results . each do row puts row . inspect end end Additional resources C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code BigQuery DataFrames (BigFrames) BigQuery DataFrames is a pythonic DataFrame and machine learning (ML) API powered by the BigQuery engine.
- TableResult result = queryJob . getQueryResults (); // Print all pages of the results. for ( FieldValueList row : result . iterateAll ()) { // String type String url = row . get ( "url" ). getStringValue (); String viewCount = row . get ( "view count" ). getStringValue (); System . out . printf ( "%s : %s views\n" , url , viewCount ); } } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Simple App failed due to error: \n" + e . toString ()); } } } Node.js // Import the Google Cloud client library using default credentials const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function query () { // Queries the U.S. given names dataset for the state of Texas. const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); // Wait for the query to finish const [ rows ] = await job . getQueryResults (); // Print the results console . log ( 'Rows:' ); rows . forEach ( row = > console . log ( row )); } PHP use Google\Cloud\BigQuery\BigQueryClient; use Google\Cloud\Core\ExponentialBackoff; / Uncomment and populate these variables in your code / // $projectId = 'The Google project ID'; // $query = 'SELECT id, view count FROM bigquery-public-data.stackoverflow.posts questions'; $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $jobConfig = $bigQuery->query($query); $job = $bigQuery->startQuery($jobConfig); $backoff = new ExponentialBackoff(10); $backoff->execute(function () use ($job) { print('Waiting for job to complete' .
- See https : //github.com/GoogleCloudPlatform/cloud-opensource-java/wiki/The-Google-Cloud-Platform-Libraries-BOM -- > < dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>libraries - bom < / artifactId > < version>26 .62.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - bigquery < / artifactId > < / dependency > < / dependencies > If you are using Gradle , add the following to your dependencies: implementation platform ( ' com . google . cloud : libraries - bom : 26.45.0 ' ) implementation ' com . google . cloud : google - cloud - bigquery ' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-bigquery" % "2.42.2" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.
- String projectId = "MY PROJECT ID" ; simpleApp ( projectId ); } public static void simpleApp ( String projectId ) { try { BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); QueryJobConfiguration queryConfig = QueryJobConfiguration . newBuilder ( "SELECT CONCAT('https://stackoverflow.com/questions/', " + "CAST(id as STRING)) as url, view count " + "FROM bigquery-public-data.stackoverflow.posts questions " + "WHERE tags like '%google-bigquery%' " + "ORDER BY view count DESC " + "LIMIT 10" ) // Use standard SQL syntax for queries. // See: https://cloud.google.com/bigquery/sql-reference/ . setUseLegacySql ( false ) . build (); JobId jobId = JobId . newBuilder (). setProject ( projectId ). build (); Job queryJob = bigquery . create ( JobInfo . newBuilder ( queryConfig ). setJobId ( jobId ). build ()); // Wait for the query to complete. queryJob = queryJob . waitFor (); // Check for errors if ( queryJob == null ) { throw new RuntimeException ( "Job no longer exists" ); } else if ( queryJob . getStatus (). getExecutionErrors () != null && queryJob . getStatus (). getExecutionErrors (). size () > 0 ) { // TODO(developer): Handle errors here.

