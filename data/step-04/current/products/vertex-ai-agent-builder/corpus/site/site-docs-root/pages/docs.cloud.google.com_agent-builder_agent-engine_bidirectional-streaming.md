---
title: "Bidirectional streaming with Vertex AI Agent Engine Runtime \_|\_ Vertex AI\
  \ Agent Builder \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/agent-builder/overview
source_metadata:
  url: https://docs.cloud.google.com/agent-builder/agent-engine/bidirectional-streaming
  title: "Bidirectional streaming with Vertex AI Agent Engine Runtime \_|\_ Vertex\
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
Bidirectional streaming with Vertex AI Agent Engine Runtime
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes how to use bidirectional streaming with Vertex AI Agent Engine Runtime.
To see an example of using bidirectional streaming with Agent Engine,
run the "Getting Started with Live API on Agent Engine" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
Overview
Bidirectional streaming provides a persistent, two-way communication channel between your application and the agent, letting you move beyond turn-based, request-response patterns. Bidirectional streaming works for use cases where your agent needs to process information and respond continuously, such as interacting with audio or video inputs with low latency.
Bidirectional streaming with Vertex AI Agent Engine Runtime supports interactive, real-time agent use cases and data exchange for multimodal live APIs. Bidirectional streaming is supported for all frameworks, and custom bidirectional streaming methods are available through registering custom methods . You can use bidirectional streaming to interact with Gemini Live API directly or using Agent Development Kit (ADK) on Vertex AI Agent Engine.
Deploying a remote agent with bidirectional query methods is well supported by the Google GenAI SDK . To deploy a
bidirectional-capable agent, set EXPERIMENTAL agent server mode when using the SDK or calling the Agent Engine API.
Develop an agent
While developing an agent, use the following steps to implement bidirectional streaming:
Define a bidirectional streaming query method
Test the bidirectional streaming query method
Register custom methods (optional)
Define a bidirectional streaming query method
To make your agent "bidi-capable", you need to define a bidi_stream_query method that asynchronously takes stream requests as input and outputs streaming responses. As an example, the following template extends the basic template to stream requests and responses and is deployable on Agent Engine:
import asyncio
from typing import Any , AsyncIterable
class BidiStreamingAgent ( StreamingAgent ):
async def bidi_stream_query (
self ,
request_queue : asyncio . Queue [ Any ]
) - > AsyncIterable [ Any ]:
from langchain.load.dump import dumpd
while True :
request = await request_queue . get ()
# This is just an illustration, you're free to use any termination mechanism.
if request == "END" :
break
for chunk in self . graph . stream ( request ):
yield dumpd ( chunk )
agent = BidiStreamingAgent (
model = model , # Required.
tools = [ get_exchange_rate ], # Optional.
project = "PROJECT_ID" ,
location = "LOCATION" ,
)
agent . set_up ()
Keep the following in mind when using the bidirectional streaming API:
asyncio.Queue : You can put any data type in this request queue to wait to be sent to the model API.
Maximum timeout : The maximum timeout for bidirectional streaming query is 10 minutes. If your agent requires longer processing times, consider breaking down the task into smaller bites and use session or memory to keep the state persisted.
Throttle content consumption : When consuming content from a bidirectional stream, it's important to manage the rate at which your agent processes incoming data. If your agent consumes data too slowly, it can lead to issues like increased latency or memory pressure on the server side. Implement mechanisms to actively pull data when your agent is ready to process it, and avoid blocking operations that could halt content consumption.
Throttle content generation : If you encounter back pressure issues (where the producer generates data faster than the consumer can process it), you should throttle your content generation rate. This can help prevent buffer overflows and ensure a smooth streaming experience.
Test the bidirectional streaming query method
You can test the bidirectional streaming query locally by calling the bidi_stream_query method and iterating through the results:
import asyncio
import pprint
import time
request_queue = asyncio . Queue ()
async def generate_input ():
# This is just an illustration, you're free to use any appropriate input generator.
request_queue . put_nowait (
{ "input" : "What is the exchange rate from US dolloars to Swedish currency" }
)
time . sleep ( 5 )
request_queue . put_nowait (
{ "input" : "What is the exchange rate from US dolloars to Euro currency" }
)
time . sleep ( 5 )
request_queue . put_nowait ( "END" )
async def print_query_result ():
async for chunk in agent . bidi_stream_query ( request_queue ):
pprint . pprint ( chunk , depth = 1 )
input_task = asyncio . create_task ( generate_input ())
output_task = asyncio . create_task ( print_query_result ())
await asyncio . gather ( input_task , output_task , return_exceptions = True )
The same bidirectional query connection can handle multiple requests and responses. For each new request from the queue, the following example generates a stream of chunks containing different information about the response:
{ 'actions' : [ ... ], 'messages' : [ ... ]}
{ 'messages' : [ ... ], 'steps' : [ ... ]}
{ 'messages' : [ ... ], 'output' : 'The exchange rate from US dollars to Swedish currency is 1 USD to 10.5751 SEK. \n ' }
{ 'actions' : [ ... ], 'messages' : [ ... ]}
{ 'messages' : [ ... ], 'steps' : [ ... ]}
{ 'messages' : [ ... ], 'output' : 'The exchange rate from US dollars to Euro currency is 1 USD to 0.86 EUR. \n ' }
(Optional) Register custom methods
Operations can be registered as either standard (represented by an empty string "" ), streaming ( stream ), or bidirectional streaming ( bidi_stream ) execution modes.
Note: Bidirectional streaming is in Preview and is only available on EXPERIMENTAL server mode.
from typing import AsyncIterable , Iterable
class CustomAgent ( BidiStreamingAgent ):
# ... same get_state and get_state_history function definition.
async def get_state_bidi_mode (
self ,
request_queue : asyncio . Queue [ Any ]
) - > AsyncIterable [ Any ]:
while True :
request = await request_queue . get ()
if request == "END" :
break
yield self . graph . get_state ( request ) . _asdict ()
def register_operations ( self ):
return {
# The list of synchrounous operations to be registered
"" : [ "query" , "get_state" ]
# The list of streaming operations to be registered
"stream" : [ "stream_query" , "get_state_history" ]
# The list of bidi streaming operations to be registered
"bidi_stream" : [ "bidi_stream_query" , "get_state_bidi_mode" ]
}
Deploy an agent
Once you develop your agent as live_agent , you can deploy the agent to Agent Engine by creating an Agent Engine instance.
Note that with the GenAI SDK, all deployment configurations (additional packages and customized resource controls) are assigned as a value of config when creating the Agent Engine instance.
Initialize the GenAI client:
import vertexai
from vertexai import types as vertexai_types
client = vertexai . Client ( project = PROJECT , location = LOCATION )
Deploy the agent to Agent Engine. Note that the EXPERIMENTAL agent_server_mode
is required for an agent that supports bidirectional streaming:
remote_live_agent = client . agent_engines . create (
agent = live_agent ,
config = {
"staging_bucket" : STAGING_BUCKET ,
"requirements" : [
"google-cloud-aiplatform[agent_engines,adk]==1.88.0" ,
"cloudpickle==3.0" ,
"websockets"
],
"agent_server_mode" : vertexai_types . AgentServerMode . EXPERIMENTAL ,
},
)
For information on the steps happening in the background during deployment, see Create an AgentEngine instance .
Get the agent resource ID:
remote_live_agent . api_resource . name
Use an agent
If you defined a bidi_stream_query operation when developing your agent, you can bidirectional stream query the agent asynchronously using the GenAI SDK for Python.
You can modify the following example with any data recognizable by your agent, using any applicable termination logic for input stream and output stream:
async with client . aio . live . agent_engines . connect (
agent_engine = remote_live_agent . api_resource . name ,
config = { "class_method" : "bidi_stream_query" }
) as connection :
while True :
#
input_str = input ( "Enter your question: " )
if input_str == "exit" :
break
await connection . send ({ "input" : input_str })
while True :
response = await connection . receive ()
print ( response )
if response [ "bidiStreamOutput" ][ "output" ] == "end of turn" :
break
Vertex AI Agent Engine Runtime streams responses as a sequence of iteratively generated objects. For example, a set of two responses in the first turn might look like the following:
Enter your next question: Weather in San Diego?
{'bidiStreamOutput': {'output': "FunctionCall: {'name': 'get_current_weather', 'args': {'location': 'San Diego'}}\n"}}
{'bidiStreamOutput': {'output': 'end of turn'}}
Enter your next question: exit
Use an Agent Development Kit agent
If you developed your agent using Agent Development Kit (ADK), you can use bidirectional streaming to interact with the Gemini Live API .
The following example creates a conversation agent that takes user text questions and receives Gemini Live API response audio data:
import numpy as np
from google.adk.agents.live_request_queue import LiveRequest
from google.adk.events import Event
from google.genai import types
def prepare_live_request ( input_text : str ) - > LiveRequest :
part = types . Part . from_text ( text = input_text )
content = types . Content ( parts = [ part ])
return LiveRequest ( content = content )
async with client . aio . live . agent_engines . connect (
agent_engine = remote_live_agent . api_resource . name ,
config = {
"class_method" : "bidi_stream_query" ,
"input" : { "input_str" : "hello" },
}) as connection :
first_req = True
while True :
input_text = input ( "Enter your question: " )
if input_text == "exit" :
break
if first_req :
await connection . send ({
"user_id" : USER_ID ,
"live_request" : prepare_live_request ( input_text ) . dict ()
})
first_req = False
else :
await connection . send ( prepare_live_request ( input_text ) . dict ())
audio_data = []
while True :
async def receive ():
return await connection . receive ()
receiving = asyncio . Task ( receive ())
done , _ = await asyncio . wait ([ receiving ])
if receiving not in done :
receiving . cancel ()
break
event = Event . model_validate ( receiving . result ()[ "bidiStreamOutput" ])
part = event . content and event . content . parts and event . content . parts [ 0 ]
if part . inline_data and part . inline_data . data :
chunk_data = part . inline_data . data
data = np . frombuffer ( chunk_data , dtype = np . int16 )
audio_data . append ( data )
else :
print ( part )
if audio_data :
concatenated_audio = np . concatenate ( audio_data )
display ( Audio ( concatenated_audio , rate = 24000 , autoplay = True ))
What's next
Learn more about the Gemini Live API .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
