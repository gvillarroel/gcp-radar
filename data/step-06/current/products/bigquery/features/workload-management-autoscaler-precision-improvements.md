---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.436Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Workload management autoscaler precision improvements"
feature_slug: "workload-management-autoscaler-precision-improvements"
latest_feature_date: "2024-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
keywords:
  - "workload"
  - "management"
  - "autoscaler"
  - "precision"
  - "improvements"
  - "bigquery"
  - "autoscaling"
  - "now"
---

# Workload management autoscaler precision improvements

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery workload management autoscaling now scales more precisely.

## Extended Definition

BigQuery workload management autoscaling now scales more precisely.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- However, if you shorten the time frame option so that the alignment period is two seconds, you can see that the autoscaler scales to the workload demand and displays more accurate data.
- The following query provides context on your job performance so you can choose the correct amount of autoscaling slots for your workload.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view all data in the operational health and resource utilization charts: To view all data in the operational health and resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization bigquery.reservationAssignments.list on the administration project used to create the reservations bigquery.capacityCommitments.list on the administration project used to create the reservations As an on-demand user, to view all data in the resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization To view operational health summary data for BigQuery table storage: bigquery.tables.get or bigquery.tables.list on the organization To view operational health and resource utilization charts at the reservation level: bigquery.reservations.list on the administration project used to create the reservations bigquery.reservationAssignments.list on the administration project used to create the reservations To view resource utilization charts at the project level: bigquery.jobs.listAll on the project You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to view all data in the operational health and resource utilization charts, ask your administrator to grant you the following IAM roles on your organization: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) BigQuery Metadata Viewer ( roles/bigquery.metadataViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery automatically scales up to the number of slots needed for your workload, never exceeding the maximum that you set.
- For more information, see Workload management using reservations .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDryRun () { // Runs a dry query of the U.S. given names dataset for the state of Texas. const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , dryRun : true , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); // Print the status and statistics console . log ( 'Status:' ); console . log ( job . metadata . status ); console . log ( '\nJob Statistics:' ); console . log ( job . metadata . statistics ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- Unexpected storage charges Scenarios that could lead to storage charge increases: Increases in the amount of data that is stored in your tables—use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view to monitor the change in bytes for your tables Changing dataset billing models Increasing the time-travel window for physical billing model datasets Modification of tables that have data in long-term storage , causing them to become active storage Deletion of table(s) or dataset(s) resulted in higher BigQuery storage costs The BigQuery time travel feature retains deleted data for duration of the configured time-travel window and an additional 7 days for fail-safe recovery.

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- When you use decentralized authority, you maintain central control of security and BigQuery capacity by using Cloud Key Management Service (Cloud KMS) , column policies, VPC Service Controls, and reservations.
- Best practices for multi-tenant workloads on BigQuery This document provides techniques and best practices for common patterns that are used in multi-tenant data platforms and enterprise data marts.
- This document is for organizations that deploy multi-tenant platforms on BigQuery and who want to understand the available access controls and performance management features .
- Cost management : Ensure consistent BigQuery costs to host each tenant.

