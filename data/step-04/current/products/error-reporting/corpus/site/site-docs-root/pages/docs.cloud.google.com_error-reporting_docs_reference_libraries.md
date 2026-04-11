---
title: "Error Reporting client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/docs
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/docs/reference/libraries
  title: "Error Reporting client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Error Reporting
Reference
Send feedback
Error Reporting client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Error Reporting API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C#
Install-Package Google.Cloud.ErrorReporting.V1Beta1 -pre
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/errorreporting
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
< version>26 .79.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - errorreporting < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation ' com . google . cloud : google - cloud - errorreporting : 0.209.0 - beta '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-errorreporting" % "0.209.0-beta"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/error-reporting
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-error-reporting
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-error-reporting
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-error_reporting
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
C#
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.ErrorReporting.V1Beta1 ;
using System ;
public class ErrorReportingSample
{
static String projectId ;
public static void Main ( string [] args )
{
// Set your Google Cloud Platform project ID via environment or explicitly
if ( args != null && args . Length > 0 && ! String . IsNullOrEmpty ( args [ 0 ]))
{
projectId = args [ 0 ];
}
else
{
projectId = Environment . GetEnvironmentVariable ( "GOOGLE_CLOUD_PROJECT" );
}
try
{
throw new Exception ( "Something went wrong" );
}
catch ( Exception e )
{
ReportError ( e );
Console . WriteLine ( "Stackdriver Error Report Sent" );
}
}
/// <summary>
/// Report an exception to the Error Reporting service.
/// </summary>
private static void ReportError ( Exception e )
{
// Create the report and execute the request.
var reporter = ReportErrorsServiceClient . Create ();
var projectName = new ProjectName ( projectId );
// Optionally add a service context to the report. For more details see:
// https://cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContext
var assemblyName = System . Reflection . Assembly . GetEntryAssembly (). GetName ();
var serviceContext = new ServiceContext ()
{
Service = assemblyName . Name ,
Version = assemblyName . Version . ToString (),
};
var errorEvent = new ReportedErrorEvent ()
{
Message = e . ToString (),
ServiceContext = serviceContext ,
};
reporter . ReportErrorEvent ( projectName , errorEvent );
}
}
Go
// Sample errorreporting_quickstart contains is a quickstart
// example for the Google Cloud Error Reporting API.
package main
import (
"context"
"errors"
"log"
"os"
"cloud.google.com/go/errorreporting"
)
var errorClient * errorreporting . Client
func main () {
// Set your Google Cloud Platform project ID via environment or explicitly
projectID := os . Getenv ( "GOOGLE_CLOUD_PROJECT" )
args := os . Args [ 1 :]
if len ( args ) > 0 && args [ 0 ] != "" {
projectID = args [ 0 ]
}
ctx := context . Background ()
var err error
errorClient , err = errorreporting . NewClient ( ctx , projectID , errorreporting . Config {
ServiceName : "errorreporting_quickstart" ,
ServiceVersion : "0.0.0" ,
OnError : func ( err error ) {
log . Printf ( "Could not report the error: %v" , err )
},
})
if err != nil {
log . Fatal ( err )
}
defer errorClient . Close ()
err = errors . New ( "something went wrong" )
if err != nil {
logAndPrintError ( err )
return
}
}
func logAndPrintError ( err error ) {
/// Client autopopulates the error context of the error. For more details about the context see:
/// https://cloud.google.com/error-reporting/reference/rest/v1beta1/ErrorContext
errorClient . Report ( errorreporting . Entry {
Error : err ,
})
log . Print ( err )
}
Java
import com.google.cloud.ServiceOptions ;
import com.google.devtools.clouderrorreporting.v1beta1.ProjectName ;
import com.google.devtools.clouderrorreporting.v1beta1.ReportErrorsServiceClient ;
import com.google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent ;
import java.io.IOException ;
import java.io.PrintWriter ;
import java.io.StringWriter ;
/**
* Snippet demonstrates using the Error Reporting API to report an exception.
* <p>
* When the workload runs on App Engine, GKE, Cloud Functions or another managed environment,
* printing the exception's stack trace to stderr will automatically report the error
* to Error Reporting.
*/
public class QuickStart {
static String projectId ;
public static void main ( String [] args ) throws Exception {
// Set your Google Cloud Platform project ID via environment or explicitly
projectId = ServiceOptions . getDefaultProjectId ();
if ( args . length > 0 ) {
projectId = args [ 0 ] ;
} else {
String value = System . getenv ( "GOOGLE_CLOUD_PROJECT" );
if ( value != null && value . isEmpty ()) {
projectId = value ;
}
}
try {
throw new Exception ( "Something went wrong" );
} catch ( Exception ex ) {
reportError ( ex );
}
}
/**
* Sends formatted error report to Google Cloud including the error context.
*
* @param ex Exception containing the error and the context.
* @throws IOException if fails to communicate with Google Cloud
*/
private static void reportError ( Exception ex ) throws IOException {
try ( ReportErrorsServiceClient serviceClient = ReportErrorsServiceClient . create ()) {
StringWriter sw = new StringWriter ();
PrintWriter pw = new PrintWriter ( sw );
ex . printStackTrace ( pw );
ReportedErrorEvent errorEvent = ReportedErrorEvent . getDefaultInstance ()
. toBuilder ()
. setMessage ( sw . toString ())
. build ();
// If you need to report an error asynchronously, use reportErrorEventCallable()
// method
serviceClient . reportErrorEvent ( ProjectName . of ( projectId ), errorEvent );
}
}
}
Node.js
// Import the Google Cloud client library
const { ErrorReporting } = require ( '@google-cloud/error-reporting' );
function quickstart () {
try {
throw new Error ( 'Something went wrong' );
} catch ( exception ) {
reportError ( exception );
}
}
function reportError ( exception ) {
// Instantiates a client
const errors = new ErrorReporting ();
// Reports an exception
errors . report ( exception . stack );
}
PHP
// Imports the Cloud Client Library
use Google\Cloud\ErrorReporting\Bootstrap;
use Google\Cloud\Logging\LoggingClient;
use Google\Cloud\Core\Report\SimpleMetadataProvider;
// These variables are set by the App Engine environment. To test locally,
// ensure these are set or manually change their values.
$projectId = getenv('GOOGLE_CLOUD_PROJECT') ?: 'YOUR_PROJECT_ID';
$service = getenv('GAE_SERVICE') ?: 'error_reporting_quickstart';
$version = getenv('GAE_VERSION') ?: 'test';
// Instantiates a client
$logging = new LoggingClient([
'projectId' => $projectId,
]);
// Set the projectId, service, and version via the SimpleMetadataProvider
$metadata = new SimpleMetadataProvider([], $projectId, $service, $version);
// Create a PSR-3 compliant logger
$psrLogger = $logging->psrLogger('error-log', [
'metadataProvider' => $metadata,
]);
// Using the Error Reporting Bootstrap class, register your PSR logger as a PHP
// exception hander. This will ensure all exceptions are logged to Stackdriver.
Bootstrap::init($psrLogger);
print('Throwing a test exception. You can view the message at https://console.cloud.google.com/errors.' . PHP_EOL);
throw new Exception('Something went wrong');
Python
def report_exception ():
from google.cloud import error_reporting
client = error_reporting . Client ()
try :
raise Exception ( "Something went wrong" )
except Exception :
client . report_exception ()
Ruby
require "google/cloud/error_reporting"
begin
raise "Something went wrong"
rescue StandardError = > e
Google :: Cloud :: ErrorReporting . report e
end
Additional resources
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-cloud-error-reporting on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-cloud-error-reporting on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloud-error-reporting on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-cloud-error-reporting on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-cloud-error-reporting on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-cloud-error-reporting on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-cloud-error-reporting on Stack Overflow
Source code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
