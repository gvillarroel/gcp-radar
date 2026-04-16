---
title: "Set the pipeline streaming mode \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes
  title: "Set the pipeline streaming mode \_|\_ Cloud Dataflow \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
Set the pipeline streaming mode
Stay organized with collections
Save and categorize content based on your preferences.
Dataflow supports two modes for streaming jobs:
Exactly-once mode . This mode is the default for all
Dataflow streaming jobs. In this mode, Dataflow
ensures that records are not dropped or duplicated as the data moves through
the pipeline.
At-least-once mode . This mode guarantees that records are processed at
least once (that is, no input records are lost). However, duplicate records
are possible in this mode. For use cases that can tolerate duplicates,
at-least-once mode can significantly lower the cost and latency of your job.
Choose which streaming mode to use
Choose exactly-once mode if you need to ensure exact results from the pipeline
and predictable semantics. For example:
Pipelines with
aggregations ,
such as count, sum, or mean.
Business-critical use cases that rely on records being processed once and only
once. Examples include fraud detection, network threat detection, and
ecommerce inventory dashboards.
Choose at-least-once streaming mode if your workload can tolerate duplicated
records and might benefit from reduced cost or latency. For example:
Workloads where deduplication is performed downstream from
Dataflow. For example, pipelines that write to
BigQuery or a SQL datastore.
Map-only pipelines with no aggregations. Examples include log processing,
change data capture, or extract, transform, and load (ETL) jobs, in which the
pipeline performs only per-element transforms, such as schema translation.
Pipelines where the output sink can't guarantee exactly-once delivery, such
as Pub/Sub. In that case, deduplication within the pipeline might
be unnecessary, and you can benefit from the reduced cost and latency of
at-least-once streaming mode.
Pipelines that read from Pub/Sub. Reading from Pub/Sub is
significantly optimized when using at-least-once mode.
Additional considerations
At-least-once mode can significantly reduce the cost and latency of a
pipeline. The exact impact depends on the specifics of the pipeline. Test
at-least-once streaming under realistic loads to evaluate the impact.
When using at-least-once mode, the rate of duplicate records depends on the
number of retries. The baseline rate is typically low (<1%). However, spikes
can occur if worker nodes fail or other conditions cause repeated RPC calls.
The streaming mode affects how Streaming Engine processes records, but does
not change the semantics of I/O connectors. It is recommended to align your
I/O semantics with the streaming mode. For example, if you use at-least-once
streaming mode with the
BigQuery I/O connector ,
set the write mode to STORAGE_API_AT_LEAST_ONCE .
Google-provided Dataflow templates
automatically enable this option when you use at-least-once streaming.
Element-wise transforms such as Map are not always idempotent. For example,
consider a function that receives a message and appends the current timestamp
to it. In that case, a duplicate record can produce several distinct outputs.
At-least-once mode might not be appropriate for that pipeline.
Set the streaming mode
Exactly-once processing is the default setting for all Dataflow
jobs. To enable at-least-once streaming mode, set the
streaming_mode_at_least_once
service option .
Java
--dataflowServiceOptions=streaming_mode_at_least_once
Python
--dataflow_service_options=streaming_mode_at_least_once
Go
--dataflow_service_options=streaming_mode_at_least_once
If you don't specify the streaming_mode_at_least_once option, then
Dataflow uses exactly-once streaming mode.
If you set the streaming_mode_at_least_once option, Dataflow
automatically enables Streaming Engine with
resource-based billing .
To update the streaming mode on a running job,
launch a replacement job .
Select the streaming mode for a template
To select the streaming mode when you run a Dataflow streaming
template, perform the following steps:
Console
In the Google Cloud console, go to the Dataflow Jobs
page.
Go to Jobs
Click Create job from template .
Select the template that you want to run from the
Dataflow template drop-down menu.
For Streaming mode , select the streaming mode. If the template supports
only one mode, then this option is disabled.
gcloud
To enable at-least-once mode, set the streaming_mode_at_least_once option
in the additional-experiments flag:
--additional-experiments=streaming_mode_at_least_once
To enable exactly-once mode, set the streaming_mode_exactly_once option
in the additional-experiments flag:
--additional-experiments=streaming_mode_exactly_once
These two options are mutually exclusive. If you don't set one of these
options, then the template defaults to a streaming mode that is determined by
the template metadata. For more information, see
Custom templates .
REST
Use the additionalExperiments field in the
FlexTemplateRuntimeEnvironment
(Flex templates) or
RuntimeEnvironment
(classic templates) object.
{
addi t io nal Experime nts : [ "streaming_mode_at_least_once" ]
...
}
Custom templates
If you create a custom template that supports at-least-once processing, add the
following top-level fields to the template metadata file:
{
"streaming" : true ,
"supportsAtLeastOnce" : true ,
"supportsExactlyOnce" : true ,
"defaultStreamingMode" : "AT_LEAST_ONCE"
}
These metadata fields enable users to select the streaming mode when deploying
the template in the Google Cloud console. The defaultStreamingMode field
is optional and specifies the default streaming mode for the template. If you
don't specify defaultStreamingMode and the template supports both modes, then
exactly-once mode is the default.
For more information, see the following sections in the Dataflow
templates documentation:
Flex templates: Metadata
Classic templates: Use metadata in your pipeline code
View a job's streaming mode
To view the streaming mode for a job, go to the Jobs page in the
Google Cloud console.
Go to Jobs
The streaming mode is also listed on the job details page, in the Job
info panel.
Limitations
At-least-once streaming mode requires
Streaming Engine with
resource-based billing .
Pricing
At-least-once mode always uses
resource-based billing ,
where you're billed for the total resources that are consumed by your job.
The per-unit cost of
Streaming Engine Compute Units is
the same regardless of the streaming mode. However, in most cases a pipeline
consumes significantly fewer total resources when using at-least-once mode.
What's next
Learn more about exactly-once processing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
