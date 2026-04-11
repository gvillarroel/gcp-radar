---
title: "Develop an Agent Development Kit agent \_|\_ Vertex AI Agent Builder \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-builder/agent-engine/develop/adk
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity
source_metadata:
  url: https://docs.cloud.google.com/agent-builder/agent-engine/develop/adk
  title: "Develop an Agent Development Kit agent \_|\_ Vertex AI Agent Builder \_\
    |\_ Google Cloud Documentation"
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
Develop an Agent Development Kit agent
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to develop an agent using the Agent Development Kit template (the AdkApp class in the Vertex AI SDK for Python). The agent returns the exchange rate between two currencies on a specified date.
Use the following steps:
Define and configure a model
(Optional) Define and use a tool
(Optional) Manage sessions
(Optional) Manage memories
Before you begin
Make sure your environment is set up by following
the steps in Set up your environment .
Define and configure a model
Define the model version :
model = "gemini-2.0-flash"
(Optional) Configure the safety settings of the model. To learn more
about the options available for safety settings in Gemini, see
Configure safety attributes .
The following is an example of how you can configure the safety settings:
from google.genai import types
safety_settings = [
types . SafetySetting (
category = types . HarmCategory . HARM_CATEGORY_DANGEROUS_CONTENT ,
threshold = types . HarmBlockThreshold . OFF ,
),
]
(Optional) Specify content generation parameters :
from google.genai import types
generate_content_config = types . GenerateContentConfig (
safety_settings = safety_settings ,
temperature = 0.28 ,
max_output_tokens = 1000 ,
top_p = 0.95 ,
)
Create an AdkApp using the model configurations:
from google.adk.agents import Agent
from vertexai.agent_engines import AdkApp
agent = Agent (
model = model , # Required.
name = 'currency_exchange_agent' , # Required.
generate_content_config = generate_content_config , # Optional.
)
app = AdkApp ( agent = agent )
If you are running in an interactive environment, such as the terminal or a
Colab notebook, you can run a query using the AdkApp.async_stream_query method as
an intermediate testing step:
async for event in app . async_stream_query (
user_id = " USER_ID " , # Required
message = "What is the exchange rate from US dollars to Swedish currency?" ,
):
print ( event )
USER_ID : Choose your own user ID with a character limit of 128.
For example, user-123 .
The response is a Python dictionary similar to the following example:
{ 'actions' : { 'artifact_delta' : {},
'requested_auth_configs' : {},
'state_delta' : {}},
'author' : 'currency_exchange_agent' ,
'content' : { 'parts' : [{ 'text' : 'To provide you with the most accurate '
'exchange rate, I need to know the specific '
'currencies you \' re asking about. "Swedish '
'currency" could refer to: \n '
' \n '
'* **Swedish Krona (SEK):** This is the '
'official currency of Sweden. \n '
' \n '
"Please confirm if you're interested in the "
'exchange rate between USD and SEK. Once you '
'confirm, I can fetch the latest exchange rate '
'for you. \n ' }],
'role' : 'model' },
'id' : 'LYg7wg8G' ,
'invocation_id' : 'e-113ca547-0f19-4d50-9dde-f76cbc001dce' ,
'timestamp' : 1744166956.925927 }
(Optional) Define and use a tool
After you define your model, define the tools that your model uses for reasoning.
When you define your function, it's important to include comments that fully and clearly describe the function's parameters, what the function does, and what the function returns. This information is used by the model to determine which function to use. You must also test your function locally to confirm that it works.
Use the following code to define a function that returns an exchange rate:
def get_exchange_rate (
currency_from : str = "USD" ,
currency_to : str = "EUR" ,
currency_date : str = "latest" ,
):
"""Retrieves the exchange rate between two currencies on a specified date.
Uses the Frankfurter API (https://api.frankfurter.app/) to obtain
exchange rate data.
Args:
currency_from: The base currency (3-letter currency code).
Defaults to "USD" (US Dollar).
currency_to: The target currency (3-letter currency code).
Defaults to "EUR" (Euro).
currency_date: The date for which to retrieve the exchange rate.
Defaults to "latest" for the most recent exchange rate data.
Can be specified in YYYY-MM-DD format for historical rates.
Returns:
dict: A dictionary containing the exchange rate information.
Example: {"amount": 1.0, "base": "USD", "date": "2023-11-24",
"rates": {"EUR": 0.95534}}
"""
import requests
response = requests . get (
f "https://api.frankfurter.app/ { currency_date } " ,
params = { "from" : currency_from , "to" : currency_to },
)
return response . json ()
To test the function before you use it in your agent, run the following:
get_exchange_rate ( currency_from = "USD" , currency_to = "SEK" )
The response should be similar to the following:
{ 'amount' : 1.0 , 'base' : 'USD' , 'date' : '2025-04-03' , 'rates' : { 'SEK' : 9.6607 }}
To use the tool inside the AdkApp , add it to the list of tools under
the tools= argument:
from google.adk.agents import Agent
agent = Agent (
model = model , # Required.
name = 'currency_exchange_agent' , # Required.
tools = [ get_exchange_rate ], # Optional.
)
You can test the agent locally by performing test queries against it using the
AdkApp.async_stream_query method. Run the following command to test the agent locally using US dollars and Swedish Krona:
from vertexai.agent_engines import AdkApp
app = AdkApp ( agent = agent )
async for event in app . async_stream_query (
user_id = " USER_ID " ,
message = "What is the exchange rate from US dollars to SEK on 2025-04-03?" ,
):
print ( event )
where USER_ID is the user ID you defined. For example,
user-123 .
The response is a sequence of dictionaries that's similar to the following:
{ 'author' : 'currency_exchange_agent' ,
'content' : { 'parts' : [{ 'function_call' : { 'args' : { 'currency_date' : '2025-04-03' ,
'currency_from' : 'USD' ,
'currency_to' : 'SEK' },
'id' : 'adk-e39f3ba2-fa8c-4169-a63a-8e4c62b89818' ,
'name' : 'get_exchange_rate' }}],
'role' : 'model' },
'id' : 'zFyIaaif' ,
# ...
}
{ 'author' : 'currency_exchange_agent' ,
'content' : { 'parts' : [{ 'function_response' : { 'id' : 'adk-e39f3ba2-fa8c-4169-a63a-8e4c62b89818' ,
'name' : 'get_exchange_rate' ,
'response' : { 'amount' : 1.0 ,
'base' : 'USD' ,
'date' : '2025-04-03' ,
'rates' : { 'SEK' : 9.6607 }}}}],
'role' : 'user' },
'id' : 'u2YR4Uom' ,
# ...
}
{ 'author' : 'currency_exchange_agent' ,
'content' : { 'parts' : [{ 'text' : 'The exchange rate from USD to SEK on '
'2025-04-03 is 9.6607.' }],
'role' : 'model' },
'id' : 'q3jWA3wl' ,
# ...
}
(Optional) Manage sessions
AdkApp uses in-memory sessions when running locally and uses cloud-based managed sessions after you deploy the agent to Vertex AI Agent Engine. This section describes how to configure your ADK agent to work with managed sessions.
(Optional) Customize your sessions database
Note: If you use a custom in-memory session service, sessions might not stay in sync when you deploy the agent to Vertex AI Agent Engine. We only recommend customizing your database if you can synchronize the state across sessions in a deployed environment.
If you want to override the default managed session service with your own database, you can define a session_service_builder function as follows:
def session_service_builder ():
from google.adk.sessions import InMemorySessionService
return InMemorySessionService ()
Pass your database to AdkApp as session_service_builder= :
from vertexai.agent_engines import AdkApp
app = AdkApp (
agent = agent , # Required.
session_service_builder = session_service_builder , # Optional.
)
Use the agent with sessions
When you run the AdkApp locally, the following instructions use in-memory sessions.
To create a session for your agent, use the AdkApp.async_create_session method:
session = await app . async_create_session ( user_id = " USER_ID " )
print ( session )
The session is created as the dictionary representation of an
ADK session object .
To list sessions associated with your agent, use the AdkApp.async_list_sessions method:
await app . async_list_sessions ( user_id = " USER_ID " )
To get a particular session, use the AdkApp.async_get_session method::
session = await app . async_get_session ( user_id = " USER_ID " , session_id = " SESSION_ID " )
where
USER_ID is the user ID you defined. For example,
user-123 .
SESSION_ID is the ID for the particular session you want to retrieve.
To asynchronously query the agent, use the AdkApp.async_stream_query method:
async for event in app . async_stream_query (
user_id = " USER_ID " ,
session_id = SESSION_ID , # Optional. you can pass in the session_id when querying the agent
message = "What is the exchange rate from US dollars to Swedish currency on 2025-04-03?" ,
):
print ( event )
The agent might respond with a request for information like the following:
{ 'author' : 'currency_exchange_agent' ,
'content' : { 'parts' : [{ 'text' : 'I need to know the Swedish currency code to '
'provide you with the exchange rate.' }],
'role' : 'model' },
'id' : 'wIgZAtQ4' ,
#...
}
You can send a response (for example, "SEK" ) on behalf of
USER_ID within the session corresponding to session
by specifying:
async for event in app . async_stream_query (
user_id = " USER_ID " ,
session_id = session . id , # Optional. you can pass in the session_id when querying the agent
message = "SEK" ,
):
print ( event )
You should receive a continuation of the conversation like the following
sequence of dictionaries:
{ 'author' : 'currency_exchange_agent' ,
'content' : { 'parts' : [{ 'function_call' : { 'args' : { 'currency_date' : '2025-04-03' ,
'currency_from' : 'USD' ,
'currency_to' : 'SEK' },
'id' : 'adk-2b9230a6-4b92-4a1b-9a65-b708ff6c68b6' ,
'name' : 'get_exchange_rate' }}],
'role' : 'model' },
'id' : 'bOPHtzji' ,
# ...
}
{ 'author' : 'currency_exchange_agent' ,
'content' : { 'parts' : [{ 'function_response' : { 'id' : 'adk-2b9230a6-4b92-4a1b-9a65-b708ff6c68b6' ,
'name' : 'get_exchange_rate' ,
'response' : { 'amount' : 1.0 ,
'base' : 'USD' ,
'date' : '2025-04-03' ,
'rates' : { 'SEK' : 9.6607 }}}}],
'role' : 'user' },
'id' : '9AoDFmiL' ,
# ...
}
{ 'author' : 'currency_exchange_agent' ,
'content' : { 'parts' : [{ 'text' : 'The exchange rate from USD to SEK on '
'2025-04-03 is 1 USD to 9.6607 SEK.' }],
'role' : 'model' },
'id' : 'hmle7trT' ,
# ...
}
(Optional) Manage memories
By default, AdkApp
uses an in-memory implementation of agentic memory when running locally and uses
Vertex AI Agent Engine Memory Bank
after you deploy the agent to Vertex AI Agent Engine.
When developing your ADK agent, you can include a PreloadMemoryTool that
controls when the agent retrieves memories and how memories are included in the
prompt. The following example agent always retrieves memories at the start of each turn
and includes the memories in the system instruction:
from google.adk.agents import Agent
from google.adk.tools.preload_memory_tool import PreloadMemoryTool
from vertexai.agent_engines import AdkApp
agent = Agent (
model = "gemini-2.0-flash" ,
name = 'stateful_agent' ,
instruction = """You are a Vehicle Voice Agent, designed to assist users with information and in-vehicle actions.
1. **Direct Action:** If a user requests a specific vehicle function (e.g., "turn on the AC"), execute it immediately using the corresponding tool. You don't have the outcome of the actual tool execution, so provide a hypothetical tool execution outcome.
2. **Information Retrieval:** Respond concisely to general information requests with your own knowledge (e.g., restaurant recommendation).
3. **Clarity:** When necessary, try to seek clarification to better understand the user's needs and preference before taking an action.
4. **Brevity:** Limit responses to under 30 words.
""" ,
tools = [ PreloadMemoryTool ()],
)
app = AdkApp ( agent = agent )
(Optional) Customize your memory service
Note: If you use a custom in-memory memory service, memories might not stay in
sync when you deploy the agent to Vertex AI Agent Engine. We only
recommend customizing the memory service if you can synchronize the memories
across instances in a distributed setting when the agent is deployed.
If you want to override the default memory service, you can define a
memory_service_builder function that returns a BaseMemoryService as follows:
def memory_service_builder ():
from google.adk.memory import InMemoryMemoryService
return InMemoryMemoryService ()
Pass your database to AdkApp as memory_service_builder= :
from vertexai.agent_engines import AdkApp
app = AdkApp (
agent = agent , # Required.
memory_service_builder = memory_service_builder , # Optional.
)
Use the agent with memories
Test your ADK agent with memories:
Create a session and interact with the agent:
initial_session = await app . async_create_session ( user_id = " USER_ID " )
async for event in app . async_stream_query (
user_id = " USER_ID " ,
session_id = initial_session . id ,
message = "Can you update the temperature to my preferred temperature?" ,
):
print ( event )
Since there are no available memories during the first session and the agent
does not know any user preferences, the agent may reply with a response
such as "What is your preferred temperature?" You can respond with the following
command:
async for event in app . async_stream_query (
user_id = " USER_ID " ,
session_id = initial_session . id ,
message = "I like it at 71 degrees" ,
):
print ( event )
The agent might return with a response such as "Setting the temperature to 71
degrees Fahrenheit. Temperature successfully changed." The agent's response may
vary depending on the model you used.
Generate memories from the session. To store information from the session for
use in future sessions, use the async_add_session_to_memory method:
await app . async_add_session_to_memory ( session = initial_session )
Test that the agent has retained memory of the session (using
PreloadMemoryTool ) by creating a new session and prompting the agent:
new_session = await app . async_create_session ( user_id = " USER_ID " )
async for event in app . async_stream_query (
user_id = " USER_ID " ,
session_id = initial_session . id ,
message = "Fix the temperature!" ,
):
print ( event )
The agent might return a response such as "setting temperature to 71 degrees. Is
that correct?" The agent's response may vary depending on the model and memory
service provider you used.
Use the async_search_memory method
to display the agent's memories:
response = await app . async_search_memory (
user_id = " USER_ID " ,
query = "Fix the temperature!" ,
)
print ( response )
What's next
Sessions overview
Memory Bank overview
Use an Agent Development Kit agent .
Evaluate an agent .
Deploy an agent .
Troubleshoot developing an agent .
Get support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
