---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.891Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "1000 Cannabis Genomes Project public dataset"
feature_slug: "1000-cannabis-genomes-project-public-dataset"
latest_feature_date: "2017-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/managing-datasets"
  - "https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart"
keywords:
  - "1000"
  - "cannabis"
  - "genomes"
  - "project"
  - "public"
  - "dataset"
  - "bigquery"
  - "datasets"
---

# 1000 Cannabis Genomes Project public dataset

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery public datasets program includes the 1000 Cannabis Genomes Project dataset.

## Extended Definition

The BigQuery public datasets program includes the 1000 Cannabis Genomes Project dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- [https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial](https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart)

## Supporting Pages

### Manage datasets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/managing-datasets](https://docs.cloud.google.com/bigquery/docs/managing-datasets)
- Source ID: `site-docs-reference-required-11`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to copy dataset from another gcp project public class CopyDataset { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String destinationProjectId = "MY DESTINATION PROJECT ID" ; final String destinationDatasetId = "MY DESTINATION DATASET ID" ; final String sourceProjectId = "MY SOURCE PROJECT ID" ; final String sourceDatasetId = "MY SOURCE DATASET ID" ; Map<String , Value > params = new HashMap <> (); params . put ( "source project id" , Value . newBuilder (). setStringValue ( sourceProjectId ). build ()); params . put ( "source dataset id" , Value . newBuilder (). setStringValue ( sourceDatasetId ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( destinationDatasetId ) . setDisplayName ( "Your Dataset Copy Name" ) . setDataSourceId ( "cross region copy" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); copyDataset ( destinationProjectId , transferConfig ); } public static void copyDataset ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient dataTransferServiceClient = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = dataTransferServiceClient . createTransferConfig ( request ); System . out . println ( "Copy dataset created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Copy dataset was not created." + ex . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to copy datasets: bigquery.transfers.update on the destination project bigquery.jobs.create on the destination project bigquery.datasets.get on the source and destination dataset bigquery.tables.list on the source and destination dataset bigquery.datasets.update on the destination dataset bigquery.tables.create on the destination dataset You might also be able to get these permissions with custom roles or other predefined roles .
- To copy a dataset to a project in another VPC Service Controls service perimeter , you need to set the following egress rules: In the destination project's VPC Service Controls service perimeter configuration, the IAM principal must have the following methods: bigquery.datasets.get bigquery.tables.list bigquery.tables.get , bigquery.tables.getData In the source project's VPC Service Controls service perimeter configuration, the IAM principal being used must have the method set to All Methods .
- To get the permissions that you need to copy datasets, ask your administrator to grant you the following IAM roles: BigQuery Admin ( roles/bigquery.admin ) - the destination project BigQuery Data Viewer ( roles/bigquery.dataViewer ) - the source dataset BigQuery Data Editor ( roles/bigquery.dataEditor ) - the destination dataset For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Create a k-means model to cluster London bicycle hires dataset \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial](https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to BigQuery In the left pane, click explore Explorer : In the Explorer pane, expand your project and click Datasets .
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.london station clusters OPTIONS ( model type = 'kmeans' , num clusters = 4 ) AS WITH hs AS ( SELECT h . start station name AS station name , IF ( EXTRACT ( DAYOFWEEK FROM h . start date ) = 1 OR EXTRACT ( DAYOFWEEK FROM h . start date ) = 7 , 'weekend' , 'weekday' ) AS isweekday , h . duration , ST DISTANCE ( ST GEOGPOINT ( s . longitude , s . latitude ), ST GEOGPOINT ( - 0.1 , 51.5 )) / 1000 AS distance from city center FROM bigquery-public-data.london bicycles.cycle hire AS h JOIN bigquery-public-data.london bicycles.cycle stations AS s ON h . start station id = s . id WHERE h . start date BETWEEN CAST ( '2015-01-01 00:00:00' AS TIMESTAMP ) AND CAST ( '2016-01-01 00:00:00' AS TIMESTAMP ) ), stationstats AS ( SELECT station name , isweekday , AVG ( duration ) AS duration , COUNT ( duration ) AS num trips , MAX ( distance from city center ) AS distance from city center FROM hs GROUP BY station name , isweekday ) SELECT EXCEPT ( station name , isweekday ) FROM stationstats ; BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Go to BigQuery In the query editor, paste in the following query and click Run : WITH hs AS ( SELECT h . start station name AS station name , IF ( EXTRACT ( DAYOFWEEK FROM h . start date ) = 1 OR EXTRACT ( DAYOFWEEK FROM h . start date ) = 7 , 'weekend' , 'weekday' ) AS isweekday , h . duration , ST DISTANCE ( ST GEOGPOINT ( s . longitude , s . latitude ), ST GEOGPOINT ( - 0.1 , 51.5 )) / 1000 AS distance from city center FROM bigquery-public-data.london bicycles.cycle hire AS h JOIN bigquery-public-data.london bicycles.cycle stations AS s ON h . start station id = s . id WHERE h . start date BETWEEN CAST ( '2015-01-01 00:00:00' AS TIMESTAMP ) AND CAST ( '2016-01-01 00:00:00' AS TIMESTAMP ) ), stationstats AS ( SELECT station name , isweekday , AVG ( duration ) AS duration , COUNT ( duration ) AS num trips , MAX ( distance from city center ) AS distance from city center FROM hs GROUP BY station name , isweekday ) SELECT FROM stationstats ORDER BY distance from city center ASC ; The results should look similar to the following: BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Go to BigQuery In the query editor, paste in the following query and click Run : WITH hs AS ( SELECT h . start station name AS station name , IF ( EXTRACT ( DAYOFWEEK FROM h . start date ) = 1 OR EXTRACT ( DAYOFWEEK FROM h . start date ) = 7 , 'weekend' , 'weekday' ) AS isweekday , h . duration , ST DISTANCE ( ST GEOGPOINT ( s . longitude , s . latitude ), ST GEOGPOINT ( - 0.1 , 51.5 )) / 1000 AS distance from city center FROM bigquery-public-data.london bicycles.cycle hire AS h JOIN bigquery-public-data.london bicycles.cycle stations AS s ON h . start station id = s . id WHERE h . start date BETWEEN CAST ( '2015-01-01 00:00:00' AS TIMESTAMP ) AND CAST ( '2016-01-01 00:00:00' AS TIMESTAMP ) ), stationstats AS ( SELECT station name , isweekday , AVG ( duration ) AS duration , COUNT ( duration ) AS num trips , MAX ( distance from city center ) AS distance from city center FROM hs GROUP BY station name , isweekday ) SELECT EXCEPT ( nearest centroids distance ) FROM ML .

### "Download table data in the Avro data format \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerystorage-quickstart)
- Source ID: `site-docs-reference-required-15`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Includes the autoloader for libraries installed with composer require DIR . '/vendor/autoload.php'; use Google\Cloud\BigQuery\Storage\V1\Client\BigQueryReadClient; use Google\Cloud\BigQuery\Storage\V1\CreateReadSessionRequest; use Google\Cloud\BigQuery\Storage\V1\DataFormat; use Google\Cloud\BigQuery\Storage\V1\ReadRowsRequest; use Google\Cloud\BigQuery\Storage\V1\ReadSession; use Google\Cloud\BigQuery\Storage\V1\ReadSession\TableModifiers; use Google\Cloud\BigQuery\Storage\V1\ReadSession\TableReadOptions; use Google\Protobuf\Timestamp; // Instantiates the client and sets the project $client = new BigQueryReadClient(); $project = $client->projectName('YOUR PROJECT ID'); $snapshotMillis = 'YOUR SNAPSHOT MILLIS'; // This example reads baby name data from the below public dataset. $table = $client->tableName( 'bigquery-public-data', 'usa names', 'usa 1910 current' ); // This API can also deliver data serialized in Apache Arrow format. // This example leverages Apache Avro. $readSession = new ReadSession(); $readSession->setTable($table)->setDataFormat(DataFormat::AVRO); // We limit the output columns to a subset of those allowed in the table, // and set a simple filter to only report names from the state of // Washington (WA). $readOptions = new TableReadOptions(); $readOptions->setSelectedFields(['name', 'number', 'state']); $readOptions->setRowRestriction('state = "WA"'); $readSession->setReadOptions($readOptions); // With snapshot millis if present if (!empty($snapshotMillis)) { $timestamp = new Timestamp(); $timestamp->setSeconds($snapshotMillis / 1000); $timestamp->setNanos((int) ($snapshotMillis % 1000) 1000000); $tableModifier = new TableModifiers(); $tableModifier->setSnapshotTime($timestamp); $readSession->setTableModifiers($tableModifier); } try { $createReadSessionRequest = (new CreateReadSessionRequest()) ->setParent($project) ->setReadSession($readSession) ->setMaxStreamCount(1); $session = $client->createReadSession($createReadSessionRequest); $readRowsRequest = (new ReadRowsRequest()) ->setReadStream($session->getStreams()[0]->getName()); $stream = $client->readRows($readRowsRequest); // Do any local processing by iterating over the responses.
- Timestamp ; import java.io.IOException ; import org.apache.avro.Schema ; import org.apache.avro.generic.GenericDatumReader ; import org.apache.avro.generic.GenericRecord ; import org.apache.avro.io.BinaryDecoder ; import org.apache.avro.io.DatumReader ; import org.apache.avro.io.DecoderFactory ; public class StorageSample { / SimpleRowReader handles deserialization of the Avro-encoded row blocks transmitted from the storage API using a generic datum decoder. / private static class SimpleRowReader { private final DatumReader<GenericRecord> datumReader ; // Decoder object will be reused to avoid re-allocation and too much garbage collection. private BinaryDecoder decoder = null ; // GenericRecord object will be reused. private GenericRecord row = null ; public SimpleRowReader ( Schema schema ) { Preconditions . checkNotNull ( schema ); datumReader = new GenericDatumReader <> ( schema ); } / Sample method for processing AVRO rows which only validates decoding. @param avroRows object returned from the ReadRowsResponse. / public void processRows ( AvroRows avroRows ) throws IOException { decoder = DecoderFactory . get () . binaryDecoder ( avroRows . getSerializedBinaryRows (). toByteArray (), decoder ); while ( ! decoder . isEnd ()) { // Reusing object row row = datumReader . read ( row , decoder ); System . out . println ( row . toString ()); } } } public static void main ( String ... args ) throws Exception { // Sets your Google Cloud Platform project ID. // String projectId = "YOUR PROJECT ID"; String projectId = args [ 0 ] ; Integer snapshotMillis = null ; if ( args . length > 1 ) { snapshotMillis = Integer . parseInt ( args [ 1 ] ); } try ( BigQueryReadClient client = BigQueryReadClient . create ()) { String parent = String . format ( "projects/%s" , projectId ); // This example uses baby name data from the public datasets.
- The read session is created in this project. // This project can be different from that which contains the table. const myProjectId = await client . getProjectId (); // This example reads baby name data from the public datasets. const projectId = 'bigquery-public-data' ; const datasetId = 'usa names' ; const tableId = 'usa 1910 current' ; const tableReference = projects/ ${ projectId } /datasets/ ${ datasetId } /tables/ ${ tableId } ; const parent = projects/ ${ myProjectId } ; / We limit the output columns to a subset of those allowed in the table, and set a simple filter to only report names from the state of Washington (WA). / const readOptions = { selectedFields : [ 'name' , 'number' , 'state' ], rowRestriction : 'state = "WA"' , }; let tableModifiers = null ; const snapshotSeconds = 0 ; // Set a snapshot time if it's been specified. if ( snapshotSeconds > 0 ) { tableModifiers = { snapshotTime : { seconds : snapshotSeconds }}; } // API request. const request = { parent , readSession : { table : tableReference , // This API can also deliver data serialized in Apache Arrow format. // This example leverages Apache Avro. dataFormat : 'AVRO' , readOptions , tableModifiers , }, }; const [ session ] = await client . createReadSession ( request ); const schema = JSON . parse ( session . avroSchema . schema ); const avroType = avro .
- This project can be different from that which contains the table. client = BigQueryReadClient () This example reads baby name data from the public datasets. table = "projects/ {} /datasets/ {} /tables/ {} " . format ( "bigquery-public-data" , "usa names" , "usa 1910 current" ) requested session = types .

