---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.042Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable Node.js client library"
feature_slug: "cloud-bigtable-node-js-client-library"
latest_feature_date: "2018-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup"
  - "https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions"
  - "https://docs.cloud.google.com/bigtable/docs/reference/libraries"
keywords:
  - "interacting"
  - "provides"
  - "library"
  - "client"
  - "node"
---

# Cloud Bigtable Node.js client library

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Cloud Bigtable provides a Node.js client library for interacting with the service and it is now generally available; The Cloud Bigtable Node.js client library became available in beta.

## Extended Definition

Cloud Bigtable provides a Node.js client library for interacting with the service and it is now generally available; The Cloud Bigtable Node.js client library became available in beta.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup)
- [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions)
- [https://docs.cloud.google.com/bigtable/docs/reference/libraries](https://docs.cloud.google.com/bigtable/docs/reference/libraries)

## Supporting Pages

### Set up client-side metrics \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup)
- Source ID: `site-docs-reference-2`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Your package.json file should look similar to the following: { "dependencies" : { "@google-cloud/bigtable" : "^6.2.0" } } In your project, reinstall Node.js modules: rm -rf node modules rm package-lock.json npm i Enable client-side metrics in your application Client-side metrics are enabled by default in the Bigtable client library for Node.js as of version 6.4.0.
- Client-side metrics are available for users of the following client libraries: Bigtable client library for C++ Bigtable client library for Java Bigtable HBase client for Java Bigtable client library for Go Bigtable client library for Node.js For an overview, see the Client-side metrics overview .
- OpenTelemetry provides the framework for the client library to create, instrument, and record the metrics, while the Cloud Monitoring library provides the functionality to then export or publish these metrics to Cloud Monitoring.
- INSTANCE ) . build (); Node.js Follow these steps if you use the Bigtable client library for Node.js, which calls the Bigtable APIs.

### Client-side metrics descriptions \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions](https://docs.cloud.google.com/bigtable/docs/client-side-metrics-descriptions)
- Source ID: `site-docs-root-2`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name final operation status streaming operation client name Client library support The following table shows the minimum client library versions required to use the operation latencies metric.
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name attempt status streaming operation client name Client library support The following table shows the minimum client library versions required to use the attempt latencies metric.
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name attempt status streaming operation client name Client library support The following table shows the minimum client library versions required to use the server latencies metric.
- Supported Bigtable operations ReadRow ReadRows MutateRow MutateRows SampleRowKeys CheckAndMutateRow BulkReadRows BulkMutateRows Type Distribution Available dimensions project ID instance ID table cluster zone app profile ID method name attempt status client name Client library support The following table shows the minimum client library versions required to use the connectivity error count metric.

### Bigtable client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/libraries](https://docs.cloud.google.com/bigtable/docs/reference/libraries)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ArgumentDefaultsHelpFormatter ) parser . add argument ( "project id" , help = "Your Cloud Platform project ID." ) parser . add argument ( "instance id" , help = "ID of the Cloud Bigtable instance to connect to." ) parser . add argument ( "--table" , help = "Existing table used in the quickstart." , default = "my-table" ) args = parser . parse args () asyncio . get event loop () . run until complete ( main ( args . project id , args . instance id , args . table ) ) Ruby Import google bigtable client lib require "google/cloud/bigtable" Instantiates a client bigtable = Google :: Cloud :: Bigtable . new Your Cloud Bigtable instance ID instance id = "my-instance" Your Cloud Bigtable table ID table id = "my-table" Get table client table = bigtable . table instance id , table id Read and print row p table . read row "user0000001" Additional resources C++ The following list contains links to more resources related to the client library for C++: API reference Client libraries best practices Issue tracker google-cloud-bigtable on Stack Overflow Source code C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-cloud-bigtable on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-cloud-bigtable on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-cloud-bigtable on Stack Overflow Source code HBase API Reference Documentation (client library) Source Code GitHub Issue Tracker Stack Overflow Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-cloud-bigtable on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-cloud-bigtable on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-cloud-bigtable on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-cloud-bigtable on Stack Overflow Source code Third-party Cloud Bigtable API client libraries Scio The Scio client library provides a Scala API for Dataflow , which can read from and write to Bigtable.
- Bytes ; / A quickstart application that shows connecting to a Cloud Bigtable instance using the native HBase API to read a row from a table. / public class Quickstart { public static void main ( String ... args ) { String projectId = args [ 0 ]; // my-gcp-project-id String instanceId = args [ 1 ]; // my-bigtable-instance-id String tableId = args [ 2 ]; // my-bigtable-table-id // Create a connection to the Cloud Bigtable instance. // Use try-with-resources to make sure the connection is closed correctly try ( Connection connection = BigtableConfiguration . connect ( projectId , instanceId )) { System . out . println ( "--- Connection established with Bigtable Instance ---" ); // Create a connection to the table that already exists // Use try-with-resources to make sure the connection to the table is closed correctly try ( Table table = connection . getTable ( TableName . valueOf ( tableId ))) { // Read a row String rowKey = "r1" ; System . out . printf ( "--- Reading for row-key: %s for provided table: %s ---\n" , rowKey , tableId ); // Retrieve the result Result result = table . get ( new Get ( Bytes . toBytes ( rowKey ))); // Convert row data to string String rowValue = Bytes . toString ( result . value ()); System . out . printf ( "Scanned value for Row r1: %s \n" , rowValue ); System . out . println ( " --- Finished reading row --- " ); } catch ( IOException e ) { // handle exception while connecting to a table throw e ; } } catch ( IOException e ) { System . err . println ( "Exception while running quickstart: " + e . getMessage ()); e . printStackTrace (); } } } Node.js // Imports the Google Cloud client library const { Bigtable } = require ( ' @google-cloud/bigtable ' ); const bigtable = new Bigtable (); async function quickstart () { // Connect to an existing instance:my-bigtable-instance const instance = bigtable . instance ( INSTANCE ID ); // Connect to an existing table:my-table const table = instance . table ( TABLE ID ); // Read a row from my-table using a row key const [ singleRow ] = await table . row ( 'r1' ). get (); // Print the row key and data (column value, labels, timestamp) const rowData = JSON . stringify ( singleRow . data , null , 4 ); console . log ( Row key: ${ singleRow . id } \nData: ${ rowData } ); } quickstart (); PHP use Google\Cloud\Bigtable\BigtableClient; / Uncomment and populate these variables in your code / // $projectId = 'The Google project ID'; // $instanceId = 'The Bigtable instance ID'; // $tableId = 'The Bigtable table ID'; // Connect to an existing table with an existing instance. $dataClient = new BigtableClient([ 'projectId' => $projectId, ]); $table = $dataClient->table($instanceId, $tableId); $key = 'r1'; // Read a row from my-table using a row key $row = $table->readRow($key); $columnFamilyId = 'cf1'; $columnId = 'c1'; // Get the Value from the Row, using the column family id and column id $value = $row[$columnFamilyId][$columnId][0]['value']; printf("Row key: %s\nData: %s\n", $key, $value); Python The Python client library for Bigtable offers two APIs, asyncio and a synchronous API.
- ReadRow ( row key , cbt :: Filter :: FamilyRegex ( column family )); if ( ! result ) throw std :: move ( result ). status (); if ( ! result - > first ) { std :: cout << "Cannot find row " << row key << " in the table: " << table id << " \n " ; return 0 ; } cbt :: Cell const & cell = result - > second . cells (). front (); std :: cout << cell . family name () << ":" << cell . column qualifier () << " @ " << cell . timestamp (). count () << "us \n " << '"' << cell . value () << '"' << " \n " ; return 0 ; } catch ( google :: cloud :: Status const & status ) { std :: cerr << "google::cloud::Status thrown: " << status << " \n " ; return 1 ; } C# using System ; using Google.Cloud.Bigtable.Common.V2 ; // Imports the Google Cloud client library using Google.Cloud.Bigtable.V2 ; namespace GoogleCloudSamples.Bigtable { public class QuickStart { public static int Main ( string [] args ) { // Your Google Cloud Platform project ID const string projectId = "YOUR-PROJECT-ID" ; // The name of the Cloud Bigtable instance const string instanceId = "YOUR-INSTANCE-ID" ; // The name of the Cloud Bigtable table const string tableId = "my-table" ; try { // Creates a Bigtable client BigtableClient bigtableClient = BigtableClient .
- For more information about BOMs, see The Google Cloud Platform Libraries BOM . < dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>libraries - bom < / artifactId > < version>26 .69.0 < / version > < type>pom < / type > < scope>import < / scope > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - bigtable < / artifactId > < / dependency > If you are using Gradle , add the following to your dependencies: implementation platform ( ' com . google . cloud : libraries - bom : 26.79.0 ' ) implementation ' com . google . cloud : google - cloud - bigtable ' If you are using sbt , add the following to your dependencies: libraryDependencies += "com.google.cloud" % "google-cloud-bigtable" % "2.76.0" Note: Cloud Java client libraries do not currently support Android.

