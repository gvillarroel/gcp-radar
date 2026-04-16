---
title: "Quickstart: Google Cloud Pipeline Components \_|\_ Vertex AI \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/pipelines/components-quickstart
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/pipelines/components-quickstart
  title: "Quickstart: Google Cloud Pipeline Components \_|\_ Vertex AI \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Send feedback
Quickstart: Google Cloud Pipeline Components
Stay organized with collections
Save and categorize content based on your preferences.
This quickstart guides you through the installation of the
Google Cloud Pipeline Components (GCPC) SDK.
Install latest release
Use the following command to install the Google Cloud SDK from the Python
Package Index (PyPI):
pip install -- upgrade google - cloud - pipeline - components
Import a prebuilt component by using the Google Cloud SDK
After you install the Google Cloud SDK, you can use it to import a
prebuilt component.
For SDK reference information for supported components, see
the Google Cloud SDK documentation .
For example, you can use the following code to import and use the
Dataflow component in a pipeline.
from google_cloud_pipeline_components.v1.dataflow import DataflowPythonJobOp
from kfp import dsl
@dsl . pipeline (
name = PIPELINE_NAME ,
description = 'Dataflow launch python pipeline'
)
def pipeline (
python_file_path : str = 'gs://ml-pipeline-playground/samples/dataflow/wc/wc.py' ,
project_id : str = PROJECT_ID ,
location : str = LOCATION ,
staging_dir : str = PIPELINE_ROOT ,
requirements_file_path : str = 'gs://ml-pipeline-playground/samples/dataflow/wc/requirements.txt' ,
):
dataflow_python_op = DataflowPythonJobOp (
project = project_id ,
location = location ,
python_module_path = python_file_path ,
temp_location = staging_dir ,
requirements_file_path = requirements_file_path ,
args = [ '--output' , OUTPUT_FILE ],
)
What's next
Read the Introduction to Google Cloud Pipeline Components .
See all tutorials that use the google_cloud_pipeline_components
SDK .
Get started with Dataflow components .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
