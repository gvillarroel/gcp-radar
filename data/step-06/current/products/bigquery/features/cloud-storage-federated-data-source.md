---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.922Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cloud Storage federated data source"
feature_slug: "cloud-storage-federated-data-source"
latest_feature_date: "2015-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries"
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/bqms-manage-resources"
keywords:
  - "storage"
  - "federated"
  - "source"
  - "sources"
  - "let"
  - "bigquery"
  - "query"
  - "csv"
---

# Cloud Storage federated data source

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Cloud Storage federated data sources let BigQuery query CSV and JSON data directly from Google Cloud Storage.

## Extended Definition

Cloud Storage federated data sources let BigQuery query CSV and JSON data directly from Google Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries](https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries)
- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/bqms-manage-resources](https://docs.cloud.google.com/bigquery/docs/bqms-manage-resources)

## Supporting Pages

### BigQuery Storage API Client Libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries](https://docs.cloud.google.com/bigquery/docs/reference/storage/libraries)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See https://github.com/googleapis/python-bigquery-storage/pull/687 try : for row in rows : names . add ( row [ "name" ]) states . add ( row [ "state" ]) except EOFError : pass print ( "Got {} unique names in states: {} " . format ( len ( names ), ", " . join ( states ))) Additional resources C++ The following list contains links to more resources related to the client library for C++: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-bigquery on Stack Overflow Source code What's next?
- C++ #include "google/cloud/bigquery/storage/v1/bigquery read client.h" #include <iostream> namespace { void ProcessRowsInAvroFormat ( :: google :: cloud :: bigquery :: storage :: v1 :: AvroSchema const & , :: google :: cloud :: bigquery :: storage :: v1 :: AvroRows const & ) { // Code to deserialize avro rows should be added here. } } // namespace int main ( int argc , char argv []) try { if ( argc != 3 ) { std :: cerr << "Usage: " << argv [ 0 ] << " <project-id> <table-name> \n " ; return 1 ; } // project name should be in the format "projects/<your-gcp-project>" std :: string const project name = "projects/" + std :: string ( argv [ 1 ]); // table name should be in the format: // "projects/<project-table-resides-in>/datasets/<dataset-table resides-in>/tables/<table // name>" The project values in project name and table name do not have to be // identical. std :: string const table name = argv [ 2 ]; // Create a namespace alias to make the code easier to read. namespace bigquery storage = :: google :: cloud :: bigquery storage v1 ; constexpr int kMaxReadStreams = 1 ; // Create the ReadSession. auto client = bigquery storage :: BigQueryReadClient ( bigquery storage :: MakeBigQueryReadConnection ()); :: google :: cloud :: bigquery :: storage :: v1 :: ReadSession read session ; read session . set data format ( google :: cloud :: bigquery :: storage :: v1 :: DataFormat :: AVRO ); read session . set table ( table name ); auto session = client .
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . < dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>libraries - bom < / artifactId > < version>26 .70.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < dependency > < groupId>io . opentelemetry < / groupId > < artifactId>opentelemetry - bom < / artifactId > < version>1 .52.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - bigquerystorage < / artifactId > < / dependency > If you are using Gradle , add the following to your dependencies: implementation platform ( ' com . google . cloud : libraries - bom : 26.74.0 ' ) implementation ' com . google . cloud : google - cloud - bigquerystorage ' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-bigquerystorage" % "3.21.0" If you're using Visual Studio Code or IntelliJ, you can add client libraries to your project using the following IDE plugins: Cloud Code for VS Code Cloud Code for IntelliJ The plugins provide additional functionality, such as key management for service accounts.
- It demonstrates API features such as column // projection (limiting the output to a subset of a table's columns), // column filtering (using simple predicates to filter records on the server // side), establishing the snapshot time (reading data from the table at a // specific point in time), decoding Avro row blocks using the third party // "github.com/linkedin/goavro" library, and decoding Arrow row blocks using // the third party "github.com/apache/arrow/go" library. package main import ( "bytes" "context" "encoding/json" "flag" "fmt" "io" "log" "sort" "strings" "sync" "time" bqStorage "cloud.google.com/go/bigquery/storage/apiv1" "cloud.google.com/go/bigquery/storage/apiv1/storagepb" "github.com/apache/arrow/go/v10/arrow" "github.com/apache/arrow/go/v10/arrow/ipc" "github.com/apache/arrow/go/v10/arrow/memory" gax "github.com/googleapis/gax-go/v2" goavro "github.com/linkedin/goavro/v2" "google.golang.org/genproto/googleapis/rpc/errdetails" "google.golang.org/grpc" "google.golang.org/grpc/codes" "google.golang.org/grpc/status" "google.golang.org/protobuf/types/known/timestamppb" ) // rpcOpts is used to configure the underlying gRPC client to accept large // messages.

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to modify IAM policies for resources: To get a dataset's access policy: bigquery.datasets.get To set a dataset's access policy: bigquery.datasets.update To get a dataset's access policy (Google Cloud console only): bigquery.datasets.getIamPolicy To set a dataset's access policy (console only): bigquery.datasets.setIamPolicy To get a table or view's policy: bigquery.tables.getIamPolicy To set a table or view's policy: bigquery.tables.setIamPolicy To get a routine's access policy: bigquery.routines.getIamPolicy To set a routine's access policy: bigquery.routines.setIamPolicy To create bq tool or SQL BigQuery jobs (optional): bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- See the BigQuery client library documentation for more details on update dataset: https://cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client#google cloud bigquery client Client update dataset try : Update just the access entries property of the dataset. dataset = client . update dataset ( dataset , [ "access entries" ], ) Notify user that the API call was successful. full dataset id = f " { dataset . project } . { dataset . dataset id } " print ( f "Revoked dataset access for ' { entity id } ' to ' dataset ' { full dataset id } .'" ) except PreconditionFailed : # A read-modify-write error. print ( f "Dataset ' { dataset . dataset id } ' was modified remotely before this update. " "Fetch the latest version and retry." ) Work with table and view access controls Views are treated as table resources in BigQuery.
- This capability implies that the authorized resources have the following permissions: bigquery.tables.get bigquery.tables.list bigquery.tables.getData bigquery.tables.updateData bigquery.tables.create bigquery.tables.delete bigquery.routines.get bigquery.routines.list bigquery.datasets.get bigquery.models.getData bigquery.models.getMetadata To deny access to these authorized resources, add one of the following values to the deniedPrincipal field when you create the deny policy: Value Use case principalSet://goog/public:all Blocks all principals including authorized resources. principalSet://bigquery.googleapis.com/projects/ PROJECT NUMBER / Blocks all BigQuery authorized resources in the specified project.
- Find more details about Policy and Binding objects here: https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Policy https://cloud.google.com/security-command-center/docs/reference/rest/Shared.Types/Binding binding = { "role" : role , "members" : [ principal id , ], } policy . bindings . append ( binding ) Set the IAM access policy with updated bindings. updated policy = client . set iam policy ( full resource name , policy ) Show a success message. print ( f "Role ' { role } ' granted for principal ' { principal id } '" f " on resource ' { full resource name } '." ) Predefined roles that grant access to tables and views Views are treated as table resources in BigQuery.

### Create and manage resources in BigLake metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bqms-manage-resources](https://docs.cloud.google.com/bigquery/docs/bqms-manage-resources)
- Source ID: `site-docs-reference-5`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the APIs Required roles To get the permissions that you need to manage Iceberg resources in BigLake metastore, ask your administrator to grant you the following IAM roles on your project: BigQuery Data Editor ( roles/bigquery.dataEditor ) Storage Object User ( roles/storage.objectUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- NAMESPACE ; Replace the following: SPARK CATALOG : the name of your Spark catalog NAMESPACE : the name of your new namespace Terraform provider "google" { project = " PROJECT ID " } resource "google bigquery dataset" "default" { dataset id = " DATASET ID " location = " LOCATION " external catalog dataset options { default storage location uri = " URI " parameters = { ... } } } Replace the following: PROJECT ID : the ID of the project that contains your target dataset DATASET ID : the ID of your target dataset LOCATION : the BigQuery location that you want to create the dataset in URI : the Cloud Storage URI for all tables in the dataset Create Iceberg tables Select one of the following options: API Use the tables.insert method , and specify the ExternalCatalogTableOptions field in the table resource that you pass in. { "tableReference" : { "projectId" : " PROJECT ID " , "datasetId" : " DATASET ID " , "tableId" : " TABLE ID " }, "externalCatalogTableOptions" : { "parameters" : { "table type" : "iceberg" , "metadata location" : " METADATA URI " }, "connection id" : " CONNECTION ID " } } Replace the following: PROJECT ID : the ID of the project that contains your target table.
- TABLE ( id bigint , data string ) USING iceberg ; Replace the following: SPARK CATALOG : the name of your Spark catalog NAMESPACE : the name of your namespace TABLE : the name of your new table Terraform resource "google bigquery table" "default" { deletion protection = false dataset id = google bigquery dataset.default.dataset id table id = " TABLE " external catalog table options { storage descriptor { location uri = " STORAGE URI " input format = "org.apache.hadoop.mapred.FileInputFormat" output format = "org.apache.hadoop.mapred.FileOutputFormat" } parameters = { "table type" = "iceberg" "metadata location" = " METADATA URI " "write.parquet.compression-codec" : "zstd" "EXTERNAL" : "TRUE" } } } Replace the following: TABLE : the name of the target table.
- Create namespaces Select one of the following options: API Use the datasets.insert method , and specify the ExternalCatalogDatasetOptions field in the dataset resource that you pass in. { "datasetReference": { "projectId": " PROJECT ID ", "datasetId": " DATASET ID " }, "externalCatalogDatasetOptions": { "defaultStorageLocationUri": " URI ", "parameters": { ... } }, "location": " LOCATION " } Replace the following: PROJECT ID : the ID of the project that contains your target dataset DATASET ID : the ID of your target dataset URI : the Cloud Storage URI for all tables in the dataset LOCATION : the BigQuery location that you want to create the dataset in Spark SQL CREATE NAMESPACE SPARK CATALOG .

