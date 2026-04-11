---
title: "Write structured logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry
  title: "Write structured logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Samples
Write structured logs
Stay organized with collections
Save and categorize content based on your preferences.
Demonstrates how to write a log entry.
Explore further
For detailed documentation that includes this code sample, see the following:
Using .NET logging frameworks or calling the API
Code sample
C#
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
private void WriteLogEntry ( string logId )
{
var client = LoggingServiceV2Client . Create ();
LogName logName = new LogName ( s_projectId , logId );
var jsonPayload = new Struct ()
{
Fields =
{
{ "name" , Value . ForString ( "King Arthur" ) },
{ "quest" , Value . ForString ( "Find the Holy Grail" ) },
{ "favorite_color" , Value . ForString ( "Blue" ) }
}
};
LogEntry logEntry = new LogEntry
{
LogNameAsLogName = logName ,
Severity = LogSeverity . Info ,
JsonPayload = jsonPayload
};
MonitoredResource resource = new MonitoredResource { Type = "global" };
IDictionary<string , string > entryLabels = new Dictionary<string , string >
{
{ "size" , "large" },
{ "color" , "blue" }
};
client . WriteLogEntries ( logName , resource , entryLabels ,
new [] { logEntry }, _retryAWhile );
Console . WriteLine ( $"Created log entry in log-id: {logId}." );
}
Go
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"log"
"cloud.google.com/go/logging"
)
func structuredWrite ( projectID string ) {
ctx := context . Background ()
client , err := logging . NewClient ( ctx , projectID )
if err != nil {
log . Fatalf ( "Failed to create logging client: %v" , err )
}
defer client . Close ()
const name = "log-example"
logger := client . Logger ( name )
defer logger . Flush () // Ensure the entry is written.
logger . Log ( logging . Entry {
// Log anything that can be marshaled to JSON.
Payload : struct { Anything string }{
Anything : "The payload can be any type!" ,
},
Severity : logging . Debug ,
})
}
Java
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud. MonitoredResource ;
import com.google.cloud.logging. LogEntry ;
import com.google.cloud.logging. Logging ;
import com.google.cloud.logging. LoggingOptions ;
import com.google.cloud.logging. Payload .JsonPayload ;
import com.google.cloud.logging. Severity ;
import com.google.common.collect.ImmutableMap ;
import java.util.Collections ;
import java.util.Map ;
public class WriteLogEntry {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Optionally provide the logname as an argument
String logName = args . length > 0 ? args [ 0 ] : "test-log" ;
// Instantiates a client
try ( Logging logging = LoggingOptions . getDefaultInstance (). getService ()) {
Map<String , String > payload =
ImmutableMap . of (
"name" , "King Arthur" , "quest" , "Find the Holy Grail" , "favorite_color" , "Blue" );
LogEntry entry =
LogEntry . newBuilder ( JsonPayload . of ( payload ))
. setSeverity ( Severity . INFO )
. setLogName ( logName )
. setResource ( MonitoredResource . newBuilder ( "global" ). build ())
. build ();
// Writes the log entry asynchronously
logging . write ( Collections . singleton ( entry ));
// Optional - flush any pending log entries just before Logging is closed
logging . flush ();
}
System . out . printf ( "Wrote to %s\n" , logName );
}
}
Node.js
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
const { Logging } = require ( ' @google-cloud/logging ' );
const logging = new Logging ();
/**
* TODO(developer): Uncomment the following line and replace with your values.
*/
// const logName = 'my-log';
const log = logging . log ( logName );
// A text log entry
const text_entry = log . entry ( 'Hello world!' );
// A json log entry with additional context
const metadata = {
severity : ' WARNING ' ,
labels : {
foo : 'bar' ,
},
// A default log resource is added for some GCP environments
// This log resource can be overwritten per spec:
// https://cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource
resource : {
type : 'global' ,
},
};
const message = {
name : 'King Arthur' ,
quest : 'Find the Holy Grail' ,
favorite_color : 'Blue' ,
};
const json_Entry = log . entry ( metadata , message );
async function writeLogEntry () {
// Asynchronously write the log entry
await log . write ( text_entry );
// Asynchronously batch write the log entries
await log . write ([ text_entry , json_Entry ]);
// Let the logging library dispatch logs
log . write ( text_entry );
console . log ( `Wrote to ${ logName } ` );
}
writeLogEntry ();
PHP
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Logging\LoggingClient;
use Google\Cloud\Logging\Logger;
/** Write a log message via the Stackdriver Logging API.
*
* @param string $projectId The Google project ID.
* @param string $loggerName The name of the logger.
* @param string $message The log message.
*/
function write_log($projectId, $loggerName, $message)
{
$logging = new LoggingClient(['projectId' => $projectId]);
$logger = $logging->logger($loggerName, [
'resource' => [
'type' => 'gcs_bucket',
'labels' => [
'bucket_name' => 'my_bucket'
]
]
]);
$entry = $logger->entry($message, [
'severity' => Logger::INFO
]);
$logger->write($entry);
printf("Wrote a log to a logger '%s'." . PHP_EOL, $loggerName);
}
Python
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def write_entry ( logger_name ):
"""Writes log entries to the given logger."""
logging_client = logging . Client ()
# This log can be found in the Cloud Logging console under 'Custom Logs'.
logger = logging_client . logger ( logger_name )
# Make a simple text log
logger . log_text ( "Hello, world!" )
# Simple text log with severity.
logger . log_text ( "Goodbye, world!" , severity = "WARNING" )
# Struct log. The struct can be any JSON-serializable dictionary.
logger . log_struct (
{
"name" : "King Arthur" ,
"quest" : "Find the Holy Grail" ,
"favorite_color" : "Blue" ,
},
severity = "INFO" ,
)
print ( "Wrote logs to {} ." . format ( logger . name ))
Ruby
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/logging"
logging = Google :: Cloud :: Logging . new
entry = logging . entry
# payload = "The data you want to log"
entry . payload = payload
# log_name = "The name of the log to write to"
entry . log_name = log_name
entry . severity = :NOTICE
entry . resource . type = "gae_app"
entry . resource . labels [ :module_id ] = "default"
entry . resource . labels [ :version_id ] = "20160101t163030"
logging . write_entries entry
puts "Wrote payload: #{ entry . payload } to log: #{ entry . log_name } "
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
