---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.529Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Merge query API query slug response"
feature_slug: "merge-query-api-query-slug-response"
latest_feature_date: "2024-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/api-performance"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-jobs"
  - "https://docs.cloud.google.com/bigquery/docs/history-based-optimizations"
keywords:
  - "merge"
  - "query"
  - "slug"
  - "response"
  - "queries"
  - "returns"
  - "alongside"
  - "id"
---

# Merge query API query slug response

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The merge queries API returns the query slug alongside the query ID for source queries.

## Extended Definition

The merge queries API returns the query slug alongside the query ID for source queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/api-performance](https://docs.cloud.google.com/bigquery/docs/api-performance)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)
- [https://docs.cloud.google.com/bigquery/docs/history-based-optimizations](https://docs.cloud.google.com/bigquery/docs/history-based-optimizations)

## Supporting Pages

### API performance tips \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/api-performance](https://docs.cloud.google.com/bigquery/docs/api-performance)
- Source ID: `site-docs-reference-required-6`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Simple request: This HTTP GET request omits the fields parameter and returns the full resource. https://www.googleapis.com/demo/v1 Full resource response: The full resource data includes the following fields, along with many others that have been omitted for brevity. { "kind": "demo", ... "items": [ { "title": "First title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... }, { "title": "Second title", "comment": "Second comment.", "characteristics": { "length": "long", "accuracy": "medium" "followers": [ ], }, "status": "pending", ... }, ... ] } Request for a partial response: The following request for this same resource uses the fields parameter to significantly reduce the amount of data returned. https://www.googleapis.com/demo/v1? fields=kind,items(title,characteristics/length) Partial response: In response to the request above, the server sends back a response that contains only the kind information along with a pared-down items array that includes only HTML title and length characteristic information in each item.
- The resource also has a comment, a set of characteristics, status, and many other fields, but this request only sends the title field, since that's the only field being modified: PATCH https://www.googleapis.com/demo/v1/324 Authorization: Bearer your auth token Content-Type: application/json { "title": "New title" } Response: 200 OK { "title": "New title", "comment": "First comment.", "characteristics": { "length": "short", "accuracy": "high", "followers": ["Jo", "Will"], }, "status": "active", ... } The server returns a 200 OK status code, along with the full representation of the updated resource.
- The request uses the fields parameter to specify which fields to return. https://www.googleapis.com/demo/v1? fields=kind,items(title,characteristics/length) The partial response looks like this: 200 OK { "kind": "demo", "items": [{ "title": "First title", "characteristics": { "length": "short" } }, { "title": "Second title", "characteristics": { "length": "long" } }, ... ] } Note: For APIs that support query parameters for data pagination ( maxResults and nextPageToken , for example), use those parameters to reduce the results of each query to a manageable size.
- If the fields query parameter has an error or is otherwise invalid, the server returns an HTTP 400 Bad Request status code, along with an error message telling the user what was wrong with their fields selection (for example, "Invalid field selection a/b" ).

### JOBS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)
- Source ID: `site-docs-reference-required-6`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- FROM dataset.table1 1279.1534 998 +-----------+-----------+----------------+---------------+----------------------+----------+-----------------+--------------------+--------------+--------------------------------+--------------------+--------------------------+ View performance insights for queries The following example returns all query jobs that have performance insights from your project in the last 30 days, along with a URL that links to the query execution graph in the Google Cloud console.
- Analyze performance over time for identical queries The following example returns the top 10 slowest jobs over the past 7 days that have run the same query: DECLARE querytext STRING DEFAULT ( SELECT query FROM region- REGION NAME .
- JOBS j , UNNEST ( query info . performance insights . stage performance standalone insights ) i WHERE ( j . statement type != "SCRIPT" OR j . statement type IS NULL ) AND i IS NOT NULL AND i . slot contention The output shows different performance insights about jobs, including slot contention: +------------+-------------------------+-------------------------------------------------+----------------------------------------------------------------------------+ job id creation time performance insights.avg previous execution ms performance insightsstage performance standalone insights.slot contention +------------+-------------------------+-------------------------------------------------+----------------------------------------------------------------------------+ bquxjob 1 2025-08-08 00:00:00 UTC null true bquxjob 2 2025-08-08 00:00:00 UTC 42689 true bquxjob 3 2025-08-08 00:00:00 UTC 42896 true +------------+-------------------------+-------------------------------------------------+----------------------------------------------------------------------------+ Get jobs with the same query hash The following query returns the job IDs with the same query hash as a specific job: SELECT j . job id , j . creation time , j . query FROM region- REGION NAME .
- The result looks similar to the following: +---------------------+---------------+--------------------+-----------------+ user email total queries total bytes billed total slot ms +---------------------+---------------+--------------------+-----------------+ alice@example.com 152 12000000000 3500000 bob@example.com 45 8500000000 2100000 charles@example.com 210 1100000000 1800000 +---------------------+---------------+--------------------+-----------------+ Find job logs of Connected Sheets queries at the project-level If you don't have organization-level permissions or only need to monitor a specific project, run the following query to see a detailed log of all Connected Sheets queries for the current project: SELECT job id , creation time , user email , total bytes billed , total slot ms , query FROM -- This view queries the project you are currently running the query in. region- REGION NAME .INFORMATION SCHEMA.JOBS BY PROJECT WHERE creation time > = TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 30 DAY ) AND job id LIKE 'sheets dataconnector%' AND state = 'DONE' AND ( statement type IS NULL OR statement type <> 'SCRIPT' ) ORDER BY creation time DESC ; Replace REGION NAME with the region for your project.

### Use history-based optimizations \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/history-based-optimizations](https://docs.cloud.google.com/bigquery/docs/history-based-optimizations)
- Source ID: `site-docs-reference-required-6`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, the jobs.get method returns the optimization details ( optimizationDetails ) in the full response: { "jobReference" : { "projectId" : "myProject" , "jobId" : "sample job" } } The results look similar to the following: -- The unrelated parts in the full response have been removed. { "jobReference" : { "projectId" : "myProject" , "jobId" : "sample job" , "location" : "US" } , "statistics" : { "query" : { "queryInfo" : { "optimizationDetails" : { "optimizations" : [ { "semi join reduction" : "web sales.web date,RIGHT" } , { "semi join reduction" : "catalog sales.catalog date,RIGHT" } , { "semi join reduction" : "store sales.store date,RIGHT" } , { "join commutation" : "web returns.web item" } , { "parallelism adjustment" : "applied" } ] } } } } } Estimate impact of history-based optimizations To estimate the impact of history-based optimizations, you can use the following sample SQL query to identify project queries with the greatest estimated improvement to execution time.
- About history-based optimizations History-based optimizations use information from already completed executions of similar queries to apply additional optimizations and further improve query performance such as slot time consumed and query latency.
- If the result of this sample query is empty, then either no jobs have used history-based optimizations, or all queries were optimized more than 30 days ago.
- JOBS BY PROJECT WHERE EXTRACT ( DATE FROM creation time ) > DATE SUB ( CURRENT DATE (), INTERVAL 30 DAY ) ), most recent jobs without history based optimizations AS ( SELECT FROM jobs WHERE NOT has history based optimization QUALIFY ROW NUMBER () OVER ( PARTITION BY query hash ORDER BY end time DESC ) = 1 ) SELECT job . job id , 100 SAFE DIVIDE ( original job . elapsed ms - job . elapsed ms , original job . elapsed ms ) AS percent execution time saved , job . elapsed ms AS new elapsed ms , original job . elapsed ms AS original elapsed ms , FROM jobs AS job INNER JOIN most recent jobs without history based optimizations AS original job USING ( query hash ) WHERE job . has history based optimization AND original job . end time < job . start time ORDER BY percent execution time saved DESC LIMIT 10 ; The result of the preceding query is similar to the following if history-based optimizations were applied: / --------------+------------------------------+------------------+----------------------- job id percent execution time saved new execution ms original execution ms +--------------+------------------------------+------------------+-----------------------+ sample job1 67.806850186245114 7087 22014 sample job2 66.485800412501987 10562 31515 sample job3 63.285605271764254 97668 266021 sample job4 61.134141726887904 923384 2375823 sample job5 55.381272089713754 1060062 2375823 sample job6 45.396943168036479 2324071 4256302 sample job7 38.227031526376024 17811 28833 sample job8 33.826608962725111 66360 100282 sample job9 32.087813758311604 44020 64819 sample job10 28.356416319483539 19088 26643 --------------+------------------------------+------------------+----------------------- / The results of this query is only an estimation of history-based optimization impact.

