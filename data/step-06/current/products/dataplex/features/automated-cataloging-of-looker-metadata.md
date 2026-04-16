---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.453Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Automated cataloging of Looker metadata"
feature_slug: "automated-cataloging-of-looker-metadata"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/use-data-profiling"
  - "https://docs.cloud.google.com/dataplex/docs/catalog-overview"
  - "https://docs.cloud.google.com/dataplex/docs/import-metadata"
  - "https://docs.cloud.google.com/dataplex/docs/export-metadata"
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
Coverage: MEDIUM

## Step 02 Summary

Dataplex can automatically ingest and catalog metadata from Looker (Google Cloud core).

## Extended Definition

Dataplex can automatically ingest and catalog metadata from Looker (Google Cloud core).

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)
- [https://docs.cloud.google.com/dataplex/docs/import-metadata](https://docs.cloud.google.com/dataplex/docs/import-metadata)
- [https://docs.cloud.google.com/dataplex/docs/export-metadata](https://docs.cloud.google.com/dataplex/docs/export-metadata)

## Supporting Pages

### "Create and use data profile scans \_|\_ Knowledge Catalog \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataplex/docs/use-data-profiling](https://docs.cloud.google.com/dataplex/docs/use-data-profiling)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Export table schema If you want to export the data profile scan results to an existing BigQuery table, make sure that it is compatible with the following table schema: Column name Column data type Sub field name (if applicable) Sub field data type Mode Example data profile scan struct/record resource name string nullable //dataplex.googleapis.com/projects/test-project/locations/europe-west2/datascans/test-datascan project id string nullable test-project location string nullable us-central1 data scan id string nullable test-datascan data source struct/record resource name string nullable Entity case: //dataplex.googleapis.com/projects/test-project/locations/europe-west2/lakes/test-lake/zones/test-zone/entities/test-entity Table case: //bigquery.googleapis.com/projects/test-project/datasets/test-dataset/tables/test-table dataplex entity project id string nullable test-project dataplex entity project number integer nullable 123456789012 dataplex lake id string nullable (Valid only if source is entity) test-lake dataplex zone id string nullable (Valid only if source is entity) test-zone dataplex entity id string nullable (Valid only if source is entity) test-entity table project id string nullable dataplex-table table project number int64 nullable 345678901234 dataset id string nullable (Valid only if source is table) test-dataset table id string nullable (Valid only if source is table) test-table data profile job id string nullable caeba234-cfde-4fca-9e5b-fe02a9812e38 data profile job configuration json trigger string nullable ondemand / schedule incremental boolean nullable true / false sampling percent float nullable (0-100) 20.0 (indicates 20%) row filter string nullable col1 >= 0 AND col2 column filter json nullable {"include fields":["col1","col2"], "exclude fields":["col3"]} job labels json nullable {"key1":value1} job start time timestamp nullable 2023-01-01 00:00:00 UTC job end time timestamp nullable 2023-01-01 00:00:00 UTC job rows scanned integer nullable 7500 column name string nullable column-1 column type string nullable string column mode string nullable repeated percent null float nullable (0.0-100.0) 20.0 (indicates 20%) percent unique float nullable (0.0-100.0) 92.5 min string length integer nullable (Valid only if column type is string) 10 max string length integer nullable (Valid only if column type is string) 4 average string length float nullable (Valid only if column type is string) 7.2 min value float nullable (Valid only if column type is numeric - integer/float) max value float nullable (Valid only if column type is numeric - integer/float) average value float nullable (Valid only if column type is numeric - integer/float) standard deviation float nullable (Valid only if column type is numeric - integer/float) quartile lower integer nullable (Valid only if column type is numeric - integer/float) quartile median integer nullable (Valid only if column type is numeric - integer/float) quartile upper integer nullable (Valid only if column type is numeric - integer/float) top n struct/record - repeated value string nullable "4009" count integer nullable 20 percent float nullable 10 (indicates 10%) Export table setup When you export to BigQueryExport tables, follow these guidelines: For the field resultsTable , use the format: //bigquery.googleapis.com/projects/{project-id}/datasets/{dataset-id}/tables/{table-id} .
- ListDataScanJobsRequest ; public class SyncListDataScanJobs { public static void main ( String [] args ) throws Exception { syncListDataScanJobs (); } public static void syncListDataScanJobs () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataScanServiceClient dataScanServiceClient = DataScanServiceClient . create ()) { ListDataScanJobsRequest request = ListDataScanJobsRequest . newBuilder () . setParent ( DataScanName . of ( "[PROJECT]" , "[LOCATION]" , "[DATASCAN]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . setFilter ( "filter-1274492040" ) . build (); for ( DataScanJob element : dataScanServiceClient . listDataScanJobs ( request ). iterateAll ()) { // doThingsWith(element); } } } } Python Python Before trying this sample, follow the Python setup instructions in the Knowledge Catalog quickstart using client libraries .
- LocationName ; public class SyncCreateDataScan { public static void main ( String [] args ) throws Exception { syncCreateDataScan (); } public static void syncCreateDataScan () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataScanServiceClient dataScanServiceClient = DataScanServiceClient . create ()) { CreateDataScanRequest request = CreateDataScanRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setDataScan ( DataScan . newBuilder (). build ()) . setDataScanId ( "dataScanId1260787906" ) . setValidateOnly ( true ) . build (); DataScan response = dataScanServiceClient . createDataScanAsync ( request ). get (); } } } Python Python Before trying this sample, follow the Python setup instructions in the Knowledge Catalog quickstart using client libraries .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and manage data profile scans: Create, run, update, and delete data profile scans: dataplex.datascans.create on project dataplex.datascans.update on data scan dataplex.datascans.delete on data scan dataplex.datascans.run on data scan dataplex.datascans.get on data scan dataplex.datascans.list on project dataplex.dataScanJobs.get on data scan job dataplex.dataScanJobs.list on data scan View data profile scan results, jobs, and history: dataplex.datascans.getData on data scan dataplex.datascans.list on project dataplex.dataScanJobs.get on data scan job dataplex.dataScanJobs.list on data scan Publish data profile scan results to Knowledge Catalog: dataplex.entryGroups.useDataProfileAspect on entry group bigquery.tables.update on table dataplex.entries.update on entry View published data profile results for a table in BigQuery or Knowledge Catalog: bigquery.tables.get on table bigquery.tables.getData on table You might also be able to get these permissions with custom roles or other predefined roles .

### About metadata management in Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/catalog-overview](https://docs.cloud.google.com/dataplex/docs/catalog-overview)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Supported sources Automatic discovery of Cloud Storage data Metadata from the following Google Cloud sources is automatically ingested into Knowledge Catalog: BigQuery sharing (formerly Analytics Hub) exchanges and listings BigQuery datasets, tables, views, models, routines, connections, and linked datasets Bigtable instances, clusters, and tables (including column family details) Dataform repositories and code assets Dataproc Metastore services, databases, and tables Looker (Google Cloud core) instances, dashboards, dashboard elements, Looks, LookML projects, models, Explores, and views ( Preview ) Pub/Sub topics Spanner instances, databases, tables, and views Vertex AI models, datasets, feature groups, feature views, and online store instances If Knowledge Catalog integration is enabled, then metadata from the following Google Cloud sources is automatically ingested into Knowledge Catalog: AlloyDB for PostgreSQL clusters, instances, databases, schemas, tables, views—see Enable the AlloyDB for PostgreSQL integration ( Preview ) Cloud SQL instances, databases, schemas, tables, views—see Enable the Cloud SQL integration To import metadata from a third-party source into Knowledge Catalog, you can use a managed connectivity pipeline.
- Data Catalog API method Dataplex API method projects.locations.entryGroups.entries.create (REST) CreateEntry (RPC) projects.locations.entryGroups.entries.create (REST) CreateEntry (RPC) projects.locations.entryGroups.entries.get (REST) GetEntry (RPC) projects.locations.entryGroups.entries.get (REST) GetEntry (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC) Note: You can also use the projects.locations.modifyEntry (REST) and ModifyEntry (RPC) methods to update system entries using source-system permissions instead of Knowledge Catalog permissions. projects.locations.entryGroups.entries.delete (REST) DeleteEntry (RPC) projects.locations.entryGroups.entries.delete (REST) DeleteEntry (RPC) projects.locations.entryGroups.entries.list (REST) ListEntries (RPC) projects.locations.entryGroups.entries.list (REST) ListEntries (RPC) entries.lookup (REST) LookupEntry (RPC) projects.locations.lookupEntry (REST) LookupEntry (RPC) Note: To use the projects.locations.lookupEntry (REST) and LookupEntry (RPC) methods, you must provide the Knowledge Catalog entry name.
- Data Catalog API method Dataplex API method projects.locations.tagTemplates.create (REST) CreateTagTemplate (RPC) projects.locations.aspectTypes.create (REST) CreateAspectType (RPC) projects.locations.tagTemplates.get (REST) GetTagTemplate (RPC) projects.locations.aspectTypes.get (REST) GetAspectType (RPC) projects.locations.tagTemplates.patch (REST) UpdateTagTemplate (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) projects.locations.tagTemplates.delete (REST) DeleteTagTemplate (RPC) projects.locations.aspectTypes.delete (REST) DeleteAspectType (RPC) catalog.search (REST) with type=tag template predicate SearchCatalog (RPC) with type=tag template predicate projects.locations.aspectTypes.list (REST) ListAspectTypes (RPC) Tag template fields Tag template fields correspond to the contents of the metadata template field in an aspect type.
- Data Catalog API method Dataplex API method projects.locations.tagTemplates.fields.create (REST) CreateTagTemplateField (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) projects.locations.tagTemplates.fields.patch (REST) UpdateTagTemplateField (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) projects.locations.tagTemplates.fields.rename (REST) RenameTagTemplateField (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) projects.locations.tagTemplates.fields.delete (REST) DeleteTagTemplateField (RPC) projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC) Tag template field enum values Similar to tag template fields, you can edit enum values in the Dataplex API by modifying the metadata template field in the corresponding aspect type.

### "Import metadata using a custom pipeline \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/import-metadata](https://docs.cloud.google.com/dataplex/docs/import-metadata)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Empty ; public class SyncCancelMetadataJob { public static void main ( String [] args ) throws Exception { syncCancelMetadataJob (); } public static void syncCancelMetadataJob () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) { CancelMetadataJobRequest request = CancelMetadataJobRequest . newBuilder () . setName ( MetadataJobName . of ( "[PROJECT]" , "[LOCATION]" , "[METADATAJOB]" ). toString ()) . build (); catalogServiceClient . cancelMetadataJob ( request ); } } } Python Python Before trying this sample, follow the Python setup instructions in the Knowledge Catalog quickstart using client libraries .
- HTTP method and URL: POST https://dataplex.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION ID /metadataJobs?metadataJobId= METADATA JOB ID Request JSON body: { "type": "IMPORT", "import spec": { "source storage uri": "gs:// CLOUD STORAGE URI /", "scope": { "entryGroups": [ " ENTRY GROUP " ], "entry types": [ " ENTRY TYPE " ], "aspect types": [ " ASPECT TYPE " ] }, "entry sync mode": " ENTRY SYNC MODE ", "aspect sync mode": "INCREMENTAL", "log level": " LOG LEVEL " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For more information, see Set up authentication for a local development environment . using Google.Cloud.Dataplex.V1 ; public sealed partial class GeneratedCatalogServiceClientSnippets { /// <summary>Snippet for CancelMetadataJob</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void CancelMetadataJobRequestObject () { // Create client CatalogServiceClient catalogServiceClient = CatalogServiceClient .
- To set request fields, pass in keyword arguments. request = Google :: Cloud :: Dataplex :: V1 :: CancelMetadataJobRequest . new Call the cancel metadata job method. result = client . cancel metadata job request The returned object is of type Google::Protobuf::Empty. p result end REST To cancel a metadata job, use the metadataJobs.cancel method .

### Export metadata \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/export-metadata](https://docs.cloud.google.com/dataplex/docs/export-metadata)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method and URL: POST https://dataplex.googleapis.com/v1/projects/ JOB PROJECT /locations/ LOCATION ID /metadataJobs?metadataJobId= METADATA JOB ID Request JSON body: { "type": "EXPORT", "export spec": { "output path": "gs:// BUCKET /", "scope": { "organizationLevel": true, "entry types": [ " ENTRY TYPE ", Additional entry types ], "aspect types": [ " ASPECT TYPE ", Additional aspect types ] }, } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://dataplex.googleapis.com/v1/projects/ JOB PROJECT /locations/ LOCATION ID /metadataJobs?metadataJobId= METADATA JOB ID Request JSON body: { "type": "EXPORT", "export spec": { "output path": "gs:// BUCKET /", "scope": { "projects": [ "projects/ METADATA SOURCE PROJECT ", Additional projects ], }, } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://dataplex.googleapis.com/v1/projects/ JOB PROJECT /locations/ LOCATION ID /metadataJobs?metadataJobId= METADATA JOB ID Request JSON body: { "type": "EXPORT", "export spec": { "output path": "gs:// BUCKET /", "scope": { "entryGroups": [ " ENTRY GROUP ", Additional entry groups ], }, } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://dataplex.googleapis.com/v1/projects/ JOB PROJECT /locations/ LOCATION ID /metadataJobs?metadataJobId= METADATA JOB ID Request JSON body: { "type": "EXPORT", "export spec": { "output path": "gs:// BUCKET /", "scope": { "organizationLevel": true, }, } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

