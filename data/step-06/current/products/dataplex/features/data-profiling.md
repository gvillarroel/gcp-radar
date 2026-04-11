---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.609Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Data profiling"
feature_slug: "data-profiling"
latest_feature_date: "2023-05-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/use-data-profiling"
  - "https://docs.cloud.google.com/dataplex/docs/data-profiling-overview"
  - "https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality"
keywords:
  - "profiling"
  - "analyzes"
  - "characteristics"
  - "without"
  - "requiring"
  - "dataplex"
  - "lake"
  - "and"
---

# Data profiling

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Data profiling analyzes BigQuery data characteristics without requiring a Dataplex lake and supports tables, views, external tables, BigLake tables, and sampling; Data profiling helps users understand data by identifying common characteristics and recommending data quality rules.

## Extended Definition

Data profiling analyzes BigQuery data characteristics without requiring a Dataplex lake and supports tables, views, external tables, BigLake tables, and sampling; Data profiling helps users understand data by identifying common characteristics and recommending data quality rules.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview)
- [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)

## Supporting Pages

### "Create and use data profile scans \_|\_ Knowledge Catalog \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export table schema If you want to export the data profile scan results to an existing BigQuery table, make sure that it is compatible with the following table schema: Column name Column data type Sub field name (if applicable) Sub field data type Mode Example data profile scan struct/record resource name string nullable //dataplex.googleapis.com/projects/test-project/locations/europe-west2/datascans/test-datascan project id string nullable test-project location string nullable us-central1 data scan id string nullable test-datascan data source struct/record resource name string nullable Entity case: //dataplex.googleapis.com/projects/test-project/locations/europe-west2/lakes/test-lake/zones/test-zone/entities/test-entity Table case: //bigquery.googleapis.com/projects/test-project/datasets/test-dataset/tables/test-table dataplex entity project id string nullable test-project dataplex entity project number integer nullable 123456789012 dataplex lake id string nullable (Valid only if source is entity) test-lake dataplex zone id string nullable (Valid only if source is entity) test-zone dataplex entity id string nullable (Valid only if source is entity) test-entity table project id string nullable dataplex-table table project number int64 nullable 345678901234 dataset id string nullable (Valid only if source is table) test-dataset table id string nullable (Valid only if source is table) test-table data profile job id string nullable caeba234-cfde-4fca-9e5b-fe02a9812e38 data profile job configuration json trigger string nullable ondemand / schedule incremental boolean nullable true / false sampling percent float nullable (0-100) 20.0 (indicates 20%) row filter string nullable col1 >= 0 AND col2 column filter json nullable {"include fields":["col1","col2"], "exclude fields":["col3"]} job labels json nullable {"key1":value1} job start time timestamp nullable 2023-01-01 00:00:00 UTC job end time timestamp nullable 2023-01-01 00:00:00 UTC job rows scanned integer nullable 7500 column name string nullable column-1 column type string nullable string column mode string nullable repeated percent null float nullable (0.0-100.0) 20.0 (indicates 20%) percent unique float nullable (0.0-100.0) 92.5 min string length integer nullable (Valid only if column type is string) 10 max string length integer nullable (Valid only if column type is string) 4 average string length float nullable (Valid only if column type is string) 7.2 min value float nullable (Valid only if column type is numeric - integer/float) max value float nullable (Valid only if column type is numeric - integer/float) average value float nullable (Valid only if column type is numeric - integer/float) standard deviation float nullable (Valid only if column type is numeric - integer/float) quartile lower integer nullable (Valid only if column type is numeric - integer/float) quartile median integer nullable (Valid only if column type is numeric - integer/float) quartile upper integer nullable (Valid only if column type is numeric - integer/float) top n struct/record - repeated value string nullable "4009" count integer nullable 20 percent float nullable 10 (indicates 10%) Export table setup When you export to BigQueryExport tables, follow these guidelines: For the field resultsTable , use the format: //bigquery.googleapis.com/projects/{project-id}/datasets/{dataset-id}/tables/{table-id} .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and manage data profile scans: Create, run, update, and delete data profile scans: dataplex.datascans.create on project dataplex.datascans.update on data scan dataplex.datascans.delete on data scan dataplex.datascans.run on data scan dataplex.datascans.get on data scan dataplex.datascans.list on project dataplex.dataScanJobs.get on data scan job dataplex.dataScanJobs.list on data scan View data profile scan results, jobs, and history: dataplex.datascans.getData on data scan dataplex.datascans.list on project dataplex.dataScanJobs.get on data scan job dataplex.dataScanJobs.list on data scan Publish data profile scan results to Knowledge Catalog: dataplex.entryGroups.useDataProfileAspect on entry group bigquery.tables.update on table dataplex.entries.update on entry View published data profile results for a table in BigQuery or Knowledge Catalog: bigquery.tables.get on table bigquery.tables.getData on table You might also be able to get these permissions with custom roles or other predefined roles .
- For more information, see Set up authentication for a local development environment . using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; using Google.Protobuf.WellKnownTypes ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for UpdateDataScan</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void UpdateDataScanRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .
- For more information, see Set up authentication for a local development environment . using Google.Api.Gax.ResourceNames ; using Google.Cloud.Dataplex.V1 ; using Google.LongRunning ; public sealed partial class GeneratedDataScanServiceClientSnippets { /// <summary>Snippet for CreateDataScan</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void CreateDataScanRequestObject () { // Create client DataScanServiceClient dataScanServiceClient = DataScanServiceClient .

### About data profiling \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/data-profiling-overview](https://docs.cloud.google.com/dataplex/docs/data-profiling-overview)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It is optimized for speed and cost-efficiency to support use cases such as the following: Grounding AI agent responses with immediate data characteristics Cost-effectively pre-generating profiles at scale for global data discovery Providing rapid health reports during interactive data exploration The lightweight mode has the following limitations: Unlike the standard profiling mode, you can't modify the scope, filters, or sampling size on lightweight scans.
- Knowledge Catalog (formerly Dataplex Universal Catalog) makes it easier to understand and analyze your data by automatically profiling your BigQuery tables.
- Reporting and monitoring You can monitor and analyze the data profiling results using the following reports and methods: Reports published with the source table in the BigQuery and Knowledge Catalog pages If you configure a data profile scan to publish the results to BigQuery and Knowledge Catalog, you can view the latest data profile scan results on the source table's Data profile tab in both BigQuery and Knowledge Catalog.
- Analysis tab On the Data profiling & quality > Data profile scan page in Knowledge Catalog and BigQuery, you can use the Analysis tab to view the trends for a given statistic of a column over multiple profile jobs.

### Use auto data quality \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Export table schema To export the data quality scan results to an existing BigQuery table, make sure that it is compatible with the following table schema: Column name Column data type Sub field name (if applicable) Sub field data type Mode Example data quality scan struct/record resource name string nullable //dataplex.googleapis.com/projects/test-project/locations/europe-west2/datascans/test-datascan project id string nullable dataplex-back-end-dev-project location string nullable us-central1 data scan id string nullable test-datascan display name string nullable datascan-display-name data source struct/record resource name string nullable Entity case: //dataplex.googleapis.com/projects/dataplex-back-end-dev-project/locations/europe-west2/lakes/a0-datascan-test-lake/zones/a0-datascan-test-zone/entities/table1 Table case: //bigquery.googleapis.com/projects/test-project/datasets/test-dataset/tables/test-table dataplex entity project id string nullable dataplex-back-end-dev-project dataplex entity project number integer nullable 123456789 dataplex lake id string nullable (Valid only if source is entity) test-lake dataplex zone id string nullable (Valid only if source is entity) test-zone dataplex entity id string nullable (Valid only if source is entity) test-entity table project id string nullable test-project table project number integer nullable 987654321 dataset id string nullable (Valid only if source is table) test-dataset table id string nullable (Valid only if source is table) test-table data quality job id string nullable caeba234-cfde-4fca-9e5b-fe02a9812e38 data quality job configuration json trigger string nullable ondemand / schedule incremental boolean nullable true / false sampling percent float nullable (0-100) 20.0 (indicates 20%) row filter string nullable col1 >= 0 AND col2 incremental column string nullable column name job labels json nullable {"key1":value1} job start time timestamp nullable 2023-01-01 00:00:00 UTC job end time timestamp nullable 2023-01-01 00:00:00 UTC job quality result struct/record passed boolean nullable true / false score float nullable 90.8 incremental start string nullable 2023-01-01T00:00:00 incremental end string nullable 2024-01-01T00:00:00 job dimension result json nullable {"ACCURACY":{"passed":true,"score":100},"CONSISTENCY":{"passed":false,"score":60}} job rows scanned integer nullable 7500 rule name string nullable test-rule rule description string nullable Test rule description rule type string nullable Range Check rule evaluation type string nullable Per row rule column string nullable Rule only attached to a certain column rule dimension string nullable UNIQUENESS rule threshold percent float nullable (0.0-100.0) Rule-threshold-pct in API 100 rule parameters json nullable {min: 24, max:5345} rule passed boolean nullable true rule rows evaluated integer nullable 7400 rule rows passed integer nullable 3 rule rows null integer nullable 4 rule failed records query string nullable "SELECT FROM test-project.test-dataset.test-table WHERE (NOT((cTime >= '15:31:38.776361' and cTime created on timestamp nullable 2023-01-01 00:00:00 UTC last updated timestamp nullable 2023-01-01 00:00:00 UTC rule assertion row count integer nullable 10 debug queries struct/record description string nullable Test debug query description sql statement string nullable SELECT MIN(col1) AS min col1, AVG(col1) FROM ${data()} debug query results struct/record repeated [{"name": "min col1", "type": "INTEGER", "value": "5"}, {"type": "FLOAT", "value": "7"}] ↳ name string nullable The name of query result column, like min col1 ↳ type string nullable The type of query result column, like INTEGER ↳ value string nullable The value of query result column, like 5 Note: Column rule assertion row count is only applicable for SQL Assertion rule .
- Set alerts on data quality failures for a BigQuery table that isn't organized in a Knowledge Catalog lake: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.dataSource="//bigquery.googleapis.com/projects/test-project/datasets/testdataset/table/chicago taxi trips" AND labels."dataplex.googleapis.com/data scan state"="SUCCEEDED" AND resource.labels.resource container="projects/112233445566" AND NOT jsonPayload.dataQuality.passed=true Set alerts on data quality failures for a BigQuery table that's organized in a Knowledge Catalog lake: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.dataSource="projects/test-project/datasets/testdataset/table/chicago taxi trips" AND labels."dataplex.googleapis.com/data scan state"="SUCCEEDED" AND resource.labels.resource container="projects/112233445566" AND NOT jsonPayload.dataQuality.passed=true Sample queries to set per rule alerts A sample query to set alerts on all failing data quality rules with the specified custom rule name for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.ruleName="custom-name" AND jsonPayload.result="FAILED" A sample query to set alerts on all failing data quality rules of a specific evaluation type for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.evalutionType="PER ROW" AND jsonPayload.result="FAILED" A sample query to set alerts on all failing data quality rules for a column in the table used for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.column="CInteger" AND jsonPayload.result="FAILED" Troubleshoot a data quality failure For each job with row-level rules that fail, Knowledge Catalog provides a query to get the failed records.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to read data from various sources and export results: Read BigQuery table data: bigquery.tables.get on BigQuery tables bigquery.tables.getData on BigQuery tables Export scan results to a BigQuery table: bigquery.datasets.get on results dataset and table bigquery.tables.create on results dataset and table bigquery.tables.get on results dataset and table bigquery.tables.getData on results dataset and table bigquery.tables.update on results dataset and table bigquery.tables.updateData on results dataset and table Scan BigQuery data organized in a Knowledge Catalog lake: dataplex.lakes.list on Dataplex resources dataplex.lakes.get on Dataplex resources dataplex.zones.list on Dataplex resources dataplex.zones.get on Dataplex resources dataplex.entities.list on Dataplex resources dataplex.entities.get on Dataplex resources dataplex.operations.get on Dataplex resources Scan a BigQuery external table from Cloud Storage: storage.buckets.get on the Cloud Storage bucket storage.objects.get on the Cloud Storage bucket Your administrator might also be able to give the Knowledge Catalog service account of the project containing the data quality scan these permissions with custom roles or other predefined roles .
- Read BigQuery table data: BigQuery Data Viewer ( roles/bigquery.dataViewer ) on BigQuery tables to be scanned and any other tables referenced in rules Export scan results to a BigQuery table: BigQuery Data Editor ( roles/bigquery.dataEditor ) on the results dataset and table Scan BigQuery data organized in a Knowledge Catalog lake: Dataplex Metadata Reader ( roles/dataplex.metadataReader ) on Dataplex resources Dataplex Viewer ( roles/dataplex.viewer ) on Dataplex resources Scan a BigQuery external table from Cloud Storage: Storage Object Viewer ( roles/storage.objectViewer ) on the Cloud Storage bucket For more information about granting roles, see Manage access to projects, folders, and organizations .

