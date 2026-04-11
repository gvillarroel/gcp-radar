---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.954Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Query caching"
feature_slug: "query-caching"
latest_feature_date: "2013-06-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
keywords:
  - "disableQueryCache"
  - "cache miss"
  - "useQueryCache"
  - "cache hit"
  - "cached query results"
  - "query result cache"
  - "result cache"
  - "query cache"
---

# Query caching

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery introduced query caching to reuse results and improve repeated query performance.

## Extended Definition

BigQuery introduced query caching to reuse results and improve repeated query performance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; / Uncomment and populate these variables in your code / // $projectId = 'The Google project ID'; // $query = 'SELECT id, view count FROM bigquery-public-data.stackoverflow.posts questions'; // Construct a BigQuery client object. $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); // Set job configs $jobConfig = $bigQuery->query($query); $jobConfig->useQueryCache(false); $jobConfig->dryRun(true); // Extract query results $queryJob = $bigQuery->startJob($jobConfig); $info = $queryJob->info(); printf('This query will process %s bytes' .
- QueryJobConfig ( dry run = True , use query cache = False ) Start the query, passing in the extra configuration. query job = client . query ( ( "SELECT name, COUNT( ) as name count " "FROM bigquery-public-data.usa names.usa 1910 2013 " "WHERE state = 'WA' " "GROUP BY name" ), job config = job config , ) # Make an API request.
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); QueryJobConfiguration queryConfig = QueryJobConfiguration . newBuilder ( query ). setDryRun ( true ). setUseQueryCache ( false ). build (); Job job = bigquery . create ( JobInfo . of ( queryConfig )); JobStatistics .

