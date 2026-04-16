---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.267Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Administrative jobs explorer Performance tab"
feature_slug: "administrative-jobs-explorer-performance-tab"
latest_feature_date: "2025-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
keywords:
  - "administrative"
  - "jobs"
  - "explorer"
  - "performance"
  - "tab"
  - "compiles"
  - "execution"
  - "graphs"
---

# Administrative jobs explorer Performance tab

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The administrative jobs explorer Performance tab compiles execution graphs, SQL text, execution history, performance variance, and system load for a query.

## Extended Definition

The administrative jobs explorer Performance tab compiles execution graphs, SQL text, execution history, performance variance, and system load for a query.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)

## Supporting Pages

### Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer](https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer)
- Source ID: `site-docs-reference-2`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use administrative jobs explorer: To see data at project level: bigquery.jobs.listAll on the project To see data at organization level: bigquery.jobs.listAll on the organization To filter by reservations in your organization: bigquery.reservations.list on the organization You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to use administrative jobs explorer, ask your administrator to grant you the BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) IAM role on your organization or project.
- You can also select individual jobs to open the job details page , which provides query details such as execution graphs, SQL text, and execution history to help you diagnose and troubleshoot queries.
- Use administrative jobs explorer As a BigQuery administrator, you can use the administrative jobs explorer to help you monitor jobs activity across your organization.

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- To learn more about the execution details and diagnose performance issues for your BigQuery jobs, see Get query performance insights .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view all data in the operational health and resource utilization charts: To view all data in the operational health and resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization bigquery.reservationAssignments.list on the administration project used to create the reservations bigquery.capacityCommitments.list on the administration project used to create the reservations As an on-demand user, to view all data in the resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization To view operational health summary data for BigQuery table storage: bigquery.tables.get or bigquery.tables.list on the organization To view operational health and resource utilization charts at the reservation level: bigquery.reservations.list on the administration project used to create the reservations bigquery.reservationAssignments.list on the administration project used to create the reservations To view resource utilization charts at the project level: bigquery.jobs.listAll on the project You might also be able to get these permissions with custom roles or other predefined roles .
- BigQuery gathers the metrics by querying the following INFORMATION SCHEMA views : INFORMATION SCHEMA.JOBS INFORMATION SCHEMA.JOBS TIMELINE INFORMATION SCHEMA.RESERVATIONS INFORMATION SCHEMA.TABLE STORAGE For an example query that replicates the slot usage timeline chart found in administrative resource charts, see Match slot usage behavior from administrative resource charts .
- The table cell is color coded if the metric is greater than the predefined threshold and if there are an increased number of performance insights for repeated jobs: If the metric value over the 30 minutes prior to the last update is greater than the P99 value of the last week's usage for the same day, the table cell is marked with a dark blue background.

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- CsvOptions csvOptions = CsvOptions . newBuilder (). setSkipLeadingRows ( 1 ). build (); TableId tableId = TableId . of ( datasetName , tableName ); LoadJobConfiguration loadConfig = LoadJobConfiguration . newBuilder ( tableId , sourceUri , csvOptions ). setSchema ( schema ). build (); // Load data from a GCS CSV file into the table Job job = bigquery . create ( JobInfo . of ( loadConfig )); // Blocks until this load table job completes its execution, either failing or succeeding. job = job . waitFor (); if ( job . isDone ()) { System . out . println ( "CSV from GCS successfully added during load append job" ); } else { System . out . println ( "BigQuery was unable to load into the table due to an error:" + job . getStatus (). getError ()); } } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Column not added during load append \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- Job completedJob = loadJob . waitFor (); // Check for errors if ( completedJob == null ) { throw new Exception ( "Job not executed since it no longer exists." ); } else if ( completedJob . getStatus (). getError () != null ) { // You can also look at queryJob.getStatus().getExecutionErrors() for all // errors, not just the latest one. throw new Exception ( "BigQuery was unable to load into the table due to an error: \n" + loadJob . getStatus (). getError ()); } System . out . println ( "Data successfully loaded into time partitioned table during load job" ); } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Data not loaded into time partitioned table during load job \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- Job completedJob = loadJob . waitFor (); // Check for errors if ( completedJob == null ) { throw new Exception ( "Job not executed since it no longer exists." ); } else if ( completedJob . getStatus (). getError () != null ) { // You can also look at queryJob.getStatus().getExecutionErrors() for all // errors, not just the latest one. throw new Exception ( "BigQuery was unable to load into the table due to an error: \n" + loadJob . getStatus (). getError ()); } System . out . println ( "Table is successfully overwritten by CSV file loaded from GCS" ); } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Column not added during load append \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- Permissions to load data into BigQuery To load data into a new BigQuery table or partition or to append or overwrite an existing table or partition, you need the following IAM permissions: bigquery.tables.create bigquery.tables.updateData bigquery.tables.update bigquery.jobs.create Each of the following predefined IAM roles includes the permissions that you need in order to load data into a BigQuery table or partition: roles/bigquery.dataEditor roles/bigquery.dataOwner roles/bigquery.admin (includes the bigquery.jobs.create permission) bigquery.user (includes the bigquery.jobs.create permission) bigquery.jobUser (includes the bigquery.jobs.create permission) Additionally, if you have the bigquery.datasets.create permission, you can create and update tables using a load job in the datasets that you create.

