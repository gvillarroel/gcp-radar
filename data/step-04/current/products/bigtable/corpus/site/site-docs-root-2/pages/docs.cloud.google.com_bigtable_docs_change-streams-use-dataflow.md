---
title: "Stream changes with Dataflow \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/change-streams-use-dataflow
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/change-streams-use-dataflow
  title: "Stream changes with Dataflow \_|\_ Bigtable \_|\_ Google Cloud Documentation"
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
Stream changes with Dataflow
The Bigtable Beam connector lets you use Dataflow to
read Bigtable data change records without needing to track or
process partition
changes in your
code, because the connector handles that logic for you.
This document describes how to configure and use the Bigtable Beam connector to read a change stream using a Dataflow pipeline.
Before you read this document, you should read the Overview of change
streams and be familiar with Dataflow .
Alternatives to building your own pipeline
If you don't want to build your own Dataflow
pipeline, then you can use one of the following options.
You can use a Google-provided Dataflow template.
Bigtable change streams to BigQuery
Bigtable change streams to Pub/Sub
You can also use the code samples from the Bigtable tutorial or
quickstart as a starting point for your code.
Create a change stream-enabled table and capture changes
Process a Bigtable change stream
Make sure that the code that you generate uses
google cloud libraries-bom version 26.14.0 or later.
Connector details
The Bigtable Beam connector method, BigtableIO.readChangeStream , lets you read a stream of data
change records ( ChangeStreamMutation ) that you can process. The Bigtable Beam connector is a
component of the Apache Beam GitHub
repository . For a description of the connector code, see the comments at
BigtableIO.java .
You must use the connector with Beam version 2.48.0 or later. Check Apache Beam
runtime support to make sure that
you're using a supported version of Java. Then you can deploy a pipeline that
uses the connector to
Dataflow , which handles the provisioning and management
of resources and assists with the scalability and reliability of stream data
processing.
For more information on the Apache Beam programming model, see the
Beam documentation .
Grouping data without event times
Data change records streamed using the Bigtable Beam connector aren't compatible with Dataflow
functions that depend on event times.
As explained in Replication and
watermarks , a
low watermark might not advance if replication for the partition hasn't caught
up to the rest of the instance. When a low watermark stops advancing, it can
cause the change stream to stall.
To prevent the stream from stalling, the Bigtable Beam connector outputs all data with an output timestamp of
zero. The zero timestamp makes Dataflow consider all the data
change records to be
late data .
As a result, Dataflow features that depend on event times aren't
compatible with Bigtable change streams. Specifically, you can't
use
windowing functions ,
event-time triggers ,
or
event-time timers .
Instead, you can use
GlobalWindows
with non-event time triggers to group this late data into panes, as demonstrated
in the example from the tutorial . For details on triggers and panes, see
Triggers
in the Beam programming guide.
Autoscaling
The connector supports
Dataflow autoscaling ,
which is enabled by default when using
Runner v2
(required). The Dataflow autoscaling algorithm takes into account
the estimated change stream backlog, which can be monitored on the
Dataflow monitoring
page in the Backlog section. Use the --maxNumWorkers flag when deploying a
job to cap the number of workers.
To manually scale your pipeline instead of using autoscaling, see
Manually scaling a streaming pipeline .
Limitations
Note the following limitations before using the Bigtable Beam connector with Dataflow.
Dataflow Runner V2
The connector can only be executed using
Dataflow Runner v2 .
To enable this, specify --experiments=use_runner_v2 in your command-line
arguments. Running with Runner v1 causes your pipeline to fail with the
following exception:
java.lang.UnsupportedOperationException: BundleFinalizer unsupported by non-portable Dataflow
Snapshots
The connector does not support
Dataflow snapshots .
Duplicates
The Bigtable Beam connector streams changes for each row key and each
cluster in commit timestamp order but, because it sometimes restarts from
earlier times in the stream, it can produce duplicates.
Pipeline restarts
If a Dataflow pipeline has stopped for a long time, data change
records can fall behind the retention boundary. When the pipeline is resumed,
Bigtable fails the pipeline so that you can start a new pipeline
with a new request start time that is within the retention period.
Bigtable does this, instead of silently advancing the request time
of the original pipeline, to prevent the unintended dropping of data change
records with timestamps that fall outside of the specified retention period.
Before you begin
Before you use the connector, complete the following prerequisites.
Set up authentication
To use the Java samples on this page in a local development environment, install and
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
For information about setting up authentication for a production environment, see
Set up Application Default Credentials for code running on Google Cloud
.
Enable a change stream
You must
enable a change stream
on a table before you can read it. You can also
create a new table
with change streams enabled.
Change stream metadata table
When you stream changes with Dataflow, the
Bigtable Beam connector creates a metadata table that is named
__change_stream_md_table by default. The change stream metadata table manages
the operational state of the connector and stores metadata about data change
records.
By default, the connector creates the table in the same instance as the table
that is being streamed. To ensure that the table works correctly, the app profile for the
metadata table must use single-cluster routing and have single-row
transactions enabled.
For more information about streaming changes from Bigtable with
the Bigtable Beam connector, see the BigtableIO
documentation .
Required roles
To get the permissions that you need to read a Bigtable change
stream using Dataflow, ask your administrator to grant you the
following IAM roles.
To read the changes from Bigtable, you need this role:
Bigtable Administrator
( roles/bigtable.admin )
on the Bigtable instance that contains the table you plan to
stream changes from
To run the Dataflow job, you need these roles:
Dataflow Developer
( roles/dataflow.developer )
on the project containing your Cloud resources
Dataflow Worker
( roles/dataflow.worker )
on the project containing your Cloud resources
Storage Object Admin
( roles/storage.objectAdmin )
on the Cloud Storage buckets that you plan to use
For more information about granting roles, see
Manage access .
You might also be able to get the required permissions through
custom roles
or other
predefined roles .
Add the Bigtable Beam connector as a dependency
Add code similar to the following dependency to your Maven pom.xml file. The
version must be 2.48.0 or later.
< dependencies >
< dependency >
< groupId>org . apache . beam < / groupId >
< artifactId>beam - sdks - java - io - google - cloud - platform < / artifactId >
< version>VERSION < / version >
< / dependency >
< / dependencies >
Read the change stream
To build a Dataflow pipeline to read your data change records,
you configure the connector and then add transforms and sinks. Then you use the
connector to read ChangeStreamMutation objects in a Beam pipeline.
The code samples in this section, written in Java, demonstrate how to build a
pipeline and use it to convert key-value pairs into a string. Each pair consists
of a row key and a ChangeStreamMutation object. The pipeline converts each
object's entries to a comma-separated string.
Build the pipeline
This Java code sample demonstrates how to build the pipeline:
BigtableOptions options =
PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( BigtableOptions . class );
Pipeline p = Pipeline . create ( options );
final Instant startTime = Instant . now ();
p . apply (
"Read Change Stream" ,
BigtableIO . readChangeStream ()
. withProjectId ( options . getBigtableProjectId ())
. withInstanceId ( options . getBigtableInstanceId ())
. withTableId ( options . getBigtableTableId ())
. withAppProfileId ( options . getBigtableAppProfile ())
. withStartTime ( startTime ))
. apply (
"Flatten Mutation Entries" ,
FlatMapElements . into ( TypeDescriptors . strings ())
. via ( ChangeStreamsHelloWorld :: mutationEntriesToString ))
. apply (
"Print mutations" ,
ParDo . of (
new DoFn<String , Void > () { // a DoFn as an anonymous inner class instance
@ProcessElement
public void processElement ( @Element String mutation ) {
System . out . println ( "Change captured: " + mutation );
}
}));
p . run ();
Process the data change records
This sample demonstrates how to loop through all the entries in a data change record
for a row and call a convert-to-string method based on entry type.
For a list of entry types that a data change record can contain, see
What's in a data change record .
static List<String> mutationEntriesToString ( KV<ByteString , ChangeStreamMutation > mutationPair ) {
List<String> mutations = new ArrayList <> ();
String rowKey = mutationPair . getKey (). toStringUtf8 ();
ChangeStreamMutation mutation = mutationPair . getValue ();
MutationType mutationType = mutation . getType ();
for ( Entry entry : mutation . getEntries ()) {
if ( entry instanceof SetCell ) {
mutations . add ( setCellToString ( rowKey , mutationType , ( SetCell ) entry ));
} else if ( entry instanceof DeleteCells ) {
mutations . add ( deleteCellsToString ( rowKey , mutationType , ( DeleteCells ) entry ));
} else if ( entry instanceof DeleteFamily ) {
// Note: DeleteRow mutations are mapped into one DeleteFamily per-family
mutations . add ( deleteFamilyToString ( rowKey , mutationType , ( DeleteFamily ) entry ));
} else {
throw new RuntimeException ( "Entry type not supported." );
}
}
return mutations ;
}
In this sample a write entry is converted:
private static String setCellToString ( String rowKey , MutationType mutationType , SetCell setCell ) {
List<String> mutationParts =
Arrays . asList (
rowKey ,
mutationType . name (),
"SetCell" ,
setCell . getFamilyName (),
setCell . getQualifier (). toStringUtf8 (),
setCell . getValue (). toStringUtf8 ());
return String . join ( "," , mutationParts );
}
In this sample a deletion of cells entry is converted:
private static String deleteCellsToString (
String rowKey , MutationType mutationType , DeleteCells deleteCells ) {
String timestampRange =
deleteCells . getTimestampRange (). getStart () + "-" + deleteCells . getTimestampRange (). getEnd ();
List<String> mutationParts =
Arrays . asList (
rowKey ,
mutationType . name (),
"DeleteCells" ,
deleteCells . getFamilyName (),
deleteCells . getQualifier (). toStringUtf8 (),
timestampRange );
return String . join ( "," , mutationParts );
}
In this sample, a deletion of a column family entry is converted:
private static String deleteFamilyToString (
String rowKey , MutationType mutationType , DeleteFamily deleteFamily ) {
List<String> mutationParts =
Arrays . asList ( rowKey , mutationType . name (), "DeleteFamily" , deleteFamily . getFamilyName ());
return String . join ( "," , mutationParts );
}
Monitor
The following resources in the Google Cloud console let you monitor your
Google Cloud resources while you run a Dataflow pipeline to
read a Bigtable change stream:
Dataflow monitoring
Bigtable system insights
In particular, check the following metrics:
On the Bigtable system insights page, check the following
metrics :
CPU utilization by change streams data in the metric
cpu_load_by_app_profile_by_method_by_table . Shows the change stream's
impact on your cluster's CPU usage.
Change stream storage utilization (bytes)
( change_stream_log_used_bytes ).
On the Dataflow monitoring page, check
data freshness .
This metric shows the difference between the current time and the
watermark, which is approximately two minutes, with occasional spikes that are
a minute or two longer. Data freshness doesn't
indicate if data change records are being processed slowly. To ensure the continuous health and performance of your critical
applications, monitor the Dataflow data freshness metric and take the following actions:
If the data freshness metric is consistently higher than the threshold,
your pipeline might be under-resourced. We recommend that you add more
Dataflow workers.
If the Dataflow workers are
well provisioned but the data freshness has been increasing or is
consistently high, contact Google Cloud Support .
The Dataflow processing_delay_from_commit_timestamp_MEAN
metric can tell you the mean processing time of data change records over the
lifetime of the job.
The Bigtable server/latencies metric is not useful when you're
monitoring a Dataflow pipeline that is reading a
Bigtable change stream, because it reflects the streaming request
duration, not the data change record processing latency. High latency in a
change stream doesn't mean the requests are being processed slowly; it means
the connection was open for that long.
What's next
Learn how to write from Dataflow to Cloud Storage.
View the full list of monitoring metrics provided by Bigtable.
Use monitoring to explore Dataflow metrics.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
