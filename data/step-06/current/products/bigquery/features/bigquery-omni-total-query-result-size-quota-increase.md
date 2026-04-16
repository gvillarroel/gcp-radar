---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.656Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Omni total query result size quota increase"
feature_slug: "bigquery-omni-total-query-result-size-quota-increase"
latest_feature_date: "2022-09-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
keywords:
  - "bigquery"
  - "omni"
  - "total"
  - "query"
  - "result"
  - "size"
  - "quota"
  - "increase"
---

# BigQuery Omni total query result size quota increase

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Omni increases the project quota for total query result sizes to 1 TB per day.

## Extended Definition

BigQuery Omni increases the project quota for total query result sizes to 1 TB per day.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)

## Supporting Pages

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Maximum tabledata.list bytes per second per project quota errors BigQuery returns this error when the project number mentioned in the error message reaches the maximum size of data that can be read through the tabledata.list API call in a project per second.
- For example, using Logs Explorer , the following query returns errors with either Quota exceeded or limit in the message string: resource.type = ("bigquery project" OR "bigquery dataset") protoPayload.status.code ="7" protoPayload.status.message: ("Quota exceeded" OR "limit") In this example, the status code 7 indicates PERMISSION DENIED , which corresponds to the HTTP 403 status code.
- For example, the following query shows total bytes ingested per minute, and the total number of quota errors: SELECT start timestamp , error code , SUM ( total input bytes ) as sum input bytes , SUM ( IF ( error code IN ( 'QUOTA EXCEEDED' , 'RATE LIMIT EXCEEDED' ), total requests , 0 )) AS quota error FROM region- REGION NAME .
- If you would like to gather usages of exports data over recent days, you can try the following: View the quotas for your project with filter criteria such as Name: Extract bytes per day or Metric: bigquery.googleapis.com/quota/extract/bytes along with the Show usage chart to see your usage trend over a few days.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Unexpected storage charges Scenarios that could lead to storage charge increases: Increases in the amount of data that is stored in your tables—use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view to monitor the change in bytes for your tables Changing dataset billing models Increasing the time-travel window for physical billing model datasets Modification of tables that have data in long-term storage , causing them to become active storage Deletion of table(s) or dataset(s) resulted in higher BigQuery storage costs The BigQuery time travel feature retains deleted data for duration of the configured time-travel window and an additional 7 days for fail-safe recovery.
- Storage cost increased with no significant data increase Storage costs can increase if data in long-term storage moves to active BigQuery storage as a result of certain actions on table data, metadata, or partitions.
- Querying very small tables results in disproportionately large cost for on-demand The minimum "processed data per referenced table" billed for a BigQuery query is 10 MiB, regardless of the actual size of the table.
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; / Uncomment and populate these variables in your code / // $projectId = 'The Google project ID'; // $query = 'SELECT id, view count FROM bigquery-public-data.stackoverflow.posts questions'; // Construct a BigQuery client object. $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); // Set job configs $jobConfig = $bigQuery->query($query); $jobConfig->useQueryCache(false); $jobConfig->dryRun(true); // Extract query results $queryJob = $bigQuery->startJob($jobConfig); $info = $queryJob->info(); printf('This query will process %s bytes' .

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the PromQL query editor, enter the following query: ( sum by (project id, quota metric, location) (increase({"serviceruntime.googleapis.com/quota/rate/net usage", monitored resource="consumer quota", service="bigquery.googleapis.com"}[1m])) / max by (project id, quota metric, location) ({"serviceruntime.googleapis.com/quota/limit", monitored resource="consumer quota", service="bigquery.googleapis.com", limit name="ExtractBytesPerDay"}) ) > 0.01 If Auto-run isn't enabled, then click Run Query .
- The following example shows how to create a new processed table from an existing table called source table which requires n partitions to achieve the chosen file size: CREATE TABLE my dataset . processed table PARTITION BY RANGE BUCKET ( export id , GENERATE ARRAY ( 0 , n , 1 )) CLUSTER BY export id AS ( SELECT , CAST ( FLOOR ( n RAND ()) AS INT64 ) AS export id FROM my dataset . source table ); For each integer i between 0 and n-1 , run an EXPORT DATA statement on the following query: SELECT EXCEPT ( export id ) FROM my dataset . processed table WHERE export id = i ; Extract compressed table Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .
- The following Logs Explorer filter returns information about your extract jobs: resource.type="bigquery resource" protoPayload.methodName="jobservice.insert" (protoPayload.serviceData.jobInsertRequest.resource.jobConfiguration.query.query= "EXPORT" OR protoPayload.serviceData.jobCompletedEvent.eventName="extract job completed" OR protoPayload.serviceData.jobCompletedEvent.job.jobConfiguration.query.query= "EXPORT") Exceeded extract bytes per day quota error BigQuery returns this error when the extraction exceeds the default 50 TiB daily limit in a project.
- DatasetReference ( project , dataset id ) table ref = dataset ref . table ( table id ) extract job = client . extract table ( table ref , destination uri , Location must match that of the source table. location = "US" , ) # API request extract job . result () # Waits for job to complete. print ( "Exported {} : {} . {} to {} " . format ( project , dataset id , table id , destination uri ) ) Ruby Before trying this sample, follow the Ruby setup instructions in the BigQuery quickstart using client libraries .

