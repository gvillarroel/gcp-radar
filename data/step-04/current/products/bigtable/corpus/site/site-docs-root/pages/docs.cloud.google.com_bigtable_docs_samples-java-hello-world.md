---
title: "Java hello world \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/samples-java-hello-world
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/samples-java-hello-world
  title: "Java hello world \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Java hello world
This code sample is a "hello world" application written in Java, using the
Bigtable client library for Java. The sample illustrates how to complete
the following tasks:
Set up authentication
Connect to a Bigtable instance.
Create a new table.
Write data to the table.
Read the data back.
Delete the table.
Running the sample
This code communicates with Bigtable using the Bigtable
client library in the Google Cloud client libraries for Java .
Before you begin, follow the setup steps described in the reference
documentation .
Using the Cloud Client Libraries with Bigtable
The sample application connects to Bigtable and demonstrates some
basic operations.
Connecting to Bigtable
To get started, you need a data client that you use to communicate with the
data API client library and a table admin client that you use to communicate
with the admin API client library.
First, instantiate a BigtableDataSettings object
that includes the project ID and instance ID that the hello world application
will use. Then pass the settings to the BigtableDataClient.create() method to create the data client.
Similarly, for the admin client, first establish the settings by creating a
BigtableTableAdminSettings object, then use
the settings to create a BigtableTableAdminClient object.
As a best practice, when you use Bigtable you should always create
a client once and reuse it throughout the application.
// Creates the settings to configure a bigtable data client.
BigtableDataSettings settings =
BigtableDataSettings . newBuilder (). setProjectId ( projectId ). setInstanceId ( instanceId ). build ();
// Creates a bigtable data client.
dataClient = BigtableDataClient . create ( settings );
// Creates the settings to configure a bigtable table admin client.
BigtableTableAdminSettings adminSettings =
BigtableTableAdminSettings . newBuilder ()
. setProjectId ( projectId )
. setInstanceId ( instanceId )
. build ();
// Creates a bigtable table admin client.
adminClient = BigtableTableAdminClient . create ( adminSettings );
Creating a table
To create a table, build a CreateTableRequest object
and pass it to the admin client's createTable() method.
Note: Columns that are related to one another are typically grouped into a
column family. For more information about column families, see the Bigtable
storage model .
// Checks if table exists, creates table if does not exist.
if ( ! adminClient . exists ( tableId )) {
System . out . println ( "Creating table: " + tableId );
String parent = "projects/" + projectId + "/instances/" + instanceId ;
com . google . bigtable . admin . v2 . CreateTableRequest request =
com . google . bigtable . admin . v2 . CreateTableRequest . newBuilder ()
. setParent ( parent )
. setTableId ( tableId )
. setTable (
com . google . bigtable . admin . v2 . Table . newBuilder ()
. putColumnFamilies (
COLUMN_FAMILY ,
com . google . bigtable . admin . v2 . ColumnFamily . getDefaultInstance ())
. build ())
. build ();
adminClient . getBaseClient (). createTable ( request );
System . out . printf ( "Table %s created successfully%n" , tableId );
}
Writing rows to a table
Create a greetings[] string array containing three greetings, to use as
a source of data to write to the table. Loop through the array. In each
iteration of the loop, create a RowMutation
object and use the setCell() method to add an entry to the
mutation.
Note: In this sample application, setCell() is only called once per mutation,
but you can call it up to 10,000 times per single mutation.
try {
System . out . println ( "\nWriting some greetings to the table" );
String [] names = { "World" , "Bigtable" , "Java" };
for ( int i = 0 ; i < names . length ; i ++ ) {
String greeting = "Hello " + names [ i ] + "!" ;
RowMutation rowMutation =
RowMutation . create ( TableId . of ( tableId ), ROW_KEY_PREFIX + i )
. setCell ( COLUMN_FAMILY , COLUMN_QUALIFIER_NAME , names [ i ] )
. setCell ( COLUMN_FAMILY , COLUMN_QUALIFIER_GREETING , greeting );
dataClient . mutateRow ( rowMutation );
System . out . println ( greeting );
}
} catch ( NotFoundException e ) {
System . err . println ( "Failed to write to non-existent table: " + e . getMessage ());
}
Reading a row by its row key
Use the data client's readRow() method to read
the first row that you wrote.
try {
System . out . println ( "\nReading a single row by row key" );
Row row = dataClient . readRow ( TableId . of ( tableId ), ROW_KEY_PREFIX + 0 );
System . out . println ( "Row: " + row . getKey (). toStringUtf8 ());
for ( RowCell cell : row . getCells ()) {
System . out . printf (
"Family: %s Qualifier: %s Value: %s%n" ,
cell . getFamily (), cell . getQualifier (). toStringUtf8 (), cell . getValue (). toStringUtf8 ());
}
return row ;
} catch ( NotFoundException e ) {
System . err . println ( "Failed to read from a non-existent table: " + e . getMessage ());
return null ;
}
try {
System . out . println ( "\nReading specific cells by family and qualifier" );
Row row = dataClient . readRow ( TableId . of ( tableId ), ROW_KEY_PREFIX + 0 );
System . out . println ( "Row: " + row . getKey (). toStringUtf8 ());
List<RowCell> cells = row . getCells ( COLUMN_FAMILY , COLUMN_QUALIFIER_NAME );
for ( RowCell cell : cells ) {
System . out . printf (
"Family: %s Qualifier: %s Value: %s%n" ,
cell . getFamily (), cell . getQualifier (). toStringUtf8 (), cell . getValue (). toStringUtf8 ());
}
return cells ;
} catch ( NotFoundException e ) {
System . err . println ( "Failed to read from a non-existent table: " + e . getMessage ());
return null ;
}
Scanning all table rows
Next, scan the entire table. Create a Query object, pass it to the
readRows() method, and assign the results to a
row stream.
try {
System . out . println ( "\nReading the entire table" );
Query query = Query . create ( TableId . of ( tableId ));
ServerStream<Row> rowStream = dataClient . readRows ( query );
List<Row> tableRows = new ArrayList <> ();
for ( Row r : rowStream ) {
System . out . println ( "Row Key: " + r . getKey (). toStringUtf8 ());
tableRows . add ( r );
for ( RowCell cell : r . getCells ()) {
System . out . printf (
"Family: %s Qualifier: %s Value: %s%n" ,
cell . getFamily (), cell . getQualifier (). toStringUtf8 (), cell . getValue (). toStringUtf8 ());
}
}
return tableRows ;
} catch ( NotFoundException e ) {
System . err . println ( "Failed to read a non-existent table: " + e . getMessage ());
return null ;
}
Deleting a table
Finally, delete the table with the deleteTable() method.
System . out . println ( "\nDeleting table: " + tableId );
try {
String tableName =
"projects/" + projectId + "/instances/" + instanceId + "/tables/" + tableId ;
adminClient . getBaseClient (). deleteTable ( tableName );
System . out . printf ( "Table %s deleted successfully%n" , tableId );
} catch ( NotFoundException e ) {
System . err . println ( "Failed to delete a non-existent table: " + e . getMessage ());
}
Putting it all together
Here is the full code sample without comments.
package com.example.bigtable ;
import static com.google.cloud.bigtable.data.v2.models. Filters .FILTERS ;
import com.google.api.gax.rpc. NotFoundException ;
import com.google.api.gax.rpc. ServerStream ;
import com.google.cloud.bigtable.admin.v2. BigtableTableAdminClient ;
import com.google.cloud.bigtable.admin.v2. BigtableTableAdminSettings ;
import com.google.cloud.bigtable.data.v2. BigtableDataClient ;
import com.google.cloud.bigtable.data.v2. BigtableDataSettings ;
import com.google.cloud.bigtable.data.v2.models. Filters .Filter ;
import com.google.cloud.bigtable.data.v2.models. Query ;
import com.google.cloud.bigtable.data.v2.models. Row ;
import com.google.cloud.bigtable.data.v2.models. RowCell ;
import com.google.cloud.bigtable.data.v2.models. RowMutation ;
import com.google.cloud.bigtable.data.v2.models. TableId ;
import java.io.IOException ;
import java.nio.charset.StandardCharsets ;
import java.util.ArrayList ;
import java.util.Base64 ;
import java.util.List ;
public class HelloWorld {
private static final String COLUMN_FAMILY = "cf1" ;
private static final String COLUMN_QUALIFIER_GREETING = "greeting" ;
private static final String COLUMN_QUALIFIER_NAME = "name" ;
private static final String ROW_KEY_PREFIX = "rowKey" ;
private final String projectId ;
private final String instanceId ;
private final String tableId ;
private final BigtableDataClient dataClient ;
private final BigtableTableAdminClient adminClient ;
public static void main ( String [] args ) throws Exception {
if ( args . length != 2 ) {
System . out . println ( "Missing required project id or instance id" );
return ;
}
String projectId = args [ 0 ] ;
String instanceId = args [ 1 ] ;
HelloWorld helloWorld = new HelloWorld ( projectId , instanceId , "test-table" );
helloWorld . run ();
}
public HelloWorld ( String projectId , String instanceId , String tableId ) throws IOException {
this . projectId = projectId ;
this . instanceId = instanceId ;
this . tableId = tableId ;
BigtableDataSettings settings =
BigtableDataSettings . newBuilder (). setProjectId ( projectId ). setInstanceId ( instanceId ). build ();
dataClient = BigtableDataClient . create ( settings );
BigtableTableAdminSettings adminSettings =
BigtableTableAdminSettings . newBuilder ()
. setProjectId ( projectId )
. setInstanceId ( instanceId )
. build ();
adminClient = BigtableTableAdminClient . create ( adminSettings );
}
public void run () throws Exception {
createTable ();
writeToTable ();
readSingleRow ();
readSpecificCells ();
readTable ();
filterLimitCellsPerCol ( tableId );
deleteTable ();
close ();
}
public void close () {
dataClient . close ();
adminClient . close ();
}
public void createTable () {
if ( ! adminClient . exists ( tableId )) {
System . out . println ( "Creating table: " + tableId );
String parent = "projects/" + projectId + "/instances/" + instanceId ;
com . google . bigtable . admin . v2 . CreateTableRequest request =
com . google . bigtable . admin . v2 . CreateTableRequest . newBuilder ()
. setParent ( parent )
. setTableId ( tableId )
. setTable (
com . google . bigtable . admin . v2 . Table . newBuilder ()
. putColumnFamilies (
COLUMN_FAMILY ,
com . google . bigtable . admin . v2 . ColumnFamily . getDefaultInstance ())
. build ())
. build ();
adminClient . getBaseClient (). createTable ( request );
System . out . printf ( "Table %s created successfully%n" , tableId );
}
}
public void writeToTable () {
try {
System . out . println ( "\nWriting some greetings to the table" );
String [] names = { "World" , "Bigtable" , "Java" };
for ( int i = 0 ; i < names . length ; i ++ ) {
String greeting = "Hello " + names [ i ] + "!" ;
RowMutation rowMutation =
RowMutation . create ( TableId . of ( tableId ), ROW_KEY_PREFIX + i )
. setCell ( COLUMN_FAMILY , COLUMN_QUALIFIER_NAME , names [ i ] )
. setCell ( COLUMN_FAMILY , COLUMN_QUALIFIER_GREETING , greeting );
dataClient . mutateRow ( rowMutation );
System . out . println ( greeting );
}
} catch ( NotFoundException e ) {
System . err . println ( "Failed to write to non-existent table: " + e . getMessage ());
}
}
public Row readSingleRow () {
try {
System . out . println ( "\nReading a single row by row key" );
Row row = dataClient . readRow ( TableId . of ( tableId ), ROW_KEY_PREFIX + 0 );
System . out . println ( "Row: " + row . getKey (). toStringUtf8 ());
for ( RowCell cell : row . getCells ()) {
System . out . printf (
"Family: %s Qualifier: %s Value: %s%n" ,
cell . getFamily (), cell . getQualifier (). toStringUtf8 (), cell . getValue (). toStringUtf8 ());
}
return row ;
} catch ( NotFoundException e ) {
System . err . println ( "Failed to read from a non-existent table: " + e . getMessage ());
return null ;
}
}
public List<RowCell> readSpecificCells () {
try {
System . out . println ( "\nReading specific cells by family and qualifier" );
Row row = dataClient . readRow ( TableId . of ( tableId ), ROW_KEY_PREFIX + 0 );
System . out . println ( "Row: " + row . getKey (). toStringUtf8 ());
List<RowCell> cells = row . getCells ( COLUMN_FAMILY , COLUMN_QUALIFIER_NAME );
for ( RowCell cell : cells ) {
System . out . printf (
"Family: %s Qualifier: %s Value: %s%n" ,
cell . getFamily (), cell . getQualifier (). toStringUtf8 (), cell . getValue (). toStringUtf8 ());
}
return cells ;
} catch ( NotFoundException e ) {
System . err . println ( "Failed to read from a non-existent table: " + e . getMessage ());
return null ;
}
}
public List<Row> readTable () {
try {
System . out . println ( "\nReading the entire table" );
Query query = Query . create ( TableId . of ( tableId ));
ServerStream<Row> rowStream = dataClient . readRows ( query );
List<Row> tableRows = new ArrayList <> ();
for ( Row r : rowStream ) {
System . out . println ( "Row Key: " + r . getKey (). toStringUtf8 ());
tableRows . add ( r );
for ( RowCell cell : r . getCells ()) {
System . out . printf (
"Family: %s Qualifier: %s Value: %s%n" ,
cell . getFamily (), cell . getQualifier (). toStringUtf8 (), cell . getValue (). toStringUtf8 ());
}
}
return tableRows ;
} catch ( NotFoundException e ) {
System . err . println ( "Failed to read a non-existent table: " + e . getMessage ());
return null ;
}
}
public void filterLimitCellsPerCol ( String tableId ) {
Filter filter = FILTERS . limit (). cellsPerColumn ( 1 );
readRowFilter ( tableId , filter );
readFilter ( tableId , filter );
}
private void readRowFilter ( String tableId , Filter filter ) {
String rowKey =
Base64 . getEncoder (). encodeToString ( "greeting0" . getBytes ( StandardCharsets . UTF_8 ));
Row row = dataClient . readRow ( TableId . of ( tableId ), rowKey , filter );
printRow ( row );
System . out . println ( "Row filter completed." );
}
private void readFilter ( String tableId , Filter filter ) {
Query query = Query . create ( TableId . of ( tableId )). filter ( filter );
ServerStream<Row> rows = dataClient . readRows ( query );
for ( Row row : rows ) {
printRow ( row );
}
System . out . println ( "Table filter completed." );
}
public void deleteTable () {
System . out . println ( "\nDeleting table: " + tableId );
try {
String tableName =
"projects/" + projectId + "/instances/" + instanceId + "/tables/" + tableId ;
adminClient . getBaseClient (). deleteTable ( tableName );
System . out . printf ( "Table %s deleted successfully%n" , tableId );
} catch ( NotFoundException e ) {
System . err . println ( "Failed to delete a non-existent table: " + e . getMessage ());
}
}
private static void printRow ( Row row ) {
if ( row == null ) {
return ;
}
System . out . printf ( "Reading data for %s%n" , row . getKey (). toStringUtf8 ());
String colFamily = "" ;
for ( RowCell cell : row . getCells ()) {
if ( ! cell . getFamily (). equals ( colFamily )) {
colFamily = cell . getFamily ();
System . out . printf ( "Column Family %s%n" , colFamily );
}
String labels =
cell . getLabels (). size () == 0 ? "" : " [" + String . join ( "," , cell . getLabels ()) + "]" ;
System . out . printf (
"\t%s: %s @%s%s%n" ,
cell . getQualifier (). toStringUtf8 (),
cell . getValue (). toStringUtf8 (),
cell . getTimestamp (),
labels );
}
System . out . println ();
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
