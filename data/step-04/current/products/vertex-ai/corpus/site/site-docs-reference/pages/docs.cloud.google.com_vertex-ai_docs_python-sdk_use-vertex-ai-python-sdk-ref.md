---
title: "Introduction to the Vertex AI SDK for Python \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk-ref
  title: "Introduction to the Vertex AI SDK for Python \_|\_ Google Cloud Documentation"
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
Introduction to the Vertex AI SDK for Python
Stay organized with collections
Save and categorize content based on your preferences.
The Vertex AI SDK for Python helps you automate data ingestion, train models, and
get predictions on Vertex AI. The Vertex AI SDK uses Python code to
access the Vertex AI API so that you can programmatically accomplish most of what
you can do in the Google Cloud console.
To learn how to install or update the Vertex AI SDK for Python, see Install the
Vertex AI SDK for Python . For more information, see
the Vertex AI SDK for Python API reference documentation .
Why use the Vertex AI SDK
The Vertex AI SDK for Python is recommended if you're an experienced machine
learning (ML) and artificial intelligence (AI) engineer or a data scientist who
wants to programmatically automate your workflow. The Vertex AI SDK for Python is
similar to the Vertex AI Python client library, except the
Vertex AI SDK is higher-level and less granular. For more information, see
Understand the SDK and client library differences .
Write code with the Vertex AI SDK for Python
To use the Vertex AI SDK for Python:
Install the google-cloud-aiplatform package, which includes both the Vertex AI SDK for Python and the Vertex AI Python client library, by running the following command in your virtual environment:
pip install -- upgrade google - cloud - aiplatform
Use the following code to import the google.cloud.aiplatform namespace:
from google.cloud import aiplatform
Preview: To use features for the Vertex AI SDK for Python that are still in
preview , import vertexai.preview :
import vertexai.preview
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
Learn about the Vertex AI SDK for Python
See the following documentation:
Vertex AI SDK class overview : introduces the key classes and functionality in the Vertex AI SDK.
Python reference for Vertex AI : contains reference documentation for all of the namespaces, classes, methods, and properties in the google-cloud-aiplatform package, which includes the Vertex AI SDK, the Vertex AI SDK preview, and the Vertex AI Client libraries.
Try code samples and tutorials
Notebook tutorials show how to use the Vertex AI SDK for Python as part of a
larger workflow. For more information, see
Vertex AI notebook tutorials .
Code samples in the Vertex AI SDK for Python GitHub repository show you how to
complete individual tasks. For more information, see the
Vertex AI SDK for Python GitHub repository .
To see an example of using the Vertex AI SDK as part of a more comprehensive workflow,
run the "Custom training and online prediction" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
Understand the Vertex AI SDK and client library differences
When you install the Vertex AI SDK for Python, the Vertex AI Python client
library is also installed. The Vertex AI SDK and the
Vertex AI Python client library provide similar functionality with
different levels of granularity. The Vertex AI SDK operates at a
higher level of abstraction than the client library and is suitable for most
common data science workflows. If you need lower-level functionality, then use
the Vertex AI Python client library.
The Vertex AI SDK is available for Python and a Vertex AI client
library is available for Python, Java, and Node.js. To learn how to install the
Java or Node.js client library, see
Install the Vertex AI client libraries .
If a client library isn't available in your preferred programming language, you
can use the Vertex AI REST API. For more information, see the
Vertex AI REST reference .
Use Vertex AI Python client library and SDK together
If you use the Vertex AI SDK for Python and discover you need greater flexibility
or control, or if you need a method not included in the Vertex AI SDK, you
can use the Vertex AI Python client library in the same workflow. The
Vertex AI Python client library uses a different namespace to access the
Vertex AI API. The client library and the Vertex AI SDK for Python
namespaces can be used in the same Python script by adding an import line for
each in your Python script.
Import the Vertex AI Python client library namespace
The Vertex AI Python client library namespace is
google.cloud.aiplatform.gapic . This namespace maps to the
google.cloud.aiplatform_v1 namespace. These two namespaces can be used
interchangeably. To import the Python client library, include one of the
following in your Python script:
from google.cloud import aiplatform_v1
from google.cloud.aiplatform import gapic
What's next
Learn how to choose a training method .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
