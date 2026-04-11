---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.948Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery job cancellation"
feature_slug: "bigquery-job-cancellation"
latest_feature_date: "2015-08-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery"
keywords:
  - "jobs.cancel method"
  - "terminate job"
  - "cancel running jobs"
  - "job cancellation"
  - "jobs.cancel"
  - "cancel query"
  - "cancel job"
  - "running job"
---

# BigQuery job cancellation

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added the ability to cancel running jobs.

## Extended Definition

BigQuery added the ability to cancel running jobs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery)

## Supporting Pages

### "Interface BigQuery (2.62.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery)
- Source ID: `site-java-reference`
- Final score: 42
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly defines `cancel(JobId)` and `cancel(String)` methods and documents their behavior for canceling BigQuery jobs.

Evidence snippets:
- String jobName = "my job name" ; boolean success = bigquery . cancel ( jobName ); if ( success ) { // job was cancelled } else { // job was not found } Parameter Name Description jobId String Returns Type Description boolean true if cancel was requested successfully, false if the job was not found create(DatasetInfo datasetInfo, BigQuery.DatasetOption[] options) public abstract Dataset create ( DatasetInfo datasetInfo , BigQuery .
- String jobName = "my job name" ; JobId jobId = JobId . of ( jobName ); boolean success = bigquery . cancel ( jobId ); if ( success ) { // job was cancelled } else { // job was not found } Parameter Name Description jobId JobId Returns Type Description boolean true if cancel was requested successfully, false if the job was not found cancel(String jobId) public abstract boolean cancel ( String jobId ) Sends a job cancel request.
- See Also: Google Cloud BigQuery Implements com.google.cloud.Service<com.google.cloud.bigquery.BigQueryOptions> Methods cancel(JobId jobId) public abstract boolean cancel ( JobId jobId ) Sends a job cancel request.
- If the location of the job is not "US" or "EU", #cancel(JobId) must be used instead.

