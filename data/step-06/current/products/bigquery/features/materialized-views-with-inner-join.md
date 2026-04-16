---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.700Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Materialized views with inner join"
feature_slug: "materialized-views-with-inner-join"
latest_feature_date: "2022-01-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-cancel-job"
  - "https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane"
  - "https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart"
keywords:
  - "materialized"
  - "views"
  - "inner"
  - "join"
  - "bigquery"
  - "supports"
  - "defined"
  - "joins"
---

# Materialized views with inner join

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports materialized views defined with inner joins; BigQuery materialized views can include inner joins in their definitions.

## Extended Definition

BigQuery supports materialized views defined with inner joins; BigQuery materialized views can include inner joins in their definitions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-cancel-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-cancel-job)
- [https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane](https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane)
- [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)

## Supporting Pages

### Cancel a job \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-cancel-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-cancel-job)
- Source ID: `site-docs-reference-required-15`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- String jobName = "jobId " + UUID . randomUUID (). toString (); JobId jobId = JobId . newBuilder (). setLocation ( "us" ). setJob ( jobName ). build (); // Create a job with job ID bigquery . create ( JobInfo . of ( jobId , queryConfig )); // Get a job that was just created Job job = bigquery . getJob ( jobId ); if ( job . cancel ()) { System . out . println ( "Job canceled successfully" ); } else { System . out . println ( "Job was not canceled" ); } } catch ( BigQueryException e ) { System . out . println ( "Job was not canceled.\n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function cancelJob () { // Attempts to cancel a job. / TODO(developer): Uncomment the following lines before running the sample. / // const jobId = "existing-job-id"; // Create a job reference const job = bigquery . job ( jobId ); // Attempt to cancel job const [ apiResult ] = await job . cancel (); console . log ( apiResult . job . status ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // cancelJob demonstrates how a job cancellation request can be issued for a specific // BigQuery job. func cancelJob ( projectID , jobID string ) error { // projectID := "my-project-id" // jobID := "my-job-id" ctx := context .
- Explore further For detailed documentation that includes this code sample, see the following: Manage jobs Code sample Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .

### "Using geospatial analytics to plot a hurricane's path \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane](https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- SELECT ST GeogPoint ( longitude , latitude ) AS point , name , iso time , dist2land , usa wind , usa pressure , usa sshs , ( usa r34 ne + usa r34 nw + usa r34 se + usa r34 sw ) / 4 AS radius 34kt , ( usa r50 ne + usa r50 nw + usa r50 se + usa r50 sw ) / 4 AS radius 50kt FROM bigquery-public-data.noaa hurricanes.hurricanes WHERE name LIKE '%MARIA%' AND season = '2017' AND ST DWithin ( ST GeogFromText ( 'POLYGON((-179 26, -179 48, -10 48, -10 26, -100 -10.1, -179 26))' ), ST GeogPoint ( longitude , latitude ), 10 ) ORDER BY iso time ASC The query clauses do the following: SELECT ST GeogPoint(longitude, latitude) AS point, name, iso time, dist2land, usa wind, usa pressure, usa sshs, (usa r34 ne + usa r34 nw + usa r34 se + usa r34 sw)/4 AS radius 34kt, (usa r50 ne + usa r50 nw + usa r50 se + usa r50 sw)/4 AS radius 50kt The SELECT clause selects all the storm's weather data and uses the ST GeogPoint function to convert the values in the latitude and longitude columns to GEOGRAPHY types (points).
- SELECT ST GeogPoint ( longitude , latitude ) AS point , name , iso time , dist2land , usa wind , usa pressure , usa sshs , ( usa r34 ne + usa r34 nw + usa r34 se + usa r34 sw ) / 4 AS radius 34kt , ( usa r50 ne + usa r50 nw + usa r50 se + usa r50 sw ) / 4 AS radius 50kt FROM bigquery-public-data.noaa hurricanes.hurricanes WHERE name LIKE '%MARIA%' AND season = '2017' AND ST DWithin ( ST GeogFromText ( 'POLYGON((-179 26, -179 48, -10 48, -10 26, -100 -10.1, -179 26))' ), ST GeogPoint ( longitude , latitude ), 10 ) ORDER BY iso time ASC Click Run .
- SELECT ST GeogPoint ( longitude , latitude ) AS point , name , iso time , dist2land , usa wind , usa pressure , usa sshs , ( usa r34 ne + usa r34 nw + usa r34 se + usa r34 sw ) / 4 AS radius 34kt , ( usa r50 ne + usa r50 nw + usa r50 se + usa r50 sw ) / 4 AS radius 50kt FROM bigquery-public-data.noaa hurricanes.hurricanes WHERE name LIKE '%MARIA%' AND season = '2017' AND ST DWithin ( ST GeogFromText ( 'POLYGON((-179 26, -179 48, -10 48, -10 26, -100 -10.1, -179 26))' ), ST GeogPoint ( longitude , latitude ), 10 ) ORDER BY iso time ASC Click Run .
- Objectives In this tutorial, you: Use a geospatial analytics function to convert latitude and longitude columns into geographical points Run a query that plots the path of a hurricane Visualize your results in BigQuery Visualize your results in BigQuery Geo Viz Costs BigQuery is a paid product and you will incur BigQuery usage in this tutorial.

### Work with Salesforce Data Cloud data in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- CREATE MATERIALIZED VIEW us data.total sales replica AS REPLICA OF aws data.total sales ; Run a query on a replica materialized view The following example runs a query on a replica materialized view: -- Find total sales for the current month for the dashboard SELECT EXTRACT ( MONTH FROM CURRENT DATE ()) as month , SUM ( sales ) FROM us data . total sales replica WHERE month = EXTRACT ( MONTH FROM date ) GROUP BY 1 Using Data Cloud data with INFORMATION SCHEMA Data Cloud datasets support BigQuery INFORMATION SCHEMA views.
- BigQuery supports three types of Data Cloud objects: Data Lake Objects (DLO) Data Model Objects (DMO) Calculated Insights Objects (CIO) All of these objects are represented as views in BigQuery.
- Cross cloud materialized views Cross Cloud Materialized Views ( CCMV ) transfer data from a BigQuery Omni region to a non-BigQuery Omni BigQuery region incrementally.
- Create a local materialized view To create a local materialized view: -- Create a local materialized view that keeps track of total sales by day CREATE MATERIALIZED VIEW aws data.total sales OPTIONS ( enable refresh = true , refresh interval minutes = 60 ) AS SELECT EXTRACT ( DAY FROM order time ) AS date , SUM ( order total ) as sales FROM listing nto john.nto orders dll GROUP BY 1 ; Authorize the materialized view You must authorize materialized views to create a CCMV.

