---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.832Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Storage API"
feature_slug: "bigquery-storage-api"
latest_feature_date: "2020-03-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries"
  - "https://docs.cloud.google.com/bigquery/docs/reference/storage/rpc"
  - "https://docs.cloud.google.com/bigquery/docs/reference/storage"
keywords:
  - "CreateReadSession"
  - "StorageRead API"
  - "bqstorage API"
  - "ReadStream"
  - "ReadRows"
  - "storage read session"
  - "Storage Read API"
  - "BigQuery Storage API"
---

# BigQuery Storage API

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The BigQuery Storage API became generally available; The BigQuery Storage API was introduced in beta.

## Extended Definition

The BigQuery Storage API became generally available; The BigQuery Storage API was introduced in beta.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries](https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries)
- [https://docs.cloud.google.com/bigquery/docs/reference/storage/rpc](https://docs.cloud.google.com/bigquery/docs/reference/storage/rpc)
- [https://docs.cloud.google.com/bigquery/docs/reference/storage](https://docs.cloud.google.com/bigquery/docs/reference/storage)

## Supporting Pages

### BigQuery Storage API Client Libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries](https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: The page is directly about installing and using Cloud Client Libraries for the BigQuery Storage API, which provides useful implementation context for that feature but does not define its release status or behavior.

Evidence snippets:
- ReadRows ( session - > streams ( 0 ). name (), kRowOffset ); std :: int64 t num rows = 0 ; for ( auto const & row : read rows ) { if ( row . ok ()) { num rows += row - > row count (); ProcessRowsInAvroFormat ( session - > avro schema (), row - > avro rows ()); } } std :: cout << num rows << " rows read from table: " << table name << " \n " ; return 0 ; } catch ( google :: cloud :: Status const & status ) { std :: cerr << "google::cloud::Status thrown: " << status << " \n " ; return 1 ; } Go // The bigquery storage quickstart application demonstrates usage of the // BigQuery Storage read API.
- String streamName = session . getStreams ( 0 ). getName (); ReadRowsRequest readRowsRequest = ReadRowsRequest . newBuilder (). setReadStream ( streamName ). build (); // Process each block of rows as they arrive and decode using our simple row reader.
- CreateReadSession ( project name , read session , kMaxReadStreams ); if ( ! session ) throw std :: move ( session ). status (); // Read rows from the ReadSession. constexpr int kRowOffset = 0 ; auto read rows = client .
- ReadRowsRequest { ReadStream : st , Offset : offset , }, rpcOpts ) if err != nil { return fmt .

### BigQuery Storage API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/storage/rpc](https://docs.cloud.google.com/bigquery/docs/reference/storage/rpc)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: STRONG
- Re-rank rationale: This page is the official BigQuery Storage API RPC reference and explicitly documents the service and its core BigQueryRead/Write methods.

Evidence snippets:
- SplitReadStream Splits a given read stream into two Streams. google.cloud.bigquery.storage.v1beta2.BigQueryRead Methods CreateReadSession Creates a new read session.
- Service: bigquerystorage.googleapis.com The Service name bigquerystorage.googleapis.com is needed to create RPC client stubs. google.cloud.bigquery.storage.v1.BigQueryRead Methods CreateReadSession Creates a new read session.
- GetWriteStream Gets information about a write stream. google.cloud.bigquery.storage.v1beta1.BigQueryStorage Methods BatchCreateReadSessionStreams Creates additional streams for a ReadSession.
- Home Documentation Data analytics BigQuery Reference Send feedback BigQuery Storage API Stay organized with collections Save and categorize content based on your preferences.

### "Use the BigQuery Storage Read API to read table data \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/storage](https://docs.cloud.google.com/bigquery/docs/reference/storage)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: It references the BigQuery Storage API as a separate service and explains enablement behavior, but provides no lifecycle details such as beta or GA status.

Evidence snippets:
- If you're working in an older version of the Storage Read API, then use the appropriate version of Arrow as follows: v1beta1: Arrow 0.14 and earlier v1: Arrow 0.15 and later Regardless of API version, to access API functions, we recommend that you use the BigQuery Storage API client libraries .
- Enabling the API The Storage Read API is distinct from the BigQuery API, and shows up separately in the Google Cloud console as the BigQuery Storage API .
- To support dynamic work rebalancing, the Storage Read API provides an additional method to split a Stream into two child Stream instances whose contents are, together, equal to the contents of the parent Stream .
- The maximum number of streams, the snapshot time, the set of columns to return, and the predicate filter are all specified as part of the ReadSession message supplied to the CreateReadSession RPC.

