---
title: "Bigtable client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/reference/libraries
  title: "Bigtable client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Reference
Send feedback
Bigtable client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Cloud Bigtable API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C++
To install the C++ Bigtable client library, for example, with vcpkg , run the following:
vcpkg install google-cloud-cpp[core,bigtable]
See the Setting up a C++ development environment guide for
more details about this client library's requirements and install dependencies.
C#
Install-Package Google.Cloud.Bigtable.V2 -Pre
Install-Package Google.Cloud.Bigtable.Admin.V2 -Pre
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/bigtable
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven , add
the following to your pom.xml file. For more information about
BOMs, see The Google Cloud Platform Libraries BOM .
< dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>libraries - bom < / artifactId >
< version>26 .69.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - bigtable < / artifactId >
< / dependency >
If you are using Gradle ,
add the following to your dependencies:
implementation platform ( ' com . google . cloud : libraries - bom : 26.79.0 ' )
implementation ' com . google . cloud : google - cloud - bigtable '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-bigtable" % "2.76.0"
Note: Cloud Java client libraries do not currently support Android.
For more information, see Setting Up a Java Development Environment .
HBase
The Cloud Bigtable HBase client for Java includes the following Maven
artifacts that you can choose to use in your project, depending on your use
case. The 2.x versions include an HBase async client that the
1.x versions do not have.
bigtable-hbase-1.x or bigtable-hbase-2.x :
Use one of these artifacts for standalone applications where you control your
dependencies.
bigtable-hbase-1.x-hadoop or bigtable-hbase-2.x-hadoop :
Use one of these artifacts for Hadoop
environments.
bigtable-hbase-1.x-shaded or bigtable-hbase-2.x-shaded :
Use one of these artifacts for environments other than Hadoop that require
older versions of the HBase client for Java's dependencies, such as
protobuf and
Guava .
Note: The Maven Repository includes additional artifacts for
Bigtable. Do not use these additional artifacts in your
application.
The Bigtable Maven artifacts include the
netty-tcnative-boringssl-static
library , which requires that you use Linux, macOS, or Windows on an x86
64-bit processor.
If your application runs in the
App Engine standard
environment , you must use a current version of the Java runtime. The Java
7 runtime is deprecated and does not support the HBase client for Java.
The following examples assume that you are using the
bigtable-hbase-1.x artifact.
If you are using Maven , add
the following to your pom.xml file. For more information about
BOMs, see The Google Cloud Platform Libraries BOM .
<dependency>
<groupId>com.google.cloud.bigtable</groupId>
<artifactId>bigtable-hbase-1.x</artifactId>
<version>2.6.5</version>
</dependency>
If you are using Gradle ,
add the following to your dependencies:
compile 'com.google.cloud.bigtable:bigtable-hbase-1.x:2.6.5'
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud.bigtable" % "bigtable-hbase-1.x" % "2.6.5"
Note: Cloud Java client libraries do not currently support Android.
Node.js
npm install @google-cloud/bigtable
For more information, see Setting Up a Node.js Development Environment .
PHP
Install and enable the gRPC extension for PHP, then run the following command:
composer require google/cloud-bigtable
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-bigtable
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-bigtable
For more information, see Setting Up a Ruby Development Environment .
Set up authentication
To authenticate calls to Google Cloud APIs, client libraries support
Application Default Credentials (ADC) ;
the libraries look for credentials in a set of defined locations and use those credentials
to authenticate requests to the API. With ADC, you can make
credentials available to your application in a variety of environments, such as local
development or production, without needing to modify your application code.
For production environments, the way you set up ADC depends on the service
and context. For more information, see Set up Application Default Credentials .
For a local development environment, you can set up ADC with the credentials
that are associated with your Google Account:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
A sign-in screen appears. After you sign in, your credentials are stored in the
local credential file used by ADC .
Use the client library
The following example shows how to use the client library. The example connects
to a Bigtable instance and reads a row from a table.
If you haven't stored any data in Bigtable yet, you can use the
cbt CLI
to create a table and add some data. See the quickstart using
the
cbt CLI
for
instructions.
C++
#include "google/cloud/bigtable/table.h"
int main ( int argc , char * argv []) try {
if ( argc != 4 ) {
std :: string const cmd = argv [ 0 ];
auto last_slash = std :: string ( cmd ). find_last_of ( '/' );
std :: cerr << "Usage: " << cmd . substr ( last_slash + 1 )
<< " <project_id> <instance_id> <table_id> \n " ;
return 1 ;
}
std :: string const project_id = argv [ 1 ];
std :: string const instance_id = argv [ 2 ];
std :: string const table_id = argv [ 3 ];
// Create a namespace alias to make the code easier to read.
namespace cbt = :: google :: cloud :: bigtable ;
cbt :: Table table ( cbt :: MakeDataConnection (),
cbt :: TableResource ( project_id , instance_id , table_id ));
std :: string row_key = "r1" ;
std :: string column_family = "cf1" ;
std :: cout << "Getting a single row by row key:" << std :: flush ;
google :: cloud :: StatusOr<std :: pair<bool , cbt :: Row >> result =
table . ReadRow ( row_key , cbt :: Filter :: FamilyRegex ( column_family ));
if ( ! result ) throw std :: move ( result ). status ();
if ( ! result - > first ) {
std :: cout << "Cannot find row " << row_key << " in the table: " << table_id
<< " \n " ;
return 0 ;
}
cbt :: Cell const & cell = result - > second . cells (). front ();
std :: cout << cell . family_name () << ":" << cell . column_qualifier () << " @ "
<< cell . timestamp (). count () << "us \n "
<< '"' << cell . value () << '"' << " \n " ;
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
C#
using System ;
using Google.Cloud.Bigtable.Common.V2 ;
// Imports the Google Cloud client library
using Google.Cloud.Bigtable.V2 ;
namespace GoogleCloudSamples.Bigtable
{
public class QuickStart
{
public static int Main ( string [] args )
{
// Your Google Cloud Platform project ID
const string projectId = "YOUR-PROJECT-ID" ;
// The name of the Cloud Bigtable instance
const string instanceId = "YOUR-INSTANCE-ID" ;
// The name of the Cloud Bigtable table
const string tableId = "my-table" ;
try
{
// Creates a Bigtable client
BigtableClient bigtableClient = BigtableClient . Create ();
// Read a row from my-table using a row key
Row row = bigtableClient . ReadRow (
new TableName ( projectId , instanceId , tableId ), "r1" , RowFilters . CellsPerRowLimit ( 1 ));
// Print the row key and data (column value, labels, timestamp)
Console . WriteLine ( $"{" Row key : ",-30}{row. Key .ToStringUtf8()}\n" +
$"{" Column Family : ",-30}{row. Families [0].Name}\n" +
$"{" Column Qualifyer : ",-30}{row. Families [0].Columns[0].Qualifier.ToStringUtf8()}\n" +
$"{" Value : ",-30}{row. Families [0].Columns[0]. Cells [0]. Value .ToStringUtf8()}\n" +
$"{" Labels : ",-30}{row. Families [0].Columns[0]. Cells [0].Labels}\n" +
$"{" Timestamp : ",-30}{row. Families [0].Columns[0]. Cells [0].TimestampMicros}\n" );
}
catch ( Exception ex )
{
// Handle error performing the read operation
Console . WriteLine ( $"Error reading row r1: {ex.Message}" );
}
return 0 ;
}
}
}
Go
// Quickstart is a sample program demonstrating use of the Cloud Bigtable client
// library to read a row from an existing table.
package main
import (
"context"
"flag"
"log"
"cloud.google.com/go/bigtable"
)
func main () {
projectID := "my-project-id" // The Google Cloud Platform project ID
instanceID := "my-instance-id" // The Google Cloud Bigtable instance ID
tableID := "my-table" // The Google Cloud Bigtable table
ctx := context . Background ()
// Set up Bigtable data operations client.
client , err := bigtable . NewClient ( ctx , projectID , instanceID )
if err != nil {
log . Fatalf ( "Could not create data operations client: %v" , err )
}
tbl := client . Open ( tableID )
// Read data in a row using a row key
rowKey := "r1"
columnFamilyName := "cf1"
log . Printf ( "Getting a single row by row key:" )
row , err := tbl . ReadRow ( ctx , rowKey )
if err != nil {
log . Fatalf ( "Could not read row with key %s: %v" , rowKey , err )
}
log . Printf ( "Row key: %s\n" , rowKey )
log . Printf ( "Data: %s\n" , string ( row [ columnFamilyName ][ 0 ]. Value ))
if err = client . Close (); err != nil {
log . Fatalf ( "Could not close data operations client: %v" , err )
}
}
Java
import com.google.api.gax.rpc. NotFoundException ;
import com.google.cloud.bigtable.data.v2. BigtableDataClient ;
import com.google.cloud.bigtable.data.v2. BigtableDataSettings ;
import com.google.cloud.bigtable.data.v2.models. Row ;
import com.google.cloud.bigtable.data.v2.models. RowCell ;
import com.google.cloud.bigtable.data.v2.models. TableId ;
public class Quickstart {
public static void main ( String ... args ) {
String projectId = args [ 0 ] ; // my-gcp-project-id
String instanceId = args [ 1 ] ; // my-bigtable-instance-id
String tableId = args [ 2 ] ; // my-bigtable-table-id
quickstart ( projectId , instanceId , tableId );
}
public static void quickstart ( String projectId , String instanceId , String tableId ) {
BigtableDataSettings settings =
BigtableDataSettings . newBuilder (). setProjectId ( projectId ). setInstanceId ( instanceId ). build ();
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( BigtableDataClient dataClient = BigtableDataClient . create ( settings )) {
System . out . println ( "\nReading a single row by row key" );
Row row = dataClient . readRow ( TableId . of ( tableId ), "r1" );
System . out . println ( "Row: " + row . getKey (). toStringUtf8 ());
for ( RowCell cell : row . getCells ()) {
System . out . printf (
"Family: %s Qualifier: %s Value: %s%n" ,
cell . getFamily (), cell . getQualifier (). toStringUtf8 (), cell . getValue (). toStringUtf8 ());
}
} catch ( NotFoundException e ) {
System . err . println ( "Failed to read from a non-existent table: " + e . getMessage ());
} catch ( Exception e ) {
System . out . println ( "Error during quickstart: \n" + e . toString ());
}
}
}
HBase
package com . example . cloud . bigtable . quickstart ;
import com . google . cloud . bigtable . hbase . BigtableConfiguration ;
import java . io . IOException ;
import org . apache . hadoop . hbase . TableName ;
import org . apache . hadoop . hbase . client . Connection ;
import org . apache . hadoop . hbase . client . Get ;
import org . apache . hadoop . hbase . client . Result ;
import org . apache . hadoop . hbase . client . Table ;
import org . apache . hadoop . hbase . util . Bytes ;
/**
* A quickstart application that shows connecting to a Cloud Bigtable instance
* using the native HBase API to read a row from a table.
*/
public class Quickstart {
public static void main ( String ... args ) {
String projectId = args [ 0 ]; // my-gcp-project-id
String instanceId = args [ 1 ]; // my-bigtable-instance-id
String tableId = args [ 2 ]; // my-bigtable-table-id
// Create a connection to the Cloud Bigtable instance.
// Use try-with-resources to make sure the connection is closed correctly
try ( Connection connection = BigtableConfiguration . connect ( projectId , instanceId )) {
System . out . println ( "--- Connection established with Bigtable Instance ---" );
// Create a connection to the table that already exists
// Use try-with-resources to make sure the connection to the table is closed correctly
try ( Table table = connection . getTable ( TableName . valueOf ( tableId ))) {
// Read a row
String rowKey = "r1" ;
System . out . printf ( "--- Reading for row-key: %s for provided table: %s ---\n" ,
rowKey , tableId );
// Retrieve the result
Result result = table . get ( new Get ( Bytes . toBytes ( rowKey )));
// Convert row data to string
String rowValue = Bytes . toString ( result . value ());
System . out . printf ( "Scanned value for Row r1: %s \n" , rowValue );
System . out . println ( " --- Finished reading row --- " );
} catch ( IOException e ) {
// handle exception while connecting to a table
throw e ;
}
} catch ( IOException e ) {
System . err . println ( "Exception while running quickstart: " + e . getMessage ());
e . printStackTrace ();
}
}
}
Node.js
// Imports the Google Cloud client library
const { Bigtable } = require ( ' @google-cloud/bigtable ' );
const bigtable = new Bigtable ();
async function quickstart () {
// Connect to an existing instance:my-bigtable-instance
const instance = bigtable . instance ( INSTANCE_ID );
// Connect to an existing table:my-table
const table = instance . table ( TABLE_ID );
// Read a row from my-table using a row key
const [ singleRow ] = await table . row ( 'r1' ). get ();
// Print the row key and data (column value, labels, timestamp)
const rowData = JSON . stringify ( singleRow . data , null , 4 );
console . log ( `Row key: ${ singleRow . id } \nData: ${ rowData } ` );
}
quickstart ();
PHP
use Google\Cloud\Bigtable\BigtableClient;
/** Uncomment and populate these variables in your code */
// $projectId = 'The Google project ID';
// $instanceId = 'The Bigtable instance ID';
// $tableId = 'The Bigtable table ID';
// Connect to an existing table with an existing instance.
$dataClient = new BigtableClient([
'projectId' => $projectId,
]);
$table = $dataClient->table($instanceId, $tableId);
$key = 'r1';
// Read a row from my-table using a row key
$row = $table->readRow($key);
$columnFamilyId = 'cf1';
$columnId = 'c1';
// Get the Value from the Row, using the column_family_id and column_id
$value = $row[$columnFamilyId][$columnId][0]['value'];
printf("Row key: %s\nData: %s\n", $key, $value);
Python
The Python client library for Bigtable offers two APIs, asyncio
and a synchronous API. If your application is asynchronous, use asyncio .
import argparse
from google.cloud import bigtable
def main ( project_id = "project-id" , instance_id = "instance-id" , table_id = "my-table" ):
# Create a Cloud Bigtable client.
client = bigtable . Client ( project = project_id )
# Connect to an existing Cloud Bigtable instance.
instance = client . instance ( instance_id )
# Open an existing table.
table = instance . table ( table_id )
row_key = "r1"
row = table . read_row ( row_key . encode ( "utf-8" ))
column_family_id = "cf1"
column_id = "c1" . encode ( "utf-8" )
value = row . cells [ column_family_id ][ column_id ][ 0 ] . value . decode ( "utf-8" )
print ( "Row key: {} \n Data: {} " . format ( row_key , value ))
if __name__ == "__main__" :
parser = argparse . ArgumentParser (
description = __doc__ , formatter_class = argparse . ArgumentDefaultsHelpFormatter
)
parser . add_argument ( "project_id" , help = "Your Cloud Platform project ID." )
parser . add_argument (
"instance_id" , help = "ID of the Cloud Bigtable instance to connect to."
)
parser . add_argument (
"--table" , help = "Existing table used in the quickstart." , default = "my-table"
)
args = parser . parse_args ()
main ( args . project_id , args . instance_id , args . table )
Python asyncio
The Python client library for Bigtable offers two APIs, asyncio
and a synchronous API. If your application is asynchronous, use asyncio .
import argparse
import asyncio
from google.cloud.bigtable.data import BigtableDataClientAsync
async def main ( project_id = "project-id" , instance_id = "instance-id" , table_id = "my-table" ):
# Create a Cloud Bigtable client.
client = BigtableDataClientAsync ( project = project_id )
# Open an existing table.
table = client . get_table ( instance_id , table_id )
row_key = "r1"
row = await table . read_row ( row_key )
column_family_id = "cf1"
column_id = b "c1"
value = row . get_cells ( column_family_id , column_id )[ 0 ] . value . decode ( "utf-8" )
await table . close ()
await client . close ()
print ( "Row key: {} \n Data: {} " . format ( row_key , value ))
if __name__ == "__main__" :
parser = argparse . ArgumentParser (
description = __doc__ , formatter_class = argparse . ArgumentDefaultsHelpFormatter
)
parser . add_argument ( "project_id" , help = "Your Cloud Platform project ID." )
parser . add_argument (
"instance_id" , help = "ID of the Cloud Bigtable instance to connect to."
)
parser . add_argument (
"--table" , help = "Existing table used in the quickstart." , default = "my-table"
)
args = parser . parse_args ()
asyncio . get_event_loop () . run_until_complete (
main ( args . project_id , args . instance_id , args . table )
)
Ruby
# Import google bigtable client lib
require "google/cloud/bigtable"
# Instantiates a client
bigtable = Google :: Cloud :: Bigtable . new
# Your Cloud Bigtable instance ID
# instance_id = "my-instance"
# Your Cloud Bigtable table ID
# table_id = "my-table"
# Get table client
table = bigtable . table instance_id , table_id
# Read and print row
p table . read_row "user0000001"
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
google-cloud-bigtable on Stack Overflow
Source code
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-cloud-bigtable on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-cloud-bigtable on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloud-bigtable on Stack Overflow
Source code
HBase
API Reference Documentation
(client library)
Source Code
GitHub Issue Tracker
Stack Overflow
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-cloud-bigtable on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-cloud-bigtable on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-cloud-bigtable on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-cloud-bigtable on Stack Overflow
Source code
Third-party Cloud Bigtable API client libraries
Scio
The Scio client library provides a Scala API
for Dataflow , which can read from and write to
Bigtable. The Scio repository provides sample
code for a
Dataflow pipeline that uses Bigtable.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
