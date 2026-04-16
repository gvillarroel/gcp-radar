---
title: "Set up client-side metrics \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/client-side-metrics-setup
  title: "Set up client-side metrics \_|\_ Bigtable \_|\_ Google Cloud Documentation"
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
Set up client-side metrics
This page describes how to install, set up, and use Bigtable client-side
metrics.
Client-side metrics are available for users of the following client libraries:
Bigtable client library for C++
Bigtable client library for Java
Bigtable HBase client for Java
Bigtable client library for Go
Bigtable client library for Node.js
For an overview, see the Client-side metrics overview .
For a detailed list of the metrics, see
Client-side metric descriptions .
Add or confirm service account permissions
Note: Metrics writer Identity and Access Management permissions are included in the Bigtable
predefined roles by default. This step is
only required if you're using a
custom role .
To add IAM permissions to the service account, complete the following:
In the Google Cloud console, go to the IAM page.
Go
to IAM
Select the project where you created the Bigtable cluster.
Search for the service account you want to add the permission to.
Click Edit principal.
Click Add another role.
Search for "monitoring metric writer" and select the result.
Click Save .
Enable the Cloud Monitoring API
In the Google Cloud console, go to the APIs & Services page.
Go
to APIs and services
Select the project where you created the Bigtable cluster.
Click Enable APIs and Service .
Search for Monitoring .
In the search results, click Cloud Monitoring API .
If API enabled is displayed, then the API is already enabled.
If not, then click Enable .
Set up your Bigtable client library
After you enable the Cloud Monitoring API, configure your Bigtable
client library.
C++
Follow these steps if you use the Bigtable
client library for C++, which calls the Bigtable APIs.
Install and configure the client library for C++
Integrate the library using common C++ build systems, such as CMake or Bazel.
For more information, see
Building and Installing .
For the Bigtable client library to collect the client-side
metrics, your project must include dependencies for
OpenTelemetry and Cloud Monitoring.
OpenTelemetry provides the framework for the client library to create,
instrument, and record the metrics, while the Cloud Monitoring library
provides the functionality to then export or publish these metrics to
Cloud Monitoring.
Enable client-side metrics in your application
Client-side metrics are enabled by default in the
Bigtable client library for C++
as of version 2.40.0.
The metrics are collected automatically if both the OpenTelemetry and
Cloud Monitoring dependencies are available in your project. There is no
additional charge for these metrics.
Optional: Opt out of client-side metrics
You can opt out of using client-side metrics by setting the
EnableMetricsOption to false when you create your data connection.
auto options = Options {}. set<EnableMetricsOption> ( false );
TableResource resource ( "my-project" , "my-instance" , "my-table" );
Table table ( MakeDataConnection ( std :: move ( options )), std :: move ( resource ));
Go
Follow these steps if you use the Bigtable
client library for Go, which calls the Bigtable APIs.
Install and configure the client library for Go
Update the Bigtable client library for Go to version 1.27.0 or
later. Your go.mod should look similar to the following:
require (
cloud . google . com / go / bigtable v1 .27.2 - 0.20240725222120 - ce31365acc54
Optional: Opt out of client-side metrics
Client-side metrics are enabled by default in the Go client library. To opt
out, pass NoopMetricsProvider in the ClientConfig :
client , err := bigtable . NewClientWithConfig ( ctx , project , instance ,
bigtable . ClientConfig { MetricsProvider : bigtable . NoopMetricsProvider {},
})
HBase
Follow these steps if you use the Bigtable HBase client for
Java, which calls the HBase API, to connect your application to
Bigtable.
Install and configure the HBase client library for Java
Download and install the latest Bigtable HBase client for
Java . To enable
client-side metrics, you must use version 2.6.4 or later.
Create an empty Maven project.
Determine the artifact dependency that's right for your use case. The 2.x
versions include an HBase async client that the 1.x versions do not have.
bigtable-hbase-1.x or bigtable-hbase-2.x : Use for standalone
applications where you are in control of your dependencies.
bigtable-hbase-1.x-hadoop or bigtable-hbase-2.x-hadoop : Use in Hadoop
environments.
bigtable-hbase-1.x-shaded or bigtable-hbase-2.x-shaded : Use in environments
other than Hadoop that require earlier versions of components such as
protobufs or Guava.
Update the pom.xml file:
<dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud.bigtable</groupId>
<artifactId> BIGTABLE_HBASE_ARTIFACT </artifactId>
<version> VERSION_NUMBER </version>
</dependency>
</dependencies>
</dependencyManagement>
Provide the following:
BIGTABLE_HBASE_ARTIFACT : the artifact dependency for
your project, formatted like bigtable-hbase-1.x or bigtable-hbase-2.x-hadoop .
VERSION_NUMBER : the client library version that you are
using, formatted like 2.6.4
Enable client-side metrics in your application
Note: Client-side metrics are enabled by default since version 2.14.1. The
following steps are only required when you're using a version between 2.6.4
and 2.14.1.
Using bigtable-hbase-1.x or bigtable-hbase-2.x
When you create a connection using the HBase client library and either the
bigtable-hbase-1.x or bigtable-hbase-2.x artifacts, your code to enable
the built-in client-side metrics looks similar to the following:
import com.google.cloud.bigtable.data.v2. BigtableDataSettings ;
Configuration configuration = BigtableConfiguration . configure ( "my-project-id" , "my-instance-id" );
Connection connection = new BigtableConnection ( configuration );
BigtableDataSettings . enableBuiltinMetrics ();
Using -hadoop or -shaded artifacts
When you create a connection using the HBase client library and one of the
-hadoop or -shaded artifacts, your code to enable the built-in client-side
metrics looks similar to the following:
import com.google.bigtable.repackaged.com.google.cloud.bigtable.data.v2.BigtableDataSettings ;
Configuration configuration = BigtableConfiguration . configure ( "my-project-id" , "my-instance-id" );
Connection connection = new BigtableConnection ( configuration );
BigtableDataSettings . enableBuiltinMetrics ();
Optional: Opt out of client-side metrics
If you are using version 2.14.1 or later, client-side metrics are enabled by default.
You can opt out.
Configuration configuration = BigtableConfiguration . configure ( "my-project-id" , "my-instance-id" );
configuration . setBoolean ( BigtableOptionsFactory . BIGTABLE_ENABLE_CLIENT_SIDE_METRICS , false );
Connection connection = new BigtableConnection ( configuration );
Java
Follow these steps if you use the Bigtable
client library for Java, which calls the Bigtable APIs.
Before you begin
Optional: If you use an OpenCensus
Stats
integration to get Bigtable metrics, revert the dependency and
StackdriverStatsExporter changes in your application. To understand why, see
When to upgrade .
Install and configure the client library for Java
Download and install the latest Bigtable client library for
Java .
You must have version 2.16.0 or higher to use client-side metrics.
Update the Java client library's pom.xml file to use the latest version.
Your pom should look similar to the following:
<dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-bigtable-bom</artifactId>
<version>2.38.0</version>
<scope>import</scope>
<type>pom</type>
</dependency>
</dependencies>
</dependencyManagement>
<dependencies>
<dependency>
<groupId>com.google.cloud</groupId>
<artifactId>google-cloud-bigtable</artifactId>
</dependency>
</dependencies>
Enable client-side metrics in your application
Note: Client-side metrics are enabled by default since version 2.38.0. This step
is only required when you're using a version between 2.16.0 and 2.38.0.
When you create a client using the client library, enable the built-in
metrics. Your code should look similar to the following:
BigtableDataSettings settings = BigtableDataSettings . newBuilder ()
. setProjectId ( "our-project-2-12" )
. setInstanceId ( "our-instance-85" )
. setAppProfileId ( "our-appProfile-06" )
. build ();
BigtableDataSettings . enableBuiltinMetrics ();
try ( BigtableDataClient client = BigtableDataClient . create ( settings )) {
// Application logic
}
Set up a custom OpenTelemetry instance
If you are using version 2.38.0 or later, and you want to publish client-side metrics to
Cloud Monitoring and custom sinks, you can set up a custom OpenTelemetry instance.
SdkMeterProviderBuilder meterProviderBuilder = SdkMeterProvider . builder ();
// register client side metrics on your meter provider
BuiltinMetricsView . registerBuiltinMetrics ( "my-project-id" , meterProviderBuilder );
// register other metric reader and views
meterProviderBuilder . registerMetricReader (). registerView ();
// create the OTEL instance
OpenTelemetry openTelemetry = OpenTelemetrySdk . builder ()
. setMeterProvider ( meterProviderBuilder . build ())
. build ();
// Override MetricsProvider in BigtableDataSettings
BigtableDataSettings settings = BigtableDataSettings . newBuilder ()
. setProjectId ( "my-project-id" )
. setInstanceId ( "my-instance-id" )
. setMetricsProvider ( CustomOpenTelemetryMetricsProvider . create ( openTelemetry ))
. build ();
try ( BigtableDataClient client = BigtableDataClient . create ( settings )) {
// Application logic
}
Optional: Opt out of client-side metrics
If you are using version 2.38.0 and later, you can opt out of using
client-side metrics.
BigtableDataSettings settings = BigtableDataSettings . newBuilder ()
. setProjectId ( "my-project" )
. setInstanceId ( "my-instance" )
. setMetricsProvider ( NoopMetricsProvider . INSTANCE )
. build ();
Node.js
Follow these steps if you use the Bigtable
client library for Node.js, which calls the Bigtable APIs.
Install and configure the client library for Node.js
Download and install the latest Bigtable client library for
Node.js .
You must have version 6.2.0 or later to use client-side metrics. Your package.json file should look similar to the following:
{
"dependencies" : {
"@google-cloud/bigtable" : "^6.2.0"
}
}
In your project, reinstall Node.js modules:
rm -rf node_modules
rm package-lock.json
npm i
Enable client-side metrics in your application
Client-side metrics are enabled by default in the
Bigtable client library for Node.js
as of version 6.4.0.
Optional: Opt out of client-side metrics
You can opt out of using client-side metrics.
const bigtable = new Bigtable ({ metricsEnabled : false });
View metrics in Metrics Explorer
In the Google Cloud console, go to the Metrics Explorer page.
Go
to Metrics Explorer
Select the project.
Click Select a metric .
Search for bigtable.googleapis.com/client .
Select a metric, a group by method, and status, and pick an
Aggregator . To explore more options, see
Select metrics when using Metrics Explorer .
After you enable client-side metrics, let your application run for at least a
minute before you check for any published metrics.
View metrics in Bigtable monitoring
Charts for the following client-side metrics are displayed on the
Bigtable monitoring page:
Client-side read latency
Client-side write latency
Client-side read attempt latency
Client-side write attempt latency
To view client-side metrics on the Monitoring page, follow these steps:
Open the list of Bigtable instances in the Google Cloud console.
Open the instance list
Click the instance whose metrics you want to view.
In the left pane, click Monitoring . The Google Cloud console displays
a series of charts for the instance.
Scroll through the pane to view the client-side metrics.
Optional: To view metrics at the table level, click Tables .
Optional: To view metrics for individual app profiles, click Application
Profiles .
For more information, see Bigtable
monitoring .
What's next
Read an overview of client-side metrics.
View complete descriptions of client-side metrics.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
