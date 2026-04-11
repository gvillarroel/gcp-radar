---
title: "Migrate from the Trace exporter to the OTLP endpoint \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/migrate-to-otlp-endpoints
  title: "Migrate from the Trace exporter to the OTLP endpoint \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Guides
Send feedback
Migrate from the Trace exporter to the OTLP endpoint
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to configure the in-process export of trace data
by the OpenTelemetry SDK to your Google Cloud project. The examples for
Java, Go, Python, and Node.js show how to configure the SDK to send trace data
to the Telemetry (OTLP) API when you use manual instrumentation. For
each language, the page provides information for using OTLP exporters to
send trace data using the supported export protocols .
The instrumentation described on this page applies only to trace data. It
doesn't send log or metric data to your Google Cloud project.
If your application relies on an OpenTelemetry collector to send trace data
to your Google Cloud project, then this document doesn't apply:
For instrumentation samples, see
Collector-based instrumentation samples .
For information about collectors, see
Google-Built OpenTelemetry Collector .
Why you should migrate
The OpenTelemetry SDKs generate log, metric, and trace data in
in a format that is generally consistent with the proto files defined by the
OpenTelemetry OTLP Protocol . However, fields might be
converted from an OpenTelemetry-specific data type to a JSON data type before
storage.
When an application exports that data to a Google Cloud project by
using a Google Cloud exporter, that exporter performs the following steps:
Transforms the recorded data from OTLP-format into a proprietary format
defined by the Cloud Logging API, the Cloud Monitoring API, or the
Cloud Trace API.
Sends the transformed data to the appropriate API, which is then
stored in your Google Cloud project.
For trace data, we recommend that you migrate your application to use the
Telemetry (OTLP) API
to export data, because this export doesn't require a data transformation.
Data transformation might cause loss of some data. For example, the
proprietary format might have lower limits for certain fields, or some
OTLP fields might not map to a field in the proprietary format.
Note: The Telemetry API only accepts trace data. You can't send metric
or log data to your Google Cloud project by using this endpoint.
Available samples
The sample applications referenced on this page are available in GitHub.
Most applications are configured to export trace data by using gRPC, which means
that they use protobuf-encoded data using gRPC wire format over
HTTP/2 connections. Example code is also provided for applications that are
configured to export trace data as protobuf-encoded data over HTTP connections:
Java application
The sample application is configured to export traces as protobuf-encoded data over HTTP connections.
If you prefer to use gRPC, then the instrumentation in this sample is
applicable. However, you need to modify the system properties that the
autoconfiguration module consumes. The sample application specifies the
http/protobuf exporter. To use gRPC, change this setting to grpc .
We recommend that your Java applications, like the sample application, use the
OpenTelemetry SDK Autoconfigure module
to configure the SDK.
Go application that uses gRPC and Go application that uses HTTP
There are two Go repositories. In one repository, the sample application uses
gRPC. The sample in the other repository uses protobuf-encoded data over HTTP connections.
Python repository
This repository contains two samples, one for gRPC and one that uses
protobuf-encoded data over HTTP connections.
Node.js application
This repository contains two samples, one for gRPC and one that uses
protobuf-encoded data over HTTP connections.
Before you begin
Before you migrate your application to send trace data to the OTLP endpoint,
enable the Telemetry API and make sure that you have been granted the
required Identity and Access Management (IAM) roles. You might also need to grant
IAM roles to a service account.
Enable billing and the Telemetry API
Note: The Telemetry API is disabled by default.
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Telemetry, Cloud Logging, Cloud Monitoring, and Cloud Trace APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Telemetry, Cloud Logging, Cloud Monitoring, and Cloud Trace APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Configure permissions
Grant the following IAM roles to the service account that your
application uses:
Cloud Telemetry Traces Writer ( roles/telemetry.tracesWriter )
Logs Writer ( roles/logging.logWriter ) |
Monitoring Metric Writer ( roles/monitoring.metricWriter )
To learn about Application Default Credentials (ADC), see
How Application Default Credentials works
and
Set up Application Default Credentials (ADC) for a local development environment .
To get the permissions that
you need to view your log, metric, and trace data,
ask your administrator to grant you the
following IAM roles on your project:
Logs Viewer ( roles/logging.viewer )
Monitoring Viewer ( roles/monitoring.viewer )
Cloud Trace User ( roles/cloudtrace.user )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Migration guide for manual instrumentation
This section describes how to modify your application so that it sends your
trace data to your Google Cloud project by using the
Telemetry API . You can't send metric or log data
to this endpoint.
Add dependencies
The first step is to add dependencies for OpenTelemetry's OTLP trace exporter in your
application. Select the dependency versions appropriate for your
application and build system.
Java
Note: We recommend that you use the
OpenTelemetry SDK Autoconfigure module
to configure the SDK. The sample application uses this module.
For a Java application, in your build.gradle script, add the following
dependencies:
implementation ( "io.opentelemetry:opentelemetry-exporter-otlp:1.56.0" )
implementation ( "io.opentelemetry:opentelemetry-sdk-extension-autoconfigure:1.56.0" )
Go
This section illustrates changes that you need to make to your dependencies
when using gRPC for export. If you use protobuf-encoded data over HTTP connections for export,
then include the otlptracehttp package as a dependency. For more information,
see Go application that uses HTTP .
For a Go application that uses gRPC for export, update the go.mod file to
include the following dependency:
require (
// ...
go . opentelemetry . io / otel / exporters / otlp / otlptrace / otlptracegrpc v1 .38.0
)
Python
This section illustrates changes that you need to make tp your dependencies
when using gRPC for export. If you use protobuf-encoded data over HTTP connections for export,
then include the opentelemetry-exporter-otlp-proto-http package as a
requirement. For more information, see the Python repository .
For a Python application that uses gRPC for export, install the following
dependencies or update the requirements.txt file:
opentelemetry - exporter - otlp - proto - grpc == 1.24.0
grpcio == 1.63.0
Node.js
This section illustrates changes that you need to make tp your dependencies
when using gRPC for export. If you use protobuf-encoded data over HTTP connections for export,
then include the @opentelemetry/exporter-trace-otlp-proto package as a
dependency. For more information, see Node.js application .
For a Node.js application that exports trace data using gRPC, add the
following dependencies:
"@opentelemetry/exporter-trace-otlp-grpc" : "0.203.0" ,
"@grpc/grpc-js" : "1.14.3"
Replace the use of Google Cloud exporters with OTLP exporters
Update your application code such that the OpenTelemetry SDK is configured to use
the OpenTelemetry OTLP exporters instead of Google Cloud trace exporter.
The required changes are language-specific.
Java
For a Java application, do the following:
Add the following import statements:
import io.opentelemetry.sdk.OpenTelemetrySdk ;
import io.opentelemetry.sdk.autoconfigure.AutoConfiguredOpenTelemetrySdk ;
Update the application code to use the
OpenTelemetry SDK Autoconfigure module
to configure the SDK:
public static void main ( String [] args ) {
// Configure the OpenTelemetry pipeline with Auto configuration
openTelemetrySdk = AutoConfiguredOpenTelemetrySdk . initialize (). getOpenTelemetrySdk ();
// ...
}
Configure the system properties that the autoconfigure module consumes
at runtime. That module uses those properties to bootstrap the SDK. You can
also use environment variables instead of system properties. For more
information, see
Environment variables and system properties .
The sample application defines the system properties in the build.gradle
script:
// You can switch the desired protocol here by changing `otel.exporter.otlp.protocol`.
def autoconf_config = [
' - Dotel . exporter . otlp . endpoint = https : //telemetry.googleapis.com',
' - Dotel . traces . exporter = otlp ' ,
' - Dotel . logs . exporter = none ' ,
' - Dotel . metrics . exporter = none ' ,
' - Dotel . service . name = otlptrace - example ' ,
' - Dotel . exporter . otlp . protocol = http / protobuf ' ,
' - Dotel . java . global - autoconfigure . enabled = true ' ,
]
Also, pass the configuration as JVM arguments:
application {
mainClassName = ' com . google . cloud . opentelemetry . example . otlptrace . OTLPTraceExample '
// Pass the config as JVM arguments to the Java application
applicationDefaultJvmArgs = autoconf_config
}
If you prefer to export trace data by using gRPC, then set the OTLP
protocol to grpc instead of setting it to http/protobuf .
Go
This section illustrates changes that you need to make when using gRPC for
export. If you use protobuf-encoded data over HTTP connections for export, then you
must import the otlptracehttp package and also configure the exporter with
corresponding options. For more information, see Go application that uses HTTP .
For a Go application that uses gRPC for export, add the following
import statements:
import (
"context"
"go.opentelemetry.io/otel"
"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc"
sdktrace "go.opentelemetry.io/otel/sdk/trace"
// ...
)
Also, update the initialization code to configure the TraceProvider with
the gRPC exporter:
// Initializes OpenTelemetry with OTLP exporters
ctx := context . Background ()
// Configure gRPC client with Google Application Default Credentials
creds , err := oauth . NewApplicationDefault ( ctx )
if err != nil {
panic ( err )
}
// set OTEL_RESOURCE_ATTRIBUTES="gcp.project_id=<project_id>"
// set endpoint with OTEL_EXPORTER_OTLP_ENDPOINT=https://<endpoint>
// set OTEL_EXPORTER_OTLP_HEADERS="x-goog-user-project=<project_id>"
// Configure exporter to use the credentials
exporter , err := otlptracegrpc . New ( ctx , otlptracegrpc . WithDialOption ( grpc . WithPerRPCCredentials ( creds )))
if err != nil {
panic ( err )
}
tp := sdktrace . NewTracerProvider (
// For this example code we use sdktrace.AlwaysSample sampler to sample all traces.
// In a production application, use sdktrace.TraceIDRatioBased with a desired probability.
sdktrace . WithSampler ( sdktrace . AlwaysSample ()),
sdktrace . WithBatcher ( exporter ))
otel . SetTracerProvider ( tp )
Python
This section illustrates changes that you need to make when using gRPC for
export. If you use protobuf-encoded data over HTTP connections for export, then you must import from the
opentelemetry.exporter.otlp.proto.http package and also configure the exporter
with the corresponding options. For more information, see the Python repository .
For a Python application that uses gRPC for export, add the following imports:
from opentelemetry import trace
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import (
OTLPSpanExporter ,
)
Also, update the initialization code to configure the TraceProvider with
the gRPC exporter:
# Initialize OpenTelemetry with OTLP exporters
# channel_creds: configure Application Default Credentials
trace_provider = TracerProvider ( resource = resource )
processor = BatchSpanProcessor (
OTLPSpanExporter (
credentials = channel_creds ,
endpoint = "https://telemetry.googleapis.com:443/v1/traces" ,
)
)
trace_provider . add_span_processor ( processor )
trace . set_tracer_provider ( trace_provider )
tracer = trace . get_tracer ( "my.tracer.name" )
Node.js
This section illustrates changes that you need to make when using gRPC for
export. If you use protobuf-encoded data over HTTP connections for export, then import
the @opentelemetry/exporter-trace-otlp-proto package.
For more information, see Node.js application .
For a Node.js application that uses gRPC for export, add the following imports:
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc' ;
Also, update the initialization code to configure the TraceProvider with
the gRPC exporter:
const sdk = new NodeSDK ({
traceExporter : new OTLPTraceExporter ({
credentials : credentials . combineChannelCredentials (
credentials . createSsl (),
credentials . createFromGoogleCredential ( authenticatedClient ),
),
}),
});
sdk . start ();
Configure authentication
With the previous changes to the OpenTelemetry SDK configuration, your application is
configured to export traces using the OpenTelemetry OTLP exporters using either
gRPC or HTTP. Next, you need to configure the exporters to send those traces to
your Google Cloud project.
To configure authentication, do the following:
Configure authentication headers for the export calls .
Configure the required OpenTelemetry resource attributes and OTLP headers .
Configure the exporter endpoint .
This section details each of these steps.
Configure authentication headers for the export calls
To configure the exporter with your Google Cloud
Application Default Credentials (ADC) ,
add a language-specific Google Auth Library.
Java
To authenticate to Trace, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
For a Java application that uses the
OpenTelemetry SDK Autoconfigure module , we
recommend that you also use the
Google Cloud Authentication Extension .
implementation ( "io.opentelemetry.contrib:opentelemetry-gcp-auth-extension:1.52.0-alpha" )
Go
To authenticate to Trace, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
For a Go application that uses gRPC for export, update the go.mod file to
include the following dependency:
// When using gRPC based OTLP exporter, the auth is built in.
google . golang . org / grpc v1 .79.3
For a Go application that uses HTTP for export, update the go.mod file to
include the following dependency:
// When using http based OTLP exporter, use explicit auth library
golang . org / x / oauth2 v0 .34.0
Python
To authenticate to Trace, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
For a Python application, add the following imports:
# Google Auth Library
google - auth == 2.18.1
Node.js
To authenticate to Trace, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
For a Node.js application, add the following dependency:
"google-auth-library" : "9.15.1"
Next, update the application code that constructs the OTLP span exporter so that
it adds the authorization tokens retrieved from the library to the headers.
This step is language-specific, but the implementation is similar for all
languages.
Java
When you have a Java application that uses
the OpenTelemetry SDK Autoconfigure module and the
Google Cloud Authentication Extension ,
you don't need to perform any special steps during your application's
initialization. The autoconfigure module automatically performs the
steps necessary to configure ADC.
Go
This section illustrates changes that you need to make when using gRPC for
export. If you use protobuf-encoded data over HTTP connections for export, then you
must import the otlptracehttp package and configure the exporter
to be an otlptracehttp object. For more information, see Go application that uses HTTP .
For a Go application that uses gRPC for export, add the following
import statements:
"google.golang.org/grpc"
"google.golang.org/grpc/credentials/oauth"
Also, update the initialization code to configure ADC before you
instantiate the gRPC exporter:
// Initializes OpenTelemetry with OTLP exporters
ctx := context . Background ()
// Configure gRPC client with Google Application Default Credentials
creds , err := oauth . NewApplicationDefault ( ctx )
if err != nil {
panic ( err )
}
// set OTEL_RESOURCE_ATTRIBUTES="gcp.project_id=<project_id>"
// set endpoint with OTEL_EXPORTER_OTLP_ENDPOINT=https://<endpoint>
// set OTEL_EXPORTER_OTLP_HEADERS="x-goog-user-project=<project_id>"
// Configure exporter to use the credentials
exporter , err := otlptracegrpc . New ( ctx , otlptracegrpc . WithDialOption ( grpc . WithPerRPCCredentials ( creds )))
if err != nil {
panic ( err )
}
tp := sdktrace . NewTracerProvider (
// For this example code we use sdktrace.AlwaysSample sampler to sample all traces.
// In a production application, use sdktrace.TraceIDRatioBased with a desired probability.
sdktrace . WithSampler ( sdktrace . AlwaysSample ()),
sdktrace . WithBatcher ( exporter ))
otel . SetTracerProvider ( tp )
Python
This section illustrates changes that you need to make when using gRPC for
export. If you use protobuf-encoded data over HTTP connections for export, then use the
default credentials. You must also pass these credentials when you instantiate
the BatchSpanProcessor . For more information, see the Python repository .
For a Python application that uses gRPC for export, add the following imports:
import google.auth
import google.auth.transport.grpc
import google.auth.transport.requests
import grpc
from google.auth.transport.grpc import AuthMetadataPlugin
Also, update the initialization code to configure ADC before you
instantiate the gRPC exporter:
credentials , _ = google . auth . default ()
request = google . auth . transport . requests . Request ()
resource = Resource . create ( attributes = { SERVICE_NAME : "otlp-gcp-grpc-sample" })
auth_metadata_plugin = AuthMetadataPlugin ( credentials = credentials , request = request )
channel_creds = grpc . composite_channel_credentials (
grpc . ssl_channel_credentials (),
grpc . metadata_call_credentials ( auth_metadata_plugin ),
)
Node.js
This section illustrates changes that you need to make when using gRPC for
export. If you use protobuf-encoded data over HTTP connections for export,
then the changes you need to make are slightly different than described here.
To learn more, see the app-http-proto-export.ts file that is included in the
Node.js application .
For a Node.js application that uses gRPC for export, add the following imports:
import { AuthClient , GoogleAuth } from 'google-auth-library' ;
import { credentials } from '@grpc/grpc-js' ;
Also, update the initialization code to configure ADC before you
instantiate the gRPC exporter:
async function getAuthenticatedClient () : Promise<AuthClient> {
const auth : GoogleAuth = new GoogleAuth ({
scopes : 'https://www.googleapis.com/auth/cloud-platform' ,
});
return await auth . getClient ();
}
// Express App that exports traces via gRPC with protobuf
async function main () {
const authenticatedClient : AuthClient = await getAuthenticatedClient ();
// ...
}
Configure the required OpenTelemetry resource attributes
Add to the OTEL_RESOURCE_ATTRIBUTES environment variable the key-value
pair that specifies your project. For the key, use gcp.project_id .
For the value, use the ID of your Google Cloud project.
Example:
export OTEL_RESOURCE_ATTRIBUTES = "gcp.project_id= PROJECT_ID "
If you use Java and configure your application to use the
Google Cloud Authentication Extension ,
as the sample Java application does, then you don't
need to set the project ID as part of the OpenTelemetry resource attributes.
However, setting this attribute isn't harmful.
For more information about OpenTelemetry environment variables, see
General SDK Configuration .
Set the quota project ID
The quota project is the Google Cloud project
that tracks your usage of API requests. Because the Telemetry API is a
client-based API, how you authenticate determines whether the quota project
is automatically identified. For example, you don't need to specify the quota
project when you use a service account for authentication. However, you do
need to specify the quota project when user credentials are used for
authentication.
You can set a quota project by using an environment variable. To determine
which environment variable to set for your programming language, see
Set the quota project using an environment variable .
For example, for Go, you can set the quota project as follows:
export GOOGLE_CLOUD_QUOTA_PROJECT = " QUOTA_PROJECT_ID "
For information about how to resolve authentication errors, see
User credentials not working .
Note: Don't update the OTEL_EXPORTER_OTLP_HEADERS environment variable with
a key-value pair that uses the key x-goog-user-project . This configuration
can result in duplicate values in the request, and that causes API commands
to fail.
Configure the exporter endpoint
Set the value of the OTEL_EXPORTER_OTLP_ENDPOINT environment variable to the
OTLP endpoint for Google Cloud.
Example:
export OTEL_EXPORTER_OTLP_ENDPOINT = https://telemetry.googleapis.com
If you use Java and the autoconfigure module, then you can set the exporter
endpoint by using system properties, as the sample Java application does.
You don't need to set the exporter environment variable for that configuration.
For more information about OpenTelemetry environment variables, see
General SDK Configuration .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
