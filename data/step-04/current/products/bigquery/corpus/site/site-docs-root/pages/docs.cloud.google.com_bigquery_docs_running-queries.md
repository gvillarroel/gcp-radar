---
title: "Run a query | BigQuery | Google Cloud Documentation"
url: "https://docs.cloud.google.com/bigquery/docs/running-queries"
knowledge_key: "corpus"
source_id: "site-docs-root"
source_type: "site"
content_origin: "bx_web_fallback"
---
# Run a query | BigQuery | Google Cloud Documentation

Source URL: https://docs.cloud.google.com/bigquery/docs/running-queries

For more information, see the BigQuery PHP API reference documentation. To authenticate to BigQuery, set up Application Default Credentials. For more information, see Set up authentication for client libraries. use Google\Cloud\BigQuery\BigQueryClient; use Google\Cloud\Core\ExponentialBackoff; /** Uncomment and populate these variables in your code */ // $projectId = &#x27;The Google project ID&#x27;; // $query = &#x27;SELECT id, view_count FROM `bigquery-public-data.stackoverflow.posts_questions`&#x27;; $bigQuery = new BigQueryClient([ &#x27;projectId&#x27; =&gt; $projectId, ]); $jobConfig = $bigQuery-&gt;query($query); $job = $bigQuery-&gt;startQuery($jobConfig); $backoff = new ExponentialBackoff(10); $backoff-&gt;execute(function () use ($job) { print(&#x27;Waiting for job to complete&#x27; .
