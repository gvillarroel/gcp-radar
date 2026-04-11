---
title: "Dataflow components \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/pipelines/dataflow-component
  title: "Dataflow components \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Reference
Send feedback
Dataflow components
Stay organized with collections
Save and categorize content based on your preferences.
The Dataflow components let you submit Apache Beam jobs to
Dataflow for execution. In Dataflow, a
Job
resource represents a Dataflow job.
The Google Cloud SDK includes the
following operators for creating Job resources and monitor their execution:
DataflowFlexTemplateJobOp
DataflowPythonJobOp
Additionally, the Google Cloud SDK includes the
WaitGcpResourcesOp
component, which you can use to mitigate costs while running
Dataflow jobs.
DataflowFlexTemplateJobOp
The DataflowFlexTemplateJobOp
operator lets you create a
Vertex AI Pipelines component to launch a
Dataflow Flex Template .
In Dataflow, a LaunchFlexTemplateParameter
resource represents a Flex Template to launch. This component creates a
LaunchFlexTemplateParameter resource and then requests Dataflow to
create a job by launching the template. If the template is launched
successfully, Dataflow returns a Job
resource.
The Dataflow Flex Template component terminates upon receiving a Job
resource from Dataflow. The component outputs a job_id as a
serialized gcp_resources proto . You
can pass this parameter to a WaitGcpResourcesOp
component, to wait for the Dataflow job to complete.
DataflowPythonJobOp
The DataflowPythonJobOp
operator lets you create a Vertex AI Pipelines component that prepares
data by submitting a Python-based Apache Beam job to Dataflow for
execution.
The Python code of the Apache Beam job runs with Dataflow Runner.
When you run your pipeline with the Dataflow service, the runner
uploads your executable code to the location specified by the python_module_path parameter
and dependencies to a Cloud Storage bucket (specified by temp_location ), and then creates a
Dataflow job that executes your Apache Beam pipeline on managed resources in Google Cloud.
To learn more about the Dataflow Runner, see
Using the Dataflow Runner .
The Dataflow Python component accepts a list of arguments
that are passed using the Beam Runner to your Apache Beam
code. These arguments are specified by args . For example, you can use these
arguments to set the
apache_beam.options.pipeline_options to
specify a network, a subnetwork, customer-managed encryption key (CMEK), and
other options when you run Dataflow jobs.
WaitGcpResourcesOp
Dataflow jobs can often take long time to complete. The costs of
a busy-wait container (the container that launches Dataflow job and
wait for the result) can become expensive.
After submitting the Dataflow job using the Beam runner,
the DataflowPythonJobOp
component terminates immediately and returns a job_id output parameter as a
serialized gcp_resources proto . You
can pass this parameter to a WaitGcpResourcesOp component, to wait for the
Dataflow job to complete.
dataflow_python_op = DataflowPythonJobOp (
project = project_id ,
location = location ,
python_module_path = python_file_path ,
temp_location = staging_dir ,
requirements_file_path = requirements_file_path ,
args = [ '--output' , OUTPUT_FILE ],
)
dataflow_wait_op = WaitGcpResourcesOp (
gcp_resources = dataflow_python_op . outputs [ "gcp_resources" ]
)
Vertex AI Pipelines optimizes the WaitGcpResourcesOp to execute it in a
serverless fashion, and has zero cost.
If DataflowPythonJobOp and DataflowFlexTemplateJobOp don't meet your
requirements, you can also create your own component that outputs the
gcp_resources parameter and pass it to the WaitGcpResourcesOp component.
For more information about how to create gcp_resources output parameter, see
Write a component to show a Google Cloud console link .
API reference
For component reference, see the
Google Cloud SDK reference for Dataflow components .
For Dataflow resource reference, see the following API reference pages:
LaunchFlexTemplateParameter resource
Job resource
Tutorials
Get started with the Dataflow Flex Template component
Get started with the Dataflow Python Job component
Specify a network and subnetwork
Using customer-managed encryption keys (CMEK)
Version history and release notes
To learn more about the version history and changes to the Google Cloud Pipeline Components SDK, see the Google Cloud Pipeline Components SDK Release Notes .
Technical support contacts
If you have any questions, reach out to
kubeflow-pipelines-components@google.com .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
