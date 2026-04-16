---
title: "Install the Vertex AI SDK for Python \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/start/install-sdk-ref
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/start/install-sdk-ref
  title: "Install the Vertex AI SDK for Python \_|\_ Google Cloud Documentation"
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
Install the Vertex AI SDK for Python
Stay organized with collections
Save and categorize content based on your preferences.
Use the Vertex AI SDK for Python to automate your machine learning (ML) workflows.
This topic shows you how to install the Vertex AI SDK for Python. For more
information about the Vertex AI SDK, see the following resources:
To learn about the Vertex AI SDK for Python, see
Introduction to the Vertex AI SDK for Python .
To learn how to train a model using the Vertex AI SDK for Python, see the Train
a model using Vertex AI and the Python
SDK .
To learn about the classes and methods in the Vertex AI SDK for Python, see the
Vertex AI SDK reference .
Installation of the Vertex AI SDK for Python includes the following steps:
Create an isolated Python environment
Install the Vertex AI SDK package
Initialize the Vertex AI SDK
Create an isolated Python environment
A Python best practice is to install the Vertex AI SDK in an
isolated Python environment for each project. This helps prevent dependency,
version, and permissions conflicts. You can create an isolated environment for
using the command line in a shell or for using a notebook.
To create an isolated environment when you use the command line, activate a
venv environment . After
the venv environment is activated, you're ready to install the
Vertex AI SDK and run your Python scripts. For more information, see
Use venv to isolate dependencies
and Set up a Python development environment .
To use a notebook in an isolated environment, you can create a
Vertex AI Workbench instance. Then, install the Vertex AI SDK
and run your Python scripts from a notebook on your Vertex AI Workbench instance.
For more information, see
Create a Vertex AI Workbench instance .
Install or update the Vertex AI SDK package
To install or update the Vertex AI SDK, run the following command in your
virtual environment:
pip install --upgrade google-cloud-aiplatform
Initialize the Vertex AI SDK
After you install the Vertex AI SDK for Python, you must initialize the SDK with
your Vertex AI and Google Cloud details. For example, when you
initialize the SDK, you specify information such as your project name, region,
and your staging Cloud Storage bucket. The following method is an example of
a method that initializes the Vertex AI SDK.
def init_sample (
project : Optional [ str ] = None ,
location : Optional [ str ] = None ,
experiment : Optional [ str ] = None ,
staging_bucket : Optional [ str ] = None ,
credentials : Optional [ google . auth . credentials . Credentials ] = None ,
encryption_spec_key_name : Optional [ str ] = None ,
service_account : Optional [ str ] = None ,
):
import vertexai
vertexai . init (
project = project ,
location = location ,
experiment = experiment ,
staging_bucket = staging_bucket ,
credentials = credentials ,
encryption_spec_key_name = encryption_spec_key_name ,
service_account = service_account ,
)
What's next
Learn more about the
Vertex AI SDK .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
