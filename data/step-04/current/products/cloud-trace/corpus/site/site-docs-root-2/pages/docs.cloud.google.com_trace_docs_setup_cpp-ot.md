---
title: "C++ and OpenTelemetry \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/setup/cpp-ot
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/setup/cpp-ot
  title: "C++ and OpenTelemetry \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
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
C++ and OpenTelemetry
Stay organized with collections
Save and categorize content based on your preferences.
This page is intended for application developers who want to
collect Cloud Trace data for C++ applications
by using OpenTelemetry. OpenTelemetry is
a vendor-neutral instrumentation framework that you can use to collect trace
and metric data. For information about instrumenting your code, see
Instrumentation and observability .
This page guides you through the following steps:
Install the OpenTelemetry packages.
Configure your application to export spans to Cloud Trace.
Configure your platform.
For release information, see the following:
Latest library release for C++
Latest Cloud Trace exporter release for C++
For OpenTelemetry reference content, see the following:
Tracer
Span
For the latest details about OpenTelemetry for C++,
along with additional documentation and examples, see
OpenTelemetry .
Before you begin
Enable the Cloud Trace API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the OpenTelemetry packages
Set up a C++ development environment .
Install the Google Cloud C++ OpenTelemetry exporter library. For
installation information, see the
OpenTelemetry quickstart .
Configure the export of spans to Cloud Trace
To configure the export of trace data, call the
google::cloud::otel::ConfigureBasicTracing(...) method in your main()
method:
namespace gc = :: google :: cloud ;
[]( std :: string project_id ) {
auto project = gc :: Project ( std :: move ( project_id ));
auto configuration = gc :: otel :: ConfigureBasicTracing ( project );
MyApplicationCode ();
}
The field project_id is the Google Cloud project where you want to store the
traces.
The method ConfigureBasicTracing(...) instantiates a
TracerProvider object that implements
a Cloud Trace exporter. If the object returned by the call to
ConfigureBasicTracing(...) goes out of scope, then the previous
TracerProvider object is reinstated, when one exists.
Configure sample rate
Applications might generate a large volume of trace data. The following
sample illustrates how to configure the sampling rate:
namespace gc = :: google :: cloud ;
[]( std :: string project_id ) {
auto project = gc :: Project ( std :: move ( project_id ));
auto options = gc :: Options {}. set<gc :: otel :: BasicTracingRateOption > ( .001 );
auto configuration = gc :: otel :: ConfigureBasicTracing ( project , options );
MyApplicationCode ();
}
Note: A sampling rate of 1.0 results in all traces being sampled. This
might result in a large volume of trace data and might increase your usage bill.
Export to Cloud Trace with a custom TracerProvider
You might have use cases that require a custom TracerProvider object. For
example, if you want to use multiple exporters at the same time, you need
to make a custom TracerProvider object. In these cases, you can use the
Cloud Trace exporter directly:
namespace gc = :: google :: cloud ;
using :: opentelemetry :: trace :: Scope ;
[]( std :: string project_id ) {
// Use the Cloud Trace Exporter directly.
auto project = gc :: Project ( std :: move ( project_id ));
auto exporter = gc :: otel :: MakeTraceExporter ( project );
// Advanced use cases may need to create their own tracer provider, e.g. to
// export to Cloud Trace and another backend simultaneously. In this
// example, we just tweak some OpenTelemetry settings that google-cloud-cpp
// does not expose.
opentelemetry :: sdk :: trace :: BatchSpanProcessorOptions options ;
options . schedule_delay_millis = std :: chrono :: milliseconds ( 1000 );
auto processor =
opentelemetry :: sdk :: trace :: BatchSpanProcessorFactory :: Create (
std :: move ( exporter ), options );
// Create a tracer provider and set it as the global trace provider
opentelemetry :: trace :: Provider :: SetTracerProvider (
std :: shared_ptr<opentelemetry :: trace :: TracerProvider > (
opentelemetry :: sdk :: trace :: TracerProviderFactory :: Create (
std :: move ( processor ))));
MyApplicationCode ();
// Clear the global trace provider
opentelemetry :: trace :: Provider :: SetTracerProvider (
opentelemetry :: nostd :: shared_ptr <
opentelemetry :: trace :: TracerProvider > ());
}
Instrument your own application
For information about how to configure your application to capture trace
spans, see OpenTelemetry Tracing .
This page describes how to do all of the following:
Create a span
Create nested spans
Set span attributes
Create spans with events
Create spans with links
// For more details on the OpenTelemetry code in this sample, see:
// https://opentelemetry.io/docs/instrumentation/cpp/manual/
namespace gc = :: google :: cloud ;
using :: opentelemetry :: trace :: Scope ;
[]( std :: string project_id ) {
auto project = gc :: Project ( std :: move ( project_id ));
auto configuration = gc :: otel :: ConfigureBasicTracing ( project );
// Initialize the `Tracer`. This would typically be done once.
auto provider = opentelemetry :: trace :: Provider :: GetTracerProvider ();
auto tracer = provider - > GetTracer ( "my-application" );
// If your application makes multiple client calls that are logically
// connected, you may want to instrument your application.
auto my_function = [ tracer ] {
// Start an active span. The span is ended when the `Scope` object is
// destroyed.
auto scope = Scope ( tracer - > StartSpan ( "my-function-span" ));
// Any spans created by the client library will be children of
// "my-function-span". i.e. In the distributed trace, the client calls are
// sub-units of work of `my_function()`, and will be displayed as such in
// Cloud Trace.
Client client ;
client . CreateFoo ();
client . DeleteFoo ();
};
// As an example, start a span to cover both calls to `my_function()`.
auto scope = Scope ( tracer - > StartSpan ( "my-application-span" ));
my_function ();
my_function ();
}
Sample application
For a sample application, see
the quickstart .
Configure your platform
You can use Cloud Trace on Google Cloud and other platforms.
Running on Google Cloud
When your application is running on Google Cloud, you don't need to
provide authentication credentials in the form of a service account to the
client library. However, you do need to ensure that
your Google Cloud platform has the
Cloud Trace API access scope
enabled.
For a list of supported Google Cloud environments, see
Environment support .
For the following configurations, the default access-scope settings enable
the Cloud Trace API:
App Engine flexible environment
App Engine standard environment
Google Kubernetes Engine (GKE)
Note: If you use Autopilot or if you enable Workload Identity Federation for GKE for
your GKE cluster, then ensure that you
configure your application to use Workload Identity Federation for GKE .
Compute Engine
Cloud Run
If you use custom access scopes, then you must ensure that
Cloud Trace API access scope
is enabled:
For information about how to configure the
access scopes for your environment by using the Google Cloud console, see
Configuring your Google Cloud project .
For gcloud users, specify access scopes using the --scopes flag
and include the trace.append Cloud Trace API access scope.
For example, to create a GKE cluster with only
the Cloud Trace API enabled, do the following:
gcloud container clusters create example-cluster-name --scopes=https://www.googleapis.com/auth/trace.append
Running locally and elsewhere
If your application is running outside of Google Cloud, then you must
provide authentication credentials in the form of a service account to the
client library. The service account must contain the
Cloud Trace agent role .
For instructions, see Creating a service account .
Google Cloud client libraries use
Application Default Credentials (ADC) to find your
application's credentials.
You can provide these credentials in one of three ways:
Run gcloud auth application-default login
Place the service account in a default path for your operating system.
The following lists the default paths for Windows and Linux:
Windows: %APPDATA%/gcloud/application_default_credentials.json
Linux: $HOME/.config/gcloud/application_default_credentials.json
Set the GOOGLE_APPLICATION_CREDENTIALS environment variable to
the path to your service account:
Linux/macOS
export GOOGLE_APPLICATION_CREDENTIALS = path-to-your-service-accounts-private-key
Windows
set GOOGLE_APPLICATION_CREDENTIALS = path-to-your-service-accounts-private-key
PowerShell:
$env :GOOGLE_APPLICATION_CREDENTIALS = "path-to-your-service-accounts-private-key"
View traces
In the Google Cloud console, go to the
Trace explorer page:
Go to Trace explorer
You can also find this page by using the search bar.
Troubleshooting
For information on troubleshooting issues with Cloud Trace, go to the
Troubleshooting page .
To debug the C++ Cloud Trace exporter, see the
Troubleshooting section of the reference
documentation.
Resources
https://opentelemetry.io/
open-telemetry/opentelemetry-cpp
GitHub repository
google-cloud-cpp OpenTelemetry Exporters Library
GitHub repository.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
