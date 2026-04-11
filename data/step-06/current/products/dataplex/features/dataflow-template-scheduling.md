---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.614Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Dataflow template scheduling"
feature_slug: "dataflow-template-scheduling"
latest_feature_date: "2022-05-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/release-notes"
  - "https://docs.cloud.google.com/dataplex/docs/use-data-profiling"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
keywords:
  - "dataflow"
  - "template"
  - "scheduling"
  - "lets"
  - "users"
  - "schedule"
  - "and"
  - "monitor"
---

# Dataflow template scheduling

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataflow template scheduling lets users schedule and monitor Google-provided and custom Dataflow templates from the Dataplex page in the Cloud Console.

## Extended Definition

Dataflow template scheduling lets users schedule and monitor Google-provided and custom Dataflow templates from the Dataplex page in the Cloud Console.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)

## Supporting Pages

### Knowledge Catalog release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- May 02, 2022 Feature Added support for scheduling Google-provided and custom Dataflow templates from the Dataplex page in the Cloud Console.
- Dataplex is an intelligent data fabric that helps organizations to centrally manage, monitor, and govern their data across data lakes, data warehouses, and data marts with consistent controls, providing access to trusted data and powering analytics at scale.
- Explore provides a fully-managed, serverless data exploration experience powered by fully-governed collaboration, one-click scheduling, and interactive querying using Spark SQL scripts and Jupyter notebooks.
- Using a custom execution identity lets you enforce the principle of least privilege, use fine-grained BigQuery access controls, and unify scan processing costs directly under BigQuery.

### "Create and use data profile scans \_|\_ Knowledge Catalog \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Export table schema If you want to export the data profile scan results to an existing BigQuery table, make sure that it is compatible with the following table schema: Column name Column data type Sub field name (if applicable) Sub field data type Mode Example data profile scan struct/record resource name string nullable //dataplex.googleapis.com/projects/test-project/locations/europe-west2/datascans/test-datascan project id string nullable test-project location string nullable us-central1 data scan id string nullable test-datascan data source struct/record resource name string nullable Entity case: //dataplex.googleapis.com/projects/test-project/locations/europe-west2/lakes/test-lake/zones/test-zone/entities/test-entity Table case: //bigquery.googleapis.com/projects/test-project/datasets/test-dataset/tables/test-table dataplex entity project id string nullable test-project dataplex entity project number integer nullable 123456789012 dataplex lake id string nullable (Valid only if source is entity) test-lake dataplex zone id string nullable (Valid only if source is entity) test-zone dataplex entity id string nullable (Valid only if source is entity) test-entity table project id string nullable dataplex-table table project number int64 nullable 345678901234 dataset id string nullable (Valid only if source is table) test-dataset table id string nullable (Valid only if source is table) test-table data profile job id string nullable caeba234-cfde-4fca-9e5b-fe02a9812e38 data profile job configuration json trigger string nullable ondemand / schedule incremental boolean nullable true / false sampling percent float nullable (0-100) 20.0 (indicates 20%) row filter string nullable col1 >= 0 AND col2 column filter json nullable {"include fields":["col1","col2"], "exclude fields":["col3"]} job labels json nullable {"key1":value1} job start time timestamp nullable 2023-01-01 00:00:00 UTC job end time timestamp nullable 2023-01-01 00:00:00 UTC job rows scanned integer nullable 7500 column name string nullable column-1 column type string nullable string column mode string nullable repeated percent null float nullable (0.0-100.0) 20.0 (indicates 20%) percent unique float nullable (0.0-100.0) 92.5 min string length integer nullable (Valid only if column type is string) 10 max string length integer nullable (Valid only if column type is string) 4 average string length float nullable (Valid only if column type is string) 7.2 min value float nullable (Valid only if column type is numeric - integer/float) max value float nullable (Valid only if column type is numeric - integer/float) average value float nullable (Valid only if column type is numeric - integer/float) standard deviation float nullable (Valid only if column type is numeric - integer/float) quartile lower integer nullable (Valid only if column type is numeric - integer/float) quartile median integer nullable (Valid only if column type is numeric - integer/float) quartile upper integer nullable (Valid only if column type is numeric - integer/float) top n struct/record - repeated value string nullable "4009" count integer nullable 20 percent float nullable 10 (indicates 10%) Export table setup When you export to BigQueryExport tables, follow these guidelines: For the field resultsTable , use the format: //bigquery.googleapis.com/projects/{project-id}/datasets/{dataset-id}/tables/{table-id} .
- ListDataScanJobsRequest ; public class SyncListDataScanJobs { public static void main ( String [] args ) throws Exception { syncListDataScanJobs (); } public static void syncListDataScanJobs () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataScanServiceClient dataScanServiceClient = DataScanServiceClient . create ()) { ListDataScanJobsRequest request = ListDataScanJobsRequest . newBuilder () . setParent ( DataScanName . of ( "[PROJECT]" , "[LOCATION]" , "[DATASCAN]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . build (); for ( DataScanJob element : dataScanServiceClient . listDataScanJobs ( request ). iterateAll ()) { // doThingsWith(element); } } } } Python Python Before trying this sample, follow the Python setup instructions in the Knowledge Catalog quickstart using client libraries .
- LocationName ; public class SyncCreateDataScan { public static void main ( String [] args ) throws Exception { syncCreateDataScan (); } public static void syncCreateDataScan () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataScanServiceClient dataScanServiceClient = DataScanServiceClient . create ()) { CreateDataScanRequest request = CreateDataScanRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setDataScan ( DataScan . newBuilder (). build ()) . setDataScanId ( "dataScanId1260787906" ) . setValidateOnly ( true ) . build (); DataScan response = dataScanServiceClient . createDataScanAsync ( request ). get (); } } } Python Python Before trying this sample, follow the Python setup instructions in the Knowledge Catalog quickstart using client libraries .
- FieldMask ; public class SyncUpdateDataScan { public static void main ( String [] args ) throws Exception { syncUpdateDataScan (); } public static void syncUpdateDataScan () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataScanServiceClient dataScanServiceClient = DataScanServiceClient . create ()) { UpdateDataScanRequest request = UpdateDataScanRequest . newBuilder () . setDataScan ( DataScan . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setValidateOnly ( true ) . build (); DataScan response = dataScanServiceClient . updateDataScanAsync ( request ). get (); } } } Python Python Before trying this sample, follow the Python setup instructions in the Knowledge Catalog quickstart using client libraries .

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Aspect Type AspectType is a template for creating Aspects, and represents the JSON-schema for a given Entry, for example, BigQuery Table Schema. com. google. cloud. dataplex. v1.
- Builder AspectType is a template for creating Aspects, and represents the JSON-schema for a given Entry, for example, BigQuery Table Schema. com. google. cloud. dataplex. v1.
- Trigger Spec Task scheduling and trigger settings. com. google. cloud. dataplex. v1.
- Trigger DataScan scheduling and trigger settings. com. google. cloud. dataplex. v1.

