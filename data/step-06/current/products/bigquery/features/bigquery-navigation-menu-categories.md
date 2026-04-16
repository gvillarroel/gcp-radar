---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.390Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery navigation menu categories"
feature_slug: "bigquery-navigation-menu-categories"
latest_feature_date: "2025-01-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
  - "https://docs.cloud.google.com/bigquery/docs/automatic-discovery"
keywords:
  - "bigquery"
  - "navigation"
  - "menu"
  - "categories"
  - "has"
  - "reorganized"
---

# BigQuery navigation menu categories

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery has a reorganized navigation menu with new categories.

## Extended Definition

BigQuery has a reorganized navigation menu with new categories.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- [https://docs.cloud.google.com/bigquery/docs/automatic-discovery](https://docs.cloud.google.com/bigquery/docs/automatic-discovery)

## Supporting Pages

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Identify API calls Go to the Google Cloud navigation menu menu, and then select Logging > Logs Explorer : Go to the Logs Explorer Filter logs to view table operations by running the following query: resource.type="bigquery dataset" protoPayload.resourceName="projects/my-project-id/datasets/my dataset/tables/my table" (protoPayload.methodName="google.cloud.bigquery.v2.TableService.PatchTable" OR protoPayload.methodName="google.cloud.bigquery.v2.TableService.UpdateTable" OR protoPayload.methodName="google.cloud.bigquery.v2.TableService.InsertTable") Identify jobs The following query returns a list of jobs that modify the affected table in the project within the past day.
- To identify the method that reached the limit, do the following: In the Google Cloud console, go to the Google Cloud navigation menu menu and then select Logging > Logs Explorer for your project: Go to the Logs Explorer Filter logs by running the following query: resource.type="bigquery resource" protoPayload.authenticationInfo.principalEmail="<user email or service account>" "Too many API requests per user per method for this user method" In the log entry, you can find the method name under the property protoPayload.method name.
- For example, using Logs Explorer , the following query returns errors with either Quota exceeded or limit in the message string: resource.type = ("bigquery project" OR "bigquery dataset") protoPayload.status.code ="7" protoPayload.status.message: ("Quota exceeded" OR "limit") In this example, the status code 7 indicates PERMISSION DENIED , which corresponds to the HTTP 403 status code.
- To see all copy jobs in all regions, you can use the following filter in Cloud Logging: resource.type="bigquery resource" protoPayload.methodName="jobservice.insert" protoPayload.serviceData.jobInsertRequest.resource.jobConfiguration.tableCopy: Resolution If the goal of the frequent copy operations is to create a snapshot of data, consider using table snapshots instead.

### "Discover and catalog Cloud Storage data \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/automatic-discovery](https://docs.cloud.google.com/bigquery/docs/automatic-discovery)
- Source ID: `site-docs-reference-5`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the navigation menu, click Governance > Metadata curation .
- Go to BigQuery In the navigation menu, click Governance > Metadata curation .
- Go to BigQuery In the navigation menu, click Governance > Metadata curation .
- Go to BigQuery In the navigation menu, click Governance > Metadata curation .

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- In the body of the request, specify updated values for the following fields: displayName description primaryContact documentation icon categories[] discoveryType logLinkedDatasetQueryUserEmail bigqueryDataset.replicaLocations For details on these fields, see Resource: Listing .
- If you select BigQuery dataset , then do the following: In the Shared dataset menu, select an existing dataset, or click Create a dataset to create a new dataset.
- In the Configure data section, in the Resource type menu, select BigQuery dataset or Pub/Sub Topic .
- BigQuery sharing subscribers can filter listings based on these categories.

