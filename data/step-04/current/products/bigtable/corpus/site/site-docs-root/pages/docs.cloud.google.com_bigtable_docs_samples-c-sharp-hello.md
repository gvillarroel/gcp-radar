---
title: "C# hello world \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/samples-c-sharp-hello
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/samples-c-sharp-hello
  title: "C# hello world \_|\_ Bigtable \_|\_ Google Cloud Documentation"
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
C# hello world
This code sample is a "hello world" application written in C#. The sample
illustrates how to complete the following tasks:
Set up authentication
Connect to a Bigtable instance
Create a new table.
Write data to the table.
Read the data back.
Delete the table.
Set up authentication
To use the .NET samples on this page in a local development environment, install and
initialize the gcloud CLI, and then set up Application Default Credentials with
your user credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
For more information, see
Set up authentication for a local development environment .
Running the sample
This code communicates with Bigtable using the C# Admin API and C# Data API libraries in
the Google Cloud Client Libraries for .NET .
To run this sample program, follow the
.NET Bigtable Samples instructions on GitHub .
Complete the Build and Run and Quick Start steps to create resources
that you can use in your Hello World application. Make sure you edit the
HelloWorld.cs file to add the names of the resources you create.
Using the Cloud Client Libraries with Bigtable
The sample application connects to Bigtable and demonstrates some
simple operations.
Connecting to Bigtable
To get started, create two client objects that you can use to connect to
Bigtable. The C# Admin APIs BigtableTableAdminClient helps you create and delete instances and tables. The C#
Data APIs BigtableClient helps you read and write table
data.
// BigtableTableAdminClient API lets us create, manage and delete tables.
BigtableTableAdminClient bigtableTableAdminClient = BigtableTableAdminClient . Create ();
// BigtableClient API lets us read and write to a table.
BigtableClient bigtableClient = BigtableClient . Create ();
Creating a table
Call the CreateTable() method in the BigtableTableAdminClient class to
generate a Table object that stores the "hello
world" greetings. The table has a single column family that retains one version
of each value.
Note: Columns that are related to one another are typically grouped into a
column family. For more information about column families, see the Bigtable
storage model .
// Create a table with a single column family.
Console . WriteLine ( $"Create new table: {tableId} with column family: {columnFamily}, instance: {instanceId}" );
// Check whether a table with given TableName already exists.
if ( ! TableExist ( bigtableTableAdminClient ))
{
bigtableTableAdminClient . CreateTable (
new InstanceName ( projectId , instanceId ),
tableId ,
new Table
{
Granularity = Table . Types . TimestampGranularity . Millis ,
ColumnFamilies =
{
{
columnFamily , new ColumnFamily
{
GcRule = new GcRule
{
MaxNumVersions = 1
}
}
}
}
});
// Confirm that table was created successfully.
Console . WriteLine ( TableExist ( bigtableTableAdminClient )
? $"Table {tableId} created successfully\n"
: $"There was a problem creating a table {tableId}" );
}
else
{
Console . WriteLine ( $"Table: {tableId} already exists" );
}
Writing rows to a table
Use the string array s_greetings[] , which contains three simple greetings, as
a source of data to write to the table. First, write a single row to the table
using MutateRow() . Then loop through the rest
of the array to build a MutateRowsRequest object
that contains an entry for each greeting. Make the request to write all the
entries at once with MutateRows() . Then loop
through the returned response to check the status code for each entry to make
sure it was written successfully.
// Initialize Google.Cloud.Bigtable.V2.TableName object.
Google . Cloud . Bigtable . Common . V2 . TableName tableName = new Google . Cloud . Bigtable . Common . V2 . TableName ( projectId , instanceId , tableId );
// Write some rows
/* Each row has a unique row key.
Note: This example uses sequential numeric IDs for simplicity, but
this can result in poor performance in a production application.
Since rows are stored in sorted order by key, sequential keys can
result in poor distribution of operations across nodes.
For more information about how to design a Bigtable schema for the
best performance, see the documentation:
https://cloud.google.com/bigtable/docs/schema-design */
Console . WriteLine ( $"Write some greetings to the table {tableId}" );
// Insert 1 row using MutateRow()
s_greetingIndex = 0 ;
try
{
bigtableClient . MutateRow ( tableName , rowKeyPrefix + s_greetingIndex , MutationBuilder ());
Console . WriteLine ( $"\tGreeting: -- {s_greetings[s_greetingIndex],-18}-- written successfully" );
}
catch ( Exception ex )
{
Console . WriteLine ( $"\tFailed to write greeting: --{s_greetings[s_greetingIndex]}" );
Console . WriteLine ( ex . Message );
throw ;
}
// Insert multiple rows using MutateRows()
// Build a MutateRowsRequest (contains table name and a collection of entries).
MutateRowsRequest request = new MutateRowsRequest
{
TableNameAsTableName = tableName
};
s_mapToOriginalGreetingIndex = new List<int> ();
while ( ++ s_greetingIndex < s_greetings . Length )
{
s_mapToOriginalGreetingIndex . Add ( s_greetingIndex );
// Build an entry for every greeting (consists of rowkey and a collection of mutations).
string rowKey = rowKeyPrefix + s_greetingIndex ;
request . Entries . Add ( Mutations . CreateEntry ( rowKey , MutationBuilder ()));
}
// Make the request to write multiple rows.
MutateRowsResponse response = bigtableClient . MutateRows ( request );
// Check the status code of each entry to ensure that it was written successfully.
foreach ( MutateRowsResponse . Types . Entry entry in response . Entries )
{
s_greetingIndex = s_mapToOriginalGreetingIndex [( int ) entry . Index ];
if ( entry . Status . Code == 0 )
{
Console . WriteLine ( $"\tGreeting: -- {s_greetings[s_greetingIndex],-18}-- written successfully" );
}
else
{
Console . WriteLine ( $"\tFailed to write greeting: --{s_greetings[s_greetingIndex]}" );
Console . WriteLine ( entry . Status . Message );
}
}
Mutation MutationBuilder () = >
Mutations . SetCell ( columnFamily , columnName , s_greetings [ s_greetingIndex ], new BigtableVersion ( DateTime . UtcNow ));
Creating a filter
Before you read the data that you wrote, create a filter to limit the data that
Bigtable returns. This filter tells Bigtable to
return only the most recent version of each value, even if the table contains
older cells that are eligible for garbage collection but have not yet been deleted.
RowFilter filter = RowFilters . CellsPerRowLimit ( 1 );
Reading a row by its row key
Use the ReadRow() method, passing in the filter
you just created, to get one version of each value in that row.
// Read from the table.
Console . WriteLine ( "Read the first row" );
int rowIndex = 0 ;
// Read a specific row. Apply a filter to return latest only cell value accross entire row.
Row rowRead = bigtableClient . ReadRow (
tableName , rowKey : rowKeyPrefix + rowIndex , filter : filter );
Console . WriteLine (
$"\tRow key: {rowRead.Key.ToStringUtf8()} " +
$" -- Value: {rowRead.Families[0].Columns[0].Cells[0].Value.ToStringUtf8(),-16} " +
$" -- Time Stamp: {rowRead.Families[0].Columns[0].Cells[0].TimestampMicros}" );
Scanning all table rows
Call the ReadRows() method, passing in the
filter, to get all of the rows in the table. Because you passed in the filter,
Bigtable returns only one version of each value.
Console . WriteLine ( "Read all rows using streaming" );
// stream the content of the whole table. Apply a filter to return latest only cell values accross all rows.
ReadRowsStream responseRead = bigtableClient . ReadRows ( tableName , filter : filter );
Task printRead = PrintReadRowsAsync ();
printRead . Wait ();
async Task PrintReadRowsAsync ()
{
var responseEnumerator = responseRead . GetAsyncEnumerator ( default );
while ( await responseEnumerator . MoveNextAsync ())
{
Row row = responseEnumerator . Current ;
Console . WriteLine (
$"\tRow key: {row.Key.ToStringUtf8()} " +
$" -- Value: {row.Families[0].Columns[0].Cells[0].Value.ToStringUtf8(),-16} " +
$" -- Time Stamp: {row.Families[0].Columns[0].Cells[0].TimestampMicros}" );
}
}
Deleting a table
Delete the table with the DeleteTable() method.
// Clean up. Delete the table.
Console . WriteLine ( $"Delete table: {tableId}" );
bigtableTableAdminClient . DeleteTable ( name : tableName );
if ( ! TableExist ( bigtableTableAdminClient ))
{
Console . WriteLine ( $"Table: {tableId} deleted successfully" );
}
Putting it all together
Here is the full code sample without comments.
using Google.Cloud.Bigtable.Admin.V2 ;
using Google.Cloud.Bigtable.Common.V2 ;
using Google.Cloud.Bigtable.V2 ;
using Grpc.Core ;
using System ;
using System.Collections.Generic ;
using System.Threading.Tasks ;
namespace GoogleCloudSamples.Bigtable
{
public class HelloWorld
{
private const string projectId = "YOUR-PROJECT-ID" ;
private const string instanceId = "YOUR-INSTANCE-ID" ;
private const string tableId = "Hello-Bigtable" ;
private const string columnFamily = "cf" ;
private const string columnName = "greeting" ;
private static readonly string [] s_greetings = { "Hello World!" , "Hello Bigtable!" , "Hello C#!" };
private static List<int> s_mapToOriginalGreetingIndex ;
private const string rowKeyPrefix = "greeting" ;
private static int s_greetingIndex ;
private static void DoHelloWorld ()
{
try
{
BigtableTableAdminClient bigtableTableAdminClient = BigtableTableAdminClient . Create ();
BigtableClient bigtableClient = BigtableClient . Create ();
Console . WriteLine ( $"Create new table: {tableId} with column family: {columnFamily}, instance: {instanceId}" );
if ( ! TableExist ( bigtableTableAdminClient ))
{
bigtableTableAdminClient . CreateTable (
new InstanceName ( projectId , instanceId ),
tableId ,
new Table
{
Granularity = Table . Types . TimestampGranularity . Millis ,
ColumnFamilies =
{
{
columnFamily , new ColumnFamily
{
GcRule = new GcRule
{
MaxNumVersions = 1
}
}
}
}
});
Console . WriteLine ( TableExist ( bigtableTableAdminClient )
? $"Table {tableId} created successfully\n"
: $"There was a problem creating a table {tableId}" );
}
else
{
Console . WriteLine ( $"Table: {tableId} already exists" );
}
Google . Cloud . Bigtable . Common . V2 . TableName tableName = new Google . Cloud . Bigtable . Common . V2 . TableName ( projectId , instanceId , tableId );
Note : This example uses sequential numeric IDs for simplicity , but
this can result in poor performance in a production application .
Since rows are stored in sorted order by key , sequential keys can
result in poor distribution of operations across nodes .
For more information about how to design a Bigtable schema for the
best performance , see the documentation :
https : //cloud.google.com/bigtable/docs/schema-design */
Console . WriteLine ( $"Write some greetings to the table {tableId}" );
s_greetingIndex = 0 ;
try
{
bigtableClient . MutateRow ( tableName , rowKeyPrefix + s_greetingIndex , MutationBuilder ());
Console . WriteLine ( $"\tGreeting: -- {s_greetings[s_greetingIndex],-18}-- written successfully" );
}
catch ( Exception ex )
{
Console . WriteLine ( $"\tFailed to write greeting: --{s_greetings[s_greetingIndex]}" );
Console . WriteLine ( ex . Message );
throw ;
}
MutateRowsRequest request = new MutateRowsRequest
{
TableNameAsTableName = tableName
};
s_mapToOriginalGreetingIndex = new List<int> ();
while ( ++ s_greetingIndex < s_greetings . Length )
{
s_mapToOriginalGreetingIndex . Add ( s_greetingIndex );
string rowKey = rowKeyPrefix + s_greetingIndex ;
request . Entries . Add ( Mutations . CreateEntry ( rowKey , MutationBuilder ()));
}
MutateRowsResponse response = bigtableClient . MutateRows ( request );
foreach ( MutateRowsResponse . Types . Entry entry in response . Entries )
{
s_greetingIndex = s_mapToOriginalGreetingIndex [( int ) entry . Index ];
if ( entry . Status . Code == 0 )
{
Console . WriteLine ( $"\tGreeting: -- {s_greetings[s_greetingIndex],-18}-- written successfully" );
}
else
{
Console . WriteLine ( $"\tFailed to write greeting: --{s_greetings[s_greetingIndex]}" );
Console . WriteLine ( entry . Status . Message );
}
}
Mutation MutationBuilder () = >
Mutations . SetCell ( columnFamily , columnName , s_greetings [ s_greetingIndex ], new BigtableVersion ( DateTime . UtcNow ));
RowFilter filter = RowFilters . CellsPerRowLimit ( 1 );
Console . WriteLine ( "Read the first row" );
int rowIndex = 0 ;
Row rowRead = bigtableClient . ReadRow (
tableName , rowKey : rowKeyPrefix + rowIndex , filter : filter );
Console . WriteLine (
$"\tRow key: {rowRead. Key .ToStringUtf8()} " +
$" -- Value: {rowRead. Families [0].Columns[0]. Cells [0]. Value .ToStringUtf8(),-16} " +
$" -- Time Stamp: {rowRead. Families [0].Columns[0]. Cells [0].TimestampMicros}" );
Console . WriteLine ( "Read all rows using streaming" );
ReadRowsStream responseRead = bigtableClient . ReadRows ( tableName , filter : filter );
Task printRead = PrintReadRowsAsync ();
printRead . Wait ();
async Task PrintReadRowsAsync ()
{
var responseEnumerator = responseRead . GetAsyncEnumerator ( default );
while ( await responseEnumerator . MoveNextAsync ())
{
Row row = responseEnumerator . Current ;
Console . WriteLine (
$"\tRow key: {row. Key .ToStringUtf8()} " +
$" -- Value: {row. Families [0].Columns[0]. Cells [0]. Value .ToStringUtf8(),-16} " +
$" -- Time Stamp: {row. Families [0].Columns[0]. Cells [0].TimestampMicros}" );
}
}
Console . WriteLine ( $"Delete table: {tableId}" );
bigtableTableAdminClient . DeleteTable ( name : tableName );
if ( ! TableExist ( bigtableTableAdminClient ))
{
Console . WriteLine ( $"Table: {tableId} deleted successfully" );
}
}
catch ( Exception ex )
{
Console . WriteLine ( $"Exception while running HelloWorld: {ex.Message}" );
}
}
private static bool TableExist ( BigtableTableAdminClient bigtableTableAdminClient )
{
GetTableRequest request = new GetTableRequest
{
TableName = new Google . Cloud . Bigtable . Common . V2 . TableName ( projectId , instanceId , tableId ),
View = Table . Types . View . NameOnly
};
try
{
var tables = bigtableTableAdminClient . GetTable ( request );
return true ;
}
catch ( RpcException ex )
{
if ( ex . StatusCode == StatusCode . NotFound )
{
return false ;
}
throw ;
}
}
public static int Main ( string [] args )
{
if ( projectId == "YOUR-PROJECT" + "-ID" )
{
Console . WriteLine ( "Edit HelloWorld.cs and replace YOUR-PROJECT-ID with your project ID." );
return - 1 ;
}
if ( instanceId == "YOUR-INSTANCE" + "-ID" )
{
Console . WriteLine ( "Edit HelloWorld.cs and replace YOUR-INSTANCE-ID with your instance ID." );
return - 1 ;
}
DoHelloWorld ();
return 0 ;
}
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
