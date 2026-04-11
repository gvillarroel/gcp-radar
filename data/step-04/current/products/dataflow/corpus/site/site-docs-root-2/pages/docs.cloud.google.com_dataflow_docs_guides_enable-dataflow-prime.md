---
title: "Use Dataflow Prime \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime
  title: "Use Dataflow Prime \_|\_ Google Cloud Documentation"
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
Use Dataflow Prime
Stay organized with collections
Save and categorize content based on your preferences.
Dataflow Prime is a serverless data processing platform for
Apache Beam pipelines. Based on Dataflow, Dataflow Prime
uses a compute and state-separated architecture. In the following cases,
Dataflow Prime might improve pipeline efficiency:
Your pipeline would benefit from Vertical Autoscaling .
Dataflow Prime supports both batch and streaming pipelines.
By default, Dataflow Prime uses
Dataflow Shuffle
and
Dataflow Runner v2
for batch pipelines.
SDK version support
Dataflow Prime supports the following Apache Beam SDKs:
Apache Beam Python SDK version 2.21.0 or later
Apache Beam Java SDK version 2.30.0 or later
Apache Beam Go SDK version 2.44.0 or later
To download the SDK package or to read the Release Notes, see
Apache Beam Downloads .
Dataflow Prime features
The following is the list of supported Dataflow Prime features for different kinds of pipelines:
Vertical Autoscaling (memory). Supports streaming pipelines in Python,
Java, and Go.
Job Visualizer. Supports batch pipelines in Python and Java.
Smart Recommendations. Supports both streaming and batch pipelines in Python and Java.
Data Pipelines. Supports both streaming and batch pipelines in Python and Java.
The features Job Visualizer, Smart Recommendations, and Data Pipelines
are also supported for non-Dataflow Prime jobs.
Vertical Autoscaling
This feature automatically adjusts the memory available to the
Dataflow worker VMs to fit the needs of the pipeline and
help prevent out-of-memory errors. In Dataflow Prime, Vertical
Autoscaling works alongside Horizontal Autoscaling to scale resources dynamically.
For more information,
see Vertical Autoscaling .
Job Visualizer
This feature lets you see the performance of a Dataflow job
and optimize the performance of the job by finding inefficient code, including
parallelization bottlenecks. In the Google Cloud console, you can click
any Dataflow job in the Jobs page to view details about the job.
You can also see the list of steps associated with each stage of the pipeline.
For more information,
see Execution details .
Smart Recommendations
This feature lets you optimize and troubleshoot
the pipeline based on the recommendations provided in the
Diagnostics tab of the job details page. In the Google Cloud console, you can click
any Dataflow job in the Jobs page to view details about the job.
For more information,
see Diagnostics .
Data Pipelines
This feature lets you schedule jobs, observe resource utilizations,
track data freshness objectives for streaming data, and optimize pipelines.
For more information, see Working with Data Pipelines .
Quota and limit requirements
Quotas and limits are the same for Dataflow and Dataflow Prime.
For more information, see Quotas and limits .
If you opt for Data Pipelines, there are additional
implications for quotas and regions .
Unsupported features
Dataflow Prime doesn't support the following:
Designating specific VM types by using the flag --worker_machine_type or
--machine_type for Python pipelines and --workerMachineType for Java
pipelines.
Designating specific VM types or CPU platforms by using experimental
parameters, such as --additional-experiments=min_cpu_platform=... or
--experiments=min_cpu_platform=... . Attempting to set a minimum CPU
platform with Dataflow Prime might result in an error such as: Setting
minimum CPU platform is not supported for the selected machine type
e2-standard-2.
Viewing or using SSH to log into worker VMs.
Flexible Resource Scheduling (FlexRS) .
Auto VM Selection. When you use Dataflow Prime, Auto VM Selection isn't
supported.
Using VPC Service Controls with
Vertical Autoscaling. If you enable Dataflow Prime and launch a new job
within a VPC Service Controls perimeter, the job uses Dataflow Prime
without Vertical Autoscaling.
NVIDIA Multi-Process Service (MPS) .
Java pipelines that meet the following requirements can use the MapState
and
SetState
classes:
use Streaming Engine
use Apache Beam SDK versions 2.58.0 and later
don't use Runner v2
All pipeline options not explicitly
mentioned previously or in the feature comparison table work
the same for Dataflow and Dataflow Prime.
Before using Dataflow Prime
To use Dataflow Prime, you can reuse your existing pipeline code
and also enable the Dataflow Prime option either through
Cloud Shell or programmatically.
Dataflow Prime is backward compatible with batch jobs that use
Dataflow Shuffle and streaming jobs that use Streaming Engine.
However, we recommend testing your pipelines with
Dataflow Prime before you use them in a production environment.
If your streaming pipeline is running in production, to use Dataflow Prime,
perform the following steps:
Stop the pipeline.
Enable Dataflow Prime .
Rerun the pipeline.
Enable Dataflow Prime
To enable Dataflow Prime for a pipeline:
Enable the Cloud Autoscaling API.
Enable the API
Dataflow Prime uses the Cloud Autoscaling API to dynamically adjust memory.
Enable Prime in your pipeline options.
You can set the pipeline options either programmatically or by using the command line. For supported Apache Beam SDK versions , enable the following flag:
Java
--dataflowServiceOptions = enable_prime
Python
Apache Beam Python SDK version 2.29.0 or later:
--dataflow_service_options = enable_prime
Apache Beam Python SDK version 2.21.0 to 2.28.0:
--experiments = enable_prime
Go
--dataflow_service_options = enable_prime
Disable Dataflow Prime
Sometimes, such as with certain Google-provided templates, Dataflow Prime
might be enabled by default. To explicitly disable
Dataflow Prime and use standard Dataflow, set the enable_prime
pipeline option to false .
Java
--dataflowServiceOptions = enable_prime = false
Python
Apache Beam Python SDK version 2.29.0 or later:
--dataflow_service_options = enable_prime = false
Apache Beam Python SDK version 2.21.0 to 2.28.0:
--experiments = enable_prime = false
Go
--dataflow_service_options = enable_prime = false
Use Dataflow Prime with templates
If you're using Dataflow templates, you can choose to
enable Dataflow Prime in one of the following ways:
For jobs launched from the Create job from template page:
Go to the Create job from template page.
Go to Create job from template
In the Additional experiment field, enter enable_prime .
For jobs launched from a template through the command line interface, pass the --additional-experiments=enable_prime flag.
To enable Dataflow Prime when you create a template, set the --experiments=enable_prime flag.
Use Dataflow Prime in Apache Beam notebooks
If you're using an
Apache Beam notebook ,
you can enable Dataflow Prime
programmatically
using PipelineOptions :
options = pipeline_options . PipelineOptions (
flags = [],
dataflow_service_options = [ 'enable_prime' ],
)
To learn more about setting Dataflow options in a notebook, see
Launch Dataflow jobs from a pipeline created in your notebook .
Feature comparison between Dataflow and Dataflow Prime
The following table compares the available features for both variants of
Dataflow.
Feature
Dataflow Prime
Dataflow
Runner v2
Default feature with no option to turn off for batch jobs and optional for streaming jobs
Default feature with an option to turn off for batch jobs and optional for streaming jobs
Dataflow Shuffle for batch jobs
Default feature with an option to turn off
Default feature with an option to turn off
Streaming Engine for streaming jobs
Optional feature for Java pipelines and always on for Python pipelines
Optional feature for Java pipelines and always on for Python pipelines since 2.45.0
Horizontal Autoscaling
Default feature with option to turn off
Default feature with option to turn off
Vertical Autoscaling
Default feature with option to turn off
Not applicable
Right fitting
Optional feature
Optional feature
Billing
Serverless billing
Standard billing
What's next
Read about Dataflow quotas .
Learn how to set pipeline options .
See available pipeline options for Java and Python pipelines.
Learn more about autotuning features for Dataflow Prime.
Learn more about Dataflow GPUs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
