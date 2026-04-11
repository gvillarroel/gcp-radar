---
title: "Write request logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced
  title: "Write request logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
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
Write request logs
Stay organized with collections
Save and categorize content based on your preferences.
An example of how to log HTTP request logs.
Code sample
Go
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Writes an advanced log entry to Cloud Logging.
package main
import (
"context"
"log"
"net/http"
"os"
"cloud.google.com/go/logging"
)
func main () {
ctx := context . Background ()
// Creates a client.
projectID := os . Getenv ( "GOOGLE_CLOUD_PROJECT" )
client , err := logging . NewClient ( ctx , projectID )
if err != nil {
log . Fatalf ( "Failed to create client: %v" , err )
}
defer client . Close ()
// Sets the name of the log to write to.
logger := client . Logger ( "my-log" )
// Logs a basic entry.
logger . Log ( logging . Entry { Payload : "hello world" })
// TODO(developer): replace with your request value.
r , err := http . NewRequest ( "GET" , "http://example.com" , nil )
// Logs an HTTPRequest type entry.
// Some request metadata will be autopopulated in the log entry.
httpEntry := logging . Entry {
Payload : "optional message" ,
HTTPRequest : & logging . HTTPRequest {
Request : r ,
},
}
logger . Log ( httpEntry )
}
Java
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud. MonitoredResource ;
import com.google.cloud.logging. HttpRequest ;
import com.google.cloud.logging. LogEntry ;
import com.google.cloud.logging. Logging ;
import com.google.cloud.logging. LoggingOptions ;
import com.google.cloud.logging. Payload ;
import com.google.cloud.logging. Severity ;
import java.util.Collections ;
/** Write LogEntry with HTTP request using the Cloud Logging API. */
public class LogEntryWriteHttpRequest {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String logName = "log-name" ; // i.e "my-log"
String payLoad = "payload" ; // i.e "Hello world!"
HttpRequest httpRequest =
HttpRequest . newBuilder ()
. setRequestUrl ( "www.example.com" )
. setRequestMethod ( HttpRequest . RequestMethod . GET ) // Supported method GET,POST,PUT,HEAD
. setStatus ( 200 )
. build ();
createLogEntryRequest ( logName , payLoad , httpRequest );
}
public static void createLogEntryRequest ( String logName , String payLoad , HttpRequest httpRequest )
throws Exception {
// Instantiates a logging client
try ( Logging logging = LoggingOptions . getDefaultInstance (). getService ()) {
// create an instance of LogEntry with HTTP request
LogEntry logEntry =
LogEntry . newBuilder ( Payload . StringPayload . of ( payLoad ))
. setSeverity ( Severity . ERROR )
. setLogName ( logName )
. setHttpRequest ( httpRequest )
. setResource ( MonitoredResource . newBuilder ( "global" ). build ())
. build ();
// Writes the log entry asynchronously
logging . write ( Collections . singleton ( logEntry ));
System . out . printf ( "Logged: %s" , payLoad );
}
}
}
Node.js
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
/*
const projectId = 'YOUR_PROJECT_ID'; // Your Google Cloud Platform project ID
const logName = 'my-log'; // The name of the log to write to
const requestMethod = 'GET'; // GET, POST, PUT, etc.
const requestUrl = 'http://www.google.com';
const status = 200;
const userAgent = `my-user-agent/1.0.0`;
const latencySeconds = 3;
const responseSize = 256; // response size in bytes.
*/
// Imports the Google Cloud client library
const { Logging } = require ( ' @google-cloud/logging ' );
// Creates a client
const logging = new Logging ({ projectId });
// Selects the log to write to
const log = logging . log ( logName );
// The data to write to the log
const text = 'Hello, world!' ;
// The metadata associated with the entry
const metadata = {
resource : { type : 'global' },
httpRequest : {
requestMethod ,
requestUrl ,
status ,
userAgent ,
latency : {
seconds : latencySeconds ,
},
responseSize ,
},
};
// Prepares a log entry
const entry = log . entry ( metadata , text );
// Writes the log entry
async function writeLog () {
await log . write ( entry );
console . log ( `Logged: ${ text } ` );
}
writeLog ();
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
