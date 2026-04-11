---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.586Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Automated cataloging of Looker metadata"
feature_slug: "automated-cataloging-of-looker-metadata"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/use-data-profiling"
  - "https://docs.cloud.google.com/dataplex/docs/release-notes"
  - "https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata"
keywords:
  - "automated"
  - "cataloging"
  - "of"
  - "looker"
  - "metadata"
  - "dataplex"
  - "can"
  - "automatically"
---

# Automated cataloging of Looker metadata

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex can automatically ingest and catalog metadata from Looker (Google Cloud core).

## Extended Definition

Dataplex can automatically ingest and catalog metadata from Looker (Google Cloud core).

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata)

## Supporting Pages

### "Create and use data profile scans \_|\_ Knowledge Catalog \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export table schema If you want to export the data profile scan results to an existing BigQuery table, make sure that it is compatible with the following table schema: Column name Column data type Sub field name (if applicable) Sub field data type Mode Example data profile scan struct/record resource name string nullable //dataplex.googleapis.com/projects/test-project/locations/europe-west2/datascans/test-datascan project id string nullable test-project location string nullable us-central1 data scan id string nullable test-datascan data source struct/record resource name string nullable Entity case: //dataplex.googleapis.com/projects/test-project/locations/europe-west2/lakes/test-lake/zones/test-zone/entities/test-entity Table case: //bigquery.googleapis.com/projects/test-project/datasets/test-dataset/tables/test-table dataplex entity project id string nullable test-project dataplex entity project number integer nullable 123456789012 dataplex lake id string nullable (Valid only if source is entity) test-lake dataplex zone id string nullable (Valid only if source is entity) test-zone dataplex entity id string nullable (Valid only if source is entity) test-entity table project id string nullable dataplex-table table project number int64 nullable 345678901234 dataset id string nullable (Valid only if source is table) test-dataset table id string nullable (Valid only if source is table) test-table data profile job id string nullable caeba234-cfde-4fca-9e5b-fe02a9812e38 data profile job configuration json trigger string nullable ondemand / schedule incremental boolean nullable true / false sampling percent float nullable (0-100) 20.0 (indicates 20%) row filter string nullable col1 >= 0 AND col2 column filter json nullable {"include fields":["col1","col2"], "exclude fields":["col3"]} job labels json nullable {"key1":value1} job start time timestamp nullable 2023-01-01 00:00:00 UTC job end time timestamp nullable 2023-01-01 00:00:00 UTC job rows scanned integer nullable 7500 column name string nullable column-1 column type string nullable string column mode string nullable repeated percent null float nullable (0.0-100.0) 20.0 (indicates 20%) percent unique float nullable (0.0-100.0) 92.5 min string length integer nullable (Valid only if column type is string) 10 max string length integer nullable (Valid only if column type is string) 4 average string length float nullable (Valid only if column type is string) 7.2 min value float nullable (Valid only if column type is numeric - integer/float) max value float nullable (Valid only if column type is numeric - integer/float) average value float nullable (Valid only if column type is numeric - integer/float) standard deviation float nullable (Valid only if column type is numeric - integer/float) quartile lower integer nullable (Valid only if column type is numeric - integer/float) quartile median integer nullable (Valid only if column type is numeric - integer/float) quartile upper integer nullable (Valid only if column type is numeric - integer/float) top n struct/record - repeated value string nullable "4009" count integer nullable 20 percent float nullable 10 (indicates 10%) Export table setup When you export to BigQueryExport tables, follow these guidelines: For the field resultsTable , use the format: //bigquery.googleapis.com/projects/{project-id}/datasets/{dataset-id}/tables/{table-id} .
- ListDataScanJobsRequest ; public class SyncListDataScanJobs { public static void main ( String [] args ) throws Exception { syncListDataScanJobs (); } public static void syncListDataScanJobs () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataScanServiceClient dataScanServiceClient = DataScanServiceClient . create ()) { ListDataScanJobsRequest request = ListDataScanJobsRequest . newBuilder () . setParent ( DataScanName . of ( "[PROJECT]" , "[LOCATION]" , "[DATASCAN]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . build (); for ( DataScanJob element : dataScanServiceClient . listDataScanJobs ( request ). iterateAll ()) { // doThingsWith(element); } } } } Python Python Before trying this sample, follow the Python setup instructions in the Knowledge Catalog quickstart using client libraries .
- LocationName ; public class SyncCreateDataScan { public static void main ( String [] args ) throws Exception { syncCreateDataScan (); } public static void syncCreateDataScan () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataScanServiceClient dataScanServiceClient = DataScanServiceClient . create ()) { CreateDataScanRequest request = CreateDataScanRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setDataScan ( DataScan . newBuilder (). build ()) . setDataScanId ( "dataScanId1260787906" ) . setValidateOnly ( true ) . build (); DataScan response = dataScanServiceClient . createDataScanAsync ( request ). get (); } } } Python Python Before trying this sample, follow the Python setup instructions in the Knowledge Catalog quickstart using client libraries .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and manage data profile scans: Create, run, update, and delete data profile scans: dataplex.datascans.create on project dataplex.datascans.update on data scan dataplex.datascans.delete on data scan dataplex.datascans.run on data scan dataplex.datascans.get on data scan dataplex.datascans.list on project dataplex.dataScanJobs.get on data scan job dataplex.dataScanJobs.list on data scan View data profile scan results, jobs, and history: dataplex.datascans.getData on data scan dataplex.datascans.list on project dataplex.dataScanJobs.get on data scan job dataplex.dataScanJobs.list on data scan Publish data profile scan results to Knowledge Catalog: dataplex.entryGroups.useDataProfileAspect on entry group bigquery.tables.update on table dataplex.entries.update on entry View published data profile results for a table in BigQuery or Knowledge Catalog: bigquery.tables.get on table bigquery.tables.getData on table You might also be able to get these permissions with custom roles or other predefined roles .

### Knowledge Catalog release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- March 30, 2026 Feature Automated cataloging of Looker (Google Cloud core) metadata as well as data lineage ingestion from BigQuery sources are now available in preview .
- December 01, 2023 Feature Automated cataloging of Vertex AI models and datasets is generally available ( GA ) in Dataplex.
- December 17, 2023 Feature Automated cataloging of Spanner is generally available ( GA ) in Dataplex.
- October 06, 2023 Feature Automated cataloging of Bigtable is generally available ( GA ) in Dataplex.

### "Manage aspects and enrich metadata \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata](https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This client only needs to be created // once, and can be reused for multiple requests. try ( CatalogServiceClient client = CatalogServiceClient . create ()) { Entry entry = Entry . newBuilder () . setName ( EntryName . of ( projectId , location , entryGroupId , entryId ). toString ()) . setEntrySource ( EntrySource . newBuilder () . setDescription ( "updated description of the entry" ) . build ()) . putAllAspects ( Map . of ( "dataplex-types.global.generic" , Aspect . newBuilder () . setAspectType ( "projects/dataplex-types/locations/global/aspectTypes/generic" ) . setData ( Struct . newBuilder () // "Generic" Aspect Type have fields called "type" and "system. // The values below are a sample of possible options. . putFields ( "type" , Value . newBuilder () . setStringValue ( "updated example value" ) . build ()) . putFields ( "system" , Value . newBuilder () . setStringValue ( "updated example system" ) . build ()) . build ()) . build ())) . build (); // Update mask specifies which fields will be updated. // For more information on update masks, see: https://google.aip.dev/161 FieldMask updateMask = FieldMask . newBuilder (). addPaths ( "aspects" ). addPaths ( "entry source.description" ). build (); return client . updateEntry ( entry , updateMask ); } } } Python Python Before trying this sample, follow the Python setup instructions in the Knowledge Catalog quickstart using client libraries .
- Required roles To get the permissions that you need to create and manage aspect types and aspects, ask your administrator to grant you the following IAM roles on the resource: Full set of permissions on metadata resources in Knowledge Catalog, including aspect types and data aspects: Dataplex Catalog Admin ( roles/dataplex.catalogAdmin ) Create and manage metadata resources in Knowledge Catalog, including aspect types and data aspects: Dataplex Catalog Editor ( roles/dataplex.catalogEditor ) Full set of permissions on custom aspect types (except for permissions to use aspect types to create or edit entries): Dataplex Aspect Type Owner ( roles/dataplex.aspectTypeOwner ) View aspect types and IAM policies associated with them: Dataplex Catalog Viewer ( roles/dataplex.catalogViewer ) Use aspect types to create and modify entries with the corresponding aspects: Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser ) Add aspects of some of the system aspect types, such as schema , schema-join , overview , contacts : Dataplex Entry and EntryLink Owner ( roles/dataplex.entryOwner ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create the payload.json file as follows: { "aspects" : { "dataplex-types.global.data-profile" : { "data" : { "sourceDataInfo" : { "scope" : "ALL" , "scannedRows" : 100 }, "fields" : { "col1" : { "nullness" : 0.0 , "uniqueness" : 0.1 , "string" : { "length" : { "min" : 1 , "max" : 20 , "avg" : 12.54 } } } } } } }} Generic.
- You can iterate over elements, and API calls will be issued to fetch pages as needed. result . each do item Each element is of type ::Google::Cloud::Dataplex::V1::AspectType. p item end end REST To list all the available aspect types, use the aspectTypes.list method.

