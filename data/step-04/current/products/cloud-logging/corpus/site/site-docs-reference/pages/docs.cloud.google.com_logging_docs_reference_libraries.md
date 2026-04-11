---
title: "Logging client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/reference/libraries
  title: "Logging client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Reference
Send feedback
Logging client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Cloud Logging API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Cloud Logging client libraries are idiomatic interfaces around the API.
Client libraries provide an integration option with Logging.
You can use client libraries in addition to using an agent.
Some Google Cloud services, such as Google Kubernetes Engine,
contain an integrated logging agent that sends
the data written to stdout or stderr as logs to Cloud Logging.
For App Engine flexible environment and Cloud Run functions, you can use the integrated agent.
For Compute Engine, you can install an agent that
collects both logs and metrics.
For Android, we recommend that you use Firebase for logging.
For more information, see
Write and view logs .
To learn more about setting up
Logging using a language runtime, see
Setting up Language Runtimes .
Incoming log entries with timestamps that are more than the
logs retention period in the past or that
are more than 24 hours in the future are discarded.
Install the client library
C++
See Setting up a C++ development environment
for details about this client library's requirements and install dependencies.
C#
dotnet add package Google.Cloud.Logging.V2
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/logging
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven with
a BOM, add the following to your pom.xml file:
<dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>libraries-bom</artifactId>
<version>26.55.0</version>
<type>pom</type>
<scope>import</scope>
</dependency>
</dependencies>
</dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-logging</artifactId>
</dependency>
<!-- ...
</dependencies>
If you are using Maven
without a BOM, add this to your dependencies:
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-logging</artifactId>
<version>3.21.3</version>
</dependency>
If you are using Gradle ,
add the following to your dependencies:
implementation platform ( ' com . google . cloud : libraries - bom : 26.74.0 ' )
implementation ' com . google . cloud : google - cloud - logging '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-logging" % "3.24.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/logging
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-logging
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-logging
Install the google-cloud-logging library, not an explicitly versioned library.
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-logging
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
The following example shows how to use the client library.
C++
#include "google/cloud/logging/v2/logging_service_v2_client.h"
#include "google/cloud/project.h"
#include <iostream>
int main ( int argc , char * argv []) try {
if ( argc != 2 ) {
std :: cerr << "Usage: " << argv [ 0 ] << " project-id \n " ;
return 1 ;
}
namespace logging = :: google :: cloud :: logging_v2 ;
auto client = logging :: LoggingServiceV2Client (
logging :: MakeLoggingServiceV2Connection ());
auto const project = google :: cloud :: Project ( argv [ 1 ]);
for ( auto l : client . ListLogs ( project . FullName ())) {
if ( ! l ) throw std :: move ( l ). status ();
std :: cout << * l << " \n " ;
}
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
C#
using System ;
// Imports the Google Cloud Logging client library
using Google.Cloud.Logging.V2 ;
using Google.Cloud.Logging.Type ;
using System.Collections.Generic ;
using Google.Api ;
namespace GoogleCloudSamples
{
public class QuickStart
{
public static void Main ( string [] args )
{
// Your Google Cloud Platform project ID.
string projectId = "YOUR-PROJECT-ID" ;
// Instantiates a client.
var client = LoggingServiceV2Client . Create ();
// Prepare new log entry.
LogEntry logEntry = new LogEntry ();
string logId = "my-log" ;
LogName logName = new LogName ( projectId , logId );
logEntry . LogNameAsLogName = logName ;
logEntry . Severity = LogSeverity . Info ;
// Create log entry message.
string message = "Hello World!" ;
string messageId = DateTime . Now . Millisecond . ToString ();
Type myType = typeof ( QuickStart );
string entrySeverity = logEntry . Severity . ToString (). ToUpper ();
logEntry . TextPayload =
$"{messageId} {entrySeverity} {myType.Namespace}.LoggingSample - {message}" ;
// Set the resource type to control which GCP resource the log entry belongs to.
// See the list of resource types at:
// https://cloud.google.com/logging/docs/api/v2/resource-list
// This sample uses resource type 'global' causing log entries to appear in the
// "Global" resource list of the Developers Console Logs Viewer:
// https://console.cloud.google.com/logs/viewer
MonitoredResource resource = new MonitoredResource
{
Type = "global"
};
// Create dictionary object to add custom labels to the log entry.
IDictionary<string , string > entryLabels = new Dictionary<string , string > ();
entryLabels . Add ( "size" , "large" );
entryLabels . Add ( "color" , "red" );
// Add log entry to collection for writing. Multiple log entries can be added.
IEnumerable<LogEntry> logEntries = new LogEntry [] { logEntry };
// Write new log entry.
client . WriteLogEntries ( logName , resource , entryLabels , logEntries );
Console . WriteLine ( "Log Entry created." );
}
}
}
Go
// Sample logging-quickstart writes a log entry to Cloud Logging.
package main
import (
"context"
"fmt"
"log"
"cloud.google.com/go/logging"
)
func main () {
ctx := context . Background ()
// Sets your Google Cloud Platform project ID.
projectID := "YOUR_PROJECT_ID"
// Creates a client.
client , err := logging . NewClient ( ctx , projectID )
if err != nil {
log . Fatalf ( "Failed to create client: %v" , err )
}
// Sets the name of the log to write to.
logName := "my-log"
// Selects the log to write to.
logger := client . Logger ( logName )
// Sets the data to log.
text := "Hello, world!"
// Adds an entry to the log buffer.
logger . Log ( logging . Entry { Payload : text })
// Closes the client and flushes the buffer to the Cloud Logging
// service.
if err := client . Close (); err != nil {
log . Fatalf ( "Failed to close client: %v" , err )
}
fmt . Printf ( "Logged: %v\n" , text )
}
Java
import com.google.cloud. MonitoredResource ;
import com.google.cloud.logging. LogEntry ;
import com.google.cloud.logging. Logging ;
import com.google.cloud.logging. LoggingOptions ;
import com.google.cloud.logging. Payload .StringPayload ;
import com.google.cloud.logging. Severity ;
import java.util.Collections ;
/**
* This sample demonstrates writing logs using the Cloud Logging API. The library also offers a
* java.util.logging Handler `com.google.cloud.logging.LoggingHandler` Logback integration is also
* available :
* https://github.com/googleapis/google-cloud-java/tree/master/google-cloud-clients/google-cloud-contrib/google-cloud-logging-logback
* Using the java.util.logging handler / Logback appender should be preferred to using the API
* directly.
*/
public class QuickstartSample {
/** Expects a new or existing Cloud log name as the first argument. */
public static void main ( String ... args ) throws Exception {
// The name of the log to write to
String logName = args [ 0 ] ; // "my-log";
String textPayload = "Hello, world!" ;
// Instantiates a client
try ( Logging logging = LoggingOptions . getDefaultInstance (). getService ()) {
LogEntry entry =
LogEntry . newBuilder ( StringPayload . of ( textPayload ))
. setSeverity ( Severity . ERROR )
. setLogName ( logName )
. setResource ( MonitoredResource . newBuilder ( "global" ). build ())
. build ();
// Writes the log entry asynchronously
logging . write ( Collections . singleton ( entry ));
// Optional - flush any pending log entries just before Logging is closed
logging . flush ();
}
System . out . printf ( "Logged: %s%n" , textPayload );
}
}
Node.js
// Imports the Google Cloud client library
const { Logging } = require ( ' @google-cloud/logging ' );
async function quickstart (
projectId = 'YOUR_PROJECT_ID' , // Your Google Cloud Platform project ID
logName = 'my-log' // The name of the log to write to
) {
// Creates a client
const logging = new Logging ({ projectId });
// Selects the log to write to
const log = logging . log ( logName );
// The data to write to the log
const text = 'Hello, world!' ;
// The metadata associated with the entry
const metadata = {
resource : { type : 'global' },
// See: https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logseverity
severity : ' INFO ' ,
};
// Prepares a log entry
const entry = log . entry ( metadata , text );
async function writeLog () {
// Writes the log entry
await log . write ( entry );
console . log ( `Logged: ${ text } ` );
}
writeLog ();
}
PHP
# Includes the autoloader for libraries installed with composer
require __DIR__ . '/vendor/autoload.php';
# Imports the Google Cloud client library
use Google\Cloud\Logging\LoggingClient;
# Your Google Cloud Platform project ID
$projectId = 'YOUR_PROJECT_ID';
# Instantiates a client
$logging = new LoggingClient([
'projectId' => $projectId
]);
# The name of the log to write to
$logName = 'my-log';
# Selects the log to write to
$logger = $logging->logger($logName);
# The data to log
$text = 'Hello, world!';
# Creates the log entry
$entry = $logger->entry($text);
# Writes the log entry
$logger->write($entry);
echo 'Logged ' . $text;
Python
# Imports the Google Cloud client library
from google.cloud import logging
# Instantiates a client
logging_client = logging . Client ()
# The name of the log to write to
log_name = "my-log"
# Selects the log to write to
logger = logging_client . logger ( log_name )
# The data to log
text = "Hello, world!"
# Writes the log entry
logger . log_text ( text )
print ( "Logged: {} " . format ( text ))
Ruby
# Imports the Google Cloud client library
require "google/cloud/logging"
# Instantiates a client
logging = Google :: Cloud :: Logging . new
# Prepares a log entry
entry = logging . entry
# payload = "The data you want to log"
entry . payload = payload
# log_name = "The name of the log to write to"
entry . log_name = log_name
# The resource associated with the data
entry . resource . type = "global"
# Writes the log entry
logging . write_entries entry
puts "Logged #{ entry . payload } "
Code samples
For all code samples, see All logging samples .
For Cloud Shell tutorials that illustrate how to write structured logs,
see the following:
Go
For step-by-step guidance on running a client library in Cloud Shell Editor:
Click Guide me .
You see a panel Learn . Click Start to follow the tutorial.
Guide me
Java
For step-by-step guidance on running a client library in Cloud Shell Editor:
Click Guide me .
You see a panel Learn . Click Start to follow the tutorial.
Guide me
Node.js
For step-by-step guidance on running a client library in Cloud Shell Editor:
Click Guide me .
You see a panel Learn . Click Start to follow the tutorial.
Guide me
Python
For step-by-step guidance on running a client library in Cloud Shell Editor:
Click Guide me .
You see a panel Learn . Click Start to follow the tutorial.
Guide me
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
google-cloud-logging on Stack Overflow
Source code
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-cloud-logging on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-cloud-logging on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloud-logging on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-cloud-logging on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-cloud-logging on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-cloud-logging on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-cloud-logging on Stack Overflow
Source code
Additional client libraries
In addition to the libraries previously listed, a set of integration libraries
are available to support using popular third-party logging libraries with
Cloud Logging.
Language
Library
C#
ASP.NET
C#
log4Net
Java
logback
Node
bunyan
Node
winston
PHP
PSR-3
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
