---
title: "Create or reuse an Example Store instance \_|\_ Vertex AI Agent Builder \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-builder/agent-engine/example-store/create-examplestore
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity
source_metadata:
  url: https://docs.cloud.google.com/agent-builder/agent-engine/example-store/create-examplestore
  title: "Create or reuse an Example Store instance \_|\_ Vertex AI Agent Builder\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Agent Builder
Guides
Send feedback
Create or reuse an Example Store instance
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page shows you how to create a new Example Store instance or reuse an
existing Example Store instance. You can store your examples in an Example Store
when developing your LLM application and dynamically retrieve them to use in
your LLM prompts.
To teach an LLM or an agent using few-shot examples, you must
first create or reuse an Example Store instance for your project and location,
and then upload examples to it.
For each project and location, you can have a
maximum of 50 Example Store instances. After you create an Example Store instance, you
can share it across multiple LLM applications and agents.
There are two ways to provision an Example Store instance:
Create a new Example Store instance : When you create a new Example Store
instance, you need to specify the embedding model, which Example Store uses to
determine which examples are relevant to users' queries. Example Store
supports the following embedding models:
text-embedding-005
text-multilingual-embedding-002
You can't change an embedding model after you create the Example Store
instance. If you want to use a different embedding model, you must create
another example store. For more information about text embeddings, see
Get text embeddings .
Reuse an existing Example Store instance : Example Store instances are designed to be used by
multiple agents, so you can access the stored examples across LLM applications.
You can't change the embedding model when you reuse an existing Example Store
instance.
Prerequisites
Before you use the Python samples on this page, install and initialize the
Vertex AI SDK for Python in your local Python environment.
Run the following command to install the Vertex AI SDK for Python for Example Store.
pip install --upgrade google-cloud-aiplatform> = 1 .87.0
Use the following code sample to import and initialize the SDK for Example Store.
import vertexai
from vertexai.preview import example_stores
vertexai . init (
project = " PROJECT_ID " ,
location = " LOCATION "
)
Replace the following:
PROJECT_ID : Your project ID.
LOCATION : Your region. Only us-central1 is supported.
Create an Example Store instance
Use the following samples to create an Example Store instance for a specified project
and location. Note that creating an Example Store instance takes a few minutes.
Python
Before trying this sample, follow the Python setup instructions in the
Vertex AI Agent Builder quickstart using
client libraries .
To authenticate to Vertex AI Agent Builder, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import vertexai
from vertexai.preview import example_stores
vertexai . init (
project = " PROJECT_ID " ,
location = " LOCATION "
)
my_example_store = example_stores . ExampleStore . create (
example_store_config = example_stores . ExampleStoreConfig (
vertex_embedding_model = " EMBEDDING_MODEL "
)
)
Replace the following:
PROJECT_ID : Your project ID.
LOCATION : The region where you want to create the example
store. The only region supported is us-central1 .
EMBEDDING_MODEL : Embedding model that the
Example Store instance uses to determine which examples are relevant to users' queries. Example Store
supports the following embedding models:
text-embedding-004
text-multilingual-embedding-002
REST
To create an ExampleStore
resource, send a POST request by using the
exampleStores.create
method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your project ID.
LOCATION : The region where you want to create the Example
Store instance. The only region supported is us-central1 .
DISPLAY_NAME : The name of the Example Store instance.
EMBEDDING_MODEL : Embedding model that the
Example Store instance uses to determine which examples are relevant to users' queries. Example Store
supports the following embedding models:
textembedding-gecko@003
text-embedding-004
text-multilingual-embedding-002
HTTP method and URL:
POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT_ID /locations/ LOCATION /exampleStores
Request JSON body:
{
"display_name": " DISPLAY_NAME ",
"example_store_config": {"vertex_embedding_model": EMBEDDING_MODEL }
}
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT_ID /locations/ LOCATION /exampleStores"
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT_ID /locations/ LOCATION /exampleStores" | Select-Object -Expand Content
You should receive a JSON response similar to the following, where EXAMPLE_STORE_ID
represents the ID of the Example Store instance.
Response
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /exampleStores/ EXAMPLE_STORE_ID /operations/ ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.aiplatform.v1beta1.CreateExampleStoreOperationMetadata",
"genericMetadata": {
"createTime": "2024-10-10T02:06:10.417111Z",
"updateTime": "2024-10-10T02:06:10.417111Z"
}
}
}
Reuse an existing Example Store instance
Use the following sample to reuse an existing Example Store instance for a specified
project and location.
Python
Before trying this sample, follow the Python setup instructions in the
Vertex AI Agent Builder quickstart using
client libraries .
To authenticate to Vertex AI Agent Builder, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import vertexai
from vertexai.preview import example_stores
vertexai . init (
project = " PROJECT_ID " ,
location = " LOCATION "
)
example_store = example_stores . ExampleStore (
" EXAMPLE_STORE_NAME " )
Replace the following:
PROJECT_ID : Your project ID.
LOCATION : The region where you want to create the example
store. The only region supported is us-central1 .
EXAMPLE_STORE_NAME :
Name of the Example Store instance you want to reuse.
What's next
Upload examples to the Example Store instance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
