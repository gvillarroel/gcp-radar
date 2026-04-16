---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.627Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Explorer pane resource refresh"
feature_slug: "explorer-pane-resource-refresh"
latest_feature_date: "2023-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/managing-datasets"
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
keywords:
  - "explorer"
  - "pane"
  - "resource"
  - "refresh"
  - "lets"
  - "users"
  - "contents"
  - "project"
---

# Explorer pane resource refresh

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The Explorer pane lets users refresh the contents of a project or dataset resource.

## Extended Definition

The Explorer pane lets users refresh the contents of a project or dataset resource.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-reference-2`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- The Reservations , Folders , Projects , and Users filters are populated with the respective resources that have consumed slots in the selected timeframe.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view all data in the operational health and resource utilization charts: To view all data in the operational health and resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization bigquery.reservationAssignments.list on the administration project used to create the reservations bigquery.capacityCommitments.list on the administration project used to create the reservations As an on-demand user, to view all data in the resource utilization charts for an organization: bigquery.jobs.listExecutionMetadata or bigquery.jobs.listAll on the organization To view operational health summary data for BigQuery table storage: bigquery.tables.get or bigquery.tables.list on the organization To view operational health and resource utilization charts at the reservation level: bigquery.reservations.list on the administration project used to create the reservations bigquery.reservationAssignments.list on the administration project used to create the reservations To view resource utilization charts at the project level: bigquery.jobs.listAll on the project You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to view all data in the operational health and resource utilization charts, ask your administrator to grant you the following IAM roles on your organization: BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) BigQuery Metadata Viewer ( roles/bigquery.metadataViewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Each metric has the following default settings, which you can edit in the Chart configuration pane by clicking the metric's name: The default usage data is from the reservation resource and the capacity data is from the edition resource.

### Manage datasets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- Source ID: `site-docs-reference-required-11`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PARAMETERS : the parameters for the transfer configuration in the JSON format Parameters for a dataset copy configuration include the following: source dataset id : the ID of the source dataset that you want to copy source project id : the ID of the project that your source dataset is in overwrite destination table : an optional flag that lets you truncate the tables of a previous copy and refresh all the data Both the source and destination tables must have the same partitioning schema.
- Go to BigQuery In the left pane, click explore Explorer : In the Explorer pane, expand your project, click Datasets , and then click the dataset.
- In the Explorer pane, expand your project, click Datasets , and then select a dataset.
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); DatasetId datasetId = DatasetId . of ( projectId , datasetName ); boolean success = bigquery . delete ( datasetId , DatasetDeleteOption . delete Contents ()); if ( success ) { System . out . println ( "Dataset deleted successfully" ); } else { System . out . println ( "Dataset was not found" ); } } catch ( BigQueryException e ) { System . out . println ( "Dataset was not deleted. \n" + e . toString ()); } } } The following code sample deletes a dataset and all of its contents: / Copyright 2020 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the left pane, click explore Explorer : In the Explorer pane, expand your project, click Datasets , and then select a dataset, or select a table, view, or routine in the dataset.
- Go to BigQuery In the left pane, click explore Explorer : In the Explorer pane, expand your project, click Datasets , and then select a dataset.
- Go to BigQuery In the left pane, click explore Explorer : In the Explorer pane, expand your project, click Datasets , and then select a dataset.
- Go to BigQuery In the left pane, click explore Explorer : In the Explorer pane, expand your project, click Datasets , and then select a dataset.

