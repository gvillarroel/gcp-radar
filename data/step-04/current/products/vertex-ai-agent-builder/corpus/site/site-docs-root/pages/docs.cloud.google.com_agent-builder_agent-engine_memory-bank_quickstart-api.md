---
title: "Quickstart with Vertex AI Agent Engine SDK \_|\_ Vertex AI Agent Builder \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/agent-builder/overview
source_metadata:
  url: https://docs.cloud.google.com/agent-builder/agent-engine/memory-bank/quickstart-api
  title: "Quickstart with Vertex AI Agent Engine SDK \_|\_ Vertex AI Agent Builder\
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
Quickstart with Vertex AI Agent Engine SDK
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial demonstrates how to make API calls directly to Vertex AI Agent Engine Sessions and Memory Bank using the Vertex AI Agent Engine SDK. Use the Vertex AI Agent Engine SDK if you don't want an agent framework to orchestrate calls for you, or you want to integrate Sessions and Memory Bank with agent frameworks other than Agent Development Kit (ADK).
For the quickstart using ADK, see Quickstart with Agent Development Kit .
This tutorial uses the following steps:
Create memories using the following options:
Generate memories using Vertex AI Agent Engine Memory Bank : Write sessions and events to Vertex AI Agent Engine Sessions as sources for Vertex AI Agent Engine Memory Bank to generate memories.
Upload memories directly : Write your own memories or have your agent build memories if you want full control over what information is persisted.
Retrieve memories .
Clean up .
To see an example of using Memory Bank with the Agent Engine SDK,
run the "Get started with Memory Bank" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
To see an example of using Memory Bank with LangGraph,
run the "Get started with Memory Bank - LangGraph" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
Before you begin
To complete the steps demonstrated in this tutorial, you must first follow the steps in Set up for Memory Bank .
Generate memories with Vertex AI Agent Engine Sessions
After setting up Vertex AI Agent Engine Sessions and Memory Bank, you can create sessions and append events to them. Memories are generated as facts from the user's conversation with the agent so that they're available for future user interactions. For more information, see Generate memories and Fetch memories .
Note: You can also provide the conversation history directly in the GenerateMemories payload using direct contents source .
Create a session with an opaque user ID. Any memories generated from this session are automatically keyed by the scope {"user_id": " USER_ID "} unless you explicitly provide a scope when generating memories.
import vertexai
client = vertexai . Client (
project = " PROJECT_ID " ,
location = " LOCATION "
)
# This assumes that you already have an Agent Engine instance. If you don't,
# you can create one using `agent_engine = client.agent_engines.create()`.
session = client . agent_engines . sessions . create (
# The name can be fetched using `agent_engine.api_resource.name`.
name = " AGENT_ENGINE_NAME " ,
user_id = " USER_ID "
)
Replace the following:
PROJECT_ID : Your project ID.
LOCATION : Your region. See the supported regions for Memory Bank.
AGENT_ENGINE_NAME : The name of the Vertex AI Agent Engine instance that you created or an existing Vertex AI Agent Engine instance. The name should be in the following format: projects/{your project}/locations/{your location}/reasoningEngine/{your reasoning engine} .
USER_ID : An identifier for your user. Any memories generated from this session are automatically keyed by the scope {"user_id": " USER_ID "} unless you explicitly provide a scope when generating memories.
Iteratively upload events to your session. Events can include any interactions between your user, agent, and tools. The ordered list of events represents your session's conversation history. This conversation history is used as the source material for generating memories for that particular user.
import datetime
client . agent_engines . sessions . events . append (
name = session . response . name ,
author = "user" , # Required by Sessions.
invocation_id = "1" , # Required by Sessions.
timestamp = datetime . datetime . now ( tz = datetime . timezone . utc ), # Required by Sessions.
config = {
"content" : {
"role" : "user" ,
"parts" : [{ "text" : "hello" }]
}
}
)
To generate memories from your conversation history, trigger a memory generation request for the session:
client . agent_engines . memories . generate (
name = agent_engine . api_resource . name ,
vertex_session_source = {
# `session` should have the format "projects/.../locations/.../reasoningEngines/.../sessions/...".
"session" : session . response . name
},
# Optional when using Agent Engine Sessions. Defaults to {"user_id": session.user_id}.
scope = SCOPE
)
Replace the following:
(Optional) SCOPE : A dictionary representing the scope of the generated memories, with a maximum of 5 key value pairs and no * characters. For example, {"session_id": "MY_SESSION"} . Only memories with the same scope are considered for consolidation. If not provided, {"user_id": session.user_id} is used.
Upload memories
As an alternative to generating memories using raw dialogue , you can upload memories or have your agents add them directly using GenerateMemories with pre-extracted facts . Rather than Memory Bank extracting information from your content, you provide the facts that should be stored about your user directly.
To ensure consistency with generated memories , try to write pre-extracted facts in the same perspective that you've configured for the given scope . By default, memories are generated in the first-person perspective (for example, I am a software engineer ).
client . agent_engines . memories . generate (
name = agent_engine . api_resource . name ,
direct_memories_source = { "direct_memories" : [{ "fact" : " FACT " }]},
scope = SCOPE
)
Replace the following:
FACT : The pre-extracted fact that should be consolidated with existing memories. You can provide up to 5 pre-extracted facts in a list like the following:
{ "direct_memories" : [{ "fact" : "fact 1" }, { "fact" : "fact 2" }]}
SCOPE : A dictionary, representing the scope of the generated memories. For example, {"session_id": "MY_SESSION"} . Only memories with the same scope are considered for consolidation.
Alternatively, you can use CreateMemory to upload memories without using Memory Bank for either memory extraction or consolidation.
Caution: Memories uploaded using CreateMemory won't be consolidated with existing memories, so you can end up with duplicated memories for the same scope. Created memories are available for similarity search and can be consolidated for future requests when generating memories .
memory = client . agent_engines . memories . create (
name = agent_engine . api_resource . name ,
fact = "This is a fact." ,
scope = { "user_id" : "123" }
)
"""
Returns an AgentEngineMemoryOperation containing the created Memory like:
AgentEngineMemoryOperation(
done=True,
metadata={
"@type': 'type.googleapis.com/google.cloud.aiplatform.v1beta1.CreateMemoryOperationMetadata",
"genericMetadata": {
"createTime": '2025-06-26T01:15:29.027360Z',
"updateTime": '2025-06-26T01:15:29.027360Z'
}
},
name="projects/.../locations/us-central1/reasoningEngines/.../memories/.../operations/...",
response=Memory(
create_time=datetime.datetime(2025, 6, 26, 1, 15, 29, 27360, tzinfo=TzInfo(UTC)),
fact="This is a fact.",
name="projects/.../locations/us-central1/reasoningEngines/.../memories/...",
scope={
"user_id": "123"
},
update_time=datetime.datetime(2025, 6, 26, 1, 15, 29, 27360, tzinfo=TzInfo(UTC))
)
)
"""
Retrieve and use memories
You can retrieve memories for your user and include them in your system instructions to give the LLM access to your personalized context.
For more information about retrieving memories using a scope-based method, see Fetch memories .
# Retrieve all memories for User ID 123.
retrieved_memories = list (
client . agent_engines . memories . retrieve (
name = agent_engine . api_resource . name ,
scope = { "user_id" : "123" }
)
)
You can use jinja to convert your structured memories into a prompt:
from jinja2 import Template
template = Template ( """
< MEMORIES >
Here is some information about the user:
{ % f or retrieved_memory in data %}* {{ retrieved_memory.memory.fact }}
{ % e ndfor %}</MEMORIES>
""" )
prompt = template . render ( data = retrieved_memories )
"""
Output:
< MEMORIES >
Here is some information about the user:
* This is a fact
< /MEMORIES >
"""
Remove memories
There are multiple ways to delete memories from your Memory Bank instance depending on how you want to select which memories should be removed.
Remove by resource name
If you know exactly which memory resource you want to remove, you can delete a specific memory using its resource name:
client . agent_engines . memories . delete (
name = MEMORY_NAME ,
config = {
# Set to false (default) if you want to delete the memory asynchronously.
"wait_for_completion" : True
}
)
Replace the following:
MEMORY_NAME : The name of the Memory to delete. The name should be in the following format: projects/{your project}/locations/{your location}/reasoningEngine/{your reasoning engine}/memories/{your memory} . You can find the Memory name by fetching memories .
Remove by criteria
You can use criteria-based deletion to remove one or more memories. Only memories that match the provided filters will be deleted. You must specify at least one of filter (applied to system fields) or filter_groups (applied to metadata fields).
operation = client . agent_engines . memories . purge (
name = agent_engine . api_resource . name ,
# Specify at least one of `filter` or `filter_groups`.
filter = " FILTER_STRING " ,
filter_groups = FILTER_GROUPS ,
# Set to false (default) if you want to stage but not execute the purge operation.
force = True ,
config = {
# Set to false (default) if you want to purge memories asynchronously.
"wait_for_completion" : True
}
)
Replace the following:
FILTER_STRING : A string using EBNF syntax for filtering against system fields. System fields include create_time , update_time , fact , and topics . For more information about filtering against system fields, see the Filter by metadata fields section on the Fetch memories page.
FILTER_GROUPS : A list of dictionaries or objects for filtering against memory metadata. For more information about filtering against metadata fields, see the Filter by system fields section on the Fetch memories page.
The operation will return a count of how many memories were purged (if force=True ) or would be purged if the operation was executed (if force=False ).
print ( operation . response . purge_count )
For example, you can purge all memories that belong to a scope for user_id "123":
operation = client . agent_engines . memories . purge (
name = agent_engine . api_resource . name ,
filter = "scope.user_id= \" 123 \" "
force = True
)
Remove by semantic meaning
Note: Expected behavior may vary depending on what memory topics and few-shot examples you have configured.
During memory generation , Memory Bank will decide whether to create, update, or delete memories based on the content of the newly extracted information and the existing memories. A memory may be deleted if the new information contradicts it or if the extracted content instructs Memory Bank to forget a subject (in the case of the EXPLICIT_INSTRUCTIONS memory topic ).
For example, the following request would delete existing memories that contain information about dietary preferences, if they exist for the given scope :
from google import genai
client . agent_engines . memories . generate (
name = agent_engine . api_resource . name ,
direct_contents_source = {
"events" : [{
"content" : genai . types . Content (
role = "user" ,
parts = [
genai . types . Part . from_text ( text = "Forget my dietary preferences." )
]
)
}]
},
scope = { ... }
)
Clean up
To clean up all resources used in this project, you can
delete the Google Cloud project
you used for the quickstart.
Otherwise, you can delete the individual resources you created in this tutorial,
as follows:
Use the following code sample to delete the Vertex AI Agent Engine instance, which also deletes any sessions or memories associated with the Vertex AI Agent Engine instance.
agent_engine . delete ( force = True )
Delete any locally created files.
What's next
Quickstart with Agent Development Kit .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
