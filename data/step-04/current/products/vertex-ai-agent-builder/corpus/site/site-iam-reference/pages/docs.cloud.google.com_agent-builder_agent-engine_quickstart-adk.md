---
title: "Quickstart: Develop and deploy agents on Vertex AI Agent Engine with Agent\
  \ Development Kit \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-builder/agent-engine/quickstart-adk
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity
source_metadata:
  url: https://docs.cloud.google.com/agent-builder/agent-engine/quickstart-adk
  title: "Quickstart: Develop and deploy agents on Vertex AI Agent Engine with Agent\
    \ Development Kit \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation"
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
Develop and deploy agents on Vertex AI Agent Engine with Agent Development Kit
This page demonstrates how to create and deploy an agent to
Vertex AI Agent Engine Runtime using the Agent Development Kit
(ADK) . This
quickstart guides you through the following steps:
Set up your Google Cloud project.
Install the Vertex AI SDK for Python and ADK.
Develop a currency exchange agent.
Deploy the agent to Vertex AI Agent Engine Runtime.
Test the deployed agent.
You can also use the following alternative quickstarts for ADK:
ADK quickstart :
The ADK quickstart runs entirely on your machine and assumes you're using a
local IDE and terminal access.
Agent Starter
Pack : a collection
of production-ready generative AI agent templates built for
Vertex AI Agent Engine.
For the quickstart using supported
frameworks
other than Agent Development Kit, see Develop and deploy agents on
Vertex AI Agent Engine .
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
pip install --upgrade --quiet google-cloud-aiplatform [ agent_engines,adk ]>= 1 .112
Authenticate as a user
Local Shell
Run the following command:
gcloud auth application-default login
Colab
Run the following code:
from google.colab import auth
auth . authenticate_user ( project_id = " PROJECT_ID " )
Cloud Shell
No action required.
Run the following code to import Vertex AI Agent Engine and initialize the SDK:
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
from google.adk.agents import Agent
from vertexai import agent_engines
agent = Agent (
model = "gemini-2.0-flash" ,
name = 'currency_exchange_agent' ,
tools = [ get_exchange_rate ],
)
app = agent_engines . AdkApp ( agent = agent )
Test the agent locally:
Note: Testing an ADK agent locally uses in-memory sessions.
async for event in app . async_stream_query (
user_id = " USER_ID " ,
message = "What is the exchange rate from US dollars to SEK today?" ,
):
print ( event )
where USER_ID is a user-defined ID with a character limit of 128.
Deploy an agent
Deploy the agent by creating a reasoningEngine resource in Vertex AI:
Note: Deploying an ADK agent to Vertex AI Agent Engine automatically generates a managed session resource. You can delete the managed session resource along with the agent in the Clean-up section .
remote_agent = client . agent_engines . create (
agent = app ,
config = {
"requirements" : [ "google-cloud-aiplatform[agent_engines,adk]" ],
"staging_bucket" : " STAGING_BUCKET " ,
}
)
where STAGING_BUCKET is a Cloud Storage bucket prefixed by gs:// .
Use an agent
Test the deployed agent by sending a query:
async for event in remote_agent . async_stream_query (
user_id = " USER_ID " ,
message = "What is the exchange rate from US dollars to SEK today?" ,
):
print ( event )
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
