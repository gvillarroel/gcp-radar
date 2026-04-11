---
title: "Quickstart: Develop and deploy agents on Vertex AI Agent Engine \_|\_ Vertex\
  \ AI Agent Builder \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-builder/agent-engine/quickstart
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity
source_metadata:
  url: https://docs.cloud.google.com/agent-builder/agent-engine/quickstart
  title: "Quickstart: Develop and deploy agents on Vertex AI Agent Engine \_|\_ Vertex\
    \ AI Agent Builder \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Develop and deploy agents on Vertex AI Agent Engine
This page demonstrates how to create and deploy an agent to
Vertex AI Agent Engine Runtime using the following agent frameworks:
LangGraph
LangChain
AG2
LlamaIndex Query Pipeline (preview)
This quickstart guides you through the following steps:
Set up your Google Cloud project.
Install the Vertex AI SDK for Python and your chosen framework.
Develop a currency exchange agent.
Deploy the agent to Vertex AI Agent Engine Runtime.
Test the deployed agent.
For the quickstart using Agent Development Kit, see Develop and deploy agents
on Vertex AI Agent Engine with Agent Development
Kit .
Before you begin
Note: To enable APIs, you need the serviceusage.services.enable permission. If you don't have this permission, ask your administrator to grant you
the Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) role.
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI and Cloud Storage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI and Cloud Storage APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
To get the permissions that
you need to use Vertex AI Agent Engine,
ask your administrator to grant you the
following IAM roles on your project:
Vertex AI User ( roles/aiplatform.user )
Storage Admin ( roles/storage.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Install and initialize the Vertex AI SDK for Python
Run the following command to install the Vertex AI SDK for Python and other
required packages:
LangGraph
pip install --upgrade --quiet google-cloud-aiplatform [ agent_engines,langchain ]>= 1 .112
LangChain
pip install --upgrade --quiet google-cloud-aiplatform [ agent_engines,langchain ]>= 1 .112
AG2
pip install --upgrade --quiet google-cloud-aiplatform [ agent_engines,ag2 ]>= 1 .112
LlamaIndex
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
pip install --upgrade --quiet google-cloud-aiplatform [ agent_engines,llama_index ]>= 1 .112
Authenticate as a user
Colab
Run the following code:
from google.colab import auth
auth . authenticate_user ( project_id = " PROJECT_ID " )
Cloud Shell
No action required.
Local Shell
Run the following command:
gcloud auth application-default login
Run the following code to import Vertex AI Agent Engine and
initialize the SDK:
(Optional) Before testing an agent you develop , you need to import Vertex AI Agent Engine and initialize the SDK as follows:
Google Cloud project
import vertexai
vertexai . init (
project = " PROJECT_ID " , # Your project ID.
location = " LOCATION " , # Your cloud region.
)
Where:
PROJECT_ID is the Google Cloud project ID under
which you develop and deploy agents
LOCATION is one of the supported regions .
Before deploying an agent , you need to import Vertex AI Agent Engine and
initialize the SDK as follows:
Google Cloud project
import vertexai
client = vertexai . Client (
project = " PROJECT_ID " , # Your project ID.
location = " LOCATION " , # Your cloud region.
)
Where:
PROJECT_ID is the Google Cloud project ID under
which you develop and deploy agents
LOCATION is one of the supported regions .
Develop an agent
Develop a currency exchange tool for your agent:
def get_exchange_rate (
currency_from : str = "USD" ,
currency_to : str = "EUR" ,
currency_date : str = "latest" ,
):
"""Retrieves the exchange rate between two currencies on a specified date."""
import requests
response = requests . get (
f "https://api.frankfurter.app/ { currency_date } " ,
params = { "from" : currency_from , "to" : currency_to },
)
return response . json ()
Instantiate an agent:
LangGraph
from vertexai import agent_engines
agent = agent_engines . LanggraphAgent (
model = "gemini-2.0-flash" ,
tools = [ get_exchange_rate ],
model_kwargs = {
"temperature" : 0.28 ,
"max_output_tokens" : 1000 ,
"top_p" : 0.95 ,
},
)
LangChain
from vertexai import agent_engines
agent = agent_engines . LangchainAgent (
model = "gemini-2.0-flash" ,
tools = [ get_exchange_rate ],
model_kwargs = {
"temperature" : 0.28 ,
"max_output_tokens" : 1000 ,
"top_p" : 0.95 ,
},
)
AG2
from vertexai import agent_engines
agent = agent_engines . AG2Agent (
model = "gemini-2.0-flash" ,
runnable_name = "Get Exchange Rate Agent" ,
tools = [ get_exchange_rate ],
)
LlamaIndex
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
from vertexai.preview import reasoning_engines
def runnable_with_tools_builder ( model , runnable_kwargs = None , ** kwargs ):
from llama_index.core.query_pipeline import QueryPipeline
from llama_index.core.tools import FunctionTool
from llama_index.core.agent import ReActAgent
llama_index_tools = []
for tool in runnable_kwargs . get ( "tools" ):
llama_index_tools . append ( FunctionTool . from_defaults ( tool ))
agent = ReActAgent . from_tools ( llama_index_tools , llm = model , verbose = True )
return QueryPipeline ( modules = { "agent" : agent })
agent = reasoning_engines . LlamaIndexQueryPipelineAgent (
model = "gemini-2.0-flash" ,
runnable_kwargs = { "tools" : [ get_exchange_rate ]},
runnable_builder = runnable_with_tools_builder ,
)
Test the agent locally:
LangGraph
agent . query ( input = { "messages" : [
( "user" , "What is the exchange rate from US dollars to SEK today?" ),
]})
LangChain
agent . query (
input = "What is the exchange rate from US dollars to SEK today?"
)
AG2
agent . query (
input = "What is the exchange rate from US dollars to SEK today?"
)
LlamaIndex
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
agent . query (
input = "What is the exchange rate from US dollars to SEK today?"
)
Deploy an agent
Deploy the agent by creating a reasoningEngine resource in Vertex AI:
LangGraph
remote_agent = client . agent_engines . create (
agent ,
config = {
"requirements" : [ "google-cloud-aiplatform[agent_engines,langchain]" ],
},
)
LangChain
remote_agent = client . agent_engines . create (
agent ,
config = {
"requirements" : [ "google-cloud-aiplatform[agent_engines,langchain]" ],
},
)
AG2
remote_agent = client . agent_engines . create (
agent ,
config = {
"requirements" : [ "google-cloud-aiplatform[agent_engines,ag2]" ],
},
)
LlamaIndex
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
remote_agent = client . agent_engines . create (
agent ,
config = {
"requirements" : [ "google-cloud-aiplatform[agent_engines,llama_index]" ],
},
)
Use an agent
Test the deployed agent by sending a query:
LangGraph
remote_agent . query ( input = { "messages" : [
( "user" , "What is the exchange rate from US dollars to SEK today?" ),
]})
LangChain
remote_agent . query (
input = "What is the exchange rate from US dollars to SEK today?"
)
AG2
remote_agent . query (
input = "What is the exchange rate from US dollars to SEK today?"
)
LlamaIndex
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
remote_agent . query (
input = "What is the exchange rate from US dollars to SEK today?"
)
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
remote_agent . delete ( force = True )
What's next
Explore the notebooks .
Set up the environment .
Develop an agent .
Deploy an agent .
Use an agent .
Manage an agent .
Get support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
