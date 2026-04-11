---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.602Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data quality scores"
feature_slug: "data-quality-scores"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality"
  - "https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview"
  - "https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata"
keywords:
  - "quality"
  - "scores"
  - "dataplex"
  - "automatic"
  - "provides"
  - "that"
  - "show"
  - "the"
---

# Data quality scores

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex automatic data quality provides scores that show the percentage of rules that passed.

## Extended Definition

Dataplex automatic data quality provides scores that show the percentage of rules that passed.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
- [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview)
- [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata)

## Supporting Pages

### Use auto data quality \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Set alerts on data quality failures for a BigQuery table that isn't organized in a Knowledge Catalog lake: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.dataSource="//bigquery.googleapis.com/projects/test-project/datasets/testdataset/table/chicago taxi trips" AND labels."dataplex.googleapis.com/data scan state"="SUCCEEDED" AND resource.labels.resource container="projects/112233445566" AND NOT jsonPayload.dataQuality.passed=true Set alerts on data quality failures for a BigQuery table that's organized in a Knowledge Catalog lake: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.dataSource="projects/test-project/datasets/testdataset/table/chicago taxi trips" AND labels."dataplex.googleapis.com/data scan state"="SUCCEEDED" AND resource.labels.resource container="projects/112233445566" AND NOT jsonPayload.dataQuality.passed=true Sample queries to set per rule alerts A sample query to set alerts on all failing data quality rules with the specified custom rule name for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.ruleName="custom-name" AND jsonPayload.result="FAILED" A sample query to set alerts on all failing data quality rules of a specific evaluation type for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.evalutionType="PER ROW" AND jsonPayload.result="FAILED" A sample query to set alerts on all failing data quality rules for a column in the table used for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.column="CInteger" AND jsonPayload.result="FAILED" Troubleshoot a data quality failure For each job with row-level rules that fail, Knowledge Catalog provides a query to get the failed records.
- Export table schema To export the data quality scan results to an existing BigQuery table, make sure that it is compatible with the following table schema: Column name Column data type Sub field name (if applicable) Sub field data type Mode Example data quality scan struct/record resource name string nullable //dataplex.googleapis.com/projects/test-project/locations/europe-west2/datascans/test-datascan project id string nullable dataplex-back-end-dev-project location string nullable us-central1 data scan id string nullable test-datascan display name string nullable datascan-display-name data source struct/record resource name string nullable Entity case: //dataplex.googleapis.com/projects/dataplex-back-end-dev-project/locations/europe-west2/lakes/a0-datascan-test-lake/zones/a0-datascan-test-zone/entities/table1 Table case: //bigquery.googleapis.com/projects/test-project/datasets/test-dataset/tables/test-table dataplex entity project id string nullable dataplex-back-end-dev-project dataplex entity project number integer nullable 123456789 dataplex lake id string nullable (Valid only if source is entity) test-lake dataplex zone id string nullable (Valid only if source is entity) test-zone dataplex entity id string nullable (Valid only if source is entity) test-entity table project id string nullable test-project table project number integer nullable 987654321 dataset id string nullable (Valid only if source is table) test-dataset table id string nullable (Valid only if source is table) test-table data quality job id string nullable caeba234-cfde-4fca-9e5b-fe02a9812e38 data quality job configuration json trigger string nullable ondemand / schedule incremental boolean nullable true / false sampling percent float nullable (0-100) 20.0 (indicates 20%) row filter string nullable col1 >= 0 AND col2 incremental column string nullable column name job labels json nullable {"key1":value1} job start time timestamp nullable 2023-01-01 00:00:00 UTC job end time timestamp nullable 2023-01-01 00:00:00 UTC job quality result struct/record passed boolean nullable true / false score float nullable 90.8 incremental start string nullable 2023-01-01T00:00:00 incremental end string nullable 2024-01-01T00:00:00 job dimension result json nullable {"ACCURACY":{"passed":true,"score":100},"CONSISTENCY":{"passed":false,"score":60}} job rows scanned integer nullable 7500 rule name string nullable test-rule rule description string nullable Test rule description rule type string nullable Range Check rule evaluation type string nullable Per row rule column string nullable Rule only attached to a certain column rule dimension string nullable UNIQUENESS rule threshold percent float nullable (0.0-100.0) Rule-threshold-pct in API 100 rule parameters json nullable {min: 24, max:5345} rule passed boolean nullable true rule rows evaluated integer nullable 7400 rule rows passed integer nullable 3 rule rows null integer nullable 4 rule failed records query string nullable "SELECT FROM test-project.test-dataset.test-table WHERE (NOT((cTime >= '15:31:38.776361' and cTime created on timestamp nullable 2023-01-01 00:00:00 UTC last updated timestamp nullable 2023-01-01 00:00:00 UTC rule assertion row count integer nullable 10 debug queries struct/record description string nullable Test debug query description sql statement string nullable SELECT MIN(col1) AS min col1, AVG(col1) FROM ${data()} debug query results struct/record repeated [{"name": "min col1", "type": "INTEGER", "value": "5"}, {"type": "FLOAT", "value": "7"}] ↳ name string nullable The name of query result column, like min col1 ↳ type string nullable The type of query result column, like INTEGER ↳ value string nullable The value of query result column, like 5 Note: Column rule assertion row count is only applicable for SQL Assertion rule .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to read data from various sources and export results: Read BigQuery table data: bigquery.tables.get on BigQuery tables bigquery.tables.getData on BigQuery tables Export scan results to a BigQuery table: bigquery.datasets.get on results dataset and table bigquery.tables.create on results dataset and table bigquery.tables.get on results dataset and table bigquery.tables.getData on results dataset and table bigquery.tables.update on results dataset and table bigquery.tables.updateData on results dataset and table Scan BigQuery data organized in a Knowledge Catalog lake: dataplex.lakes.list on Dataplex resources dataplex.lakes.get on Dataplex resources dataplex.zones.list on Dataplex resources dataplex.zones.get on Dataplex resources dataplex.entities.list on Dataplex resources dataplex.entities.get on Dataplex resources dataplex.operations.get on Dataplex resources Scan a BigQuery external table from Cloud Storage: storage.buckets.get on the Cloud Storage bucket storage.objects.get on the Cloud Storage bucket Your administrator might also be able to give the Knowledge Catalog service account of the project containing the data quality scan these permissions with custom roles or other predefined roles .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to run and manage data quality scans: Run a data quality scan on a BigQuery table: bigquery.jobs.create on the project to run scan jobs bigquery.tables.get on the BigQuery table to be scanned bigquery.tables.getData on the BigQuery table to be scanned Publish data quality scan results to Knowledge Catalog: bigquery.tables.update on the scanned table dataplex.entryGroups.useDataQualityScorecardAspect on the @bigquery entry group in the same location as the table Create a DataScan : dataplex.datascans.create on the project Delete a DataScan : dataplex.datascans.delete on the project View DataScan metadata: dataplex.datascans.get on the project View DataScan details including rules and results: dataplex.datascans.getData on the project List DataScan s: dataplex.datascans.list on the project Run a DataScan : dataplex.datascans.run on the project Update a DataScan : dataplex.datascans.update on the project Get or set IAM policy on a DataScan : dataplex.datascans.getIamPolicy on the project dataplex.datascans.setIamPolicy on the project You might also be able to get these permissions with custom roles or other predefined roles .

### Auto data quality overview \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Review data quality scores Each scan result provides data quality scores that indicate the percentage of rules that passed.
- Use the data quality scores to normalize data quality across tables or columns, track trends, and identify data that doesn't meet quality requirements.
- Data quality scores that are reported at the column level are supported only in the API.
- All columns Required: SQL condition to use Dimension Optional: Column to associate this rule with Simple aggregate example: avg(price) > 100 Using an expression subquery to compare values across a different table: (SELECT COUNT( ) FROM example project.example dataset.different-table) < COUNT( ) SQL assertion Aggregate An assertion rule uses a data quality query to find rows that fail one or more conditions specified in the query.

### "Manage aspects and enrich metadata \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax ; using Google.Api.Gax.ResourceNames ; using Google.Cloud.Dataplex.V1 ; using System ; public sealed partial class GeneratedCatalogServiceClientSnippets { /// <summary>Snippet for ListAspectTypes</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void ListAspectTypesRequestObject () { // Create client CatalogServiceClient catalogServiceClient = CatalogServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; public sealed partial class GeneratedCatalogServiceClientSnippets { /// <summary>Snippet for UpdateAspectType</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void UpdateAspectTypeRequestObject () { // Create client CatalogServiceClient catalogServiceClient = CatalogServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; public sealed partial class GeneratedCatalogServiceClientSnippets { /// <summary>Snippet for DeleteAspectType</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void DeleteAspectTypeRequestObject () { // Create client CatalogServiceClient catalogServiceClient = CatalogServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax.ResourceNames ; using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; public sealed partial class GeneratedCatalogServiceClientSnippets { /// <summary>Snippet for CreateAspectType</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void CreateAspectTypeRequestObject () { // Create client CatalogServiceClient catalogServiceClient = CatalogServiceClient .

