---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.995Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable Python asynchronous client API"
feature_slug: "bigtable-python-asynchronous-client-api"
latest_feature_date: "2024-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/reference/libraries"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient"
keywords:
  - "asynchronous"
  - "python"
  - "includes"
  - "applications"
  - "library"
  - "client"
---

# Bigtable Python asynchronous client API

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

The Bigtable Python client library now includes an asynchronous API for asynchronous applications.

## Extended Definition

The Bigtable Python client library now includes an asynchronous API for asynchronous applications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/reference/libraries](https://docs.cloud.google.com/bigtable/docs/reference/libraries)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)

## Supporting Pages

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample restore table(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = await client.restore table(request=request) print("Waiting for operation to complete...") response = await operation.result() Handle the response print(response) Handle LRO2 optimize operation = await operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = await optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 async def sample wait for consistency(): Create a client client = admin v2.BigtableTableAdminAsyncClient() Initialize request argument(s) request = admin v2.WaitForConsistencyRequest( name="name value", ) Make the request print("Waiting for operation to complete...") response = await client.wait for replication(request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.overlay.types.WaitForConsistencyRequest , dict] The request object. name str Required.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 from google.iam.v1 import iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = bigtable admin v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 from google.iam.v1 import iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = bigtable admin v2.

### "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- Source ID: `site-python-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 def sample restore table(): Create a client client = admin v2.BigtableTableAdminClient() Initialize request argument(s) request = admin v2.RestoreTableRequest( backup="backup value", parent="parent value", table id="table id value", ) Make the request operation = client.restore table(request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Handle LRO2 optimize operation = operation.optimize restore table operation() if optimize operation: print("Waiting for table optimization to complete...") response = optimize operation.result() Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.RestoreTableRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud.bigtable import admin v2 def sample wait for consistency(): Create a client client = admin v2.BigtableTableAdminClient() Initialize request argument(s) request = admin v2.WaitForConsistencyRequest( name="name value", ) Make the request print("Waiting for operation to complete...") response = client.wait for replication(request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.overlay.types.WaitForConsistencyRequest , dict] The request object. name str Required.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 from google.iam.v1 import iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = bigtable admin v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 from google.iam.v1 import iam policy pb2 # type: ignore def sample get iam policy(): Create a client client = bigtable admin v2.

### Bigtable client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/libraries](https://docs.cloud.google.com/bigtable/docs/reference/libraries)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Bytes ; / A quickstart application that shows connecting to a Cloud Bigtable instance using the native HBase API to read a row from a table. / public class Quickstart { public static void main ( String ... args ) { String projectId = args [ 0 ]; // my-gcp-project-id String instanceId = args [ 1 ]; // my-bigtable-instance-id String tableId = args [ 2 ]; // my-bigtable-table-id // Create a connection to the Cloud Bigtable instance. // Use try-with-resources to make sure the connection is closed correctly try ( Connection connection = BigtableConfiguration . connect ( projectId , instanceId )) { System . out . println ( "--- Connection established with Bigtable Instance ---" ); // Create a connection to the table that already exists // Use try-with-resources to make sure the connection to the table is closed correctly try ( Table table = connection . getTable ( TableName . valueOf ( tableId ))) { // Read a row String rowKey = "r1" ; System . out . printf ( "--- Reading for row-key: %s for provided table: %s ---\n" , rowKey , tableId ); // Retrieve the result Result result = table . get ( new Get ( Bytes . toBytes ( rowKey ))); // Convert row data to string String rowValue = Bytes . toString ( result . value ()); System . out . printf ( "Scanned value for Row r1: %s \n" , rowValue ); System . out . println ( " --- Finished reading row --- " ); } catch ( IOException e ) { // handle exception while connecting to a table throw e ; } } catch ( IOException e ) { System . err . println ( "Exception while running quickstart: " + e . getMessage ()); e . printStackTrace (); } } } Node.js // Imports the Google Cloud client library const { Bigtable } = require ( ' @google-cloud/bigtable ' ); const bigtable = new Bigtable (); async function quickstart () { // Connect to an existing instance:my-bigtable-instance const instance = bigtable . instance ( INSTANCE ID ); // Connect to an existing table:my-table const table = instance . table ( TABLE ID ); // Read a row from my-table using a row key const [ singleRow ] = await table . row ( 'r1' ). get (); // Print the row key and data (column value, labels, timestamp) const rowData = JSON . stringify ( singleRow . data , null , 4 ); console . log ( Row key: ${ singleRow . id } \nData: ${ rowData } ); } quickstart (); PHP use Google\Cloud\Bigtable\BigtableClient; / Uncomment and populate these variables in your code / // $projectId = 'The Google project ID'; // $instanceId = 'The Bigtable instance ID'; // $tableId = 'The Bigtable table ID'; // Connect to an existing table with an existing instance. $dataClient = new BigtableClient([ 'projectId' => $projectId, ]); $table = $dataClient->table($instanceId, $tableId); $key = 'r1'; // Read a row from my-table using a row key $row = $table->readRow($key); $columnFamilyId = 'cf1'; $columnId = 'c1'; // Get the Value from the Row, using the column family id and column id $value = $row[$columnFamilyId][$columnId][0]['value']; printf("Row key: %s\nData: %s\n", $key, $value); Python The Python client library for Bigtable offers two APIs, asyncio and a synchronous API.
- ArgumentDefaultsHelpFormatter ) parser . add argument ( "project id" , help = "Your Cloud Platform project ID." ) parser . add argument ( "instance id" , help = "ID of the Cloud Bigtable instance to connect to." ) parser . add argument ( "--table" , help = "Existing table used in the quickstart." , default = "my-table" ) args = parser . parse args () asyncio . get event loop () . run until complete ( main ( args . project id , args . instance id , args . table ) ) Ruby Import google bigtable client lib require "google/cloud/bigtable" Instantiates a client bigtable = Google :: Cloud :: Bigtable . new Your Cloud Bigtable instance ID instance id = "my-instance" Your Cloud Bigtable table ID table id = "my-table" Get table client table = bigtable . table instance id , table id Read and print row p table . read row "user0000001" Additional resources C++ The following list contains links to more resources related to the client library for C++: API reference Client libraries best practices Issue tracker google-cloud-bigtable on Stack Overflow Source code C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-cloud-bigtable on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-cloud-bigtable on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-cloud-bigtable on Stack Overflow Source code HBase API Reference Documentation (client library) Source Code GitHub Issue Tracker Stack Overflow Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-cloud-bigtable on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-cloud-bigtable on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-cloud-bigtable on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-cloud-bigtable on Stack Overflow Source code Third-party Cloud Bigtable API client libraries Scio The Scio client library provides a Scala API for Dataflow , which can read from and write to Bigtable.
- ArgumentDefaultsHelpFormatter ) parser . add argument ( "project id" , help = "Your Cloud Platform project ID." ) parser . add argument ( "instance id" , help = "ID of the Cloud Bigtable instance to connect to." ) parser . add argument ( "--table" , help = "Existing table used in the quickstart." , default = "my-table" ) args = parser . parse args () main ( args . project id , args . instance id , args . table ) Python asyncio The Python client library for Bigtable offers two APIs, asyncio and a synchronous API.
- ReadRow ( row key , cbt :: Filter :: FamilyRegex ( column family )); if ( ! result ) throw std :: move ( result ). status (); if ( ! result - > first ) { std :: cout << "Cannot find row " << row key << " in the table: " << table id << " \n " ; return 0 ; } cbt :: Cell const & cell = result - > second . cells (). front (); std :: cout << cell . family name () << ":" << cell . column qualifier () << " @ " << cell . timestamp (). count () << "us \n " << '"' << cell . value () << '"' << " \n " ; return 0 ; } catch ( google :: cloud :: Status const & status ) { std :: cerr << "google::cloud::Status thrown: " << status << " \n " ; return 1 ; } C# using System ; using Google.Cloud.Bigtable.Common.V2 ; // Imports the Google Cloud client library using Google.Cloud.Bigtable.V2 ; namespace GoogleCloudSamples.Bigtable { public class QuickStart { public static int Main ( string [] args ) { // Your Google Cloud Platform project ID const string projectId = "YOUR-PROJECT-ID" ; // The name of the Cloud Bigtable instance const string instanceId = "YOUR-INSTANCE-ID" ; // The name of the Cloud Bigtable table const string tableId = "my-table" ; try { // Creates a Bigtable client BigtableClient bigtableClient = BigtableClient .

