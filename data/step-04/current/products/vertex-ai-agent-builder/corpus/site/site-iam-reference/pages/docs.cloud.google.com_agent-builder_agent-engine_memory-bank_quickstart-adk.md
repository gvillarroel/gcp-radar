---
title: "Quickstart with Agent Development Kit \_|\_ Vertex AI Agent Builder \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-adk
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity
source_metadata:
  url: https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-adk
  title: "Quickstart with Agent Development Kit \_|\_ Vertex AI Agent Builder \_|\_\
    \ Google Cloud Documentation"
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
Quickstart with Agent Development Kit
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial demonstrates how you can use Memory Bank with ADK to manage long-term memories. After you configure your Agent Development Kit (ADK) agent to use Memory Bank, your agent orchestrates calls to Memory Bank to manage long-term memories for you.
Using Memory Bank with ADK involves the following steps:
Create your ADK agent and runner . ADK runners connect your agent to services that provide session and memory management.
Interact with your agent to dynamically generate long-term memories that are accessible across sessions.
Clean up .
To make calls directly to Memory Bank without ADK orchestration, see Quickstart with Agent Engine SDK . Using the Agent Engine SDK is helpful for understanding how Memory Bank generates memories or for inspecting the contents of Memory Bank.
Important: ADK primarily uses asynchronous functions . If you're running code in a notebook like Colab, you can directly await async functions because an event loop is already running. If you're running this code as a standard Python script, you need to wrap your async function calls with asyncio.run() to create and manage an event loop to execute your async functions. Otherwise, you might get an error like 'await' outside function .
To see an example of using Memory Bank with ADK,
run the "Get started with Memory Bank on ADK" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
Manage memories with ADK memory service and Memory Bank
VertexAiMemoryBankService is an ADK wrapper around Memory Bank that is defined by ADK's BaseMemoryService . You can define callbacks and tools that interact with the memory service to read and write memories.
The VertexAiMemoryBankService interface includes:
memory_service.add_session_to_memory triggers a GenerateMemories request to Memory Bank using all of the events in the provided adk.Session as the source content. You can orchestrate calls to this method using callback_context.add_session_to_memory in your callbacks.
from google.adk.agents.callback_context import CallbackContext
async def add_session_to_memory_callback ( callback_context : CallbackContext ):
await callback_context . add_session_to_memory ()
return None
memory_service.add_events_to_memory which triggers a GenerateMemories request to Memory Bank using a subset of events. You can orchestrate calls to this method using callback_context.add_events_to_memory in your callbacks.
from google.adk.agents.callback_context import CallbackContext
async def add_events_to_memory_callback ( callback_context : CallbackContext ):
await callback_context . add_events_to_memory ( events = callback_context . session . events [ - 5 : - 1 ])
return None
memory_service.search_memory triggers a RetrieveMemories request to Memory Bank to fetch relevant memories for the current user_id and app_name . You can orchestrate calls to this method using built-in memory tools ( LoadMemoryTool or PreloadMemoryTool ) or a custom tool that invokes tool_context.search_memory .
Before you begin
To complete the steps demonstrated in this tutorial, you must first follow the steps in the Getting started section of the Set up Memory Bank page.
Set environment variables
To use ADK, set your environment variables:
import os
os . environ [ "GOOGLE_GENAI_USE_VERTEXAI" ] = "TRUE"
os . environ [ "GOOGLE_CLOUD_PROJECT" ] = " PROJECT_ID "
os . environ [ "GOOGLE_CLOUD_LOCATION" ] = " LOCATION "
Replace the following:
PROJECT_ID : Your project ID.
LOCATION : Your region. See the supported regions for Memory Bank.
Create your ADK agent
To create a memory-enabled agent, set up tools and callbacks that orchestrate calls to your memory service.
Define a memory generation callback
To orchestrate calls for memory generation, create a callback function that triggers memory generation . You can either send a subset of events (with callback_context.add_events_to_memory ) or all of the events in a session (with callback_context.add_session_to_memory ) to be processed in the background:
from google.adk.agents.callback_context import CallbackContext
async def generate_memories_callback ( callback_context : CallbackContext ):
# Option 1 (Recommended): Send events to Memory Bank for memory generation,
# which is ideal for incremental processing of events.
await callback_context . add_events_to_memory (
events = callback_context . session . events [ - 5 : - 1 ])
# Option 2: Send the full session to Memory Bank for memory generation.
# It's recommended to only call this at the end of a session to minimize
# how many times a single event is re-processed.
await callback_context . add_session_to_memory ()
return None
Define a memory retrieval tool
When developing your ADK agent , include a memory tool that controls when the agent retrieves memories and how memories are included in the prompt.
If you use PreloadMemoryTool , your agent will retrieve memories at the start of each turn and include the retrieved memories in the system instruction, which is good for establishing baseline context about the user. If you use LoadMemoryTool , the model will call this tool when it decides that memories are necessary to answer the user query.
from google import adk
from google.adk.tools.load_memory_tool import LoadMemoryTool
from google.adk.tools.preload_memory_tool import PreloadMemoryTool
memory_retrieval_tools = [
# Option 1: Retrieve memories at the start of every turn.
PreloadMemoryTool (),
# Option 2: Retrieve memories via tool calls. The model will only call this tool
# when it decides that memories are necessary to respond to the user query.
LoadMemoryTool ()
]
agent = adk . Agent (
model = "gemini-2.5-flash" ,
name = 'stateful_agent' ,
instruction = """You are a Vehicle Voice Agent, designed to assist users with information and in-vehicle actions.
1. **Direct Action:** If a user requests a specific vehicle function (e.g., "turn on the AC"), execute it immediately using the corresponding tool. You don't have the outcome of the actual tool execution, so provide a hypothetical tool execution outcome.
2. **Information Retrieval:** Respond concisely to general information requests with your own knowledge (e.g., restaurant recommendation).
3. **Clarity:** When necessary, try to seek clarification to better understand the user's needs and preference before taking an action.
4. **Brevity:** Limit responses to under 30 words.
""" ,
tools = memory_retrieval_tools ,
after_agent_callback = generate_memories_callback
)
Alternatively, you can create your own custom tool to retrieve memories, which is helpful for when you want to provide instructions to your agent on when to retrieve memories:
from google import adk
from google.adk.tools import ToolContext , FunctionTool
async def search_memories ( query : str , tool_context : ToolContext ):
"""Query this tool when you need to fetch information about user preferences."""
return await tool_context . search_memory ( query )
agent = adk . Agent (
model = "gemini-2.5-flash" ,
name = 'stateful_agent' ,
instruction = """...""" ,
tools = [ FunctionTool ( func = search_memories )],
after_agent_callback = generate_memories_callback
)
Define an ADK Memory Bank memory service and runtime
After you've created your memory-enabled agent, you need to link it to a memory service. The process of configuring your ADK memory service depends on where your ADK agent runs , which orchestrates the execution of your agents, tools, and callbacks.
Create an Agent Engine instance
Note: Skip this section if you already have an existing Agent Engine instance that you want to use for Memory Bank.
You first need to create an Agent Engine instance to use for Memory Bank. This step is optional if you're using Agent Engine Runtime to deploy your agent. For more information on customizing your Memory Bank behavior, see the Configure your Agent Engine instance for Memory Bank section on the Set up Memory Bank page.
import vertexai
client = vertexai . Client (
project = " PROJECT_ID " ,
location = " LOCATION "
)
# If you don't have an Agent Engine instance already, create an Agent Engine
# Memory Bank instance using the default configuration.
agent_engine = client . agent_engines . create ()
# Optionally, print out the Agent Engine resource name. You will need the
# resource name if you want to interact with your Agent Engine instance later on.
print ( agent_engine . api_resource . name )
agent_engine_id = agent_engine . api_resource . name . split ( "/" )[ - 1 ]
Replace the following:
PROJECT_ID : Your project ID.
LOCATION : Your region. See the supported regions for Memory Bank.
Create an ADK runtime
Pass the Agent Engine ID to the runtime or deployment scripts so that your agent uses Memory Bank as the ADK memory service.
Local runner
adk.Runner is generally used in a local environment, like Colab. In this case, you need to directly create the memory service and runner.
import asyncio
from google.adk.memory import VertexAiMemoryBankService
from google.adk.sessions import VertexAiSessionService
from google.genai import types
memory_service = VertexAiMemoryBankService (
project = " PROJECT_ID " ,
location = " LOCATION " ,
agent_engine_id = " AGENT_ENGINE_ID " ,
)
# You can use any ADK session service. This example uses Agent Engine Sessions.
session_service = VertexAiSessionService (
project = " PROJECT_ID " ,
location = " LOCATION " ,
agent_engine_id = " AGENT_ENGINE_ID " ,
)
runner = adk . Runner (
agent = agent ,
app_name = " APP_NAME " ,
session_service = session_service ,
memory_service = memory_service
)
async def call_agent ( query , session , user_id ):
content = types . Content ( role = 'user' , parts = [ types . Part ( text = query )])
events = runner . run_async (
user_id = user_id , session_id = session , new_message = content )
async for event in events :
if event . is_final_response ():
final_response = event . content . parts [ 0 ] . text
print ( "Agent Response: " , final_response )
Replace the following:
PROJECT_ID : Your project ID.
LOCATION : Your region. See the supported regions for Memory Bank.
APP_NAME : ADK app name. The app name will be included in the generated memories' scope dictionary so that memories are isolated across both users and apps.
AGENT_ENGINE_ID : The Agent Engine ID to use for Memory Bank and Sessions. For example, 456 in
projects/my-project/locations/us-central1/reasoningEngines/456 .
Agent Engine
The Agent Engine ADK template ( AdkApp ) can be used both locally and to deploy an ADK agent to Agent Engine Runtime. When deployed on Agent Engine Runtime, the Agent Engine ADK template uses VertexAiMemoryBankService as the default memory service, using the same Agent Engine instance for Memory Bank as the Agent Engine Runtime. So, you can create your Memory Bank instance and deploy to a runtime in a single step.
See Configure Agent Engine for more details on setting up your Agent Engine Runtime, including how to customize the behavior of your Memory Bank.
Use the following code to deploy your memory-enabled ADK agent to Agent Engine Runtime:
import asyncio
import vertexai
from vertexai.agent_engines import AdkApp
client = vertexai . Client (
project = " PROJECT_ID " ,
location = " LOCATION "
)
adk_app = AdkApp ( agent = agent )
# Create a new Agent Engine with your agent deployed to Agent Engine Runtime.
# The Agent Engine instance will also include an empty Memory Bank.
agent_engine = client . agent_engines . create (
agent_engine = adk_app ,
config = {
"staging_bucket" : " STAGING_BUCKET " ,
"requirements" : [ "google-cloud-aiplatform[agent_engines,adk]" ]
}
)
# Alternatively, update an existing Agent Engine to deploy your agent to Agent Engine Runtime.
# Your agent will have access to the Agent Engine instance's existing memories.
agent_engine = client . agent_engines . update (
name = agent_engine . api_resource . name ,
agent_engine = adk_app ,
config = {
"staging_bucket" : " STAGING_BUCKET " ,
"requirements" : [ "google-cloud-aiplatform[agent_engines,adk]" ]
}
)
async def call_agent ( query , session_id , user_id ):
async for event in agent_engine . async_stream_query (
user_id = user_id ,
session_id = session_id ,
message = query ,
):
print ( event )
Replace the following:
PROJECT_ID : Your project ID.
LOCATION : Your region. See the supported regions for Memory Bank.
STAGING_BUCKET : Your Cloud Storage bucket to use for staging your Agent Engine Runtime.
When run locally, the ADK template uses InMemoryMemoryService as the default memory service. However, you can override the default memory service to use VertexAiMemoryBankService :
def memory_bank_service_builder ():
return VertexAiMemoryBankService (
project = " PROJECT_ID " ,
location = " LOCATION " ,
agent_engine_id = " AGENT_ENGINE_ID "
)
adk_app = AdkApp (
agent = adk_agent ,
# Override the default memory service.
memory_service_builder = memory_bank_service_builder
)
async def call_agent ( query , session_id , user_id ):
# adk_app is a local agent. If you want to deploy it to Agent Engine Runtime,
# use `client.agent_engines.create(...)` or `client.agent_engines.update(...)`
# and call the returned Agent Engine instance instead.
async for event in adk_app . async_stream_query (
user_id = user_id ,
session_id = session_id ,
message = query ,
):
print ( event )
Replace the following:
PROJECT_ID : Your project ID.
LOCATION : Your region. See the supported regions for Memory Bank.
AGENT_ENGINE_ID : The Agent Engine ID to use for Memory Bank. For example, 456 in
projects/my-project/locations/us-central1/reasoningEngines/456 .
Cloud Run
To see an example of using Memory Bank with Cloud Run,
run the "Get started with Sessions and Memory Bank for ADK agents in Cloud Run" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
To deploy your agent to Cloud Run, refer to the instructions in the ADK documentation to learn how to define your agent to deploy to Cloud Run.
adk deploy cloud_run \
...
--memory_service_uri = agentengine:// AGENT_ENGINE_ID
GKE
To see an example of using Memory Bank with Google Kubernetes Engine,
run the "Get started with Sessions and Memory Bank for ADK agents in Google Kubernetes Engine" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
To deploy your agent to Google Kubernetes Engine (GKE), refer to the instructions in the ADK documentation to learn how to define your agent to deploy to GKE.
adk deploy gke \
...
--memory_service_uri = agentengine:// AGENT_ENGINE_ID
ADK Web
Important: ADK Web is not meant for use in production deployments. You should use ADK Web for development and debugging purposes only.
The ADK web interface lets you test your agents directly in the browser.
export GOOGLE_CLOUD_PROJECT = " PROJECT_ID "
export GOOGLE_CLOUD_LOCATION = " LOCATION "
adk web --memory_service_uri = agentengine:// AGENT_ENGINE_ID
Replace the following:
PROJECT_ID : Your project ID.
LOCATION : Your region. See the supported regions for Memory Bank.
AGENT_ENGINE_ID : The Agent Engine ID to use for Memory Bank. For example, 456 in
projects/my-project/locations/us-central1/reasoningEngines/456 .
Interact with your agent
After defining your agent and setting up Memory Bank, you can interact with your agent. If you provided a callback to trigger memory generation when initializing your agent, memories generation will be triggered every time that the agent is invoked.
Memories will be stored using the scope {"user_id": USER_ID, "app_name": APP_NAME} corresponding to the user ID and app name used to execute your agent.
The method of interacting with your agent depends on its execution environment:
Local runner
# Use `asyncio.run(session_service.create(...))` if you're running this
# code as a standard Python script.
session = await session_service . create_session (
app_name = " APP_NAME " ,
user_id = " USER_ID "
)
# Use `asyncio.run(call_agent(...))` if you're running this code as a
# standard Python script.
await call_agent (
"Can you fix the temperature?" ,
session . id ,
" USER_ID "
)
Replace the following:
APP_NAME : App name for your runner.
USER_ID : An identifier for your user. Memories generated from this session are keyed by this opaque identifier. The generated memories' scope is stored as {"user_id": " USER_ID "} .
Agent Engine
When using the Agent Engine ADK template, you can call your Agent Engine Runtime to interact with memory and sessions.
# Use `asyncio.run(agent_engine.async_create_session(...))` if you're
# running this code as a standard Python script.
session = await agent_engine . async_create_session ( user_id = " USER_ID " )
# Use `asyncio.run(call_agent(...))` if you're running this code as a
# standard Python script.
await call_agent (
"Can you fix the temperature?" ,
session . get ( "id" ),
" USER_ID "
)
Replace the following:
USER_ID : An identifier for your user. Memories generated from this session are keyed by this opaque identifier. The generated memories' scope is stored as {"user_id": " USER_ID "} .
Cloud Run
Refer to the Testing your agent section of the ADK Cloud Run deployment documentation.
GKE
Refer to the Testing your agent section of the ADK GKE deployment documentation.
ADK Web
To use ADK Web, navigate to the local server at http://localhost:8000 .
By default, ADK Web will set the user ID to user . To override the default user ID, include userId in the query parameters, like http://localhost:8000?userId=YOUR_USER_ID .
For more information, refer to the ADK Web page in the ADK documentation.
Example interaction
First session
If you used the PreloadMemoryTool , the agent will try to retrieve memories at the beginning of each turn to access preferences the user previously communicated to the agent. During the agent's first interaction with the user, there are no available memories to be retrieved. So, the agent doesn't know any user preferences, such as their preferred temperature, as shown in the following example:
First turn:
User : "Can you fix the temperature?"
(Tool Call) : ADK tries to fetch memories; no memories are available.
Model : "What temperature do you prefer?"
(Callback) : ADK triggers memory generation. No memories are extracted.
Second turn:
User : I'm comfortable at 71 degrees.
(Tool Call) : ADK tries to fetch memories; no memories are available.
Model : Ok, I've updated the temperature to 71 degrees.
(Callback) : ADK triggers memory generation. Memory "I like the temperature 71 degrees" is created.
Second session
The extracted memory will be available for the next session for the same app name and user ID. If the user provides similar or contradictory information to existing memories, the new information will be consolidated with the existing memories .
First turn
User : Fix the temperature. It's so uncomfortable!
(Tool Call) : ADK tries to fetch memories. Memory "I like the temperature 71 degrees" is retrieved.
Model : Ok, I've updated the temperature to 71 degrees.
(Callback) : ADK triggers memory generation. No memories are extracted, because the user didn't share anything meaningful to persist.
Second turn
User : Actually, I prefer it to be warmer in the mornings.
(Tool Call) : ADK tries to fetch memories. Memory "I like the temperature 71 degrees" is retrieved.
Model : Ok, I've made the temperature warmer.
(Callback) : ADK triggers memory generation. The existing memory "I like the temperature 71 degrees" is updated to "I generally like the temperature to be 71 degrees, but I like it to be warmer in the mornings".
Note: There may be some variance in the agent and Memory Bank's responses depending on what models are used.
Clean up
To clean up all resources used in this project, you can
delete the Google Cloud project
you used for the quickstart.
Otherwise, you can delete the individual resources you created in this tutorial,
as follows:
Use the following code sample to delete the Vertex AI Agent Engine instance, which also deletes any Sessions or Memories belonging to that Vertex AI Agent Engine.
agent_engine . delete ( force = True )
Delete any locally created files.
What's next
Quickstart with Agent Engine SDK .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
